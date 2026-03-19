import Link from 'next/link';
import { Section } from '../../components/Section';
import { ArrowRightIcon, streamIcons } from '../../components/Icons';
import { valueStreams } from '../../content/site';

export default function ProductPage() {
  return (
    <div className="space-y-10">
      {/* ────────────── Hero ────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-700/30 bg-gradient-to-br from-[#042f1f] via-[#064e33] to-[#0a6e49] p-8 text-white shadow-xl sm:p-14">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Product</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
          How TerraValue Works
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
          From farm data inputs to modular model layers to decision-ready ecosystem value outputs —
          a complete workflow for agricultural natural capital intelligence.
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-emerald-900 shadow-lg hover:bg-emerald-50"
          >
            Try the Prototype
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* ────────────── Visual Workflow ────────────── */}
      <Section
        title="Product Workflow"
        subtitle="Three-stage pipeline: Data In, Model Layers, Value Out."
      >
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          {/* Stage 1: Inputs */}
          <div className="relative rounded-xl border-2 border-emerald-200 bg-emerald-50/40 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">1</div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Farm Data Inputs</h3>
            <p className="mt-2 text-sm text-slate-500">Connect the information that defines your operation and landscape.</p>
            <ul className="mt-4 space-y-2">
              {[
                'Soil samples & organic matter',
                'Weather & climate data',
                'Management practices & history',
                'Crop system & rotation details',
                'Landscape & hydrologic context',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            {/* Arrow */}
            <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-600 text-white md:flex">
              <ArrowRightIcon size={14} />
            </div>
          </div>

          {/* Stage 2: Model Layers */}
          <div className="relative rounded-xl border-2 border-teal-200 bg-teal-50/40 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">2</div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Model Layers</h3>
            <p className="mt-2 text-sm text-slate-500">Five interconnected modules process your data into integrated ecosystem intelligence.</p>
            <ul className="mt-4 space-y-2">
              {valueStreams.map((s) => {
                const IconComp = streamIcons[s.key];
                return (
                  <li key={s.key} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span style={{ color: s.color }}>{IconComp && <IconComp size={16} />}</span>
                    {s.title} Module
                  </li>
                );
              })}
            </ul>
            <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-teal-600 text-white md:flex">
              <ArrowRightIcon size={14} />
            </div>
          </div>

          {/* Stage 3: Outputs */}
          <div className="rounded-xl border-2 border-sky-200 bg-sky-50/40 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white">3</div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">Value Outputs</h3>
            <p className="mt-2 text-sm text-slate-500">Actionable results that drive decisions and unlock monetization opportunities.</p>
            <ul className="mt-4 space-y-2">
              {[
                'Ecosystem performance scores',
                'Estimated environmental value ($/acre)',
                'Scenario comparison & optimization',
                'ROI insights & payback analysis',
                'Future credit & payment pathways',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ────────────── Model Detail Cards ────────────── */}
      <Section
        title="Model Layers in Detail"
        subtitle="Each module uses transparent, modular scoring that will be replaced with validated scientific models in future phases."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {[
            {
              title: 'Carbon Module',
              color: '#7d5d41',
              inputs: ['Tillage type', 'Cover crop strategy', 'Soil organic matter', 'Rotation diversity'],
              outputs: ['Carbon stock direction', 'Sequestration potential', 'Climate mitigation score'],
            },
            {
              title: 'Water Quality Module',
              color: '#0ea5e9',
              inputs: ['Nutrient management', 'Cover crop presence', 'Slope/topography', 'Drainage context'],
              outputs: ['Nitrate loss risk', 'Runoff reduction', 'Watershed impact score'],
            },
            {
              title: 'Biodiversity Module',
              color: '#22c55e',
              inputs: ['Crop rotation diversity', 'Cover crop mix', 'Tillage disturbance', 'Landscape context'],
              outputs: ['Habitat quality score', 'Pollinator support', 'Species diversity index'],
            },
            {
              title: 'Resilience Module',
              color: '#f59e0b',
              inputs: ['Rotation complexity', 'Soil health indicators', 'Irrigation availability', 'Practice stability'],
              outputs: ['Weather stress buffer', 'Yield stability index', 'Long-term productivity trend'],
            },
            {
              title: 'Economic Module',
              color: '#8b5cf6',
              inputs: ['Input costs', 'Practice costs', 'Market context', 'Ecosystem service potential'],
              outputs: ['Input efficiency score', 'Net ecosystem ROI', 'Monetization opportunity index'],
            },
            {
              title: 'Composite Engine',
              color: '#064e33',
              inputs: ['All five module scores', 'Weighted integration', 'Cross-system interactions'],
              outputs: ['TerraValue Score (0–100)', 'Ecosystem Value ($/acre/yr)', 'Monetization breakdown'],
            },
          ].map((module) => (
            <div key={module.title} className="card-hover rounded-xl border border-slate-200 bg-white p-5 overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: module.color }} />
                <h3 className="text-sm font-bold text-slate-900">{module.title}</h3>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Key Inputs</p>
                <ul className="mt-1.5 space-y-1">
                  {module.inputs.map((i) => (
                    <li key={i} className="text-xs text-slate-500">{i}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Outputs</p>
                <ul className="mt-1.5 space-y-1">
                  {module.outputs.map((o) => (
                    <li key={o} className="text-xs text-slate-600 font-medium">{o}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────── Architecture Diagram ────────────── */}
      <Section
        title="Product Architecture"
        subtitle="Designed for modular growth — from MVP prototype to full digital twin and marketplace."
        dark
      >
        <div className="overflow-x-auto rounded-xl border border-emerald-500/20 bg-emerald-950/50 p-6">
          <pre className="text-sm leading-relaxed text-emerald-200/80 font-mono whitespace-pre">
{`┌─────────────────────────────────────────────────────────────────────┐
│                        UI LAYER (Next.js)                          │
│  ┌──────────┐  ┌──────────┐  ┌────────────┐  ┌─────────────────┐  │
│  │ Landing  │  │ Product  │  │ Dashboard  │  │ Waitlist/Forms  │  │
│  │  Page    │  │  Page    │  │ Prototype  │  │                 │  │
│  └──────────┘  └──────────┘  └──────┬─────┘  └─────────────────┘  │
│                                     │                              │
├─────────────────────────────────────┼──────────────────────────────┤
│              MODEL ENGINE LAYER     │                              │
│  ┌─────────┐ ┌─────────┐ ┌────────┴──┐ ┌──────────┐ ┌─────────┐ │
│  │ Carbon  │ │  Water  │ │Biodiversi-│ │Resilience│ │Economic │ │
│  │ Module  │ │ Module  │ │ty Module  │ │  Module  │ │ Module  │ │
│  └────┬────┘ └────┬────┘ └─────┬─────┘ └────┬─────┘ └────┬────┘ │
│       └───────────┴────────────┴─────────────┴────────────┘      │
│                            │                                      │
│              ┌─────────────┴────────────────┐                     │
│              │   Composite Scoring Engine   │                     │
│              │  TerraValue Score + USD/acre │                     │
│              └──────────────────────────────┘                     │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                    DATA LAYER (Future)                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────────────────┐  │
│  │ Soil API │ │Weather   │ │ USDA /   │ │ User-uploaded data  │  │
│  │          │ │  API     │ │ Geodata  │ │                     │  │
│  └──────────┘ └──────────┘ └──────────┘ └─────────────────────┘  │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                  PLATFORM LAYER (Future)                           │
│  ┌────────┐ ┌────────────┐ ┌──────────┐ ┌───────────────────┐    │
│  │  Auth  │ │  Payments  │ │Marketplace│ │Enterprise Dashbds │    │
│  └────────┘ └────────────┘ └──────────┘ └───────────────────┘    │
└───────────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>
      </Section>

      {/* ────────────── Future Monetization ────────────── */}
      <Section
        title="Future Monetization Pathways"
        subtitle="The TerraValue platform is designed to unlock multiple revenue streams from ecosystem service outcomes."
      >
        <div className="grid gap-5 sm:grid-cols-2 stagger-children">
          {[
            {
              title: 'Carbon Credit Programs',
              desc: 'Generate and sell verified carbon credits from improved soil management practices.',
              badge: 'High potential',
            },
            {
              title: 'Water Quality Incentives',
              desc: 'Access watershed payments, NRCS programs, and state-level water quality trading.',
              badge: 'Growing market',
            },
            {
              title: 'Biodiversity Contracts',
              desc: 'Participate in emerging biodiversity net gain markets and conservation contracts.',
              badge: 'Emerging',
            },
            {
              title: 'Sustainability-Linked Finance',
              desc: 'Qualify for green loans, sustainability-linked lending, and ESG-rated investment products.',
              badge: 'Enterprise ready',
            },
          ].map((pathway) => (
            <div key={pathway.title} className="card-hover rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">{pathway.title}</h3>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">{pathway.badge}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{pathway.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────── CTA ────────────── */}
      <section className="rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-8 text-center shadow-sm sm:p-12">
        <h2 className="text-2xl font-bold text-slate-900">See it in action</h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
          Our interactive prototype demonstrates the TerraValue workflow with real scenario comparison.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800"
          >
            Launch Dashboard
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex items-center rounded-xl border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
