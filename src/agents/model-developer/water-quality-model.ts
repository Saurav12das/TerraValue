/**
 * Water Quality Prediction Model
 *
 * Predicts nutrient leaching, runoff, and sediment loss based on:
 *  - Soil properties (texture, permeability, slope)
 *  - Management practices (tillage, cover crops, nutrient strategy)
 *  - Climate (precipitation intensity, seasonal patterns)
 *
 * Scientific basis:
 *  - USLE/RUSLE for erosion estimation
 *  - NRCS curve number method concepts
 *  - EPA nutrient loading models
 *  - SWAT model simplified relationships
 *
 * In production, would integrate with SWAT, APEX, or EPIC models.
 */

import { WaterQualityPrediction, ResearcherOutput } from '../types';
import { ScenarioInput } from '../../data/scenarios';

/* ──────────── Nitrogen leaching risk factors ──────────── */

const N_LEACHING_BASE: Record<string, number> = {
  synthetic_dominant: 55,  // High baseline N leaching risk
  balanced: 35,            // Moderate
  manure_integrated: 30,   // Lower mineral N, but watch timing
};

const TILLAGE_N_EFFECT: Record<string, number> = {
  conventional: 5,    // More soil disturbance can increase mineralization
  reduced: -5,        // Some reduction
  no_till: -12,       // Significant reduction in preferential flow paths
};

const COVER_N_EFFECT: Record<string, number> = {
  none: 10,           // No N scavenging between crops
  seasonal: -12,      // Catch crop captures residual N
  multi_species: -20, // Diverse root systems capture more N
};

/* ──────────── Phosphorus runoff risk factors ──────────── */

const P_RUNOFF_BASE: Record<string, number> = {
  synthetic_dominant: 40,
  balanced: 30,
  manure_integrated: 45,  // Surface-applied manure can increase P runoff
};

const TILLAGE_P_EFFECT: Record<string, number> = {
  conventional: 8,    // Exposed soil → more erosion-bound P
  reduced: -2,
  no_till: -10,       // Surface residue protects, but surface P can increase
};

const COVER_P_EFFECT: Record<string, number> = {
  none: 8,
  seasonal: -8,
  multi_species: -15,
};

/* ──────────── USLE-simplified erosion estimation ──────────── */

/**
 * Simplified RUSLE sediment loss.
 * RUSLE: A = R × K × LS × C × P
 */
function estimateSedimentLoss(
  annualPrecipMm: number,
  slopeRisk: number,
  tillage: string,
  coverCrop: string,
  clayPct: number,
  siltPct: number,
): number {
  // R factor (rainfall erosivity) — simplified from annual precip
  const R = annualPrecipMm * 0.04; // rough MJ·mm/(ha·h·yr)

  // K factor (soil erodibility) — based on texture
  // Silt-rich soils are most erodible
  const K = 0.01 + (siltPct / 100) * 0.05 - (clayPct / 100) * 0.01;

  // LS factor (slope length & steepness)
  const slopePercent = [1, 3, 6, 10, 16][slopeRisk - 1] ?? 6;
  const LS = 0.3 + slopePercent * 0.15;

  // C factor (cover management)
  const C_TILLAGE: Record<string, number> = {
    conventional: 0.35,
    reduced: 0.20,
    no_till: 0.08,
  };
  const C_COVER: Record<string, number> = {
    none: 1.0,
    seasonal: 0.55,
    multi_species: 0.30,
  };
  const C = (C_TILLAGE[tillage] ?? 0.25) * (C_COVER[coverCrop] ?? 0.7);

  // P factor (practice support) — simplified
  const P = tillage === 'conventional' ? 1.0 : 0.75;

  // A = R × K × LS × C × P (tonnes/ha/yr)
  return Math.round(R * K * LS * C * P * 100) / 100;
}

/* ──────────── Main prediction ──────────── */

