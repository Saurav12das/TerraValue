/**
 * TerraValue MVP Scoring Engine
 *
 * DEMO-ONLY PLACEHOLDER LOGIC
 * This module uses transparent, relative-weight scoring to demonstrate
 * the product interaction model. All weights and formulas are illustrative
 * and will be replaced with validated scientific models in future phases.
 *
 * Structure:
 *  1. Management choice weights
 *  2. Sub-system score calculations (carbon, water, biodiversity, resilience, economics)
 *  3. Composite TerraValue Score
 *  4. Placeholder ecosystem value estimation (USD/acre)
 */

import { ScenarioInput } from '../../data/scenarios';

/* ──────────────────────────────── Types ──────────────────────────────── */

export type ScoreBreakdown = {
  carbon: number;
  water: number;
  biodiversity: number;
  resilience: number;
  economics: number;
  terraValueScore: number;
  ecosystemValuePotentialUsdAcre: number;
  /** Per-module detail strings for UI display */
  details: {
    carbon: string[];
    water: string[];
    biodiversity: string[];
    resilience: string[];
    economics: string[];
  };
  /** Monetization opportunity estimates (demo placeholder) */
  monetization: {
    carbonCredits: number;
    waterIncentives: number;
    biodiversityContracts: number;
    sustainabilityPremium: number;
    total: number;
  };
};

/* ──────────────────────────────── Weight Tables ──────────────────────────────── */

/** DEMO: Relative effect of tillage on each sub-system */
const TILLAGE_WEIGHTS = {
  conventional: { carbon: -12, water: -8, biodiversity: -6, resilience: -8, economics: 5 },
  reduced:      { carbon:  10, water:  6, biodiversity:  4, resilience:  5, economics: 2 },
  no_till:      { carbon:  22, water: 14, biodiversity:  8, resilience: 10, economics: -2 },
} as const;

/** DEMO: Relative effect of cover crop strategy */
const COVER_WEIGHTS = {
  none:          { carbon:  -8, water: -10, biodiversity: -12, resilience: -6, economics: 4 },
  seasonal:      { carbon:  10, water:  12, biodiversity:   8, resilience:  6, economics: -1 },
  multi_species: { carbon:  20, water:  18, biodiversity:  20, resilience: 12, economics: -3 },
} as const;

/** DEMO: Relative effect of nutrient management */
const NUTRIENT_WEIGHTS = {
  synthetic_dominant: { carbon: -6, water: -12, biodiversity: -4, resilience: -2, economics:  6 },
  balanced:           { carbon:  6, water:   8, biodiversity:  4, resilience:  4, economics:  2 },
  manure_integrated:  { carbon: 16, water:   6, biodiversity:  8, resilience:  8, economics: -2 },
} as const;

/* ──────────────────────────────── Scoring ──────────────────────────────── */

