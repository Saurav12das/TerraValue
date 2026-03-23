/**
 * Soil Carbon Prediction Model
 *
 * Predicts soil organic carbon dynamics based on:
 *  - Current SOC stock (from soil profile)
 *  - Management practices (tillage, cover crops, nutrient strategy, rotation)
 *  - Climate (temperature, precipitation → decomposition rates)
 *  - Soil properties (clay content → carbon stabilization)
 *
 * Scientific basis:
 *  - RothC model concepts (decomposition as f(temp, moisture, clay))
 *  - IPCC Tier 2 stock change factors for management
 *  - Century model C input estimation logic
 *
 * In production, this would use calibrated RothC/Century/DayCent models
 * or ML surrogates trained on long-term field trial data.
 */

import { SoilCarbonPrediction, ResearcherOutput } from '../types';
import { ScenarioInput } from '../../data/scenarios';
import { estimateSOCStock } from '../researcher/soil-database';

/* ──────────── IPCC-style management stock change factors ──────────── */

/** Tillage factor (F_tillage): fraction of baseline C maintained */
const TILLAGE_FACTOR: Record<string, number> = {
  conventional: 1.0,    // baseline
  reduced: 1.08,        // 8% improvement
  no_till: 1.16,        // 16% improvement (IPCC default ~1.10-1.22)
};

/** Cover crop C input factor */
const COVER_CROP_FACTOR: Record<string, number> = {
  none: 0.0,            // no additional C input
  seasonal: 0.35,       // 0.35 t C/ha/yr additional input
  multi_species: 0.65,  // 0.65 t C/ha/yr additional input
};

/** Nutrient management effect on decomposition / C retention */
const NUTRIENT_FACTOR: Record<string, number> = {
  synthetic_dominant: -0.05,  // slight net loss due to priming
  balanced: 0.10,             // modest improvement
  manure_integrated: 0.25,    // direct C addition from manure
};

/* ──────────── Climate modifiers ──────────── */

/**
 * Temperature decomposition modifier (RothC-inspired).
 * Higher temperature → faster decomposition → harder to accumulate.
 * Returns multiplier on sequestration rate (higher = more favorable).
 */
function temperatureModifier(annualMeanTempC: number): number {
  // Optimal accumulation around 8-12°C; faster decomposition above
  if (annualMeanTempC <= 5) return 0.85;  // cold — slow inputs too
  if (annualMeanTempC <= 10) return 1.0;  // optimal accumulation zone
  if (annualMeanTempC <= 15) return 0.92;
  if (annualMeanTempC <= 20) return 0.80;
  if (annualMeanTempC <= 25) return 0.65;
  return 0.55; // hot — rapid decomposition
}

/**
 * Moisture modifier based on P/PET ratio.
 * Moderate moisture is optimal; too wet or too dry limits C cycling.
 */
function moistureModifier(precipMm: number, petMm: number): number {
  const ratio = precipMm / Math.max(petMm, 1);
  if (ratio < 0.3) return 0.50;  // arid
  if (ratio < 0.6) return 0.75;  // semi-arid
  if (ratio < 1.0) return 1.0;   // sub-humid (optimal)
  if (ratio < 1.5) return 0.95;  // humid
  return 0.85; // very wet — anaerobic losses
}

/**
 * Clay content modifier — higher clay stabilizes more C.
 * Based on Hassink (1997) protective capacity concept.
 */
function clayModifier(clayPct: number): number {
  // Each % clay adds ~0.004 stabilization effect
  return 0.7 + Math.min(0.5, clayPct * 0.012);
}

/* ──────────── Main prediction ──────────── */

