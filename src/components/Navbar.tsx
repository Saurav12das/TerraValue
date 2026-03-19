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
          ? 'bg-[#0C0C0C]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-xl font-semibold tracking-tight text-white [font-family:var(--font-display)]">
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/dashboard"
            className="text-[13px] font-medium text-white/50 hover:text-white/80 transition-colors"
          >
            Demo
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-[#0C0C0C] transition-all hover:bg-white/90"
          >
            Get Access
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
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
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-center py-3 text-sm font-medium text-white/50 border border-white/10 rounded-lg"
            >
              Demo
            </Link>
            <Link
              href="/#waitlist"
              onClick={() => setMobileOpen(false)}
              className="text-center py-3 text-sm font-semibold text-[#0C0C0C] bg-white rounded-lg"
            >
              Get Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
