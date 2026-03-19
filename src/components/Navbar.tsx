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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <div 
        className={`mx-auto max-w-7xl relative flex items-center justify-between rounded-full border px-4 py-2 pointer-events-auto transition-all duration-500
          ${scrolled 
            ? 'bg-[#021810]/70 backdrop-blur-xl border-emerald-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-[#021810]/40 backdrop-blur-md border-white/5'
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-transform group-hover:scale-105">
            <span className="text-sm font-black text-emerald-400 tracking-tight">TV</span>
          </div>
          <span className="text-xl tracking-tight text-white transition-colors group-hover:text-emerald-300 [font-family:var(--font-display)]">
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-emerald-100/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="rounded-full border border-emerald-500/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/10 hover:border-emerald-500/50"
          >
            Explore Demo
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#021810] shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
          >
            Access Platform
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-full p-2.5 text-emerald-100/70 hover:bg-white/10 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="animate-fade-in absolute top-[calc(100%+16px)] left-4 right-4 rounded-3xl border border-emerald-500/20 bg-[#021810]/95 backdrop-blur-xl px-4 pb-6 pt-4 shadow-2xl md:hidden pointer-events-auto">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-5 py-3.5 text-base font-medium transition-colors ${
                    isActive ? 'bg-emerald-500/10 text-emerald-300' : 'text-emerald-100/70'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl border border-emerald-500/30 bg-transparent px-5 py-3.5 text-center text-sm font-semibold text-emerald-300"
            >
              Explore Demo
            </Link>
            <Link
              href="/#waitlist"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl bg-emerald-500 px-5 py-3.5 text-center text-sm font-semibold text-[#021810]"
            >
              Access Platform
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
