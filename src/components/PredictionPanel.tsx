'use client';

import { useState } from 'react';
import { PredictionResult } from '../agents/types';
import { scoreLabel, scoreBarColor } from '../lib/model/scoring';

type Props = {
  result: PredictionResult | null;
};

export function PredictionPanel({ result }: Props) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!result) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100/50 p-12 text-center">
        <div className="mx-auto h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center mb-4">
          <svg className="h-8 w-8 text-sky-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
          </svg>
        </div>
        <h3 className="text-sm font-semibold text-slate-900">Add a Location for Enhanced Predictions</h3>
        <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
          Select a state or enter coordinates in the sidebar to unlock soil carbon sequestration, water quality, and water quantity predictions powered by location-specific climate and soil data.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Soil Carbon
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-[11px] text-sky-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />Water Quality
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-[11px] text-teal-700">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />Water Quantity
          </div>
        </div>
        <p className="mt-4 text-[11px] text-slate-400">
          Supports all US states &middot; Coordinate entry (lat 24-49, lon -125 to -66)
        </p>
      </div>
    );
  }

  const { predictions, research, enhancedScore } = result;
  const { soilCarbon, waterQuality, waterQuantity } = predictions;

  const toggle = (section: string) =>
    setExpandedSection(expandedSection === section ? null : section);

  return (
    <div className="space-y-4">
      {/* Enhanced Score Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6 shadow-sm">
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse-soft" />
              Model-Enhanced Score
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-sky-800 tabular-nums">{enhancedScore}</span>
              <span className="text-lg text-slate-400">/ 100</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              {scoreLabel(enhancedScore)} — based on location-specific soil &amp; climate data
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{research.regionName}</p>
            <p className="text-xs text-slate-500 mt-1">{research.soilProfile.seriesName}</p>
            <p className="text-xs text-slate-400">
              {research.weather.annualMeanTempC}°C &middot; {research.weather.annualPrecipMm}mm/yr
            </p>
          </div>
        </div>
      </div>

      {/* Three Prediction Cards */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Soil Carbon */}
        <PredictionCard
          title="Soil Carbon"
          icon={<CarbonModelIcon />}
          score={Math.min(100, Math.max(0, Math.round(50 + soilCarbon.annualSequestrationRate * 40)))}
          expanded={expandedSection === 'carbon'}
          onToggle={() => toggle('carbon')}
          metrics={[
            { label: 'Current SOC stock', value: `${soilCarbon.currentStock} t C/ha` },
            { label: '10-yr projection', value: `${soilCarbon.projectedStock10yr} t C/ha` },
            { label: 'Sequestration rate', value: `${soilCarbon.annualSequestrationRate} t C/ha/yr`, highlight: soilCarbon.annualSequestrationRate > 0 },
            { label: 'CO₂ equivalent', value: `${soilCarbon.co2EquivalentPerYear} t CO₂e/yr` },
            { label: 'Carbon credit value', value: `$${soilCarbon.carbonCreditValue}/ha/yr`, highlight: true },
            { label: 'Confidence', value: `${Math.round(soilCarbon.confidence * 100)}%` },
          ]}
          drivers={soilCarbon.drivers}
          color="amber"
        />

        {/* Water Quality */}
        <PredictionCard
          title="Water Quality"
          icon={<WaterQualityModelIcon />}
          score={waterQuality.qualityScore}
          expanded={expandedSection === 'quality'}
          onToggle={() => toggle('quality')}
          metrics={[
            { label: 'Quality score', value: `${waterQuality.qualityScore}/100` },
            { label: 'N leaching risk', value: `${waterQuality.nitrogenLeachingRisk}/100`, highlight: waterQuality.nitrogenLeachingRisk > 50 },
            { label: 'P runoff risk', value: `${waterQuality.phosphorusRunoffRisk}/100`, highlight: waterQuality.phosphorusRunoffRisk > 50 },
            { label: 'Sediment loss', value: `${waterQuality.sedimentLoss} t/ha/yr` },
            { label: 'Nutrient reduction', value: `${waterQuality.nutrientReductionPct}%` },
            { label: 'Payment potential', value: `$${waterQuality.paymentPotential}/ha/yr`, highlight: true },
          ]}
          drivers={waterQuality.drivers}
          color="sky"
        />

        {/* Water Quantity */}
        <PredictionCard
          title="Water Quantity"
          icon={<WaterQuantityModelIcon />}
          score={waterQuantity.quantityScore}
          expanded={expandedSection === 'quantity'}
          onToggle={() => toggle('quantity')}
          metrics={[
            { label: 'Quantity score', value: `${waterQuantity.quantityScore}/100` },
            { label: 'Water balance', value: `${waterQuantity.waterBalance > 0 ? '+' : ''}${waterQuantity.waterBalance} mm/yr` },
            { label: 'Rainfall capture', value: `${waterQuantity.rainfallCaptureEfficiency}%` },
            { label: 'WHC improvement', value: `+${waterQuantity.waterHoldingImprovement}%` },
            { label: 'Drought resilience', value: `${waterQuantity.droughtResilience}/100` },
            ...(waterQuantity.irrigationSavings > 0
              ? [{ label: 'Irrigation savings', value: `${waterQuantity.irrigationSavings} mm/yr`, highlight: true as const }]
              : []),
          ]}
          drivers={waterQuantity.drivers}
          color="teal"
        />
      </div>

      {/* Soil Profile Summary */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <button
          onClick={() => toggle('soil')}
          className="flex w-full items-center justify-between text-left group"
        >
          <h3 className="text-sm font-bold text-slate-900">Soil Profile & Climate Data</h3>
          <span className={`text-xs font-semibold text-sky-600 transition-transform ${expandedSection === 'soil' ? 'rotate-180' : ''}`}>
            {expandedSection === 'soil' ? 'Hide' : 'Show'} Details
          </span>
        </button>
        {expandedSection === 'soil' && (
          <div className="mt-4 animate-slide-up-fade">
            {/* Soil layers */}
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Soil Layers</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-1.5 text-slate-400 font-medium">Depth</th>
                    <th className="text-left py-1.5 text-slate-400 font-medium">Texture</th>
                    <th className="text-right py-1.5 text-slate-400 font-medium">OC%</th>
                    <th className="text-right py-1.5 text-slate-400 font-medium">Clay%</th>
                    <th className="text-right py-1.5 text-slate-400 font-medium">pH</th>
                    <th className="text-right py-1.5 text-slate-400 font-medium">AWC</th>
                  </tr>
                </thead>
                <tbody>
                  {research.soilProfile.layers.map((layer, i) => (
                    <tr key={i} className="border-b border-slate-50">
                      <td className="py-1.5 text-slate-700 font-mono">{layer.depthTopCm}-{layer.depthBottomCm}cm</td>
                      <td className="py-1.5 text-slate-600">{layer.texture.replace(/_/g, ' ')}</td>
                      <td className="py-1.5 text-right text-slate-700 font-mono">{layer.organicCarbon}</td>
                      <td className="py-1.5 text-right text-slate-700 font-mono">{layer.clay}</td>
                      <td className="py-1.5 text-right text-slate-700 font-mono">{layer.ph}</td>
                      <td className="py-1.5 text-right text-slate-700 font-mono">{layer.awc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Research notes */}
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-4 mb-2">Research Notes</h4>
            <ul className="space-y-0.5">
              {research.notes.filter(Boolean).map((note, i) => (
                <li key={i} className="text-[11px] text-slate-500 font-mono">{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="rounded-xl border border-sky-200/60 bg-sky-50/40 p-4">
        <p className="text-xs text-sky-800 leading-relaxed">{result.summary}</p>
      </div>
    </div>
  );
}

/* ────────────── Sub-components ────────────── */

type Metric = {
  label: string;
  value: string;
  highlight?: boolean;
};

function PredictionCard({
  title, icon, score, expanded, onToggle, metrics, drivers, color,
}: {
  title: string;
  icon: React.ReactNode;
  score: number;
  expanded: boolean;
  onToggle: () => void;
  metrics: Metric[];
  drivers: string[];
  color: 'amber' | 'sky' | 'teal';
}) {
  const colorMap = {
    amber: { border: 'border-amber-200', bg: 'bg-amber-50', text: 'text-amber-800', dot: 'bg-amber-500', light: 'text-amber-600' },
    sky: { border: 'border-sky-200', bg: 'bg-sky-50', text: 'text-sky-800', dot: 'bg-sky-500', light: 'text-sky-600' },
    teal: { border: 'border-teal-200', bg: 'bg-teal-50', text: 'text-teal-800', dot: 'bg-teal-500', light: 'text-teal-600' },
  };
  const c = colorMap[color];

  return (
    <div className={`rounded-2xl border ${c.border} bg-white shadow-sm overflow-hidden`}>
      <div className={`${c.bg} p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{title}</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl font-extrabold ${c.text} tabular-nums`}>{score}</span>
            <span className="text-xs text-slate-400">/100</span>
          </div>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/60">
          <div
            className={`h-2 rounded-full bar-fill ${scoreBarColor(score)}`}
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="mt-1 text-[10px] text-slate-500 font-medium">{scoreLabel(score)}</p>
      </div>

      {/* Metrics grid */}
      <div className="p-4 grid grid-cols-2 gap-2">
        {metrics.slice(0, 6).map((m) => (
          <div key={m.label} className="rounded-lg border border-slate-100 bg-slate-50/50 p-2.5">
            <p className="text-[10px] font-medium text-slate-500 truncate">{m.label}</p>
            <p className={`text-xs font-bold mt-0.5 tabular-nums ${m.highlight ? c.light : 'text-slate-900'}`}>
              {m.value}
            </p>
          </div>
        ))}
      </div>

      {/* Drivers toggle */}
      <div className="px-4 pb-4">
        <button
          onClick={onToggle}
          className={`text-[11px] font-semibold flex items-center gap-1 ${c.light} hover:underline`}
        >
          {expanded ? '\u2715 Hide' : '+ Show'} drivers
        </button>

        {expanded && (
          <ul className="mt-2.5 space-y-1.5 animate-slide-up-fade border-t border-slate-100 pt-2.5">
            {drivers.map((d, i) => (
              <li key={i} className="flex gap-2 text-[11px] text-slate-600">
                <span className={`mt-1 h-1.5 w-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ────────────── Icons ────────────── */

function CarbonModelIcon() {
  return (
    <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function WaterQualityModelIcon() {
  return (
    <svg className="h-4 w-4 text-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-9.25-8.396c.251.023.501.05.75.082m-.75-.082a24.301 24.301 0 00-4.5 0" />
    </svg>
  );
}

function WaterQuantityModelIcon() {
  return (
    <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}
