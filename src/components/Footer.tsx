import Link from 'next/link';
import { brand, navItems } from '../content/site';

export function Footer() {
  return (
    <footer className="border-t border-emerald-500/10 bg-[#021810]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <span className="text-sm font-black text-emerald-400">TV</span>
              </div>
              <span className="text-2xl text-white [font-family:var(--font-display)]">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-emerald-100/60">
              {brand.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-emerald-100/40">
              Building the valuation layer for soil carbon, water, biodiversity, and the wider living economy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500/50">Platform</h4>
            <nav className="mt-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-emerald-100/70 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500/50">Connect</h4>
            <div className="mt-6 flex flex-col gap-4 text-sm text-emerald-100/70">
              <span className="hover:text-white transition-colors select-all">hello@terravalue.io</span>
              <span className="hover:text-white transition-colors select-all">partners@terravalue.io</span>
              <span className="hover:text-white transition-colors select-all">capital@terravalue.io</span>
              <Link href="/#waitlist" className="mt-2 inline-flex items-center gap-2 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                Start a conversation 
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-emerald-500/10 pt-8 sm:flex-row">
          <p className="text-xs text-emerald-500/40">
            &copy; {new Date().getFullYear()} TerraValue. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-emerald-500/30 hover:text-emerald-500/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-emerald-500/30 hover:text-emerald-500/50 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
