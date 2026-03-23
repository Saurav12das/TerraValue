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
import { RadarChart } from './RadarChart';
import { ProgressRing } from './ProgressRing';
import { Tabs } from './Tabs';
import { CarbonIcon, WaterIcon, BiodiversityIcon, ResilienceIcon, EconomicsIcon } from './Icons';
import { LocationPicker } from './LocationPicker';
import { PredictionPanel } from './PredictionPanel';
import { LocationInput, PredictionResult } from '../agents/types';
import { runPredictionPipeline } from '../agents/ui-integration';

const dimensionMeta = [
  { key: 'carbon' as const, label: 'Soil Carbon', icon: <CarbonIcon size={18} />, color: 'var(--color-dimension-carbon)' },
  { key: 'water' as const, label: 'Water Quality', icon: <WaterIcon size={18} />, color: 'var(--color-dimension-water)' },
  { key: 'biodiversity' as const, label: 'Biodiversity', icon: <BiodiversityIcon size={18} />, color: 'var(--color-dimension-biodiversity)' },
  { key: 'resilience' as const, label: 'Yield Resilience', icon: <ResilienceIcon size={18} />, color: 'var(--color-dimension-resilience)' },
  { key: 'economics' as const, label: 'Economic ROI', icon: <EconomicsIcon size={18} />, color: 'var(--color-dimension-economics)' },
];

