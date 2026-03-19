export function Section({ title, subtitle, children, id }: { title: string; subtitle?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
