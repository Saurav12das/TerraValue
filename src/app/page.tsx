import Link from 'next/link';
import { Section } from '../components/Section';
import { WaitlistSection } from '../components/WaitlistSection';
import { brand, valueStreams, howItWorks, whyNow } from '../content/site';
import { streamIcons, ArrowRightIcon } from '../components/Icons';
import { HeroParticles } from '../components/HeroParticles';
import { Reveal, RevealGroup } from '../components/Reveal';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { AnimatedWorkflow } from '../components/AnimatedWorkflow';
import { ProgressRing } from '../components/ProgressRing';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* ────────────── Hero ────────────── */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-700/30 bg-gradient-to-br from-[#042f1f] via-[#064e33] to-[#0f8c5e] p-8 text-white shadow-2xl sm:p-14 lg:p-20 animate-gradient">
        <HeroParticles />
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] dot-grid" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-teal-300/10 blur-[80px]" />

        <div className="relative">
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-800/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
              Natural Capital Infrastructure
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {brand.headline}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-emerald-100/80 sm:text-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {brand.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-emerald-900 shadow-lg transition-all hover:bg-emerald-50 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Prototype
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20 hover:border-white/50"
            >
              Join Waitlist
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-emerald-200 transition-all hover:text-white hover:border-white/40"
            >
              How It Works
            </Link>
          </div>

          <p className="mt-10 text-sm text-emerald-300/60 animate-fade-in" style={{ animationDelay: '500ms' }}>
            {brand.tagline}
          </p>
        </div>
      </section>

      {/* ────────────── Stats (Animated Counters) ────────────── */}
      <Reveal>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center card-hover shadow-sm">
            <AnimatedCounter value={125} prefix="$" suffix="B+" label="Estimated annual ecosystem service value from US farmland" />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center card-hover shadow-sm">
            <AnimatedCounter value={2} prefix="<" suffix="%" label="Currently captured through carbon or environmental markets" />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center card-hover shadow-sm">
            <AnimatedCounter value={5} label="Integrated ecosystem dimensions in the TerraValue platform" />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center card-hover shadow-sm">
            <AnimatedCounter value={1} label="Unified score to drive decisions and unlock value" />
          </div>
        </section>
      </Reveal>

      {/* ────────────── What TerraValue Measures (Interactive Cards) ────────────── */}
      <Reveal>
        <Section
          title="What TerraValue Measures"
          subtitle="A unified lens across five dimensions of agricultural ecosystem performance."
        >
          <ValueStreamCards />
        </Section>
      </Reveal>

      {/* ────────────── Problem / Solution ────────────── */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal direction="left">
          <Section title="The Problem" subtitle="Ecosystem services are massively under-measured and under-monetized.">
            <ul className="space-y-3.5">
              {[
                'Most platforms measure only soil carbon — missing water, biodiversity, resilience, and economics.',
                'Fragmented tools create data silos that prevent holistic decision-making.',
                'Farmers cannot see the full value their practices create.',
                'Investors lack standardized natural capital metrics.',
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-400 text-xs font-bold">!</span>
                  {point}
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>

        <Reveal direction="right">
          <Section title="The Solution" subtitle="Integrated valuation + digital twin vision." dark>
            <ul className="space-y-3.5">
              {[
                'Unified measurement across carbon, water, biodiversity, resilience, and economics.',
                'Digital twin architecture for farm-level simulation.',
                'Transparent scoring that translates practices into quantified value.',
                'Monetization pathways — credits, incentives, sustainability-linked finance.',
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm text-emerald-100/90 leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs">&#10003;</span>
                  {point}
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>
      </div>

      {/* ────────────── From Practice to Value (Animated Workflow) ────────────── */}
      <Reveal>
        <Section
          title="From Practice to Value"
          subtitle="Move from management decisions to ecosystem intelligence to monetization — in three steps."
        >
          <AnimatedWorkflow
            steps={howItWorks.map((s) => ({
              number: s.step,
              title: s.title,
              items: [s.description, s.detail],
              color: ['#0a6e49', '#0d7e9a', '#0ea5e9'][s.step - 1],
              accentBg: '',
            }))}
          />
        </Section>
      </Reveal>

      {/* ────────────── Interactive Ecosystem Preview ────────────── */}
      <Reveal>
        <Section
          title="Ecosystem Performance at a Glance"
          subtitle="See how a regenerative rotation scores across all five dimensions."
        >
          <div className="flex flex-wrap justify-center gap-8 py-4">
            <ProgressRing value={88} label="Soil Carbon" sublabel="Stock + sequestration" color="#7d5d41" />
            <ProgressRing value={76} label="Water Quality" sublabel="Nitrate + runoff" color="#0ea5e9" />
            <ProgressRing value={82} label="Biodiversity" sublabel="Habitat + diversity" color="#22c55e" />
            <ProgressRing value={71} label="Yield Resilience" sublabel="Stability under stress" color="#f59e0b" />
            <ProgressRing value={62} label="Economic ROI" sublabel="Input efficiency" color="#8b5cf6" />
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            Example: Manure-integrated regenerative rotation system. Scores are illustrative.
          </p>
        </Section>
      </Reveal>

      {/* ────────────── Why Now ────────────── */}
      <Reveal>
        <Section title="Why Now" subtitle="Market forces, regulation, and technology converge.">
          <WhyNowGrid items={whyNow} />
        </Section>
      </Reveal>

      {/* ────────────── CTA Banner ────────────── */}
      <Reveal>
        <section className="relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-8 text-center shadow-sm sm:p-14 mesh-gradient">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Ready to see the value your land creates?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Explore our interactive prototype or join the waitlist for early access.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-800 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Try the Dashboard
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex items-center rounded-xl border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 transition-all hover:bg-emerald-50"
            >
              Join Waitlist
            </Link>
          </div>
        </section>
      </Reveal>

      {/* ────────────── Waitlist ────────────── */}
      <Reveal>
        <WaitlistSection />
      </Reveal>
    </div>
  );
}

/* ────────────── Interactive Value Stream Cards ────────────── */
function ValueStreamCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {valueStreams.map((stream, i) => {
        const IconComp = streamIcons[stream.key];
        return (
          <div
            key={stream.key}
            className="card-interactive group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-5"
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${stream.color}14`, color: stream.color }}
            >
              {IconComp && <IconComp size={22} />}
            </div>
            <h3 className="mt-3.5 text-sm font-bold text-slate-900">{stream.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-3 group-hover:line-clamp-none transition-all">
              {stream.description}
            </p>
            <div
              className="mt-3 h-1 rounded-full transition-all duration-500 group-hover:w-full w-8"
              style={{ backgroundColor: stream.color, opacity: 0.5 }}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ────────────── Why Now Grid ────────────── */
function WhyNowGrid({ items }: { items: typeof whyNow }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item, i) => (
        <div key={item.title} className="card-hover group rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 text-sm font-bold group-hover:bg-emerald-100 transition-colors">
              {i + 1}
            </div>
            <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
