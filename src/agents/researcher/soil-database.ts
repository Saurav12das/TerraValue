/**
 * Soil Database — Representative soil profiles by US region
 *
 * Based on USDA NRCS soil taxonomy and Web Soil Survey data patterns.
 * In production, this would query the USDA SSURGO/STATSGO2 database
 * or SoilGrids (ISRIC) API for actual soil map unit data.
 */

import { SoilProfile, SoilTexture } from '../types';

type RegionKey =
  | 'corn_belt'
  | 'great_plains_north'
  | 'great_plains_south'
  | 'southeast'
  | 'pacific_northwest'
  | 'california_central_valley'
  | 'northeast'
  | 'delta_south'
  | 'mountain_west'
  | 'default';

/** Map US states to soil regions */
const STATE_TO_REGION: Record<string, RegionKey> = {
  // Corn Belt
  iowa: 'corn_belt', illinois: 'corn_belt', indiana: 'corn_belt',
  ohio: 'corn_belt', minnesota: 'corn_belt', wisconsin: 'corn_belt',
  missouri: 'corn_belt',
  // Great Plains North
  'north dakota': 'great_plains_north', 'south dakota': 'great_plains_north',
  nebraska: 'great_plains_north', kansas: 'great_plains_north',
  montana: 'great_plains_north',
  // Great Plains South
  texas: 'great_plains_south', oklahoma: 'great_plains_south',
  // Southeast
  georgia: 'southeast', alabama: 'southeast', 'south carolina': 'southeast',
  'north carolina': 'southeast', virginia: 'southeast', tennessee: 'southeast',
  florida: 'southeast',
  // Pacific Northwest
  washington: 'pacific_northwest', oregon: 'pacific_northwest',
  idaho: 'pacific_northwest',
  // California
  california: 'california_central_valley',
  // Northeast
  'new york': 'northeast', pennsylvania: 'northeast',
  michigan: 'northeast', vermont: 'northeast', maine: 'northeast',
  massachusetts: 'northeast', connecticut: 'northeast',
  'new hampshire': 'northeast', 'new jersey': 'northeast',
  maryland: 'northeast', delaware: 'northeast',
  // Delta/South
  mississippi: 'delta_south', louisiana: 'delta_south', arkansas: 'delta_south',
  // Mountain West
  colorado: 'mountain_west', wyoming: 'mountain_west', utah: 'mountain_west',
  'new mexico': 'mountain_west', arizona: 'mountain_west', nevada: 'mountain_west',
};

