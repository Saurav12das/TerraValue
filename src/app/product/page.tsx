import { Section } from '../../components/Section';

export default function ProductPage() {
  return (
    <div className="space-y-8">
      <Section title="Product Workflow" subtitle="Phase 1 concept: data in, model layers, decision outputs.">
        <div className="grid gap-4 md:grid-cols-3"><div className="rounded-xl border p-4"><h3 className="font-semibold">Farm Data Inputs</h3><ul className="mt-2 list-disc pl-4 text-sm text-slate-600"><li>Soil</li><li>Weather</li><li>Management</li><li>Crop systems</li><li>Landscape context</li></ul></div><div className="rounded-xl border p-4"><h3 className="font-semibold">Model Layers</h3><ul className="mt-2 list-disc pl-4 text-sm text-slate-600"><li>Carbon</li><li>Water</li><li>Biodiversity</li><li>Resilience</li><li>Economics</li></ul></div><div className="rounded-xl border p-4"><h3 className="font-semibold">Outputs</h3><ul className="mt-2 list-disc pl-4 text-sm text-slate-600"><li>Ecosystem scores</li><li>Estimated value</li><li>Scenario comparison</li><li>ROI insights</li></ul></div></div>
      </Section>
      <Section title="Architecture Diagram" subtitle="Designed for future APIs, auth, payments, and enterprise dashboards."><div className="overflow-x-auto rounded-xl border bg-slate-950 p-4 text-sm text-emerald-100"><pre>{`[UI Layer: Next.js]\n -> [Content + Forms]\n -> [Prototype Dashboard]\n -> [Model Engine Placeholder]\n -> [Outputs + Future API connectors]`}</pre></div></Section>
    </div>
  );
}
