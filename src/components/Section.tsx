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
      className={`rounded-xl border p-6 sm:p-10 ${
        dark
          ? 'border-white/[0.06] bg-white/[0.02] text-white'
          : 'border-[#E8E6E1] bg-white'
      } ${className}`}
    >
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl [font-family:var(--font-display)] ${
          dark ? 'text-white' : 'text-[#1A1A1A]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-3xl text-base leading-relaxed ${dark ? 'text-white/40' : 'text-[#6B6B6B]'}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
