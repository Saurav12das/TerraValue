import Link from 'next/link';
import { Section } from '../../components/Section';
import { ArrowRightIcon } from '../../components/Icons';

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* ────────────── Hero ────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-700/30 bg-gradient-to-br from-[#042f1f] via-[#064e33] to-[#0a6e49] p-8 text-white shadow-xl sm:p-14">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">About TerraValue</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
          Building the financial infrastructure for natural capital
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-emerald-100/80">
          Agriculture generates immense environmental value. TerraValue is building the platform to measure, simulate, and monetize it.
        </p>
      </section>

      {/* ────────────── Mission ────────────── */}
      <Section
        title="Our Mission"
        subtitle="Build the financial and decision infrastructure for natural capital in agriculture."
      >
        <div className="grid gap-6 lg:grid-cols-2">
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
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-800">Core Positioning</h3>
            <p className="mt-3 text-lg font-semibold text-emerald-900 leading-relaxed">
              &ldquo;Financial and decision infrastructure for natural capital in agriculture.&rdquo;
            </p>
            <p className="mt-3 text-sm text-emerald-700">
              TerraValue sits at the intersection of climate tech, ag-tech, and finance — creating
              a new category of ecosystem service intelligence.
            </p>
          </div>
        </div>
      </Section>

      {/* ────────────── The Problem ────────────── */}
      <Section
        title="The Problem"
        subtitle="Current valuation systems are carbon-only or hopelessly fragmented — leaving most ecosystem value invisible."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {[
            {
              title: 'Carbon-only tunnel vision',
              desc: 'Most existing platforms focus exclusively on soil carbon, ignoring water quality, biodiversity, yield resilience, and economic outcomes that are equally critical.',
            },
            {
              title: 'Fragmented measurement',
              desc: 'Different tools for different metrics create data silos. No single platform integrates across all ecosystem dimensions to show the full picture.',
            },
            {
              title: 'Invisible value',
              desc: 'Farmers adopt sustainable practices but cannot demonstrate or monetize the environmental value they create. Investors cannot evaluate natural capital outcomes.',
            },
            {
              title: 'Missing decision layer',
              desc: 'Without integrated data, producers cannot compare scenarios, optimize management, or identify the highest-value pathways for their specific context.',
            },
            {
              title: 'Market misalignment',
              desc: 'Buyers, insurers, and lenders want verified multi-dimensional sustainability metrics, but the infrastructure to produce them does not yet exist at scale.',
            },
            {
              title: 'Policy acceleration',
              desc: 'EU regulations, SEC climate disclosure, and USDA climate-smart programs are creating urgent demand — but supply-side infrastructure lags behind.',
            },
          ].map((item) => (
            <div key={item.title} className="card-hover rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────── Vision ────────────── */}
      <Section
        title="Vision: Digital Twin + Valuation Engine"
        subtitle="A farm-level operating intelligence layer for natural capital — simulation, scenario testing, and integrated valuation."
        dark
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-emerald-100/85">
            <p>
              TerraValue will evolve into a modular digital twin capable of simulating
              ecosystem outcomes at the field level. Users will be able to test management
              scenarios, compare economic outcomes, and identify the highest-value pathways.
            </p>
            <p>
              The platform integrates carbon, water, biodiversity, resilience, and economic
              modules into a single coherent system — producing a unified TerraValue Score
              and dollar-denominated ecosystem value estimates.
            </p>
            <p>
              Future capabilities include real-time data integration, third-party API
              connectors, marketplace features for ecosystem service credits, and enterprise
              dashboards for supply chain sustainability.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { phase: 'Phase 1', label: 'MVP Platform', desc: 'Landing site, product concept, interactive prototype, lead capture.' },
              { phase: 'Phase 2', label: 'Model Engine', desc: 'Validated scientific models, real data integration, user auth.' },
              { phase: 'Phase 3', label: 'Digital Twin', desc: 'Farm-level simulation, scenario optimization, API ecosystem.' },
              { phase: 'Phase 4', label: 'Marketplace', desc: 'Credit generation, buyer matching, sustainability-linked finance.' },
            ].map((item) => (
              <div key={item.phase} className="rounded-xl border border-emerald-500/20 bg-emerald-900/30 p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                    {item.phase}
                  </span>
                  <span className="text-sm font-semibold text-emerald-100">{item.label}</span>
                </div>
                <p className="mt-1.5 text-xs text-emerald-200/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ────────────── Why Agriculture ────────────── */}
      <Section
        title="Why Agriculture Matters Now"
        subtitle="Agriculture is not just a sector — it is a systems platform for the century ahead."
      >
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          <div className="card-hover rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900">Purpose: Community + Science</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Agriculture links human purpose to place. It brings together growers, communities,
              and applied science to solve real-world problems across food systems, water management,
              and climate response.
            </p>
          </div>

          <div className="card-hover rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /><line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900">Climate: Carbon Opportunity</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Farm management influences one of the largest near-term climate levers: soil carbon.
              Better measurement and aligned incentives can accelerate meaningful, verifiable outcomes
              at landscape scale.
            </p>
          </div>

          <div className="card-hover rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900">AI Future: Water Intelligence</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              As AI scales, resource constraints become strategic. Agriculture&apos;s water systems
              can become a proving ground for intelligent allocation, resilience modeling, and
              optimization at the watershed level.
            </p>
          </div>
        </div>
      </Section>

      {/* ────────────── Natural Capital Section ────────────── */}
      <Section
        title="Natural Capital & Ecosystem Service Intelligence"
        subtitle="The foundation of TerraValue's platform is a comprehensive understanding of the value agriculture creates."
      >
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">Natural capital</strong> refers to the stock of natural
                resources — soil, water, air, living organisms — that produce flows of ecosystem services
                benefiting people and the economy.
              </p>
              <p>
                In agriculture, these services include carbon sequestration, water filtration, pollinator
                habitat, flood buffering, and long-term soil fertility. TerraValue aims to make these
                flows visible, measurable, and monetizable.
              </p>
            </div>
            <div className="space-y-2">
              {[
                { label: 'Provisioning', desc: 'Food, fiber, and bioenergy production' },
                { label: 'Regulating', desc: 'Carbon storage, water purification, flood control' },
                { label: 'Supporting', desc: 'Nutrient cycling, soil formation, habitat structure' },
                { label: 'Cultural', desc: 'Landscape value, rural community, heritage' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-lg bg-white p-3 border border-slate-100">
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <div>
                    <span className="text-sm font-semibold text-slate-900">{item.label}</span>
                    <span className="text-sm text-slate-500"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ────────────── CTA ────────────── */}
      <section className="rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-8 text-center shadow-sm sm:p-12">
        <h2 className="text-2xl font-bold text-slate-900">Join the TerraValue journey</h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
          Whether you&apos;re a farmer, researcher, investor, or ecosystem partner — we&apos;d love to connect.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/#waitlist"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800"
          >
            Get in Touch
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/product"
            className="inline-flex items-center rounded-xl border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            See the Product
          </Link>
        </div>
      </section>
    </div>
  );
}
