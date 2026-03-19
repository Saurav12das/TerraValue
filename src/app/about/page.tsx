import Link from 'next/link';
import { ArrowRightIcon } from '../../components/Icons';
import { Reveal } from '../../components/Reveal';
import { Tabs } from '../../components/Tabs';
import { AnimatedCounter } from '../../components/AnimatedCounter';

export default function AboutPage() {
  return (
    <>
      {/* ────────────── Hero ────────────── */}
      <section className="relative bg-[#0C0C0C] px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-30" />
        <div className="pointer-events-none absolute top-0 right-1/3 h-[400px] w-[400px] rounded-full bg-[#3ECF8E]/[0.04] blur-[150px]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ECF8E]/70 animate-slide-up-fade">
            About TerraValue
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] tracking-tight text-white sm:text-6xl [font-family:var(--font-display)] animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            Building the financial infrastructure for natural capital
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/40 leading-relaxed animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
            Agriculture generates immense environmental value. TerraValue is building the platform to measure, simulate, and monetize it.
          </p>
        </div>
      </section>

      {/* ────────────── Mission ────────────── */}
      <section className="bg-[#FAFAF8] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Our Mission</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                Build the financial and decision infrastructure for natural capital in agriculture.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div className="space-y-4 text-base leading-relaxed text-[#6B6B6B]">
                <p>
                  TerraValue converts regenerative and resilient farm practices into quantified,
                  decision-ready, and monetizable ecosystem outcomes. We believe every acre of
                  farmland generates natural capital value that is currently invisible to markets.
                </p>
                <p>
                  Our platform will make this value visible — translating management decisions
                  into measurable impacts on soil carbon, water quality, biodiversity, yield
                  resilience, and economic returns.
                </p>
              </div>
              <div className="rounded-xl border border-[#E8E6E1] bg-white p-8">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Core Positioning</h3>
                <p className="mt-5 text-xl font-semibold text-[#1A1A1A] leading-relaxed [font-family:var(--font-display)]">
                  &ldquo;Financial and decision infrastructure for natural capital in agriculture.&rdquo;
                </p>
                <p className="mt-4 text-sm text-[#6B6B6B] leading-relaxed">
                  TerraValue sits at the intersection of climate tech, ag-tech, and finance — creating
                  a new category of ecosystem service intelligence.
                </p>
                <div className="mt-5 flex gap-2">
                  {['Climate Tech', 'Ag Tech', 'Finance'].map((t) => (
                    <span key={t} className="rounded-full border border-[#E8E6E1] bg-[#F2F1ED] px-3 py-1 text-xs font-medium text-[#6B6B6B]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── The Problem (Tabbed) ────────────── */}
      <section className="bg-white py-24 lg:py-32 px-6 lg:px-8 border-t border-[#E8E6E1]/50">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">The Problem</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                Current systems are carbon-only or hopelessly fragmented.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <Tabs
              tabs={[
                {
                  id: 'fragmentation',
                  label: 'Fragmentation',
                  content: (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { title: 'Carbon-only tunnel vision', desc: 'Most platforms focus exclusively on soil carbon, ignoring water quality, biodiversity, yield resilience, and economic outcomes.' },
                        { title: 'Fragmented measurement', desc: 'Different tools for different metrics create data silos. No single platform integrates all ecosystem dimensions.' },
                      ].map((item) => (
                        <ProblemCard key={item.title} {...item} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: 'value-gap',
                  label: 'Value Gap',
                  content: (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { title: 'Invisible value', desc: 'Farmers adopt sustainable practices but cannot demonstrate or monetize the environmental value they create.' },
                        { title: 'Missing decision layer', desc: 'Without integrated data, producers cannot compare scenarios or identify the highest-value management pathways.' },
                      ].map((item) => (
                        <ProblemCard key={item.title} {...item} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: 'market',
                  label: 'Market Pressure',
                  content: (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { title: 'Market misalignment', desc: 'Buyers, insurers, and lenders want verified multi-dimensional sustainability metrics, but the infrastructure does not exist.' },
                        { title: 'Policy acceleration', desc: 'EU regulations, SEC climate disclosure, and USDA climate-smart programs are creating urgent demand — but supply-side infrastructure lags.' },
                      ].map((item) => (
                        <ProblemCard key={item.title} {...item} />
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ────────────── Vision ────────────── */}
      <section className="bg-[#0C0C0C] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ECF8E]/70">Vision</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-white sm:text-4xl [font-family:var(--font-display)]">
                Digital Twin + Valuation Engine
              </h2>
              <p className="mt-4 text-base text-white/35 leading-relaxed max-w-2xl">
                A farm-level operating intelligence layer for natural capital.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4 text-sm leading-relaxed text-white/40">
                <p>
                  TerraValue will evolve into a modular digital twin capable of simulating
                  ecosystem outcomes at the field level. Users will test management
                  scenarios, compare economic outcomes, and identify the highest-value pathways.
                </p>
                <p>
                  The platform integrates carbon, water, biodiversity, resilience, and economic
                  modules into a single system — producing a unified TerraValue Score
                  and dollar-denominated ecosystem value estimates.
                </p>
                <p>
                  Future capabilities include real-time data integration, API connectors,
                  marketplace features for ecosystem service credits, and enterprise dashboards.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-white/[0.06]" />
                <RoadmapTimeline />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── Why Agriculture ────────────── */}
      <section className="bg-[#FAFAF8] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Why Agriculture</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                Agriculture is a systems platform for the century ahead.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'Purpose: Community + Science',
                  desc: 'Agriculture links human purpose to place. It brings together growers, communities, and applied science to solve real-world problems across food systems and climate response.',
                  dot: '#D4A853',
                },
                {
                  title: 'Climate: Carbon Opportunity',
                  desc: 'Farm management influences one of the largest near-term climate levers: soil carbon. Better measurement and aligned incentives can accelerate meaningful, verifiable outcomes.',
                  dot: '#3ECF8E',
                },
                {
                  title: 'AI Future: Water Intelligence',
                  desc: "As AI scales, resource constraints become strategic. Agriculture's water systems can become a proving ground for intelligent allocation, resilience modeling, and optimization.",
                  dot: '#5BA3D9',
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-[#E8E6E1] bg-white p-7 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: card.dot }} />
                    <h3 className="text-[15px] font-semibold text-[#1A1A1A]">{card.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#6B6B6B]">{card.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── Natural Capital ────────────── */}
      <section className="bg-white py-24 lg:py-32 px-6 lg:px-8 border-t border-[#E8E6E1]/50">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Foundation</p>
              <h2 className="mt-4 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                Natural Capital & Ecosystem Service Intelligence
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4 text-sm text-[#6B6B6B] leading-relaxed">
                <p>
                  <strong className="text-[#1A1A1A]">Natural capital</strong> refers to the stock of natural
                  resources — soil, water, air, living organisms — that produce ecosystem services
                  benefiting people and the economy.
                </p>
                <p>
                  In agriculture, these services include carbon sequestration, water filtration, pollinator
                  habitat, flood buffering, and long-term soil fertility. TerraValue makes these
                  flows visible, measurable, and monetizable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Provisioning', desc: 'Food, fiber, bioenergy', color: '#3ECF8E' },
                  { label: 'Regulating', desc: 'Carbon, water, floods', color: '#5BA3D9' },
                  { label: 'Supporting', desc: 'Nutrients, soil, habitat', color: '#D4A853' },
                  { label: 'Cultural', desc: 'Landscape, community', color: '#8B7EC8' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#E8E6E1] bg-[#FAFAF8] p-5 transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                    <div className="h-1.5 w-8 rounded-full" style={{ backgroundColor: item.color }} />
                    <p className="mt-3 text-sm font-semibold text-[#1A1A1A]">{item.label}</p>
                    <p className="mt-0.5 text-xs text-[#9A9A9A]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── Impact Stats ────────────── */}
      <section className="bg-[#F2F1ED] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-px bg-[#E8E6E1] rounded-xl overflow-hidden sm:grid-cols-3">
              <div className="bg-white p-8 sm:p-10">
                <AnimatedCounter value={900} prefix="" suffix="M+" label="Acres of cropland in the US alone" />
              </div>
              <div className="bg-white p-8 sm:p-10">
                <AnimatedCounter value={70} suffix="%" label="Of freshwater use is agriculture" />
              </div>
              <div className="bg-white p-8 sm:p-10">
                <AnimatedCounter value={40} suffix="%" label="Of global land is used for farming" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── CTA ────────────── */}
      <section className="bg-[#0C0C0C] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl [font-family:var(--font-display)] tracking-tight">
              Join the TerraValue journey
            </h2>
            <p className="mt-4 text-base text-white/35">
              Whether you&apos;re a farmer, researcher, investor, or ecosystem partner — we&apos;d love to connect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#waitlist" className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0C0C0C] transition-all hover:bg-white/90">
                Get in Touch <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/product" className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/60 hover:text-white/80 hover:border-white/25 transition-all">
                See the Product
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProblemCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-[#E8E6E1] bg-[#FAFAF8] p-6 transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{desc}</p>
    </div>
  );
}

function RoadmapTimeline() {
  const phases = [
    { phase: 'Phase 1', label: 'MVP Platform', desc: 'Landing site, product concept, interactive prototype, lead capture.', active: true },
    { phase: 'Phase 2', label: 'Model Engine', desc: 'Validated scientific models, real data integration, user auth.' },
    { phase: 'Phase 3', label: 'Digital Twin', desc: 'Farm-level simulation, scenario optimization, API ecosystem.' },
    { phase: 'Phase 4', label: 'Marketplace', desc: 'Credit generation, buyer matching, sustainability-linked finance.' },
  ];

  return (
    <div className="space-y-4">
      {phases.map((item) => (
        <div key={item.phase} className="relative pl-12">
          <div className={`absolute left-3.5 top-4 h-3 w-3 rounded-full border-2 ${
            item.active
              ? 'border-[#3ECF8E] bg-[#3ECF8E] shadow-[0_0_8px_rgba(62,207,142,0.5)]'
              : 'border-white/20 bg-transparent'
          }`} />
          <div className={`rounded-lg border p-4 ${
            item.active
              ? 'border-[#3ECF8E]/20 bg-[#3ECF8E]/[0.05]'
              : 'border-white/[0.06] bg-white/[0.02]'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                item.active ? 'bg-[#3ECF8E]/15 text-[#3ECF8E]' : 'bg-white/[0.06] text-white/40'
              }`}>{item.phase}</span>
              <span className="text-sm font-medium text-white/80">{item.label}</span>
              {item.active && <span className="ml-auto text-[10px] font-medium text-[#3ECF8E]/70 animate-pulse-soft">CURRENT</span>}
            </div>
            <p className="mt-1.5 text-xs text-white/30">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
