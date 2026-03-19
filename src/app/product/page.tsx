import Link from 'next/link';
import { Section } from '../../components/Section';
import { ArrowRightIcon, streamIcons } from '../../components/Icons';
import { valueStreams } from '../../content/site';
import { HeroParticles } from '../../components/HeroParticles';
import { Reveal } from '../../components/Reveal';
import { AnimatedWorkflow } from '../../components/AnimatedWorkflow';
import { Tabs } from '../../components/Tabs';
import { ProgressRing } from '../../components/ProgressRing';

export default function ProductPage() {
  return (
    <div className="space-y-12">
      {/* ────────────── Hero ────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-700/30 bg-gradient-to-br from-[#042f1f] via-[#064e33] to-[#0a6e49] p-8 text-white shadow-2xl sm:p-14 animate-gradient">
        <HeroParticles />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] dot-grid" />
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-800/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-200 animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            Product
          </p>
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            How TerraValue Works
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            From farm data inputs to modular model layers to decision-ready ecosystem value —
            a complete workflow for agricultural natural capital intelligence.
          </p>
          <div className="mt-7 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link href="/dashboard" className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-emerald-900 shadow-lg hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Try the Prototype <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────── Visual Workflow (Animated) ────────────── */}
      <Reveal>
        <Section title="Product Workflow" subtitle="Three-stage pipeline: Data In, Model Layers, Value Out.">
          <AnimatedWorkflow
            steps={[
              {
                number: 1,
                title: 'Farm Data Inputs',
                items: [
                  'Soil samples & organic matter',
                  'Weather & climate data',
                  'Management practices & history',
                  'Crop system & rotation details',
                  'Landscape & hydrologic context',
                ],
                color: '#0a6e49',
                accentBg: '',
              },
              {
                number: 2,
                title: 'Model Layers',
                items: [
                  'Carbon Module',
                  'Water Quality Module',
                  'Biodiversity Module',
                  'Yield Resilience Module',
                  'Economic Module',
                ],
                color: '#0d7e9a',
                accentBg: '',
              },
              {
                number: 3,
                title: 'Value Outputs',
                items: [
                  'Ecosystem performance scores',
                  'Estimated value ($/acre)',
                  'Scenario comparison',
                  'ROI insights & payback',
                  'Credit & payment pathways',
                ],
                color: '#0ea5e9',
                accentBg: '',
              },
            ]}
          />
        </Section>
      </Reveal>

      {/* ────────────── Model Layers (Tabbed) ────────────── */}
      <Reveal>
        <Section
          title="Model Layers in Detail"
          subtitle="Each module uses transparent, modular scoring — designed to be replaced with validated models."
        >
          <Tabs
            variant="pills"
            tabs={[
              ...modelTabs,
              {
                id: 'composite',
                label: 'Composite',
                content: (
                  <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-teal-50/60 p-6">
                    <h3 className="text-base font-bold text-slate-900">Composite Scoring Engine</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      All five module scores are combined using weighted averaging to produce a unified
                      TerraValue Score (0–100) and a dollar-denominated ecosystem value estimate per acre per year.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-6">
                      <ProgressRing value={76} label="TerraValue Score" sublabel="Weighted composite" color="#064e33" size={120} />
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Est. Value</p>
                        <p className="mt-1 text-4xl font-extrabold text-emerald-700">$482</p>
                        <p className="text-xs text-slate-400">per acre / year</p>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </Section>
      </Reveal>

      {/* ────────────── Interactive Architecture Diagram ────────────── */}
      <Reveal>
        <Section title="Product Architecture" subtitle="Designed for modular growth — from MVP to full digital twin and marketplace." dark>
          <InteractiveArchitecture />
        </Section>
      </Reveal>

      {/* ────────────── Future Monetization ────────────── */}
      <Reveal>
        <Section
          title="Future Monetization Pathways"
          subtitle="TerraValue is designed to unlock multiple revenue streams from ecosystem service outcomes."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: 'Carbon Credit Programs', desc: 'Generate and sell verified carbon credits from improved soil management.', badge: 'High potential', color: '#7d5d41' },
              { title: 'Water Quality Incentives', desc: 'Access watershed payments, NRCS programs, and state water quality trading.', badge: 'Growing market', color: '#0ea5e9' },
              { title: 'Biodiversity Contracts', desc: 'Participate in emerging biodiversity net gain markets and conservation contracts.', badge: 'Emerging', color: '#22c55e' },
              { title: 'Sustainability-Linked Finance', desc: 'Qualify for green loans, sustainability-linked lending, and ESG investment products.', badge: 'Enterprise ready', color: '#8b5cf6' },
            ].map((pathway) => (
              <div key={pathway.title} className="card-interactive rounded-xl border border-slate-200 bg-white p-6 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: pathway.color }} />
                    <h3 className="text-sm font-bold text-slate-900">{pathway.title}</h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700">{pathway.badge}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{pathway.desc}</p>
                <div className="mt-3 h-1 w-12 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full rounded-full transition-all duration-700" style={{ backgroundColor: pathway.color }} />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* ────────────── CTA ────────────── */}
      <Reveal>
        <section className="relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-8 text-center shadow-sm sm:p-14 mesh-gradient">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">See it in action</h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            Our interactive prototype demonstrates the TerraValue workflow with real scenario comparison.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/dashboard" className="group inline-flex items-center gap-2.5 rounded-xl bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-800 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Launch Dashboard <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#waitlist" className="inline-flex items-center rounded-xl border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 transition-all">
              Join Waitlist
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

/* ────────────── Model Tabs Content ────────────── */
const modelTabs = [
  {
    id: 'carbon',
    label: 'Carbon',
    content: (
      <ModelTabContent
        title="Carbon Module"
        color="#7d5d41"
        inputs={['Tillage type & intensity', 'Cover crop strategy', 'Soil organic matter %', 'Crop rotation diversity']}
        outputs={['Carbon stock direction', 'Sequestration potential (tCO2e/ac/yr)', 'Climate mitigation score']}
        description="Models how management practices affect soil organic carbon stocks, sequestration rates, and climate mitigation potential."
      />
    ),
  },
  {
    id: 'water',
    label: 'Water',
    content: (
      <ModelTabContent
        title="Water Quality Module"
        color="#0ea5e9"
        inputs={['Nutrient management strategy', 'Cover crop presence & type', 'Slope / topography risk', 'Drainage context']}
        outputs={['Nitrate loss risk reduction', 'Runoff & P loss control', 'Watershed impact score']}
        description="Quantifies how farm practices reduce nutrient loss, improve water infiltration, and protect downstream water quality."
      />
    ),
  },
  {
    id: 'biodiversity',
    label: 'Biodiversity',
    content: (
      <ModelTabContent
        title="Biodiversity Module"
        color="#22c55e"
        inputs={['Crop rotation diversity', 'Cover crop species mix', 'Tillage disturbance level', 'Landscape context']}
        outputs={['Habitat quality score', 'Pollinator support index', 'Species diversity potential']}
        description="Assesses how agricultural practices support above-ground and below-ground biodiversity across the farm landscape."
      />
    ),
  },
  {
    id: 'resilience',
    label: 'Resilience',
    content: (
      <ModelTabContent
        title="Yield Resilience Module"
        color="#f59e0b"
        inputs={['Rotation complexity', 'Soil health indicators', 'Irrigation availability', 'Practice stability history']}
        outputs={['Weather stress buffer score', 'Yield stability index', 'Long-term productivity trend']}
        description="Evaluates how management practices buffer against weather stress, maintain yield stability, and build long-term productive capacity."
      />
    ),
  },
  {
    id: 'economics',
    label: 'Economics',
    content: (
      <ModelTabContent
        title="Economic Module"
        color="#8b5cf6"
        inputs={['Input costs & efficiency', 'Practice implementation costs', 'Market & premium context', 'Ecosystem service revenue potential']}
        outputs={['Input efficiency score', 'Net ecosystem ROI', 'Monetization opportunity index']}
        description="Models the economic impact of management changes — balancing input costs, practice costs, and new revenue from ecosystem services."
      />
    ),
  },
];

function ModelTabContent({
  title, color, inputs, outputs, description,
}: {
  title: string; color: string; inputs: string[]; outputs: string[]; description: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1px_1fr]">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Key Inputs</p>
          <ul className="space-y-2">
            {inputs.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:block bg-slate-200" />
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Outputs</p>
        <ul className="space-y-3">
          {outputs.map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ────────────── Interactive Architecture ────────────── */
function InteractiveArchitecture() {
  const layers = [
    {
      name: 'UI Layer',
      tech: 'Next.js + React + Tailwind',
      modules: ['Landing Page', 'Product Page', 'Dashboard', 'Waitlist / Forms'],
      color: 'border-emerald-400/40 bg-emerald-500/10',
      dotColor: 'bg-emerald-400',
    },
    {
      name: 'Model Engine',
      tech: 'Modular scoring + future scientific models',
      modules: ['Carbon', 'Water', 'Biodiversity', 'Resilience', 'Economics'],
      color: 'border-teal-400/40 bg-teal-500/10',
      dotColor: 'bg-teal-400',
    },
    {
      name: 'Data Layer',
      tech: 'Future: APIs, databases, geospatial',
      modules: ['Soil API', 'Weather API', 'USDA / Geodata', 'User Data'],
      color: 'border-sky-400/40 bg-sky-500/10',
      dotColor: 'bg-sky-400',
    },
    {
      name: 'Platform Layer',
      tech: 'Future: Auth, payments, marketplace',
      modules: ['Authentication', 'Payments', 'Marketplace', 'Enterprise'],
      color: 'border-violet-400/40 bg-violet-500/10',
      dotColor: 'bg-violet-400',
    },
  ];

  return (
    <div className="space-y-4">
      {layers.map((layer, i) => (
        <div key={layer.name} className={`rounded-xl border p-5 ${layer.color}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className={`h-2.5 w-2.5 rounded-full ${layer.dotColor}`} />
              <h4 className="text-sm font-bold text-emerald-100">{layer.name}</h4>
            </div>
            <span className="text-[10px] text-emerald-300/60 font-mono">{layer.tech}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {layer.modules.map((mod) => (
              <span key={mod} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-emerald-200/80 hover:bg-white/10 hover:text-emerald-100 transition-colors cursor-default">
                {mod}
              </span>
            ))}
          </div>
          {/* Connection arrow */}
          {i < layers.length - 1 && (
            <div className="flex justify-center mt-3">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M10 0v12M4 8l6 6 6-6" stroke="rgba(74,216,163,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
