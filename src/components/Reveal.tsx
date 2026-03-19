'use client';

import { type ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;  // ms
  className?: string;
};

/**
 * Wraps any content and reveals it with a smooth animation when scrolled into view.
 */
export function Reveal({ children, direction = 'up', delay = 0, className = '' }: RevealProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>(0.1);

  const transforms: Record<string, string> = {
    up: 'translateY(32px)',
    left: 'translateX(-32px)',
    right: 'translateX(32px)',
    scale: 'scale(0.92)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Reveals children one at a time with staggered delays.
 */
export function RevealGroup({
  children,
  stagger = 100,
  direction = 'up',
  className = '',
}: {
  children: ReactNode[];
  stagger?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
}) {
  const [ref, isVisible] = useInView<HTMLDivElement>(0.1);

  const transforms: Record<string, string> = {
    up: 'translateY(32px)',
    left: 'translateX(-32px)',
    right: 'translateX(32px)',
    scale: 'scale(0.92)',
  };

  return (
    <div ref={ref} className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <div
          key={i}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : transforms[direction],
            transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
