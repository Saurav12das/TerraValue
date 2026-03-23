'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { navItems, brand } from '../content/site';
import { MenuIcon, CloseIcon, TerraValueLogo } from './Icons';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleAccessClick(event: React.MouseEvent<HTMLAnchorElement>) {
    setMobileOpen(false);

    if (pathname !== '/') {
      return;
    }

    event.preventDefault();

    const target = document.getElementById('waitlist');
    if (!target) {
      window.location.hash = 'waitlist';
      return;
    }

    const headerOffset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.history.replaceState(null, '', '/#waitlist');
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHomePage
          ? 'bg-[#0C0C0C]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Single-row horizontal layout */}
        <div className="flex items-center justify-between h-16">
          {/* Logo — left-aligned, prominent brand name with "Living Economy" as a subtle badge */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <TerraValueLogo size={30} className="text-[#3ECF8E] transition-transform group-hover:scale-110" />
            <div className="flex items-baseline gap-2">
              <span className="text-[1.6rem] leading-none tracking-[-0.04em] text-white [font-family:var(--font-display)] font-bold">
                {brand.name}
              </span>
              <span className="hidden sm:inline-flex text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-400/50 border-l border-white/10 pl-2">
                Living Economy
              </span>
            </div>
          </Link>

          {/* Desktop nav links — center */}
          <nav className="hidden md:flex items-center gap-6">
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
          </nav>

          {/* Desktop CTA — right */}
          <div className="hidden md:block">
            <Link
              href="/#waitlist"
              onClick={handleAccessClick}
              className="inline-flex rounded-full bg-[#d47a34] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all hover:bg-[#e08843] hover:scale-[1.03]"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
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
              onClick={handleAccessClick}
              className="text-center py-3 text-sm font-medium text-white border border-[#d47a34]/50 bg-[#d47a34] rounded-xl"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
