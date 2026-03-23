/**
 * Water Quantity Prediction Model
 *
 * Predicts water balance, storage, and drought resilience based on:
 *  - Soil water holding capacity (from soil profile)
 *  - Climate water balance (precipitation vs. evapotranspiration)
 *  - Management effects on infiltration and soil structure
 *
 * Scientific basis:
 *  - NRCS Curve Number method for runoff estimation
 *  - Soil water balance modeling (P - ET - Runoff - Deep drainage)
 *  - Pedotransfer functions for hydraulic properties
 *  - Published data on management effects on infiltration rates
 *
 * In production, would use DSSAT, APSIM, or HYDRUS models.
 */

import { WaterQuantityPrediction, ResearcherOutput } from '../types';
import { ScenarioInput } from '../../data/scenarios';

/* ──────────── Management effects on infiltration ──────────── */

/** Tillage effect on infiltration rate multiplier */
const TILLAGE_INFILTRATION: Record<string, number> = {
  conventional: 0.70,   // Compaction, surface crusting
  reduced: 0.90,        // Some improvement
  no_till: 1.25,        // Biopores, surface residue, no crust
};

/** Cover crop effect on infiltration and water use */
const COVER_INFILTRATION: Record<string, number> = {
  none: 0.85,
  seasonal: 1.05,       // Root channels improve infiltration
  multi_species: 1.20,  // Diverse root architecture, max infiltration
};

/** Cover crop water use (mm/growing season) — they do use some water */
const COVER_WATER_USE: Record<string, number> = {
  none: 0,
  seasonal: 40,
  multi_species: 65,
};

/* ──────────── AWC improvement from management ──────────── */

/**
 * Estimate improvement in available water capacity from management.
 * Each 1% increase in SOM ≈ 1-2% increase in AWC (volumetric).
 */
function managementAWCImprovement(
  tillage: string,
  coverCrop: string,
  nutrient: string,
  rotationDiversity: number,
): number {
  let improvementPct = 0;

  // No-till builds soil structure
  if (tillage === 'no_till') improvementPct += 12;
  else if (tillage === 'reduced') improvementPct += 5;

  // Cover crops add organic matter
  if (coverCrop === 'multi_species') improvementPct += 15;
  else if (coverCrop === 'seasonal') improvementPct += 8;

  // Manure adds organic matter
  if (nutrient === 'manure_integrated') improvementPct += 8;
  else if (nutrient === 'balanced') improvementPct += 3;

  // Diverse rotations improve soil biology
  improvementPct += (rotationDiversity - 1) * 3;

  return improvementPct;
}

/* ──────────── Curve Number estimation ──────────── */

/**
 * Estimate NRCS Curve Number for the scenario.
 * CN determines what fraction of rainfall becomes runoff.
 */
function estimateCurveNumber(
  drainageClass: string,
  tillage: string,
  coverCrop: string,
): number {
  // Base CN by soil hydrologic group (approximated from drainage class)
  const baseCN: Record<string, number> = {
    well_drained: 68,              // Group A/B
    moderately_well_drained: 75,   // Group B/C
    somewhat_poorly_drained: 82,   // Group C
    poorly_drained: 88,            // Group C/D
  };

  let cn = baseCN[drainageClass] ?? 76;

  // Management adjustments
  if (tillage === 'no_till') cn -= 6;
  else if (tillage === 'reduced') cn -= 3;

  if (coverCrop === 'multi_species') cn -= 8;
  else if (coverCrop === 'seasonal') cn -= 4;

  return Math.max(40, Math.min(98, cn));
}

/**
 * Estimate annual runoff from CN and precipitation.
 * Simplified SCS method: Q = (P - 0.2S)² / (P + 0.8S) where S = 25400/CN - 254
 */
function estimateAnnualRunoff(cn: number, annualPrecipMm: number): number {
  const S = 25400 / cn - 254;
  // Apply to monthly precipitation and sum
  // Simplified: use annual with storm distribution factor
  const effectivePrecip = annualPrecipMm * 0.7; // ~70% falls as runoff-producing events
  if (effectivePrecip <= 0.2 * S) return 0;
  const Q = Math.pow(effectivePrecip - 0.2 * S, 2) / (effectivePrecip + 0.8 * S);
  return Math.round(Q);
}

/* ──────────── Main prediction ──────────── */

