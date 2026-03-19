'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navItems, brand } from '../content/site';
import { MenuIcon, CloseIcon } from './Icons';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0C0C0C]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-3 lg:px-8">
        <div className="relative flex items-start justify-between">
          <div className="hidden md:block w-28" />

          <Link href="/" className="mx-auto hidden md:flex flex-col items-center text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-emerald-200/62">
              Living economy
            </span>
            <span className="mt-1 text-[2.2rem] leading-none tracking-[-0.05em] text-white [font-family:var(--font-display)]">
              {brand.name}
            </span>
            <span className="mt-2 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-white/30">
              <span className="h-px w-10 bg-white/16" />
              Soil • Water • Value
              <span className="h-px w-10 bg-white/16" />
            </span>
          </Link>

          <Link href="/" className="md:hidden flex flex-col">
            <span className="text-[1.75rem] leading-none tracking-[-0.05em] text-white [font-family:var(--font-display)]">
              {brand.name}
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/40">
              Soil • Water • Value
            </span>
          </Link>

          <div className="hidden md:block w-28 text-right">
            <Link
              href="/#waitlist"
              className="inline-flex rounded-full bg-[#d47a34] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#e08843]"
            >
              Access
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-auto p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center gap-6 border-t border-white/[0.08] pt-4 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-white/48 hover:text-white/82'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="animate-fade-in md:hidden bg-[#0C0C0C] border-t border-white/[0.06] px-6 pb-8 pt-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/#waitlist"
              onClick={() => setMobileOpen(false)}
              className="text-center py-3 text-sm font-medium text-white border border-[#d47a34]/50 bg-[#d47a34] rounded-xl"
            >
              Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
