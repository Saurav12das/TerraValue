import Link from 'next/link';
import { MissionSystemGraphic } from '../components/MissionSystemGraphic';
import { WaitlistSection } from '../components/WaitlistSection';
import {
  brand,
  marketGaps,
  missionOutcomes,
  proofPoints,
  supportingSignals,
  thesisPillars,
  valueStreams,
} from '../content/site';

export default function HomePage() {
  return (
    <div className="space-y-24 lg:space-y-32">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden rounded-[2.5rem] bg-[#021810] px-6 py-16 text-white shadow-2xl sm:px-10 lg:px-16 animate-fade-in-up">
        <div className="pointer-events-none absolute inset-0 mesh-gradient-dark opacity-60" />
        <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-20" />
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-sky-500/8 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Urgency pill — the problem, not the brand */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/90 backdrop-blur-md animate-slide-up-fade">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            $10 trillion in hidden costs. Zero infrastructure to fix it.
          </div>

          <h1 className="mt-10 text-[2.75rem] leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[5rem] [font-family:var(--font-display)] animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            Every year, farms create <span className="text-gradient">trillions</span> in value that no market can see.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-emerald-100/70 sm:text-xl animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
            Soil health. Water filtration. Carbon sequestration. Biodiversity. Resilience against floods and drought.
            <span className="block mt-3 text-white/90 font-medium">
              Farmers produce all of it. Markets price none of it. We&rsquo;re building the infrastructure to change that.
            </span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4 animate-slide-up-fade" style={{ animationDelay: '300ms' }}>
            <form className="relative flex w-full max-w-md items-center glow-border rounded-full bg-[#042f1f]/60 p-1 backdrop-blur-md transition-transform hover:scale-[1.01]">
              <input
                type="email"
                placeholder="Your email — join the early build"
                className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-emerald-200/40 focus:outline-none"
                required
              />
              <button type="submit" className="shrink-0 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-[#021810] transition-colors hover:bg-emerald-400">
                Join Waitlist
              </button>
            </form>
            <Link
              href="#the-problem"
              className="shrink-0 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              See the problem ↓
            </Link>
          </div>

          {/* Research data bar */}
          <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/8 pt-8 animate-slide-up-fade" style={{ animationDelay: '400ms' }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-500/50">Backed by research data from</p>
            {['World Bank', 'FAO', 'UNEP', 'IEA'].map(source => (
              <span key={source} className="text-sm font-semibold text-emerald-100/25 hover:text-emerald-200/60 transition-colors duration-300 cursor-default">
                {source}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ THE PROBLEM ═══════════════════════ */}
      <section id="the-problem" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600/80">The problem we exist to solve</p>
            <h2 className="mt-5 text-4xl leading-[1.1] tracking-tight text-slate-900 sm:text-5xl [font-family:var(--font-display)]">
              Agriculture generates $4.49 trillion a year — and the most important value it creates is invisible.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              A single farm can filter millions of gallons of water, sequester tons of carbon, and support hundreds of species. But there is no system that measures it, no market that prices it, and no financial product that rewards it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The result? <strong className="text-slate-900">Farmers bear the cost of stewardship while markets capture the benefits.</strong> Land health declines. Communities lose resilience. And trillions in ecosystem value stay off every balance sheet.
            </p>

            <div className="mt-10 rounded-2xl border-l-4 border-emerald-600 bg-emerald-50/60 p-6">
              <p className="text-base leading-relaxed text-slate-800 font-medium italic">
                &ldquo;FAO estimated at least $10 trillion a year in hidden agrifood costs. The valuation layer to address this does not exist yet. That is what we are building.&rdquo;
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400">— TerraValue founding thesis</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 stagger-children">
            {marketGaps.map((item, idx) => (
              <article
                key={item.title}
                className="card-interactive glass rounded-[1.5rem] p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500/80 text-sm font-black mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHAT WE'RE BUILDING ═══════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">What we&rsquo;re building to fix it</p>
          <h2 className="mt-4 text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl [font-family:var(--font-display)]">
            One platform to measure, value, and unlock what farms actually produce.
          </h2>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">Five integrated layers. Each one solves a piece of the problem that no existing tool touches.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {valueStreams.map((stream) => (
            <article
              key={stream.key}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${stream.color}15`, color: stream.color }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{stream.title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-slate-500">{stream.description}</p>

              <div className="mt-6 flex w-full">
                <div className="h-1 rounded-full bar-fill w-6 group-hover:w-full transition-all duration-700" style={{ backgroundColor: stream.color }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ WHY THIS MATTERS (Mission) ═══════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#021810] p-8 sm:p-14 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl opacity-25">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-[100px]" />
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] items-center relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400/80">Why we do this</p>
              <h2 className="mt-6 text-3xl leading-tight tracking-tight sm:text-[2.75rem] sm:leading-[1.12] [font-family:var(--font-display)]">
                We believe the people who feed the world should not be the last to benefit from what they create.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-emerald-100/60">
                TerraValue is not financializing land from a distance. We are building intelligence for the farmers, communities, and ecosystems that agriculture already holds together — so that stewardship becomes an economic strength, not a hidden cost.
              </p>

              <div className="mt-10 space-y-6">
                {missionOutcomes.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-emerald-100/50 mt-1 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <MissionSystemGraphic />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ THE EVIDENCE ═══════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">The scale of the problem</p>
          <h2 className="mt-4 text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl [font-family:var(--font-display)]">
            This is not a niche. This is the largest unbuilt market on earth.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 stagger-children">
          {proofPoints.map((item) => (
            <article
              key={item.label}
              className="group flex flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div>
                <p className="text-4xl font-bold text-slate-900 [font-family:var(--font-display)] tracking-tighter group-hover:text-emerald-700 transition-colors">{item.value}</p>
                <h3 className="mt-3 text-sm font-semibold text-slate-800 leading-snug">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.detail}</p>
              </div>
              <a
                href={item.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                {item.sourceLabel}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ RESEARCH SIGNALS ═══════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-[2.5rem] bg-slate-50 p-8 sm:p-12 lg:p-16 border border-slate-200">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Independent research</p>
              <h2 className="mt-4 text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl [font-family:var(--font-display)]">
                The evidence says this coordination problem is real — and growing.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {supportingSignals.map((item) => (
                <article key={item.title} className="glass rounded-[1.5rem] p-6">
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.body}</p>
                  <a href={item.sourceHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 hover:text-emerald-800 transition-colors">
                    {item.sourceLabel}
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WAITLIST ═══════════════════════ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        <WaitlistSection />
      </div>
    </div>
  );
}
