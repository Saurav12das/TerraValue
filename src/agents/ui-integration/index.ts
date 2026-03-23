/**
 * UI Integration Agent
 *
 * Responsibilities:
 *  - Orchestrate the Researcher and Model Developer agents
 *  - Combine predictions into a unified result for the dashboard
 *  - Generate human-readable summaries
 *  - Compute enhanced TerraValue score incorporating model predictions
 *
 * This is the main entry point for the prediction pipeline:
 *   Location + Scenario → Researcher → Model Developer → PredictionResult
 */

import { LocationInput, PredictionResult } from '../types';
import { ScenarioInput } from '../../data/scenarios';
import { runResearcherAgent } from '../researcher';
import { runModelDeveloperAgent } from '../model-developer';

/**
 * Run the full prediction pipeline.
 *
 * @param location - Location input (coordinates or region name)
 * @param scenario - Agricultural management scenario
 * @returns Complete prediction result for UI rendering
 */
export function runPredictionPipeline(
  location: LocationInput,
  scenario: ScenarioInput,
): PredictionResult {
  // Step 1: Researcher Agent — resolve location to soil + weather data
  const research = runResearcherAgent(location);

  // Step 2: Model Developer Agent — run prediction models
  const predictions = runModelDeveloperAgent(research, scenario);

  // Step 3: Compute enhanced TerraValue score
  // Incorporate model predictions into the overall assessment
  const { soilCarbon, waterQuality, waterQuantity } = predictions;

  // Carbon score: normalize sequestration rate to 0-100
  // Good: >0.5 t C/ha/yr, Excellent: >1.0 t C/ha/yr
  const carbonScore = Math.min(100, Math.max(0, Math.round(
    50 + soilCarbon.annualSequestrationRate * 40
  )));

  // Water quality score already 0-100
  const waterQualScore = waterQuality.qualityScore;

  // Water quantity score already 0-100
  const waterQuantScore = waterQuantity.quantityScore;

  // Enhanced composite: carbon (30%), water quality (25%), water quantity (20%), drought resilience (25%)
  const enhancedScore = Math.round(
    carbonScore * 0.30 +
    waterQualScore * 0.25 +
    waterQuantScore * 0.20 +
    waterQuantity.droughtResilience * 0.25
  );

  // Step 4: Generate summary
  const summaryParts: string[] = [];

  if (soilCarbon.annualSequestrationRate > 0) {
    summaryParts.push(
      `This management approach is projected to sequester ${soilCarbon.annualSequestrationRate} tonnes C/ha/yr (${soilCarbon.co2EquivalentPerYear} t CO₂e), ` +
      `worth an estimated $${soilCarbon.carbonCreditValue}/ha/yr in carbon credits.`
    );
  } else {
    summaryParts.push(
      `Current management may result in net soil carbon loss. Consider adopting no-till, cover crops, or diversified rotations.`
    );
  }

  if (waterQuality.qualityScore >= 70) {
    summaryParts.push(
      `Water quality protection is strong (score ${waterQuality.qualityScore}/100) with ${waterQuality.nutrientReductionPct}% nutrient reduction vs conventional.`
    );
  } else if (waterQuality.qualityScore >= 50) {
    summaryParts.push(
      `Water quality is moderate (score ${waterQuality.qualityScore}/100). Cover crops and reduced tillage could improve nutrient retention.`
    );
  } else {
    summaryParts.push(
      `Water quality risk is elevated (score ${waterQuality.qualityScore}/100). Sediment loss of ${waterQuality.sedimentLoss} t/ha/yr indicates erosion concern.`
    );
  }

  if (waterQuantity.droughtResilience >= 65) {
    summaryParts.push(
      `Drought resilience is high (${waterQuantity.droughtResilience}/100) with ${waterQuantity.waterHoldingImprovement}% improved water holding capacity.`
    );
  } else {
    summaryParts.push(
      `Drought resilience is ${waterQuantity.droughtResilience >= 45 ? 'moderate' : 'limited'} (${waterQuantity.droughtResilience}/100). ` +
      `Improving soil structure could increase water storage.`
    );
  }

  summaryParts.push(
    `Location: ${research.regionName}. Soil: ${research.soilProfile.seriesName}. ` +
    `Climate: ${research.weather.annualMeanTempC}°C mean, ${research.weather.annualPrecipMm}mm annual precipitation.`
  );

  return {
    research,
    predictions,
    enhancedScore,
    summary: summaryParts.join(' '),
    generatedAt: new Date().toISOString(),
  };
}
