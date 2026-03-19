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
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden rounded-[2.5rem] bg-[#021810] px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-16 animate-fade-in-up">
        <div className="pointer-events-none absolute inset-0 mesh-gradient-dark opacity-80" />
        <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-30 mask-image:linear-gradient(to_bottom,white,transparent)" />
        
        {/* Glow Orbs */}
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-sky-500/10 blur-[120px]" />
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-md animate-slide-up-fade">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            TerraValue Waitlist
          </div>
          
          <h1 className="mt-8 text-5xl leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-[5.5rem] [font-family:var(--font-display)] animate-slide-up-fade" style={{ animationDelay: '100ms' }}>
            Agriculture is where <span className="text-gradient">humanity</span>, <span className="text-gradient-warm">climate</span>, and intelligence converge.
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-emerald-100/70 sm:text-xl animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
            {brand.subheadline}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-fade" style={{ animationDelay: '300ms' }}>
             {/* Glow Input Waitlist CTA */}
            <form className="relative flex w-full max-w-md items-center glow-border rounded-full bg-[#042f1f]/50 p-1 backdrop-blur-md transition-transform hover:scale-[1.02]">
               <input 
                 type="email" 
                 placeholder="Enter your email to join the waitlist..." 
                 className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-emerald-200/50 focus:outline-none"
                 required
               />
               <button type="submit" className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-[#021810] transition-colors hover:bg-emerald-400">
                 Request Access
               </button>
            </form>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-emerald-500/10 pt-8 animate-slide-up-fade" style={{ animationDelay: '400ms' }}>
             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/50 w-full mb-4">Backed by signals from</p>
             {['World Bank', 'FAO', 'UNEP', 'IEA'].map(partner => (
               <span key={partner} className="text-lg font-bold text-emerald-100/30 grayscale hover:grayscale-0 hover:text-emerald-200 transition-all duration-300">
                 {partner}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* --- PROBLEM/SOLUTION SECTION (The Missing Market) --- */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-in-left">
            <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              The Missing Market
            </p>
            <h2 className="mt-6 text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl [font-family:var(--font-display)]">
              Today&rsquo;s tools price fragments. <br />
              <span className="text-emerald-700">TerraValue prices systems.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Most tools isolate one outcome—like carbon—while leaving water, biodiversity, resilience, and true operating performance off the balance sheet. 
              We are turning scattered ecosystem outcomes into a unified decision, valuation, and finance layer.
            </p>
            <blockquote className="mt-8 border-l-4 border-emerald-500 bg-emerald-50/50 p-6 rounded-r-2xl italic text-slate-700">
              "TerraValue helps markets understand what farms actually create."
            </blockquote>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 stagger-children">
            {marketGaps.map((item, idx) => (
              <article
                key={item.title}
                className="card-interactive glass rounded-[1.5rem] p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-sky-50 text-emerald-600 font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- PLATFORM VISION (What TerraValue Builds) BENTO GRID --- */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">What We Build</p>
          <h2 className="mt-4 text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl [font-family:var(--font-display)]">
            A valuation engine for the living economy.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[220px]">
          {valueStreams.map((stream, idx) => {
             // Create bento box spanning rules
             const isLarge = idx === 0 || idx === 3;
             const spanClass = isLarge ? 'md:col-span-2 lg:col-span-3 lg:row-span-2' : 'md:col-span-1 lg:col-span-2 lg:row-span-1';
             
             return (
              <article
                key={stream.key}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl ${spanClass}`}
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                 
                 <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="flex items-center gap-4">
                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm" style={{ backgroundColor: `${stream.color}20`, color: stream.color }}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900">{stream.title}</h3>
                   </div>
                   
                   <p className="mt-6 text-sm leading-relaxed text-slate-600 max-w-sm">
                     {stream.description}
                   </p>
                   
                   <div className="mt-auto pt-6 flex w-full">
                     <div className="h-1 rounded-full bar-fill w-8 group-hover:w-full" style={{ backgroundColor: stream.color }} />
                   </div>
                 </div>
              </article>
             );
          })}
        </div>
      </section>

      {/* --- MISSION SYSTEM GRAPHIC & HUMAN ELEMENT --- */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <div className="rounded-[2.5rem] bg-[#021810] p-8 sm:p-14 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl opacity-30">
               <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-[100px]" />
            </div>
            
            <div className="grid gap-16 lg:grid-cols-[1fr_1fr] items-center relative z-10">
               <div>
                  <p className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Mission before market</p>
                  <h2 className="mt-6 text-4xl leading-tight tracking-tight sm:text-5xl [font-family:var(--font-display)]">
                    Investors should feel that the ambition is commercial, but the intent is deeply human.
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-emerald-100/70">
                    TerraValue is not trying to financialize land from a distance. It is trying to build better intelligence for the people and ecosystems agriculture already holds together.
                  </p>

                  <div className="mt-10 grid gap-6">
                    {missionOutcomes.map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                        <div>
                           <h3 className="font-semibold text-white">{item.title}</h3>
                           <p className="text-sm text-emerald-100/60 mt-1">{item.body}</p>
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

      {/* --- WHY NOW (Monolithic Stats) --- */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">The Scale of the Opportunity</p>
          <h2 className="mt-4 text-4xl leading-tight tracking-tight text-slate-900 sm:text-5xl [font-family:var(--font-display)]">
            A multi-trillion-dollar system waiting for infrastructure.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 stagger-children">
          {proofPoints.map((item) => (
            <article
              key={item.label}
              className="group flex flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <p className="text-5xl font-bold text-slate-900 [font-family:var(--font-display)] tracking-tighter group-hover:text-emerald-700 transition-colors">{item.value}</p>
                <h3 className="mt-4 text-base font-semibold text-slate-800">{item.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.detail}</p>
              </div>
              <a
                href={item.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                {item.sourceLabel}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* --- STUDIES AND GAPS --- */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-[2.5rem] bg-slate-50 p-8 sm:p-12 lg:p-16 border border-slate-200">
           <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <div>
                 <h2 className="text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl [font-family:var(--font-display)]">
                   Signals of exactly this coordination problem.
                 </h2>
                 <p className="mt-4 text-slate-600 leading-relaxed">
                    These signals strengthen the case that TerraValue is entering a large, under-built coordination problem.
                 </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                 {supportingSignals.map((item) => (
                    <article key={item.title} className="glass rounded-[1.5rem] p-6">
                       <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                       <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                       <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                         {item.sourceLabel}
                       </span>
                    </article>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- WAITLIST SECTION --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-32">
        <WaitlistSection />
      </div>
    </div>
  );
}
