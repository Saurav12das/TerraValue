import { DashboardClient } from '../../components/DashboardClient';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-bold tracking-tight">TerraValue MVP Dashboard</h1>
        <p className="mt-2 text-slate-600">Prototype simulation: translate agricultural practices into ecosystem performance and value potential.</p>
      </section>
      <DashboardClient />
    </div>
  );
}
