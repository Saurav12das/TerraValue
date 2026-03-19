import Link from 'next/link';
import { MissionSystemGraphic } from '../components/MissionSystemGraphic';
import { Section } from '../components/Section';
import { WaitlistSection } from '../components/WaitlistSection';
import {
  brand,
  marketGaps,
  missionOutcomes,
  missionPrinciples,
  proofPoints,
  supportingSignals,
  thesisPillars,
  valueStreams,
} from '../content/site';

export default function HomePage() {
  return (
    <div className="space-y-10 lg:space-y-14">
      <section className="relative overflow-hidden rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(135deg,#1d3128_0%,#294339_44%,#5c7f64_100%)] px-6 py-8 text-white shadow-[0_30px_90px_rgba(20,36,31,0.2)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,244,214,0.18),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(118,184,154,0.24),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 translate-x-1/4 translate-y-1/4 rounded-full bg-[#d7f7d8]/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-100/90">
              TerraValue thesis
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[0.98] tracking-tight text-balance text-white sm:text-5xl lg:text-[4.5rem] [font-family:var(--font-display)]">
              {brand.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-100/82 sm:text-lg">
              {brand.subheadline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {['Community + science', 'Carbon + resilience', 'Water + intelligence'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-stone-50/90 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#thesis"
                className="rounded-full bg-[#f3e8c8] px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-[#f7efd8]"
              >
                See the thesis
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/16"
              >
                Explore prototype
              </Link>
              <Link
                href="#waitlist"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-stone-100 transition hover:bg-white/10"
              >
                Talk to TerraValue
              </Link>
            </div>

            <p className="mt-8 text-sm text-stone-100/60">{brand.tagline}</p>
          </div>

          <div className="rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-100/70">A stronger front page</p>
            <div className="mt-4 grid gap-3">
              <InsightCard
                title="For investors"
                body="Frame TerraValue as a category-creation thesis, not just a prototype dashboard. The story becomes market infrastructure for unpriced ecosystem performance."
              />
              <InsightCard
                title="For collaborators"
                body="Invite growers, researchers, water experts, and data partners into a shared build, making the site feel like a platform in formation."
              />
              <InsightCard
                title="For the brand"
                body="Lead with conviction and care: TerraValue exists to serve farmers, strengthen communities, and make environmental value legible."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="rounded-[2rem] border border-stone-200 bg-white/88 p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Mission before market</p>
          <h2 className="mt-3 text-3xl leading-tight tracking-tight text-slate-950 sm:text-4xl [font-family:var(--font-display)]">
            Investors should feel that the ambition is commercial, but the intent is deeply human.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            If this is a vision site, then we should say clearly that TerraValue is not trying to financialize land
            from a distance. It is trying to build better intelligence for the people and ecosystems agriculture already
            holds together.
          </p>

          <div className="mt-7 grid gap-4">
            {missionPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-stone-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcf8_100%)] p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <MissionSystemGraphic />
          <div className="grid gap-3 sm:grid-cols-3">
            {missionOutcomes.map((item) => (
              <article key={item.title} className="rounded-[1.35rem] border border-stone-200 bg-white/82 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="thesis" className="rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Bigger than agtech</p>
          <h2 className="mt-3 text-3xl leading-tight tracking-tight text-slate-950 sm:text-4xl [font-family:var(--font-display)]">
            Agriculture is not only a sector. It is a systems platform.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The homepage should make this idea unavoidable. Instead of sounding like a pitch deck with product blocks,
            TerraValue can feel like the beginning of a new market language for natural capital.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {thesisPillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`rounded-[1.6rem] border border-stone-200 bg-gradient-to-br ${pillar.accent} p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{pillar.eyebrow}</p>
              <h3 className="mt-4 text-2xl leading-tight text-slate-950 [font-family:var(--font-display)]">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-[linear-gradient(180deg,#fff9ef_0%,#f8f2e4_100%)] p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">The missing market</p>
          <h2 className="mt-3 text-3xl leading-tight tracking-tight text-slate-950 sm:text-4xl [font-family:var(--font-display)]">
            Today&rsquo;s tools price fragments. TerraValue should price systems.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            This is where the investor narrative gets stronger. The company is not only measuring sustainability. It is
            turning scattered ecosystem outcomes into a decision, valuation, and finance layer.
          </p>
          <div className="mt-6 rounded-[1.4rem] border border-stone-300/70 bg-white/80 p-5">
            <p className="text-sm font-semibold text-slate-900">The one-line positioning I would push harder:</p>
            <p className="mt-3 text-2xl leading-tight text-slate-950 [font-family:var(--font-display)]">
              TerraValue helps markets understand what farms actually create.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {marketGaps.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,#dcefdc,#edf4ff)]" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <Section
        title="What TerraValue Builds"
        subtitle="A valuation engine for soil, water, biodiversity, resilience, and economics. This should read less like a feature checklist and more like a stack."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {valueStreams.map((stream) => (
            <article
              key={stream.key}
              className="rounded-[1.4rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5"
            >
              <div
                className="h-2 w-16 rounded-full"
                style={{ backgroundColor: stream.color, opacity: 0.75 }}
              />
              <h3 className="mt-4 text-base font-semibold text-slate-900">{stream.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{stream.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="rounded-[2rem] border border-slate-200 bg-[#111a16] p-6 text-white shadow-[0_24px_70px_rgba(17,26,22,0.22)] sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/70">Why now</p>
            <h2 className="mt-3 text-3xl leading-tight tracking-tight text-white sm:text-4xl [font-family:var(--font-display)]">
              The evidence can support the vision without making the page feel academic.
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-200/78">
              For this audience, I would avoid generic market-size filler. Better to show system-scale proof points and
              then explain the knowledge gap TerraValue is trying to close.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {proofPoints.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm"
              >
                <p className="text-3xl text-[#f3e8c8] [font-family:var(--font-display)]">{item.value}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-200/70">{item.detail}</p>
                <a
                  href={item.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/80 transition hover:text-emerald-100"
                >
                  {item.sourceLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section
        title="Studies and Gaps Worth Surfacing"
        subtitle="These signals strengthen the case that TerraValue is entering a large, under-built coordination problem."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {supportingSignals.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.45rem] border border-slate-200 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.04)]"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              <a
                href={item.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 transition hover:text-emerald-900"
              >
                {item.sourceLabel}
              </a>
            </article>
          ))}
        </div>
      </Section>

      <section className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(135deg,#fff9ef_0%,#f8fff7_55%,#eef7ff_100%)] p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">How I would frame it</p>
            <h2 className="mt-3 text-3xl leading-tight tracking-tight text-slate-950 sm:text-4xl [font-family:var(--font-display)]">
              Keep the site visionary, but make the ask practical.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The creative move is to let the homepage act like a manifesto and a filter. It should immediately tell the
              right people why this matters, what TerraValue is building, and where collaboration is needed next.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              'Investors should see a thesis about unpriced natural-capital infrastructure, not only a prototype product.',
              'Researchers and pilot partners should see a real opening to shape the data, methods, and validation layer.',
              'Future customers should feel that TerraValue understands both field reality and financial translation.',
            ].map((line) => (
              <div key={line} className="rounded-[1.35rem] border border-stone-200 bg-white/85 p-4 text-sm leading-7 text-slate-700">
                {line}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaitlistSection />
    </div>
  );
}

function InsightCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-[1.3rem] border border-white/10 bg-black/10 p-4">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-100/85">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-stone-100/72">{body}</p>
    </article>
  );
}
