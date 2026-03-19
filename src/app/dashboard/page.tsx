import { DashboardClient } from '../../components/DashboardClient';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-6 shadow-sm sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700">
              <span className="text-xs font-black text-white">TV</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Interactive Prototype</p>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            TerraValue Dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
            Simulate how agricultural management practices translate into ecosystem performance
            and economic value. Adjust inputs on the left to see real-time outcome estimates.
          </p>
        </div>
      </section>

      {/* Dashboard */}
      <DashboardClient />
    </div>
  );
}
