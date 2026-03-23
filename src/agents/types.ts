/**
 * Shared types for the TerraValue Agent System
 *
 * Three agents collaborate to produce predictions:
 *  1. Researcher Agent  — resolves location → soil layers + weather
 *  2. Model Developer   — runs prediction models (soil carbon, water quality, water quantity)
 *  3. UI Integration    — orchestrates agents and formats results for the dashboard
 */

/* ──────────────────── Location & Geography ──────────────────── */

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type LocationInput = {
  coordinates?: Coordinates;
  /** US state or region name for lookup */
  region?: string;
  /** USDA climate zone (1-13) */
  climateZone?: number;
};

/* ──────────────────── Soil Profile ──────────────────── */

export type SoilTexture = 'sand' | 'loamy_sand' | 'sandy_loam' | 'loam' | 'silt_loam' | 'silt' | 'sandy_clay_loam' | 'clay_loam' | 'silty_clay_loam' | 'sandy_clay' | 'silty_clay' | 'clay';

export type SoilLayer = {
  depthTopCm: number;
  depthBottomCm: number;
  texture: SoilTexture;
  /** Sand content (%) */
  sand: number;
  /** Silt content (%) */
  silt: number;
  /** Clay content (%) */
  clay: number;
  /** Soil organic carbon (%) */
  organicCarbon: number;
  /** Bulk density (g/cm³) */
  bulkDensity: number;
  /** pH */
  ph: number;
  /** Cation exchange capacity (meq/100g) */
  cec: number;
  /** Available water capacity (cm/cm) */
  awc: number;
  /** Saturated hydraulic conductivity (cm/hr) */
  ksat: number;
};

export type SoilProfile = {
  seriesName: string;
  taxonomicClass: string;
  drainageClass: 'well_drained' | 'moderately_well_drained' | 'somewhat_poorly_drained' | 'poorly_drained';
  layers: SoilLayer[];
};

/* ──────────────────── Weather / Climate ──────────────────── */

export type MonthlyClimate = {
  month: number;
  /** Mean temperature (°C) */
  meanTempC: number;
  /** Mean precipitation (mm) */
  precipMm: number;
  /** Potential evapotranspiration (mm) */
  petMm: number;
};

export type WeatherProfile = {
  /** Mean annual temperature (°C) */
  annualMeanTempC: number;
  /** Mean annual precipitation (mm) */
  annualPrecipMm: number;
  /** Annual potential evapotranspiration (mm) */
  annualPetMm: number;
  /** Growing degree days (base 10°C) */
  growingDegreeDays: number;
  /** Frost-free days */
  frostFreeDays: number;
  /** Monthly climate normals */
  monthly: MonthlyClimate[];
};

/* ──────────────────── Researcher Agent Output ──────────────────── */

export type ResearcherOutput = {
  location: LocationInput;
  regionName: string;
  soilProfile: SoilProfile;
  weather: WeatherProfile;
  /** Research notes and data source citations */
  notes: string[];
};

/* ──────────────────── Model Predictions ──────────────────── */

export type SoilCarbonPrediction = {
  /** Current SOC stock (tonnes C/ha, 0-30cm) */
  currentStock: number;
  /** Predicted SOC stock after 10 years under given management (tonnes C/ha) */
  projectedStock10yr: number;
  /** Annual sequestration rate (tonnes C/ha/yr) */
  annualSequestrationRate: number;
  /** Carbon equivalent in CO₂ (tonnes CO₂/ha/yr) */
  co2EquivalentPerYear: number;
  /** Potential carbon credit value (USD/ha/yr) */
  carbonCreditValue: number;
  /** Confidence interval (0-1) */
  confidence: number;
  /** Key factors driving the prediction */
  drivers: string[];
};

export type WaterQualityPrediction = {
  /** Nitrogen leaching risk score (0-100, lower is better water quality) */
  nitrogenLeachingRisk: number;
  /** Phosphorus runoff risk score (0-100) */
  phosphorusRunoffRisk: number;
  /** Sediment loss estimate (tonnes/ha/yr) */
  sedimentLoss: number;
  /** Overall water quality score (0-100, higher is better) */
  qualityScore: number;
  /** Estimated nutrient reduction vs. conventional (%) */
  nutrientReductionPct: number;
  /** Water quality payment potential (USD/ha/yr) */
  paymentPotential: number;
  /** Key factors */
  drivers: string[];
};

export type WaterQuantityPrediction = {
  /** Annual water balance surplus/deficit (mm) */
  waterBalance: number;
  /** Effective rainfall capture (%) */
  rainfallCaptureEfficiency: number;
  /** Soil water holding improvement vs baseline (%) */
  waterHoldingImprovement: number;
  /** Irrigation water savings (mm/yr, 0 if not irrigated) */
  irrigationSavings: number;
  /** Drought resilience score (0-100) */
  droughtResilience: number;
  /** Overall water quantity score (0-100) */
  quantityScore: number;
  /** Key factors */
  drivers: string[];
};

/* ──────────────────── Model Developer Agent Output ──────────────────── */

export type ModelPredictions = {
  soilCarbon: SoilCarbonPrediction;
  waterQuality: WaterQualityPrediction;
  waterQuantity: WaterQuantityPrediction;
};

/* ──────────────────── UI Integration Agent Output ──────────────────── */

export type PredictionResult = {
  research: ResearcherOutput;
  predictions: ModelPredictions;
  /** Overall enhanced TerraValue score incorporating model predictions */
  enhancedScore: number;
  /** Summary text for the UI */
  summary: string;
  /** Timestamp */
  generatedAt: string;
};
