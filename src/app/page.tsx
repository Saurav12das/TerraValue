import Link from 'next/link';
import Image from 'next/image';
import { WaitlistSection } from '../components/WaitlistSection';
import { SignupCounter } from '../components/SignupCounter';
import {
  brand,
  marketGaps,
  marketOpportunity,
  missionOutcomes,
  proofPoints,
  supportingSignals,
  valueStreams,
} from '../content/site';

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed background image */}
        <Image
          src="/images/hero-farm.jpg"
          alt="Watercolor illustration of a farm landscape with a tractor working in crop fields, representing the agriculture and natural capital that TerraValue measures"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay gradient — heavier at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/70 to-[#0C0C0C]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 lg:px-8 pb-16 pt-48 lg:pb-24 lg:pt-56">
          <div className="mx-auto max-w-7xl">
            <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#3ECF8E]/90 animate-slide-up-fade">
              Natural Capital Infrastructure
            </p>

            <h1 className="mt-6 max-w-4xl text-[3rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[5rem] [font-family:var(--font-display)] animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
              Every year, farms create{' '}
              <span className="text-[#3ECF8E]">trillions</span> in value that no market can see.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
              Soil carbon. Water quality and quantity. Biodiversity. Yield resilience.
              Farmers produce all of it. Markets price none of it. We&rsquo;re building the infrastructure to change that.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 animate-slide-up-fade" style={{ animationDelay: '300ms' }}>
              <Link
                href="/#waitlist"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0C0C0C] transition-all hover:bg-white/90 hover:scale-[1.02]"
              >
                Get Early Access
              </Link>
              <Link
                href="#the-problem"
                className="rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                Learn more
              </Link>
            </div>

            {/* Signup counter + data sources row */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.08] pt-6 animate-slide-up-fade" style={{ animationDelay: '400ms' }}>
              <SignupCounter />
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">Data from</p>
                {['World Bank', 'FAO', 'UNEP', 'IEA'].map(source => (
                  <span key={source} className="text-[13px] font-medium text-white/25 hover:text-white/45 transition-colors duration-300 cursor-default">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ THE PROBLEM ═══════════════════════ */}
      <section id="the-problem" className="bg-[#FAFAF8] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-500/70">The problem</p>
              <h2 className="mt-5 text-4xl leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-[3.25rem] [font-family:var(--font-display)]">
                Agriculture generates $4.49 trillion a year — and the most important value it creates is invisible.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#6B6B6B]">
                A single farm can filter millions of gallons of water, sequester tons of carbon, and support hundreds of species. But there is no system that measures it, no market that prices it, and no financial product that rewards it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#6B6B6B]">
                The result? <strong className="text-[#1A1A1A]">Farmers bear the cost of stewardship while markets capture the benefits.</strong> Land health declines. Communities lose resilience. And trillions in ecosystem value stay off every balance sheet.
              </p>

              <div className="mt-10 border-l-2 border-[#3ECF8E]/40 pl-6">
                <p className="text-base leading-relaxed text-[#1A1A1A]/80 italic">
                  &ldquo;FAO estimated at least $10 trillion a year in hidden agrifood costs. The valuation layer to address this does not exist yet. That is what we are building.&rdquo;
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9A9A9A]">TerraValue founding thesis</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 stagger-children">
              {marketGaps.map((item, idx) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-[#E8E6E1] bg-white p-6 transition-all hover:border-[#3ECF8E]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F2F1ED] text-[11px] font-bold text-[#9A9A9A] mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHAT WE'RE BUILDING ═══════════════════════ */}
      <section className="bg-white py-24 lg:py-32 px-6 lg:px-8 border-t border-[#E8E6E1]/50">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ECF8E]">What we&rsquo;re building</p>
            <h2 className="mt-5 text-4xl leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-[3.25rem] [font-family:var(--font-display)]">
              One platform to measure, value, and unlock what farms actually produce.
            </h2>
            <p className="mt-4 text-base text-[#6B6B6B] leading-relaxed">
              Six integrated layers — including both water quality and water quantity. Each one solves a piece of the problem that no existing tool touches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E6E1]/60 rounded-2xl overflow-hidden border border-[#E8E6E1]">
            {valueStreams.map((stream) => (
              <article
                key={stream.key}
                className="group bg-white p-8 transition-all hover:bg-[#FAFAF8]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: stream.color }} />
                  <h3 className="text-base font-semibold text-[#1A1A1A]">{stream.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-[#6B6B6B]">{stream.description}</p>

                <div className="mt-6 h-px bg-[#E8E6E1] overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full transition-all duration-700" style={{ backgroundColor: stream.color }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MISSION ═══════════════════════ */}
      <section className="bg-[#0C0C0C] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ECF8E]/70">Why we do this</p>
              <h2 className="mt-6 text-3xl leading-[1.1] tracking-tight text-white sm:text-[2.75rem] [font-family:var(--font-display)]">
                The people who feed the world should not be the last to benefit from what they create.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/40">
                TerraValue is building intelligence for the farmers, communities, and ecosystems that agriculture already holds together — so that stewardship becomes an economic strength, not a hidden cost.
              </p>

              <div className="mt-12 space-y-8">
                {missionOutcomes.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3ECF8E] shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white text-[15px]">{item.title}</h3>
                      <p className="text-sm text-white/35 mt-1 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
              {proofPoints.map((item) => (
                <div key={item.label} className="bg-[#0C0C0C] p-8 flex flex-col justify-between group">
                  <div>
                    <p className="text-3xl font-bold text-white [font-family:var(--font-display)] tracking-tight group-hover:text-[#3ECF8E] transition-colors duration-300">{item.value}</p>
                    <p className="mt-3 text-[13px] font-medium text-white/60 leading-snug">{item.label}</p>
                  </div>
                  <a
                    href={item.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/25 hover:text-[#3ECF8E]/60 transition-colors"
                  >
                    {item.sourceLabel}
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MARKET OPPORTUNITY ═══════════════════════ */}
      <section className="bg-[#FAFAF8] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4A853]">The opportunity</p>
            <h2 className="mt-5 text-4xl leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-[3.25rem] [font-family:var(--font-display)]">
              A massive, untapped market waiting for infrastructure.
            </h2>
            <p className="mt-4 text-base text-[#6B6B6B] leading-relaxed">
              Carbon credits, water trading, biodiversity contracts, regenerative finance — the markets are forming, but the measurement and valuation layer is missing. That is what TerraValue builds.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 stagger-children">
            {marketOpportunity.map((item) => (
              <article
                key={item.label}
                className="group flex flex-col justify-between rounded-xl border border-[#E8E6E1] bg-white p-7 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div>
                  <p className="text-3xl font-bold text-[#1A1A1A] [font-family:var(--font-display)] tracking-tight group-hover:text-[#3ECF8E] transition-colors">{item.value}</p>
                  <h3 className="mt-3 text-[13px] font-semibold text-[#1A1A1A] leading-snug">{item.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{item.detail}</p>
                </div>
                <a
                  href={item.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3ECF8E] hover:text-[#2A9D6A] transition-colors"
                >
                  {item.sourceLabel}
                  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ RESEARCH SIGNALS ═══════════════════════ */}
      <section className="bg-[#F2F1ED] py-24 lg:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A9A]">Independent research</p>
              <h2 className="mt-5 text-3xl leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl [font-family:var(--font-display)]">
                The evidence says this problem is real — and growing.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {supportingSignals.map((item) => (
                <article key={item.title} className="rounded-xl bg-white p-6 border border-[#E8E6E1]">
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{item.body}</p>
                  <a href={item.sourceHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3ECF8E] hover:text-[#2A9D6A] transition-colors">
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
      <WaitlistSection />
    </>
  );
}
