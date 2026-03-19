import { scoreColor } from '../lib/model/scoring';

type MetricCardProps = {
  label: string;
  value: number;
  unit?: string;
  hint?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
};

export function MetricCard({ label, value, unit = '/ 100', hint, icon, highlight = false }: MetricCardProps) {
  const color = scoreColor(value);

  return (
    <div
      className={`card-hover rounded-xl border p-5 ${
        highlight
          ? 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        {icon && <div className="text-slate-400">{icon}</div>}
      </div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className={`text-3xl font-bold ${color}`}>{value}</span>
        <span className="text-sm text-slate-400">{unit}</span>
      </div>
      {hint && <p className="mt-1.5 text-xs text-slate-400">{hint}</p>}
    </div>
  );
}
