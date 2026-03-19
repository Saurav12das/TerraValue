import { BiodiversityIcon, ChartIcon, GlobeIcon, WaterIcon } from './Icons';

export function MissionSystemGraphic() {
  return (
    <div className="relative mx-auto flex h-[25rem] w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-[2rem] border border-emerald-200/70 bg-[radial-gradient(circle_at_top,rgba(213,243,228,0.85),rgba(255,255,255,0.95)_42%,rgba(239,246,255,0.95)_100%)] p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,165,114,0.12),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.08),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(245,158,11,0.08),transparent_20%)]" />

      <div className="pointer-events-none absolute h-64 w-64 rounded-full border border-emerald-300/40 animate-spin-slow" />
      <div className="pointer-events-none absolute h-80 w-80 rounded-full border border-dashed border-emerald-200/60" />
      <div className="pointer-events-none absolute h-44 w-44 rounded-full bg-emerald-100/45 blur-2xl" />

      <Node
        className="left-4 top-10 md:left-8"
        icon={<ChartIcon size={22} />}
        eyebrow="Serve"
        label="Farmers"
        detail="income visibility"
      />
      <Node
        className="right-4 top-14 md:right-8"
        icon={<GlobeIcon size={22} />}
        eyebrow="Strengthen"
        label="Communities"
        detail="regional resilience"
      />
      <Node
        className="bottom-6 left-1/2 -translate-x-1/2"
        icon={<BiodiversityIcon size={22} />}
        eyebrow="Protect"
        label="Environment"
        detail="living systems"
      />

      <div className="absolute left-[27%] top-[37%] h-px w-[18%] bg-gradient-to-r from-transparent via-emerald-400/50 to-emerald-400/70" />
      <div className="absolute right-[27%] top-[37%] h-px w-[18%] bg-gradient-to-r from-emerald-400/70 via-emerald-400/50 to-transparent" />
      <div className="absolute bottom-[24%] left-1/2 h-[18%] w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400/70 via-emerald-300/50 to-transparent" />

      <div className="relative z-10 max-w-[16rem] rounded-[1.7rem] border border-[#1a6e4f]/15 bg-[#173328] px-6 py-7 text-center text-white shadow-[0_20px_60px_rgba(12,36,28,0.22)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-emerald-100">
          <WaterIcon size={26} />
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100/75">Mission-driven layer</p>
        <h3 className="mt-3 text-2xl leading-tight [font-family:var(--font-display)]">TerraValue</h3>
        <p className="mt-3 text-sm leading-6 text-stone-100/80">
          Translate care for land into science, trust, and economic signal.
        </p>
      </div>

      <div className="absolute bottom-4 right-4 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
        science {'->'} stewardship {'->'} value
      </div>
    </div>
  );
}

function Node({
  className,
  icon,
  eyebrow,
  label,
  detail,
}: {
  className: string;
  icon: React.ReactNode;
  eyebrow: string;
  label: string;
  detail: string;
}) {
  return (
    <div
      className={`absolute z-10 rounded-[1.4rem] border border-white/70 bg-white/85 px-4 py-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)] backdrop-blur-sm animate-float ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
          {icon}
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">{eyebrow}</p>
          <p className="mt-1 text-base font-semibold text-slate-900">{label}</p>
          <p className="text-xs text-slate-500">{detail}</p>
        </div>
      </div>
    </div>
  );
}