/** Representative soil profiles for each region */
const SOIL_PROFILES: Record<RegionKey, SoilProfile> = {
  corn_belt: {
    seriesName: 'Mollisol (Tama-like)',
    taxonomicClass: 'Fine-silty, mixed, superactive, mesic Typic Argiudolls',
    drainageClass: 'well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 25, texture: 'silt_loam', sand: 8, silt: 65, clay: 27, organicCarbon: 2.8, bulkDensity: 1.25, ph: 6.4, cec: 22, awc: 0.22, ksat: 1.5 },
      { depthTopCm: 25, depthBottomCm: 60, texture: 'silty_clay_loam', sand: 6, silt: 58, clay: 36, organicCarbon: 1.2, bulkDensity: 1.35, ph: 6.2, cec: 24, awc: 0.19, ksat: 0.8 },
      { depthTopCm: 60, depthBottomCm: 120, texture: 'silt_loam', sand: 10, silt: 62, clay: 28, organicCarbon: 0.4, bulkDensity: 1.42, ph: 6.8, cec: 18, awc: 0.20, ksat: 1.2 },
    ],
  },
  great_plains_north: {
    seriesName: 'Mollisol (Keith-like)',
    taxonomicClass: 'Fine-loamy, mixed, superactive, mesic Aridic Argiustolls',
    drainageClass: 'well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 20, texture: 'loam', sand: 35, silt: 40, clay: 25, organicCarbon: 2.2, bulkDensity: 1.30, ph: 6.8, cec: 18, awc: 0.18, ksat: 1.8 },
      { depthTopCm: 20, depthBottomCm: 55, texture: 'clay_loam', sand: 28, silt: 35, clay: 37, organicCarbon: 0.9, bulkDensity: 1.40, ph: 7.2, cec: 20, awc: 0.16, ksat: 0.6 },
      { depthTopCm: 55, depthBottomCm: 100, texture: 'loam', sand: 38, silt: 38, clay: 24, organicCarbon: 0.3, bulkDensity: 1.48, ph: 7.6, cec: 14, awc: 0.15, ksat: 1.4 },
    ],
  },
  great_plains_south: {
    seriesName: 'Alfisol (Kirkland-like)',
    taxonomicClass: 'Fine, mixed, superactive, thermic Udertic Paleustolls',
    drainageClass: 'moderately_well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 20, texture: 'silt_loam', sand: 18, silt: 55, clay: 27, organicCarbon: 1.6, bulkDensity: 1.32, ph: 6.5, cec: 16, awc: 0.17, ksat: 1.4 },
      { depthTopCm: 20, depthBottomCm: 55, texture: 'clay', sand: 15, silt: 35, clay: 50, organicCarbon: 0.7, bulkDensity: 1.45, ph: 7.0, cec: 28, awc: 0.15, ksat: 0.2 },
      { depthTopCm: 55, depthBottomCm: 100, texture: 'clay', sand: 18, silt: 32, clay: 50, organicCarbon: 0.3, bulkDensity: 1.50, ph: 7.5, cec: 25, awc: 0.14, ksat: 0.15 },
    ],
  },
  southeast: {
    seriesName: 'Ultisol (Cecil-like)',
    taxonomicClass: 'Fine, kaolinitic, thermic Typic Kanhapludults',
    drainageClass: 'well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 20, texture: 'sandy_loam', sand: 60, silt: 22, clay: 18, organicCarbon: 1.2, bulkDensity: 1.38, ph: 5.5, cec: 8, awc: 0.12, ksat: 4.0 },
      { depthTopCm: 20, depthBottomCm: 60, texture: 'sandy_clay', sand: 48, silt: 12, clay: 40, organicCarbon: 0.4, bulkDensity: 1.50, ph: 5.2, cec: 12, awc: 0.11, ksat: 0.5 },
      { depthTopCm: 60, depthBottomCm: 120, texture: 'clay', sand: 35, silt: 15, clay: 50, organicCarbon: 0.2, bulkDensity: 1.55, ph: 5.0, cec: 14, awc: 0.10, ksat: 0.3 },
    ],
  },
  pacific_northwest: {
    seriesName: 'Andisol (Walla Walla-like)',
    taxonomicClass: 'Coarse-silty, mixed, superactive, mesic Typic Haploxerolls',
    drainageClass: 'well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 30, texture: 'silt_loam', sand: 15, silt: 68, clay: 17, organicCarbon: 2.0, bulkDensity: 1.20, ph: 6.2, cec: 20, awc: 0.24, ksat: 2.5 },
      { depthTopCm: 30, depthBottomCm: 70, texture: 'silt_loam', sand: 12, silt: 70, clay: 18, organicCarbon: 0.8, bulkDensity: 1.30, ph: 6.5, cec: 18, awc: 0.22, ksat: 2.0 },
      { depthTopCm: 70, depthBottomCm: 120, texture: 'silt_loam', sand: 18, silt: 65, clay: 17, organicCarbon: 0.3, bulkDensity: 1.38, ph: 7.0, cec: 15, awc: 0.20, ksat: 1.8 },
    ],
  },
  california_central_valley: {
    seriesName: 'Vertisol (Yolo-like)',
    taxonomicClass: 'Fine-silty, mixed, superactive, nonacid, thermic Mollic Xerofluvents',
    drainageClass: 'well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 25, texture: 'silt_loam', sand: 22, silt: 55, clay: 23, organicCarbon: 1.4, bulkDensity: 1.30, ph: 7.2, cec: 20, awc: 0.20, ksat: 1.6 },
      { depthTopCm: 25, depthBottomCm: 60, texture: 'silty_clay_loam', sand: 18, silt: 48, clay: 34, organicCarbon: 0.6, bulkDensity: 1.40, ph: 7.5, cec: 22, awc: 0.17, ksat: 0.8 },
      { depthTopCm: 60, depthBottomCm: 100, texture: 'clay_loam', sand: 25, silt: 40, clay: 35, organicCarbon: 0.2, bulkDensity: 1.45, ph: 7.8, cec: 20, awc: 0.16, ksat: 0.6 },
    ],
  },
  northeast: {
    seriesName: 'Inceptisol (Mardin-like)',
    taxonomicClass: 'Coarse-loamy, mixed, active, mesic Typic Fragiudepts',
    drainageClass: 'moderately_well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 20, texture: 'silt_loam', sand: 30, silt: 50, clay: 20, organicCarbon: 2.4, bulkDensity: 1.28, ph: 5.8, cec: 14, awc: 0.18, ksat: 2.0 },
      { depthTopCm: 20, depthBottomCm: 50, texture: 'silt_loam', sand: 28, silt: 48, clay: 24, organicCarbon: 0.8, bulkDensity: 1.40, ph: 5.5, cec: 12, awc: 0.16, ksat: 1.0 },
      { depthTopCm: 50, depthBottomCm: 100, texture: 'loam', sand: 35, silt: 42, clay: 23, organicCarbon: 0.3, bulkDensity: 1.55, ph: 6.0, cec: 10, awc: 0.14, ksat: 0.4 },
    ],
  },
  delta_south: {
    seriesName: 'Vertisol (Sharkey-like)',
    taxonomicClass: 'Very-fine, smectitic, thermic Chromic Epiaquerts',
    drainageClass: 'poorly_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 20, texture: 'clay', sand: 8, silt: 35, clay: 57, organicCarbon: 1.8, bulkDensity: 1.28, ph: 6.0, cec: 35, awc: 0.16, ksat: 0.3 },
      { depthTopCm: 20, depthBottomCm: 60, texture: 'clay', sand: 6, silt: 30, clay: 64, organicCarbon: 0.8, bulkDensity: 1.35, ph: 6.5, cec: 38, awc: 0.14, ksat: 0.1 },
      { depthTopCm: 60, depthBottomCm: 120, texture: 'clay', sand: 10, silt: 32, clay: 58, organicCarbon: 0.3, bulkDensity: 1.40, ph: 7.0, cec: 32, awc: 0.13, ksat: 0.08 },
    ],
  },
  mountain_west: {
    seriesName: 'Aridisol (Olsen-like)',
    taxonomicClass: 'Fine-loamy, mixed, superactive, mesic Ustic Haplargids',
    drainageClass: 'well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 15, texture: 'sandy_loam', sand: 55, silt: 28, clay: 17, organicCarbon: 0.9, bulkDensity: 1.40, ph: 7.5, cec: 10, awc: 0.10, ksat: 5.0 },
      { depthTopCm: 15, depthBottomCm: 45, texture: 'sandy_clay_loam', sand: 50, silt: 22, clay: 28, organicCarbon: 0.4, bulkDensity: 1.50, ph: 7.8, cec: 14, awc: 0.12, ksat: 1.2 },
      { depthTopCm: 45, depthBottomCm: 90, texture: 'sandy_loam', sand: 58, silt: 25, clay: 17, organicCarbon: 0.2, bulkDensity: 1.55, ph: 8.0, cec: 8, awc: 0.09, ksat: 3.0 },
    ],
  },
  default: {
    seriesName: 'Generic Loam Profile',
    taxonomicClass: 'Fine-loamy, mixed, active, mesic Typic Hapludalfs',
    drainageClass: 'moderately_well_drained',
    layers: [
      { depthTopCm: 0, depthBottomCm: 25, texture: 'loam', sand: 40, silt: 38, clay: 22, organicCarbon: 1.8, bulkDensity: 1.32, ph: 6.5, cec: 15, awc: 0.17, ksat: 1.8 },
      { depthTopCm: 25, depthBottomCm: 60, texture: 'clay_loam', sand: 32, silt: 34, clay: 34, organicCarbon: 0.7, bulkDensity: 1.42, ph: 6.8, cec: 18, awc: 0.15, ksat: 0.8 },
      { depthTopCm: 60, depthBottomCm: 100, texture: 'loam', sand: 38, silt: 36, clay: 26, organicCarbon: 0.3, bulkDensity: 1.48, ph: 7.0, cec: 13, awc: 0.14, ksat: 1.2 },
    ],
  },
};