export function predictSoilCarbon(
  research: ResearcherOutput,
  input: ScenarioInput
): SoilCarbonPrediction {
  const profile = research.soilProfile;
  const weather = research.weather;
  const topLayer = profile.layers[0];

  // Current SOC stock (0-30cm)
  const currentStock = estimateSOCStock(profile, 30);

  // Base sequestration potential from management
  const tillageFactor = TILLAGE_FACTOR[input.tillage] ?? 1.0;
  const coverCropInput = COVER_CROP_FACTOR[input.coverCrop] ?? 0.0;
  const nutrientEffect = NUTRIENT_FACTOR[input.nutrient] ?? 0.0;

  // Rotation diversity bonus (each additional crop in rotation adds C input diversity)
  const rotationBonus = (input.rotationDiversity - 1) * 0.08; // 0 to 0.32 t C/ha/yr

  // Climate modifiers
  const tempMod = temperatureModifier(weather.annualMeanTempC);
  const moistMod = moistureModifier(weather.annualPrecipMm, weather.annualPetMm);
  const clayMod = clayModifier(topLayer.clay);

  // SOM feedback: soils with low OC have more room to accumulate
  const somGapFactor = Math.max(0.2, 1 - (topLayer.organicCarbon / 5.0));

  // Net annual sequestration rate (t C/ha/yr)
  // Base rate from tillage change + cover crop inputs + nutrient effect + rotation
  const baseRate = (tillageFactor - 1.0) * currentStock * 0.05 // tillage effect on existing stock
    + coverCropInput
    + nutrientEffect
    + rotationBonus;

  const annualSequestrationRate = Math.round(
    Math.max(-0.5, baseRate * tempMod * moistMod * clayMod * somGapFactor) * 100
  ) / 100;

  // Project 10-year stock
  // Diminishing returns: each year accumulates slightly less
  let projectedStock = currentStock;
  for (let year = 1; year <= 10; year++) {
    const yearRate = annualSequestrationRate * (1 - (year - 1) * 0.03); // 3% diminishing per year
    projectedStock += yearRate;
  }
  projectedStock = Math.round(projectedStock * 10) / 10;

  // CO₂ equivalent: 1 tonne C = 3.667 tonnes CO₂
  const co2EquivalentPerYear = Math.round(annualSequestrationRate * 3.667 * 100) / 100;

  // Carbon credit value: voluntary market ~$25-50/tonne CO₂
  const creditPricePerTonneCO2 = 35;
  const carbonCreditValue = Math.round(Math.max(0, co2EquivalentPerYear) * creditPricePerTonneCO2 * 100) / 100;

  // Confidence based on data quality indicators
  const confidence = Math.round(
    (0.5 + clayMod * 0.2 + tempMod * 0.15 + moistMod * 0.15) * 100
  ) / 100;

  // Build driver explanations
  const drivers: string[] = [];
  if (input.tillage === 'no_till') drivers.push('No-till preserves soil structure and reduces C loss (+16% stock retention)');
  else if (input.tillage === 'reduced') drivers.push('Reduced tillage moderately improves C retention (+8%)');
  else drivers.push('Conventional tillage accelerates organic matter decomposition');

  if (input.coverCrop === 'multi_species') drivers.push(`Multi-species cover crops add ~${coverCropInput} t C/ha/yr`);
  else if (input.coverCrop === 'seasonal') drivers.push(`Seasonal cover crop adds ~${coverCropInput} t C/ha/yr`);
  else drivers.push('No cover crops — limited C input between cash crops');

  if (input.nutrient === 'manure_integrated') drivers.push('Manure integration directly adds organic carbon to soil');
  else if (input.nutrient === 'balanced') drivers.push('Balanced nutrient strategy supports moderate C retention');

  drivers.push(`Clay content (${topLayer.clay}%) ${topLayer.clay > 25 ? 'enhances' : 'limits'} carbon stabilization`);
  drivers.push(`Climate: MAT ${weather.annualMeanTempC}°C — ${weather.annualMeanTempC > 15 ? 'accelerates decomposition' : 'favorable for accumulation'}`);

  return {
    currentStock,
    projectedStock10yr: projectedStock,
    annualSequestrationRate,
    co2EquivalentPerYear,
    carbonCreditValue,
    confidence: Math.min(1, Math.max(0, confidence)),
    drivers,
  };
}
