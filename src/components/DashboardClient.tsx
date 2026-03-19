'use client';

import { useMemo, useState } from 'react';
import {
  presetScenarios,
  tillageOptions,
  coverCropOptions,
  nutrientOptions,
  fieldSizeOptions,
  ScenarioInput,
} from '../data/scenarios';
import { scoreScenario, scoreLabel, scoreBarColor } from '../lib/model/scoring';
import { ScoreBar } from './ScoreBar';
import { CarbonIcon, WaterIcon, BiodiversityIcon, ResilienceIcon, EconomicsIcon } from './Icons';

export function DashboardClient() {
  const [input, setInput] = useState<ScenarioInput>(presetScenarios[1]);
  const [compareIdx, setCompareIdx] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const result = useMemo(() => scoreScenario(input), [input]);
  const compareResult = useMemo(
    () => (compareIdx !== null ? scoreScenario(presetScenarios[compareIdx]) : null),
    [compareIdx]
  );
  const allScenarios = useMemo(
    () => presetScenarios.map((s) => ({ name: s.name, ...scoreScenario(s) })),
    []
  );

  function updateInput<K extends keyof ScenarioInput>(key: K, value: ScenarioInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      {/* ──────────── Left Panel: Inputs ──────────── */}
      <aside className="space-y-4">
        {/* Preset selector */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-slate-900">Scenario Inputs</h2>
          <p className="mt-1 text-xs text-slate-400">Adjust parameters to simulate ecosystem outcomes.</p>

          <label className="mt-5 block">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Preset Scenario</span>
            <select
              className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-800 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              onChange={(e) => setInput(presetScenarios[Number(e.target.value)])}
              defaultValue={1}
            >
              {presetScenarios.map((s, i) => (
                <option key={s.name} value={i}>{s.name}</option>
              ))}
            </select>
          </label>
        </div>

        {/* Management choices */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Management Practices</h3>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-700">Tillage</span>
            <select
              value={input.tillage}
              onChange={(e) => updateInput('tillage', e.target.value as ScenarioInput['tillage'])}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {tillageOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>

          <label className="mt-3 block">
            <span className="text-sm font-medium text-slate-700">Cover Crops</span>
            <select
              value={input.coverCrop}
              onChange={(e) => updateInput('coverCrop', e.target.value as ScenarioInput['coverCrop'])}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {coverCropOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>

          <label className="mt-3 block">
            <span className="text-sm font-medium text-slate-700">Nutrient Strategy</span>
            <select
              value={input.nutrient}
              onChange={(e) => updateInput('nutrient', e.target.value as ScenarioInput['nutrient'])}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {nutrientOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>
        </div>

        {/* Field characteristics */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Field Characteristics</h3>

          <label className="mt-4 block">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-slate-700">Rotation Diversity</span>
              <span className="text-sm font-bold text-emerald-700">{input.rotationDiversity}/5</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={input.rotationDiversity}
              onChange={(e) => updateInput('rotationDiversity', Number(e.target.value))}
              className="mt-2 w-full accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Monoculture</span><span>High diversity</span>
            </div>
          </label>

          <label className="mt-4 block">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-slate-700">Slope Risk</span>
              <span className="text-sm font-bold text-amber-600">{input.slopeRisk}/5</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={input.slopeRisk}
              onChange={(e) => updateInput('slopeRisk', Number(e.target.value))}
              className="mt-2 w-full accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Flat</span><span>Steep</span>
            </div>
          </label>

          <label className="mt-4 block">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-slate-700">Soil Organic Matter</span>
              <span className="text-sm font-bold text-emerald-700">{input.soilOrganicMatter}%</span>
            </div>
            <input
              type="range"
              min={10}
              max={60}
              step={1}
              value={Math.round(input.soilOrganicMatter * 10)}
              onChange={(e) => updateInput('soilOrganicMatter', Number(e.target.value) / 10)}
              className="mt-2 w-full accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>1.0%</span><span>6.0%</span>
            </div>
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-700">Field Size</span>
            <select
              value={input.fieldSize}
              onChange={(e) => updateInput('fieldSize', e.target.value as ScenarioInput['fieldSize'])}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            >
              {fieldSizeOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </label>

          <label className="mt-4 flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={input.irrigated}
              onChange={(e) => updateInput('irrigated', e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600"
            />
            <span className="text-sm font-medium text-slate-700">Irrigated</span>
          </label>
        </div>
      </aside>

      {/* ──────────── Main Panel: Results ──────────── */}
      <section className="space-y-5">
        {/* TerraValue Score Hero */}
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">TerraValue Score</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="animate-count-up text-5xl font-extrabold text-emerald-800">
                  {result.terraValueScore}
                </span>
                <span className="text-lg text-slate-400">/ 100</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Integrated ecosystem performance: <strong className="text-emerald-700">{scoreLabel(result.terraValueScore)}</strong>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Est. Ecosystem Value</p>
              <p className="mt-1 text-4xl font-extrabold text-emerald-800">${result.ecosystemValuePotentialUsdAcre}</p>
              <p className="text-sm text-slate-400">per acre / year</p>
            </div>
          </div>
        </div>

        {/* Sub-scores */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {[
            { key: 'carbon' as const, label: 'Soil Carbon', icon: <CarbonIcon size={18} />, score: result.carbon },
            { key: 'water' as const, label: 'Water Quality', icon: <WaterIcon size={18} />, score: result.water },
            { key: 'biodiversity' as const, label: 'Biodiversity', icon: <BiodiversityIcon size={18} />, score: result.biodiversity },
            { key: 'resilience' as const, label: 'Yield Resilience', icon: <ResilienceIcon size={18} />, score: result.resilience },
            { key: 'economics' as const, label: 'Economic ROI', icon: <EconomicsIcon size={18} />, score: result.economics },
          ].map((metric) => (
            <div key={metric.key} className="card-hover rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-slate-500">
                {metric.icon}
                <span className="text-xs font-medium">{metric.label}</span>
              </div>
              <p className="mt-2 text-2xl font-bold text-slate-900">{metric.score}<span className="text-sm text-slate-400"> / 100</span></p>
              <div className="mt-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-2 bar-fill rounded-full ${scoreBarColor(metric.score)}`} style={{ width: `${metric.score}%` }} />
                </div>
              </div>
              <p className="mt-1 text-xs text-slate-400">{scoreLabel(metric.score)}</p>
            </div>
          ))}
        </div>

        {/* Score Details Toggle */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex w-full items-center justify-between text-left"
          >
            <h3 className="text-sm font-bold text-slate-900">Score Breakdown Details</h3>
            <span className={`text-xs font-medium text-emerald-600 transition-transform ${showDetails ? 'rotate-180' : ''}`}>
              {showDetails ? 'Hide' : 'Show'} Details
            </span>
          </button>
          {showDetails && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              {(['carbon', 'water', 'biodiversity', 'resilience', 'economics'] as const).map((key) => (
                <div key={key} className="rounded-lg border border-slate-100 bg-slate-50/50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 capitalize">{key}</p>
                  <ul className="mt-2 space-y-1">
                    {result.details[key].map((line, i) => (
                      <li key={i} className="text-xs text-slate-500 font-mono">{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detailed Score Bars */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900">Performance Breakdown</h3>
          <div className="mt-5 space-y-4">
            <ScoreBar label="Soil Carbon Potential" score={result.carbon} />
            <ScoreBar label="Water Quality Impact" score={result.water} />
            <ScoreBar label="Biodiversity Score" score={result.biodiversity} />
            <ScoreBar label="Yield Resilience" score={result.resilience} />
            <ScoreBar label="Economic ROI" score={result.economics} />
          </div>
        </div>

        {/* Monetization Panel */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">Monetization Opportunities</h3>
            <p className="mt-1 text-xs text-slate-400">Estimated annual potential per acre (demo values)</p>
            <div className="mt-4 space-y-3">
              {[
                { label: 'Carbon credit programs', value: result.monetization.carbonCredits, color: 'bg-amber-800' },
                { label: 'Water quality incentives', value: result.monetization.waterIncentives, color: 'bg-sky-500' },
                { label: 'Biodiversity contracts', value: result.monetization.biodiversityContracts, color: 'bg-emerald-500' },
                { label: 'Sustainability premium', value: result.monetization.sustainabilityPremium, color: 'bg-violet-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    <span className="text-sm text-slate-600">{item.label}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">${item.value}/ac</span>
                </div>
              ))}
              <div className="border-t border-slate-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Total Potential</span>
                  <span className="text-lg font-extrabold text-emerald-700">${result.monetization.total}/ac</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">Summary Valuation</h3>
            <div className="mt-4 flex flex-col items-center justify-center py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Combined Ecosystem Value</p>
              <p className="mt-2 text-5xl font-extrabold text-emerald-700">${result.ecosystemValuePotentialUsdAcre}</p>
              <p className="mt-1 text-sm text-slate-400">per acre / year</p>
              <div className="mt-4 flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
                <span className="text-xs font-medium text-emerald-700">Demo estimate — placeholder model</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-slate-50 p-3">
              <p className="text-xs text-slate-400 leading-relaxed">
                This value integrates carbon, water, biodiversity, resilience, and economic
                scoring. Real valuations will use validated scientific models and market data.
              </p>
            </div>
          </div>
        </div>

        {/* Scenario Comparison */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">Scenario Comparison</h3>
            <select
              className="rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-1.5 text-xs focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              onChange={(e) => setCompareIdx(e.target.value === '' ? null : Number(e.target.value))}
              value={compareIdx ?? ''}
            >
              <option value="">Compare with...</option>
              {presetScenarios.map((s, i) => (
                <option key={s.name} value={i}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {allScenarios.map((scenario) => (
              <div
                key={scenario.name}
                className={`rounded-xl border p-4 transition-all ${
                  scenario.name === input.name
                    ? 'border-emerald-300 bg-emerald-50/60 ring-1 ring-emerald-200'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <p className="text-xs font-medium text-slate-500">{scenario.name}</p>
                <p className="mt-1 text-2xl font-extrabold text-slate-900">
                  {scenario.terraValueScore}<span className="text-sm text-slate-400"> / 100</span>
                </p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-2 bar-fill rounded-full ${scoreBarColor(scenario.terraValueScore)}`}
                    style={{ width: `${scenario.terraValueScore}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-slate-400">${scenario.ecosystemValuePotentialUsdAcre}/acre/yr</p>
              </div>
            ))}
          </div>

          {/* Side-by-side comparison */}
          {compareResult && compareIdx !== null && (
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/50 p-5 animate-fade-in">
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Current vs. {presetScenarios[compareIdx].name}
              </h4>
              <div className="mt-4 space-y-3">
                {(['carbon', 'water', 'biodiversity', 'resilience', 'economics'] as const).map((key) => {
                  const diff = result[key] - compareResult[key];
                  return (
                    <div key={key} className="flex items-center gap-4">
                      <span className="w-28 text-xs font-medium capitalize text-slate-600">{key}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{result[key]}</span>
                          <span className="text-xs text-slate-400">vs</span>
                          <span className="text-sm text-slate-500">{compareResult[key]}</span>
                          <span className={`text-xs font-bold ${diff > 0 ? 'text-emerald-600' : diff < 0 ? 'text-red-500' : 'text-slate-400'}`}>
                            {diff > 0 ? '+' : ''}{diff}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-4">
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>Prototype Notice:</strong> This dashboard uses simplified placeholder scoring logic for
            demonstration purposes. All values, weights, and estimates are illustrative. Future versions
            will integrate validated scientific models, real geospatial data, and market-calibrated valuations.
          </p>
        </div>
      </section>
    </div>
  );
}
