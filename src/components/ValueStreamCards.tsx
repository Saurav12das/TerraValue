'use client';

import { useState } from 'react';
import { valueStreams } from '../content/site';

/* ─── SVG illustrations for each card ─── */
function CardIllustration({ icon, color }: { icon: string; color: string }) {
  const opacity = '0.12';
  const common = { width: 80, height: 80, viewBox: '0 0 80 80', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' } as const;

  switch (icon) {
    case 'carbon':
      return (
        <svg {...common}>
          <circle cx="40" cy="44" r="22" stroke={color} strokeWidth="2" opacity={opacity} />
          <path d="M28 44c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 20v12M32 24l4 8M48 24l-4 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="44" r="4" fill={color} opacity="0.3" />
          <path d="M22 58c4-6 10-10 18-10s14 4 18 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
        </svg>
      );
    case 'water-quality':
      return (
        <svg {...common}>
          <path d="M40 16c0 0-18 22-18 34a18 18 0 0036 0c0-12-18-34-18-34z" stroke={color} strokeWidth="2" opacity={opacity} />
          <path d="M32 46c2-4 6-6 10-2s6 2 8-1" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="36" cy="38" r="2" fill={color} opacity="0.3" />
          <circle cx="44" cy="42" r="1.5" fill={color} opacity="0.2" />
          <path d="M30 54a14 14 0 0020 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        </svg>
      );
    case 'water-quantity':
      return (
        <svg {...common}>
          <rect x="16" y="30" width="48" height="34" rx="4" stroke={color} strokeWidth="2" opacity={opacity} />
          <path d="M16 42h48" stroke={color} strokeWidth="1.5" opacity="0.15" />
          <path d="M24 42v-6M32 42v-10M40 42v-8M48 42v-12M56 42v-5" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.25" />
          <path d="M24 50h32" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M24 56h20" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <circle cx="40" cy="22" r="6" stroke={color} strokeWidth="1.5" opacity="0.2" />
        </svg>
      );
    case 'biodiversity':
      return (
        <svg {...common}>
          <path d="M40 60V30" stroke={color} strokeWidth="2" opacity="0.2" />
          <path d="M40 30c-8-12-20-8-20 2s12 14 20 8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.06" />
          <path d="M40 30c8-12 20-8 20 2s-12 14-20 8" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.06" />
          <circle cx="26" cy="22" r="3" fill={color} opacity="0.2" />
          <circle cx="54" cy="18" r="2" fill={color} opacity="0.15" />
          <path d="M18 56c4-2 8 0 12-1s6-3 10-2 6 3 10 2 8-1 12 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
          <circle cx="30" cy="52" r="1.5" fill={color} opacity="0.25" />
          <circle cx="50" cy="50" r="1" fill={color} opacity="0.2" />
        </svg>
      );
    case 'resilience':
      return (
        <svg {...common}>
          <circle cx="40" cy="40" r="24" stroke={color} strokeWidth="2" opacity={opacity} />
          <path d="M20 48l8-12 6 8 8-20 6 14 8-6 6 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 48l8-12 6 8 8-20 6 14 8-6 6 10" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.1" fill={color} />
          <circle cx="40" cy="20" r="3" stroke={color} strokeWidth="1.5" opacity="0.3" />
        </svg>
      );
    case 'economics':
      return (
        <svg {...common}>
          <rect x="18" y="24" width="44" height="36" rx="4" stroke={color} strokeWidth="2" opacity={opacity} />
          <circle cx="40" cy="42" r="10" stroke={color} strokeWidth="2.5" />
          <path d="M40 36v12M36 40h8" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <path d="M22 28h36" stroke={color} strokeWidth="1.5" opacity="0.15" />
          <circle cx="26" cy="32" r="2" fill={color} opacity="0.15" />
          <circle cx="54" cy="32" r="2" fill={color} opacity="0.15" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── Single flip card ─── */
function FlipCard({ stream, index }: { stream: typeof valueStreams[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      className="group cursor-pointer"
      style={{ perspective: '1200px', animationDelay: `${index * 80}ms` }}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
      tabIndex={0}
      role="button"
      aria-label={`${stream.title} — click to ${flipped ? 'see description' : 'see data'}`}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: '320px',
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl border border-[#E8E6E1] bg-white p-7 flex flex-col justify-between overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Decorative background glow */}
          <div
            className="absolute -top-8 -right-8 h-32 w-32 rounded-full blur-3xl opacity-[0.07]"
            style={{ backgroundColor: stream.color }}
          />

          <div>
            {/* Illustration */}
            <div className="mb-5 flex items-center justify-between">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stream.color}10` }}
              >
                <CardIllustration icon={stream.icon} color={stream.color} />
              </div>
              <div
                className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: stream.color, backgroundColor: `${stream.color}08` }}
              >
                <span>Flip for data</span>
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: stream.color }} />
              <h3 className="text-[17px] font-bold text-[#1A1A1A] tracking-tight [font-family:var(--font-display)]">
                {stream.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-[1.65] text-[#6B6B6B]">{stream.description}</p>
          </div>

          {/* Bottom accent bar */}
          <div className="mt-6 h-[3px] rounded-full bg-[#E8E6E1] overflow-hidden">
            <div
              className="h-full w-0 group-hover:w-full transition-all duration-700 rounded-full"
              style={{ backgroundColor: stream.color }}
            />
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl border overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: `${stream.color}30`,
            background: `linear-gradient(135deg, ${stream.color}08, ${stream.color}03)`,
          }}
        >
          {/* Header bar */}
          <div
            className="px-6 py-3.5 flex items-center justify-between"
            style={{ backgroundColor: `${stream.color}0D` }}
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: stream.color }} />
              <span className="text-[13px] font-bold tracking-tight" style={{ color: stream.color }}>
                {stream.title}
              </span>
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9A9A9A]">
              Real data
            </span>
          </div>

          {/* Metrics */}
          <div className="flex-1 px-6 py-4 flex flex-col justify-center gap-3.5">
            {stream.metrics.map((m) => (
              <div key={m.label} className="flex items-baseline justify-between gap-3">
                <span className="text-[12px] text-[#6B6B6B] leading-snug flex-1">{m.label}</span>
                <div className="text-right shrink-0">
                  <span className="text-[17px] font-bold tracking-tight [font-family:var(--font-display)]" style={{ color: stream.color }}>
                    {m.value}
                  </span>
                  <span className="ml-1 text-[10px] text-[#9A9A9A] font-medium">{m.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Source */}
          <div className="px-6 py-3 border-t" style={{ borderColor: `${stream.color}15` }}>
            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#9A9A9A]">
              Sources: {stream.source}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── Grid export ─── */
export function ValueStreamCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
      {valueStreams.map((stream, i) => (
        <FlipCard key={stream.key} stream={stream} index={i} />
      ))}
    </div>
  );
}
