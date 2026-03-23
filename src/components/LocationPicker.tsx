'use client';

import { useState } from 'react';
import { LocationInput } from '../agents/types';

const US_REGIONS: { value: string; label: string; group: string }[] = [
  // Corn Belt
  { value: 'iowa', label: 'Iowa', group: 'Corn Belt' },
  { value: 'illinois', label: 'Illinois', group: 'Corn Belt' },
  { value: 'indiana', label: 'Indiana', group: 'Corn Belt' },
  { value: 'ohio', label: 'Ohio', group: 'Corn Belt' },
  { value: 'minnesota', label: 'Minnesota', group: 'Corn Belt' },
  { value: 'wisconsin', label: 'Wisconsin', group: 'Corn Belt' },
  { value: 'missouri', label: 'Missouri', group: 'Corn Belt' },
  // Great Plains
  { value: 'north dakota', label: 'North Dakota', group: 'Great Plains' },
  { value: 'south dakota', label: 'South Dakota', group: 'Great Plains' },
  { value: 'nebraska', label: 'Nebraska', group: 'Great Plains' },
  { value: 'kansas', label: 'Kansas', group: 'Great Plains' },
  { value: 'montana', label: 'Montana', group: 'Great Plains' },
  { value: 'texas', label: 'Texas', group: 'Great Plains' },
  { value: 'oklahoma', label: 'Oklahoma', group: 'Great Plains' },
  // Southeast
  { value: 'georgia', label: 'Georgia', group: 'Southeast' },
  { value: 'alabama', label: 'Alabama', group: 'Southeast' },
  { value: 'south carolina', label: 'South Carolina', group: 'Southeast' },
  { value: 'north carolina', label: 'North Carolina', group: 'Southeast' },
  { value: 'virginia', label: 'Virginia', group: 'Southeast' },
  { value: 'tennessee', label: 'Tennessee', group: 'Southeast' },
  { value: 'florida', label: 'Florida', group: 'Southeast' },
  // Pacific Northwest
  { value: 'washington', label: 'Washington', group: 'Pacific NW' },
  { value: 'oregon', label: 'Oregon', group: 'Pacific NW' },
  { value: 'idaho', label: 'Idaho', group: 'Pacific NW' },
  // California
  { value: 'california', label: 'California', group: 'California' },
  // Northeast
  { value: 'new york', label: 'New York', group: 'Northeast' },
  { value: 'pennsylvania', label: 'Pennsylvania', group: 'Northeast' },
  { value: 'michigan', label: 'Michigan', group: 'Northeast' },
  // Delta/South
  { value: 'mississippi', label: 'Mississippi', group: 'Delta South' },
  { value: 'louisiana', label: 'Louisiana', group: 'Delta South' },
  { value: 'arkansas', label: 'Arkansas', group: 'Delta South' },
  // Mountain West
  { value: 'colorado', label: 'Colorado', group: 'Mountain West' },
  { value: 'wyoming', label: 'Wyoming', group: 'Mountain West' },
  { value: 'utah', label: 'Utah', group: 'Mountain West' },
  { value: 'new mexico', label: 'New Mexico', group: 'Mountain West' },
  { value: 'arizona', label: 'Arizona', group: 'Mountain West' },
];

// Group regions
const groups = [...new Set(US_REGIONS.map((r) => r.group))];

type Props = {
  value: LocationInput;
  onChange: (location: LocationInput) => void;
};

export function LocationPicker({ value, onChange }: Props) {
  const [mode, setMode] = useState<'region' | 'coordinates'>(
    value.coordinates ? 'coordinates' : 'region'
  );
  const [lat, setLat] = useState(value.coordinates?.latitude?.toString() ?? '');
  const [lon, setLon] = useState(value.coordinates?.longitude?.toString() ?? '');

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
        </svg>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</h3>
      </div>
      <p className="text-[11px] text-slate-400 mb-3">Location provides soil layer data and weather normals.</p>

      {/* Mode toggle */}
      <div className="flex rounded-lg bg-slate-100 p-0.5 mb-3">
        <button
          onClick={() => setMode('region')}
          className={`flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            mode === 'region' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          By State
        </button>
        <button
          onClick={() => setMode('coordinates')}
          className={`flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
            mode === 'coordinates' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          By Coordinates
        </button>
      </div>

      {mode === 'region' ? (
        <select
          value={value.region ?? ''}
          onChange={(e) => onChange({ region: e.target.value || undefined })}
          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Select a state...</option>
          {groups.map((group) => (
            <optgroup key={group} label={group}>
              {US_REGIONS.filter((r) => r.group === group).map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </optgroup>
          ))}
        </select>
      ) : (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <label className="block">
              <span className="text-xs text-slate-500">Latitude</span>
              <input
                type="number"
                step="0.01"
                min={24}
                max={49}
                placeholder="41.88"
                value={lat}
                onChange={(e) => {
                  setLat(e.target.value);
                  const latNum = parseFloat(e.target.value);
                  const lonNum = parseFloat(lon);
                  if (!isNaN(latNum) && !isNaN(lonNum)) {
                    onChange({ coordinates: { latitude: latNum, longitude: lonNum } });
                  }
                }}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>
            <label className="block">
              <span className="text-xs text-slate-500">Longitude</span>
              <input
                type="number"
                step="0.01"
                min={-125}
                max={-66}
                placeholder="-87.63"
                value={lon}
                onChange={(e) => {
                  setLon(e.target.value);
                  const latNum = parseFloat(lat);
                  const lonNum = parseFloat(e.target.value);
                  if (!isNaN(latNum) && !isNaN(lonNum)) {
                    onChange({ coordinates: { latitude: latNum, longitude: lonNum } });
                  }
                }}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>
          </div>
          <p className="text-[10px] text-slate-400">Enter US coordinates (lat 24-49, lon -125 to -66)</p>
        </div>
      )}
    </div>
  );
}
