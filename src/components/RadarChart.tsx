'use client';

import { useInView } from '../hooks/useInView';

type RadarChartProps = {
  values: { label: string; value: number }[]; // 0–100
  size?: number;
  color?: string;
  compareValues?: { label: string; value: number }[];
};

export function RadarChart({ values, size = 280, color = '#0f8c5e', compareValues }: RadarChartProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>(0.2);
  const cx = size / 2;
  const cy = size / 2;
  const levels = 5;
  const maxR = size / 2 - 36;
  const n = values.length;
  const angleStep = (2 * Math.PI) / n;

  function polarToCart(angle: number, r: number) {
    return {
      x: cx + r * Math.cos(angle - Math.PI / 2),
      y: cy + r * Math.sin(angle - Math.PI / 2),
    };
  }

  function makePolygon(vals: { value: number }[]) {
    return vals
      .map((v, i) => {
        const r = (v.value / 100) * maxR;
        const p = polarToCart(i * angleStep, r);
        return `${p.x},${p.y}`;
      })
      .join(' ');
  }

  return (
    <div ref={ref} className="flex justify-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Grid levels */}
        {Array.from({ length: levels }, (_, l) => {
          const r = ((l + 1) / levels) * maxR;
          const points = Array.from({ length: n }, (_, i) => {
            const p = polarToCart(i * angleStep, r);
            return `${p.x},${p.y}`;
          }).join(' ');
          return (
            <polygon
              key={l}
              points={points}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1"
              opacity={0.6}
            />
          );
        })}

        {/* Axis lines */}
        {values.map((_, i) => {
          const p = polarToCart(i * angleStep, maxR);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          );
        })}

        {/* Compare polygon (if provided) */}
        {compareValues && (
          <polygon
            points={makePolygon(compareValues)}
            fill="rgba(239, 68, 68, 0.08)"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s ease 0.3s',
            }}
          />
        )}

        {/* Main polygon */}
        <polygon
          points={isVisible ? makePolygon(values) : makePolygon(values.map(() => ({ value: 0 })))}
          fill={`${color}18`}
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
          style={{
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Data points */}
        {values.map((v, i) => {
          const r = (v.value / 100) * maxR;
          const p = polarToCart(i * angleStep, isVisible ? r : 0);
          return (
            <circle
              key={i}
              cx={isVisible ? p.x : cx}
              cy={isVisible ? p.y : cy}
              r="4"
              fill="white"
              stroke={color}
              strokeWidth="2"
              style={{
                transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
              }}
            />
          );
        })}

        {/* Labels */}
        {values.map((v, i) => {
          const p = polarToCart(i * angleStep, maxR + 22);
          const textAnchor = p.x < cx - 5 ? 'end' : p.x > cx + 5 ? 'start' : 'middle';
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              className="fill-slate-600 text-[11px] font-medium"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.5s ease ${0.6 + i * 0.1}s`,
              }}
            >
              {v.label} ({v.value})
            </text>
          );
        })}
      </svg>
    </div>
  );
}
