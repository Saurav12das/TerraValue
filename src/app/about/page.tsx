import Link from 'next/link';
import { Section } from '../../components/Section';
import { ArrowRightIcon } from '../../components/Icons';
import { HeroParticles } from '../../components/HeroParticles';
import { Reveal } from '../../components/Reveal';
import { Tabs } from '../../components/Tabs';
import { AnimatedCounter } from '../../components/AnimatedCounter';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* ────────────── Hero ────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-700/30 bg-gradient-to-br from-[#042f1f] via-[#064e33] to-[#0a6e49] p-8 text-white shadow-2xl sm:p-14 animate-gradient">
        <HeroParticles />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] dot-grid" />
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-800/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-200 animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            About TerraValue
          </p>
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Building the financial infrastructure for natural capital
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-100/80 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Agriculture generates immense environmental value. TerraValue is building the platform to measure, simulate, and monetize it.
          </p>
        </div>
      </section>

      {/* ────────────── Mission ────────────── */}
      <Reveal>
        <Section
          title="Our Mission"
          subtitle="Build the financial and decision infrastructure for natural capital in agriculture."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-slate-600">
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
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-teal-50/60 p-7">
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800">Core Positioning</h3>
              <p className="mt-4 text-xl font-bold text-emerald-900 leading-relaxed">
                &ldquo;Financial and decision infrastructure for natural capital in agriculture.&rdquo;
              </p>
              <p className="mt-4 text-sm text-emerald-700 leading-relaxed">
                TerraValue sits at the intersection of climate tech, ag-tech, and finance — creating
                a new category of ecosystem service intelligence.
              </p>
              <div className="mt-5 flex gap-3">
                {['Climate Tech', 'Ag Tech', 'Finance'].map((t) => (
                  <span key={t} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Reveal>

      {/* ────────────── The Problem (Tabbed) ────────────── */}
      <Reveal>
        <Section
          title="The Problem"
          subtitle="Current systems are carbon-only or hopelessly fragmented — leaving most ecosystem value invisible."
        >
          <Tabs
            tabs={[
              {
                id: 'fragmentation',
                label: 'Fragmentation',
                content: (
                  <div className="grid gap-5 sm:grid-cols-2">
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
                  <div className="grid gap-5 sm:grid-cols-2">
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
                  <div className="grid gap-5 sm:grid-cols-2">
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
        </Section>
      </Reveal>

      {/* ────────────── Vision with Interactive Timeline ────────────── */}
      <Reveal>
        <Section
          title="Vision: Digital Twin + Valuation Engine"
          subtitle="A farm-level operating intelligence layer for natural capital."
          dark
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-emerald-100/85">
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

            {/* Interactive timeline */}
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-emerald-500/30" />
              <RoadmapTimeline />
            </div>
          </div>
        </Section>
      </Reveal>

      {/* ────────────── Why Agriculture ────────────── */}
      <Reveal>
        <Section
          title="Why Agriculture Matters Now"
          subtitle="Agriculture is not just a sector — it is a systems platform for the century ahead."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Purpose: Community + Science',
                desc: 'Agriculture links human purpose to place. It brings together growers, communities, and applied science to solve real-world problems across food systems and climate response.',
                gradient: 'from-amber-50 to-orange-50',
                iconColor: 'text-amber-600',
                borderColor: 'border-amber-200',
              },
              {
                title: 'Climate: Carbon Opportunity',
                desc: 'Farm management influences one of the largest near-term climate levers: soil carbon. Better measurement and aligned incentives can accelerate meaningful, verifiable outcomes.',
                gradient: 'from-emerald-50 to-green-50',
                iconColor: 'text-emerald-600',
                borderColor: 'border-emerald-200',
              },
              {
                title: 'AI Future: Water Intelligence',
                desc: "As AI scales, resource constraints become strategic. Agriculture's water systems can become a proving ground for intelligent allocation, resilience modeling, and optimization.",
                gradient: 'from-sky-50 to-blue-50',
                iconColor: 'text-sky-600',
                borderColor: 'border-sky-200',
              },
            ].map((card) => (
              <div key={card.title} className={`card-interactive rounded-2xl border ${card.borderColor} bg-gradient-to-br ${card.gradient} p-6`}>
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* ────────────── Natural Capital ────────────── */}
      <Reveal>
        <Section
          title="Natural Capital & Ecosystem Service Intelligence"
          subtitle="The foundation of TerraValue: making the invisible value of agriculture visible and tradeable."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Natural capital</strong> refers to the stock of natural
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
                { label: 'Provisioning', desc: 'Food, fiber, bioenergy', color: '#22c55e' },
                { label: 'Regulating', desc: 'Carbon, water, floods', color: '#0ea5e9' },
                { label: 'Supporting', desc: 'Nutrients, soil, habitat', color: '#f59e0b' },
                { label: 'Cultural', desc: 'Landscape, community', color: '#8b5cf6' },
              ].map((item) => (
                <div key={item.label} className="card-hover rounded-xl border border-slate-200 bg-white p-4">
                  <div className="h-2 w-8 rounded-full" style={{ backgroundColor: item.color }} />
                  <p className="mt-2 text-sm font-bold text-slate-900">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Reveal>

      {/* ────────────── Impact Stats ────────────── */}
      <Reveal>
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <AnimatedCounter value={900} prefix="" suffix="M+" label="Acres of cropland in the US alone" />
            <AnimatedCounter value={70} suffix="%" label="Of freshwater use is agriculture" />
            <AnimatedCounter value={40} suffix="%" label="Of global land is used for farming" />
          </div>
        </section>
      </Reveal>

      {/* ────────────── CTA ────────────── */}
      <Reveal>
        <section className="relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-8 text-center shadow-sm sm:p-14 mesh-gradient">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Join the TerraValue journey</h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            Whether you&apos;re a farmer, researcher, investor, or ecosystem partner — we&apos;d love to connect.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/#waitlist" className="group inline-flex items-center gap-2.5 rounded-xl bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-emerald-800 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Get in Touch <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/product" className="inline-flex items-center rounded-xl border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 transition-all">
              See the Product
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

function ProblemCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card-hover rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
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
          {/* Dot on timeline */}
          <div className={`absolute left-3.5 top-3 h-3 w-3 rounded-full border-2 ${
            item.active
              ? 'border-emerald-400 bg-emerald-400 shadow-[0_0_8px_rgba(74,216,163,0.6)]'
              : 'border-emerald-500/40 bg-emerald-900/60'
          }`} />
          <div className={`rounded-xl border p-4 ${
            item.active
              ? 'border-emerald-400/40 bg-emerald-500/15'
              : 'border-emerald-500/20 bg-emerald-900/30'
          }`}>
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                item.active ? 'bg-emerald-400/30 text-emerald-200' : 'bg-emerald-500/20 text-emerald-300'
              }`}>{item.phase}</span>
              <span className="text-sm font-semibold text-emerald-100">{item.label}</span>
              {item.active && <span className="ml-auto text-[10px] font-medium text-emerald-400 animate-pulse-soft">CURRENT</span>}
            </div>
            <p className="mt-1.5 text-xs text-emerald-200/70">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
