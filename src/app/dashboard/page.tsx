import { DashboardClient } from '../../components/DashboardClient';

export default function DashboardPage() {
  return (
    <div className="bg-slate-50 px-6 pb-16 pt-32 lg:px-8 lg:pt-40">
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

        {/* Dashboard */}
        <DashboardClient />
      </div>
    </div>
  );
}
