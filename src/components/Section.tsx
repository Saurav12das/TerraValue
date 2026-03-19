type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
  className?: string;
};

export function Section({ title, subtitle, children, id, dark = false, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`rounded-2xl border p-6 shadow-sm sm:p-10 ${
        dark
          ? 'border-emerald-800/30 bg-gradient-to-br from-[#042f1f] via-[#064e33] to-[#0a6e49] text-white'
          : 'border-slate-200/80 bg-white/90'
      } ${className}`}
    >
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-3xl text-base leading-relaxed ${dark ? 'text-emerald-100/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
