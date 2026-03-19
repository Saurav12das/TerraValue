'use client';

import { useEffect, useState } from 'react';

export function SignupCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch('/api/waitlist/count');
        if (res.ok) {
          const data = await res.json();
          setCount(data.total);
        }
      } catch {
        // Silently fail — counter just won't show
      }
    }
    fetchCount();
  }, []);

  if (count === null || count === 0) return null;

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex -space-x-1.5">
        {[...Array(Math.min(count, 4))].map((_, i) => (
          <div
            key={i}
            className="h-6 w-6 rounded-full border-2 border-[#0C0C0C] bg-gradient-to-br from-[#3ECF8E]/60 to-[#5BA3D9]/60"
            style={{ zIndex: 4 - i }}
          />
        ))}
        {count > 4 && (
          <div className="h-6 w-6 rounded-full border-2 border-[#0C0C0C] bg-white/10 flex items-center justify-center text-[8px] font-bold text-white/60" style={{ zIndex: 0 }}>
            +{count - 4}
          </div>
        )}
      </div>
      <p className="text-[13px] text-white/50">
        <span className="font-semibold text-white/70">{count}</span> {count === 1 ? 'person has' : 'people have'} joined
      </p>
    </div>
  );
}
