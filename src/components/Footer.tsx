import Link from 'next/link';
import { brand, navItems } from '../content/site';

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-white [font-family:var(--font-display)]">{brand.name}</span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/35">
              {brand.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/20">
              Building the valuation layer for soil carbon, water, biodiversity, and the wider living economy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25">Platform</h4>
            <nav className="mt-6 flex flex-col gap-3.5">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/40 hover:text-white/70 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25">Connect</h4>
            <div className="mt-6 flex flex-col gap-3.5 text-sm text-white/40">
              <span className="hover:text-white/70 transition-colors select-all cursor-text">hello@terravalue.io</span>
              <span className="hover:text-white/70 transition-colors select-all cursor-text">partners@terravalue.io</span>
              <span className="hover:text-white/70 transition-colors select-all cursor-text">capital@terravalue.io</span>
              <Link href="/#waitlist" className="mt-2 inline-flex items-center gap-2 font-medium text-white/50 hover:text-white/70 transition-colors">
                Start a conversation
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} TerraValue. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/15 hover:text-white/30 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-white/15 hover:text-white/30 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
