import Link from 'next/link';
import { Section } from '../components/Section';
import { WaitlistSection } from '../components/WaitlistSection';
import { brand } from '../content/site';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 p-8 text-white sm:p-12">
        <p className="text-sm uppercase tracking-widest text-emerald-100">TerraValue</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Turn agricultural ecosystem performance into measurable value.</h1>
        <p className="mt-4 max-w-3xl text-emerald-50">TerraValue helps quantify and translate soil, water, biodiversity, and productivity outcomes into decision-ready and monetizable insights.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/dashboard" className="rounded-lg bg-white px-5 py-3 font-semibold text-emerald-900">Explore Prototype</Link>
          <Link href="/#waitlist" className="rounded-lg border border-white/60 px-5 py-3 font-semibold text-white">Join Waitlist</Link>
        </div>
        <p className="mt-5 text-sm text-emerald-100">{brand.tagline}</p>
      </section>
      <Section title="What TerraValue Measures" subtitle="A unified lens on ecosystem services and business outcomes.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{['Soil carbon','Water quality','Biodiversity','Yield resilience','ROI outcomes'].map((item)=> <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium">{item}</div>)}</div>
      </Section>
      <Section title="From Practice to Value" subtitle="Move from management decisions to ecosystem intelligence to monetization pathways.">
        <div className="grid gap-4 md:grid-cols-3"><div className="rounded-xl border p-4"><h3 className="font-semibold">1. Inputs</h3><p className="mt-2 text-sm text-slate-600">Soil, climate, management, crop systems, and landscape context.</p></div><div className="rounded-xl border p-4"><h3 className="font-semibold">2. Model Layers</h3><p className="mt-2 text-sm text-slate-600">Carbon, water, biodiversity, resilience, and economics modules.</p></div><div className="rounded-xl border p-4"><h3 className="font-semibold">3. Value Outputs</h3><p className="mt-2 text-sm text-slate-600">Performance scores, valuation estimates, and opportunity pathways.</p></div></div>
      </Section>
      <Section title="Why agriculture matters now" subtitle="A foundational story for TerraValue's mission and long-term market thesis.">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900">Purpose: community + science</h3>
            <p className="mt-2 text-sm text-slate-600">Agriculture links human purpose to place. It brings together growers, communities, and applied science to solve real-world problems across food systems.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900">Climate: carbon opportunity</h3>
            <p className="mt-2 text-sm text-slate-600">Farm management influences one of the largest near-term climate levers: soil carbon. Better measurement and incentives can accelerate meaningful outcomes.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900">AI future: water intelligence</h3>
            <p className="mt-2 text-sm text-slate-600">As AI scales, resource constraints become strategic. Agriculture's water systems can become a proving ground for intelligent allocation, resilience, and optimization.</p>
          </div>
        </div>
      </Section>
      <WaitlistSection />
    </div>
  );
}
