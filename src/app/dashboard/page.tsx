import { DashboardClient } from '../../components/DashboardClient';

export default function DashboardPage() {
  return (
    <div className="bg-slate-50 px-6 pb-16 pt-24 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-7 shadow-sm sm:p-9">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-10 h-48 w-48 rounded-full bg-teal-100/30 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 to-teal-600 shadow-md">
                <span className="text-sm font-black text-white">TV</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Interactive Prototype</p>
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  TerraValue Dashboard
                </h1>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
              Simulate how agricultural management practices translate into ecosystem performance
              and economic value. Adjust inputs on the left, see real-time results update instantly.
            </p>
          </div>
        </section>

        {/* How to read your scores — interpretive guide */}
        <HowToReadScores />

        {/* Dashboard */}
        <DashboardClient />
      </div>
    </div>
  );
}

function HowToReadScores() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
        <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
        How to Read Your Scores
      </h2>
      <p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-3xl">
        Each score (0-100) measures how well your management practices support that ecosystem dimension.
        Scores are driven by your choices on the left panel. Here is what impacts each one:
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <ScoreExplainer
          title="Soil Carbon"
          color="bg-[#8B7355]"
          drivers="No-till and cover crops increase carbon. Higher SOM and clay soils store more."
          tip="Switch to no-till and add multi-species cover crops for the biggest jump."
        />
        <ScoreExplainer
          title="Water Quality"
          color="bg-sky-500"
          drivers="Cover crops trap nitrogen. Reduced tillage cuts erosion. Slope and nutrient strategy matter."
          tip="Cover crops + reduced tillage can cut nutrient leaching by 40-60%."
        />
        <ScoreExplainer
          title="Biodiversity"
          color="bg-emerald-500"
          drivers="Rotation diversity is the biggest lever. Cover crop species mix and reduced tillage help."
          tip="A 5-crop rotation with multi-species covers can double this score."
        />
        <ScoreExplainer
          title="Yield Resilience"
          color="bg-amber-500"
          drivers="Soil health buffers drought and stress. Cover crops, rotation, and irrigation all contribute."
          tip="Building SOM to 4%+ creates a natural drought buffer."
        />
        <ScoreExplainer
          title="Economic ROI"
          color="bg-violet-500"
          drivers="Input costs vs. premium access. Conventional tillage saves short-term; regenerative pays long-term."
          tip="Diversity premium grows as rotation and cover crops increase."
        />
      </div>

      <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
        <strong>The TerraValue Score</strong> is a weighted composite: Carbon (25%) + Water (20%) + Biodiversity (20%) + Resilience (15%) + Economics (20%).
        Add a location to unlock model-enhanced predictions based on your region&apos;s actual soil and climate data.
      </p>
    </div>
  );
}

function ScoreExplainer({ title, color, drivers, tip }: {
  title: string; color: string; drivers: string; tip: string;
}) {
  return (
    <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3">
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className={`h-2 w-2 rounded-full ${color}`} />
        <span className="text-xs font-semibold text-slate-800">{title}</span>
      </div>
      <p className="text-[11px] text-slate-500 leading-relaxed">{drivers}</p>
      <p className="mt-1.5 text-[10px] text-emerald-700 font-medium leading-relaxed">
        Tip: {tip}
      </p>
    </div>
  );
}
