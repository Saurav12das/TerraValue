export type Tillage = 'conventional' | 'reduced' | 'no_till';
export type CoverCrop = 'none' | 'seasonal' | 'multi_species';
export type Nutrient = 'synthetic_dominant' | 'balanced' | 'manure_integrated';
export type FieldSize = 'small' | 'medium' | 'large';

export type ScenarioInput = {
  name: string;
  tillage: Tillage;
  coverCrop: CoverCrop;
  nutrient: Nutrient;
  rotationDiversity: number; // 1–5
  slopeRisk: number;        // 1–5
  soilOrganicMatter: number; // % SOM
  fieldSize: FieldSize;
  irrigated: boolean;
};

export const tillageOptions: { value: Tillage; label: string }[] = [
  { value: 'conventional', label: 'Conventional Tillage' },
  { value: 'reduced', label: 'Reduced / Strip-Till' },
  { value: 'no_till', label: 'No-Till' },
];

export const coverCropOptions: { value: CoverCrop; label: string }[] = [
  { value: 'none', label: 'No Cover Crops' },
  { value: 'seasonal', label: 'Seasonal Cover Crop' },
  { value: 'multi_species', label: 'Multi-Species Mix' },
];

export const nutrientOptions: { value: Nutrient; label: string }[] = [
  { value: 'synthetic_dominant', label: 'Synthetic-Dominant' },
  { value: 'balanced', label: 'Integrated / Balanced' },
  { value: 'manure_integrated', label: 'Manure-Integrated' },
];

export const fieldSizeOptions: { value: FieldSize; label: string }[] = [
  { value: 'small', label: 'Small (< 100 ac)' },
  { value: 'medium', label: 'Medium (100–500 ac)' },
  { value: 'large', label: 'Large (500+ ac)' },
];

/** Preset scenarios representing common Midwest farm systems. */
export const presetScenarios: ScenarioInput[] = [
  {
    name: 'Conventional Corn-Soy',
    tillage: 'conventional',
    coverCrop: 'none',
    nutrient: 'synthetic_dominant',
    rotationDiversity: 2,
    slopeRisk: 3,
    soilOrganicMatter: 2.1,
    fieldSize: 'large',
    irrigated: false,
  },
  {
    name: 'Reduced Till + Cover Crops',
    tillage: 'reduced',
    coverCrop: 'seasonal',
    nutrient: 'balanced',
    rotationDiversity: 3,
    slopeRisk: 2,
    soilOrganicMatter: 3.2,
    fieldSize: 'medium',
    irrigated: false,
  },
  {
    name: 'Diversified Organic',
    tillage: 'reduced',
    coverCrop: 'multi_species',
    nutrient: 'balanced',
    rotationDiversity: 5,
    slopeRisk: 2,
    soilOrganicMatter: 4.1,
    fieldSize: 'medium',
    irrigated: true,
  },
  {
    name: 'Regenerative Rotation',
    tillage: 'no_till',
    coverCrop: 'multi_species',
    nutrient: 'manure_integrated',
    rotationDiversity: 4,
    slopeRisk: 2,
    soilOrganicMatter: 4.6,
    fieldSize: 'small',
    irrigated: false,
  },
];