export function scoreScenario(input: ScenarioInput): ScoreBreakdown {
  const t = TILLAGE_WEIGHTS[input.tillage];
  const c = COVER_WEIGHTS[input.coverCrop];
  const n = NUTRIENT_WEIGHTS[input.nutrient];

  // Rotation diversity bonus (1–5 scale, each point adds value)
  const rotBonus = input.rotationDiversity * 4;

  // SOM contribution (each % adds ~5 points to carbon, smaller to others)
  const somFactor = input.soilOrganicMatter;

  // Slope penalty on water
  const slopePenalty = input.slopeRisk * 4;

  // Irrigation mild bonus to resilience
  const irrigBonus = input.irrigated ? 6 : 0;

  // ── Sub-system scores (base 50, clamped 0–100) ──
  const carbon = clamp(50 + t.carbon + c.carbon + n.carbon + Math.round(somFactor * 5) + rotBonus * 0.5);
  const water = clamp(48 + t.water + c.water + n.water - slopePenalty + rotBonus * 0.3);
  const biodiversity = clamp(40 + t.biodiversity + c.biodiversity + n.biodiversity + rotBonus * 1.2);
  const resilience = clamp(45 + t.resilience + c.resilience + n.resilience + rotBonus * 0.8 + irrigBonus);
  const economics = clamp(55 + t.economics + c.economics + n.economics + rotBonus * 0.4);

  // ── Composite score (weighted average) ──
  // Weights reflect TerraValue's multi-dimensional valuation thesis
  const weights = { carbon: 0.25, water: 0.20, biodiversity: 0.20, resilience: 0.15, economics: 0.20 };
  const terraValueScore = Math.round(
    carbon * weights.carbon +
    water * weights.water +
    biodiversity * weights.biodiversity +
    resilience * weights.resilience +
    economics * weights.economics
  );

  // ── Ecosystem value estimate (placeholder USD/acre/year) ──
  const ecosystemValuePotentialUsdAcre = Math.round(
    (carbon * 1.1 + water * 0.85 + biodiversity * 0.9 + resilience * 0.6 + economics * 0.75) * 1.8
  );

  // ── Monetization breakdown (demo) ──
  const monetization = {
    carbonCredits: Math.round(carbon * 0.55),
    waterIncentives: Math.round(water * 0.40),
    biodiversityContracts: Math.round(biodiversity * 0.35),
    sustainabilityPremium: Math.round((terraValueScore / 100) * 28),
    total: 0,
  };
  monetization.total = monetization.carbonCredits + monetization.waterIncentives + monetization.biodiversityContracts + monetization.sustainabilityPremium;

  // ── Detail strings for UI ──
  const details = {
    carbon: [
      `Tillage effect: ${t.carbon > 0 ? '+' : ''}${t.carbon}`,
      `Cover crop effect: ${c.carbon > 0 ? '+' : ''}${c.carbon}`,
      `SOM contribution: +${Math.round(somFactor * 5)}`,
      `Rotation bonus: +${Math.round(rotBonus * 0.5)}`,
    ],
    water: [
      `Tillage effect: ${t.water > 0 ? '+' : ''}${t.water}`,
      `Cover crop effect: ${c.water > 0 ? '+' : ''}${c.water}`,
      `Nutrient effect: ${n.water > 0 ? '+' : ''}${n.water}`,
      `Slope penalty: -${slopePenalty}`,
    ],
    biodiversity: [
      `Cover crop effect: ${c.biodiversity > 0 ? '+' : ''}${c.biodiversity}`,
      `Rotation diversity: +${Math.round(rotBonus * 1.2)}`,
      `Management practices: ${t.biodiversity > 0 ? '+' : ''}${t.biodiversity + n.biodiversity}`,
    ],
    resilience: [
      `Tillage effect: ${t.resilience > 0 ? '+' : ''}${t.resilience}`,
      `Cover crop buffer: ${c.resilience > 0 ? '+' : ''}${c.resilience}`,
      `Rotation stability: +${Math.round(rotBonus * 0.8)}`,
      input.irrigated ? 'Irrigation bonus: +6' : 'No irrigation',
    ],
    economics: [
      `Input cost effect: ${t.economics > 0 ? '+' : ''}${t.economics}`,
      `Cover crop cost: ${c.economics > 0 ? '+' : ''}${c.economics}`,
      `Nutrient strategy: ${n.economics > 0 ? '+' : ''}${n.economics}`,
      `Diversity premium: +${Math.round(rotBonus * 0.4)}`,
    ],
  };

  return {
    carbon, water, biodiversity, resilience, economics,
    terraValueScore,
    ecosystemValuePotentialUsdAcre,
    details,
    monetization,
  };
}

/* ──────────────────────────────── Helpers ──────────────────────────────── */

function clamp(x: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, Math.round(x)));
}

/** Return a qualitative label for a 0-100 score */
export function scoreLabel(score: number): string {
  if (score >= 80) return 'Excellent';
  if (score >= 65) return 'Good';
  if (score >= 50) return 'Moderate';
  if (score >= 35) return 'Below Average';
  return 'Low';
}

/** Return a Tailwind color class based on score range */
export function scoreColor(score: number): string {
  if (score >= 80) return 'text-emerald-600';
  if (score >= 65) return 'text-teal-600';
  if (score >= 50) return 'text-amber-600';
  if (score >= 35) return 'text-orange-600';
  return 'text-red-600';
}

/** Return bar background color based on score */
export function scoreBarColor(score: number): string {
  if (score >= 80) return 'bg-emerald-500';
  if (score >= 65) return 'bg-teal-500';
  if (score >= 50) return 'bg-amber-500';
  if (score >= 35) return 'bg-orange-500';
  return 'bg-red-500';
}
