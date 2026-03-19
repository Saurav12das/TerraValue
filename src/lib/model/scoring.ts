import { ScenarioInput } from '../../data/scenarios';

export type ScoreBreakdown = {
  carbon: number;
  water: number;
  biodiversity: number;
  resilience: number;
  economics: number;
  terraValueScore: number;
  ecosystemValuePotentialUsdAcre: number;
};

/** Demo-only placeholder scoring logic for MVP interaction. */
export function scoreScenario(input: ScenarioInput): ScoreBreakdown {
  const tillageEffect = input.tillage === 'no_till' ? 20 : input.tillage === 'reduced' ? 10 : -10;
  const coverEffect = input.coverCrop === 'multi_species' ? 18 : input.coverCrop === 'seasonal' ? 10 : -6;
  const nutrientEffect = input.nutrient === 'manure_integrated' ? 14 : input.nutrient === 'balanced' ? 6 : -8;

  const carbon = clamp(50 + tillageEffect + coverEffect + Math.round(input.soilOrganicMatter * 4));
  const water = clamp(48 + coverEffect + nutrientEffect - input.slopeRisk * 3);
  const biodiversity = clamp(42 + coverEffect + input.rotationDiversity * 6);
  const resilience = clamp(45 + input.rotationDiversity * 5 + (input.tillage === 'conventional' ? -8 : 4));
  const economics = clamp(52 + input.rotationDiversity * 2 + (input.nutrient === 'synthetic_dominant' ? 4 : 1) + (input.coverCrop === 'none' ? 3 : -1));

  const terraValueScore = Math.round((carbon + water + biodiversity + resilience + economics) / 5);
  const ecosystemValuePotentialUsdAcre = Math.round((carbon * 0.9 + water * 0.7 + biodiversity * 0.8 + resilience * 0.5 + economics * 0.6) * 2.1);

  return { carbon, water, biodiversity, resilience, economics, terraValueScore, ecosystemValuePotentialUsdAcre };
}

function clamp(x: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(x)));
}
