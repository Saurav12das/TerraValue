'use client';

import { useCountUp } from '../hooks/useInView';

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({ value, prefix = '', suffix = '', label, duration = 1400 }: AnimatedCounterProps) {
  const [ref, count] = useCountUp(value, duration);

  return (
    <div className="text-center">
      <span ref={ref} className="text-4xl font-extrabold text-gradient sm:text-5xl">
        {prefix}{count}{suffix}
      </span>
      <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[200px] mx-auto">{label}</p>
    </div>
  );
}