export function predictWaterQuantity(
  research: ResearcherOutput,
  input: ScenarioInput,
): WaterQuantityPrediction {
  const weather = research.weather;
  const profile = research.soilProfile;
  const topLayer = profile.layers[0];

  // Effective precipitation after infiltration
  const cn = estimateCurveNumber(profile.drainageClass, input.tillage, input.coverCrop);
  const annualRunoff = estimateAnnualRunoff(cn, weather.annualPrecipMm);

  // Infiltration modification
  const infiltrationMult = (TILLAGE_INFILTRATION[input.tillage] ?? 0.85) *
    (COVER_INFILTRATION[input.coverCrop] ?? 0.90);

  // Water use by cover crops
  const coverWaterUse = COVER_WATER_USE[input.coverCrop] ?? 0;

  // Water balance: P - ET - Runoff (simplified annual)
  const effectiveInfiltration = (weather.annualPrecipMm - annualRunoff) * Math.min(1.3, infiltrationMult);
  const waterBalance = Math.round(effectiveInfiltration - weather.annualPetMm - coverWaterUse);

  // Rainfall capture efficiency
  const rainfallCaptureEfficiency = Math.round(
    ((weather.annualPrecipMm - annualRunoff) / Math.max(1, weather.annualPrecipMm)) * 100
  );

  // AWC improvement
  const waterHoldingImprovement = managementAWCImprovement(
    input.tillage, input.coverCrop, input.nutrient, input.rotationDiversity,
  );

  // Irrigation savings (only if irrigated)
  let irrigationSavings = 0;
  if (input.irrigated) {
    // Better water holding = less irrigation needed
    irrigationSavings = Math.round(waterHoldingImprovement * 2.5); // mm/yr saved
    // Cap at realistic values
    irrigationSavings = Math.min(150, irrigationSavings);
  }

  // Drought resilience score (0-100)
  // Factors: AWC, infiltration, water balance, management
  const baseResilience = 35;
  const awcContribution = topLayer.awc * 80; // 0.10-0.24 → 8-19 points
  const improvementContribution = waterHoldingImprovement * 0.6;
  const infiltrationContribution = (infiltrationMult - 0.7) * 25;
  const balanceContribution = Math.max(-15, Math.min(15, waterBalance * 0.02));
  const irrigationContribution = input.irrigated ? 10 : 0;

  const droughtResilience = Math.max(0, Math.min(100, Math.round(
    baseResilience + awcContribution + improvementContribution +
    infiltrationContribution + balanceContribution + irrigationContribution
  )));

  // Overall water quantity score
  const quantityScore = Math.max(0, Math.min(100, Math.round(
    rainfallCaptureEfficiency * 0.3 +
    droughtResilience * 0.4 +
    Math.min(100, 50 + waterHoldingImprovement) * 0.3
  )));

  // Drivers
  const drivers: string[] = [];

  if (input.tillage === 'no_till') {
    drivers.push('No-till creates biopores and maintains surface residue — infiltration +25%');
  } else if (input.tillage === 'conventional') {
    drivers.push('Conventional tillage reduces infiltration through compaction and crusting');
  }

  if (input.coverCrop === 'multi_species') {
    drivers.push('Multi-species cover crops: diverse root channels improve water capture, but use ~65mm water');
  } else if (input.coverCrop === 'seasonal') {
    drivers.push('Seasonal cover crop improves soil structure and water holding capacity');
  }

  drivers.push(`Soil AWC: ${topLayer.awc} cm/cm — ${topLayer.awc > 0.18 ? 'high' : topLayer.awc > 0.14 ? 'moderate' : 'limited'} natural water storage`);
  drivers.push(`Management improves water holding by ~${waterHoldingImprovement}%`);
  drivers.push(`Curve Number ${cn} → ~${annualRunoff}mm annual runoff (of ${weather.annualPrecipMm}mm precip)`);

  if (input.irrigated && irrigationSavings > 0) {
    drivers.push(`Improved soil health could save ~${irrigationSavings}mm irrigation water/year`);
  }

  const ppetRatio = weather.annualPrecipMm / Math.max(1, weather.annualPetMm);
  if (ppetRatio < 0.6) {
    drivers.push(`Water-limited climate (P/PET = ${ppetRatio.toFixed(2)}) — water conservation is critical`);
  } else if (ppetRatio > 1.2) {
    drivers.push(`Surplus moisture (P/PET = ${ppetRatio.toFixed(2)}) — drainage management important`);
  }

  return {
    waterBalance,
    rainfallCaptureEfficiency,
    waterHoldingImprovement,
    irrigationSavings,
    droughtResilience,
    quantityScore,
    drivers,
  };
}
