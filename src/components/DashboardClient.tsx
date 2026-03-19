'use client';

import { useMemo, useState } from 'react';
import { presetScenarios, ScenarioInput } from '../data/scenarios';
import { scoreScenario } from '../lib/model/scoring';
import { MetricCard } from './MetricCard';

export function DashboardClient() {
  const [input, setInput] = useState<ScenarioInput>(presetScenarios[1]);
  const result = useMemo(() => scoreScenario(input), [input]);
  const comparisons = useMemo(() => presetScenarios.map((s) => ({ name: s.name, score: scoreScenario(s).terraValueScore })), []);

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Scenario Inputs</h2>
        <label className="mt-4 block text-sm">Preset use case
          <select className="mt-1 w-full rounded-md border border-slate-300 px-2 py-2" onChange={(e) => setInput(presetScenarios[Number(e.target.value)])}>
            {presetScenarios.map((s, i) => <option key={s.name} value={i}>{s.name}</option>)}
          </select>
        </label>
        <label className="mt-3 block text-sm">Rotation diversity ({input.rotationDiversity})
          <input type="range" min={1} max={5} value={input.rotationDiversity} className="w-full" onChange={(e) => setInput({ ...input, rotationDiversity: Number(e.target.value) })} />
        </label>
        <label className="mt-3 block text-sm">Slope risk ({input.slopeRisk})
          <input type="range" min={1} max={5} value={input.slopeRisk} className="w-full" onChange={(e) => setInput({ ...input, slopeRisk: Number(e.target.value) })} />
        </label>
      </aside>
      <section className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <MetricCard label="Soil Carbon Potential" value={`${result.carbon}/100`} hint="Stock + sequestration direction" />
          <MetricCard label="Water Quality Potential" value={`${result.water}/100`} hint="Nitrate + runoff signal" />
          <MetricCard label="Biodiversity Score" value={`${result.biodiversity}/100`} hint="Habitat + diversity" />
          <MetricCard label="Yield Resilience" value={`${result.resilience}/100`} hint="Stability under stress" />
          <MetricCard label="Economic ROI Potential" value={`${result.economics}/100`} hint="Input efficiency + upside" />
          <MetricCard label="TerraValue Score" value={`${result.terraValueScore}/100`} hint="Integrated ecosystem performance" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold">Summary Valuation Panel</h3>
            <p className="mt-2 text-3xl font-bold text-emerald-800">${result.ecosystemValuePotentialUsdAcre}/acre</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold">Future Monetization Opportunities</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600"><li>Carbon programs</li><li>Water incentives</li><li>Biodiversity contracts</li><li>Sustainability-linked finance</li></ul>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold">Scenario Comparison</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {comparisons.map((c) => <div key={c.name} className="rounded-lg border border-slate-200 p-3"><p className="text-sm">{c.name}</p><p className="mt-1 text-xl font-bold">{c.score}/100</p></div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
