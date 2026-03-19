import Link from 'next/link';
import { Section } from '../components/Section';
import { WaitlistSection } from '../components/WaitlistSection';
import { brand, valueStreams, howItWorks, whyNow, stats } from '../content/site';
import { streamIcons, ArrowRightIcon } from '../components/Icons';

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* ────────────── Hero ────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-700/30 bg-gradient-to-br from-[#042f1f] via-[#064e33] to-[#0f8c5e] p-8 text-white shadow-xl sm:p-14 lg:p-20 animate-gradient">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative">
          <p className="inline-block rounded-full border border-emerald-400/30 bg-emerald-800/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-200">
            Natural Capital Infrastructure
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {brand.headline}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-emerald-100/85 sm:text-xl">
            {brand.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-900 shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl"
            >
              Explore Prototype
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20"
            >
              Join Waitlist
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-emerald-200 transition-all hover:text-white hover:border-white/40"
            >
              How It Works
            </Link>
          </div>

          <p className="mt-8 text-sm text-emerald-300/70">
            {brand.tagline}
          </p>
        </div>
      </section>

      {/* ────────────── Stats ribbon ────────────── */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card-hover rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
          >
            <p className="text-3xl font-extrabold text-gradient">{stat.value}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ────────────── What TerraValue Measures ────────────── */}
      <Section
        title="What TerraValue Measures"
        subtitle="A unified lens on the five dimensions of agricultural ecosystem performance and economic value."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 stagger-children">
          {valueStreams.map((stream) => {
            const IconComp = streamIcons[stream.key];
            return (
              <div
                key={stream.key}
                className="card-hover group rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-5"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${stream.color}14`, color: stream.color }}
                >
                  {IconComp && <IconComp size={22} />}
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-900">{stream.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{stream.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ────────────── Problem / Solution ────────────── */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Section
          title="The Problem"
          subtitle="Ecosystem services in agriculture are massively under-measured and under-monetized."
        >
          <ul className="space-y-3">
            {[
              'Most platforms measure only soil carbon — missing water, biodiversity, resilience, and economics.',
              'Fragmented tools create data silos that prevent holistic decision-making.',
              'Farmers and landowners cannot see the full value their practices generate.',
              'Investors lack standardized metrics to evaluate natural capital outcomes.',
            ].map((point) => (
              <li key={point} className="flex gap-3 text-sm text-slate-600">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-400 text-xs">!</span>
                {point}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="The Solution"
          subtitle="TerraValue integrates ecosystem outcomes into one decision and valuation platform."
          dark
        >
          <ul className="space-y-3">
            {[
              'Unified measurement across carbon, water, biodiversity, resilience, and economics.',
              'Digital twin architecture for farm-level simulation and scenario testing.',
              'Transparent scoring that translates practices into quantified value.',
              'Future monetization pathways — credits, incentives, sustainability-linked finance.',
            ].map((point) => (
              <li key={point} className="flex gap-3 text-sm text-emerald-100/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs">&#10003;</span>
                {point}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ────────────── From Practice to Value / How It Works ────────────── */}
      <Section
        title="From Practice to Value"
        subtitle="Move from management decisions to ecosystem intelligence to monetization pathways — in three steps."
      >
        <div className="grid gap-6 md:grid-cols-3 stagger-children">
          {howItWorks.map((step) => (
            <div key={step.step} className="card-hover relative rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                {step.step}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-400">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────── Why Now ────────────── */}
      <Section title="Why Now" subtitle="The confluence of market forces, regulation, and technology makes this the moment for integrated ecosystem valuation.">
        <div className="grid gap-5 sm:grid-cols-2 stagger-children">
          {whyNow.map((item) => (
            <div key={item.title} className="card-hover rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ────────────── CTA Banner ────────────── */}
      <section className="rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-8 text-center shadow-sm sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ready to see the value your land creates?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
          Explore our interactive prototype or join the waitlist to be among the first to access TerraValue.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-800"
          >
            Try the Dashboard
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/#waitlist"
            className="inline-flex items-center rounded-xl border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition-all hover:bg-emerald-50"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      {/* ────────────── Waitlist ────────────── */}
      <WaitlistSection />
    </div>
  );
}