/**
 * Look up a representative soil profile for a given region/state.
 */
export function lookupSoilProfile(region?: string): SoilProfile {
  if (!region) return SOIL_PROFILES.default;
  const key = STATE_TO_REGION[region.toLowerCase().trim()] ?? 'default';
  return SOIL_PROFILES[key];
}

/**
 * Get the region key for a state name.
 */
export function getRegionKey(region?: string): RegionKey {
  if (!region) return 'default';
  return STATE_TO_REGION[region.toLowerCase().trim()] ?? 'default';
}

/**
 * Estimate topsoil SOC stock (tonnes C/ha) from the soil profile's top layer.
 * Formula: SOC stock = OC% × bulk density × depth × 100
 */
export function estimateSOCStock(profile: SoilProfile, depthCm: number = 30): number {
  let stock = 0;
  for (const layer of profile.layers) {
    const top = layer.depthTopCm;
    const bottom = Math.min(layer.depthBottomCm, depthCm);
    if (top >= depthCm) break;
    const thickness = (bottom - top) / 100; // convert to meters
    // SOC (t/ha) = OC(%) / 100 × BD(g/cm³) × depth(m) × 10000
    stock += (layer.organicCarbon / 100) * layer.bulkDensity * thickness * 10000;
    if (bottom >= depthCm) break;
  }
  return Math.round(stock * 10) / 10;
}
