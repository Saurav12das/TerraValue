/**
 * Weather/Climate Database — Representative climate normals by US region
 *
 * Based on NOAA 1991-2020 climate normals patterns.
 * In production, this would query PRISM, Daymet, or OpenMeteo APIs.
 */

import { WeatherProfile, MonthlyClimate, Coordinates } from '../types';

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

/** Monthly climate normals [temp °C, precip mm, PET mm] for each region */
const MONTHLY_NORMALS: Record<RegionKey, [number, number, number][]> = {
  corn_belt: [
    [-6.5, 30, 8], [-4.0, 32, 12], [3.0, 58, 30], [10.5, 90, 60],
    [17.0, 115, 105], [22.0, 120, 140], [24.5, 100, 160], [23.0, 95, 140],
    [18.5, 80, 100], [11.5, 68, 55], [4.0, 55, 22], [-4.0, 38, 10],
  ],
  great_plains_north: [
    [-10.0, 12, 5], [-7.5, 14, 8], [0.5, 25, 22], [8.5, 45, 50],
    [15.5, 72, 95], [21.0, 85, 135], [24.0, 65, 160], [22.5, 50, 140],
    [16.5, 38, 90], [9.0, 30, 45], [0.5, 18, 15], [-7.5, 12, 6],
  ],
  great_plains_south: [
    [4.5, 28, 20], [7.0, 35, 28], [12.5, 55, 50], [17.5, 70, 80],
    [22.5, 110, 120], [27.0, 95, 160], [29.5, 55, 185], [29.0, 60, 175],
    [24.5, 80, 125], [18.0, 75, 70], [11.0, 45, 35], [5.5, 32, 22],
  ],
  southeast: [
    [6.0, 105, 25], [8.0, 95, 32], [12.5, 110, 55], [17.0, 85, 80],
    [21.5, 90, 115], [25.5, 120, 145], [27.0, 130, 155], [26.5, 115, 145],
    [23.0, 90, 110], [17.5, 75, 65], [11.5, 80, 35], [7.0, 100, 22],
  ],
  pacific_northwest: [
    [2.5, 135, 12], [4.0, 100, 18], [6.5, 90, 35], [9.5, 60, 55],
    [13.5, 42, 90], [16.5, 25, 115], [20.0, 8, 145], [19.5, 12, 130],
    [16.0, 28, 85], [10.5, 70, 42], [5.5, 130, 18], [2.5, 145, 10],
  ],
  california_central_valley: [
    [8.0, 65, 22], [10.5, 60, 30], [13.0, 50, 55], [16.0, 25, 85],
    [20.5, 8, 130], [25.0, 2, 170], [28.5, 0, 195], [27.5, 0, 180],
    [24.0, 5, 135], [18.5, 20, 75], [12.0, 40, 32], [8.0, 55, 20],
  ],
  northeast: [
    [-5.0, 70, 8], [-3.5, 65, 12], [2.5, 80, 28], [9.0, 85, 55],
    [15.0, 95, 95], [20.0, 100, 125], [23.0, 105, 145], [22.0, 100, 130],
    [17.5, 90, 85], [11.0, 85, 48], [5.0, 80, 20], [-3.0, 75, 10],
  ],
  delta_south: [
    [6.5, 120, 22], [9.0, 110, 30], [14.0, 125, 55], [18.5, 115, 85],
    [23.0, 120, 125], [27.0, 95, 160], [28.5, 105, 170], [28.0, 80, 160],
    [25.0, 85, 125], [19.5, 90, 70], [13.0, 105, 35], [7.5, 120, 22],
  ],
  mountain_west: [
    [-2.5, 15, 10], [0.5, 18, 15], [5.5, 22, 35], [10.5, 25, 60],
    [16.0, 30, 100], [22.0, 18, 145], [25.5, 25, 170], [24.0, 30, 150],
    [19.0, 22, 105], [12.0, 20, 55], [4.5, 18, 22], [-1.5, 15, 12],
  ],
  default: [
    [-2.0, 55, 12], [0.0, 50, 18], [5.5, 65, 38], [12.0, 75, 65],
    [18.0, 85, 105], [23.0, 90, 140], [25.5, 80, 155], [24.5, 75, 140],
    [20.0, 70, 100], [13.0, 65, 55], [6.0, 60, 25], [-1.0, 55, 14],
  ],
};

function buildWeatherProfile(regionKey: RegionKey): WeatherProfile {
  const normals = MONTHLY_NORMALS[regionKey];
  const monthly: MonthlyClimate[] = normals.map(([temp, precip, pet], i) => ({
    month: i + 1,
    meanTempC: temp,
    precipMm: precip,
    petMm: pet,
  }));

  const annualMeanTempC = Math.round((normals.reduce((s, n) => s + n[0], 0) / 12) * 10) / 10;
  const annualPrecipMm = Math.round(normals.reduce((s, n) => s + n[1], 0));
  const annualPetMm = Math.round(normals.reduce((s, n) => s + n[2], 0));

  // Growing degree days (base 10°C): sum of (monthly mean - 10) × 30 for months > 10°C
  const growingDegreeDays = Math.round(
    normals.reduce((s, n) => s + Math.max(0, n[0] - 10) * 30, 0)
  );

  // Frost-free days: months with mean temp > 0°C × 30 (rough estimate)
  const frostFreeDays = Math.round(
    normals.filter((n) => n[0] > 0).length * 30.5
  );

  return { annualMeanTempC, annualPrecipMm, annualPetMm, growingDegreeDays, frostFreeDays, monthly };
}

/**
 * Look up climate normals for a region.
 */
export function lookupWeather(regionKey: string): WeatherProfile {
  const key = (regionKey in MONTHLY_NORMALS ? regionKey : 'default') as RegionKey;
  return buildWeatherProfile(key);
}

/**
 * Estimate region from coordinates (simplified lat/lon bounding boxes).
 * In production, use reverse geocoding or spatial lookup.
 */
export function regionFromCoordinates(coords: Coordinates): string {
  const { latitude: lat, longitude: lon } = coords;

  // Very rough US region estimation from coordinates
  if (lat > 42 && lon > -95 && lon < -80) return 'corn_belt';
  if (lat > 40 && lon < -95 && lon > -105) return 'great_plains_north';
  if (lat < 37 && lon > -103 && lon < -94) return 'great_plains_south';
  if (lat < 37 && lat > 25 && lon > -90 && lon < -75) return 'southeast';
  if (lat > 42 && lon < -115) return 'pacific_northwest';
  if (lat > 34 && lat < 40 && lon < -118 && lon > -123) return 'california_central_valley';
  if (lat > 39 && lon > -80) return 'northeast';
  if (lat < 37 && lon > -94 && lon < -88) return 'delta_south';
  if (lat > 35 && lat < 45 && lon < -105 && lon > -115) return 'mountain_west';
  return 'default';
}
