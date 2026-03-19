export type Tillage = 'conventional' | 'reduced' | 'no_till';
export type CoverCrop = 'none' | 'seasonal' | 'multi_species';
export type Nutrient = 'synthetic_dominant' | 'balanced' | 'manure_integrated';

export type ScenarioInput = {
  name: string;
  tillage: Tillage;
  coverCrop: CoverCrop;
  nutrient: Nutrient;
  rotationDiversity: number;
  slopeRisk: number;
  soilOrganicMatter: number;
};

export const presetScenarios: ScenarioInput[] = [
  { name: 'Conventional tillage corn-soy', tillage: 'conventional', coverCrop: 'none', nutrient: 'synthetic_dominant', rotationDiversity: 2, slopeRisk: 3, soilOrganicMatter: 2.1 },
  { name: 'Reduced tillage + cover crops', tillage: 'reduced', coverCrop: 'seasonal', nutrient: 'balanced', rotationDiversity: 3, slopeRisk: 2, soilOrganicMatter: 3.2 },
  { name: 'Diversified organic system', tillage: 'reduced', coverCrop: 'multi_species', nutrient: 'balanced', rotationDiversity: 5, slopeRisk: 2, soilOrganicMatter: 4.1 },
  { name: 'Manure-integrated regenerative rotation', tillage: 'no_till', coverCrop: 'multi_species', nutrient: 'manure_integrated', rotationDiversity: 4, slopeRisk: 2, soilOrganicMatter: 4.6 },
];
