'use client';

import { scoreBarColor, scoreLabel } from '../lib/model/scoring';

type ScoreBarProps = {
  label: string;
  score: number;
  maxScore?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export function ScoreBar({ label, score, maxScore = 100, showLabel = true, size = 'md' }: ScoreBarProps) {
  const pct = Math.min(100, Math.max(0, (score / maxScore) * 100));
  const barColor = scoreBarColor(score);
  const heights = { sm: 'h-2', md: 'h-3', lg: 'h-4' };

  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold text-slate-900">{score}</span>
          <span className="text-xs text-slate-400">/ {maxScore}</span>
          {showLabel && (
            <span className={`ml-1.5 text-xs font-medium ${score >= 65 ? 'text-emerald-600' : score >= 50 ? 'text-amber-600' : 'text-red-500'}`}>
              {scoreLabel(score)}
            </span>
          )}
        </div>
      </div>
      <div className={`${heights[size]} w-full overflow-hidden rounded-full bg-slate-100`}>
        <div
          className={`${heights[size]} bar-fill rounded-full ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