export function predictWaterQuality(
  research: ResearcherOutput,
  input: ScenarioInput,
): WaterQualityPrediction {
  const weather = research.weather;
  const topLayer = research.soilProfile.layers[0];

  // Nitrogen leaching risk (0-100)
  let nRisk = N_LEACHING_BASE[input.nutrient] ?? 40;
  nRisk += TILLAGE_N_EFFECT[input.tillage] ?? 0;
  nRisk += COVER_N_EFFECT[input.coverCrop] ?? 0;

  // Soil texture modifier: sandy soils leach more
  const sandModifier = (topLayer.sand - 40) * 0.25;
  nRisk += sandModifier;

  // High precip increases leaching
  const precipModifier = (weather.annualPrecipMm - 800) * 0.005;
  nRisk += precipModifier;

  // Rotation diversity reduces risk (diverse root systems, variable N demand)
  nRisk -= (input.rotationDiversity - 1) * 3;

  nRisk = Math.max(0, Math.min(100, Math.round(nRisk)));

  // Phosphorus runoff risk (0-100)
  let pRisk = P_RUNOFF_BASE[input.nutrient] ?? 35;
  pRisk += TILLAGE_P_EFFECT[input.tillage] ?? 0;
  pRisk += COVER_P_EFFECT[input.coverCrop] ?? 0;

  // Slope increases P runoff substantially
  pRisk += input.slopeRisk * 4;

  // Clay soils hold P better but erode more P when they do erode
  pRisk += (topLayer.clay > 35 ? 5 : -3);

  pRisk = Math.max(0, Math.min(100, Math.round(pRisk)));

  // Sediment loss (RUSLE-simplified)
  const sedimentLoss = estimateSedimentLoss(
    weather.annualPrecipMm,
    input.slopeRisk,
    input.tillage,
    input.coverCrop,
    topLayer.clay,
    topLayer.silt,
  );

  // Overall water quality score (inverse of combined risk)
  const qualityScore = Math.round(
    100 - (nRisk * 0.35 + pRisk * 0.30 + Math.min(100, sedimentLoss * 5) * 0.35)
  );

  // Nutrient reduction vs conventional baseline
  const conventionalNRisk = N_LEACHING_BASE.synthetic_dominant + TILLAGE_N_EFFECT.conventional + COVER_N_EFFECT.none + sandModifier + precipModifier;
  const nutrientReductionPct = Math.round(
    Math.max(0, ((conventionalNRisk - nRisk) / Math.max(1, conventionalNRisk)) * 100)
  );

  // Water quality payment potential (USDA EQIP-style, $/ha/yr)
  const paymentPotential = Math.round(
    Math.max(0, qualityScore - 40) * 1.8
  );

  // Drivers
  const drivers: string[] = [];

  if (input.coverCrop === 'multi_species') {
    drivers.push('Multi-species cover crops significantly reduce N leaching and P runoff');
  } else if (input.coverCrop === 'seasonal') {
    drivers.push('Seasonal cover crop captures residual nitrogen between cash crops');
  } else {
    drivers.push('No cover crops — elevated nutrient leaching between growing seasons');
  }

  if (input.tillage === 'no_till') {
    drivers.push('No-till reduces erosion by 70-80% vs conventional tillage');
  } else if (input.tillage === 'conventional') {
    drivers.push('Conventional tillage exposes soil to erosion and increases nutrient loss');
  }

  if (sedimentLoss > 5) {
    drivers.push(`High sediment loss (${sedimentLoss} t/ha/yr) — slope and tillage are key factors`);
  } else if (sedimentLoss < 2) {
    drivers.push(`Low sediment loss (${sedimentLoss} t/ha/yr) — good erosion control`);
  }

  if (topLayer.sand > 50) {
    drivers.push(`Sandy soil (${topLayer.sand}% sand) increases nitrogen leaching vulnerability`);
  }

  drivers.push(`Slope risk level ${input.slopeRisk}/5 — ${input.slopeRisk >= 4 ? 'significant' : input.slopeRisk >= 2 ? 'moderate' : 'minimal'} erosion potential`);

  return {
    nitrogenLeachingRisk: nRisk,
    phosphorusRunoffRisk: pRisk,
    sedimentLoss,
    qualityScore: Math.max(0, Math.min(100, qualityScore)),
    nutrientReductionPct,
    paymentPotential,
    drivers,
  };
}