export function DashboardClient() {
  const [input, setInput] = useState<ScenarioInput>(presetScenarios[1]);
  const [compareIdx, setCompareIdx] = useState<number | null>(null);
  const [location, setLocation] = useState<LocationInput>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const result = useMemo(() => scoreScenario(input), [input]);

  // Run prediction pipeline when location is set
  const predictionResult = useMemo<PredictionResult | null>(() => {
    if (!location.region && !location.coordinates) return null;
    return runPredictionPipeline(location, input);
  }, [location, input]);

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

  const radarValues = dimensionMeta.map((d) => ({ label: d.label, value: result[d.key] }));
  const compareRadarValues = compareResult
    ? dimensionMeta.map((d) => ({ label: d.label, value: compareResult[d.key] }))
    : undefined;

  const sidebarContent = (
    <>
      {/* Preset */}
      <FormCard title="Scenario" hint="Start with a preset or customize below.">
        <SelectField
          label="Preset Scenario"
          value={presetScenarios.indexOf(input).toString()}
          onChange={(v) => setInput(presetScenarios[Number(v)])}
          options={presetScenarios.map((s, i) => ({ value: i.toString(), label: s.name }))}
        />
      </FormCard>

      {/* Management */}
      <FormCard title="Management Practices" hint="Drives carbon sequestration and resilience scores.">
        <SelectField label="Tillage" value={input.tillage}
          onChange={(v) => updateInput('tillage', v as ScenarioInput['tillage'])}
          options={tillageOptions.map((o) => ({ value: o.value, label: o.label }))}
        />
        <SelectField label="Cover Crops" value={input.coverCrop}
          onChange={(v) => updateInput('coverCrop', v as ScenarioInput['coverCrop'])}
          options={coverCropOptions.map((o) => ({ value: o.value, label: o.label }))}
        />
        <SelectField label="Nutrient Strategy" value={input.nutrient}
          onChange={(v) => updateInput('nutrient', v as ScenarioInput['nutrient'])}
          options={nutrientOptions.map((o) => ({ value: o.value, label: o.label }))}
        />
      </FormCard>

      {/* Field */}
      <FormCard title="Field Characteristics">
        <RangeField label="Rotation Diversity" value={input.rotationDiversity} min={1} max={5}
          onChange={(v) => updateInput('rotationDiversity', v)}
          leftLabel="Mono" rightLabel="High"
          displayValue={`${input.rotationDiversity}/5`}
          accentColor="var(--color-accent-dim)"
        />
        <RangeField label="Slope Risk" value={input.slopeRisk} min={1} max={5}
          onChange={(v) => updateInput('slopeRisk', v)}
          leftLabel="Flat" rightLabel="Steep"
          displayValue={`${input.slopeRisk}/5`}
          accentColor="var(--color-dimension-resilience)"
        />
        <RangeField label="Soil Organic Matter" value={Math.round(input.soilOrganicMatter * 10)} min={10} max={60}
          onChange={(v) => updateInput('soilOrganicMatter', v / 10)}
          leftLabel="1.0%" rightLabel="6.0%"
          displayValue={`${input.soilOrganicMatter}%`}
          accentColor="var(--color-accent-dim)"
        />
        <SelectField label="Field Size" value={input.fieldSize}
          onChange={(v) => updateInput('fieldSize', v as ScenarioInput['fieldSize'])}
          options={fieldSizeOptions.map((o) => ({ value: o.value, label: o.label }))}
        />
        <label className="mt-4 flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={input.irrigated}
              onChange={(e) => updateInput('irrigated', e.target.checked)}
              className="peer sr-only"
            />
            <div className="h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors" />
            <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transition-transform" />
          </div>
          <span className="text-sm font-medium text-slate-700">Irrigated</span>
        </label>
      </FormCard>

      {/* Location */}
      <LocationPicker value={location} onChange={setLocation} />

      {/* Compare */}
      <FormCard title="Compare Scenario">
        <select
          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all hover:border-slate-300"
          onChange={(e) => setCompareIdx(e.target.value === '' ? null : Number(e.target.value))}
          value={compareIdx ?? ''}
        >
          <option value="">None</option>
          {presetScenarios.map((s, i) => <option key={s.name} value={i}>{s.name}</option>)}
        </select>
        {compareIdx !== null && (
          <p className="mt-2 text-xs text-slate-400">
            Shown as dashed overlay on radar chart.
          </p>
        )}
      </FormCard>
    </>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
      {/* ──────────── Mobile Sidebar Toggle ──────────── */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
      >
        <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
        Adjust Scenario: {input.name}
      </button>

      {/* ──────────── Mobile Sidebar Drawer ──────────── */}
      {sidebarOpen && (
        <div className="sidebar-drawer lg:hidden" onClick={() => setSidebarOpen(false)}>
          <div className="sidebar-drawer-panel p-5 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold text-slate-900">Scenario Inputs</h2>
              <button onClick={() => setSidebarOpen(false)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}

      {/* ──────────── Desktop Left Panel ──────────── */}
      <aside className="hidden lg:block space-y-3 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto lg:pr-1">
        {sidebarContent}
      </aside>

      {/* ──────────── Main Panel ──────────── */}
      <section className="space-y-5">
        {/* Breadcrumb / Context Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Dashboard</span>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-700">{input.name}</span>
            {location.region && (
              <>
                <span className="text-slate-300">/</span>
                <span className="font-semibold text-emerald-700 capitalize">{location.region}</span>
              </>
            )}
          </div>
          {/* Data Freshness Badge */}
          <div className="data-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
            <span>Sources: USDA, NRCS, NOAA</span>
          </div>
        </div>

        {/* Hero Score */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-md">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                TerraValue Score
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-7xl font-extrabold text-emerald-800 tabular-nums" key={result.terraValueScore}>
                  {result.terraValueScore}
                </span>
                <span className="text-xl text-slate-400">/ 100</span>
              </div>
              <p className="mt-1.5 text-sm text-slate-500">
                Integrated performance: <strong className={`${result.terraValueScore >= 65 ? 'text-emerald-600' : result.terraValueScore >= 50 ? 'text-amber-600' : 'text-red-500'}`}>{scoreLabel(result.terraValueScore)}</strong>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Est. Ecosystem Value</p>
              <p className="mt-2 text-4xl font-extrabold text-slate-600 tabular-nums">${result.ecosystemValuePotentialUsdAcre}</p>
              <p className="mt-1 text-sm text-slate-400">per acre / year</p>
            </div>
          </div>
        </div>

        {/* Score Guide */}
        <div className="flex items-center gap-3 px-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Score guide</span>
          <div className="flex-1 flex items-center gap-1.5">
            {[
              { label: '<35 Low', color: 'bg-red-500' },
              { label: '35-49', color: 'bg-orange-500' },
              { label: '50-64', color: 'bg-amber-500' },
              { label: '65-79', color: 'bg-teal-500' },
              { label: '80+ Excellent', color: 'bg-emerald-500' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-1">
                <div className={`h-2 w-2 rounded-full ${s.color}`} />
                <span className="text-[10px] text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visualization Tabs: Radar / Rings / Bars */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <Tabs
            variant="pills"
            defaultTab="radar"
            tabs={[
              {
                id: 'radar',
                label: 'Radar View',
                content: (
                  <div className="flex flex-col items-center gap-4 py-4">
                    <RadarChart
                      values={radarValues}
                      compareValues={compareRadarValues}
                      size={320}
                    />
                    {/* Radar Legend */}
                    <div className="flex flex-wrap gap-3 justify-center">
                      {dimensionMeta.map((d) => (
                        <div key={d.key} className="flex items-center gap-1.5 text-[11px]">
                          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
                          <span className="text-slate-600">{d.label}</span>
                          <span className="font-bold text-slate-900">{result[d.key]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                id: 'rings',
                label: 'Gauge View',
                content: (
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center py-6">
                    {dimensionMeta.map((d) => (
                      <div key={d.key} className="w-full flex justify-center">
                        <ProgressRing
                          value={result[d.key]}
                          label={d.label}
                          color={d.color}
                          size={100}
                          strokeWidth={6}
                        />
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                id: 'bars',
                label: 'Bar View',
                content: (
                  <div className="space-y-4 py-4">
                    {dimensionMeta.map((d) => (
                      <ScoreBar key={d.key} label={d.label} score={result[d.key]} />
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </div>

        {/* Sub-score Cards */}
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {dimensionMeta.map((d) => {
            const score = result[d.key];
            const diff = compareResult ? score - compareResult[d.key] : null;
            return (
              <div key={d.key} className="card-hover rounded-xl border border-slate-200 bg-white p-3.5 group">
                <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-600 transition-colors">
                  {d.icon}
                  <span className="text-[11px] font-medium">{d.label}</span>
                </div>
                <div className="mt-1.5 flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-slate-900 tabular-nums">{score}</span>
                  <span className="text-[10px] text-slate-400">/ 100</span>
                  {diff !== null && diff !== 0 && (
                    <span className={`ml-1 text-[10px] font-bold ${diff > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                      {diff > 0 ? '+' : ''}{diff}
                    </span>
                  )}
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-1.5 bar-fill rounded-full ${scoreBarColor(score)}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <p className="mt-1 text-[9px] text-slate-400 font-medium">{scoreLabel(score)}</p>
              </div>
            );
          })}
        </div>

        {/* Scenario Comparison Grid */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900">Try Another Scenario</h3>
          <p className="mt-1 text-xs text-slate-400">Click a preset to instantly load it.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {allScenarios.map((s) => {
              const isActive = s.name === input.name;
              const scoreDiff = s.terraValueScore - result.terraValueScore;
              return (
                <div
                  key={s.name}
                  onClick={() => {
                    const idx = presetScenarios.findIndex((p) => p.name === s.name);
                    if (idx >= 0) setInput(presetScenarios[idx]);
                  }}
                  className={`card-interactive rounded-xl border p-4 cursor-pointer ${
                    isActive ? 'border-emerald-300 bg-emerald-50/60 ring-2 ring-emerald-200' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs font-medium text-slate-500">{s.name}</p>
                    {!isActive && scoreDiff !== 0 && (
                      <span className={`text-[10px] font-bold ${scoreDiff > 0 ? 'text-emerald-500' : 'text-red-400'}`}>
                        {scoreDiff > 0 ? '+' : ''}{scoreDiff} pts
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-slate-900 tabular-nums">{s.terraValueScore}</span>
                    <span className="text-xs text-slate-400">/ 100</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-1.5 bar-fill rounded-full ${scoreBarColor(s.terraValueScore)}`}
                      style={{ width: `${s.terraValueScore}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400 tabular-nums">${s.ecosystemValuePotentialUsdAcre}/ac/yr</p>
                  {isActive && <p className="mt-1 text-[10px] font-semibold text-emerald-600">Currently viewing</p>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Score Details */}
        <ScoreDetails result={result} />

        {/* Comparison Context + Table */}
        {compareResult && compareIdx !== null && (
          <div className="space-y-4 animate-slide-up-fade">
            <div className="rounded-xl border-2 border-sky-200 bg-sky-50/40 p-4">
              <p className="text-xs font-semibold text-sky-700 uppercase tracking-widest">Comparing Scenarios</p>
              <p className="text-sm text-sky-900 mt-1">
                <strong>{input.name}</strong> (current) vs <strong>{presetScenarios[compareIdx].name}</strong>
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-2 text-xs font-medium text-slate-400">Dimension</th>
                      <th className="text-right py-2 text-xs font-medium text-slate-400">Current</th>
                      <th className="text-right py-2 text-xs font-medium text-slate-400">Compare</th>
                      <th className="text-right py-2 text-xs font-medium text-slate-400">Diff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dimensionMeta.map((d) => {
                      const diff = result[d.key] - compareResult[d.key];
                      return (
                        <tr key={d.key} className="border-b border-slate-50 last:border-0">
                          <td className="py-2.5 font-medium text-slate-700">{d.label}</td>
                          <td className="py-2.5 text-right font-bold text-slate-900 tabular-nums">{result[d.key]}</td>
                          <td className="py-2.5 text-right text-slate-500 tabular-nums">{compareResult[d.key]}</td>
                          <td className={`py-2.5 text-right font-bold tabular-nums ${diff > 0 ? 'text-emerald-500' : diff < 0 ? 'text-red-500' : 'text-slate-400'}`}>
                            {diff > 0 ? '+' : ''}{diff}
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="border-t border-slate-200">
                      <td className="py-2.5 font-bold text-slate-900">TerraValue Score</td>
                      <td className="py-2.5 text-right font-extrabold text-emerald-700 tabular-nums">{result.terraValueScore}</td>
                      <td className="py-2.5 text-right text-slate-500 tabular-nums">{compareResult.terraValueScore}</td>
                      <td className={`py-2.5 text-right font-extrabold tabular-nums ${(result.terraValueScore - compareResult.terraValueScore) > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        {result.terraValueScore - compareResult.terraValueScore > 0 ? '+' : ''}{result.terraValueScore - compareResult.terraValueScore}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Model-Enhanced Predictions (from agents) */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            Location-Aware Predictions
          </h3>
          <PredictionPanel result={predictionResult} />
        </div>

        {/* Monetization + Valuation */}
        <div className="grid gap-4 md:grid-cols-2">
          <MonetizationPanel result={result} />
          <ValuationPanel result={result} />
        </div>

        {/* Dashboard → Signup CTA */}
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-900">Ready to unlock your farm&apos;s full potential?</h3>
              <p className="mt-1 text-xs text-slate-500">
                Join early access to get personalized ecosystem reports, track improvements over time, and connect with monetization pathways.
              </p>
            </div>
            <a
              href="/#waitlist"
              className="shrink-0 inline-flex rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:scale-[1.02]"
            >
              Get Early Access
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl border border-amber-200/60 bg-amber-50/40 p-4">
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>Prototype Notice:</strong> This dashboard uses placeholder scoring for
            demonstration. Values are illustrative and will be replaced with validated scientific
            models and market-calibrated valuations.{' '}
            <a href="/#waitlist" className="underline hover:text-amber-900">Join the waitlist</a> for first access to production models.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ────────────── Sub-components ────────────── */

function FormCard({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      {hint && <p className="mt-1 text-[11px] text-slate-400">{hint}</p>}
      <div className="mt-3">{children}</div>
    </div>
  );
}

function SelectField({ label, value, onChange, options }: {
  label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[];
}) {
  return (
    <label className="mt-4 block">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-800 transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white hover:border-slate-300"
      >
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

function RangeField({ label, value, min, max, onChange, leftLabel, rightLabel, displayValue, accentColor }: {
  label: string; value: number; min: number; max: number; onChange: (v: number) => void;
  leftLabel: string; rightLabel: string; displayValue: string; accentColor: string;
}) {
  return (
    <label className="mt-5 block">
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-semibold text-slate-600">{label}</span>
        <span className="text-sm font-bold" style={{ color: accentColor }}>{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full"
      />
      <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
        <span>{leftLabel}</span><span>{rightLabel}</span>
      </div>
    </label>
  );
}

function ScoreDetails({ result }: { result: ReturnType<typeof scoreScenario> }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left group">
        <h3 className="text-sm font-bold text-slate-900">Score Breakdown Details</h3>
        <span className={`text-xs font-semibold text-emerald-600 transition-transform ${open ? 'rotate-180' : ''}`}>
          {open ? 'Hide' : 'Show'} Details
        </span>
      </button>
      {open && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up-fade">
          {(['carbon', 'water', 'biodiversity', 'resilience', 'economics'] as const).map((key) => {
            const meta = dimensionMeta.find((d) => d.key === key)!;
            return (
              <div key={key} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: meta.color }} />
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{key}</p>
                </div>
                <ul className="mt-2.5 space-y-1">
                  {result.details[key].map((line, i) => (
                    <li key={i} className="text-xs text-slate-500 font-mono">{line}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MonetizationPanel({ result }: { result: ReturnType<typeof scoreScenario> }) {
  const items = [
    { label: 'Carbon credit programs', value: result.monetization.carbonCredits, color: 'bg-amber-800' },
    { label: 'Water quality incentives', value: result.monetization.waterIncentives, color: 'bg-sky-500' },
    { label: 'Biodiversity contracts', value: result.monetization.biodiversityContracts, color: 'bg-emerald-500' },
    { label: 'Sustainability premium', value: result.monetization.sustainabilityPremium, color: 'bg-violet-500' },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-bold text-slate-900">Monetization Opportunities</h3>
      <p className="mt-1 text-xs text-slate-400">Est. annual potential per acre (demo)</p>
      <div className="mt-5 space-y-3.5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                <span className="text-sm text-slate-600">{item.label}</span>
              </div>
              <span className="text-sm font-bold text-slate-900 tabular-nums">${item.value}/ac</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-1.5 rounded-full bar-fill ${item.color}`}
                style={{ width: `${Math.min(100, item.value * 2)}%` }}
              />
            </div>
          </div>
        ))}
        <div className="border-t border-slate-200 pt-3.5 flex items-center justify-between">
          <span className="text-sm font-bold text-slate-900">Total Potential</span>
          <span className="text-xl font-extrabold text-emerald-700 tabular-nums">${result.monetization.total}/ac</span>
        </div>
      </div>
    </div>
  );
}

function ValuationPanel({ result }: { result: ReturnType<typeof scoreScenario> }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
      <h3 className="text-sm font-bold text-slate-900">Summary Valuation</h3>
      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Combined Ecosystem Value</p>
        <p className="mt-3 text-6xl font-extrabold text-emerald-700 tabular-nums">${result.ecosystemValuePotentialUsdAcre}</p>
        <p className="mt-1 text-sm text-slate-400">per acre / year</p>
        <div className="mt-5 flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
          <span className="text-xs font-medium text-emerald-700">Demo estimate — placeholder model</span>
        </div>
      </div>
      <div className="rounded-xl bg-slate-50 p-3.5 mt-auto">
        <p className="text-xs text-slate-400 leading-relaxed">
          Integrates all five scoring dimensions. Real valuations will use validated models and market data.
        </p>
      </div>
    </div>
  );
}
