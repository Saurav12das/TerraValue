import Link from 'next/link';
import { ArrowRightIcon, streamIcons } from '../../components/Icons';
import { valueStreams } from '../../content/site';
import { Reveal } from '../../components/Reveal';
import { AnimatedWorkflow } from '../../components/AnimatedWorkflow';
import { Tabs } from '../../components/Tabs';
import { ProgressRing } from '../../components/ProgressRing';

export default function ProductPage() {
  return (
    <>
      {/* ────────────── Hero ────────────── */}
      <section className="relative bg-[#0C0C0C] px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-30" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#5BA3D9]/[0.04] blur-[150px]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ECF8E]/70 animate-slide-up-fade">
            Product
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] tracking-tight text-white sm:text-6xl [font-family:var(--font-display)] animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            How TerraValue Works
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/40 leading-relaxed animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
            From farm data inputs to modular model layers to decision-ready ecosystem value —
            a complete workflow for agricultural natural capital intelligence.
          </p>
          <div className="mt-8 animate-slide-up-fade" style={{ animationDelay: '300ms' }}>
            <Link href="/dashboard" className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0C0C0C] transition-all hover:bg-white/90">
              Try the Prototype <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────── Workflow ────────────── */}
      <section className="bg-[#FAFAF8] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Workflow</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                Three-stage pipeline
              </h2>
              <p className="mt-3 text-base text-[#6B6B6B]">Data In. Model Layers. Value Out.</p>
            </div>
          </Reveal>
          <Reveal>
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
                  color: '#2A9D6A',
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
                  color: '#5BA3D9',
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
                  color: '#D4A853',
                  accentBg: '',
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ────────────── Model Layers (Tabbed) ────────────── */}
      <section className="bg-white py-24 lg:py-32 px-6 lg:px-8 border-t border-[#E8E6E1]/50">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Model Layers</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                Transparent, modular scoring
              </h2>
              <p className="mt-3 text-base text-[#6B6B6B]">Each module is designed to be replaced with validated scientific models.</p>
            </div>
          </Reveal>
          <Reveal>
            <Tabs
              variant="pills"
              tabs={[
                ...modelTabs,
                {
                  id: 'composite',
                  label: 'Composite',
                  content: (
                    <div className="rounded-xl border border-[#E8E6E1] bg-[#FAFAF8] p-8">
                      <h3 className="text-base font-semibold text-[#1A1A1A]">Composite Scoring Engine</h3>
                      <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                        All five module scores are combined using weighted averaging to produce a unified
                        TerraValue Score (0–100) and a dollar-denominated ecosystem value estimate per acre per year.
                      </p>
                      <div className="mt-8 flex flex-wrap justify-center gap-8">
                        <ProgressRing value={76} label="TerraValue Score" sublabel="Weighted composite" color="#2A9D6A" size={120} />
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Est. Value</p>
                          <p className="mt-1 text-4xl font-bold text-[#1A1A1A] [font-family:var(--font-display)]">482</p>
                          <p className="text-xs text-[#9A9A9A]">USD / acre / year</p>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ────────────── Architecture ────────────── */}
      <section className="bg-[#0C0C0C] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ECF8E]/70">Architecture</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl [font-family:var(--font-display)]">
                Designed for modular growth
              </h2>
              <p className="mt-3 text-base text-white/35">From MVP to full digital twin and marketplace.</p>
            </div>
          </Reveal>
          <Reveal>
            <InteractiveArchitecture />
          </Reveal>
        </div>
      </section>

      {/* ────────────── Monetization ────────────── */}
      <section className="bg-[#FAFAF8] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Monetization</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                Future revenue pathways
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Carbon Credit Programs', desc: 'Generate and sell verified carbon credits from improved soil management.', badge: 'High potential', color: '#8B7355' },
                { title: 'Water Quality Incentives', desc: 'Access watershed payments, NRCS programs, and state water quality trading.', badge: 'Growing market', color: '#5BA3D9' },
                { title: 'Biodiversity Contracts', desc: 'Participate in emerging biodiversity net gain markets and conservation contracts.', badge: 'Emerging', color: '#3ECF8E' },
                { title: 'Sustainability-Linked Finance', desc: 'Qualify for green loans, sustainability-linked lending, and ESG investment products.', badge: 'Enterprise ready', color: '#8B7EC8' },
              ].map((pathway) => (
                <div key={pathway.title} className="group rounded-xl border border-[#E8E6E1] bg-white p-7 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: pathway.color }} />
                      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">{pathway.title}</h3>
                    </div>
                    <span className="rounded-full bg-[#F2F1ED] px-2.5 py-0.5 text-[10px] font-semibold text-[#6B6B6B]">{pathway.badge}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{pathway.desc}</p>
                  <div className="mt-4 h-px bg-[#E8E6E1] overflow-hidden">
                    <div className="h-full w-0 group-hover:w-full transition-all duration-700" style={{ backgroundColor: pathway.color }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── CTA ────────────── */}
      <section className="bg-[#0C0C0C] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl [font-family:var(--font-display)] tracking-tight">See it in action</h2>
            <p className="mt-4 text-base text-white/35">
              Our interactive prototype demonstrates the TerraValue workflow with real scenario comparison.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/dashboard" className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0C0C0C] transition-all hover:bg-white/90">
                Launch Dashboard <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/#waitlist" className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/60 hover:text-white/80 hover:border-white/25 transition-all">
                Join Waitlist
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
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
        color="#8B7355"
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
        color="#5BA3D9"
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
        color="#3ECF8E"
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
        color="#D4A853"
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
        color="#8B7EC8"
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
    <div className="grid gap-8 md:grid-cols-[1fr_1px_1fr]">
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
          <h3 className="text-base font-semibold text-[#1A1A1A]">{title}</h3>
        </div>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">{description}</p>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A] mb-3">Key Inputs</p>
          <ul className="space-y-2">
            {inputs.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-[#6B6B6B]">
                <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: color }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:block bg-[#E8E6E1]" />
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A] mb-3">Outputs</p>
        <ul className="space-y-3">
          {outputs.map((item) => (
            <li key={item} className="rounded-lg border border-[#E8E6E1] bg-[#FAFAF8] px-4 py-3 text-sm font-medium text-[#1A1A1A]">
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
      dotColor: '#3ECF8E',
    },
    {
      name: 'Model Engine',
      tech: 'Modular scoring + future scientific models',
      modules: ['Carbon', 'Water', 'Biodiversity', 'Resilience', 'Economics'],
      dotColor: '#5BA3D9',
    },
    {
      name: 'Data Layer',
      tech: 'Future: APIs, databases, geospatial',
      modules: ['Soil API', 'Weather API', 'USDA / Geodata', 'User Data'],
      dotColor: '#D4A853',
    },
    {
      name: 'Platform Layer',
      tech: 'Future: Auth, payments, marketplace',
      modules: ['Authentication', 'Payments', 'Marketplace', 'Enterprise'],
      dotColor: '#8B7EC8',
    },
  ];

  return (
    <div className="space-y-3">
      {layers.map((layer, i) => (
        <div key={layer.name} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: layer.dotColor }} />
              <h4 className="text-sm font-semibold text-white/80">{layer.name}</h4>
            </div>
            <span className="text-[10px] text-white/25 font-mono">{layer.tech}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {layer.modules.map((mod) => (
              <span key={mod} className="rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs text-white/40 hover:text-white/60 hover:bg-white/[0.06] transition-colors cursor-default">
                {mod}
              </span>
            ))}
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center mt-3">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M8 0v8M4 6l4 4 4-4" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
