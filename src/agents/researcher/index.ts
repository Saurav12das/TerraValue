/**
 * Researcher Agent
 *
 * Responsibilities:
 *  - Resolve location input (coordinates or region name) into a geographic context
 *  - Provide soil profile data (layers, texture, organic carbon, bulk density)
 *  - Provide weather/climate data (temperature, precipitation, PET, GDD)
 *  - Annotate findings with data source citations
 *
 * In production, this agent would:
 *  - Query USDA SSURGO/STATSGO2 for real soil map unit data
 *  - Query PRISM/Daymet/OpenMeteo for climate normals and forecasts
 *  - Integrate with USGS streamflow and EPA water quality databases
 *  - Use ML to fill gaps in spatial coverage
 */

import { LocationInput, ResearcherOutput } from '../types';
import { lookupSoilProfile, getRegionKey, estimateSOCStock } from './soil-database';
import { lookupWeather, regionFromCoordinates } from './weather-database';

/** Human-readable region names */
const REGION_NAMES: Record<string, string> = {
  corn_belt: 'Corn Belt (Upper Midwest)',
  great_plains_north: 'Northern Great Plains',
  great_plains_south: 'Southern Great Plains',
  southeast: 'Southeast',
  pacific_northwest: 'Pacific Northwest',
  california_central_valley: 'California Central Valley',
  northeast: 'Northeast',
  delta_south: 'Mississippi Delta / Lower South',
  mountain_west: 'Mountain West',
  default: 'Generic US Agricultural Region',
};

/**
 * Run the Researcher Agent: resolve location → soil + weather data.
 */
export function runResearcherAgent(location: LocationInput): ResearcherOutput {
  // Step 1: Determine region
  let regionKey: string;
  if (location.region) {
    regionKey = getRegionKey(location.region);
  } else if (location.coordinates) {
    regionKey = regionFromCoordinates(location.coordinates);
  } else {
    regionKey = 'default';
  }

  // Step 2: Look up soil profile
  const soilProfile = lookupSoilProfile(location.region);

  // Step 3: Look up weather
  const weather = lookupWeather(regionKey);

  // Step 4: Calculate derived metrics
  const socStock = estimateSOCStock(soilProfile, 30);
  const topLayer = soilProfile.layers[0];

  // Step 5: Build research notes
  const notes: string[] = [
    `Region identified: ${REGION_NAMES[regionKey] ?? regionKey}`,
    `Soil series: ${soilProfile.seriesName} (${soilProfile.taxonomicClass})`,
    `Drainage class: ${soilProfile.drainageClass.replace(/_/g, ' ')}`,
    `Topsoil (0-${topLayer.depthBottomCm}cm): ${topLayer.texture.replace(/_/g, ' ')}, ${topLayer.organicCarbon}% OC, pH ${topLayer.ph}`,
    `Estimated SOC stock (0-30cm): ${socStock} tonnes C/ha`,
    `Climate: MAT ${weather.annualMeanTempC}°C, MAP ${weather.annualPrecipMm}mm, GDD ${weather.growingDegreeDays}`,
    `Frost-free period: ~${weather.frostFreeDays} days`,
    `Water balance: P/PET ratio = ${(weather.annualPrecipMm / weather.annualPetMm).toFixed(2)}`,
    '',
    'Data sources (production integration planned):',
    '  - USDA NRCS Web Soil Survey / SSURGO database',
    '  - NOAA 1991-2020 Climate Normals',
    '  - PRISM Climate Group (Oregon State University)',
    '  - ISRIC SoilGrids 250m v2.0',
  ];

  return {
    location,
    regionName: REGION_NAMES[regionKey] ?? 'Unknown Region',
    soilProfile,
    weather,
    notes,
  };
}
