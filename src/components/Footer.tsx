import Link from 'next/link';
import { brand, navItems } from '../content/site';

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 to-teal-600">
                <span className="text-xs font-black text-white">TV</span>
              </div>
              <span className="text-2xl text-slate-900 [font-family:var(--font-display)]">{brand.name}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
              {brand.tagline}
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Building the valuation layer for soil carbon, water, biodiversity, and the wider living economy.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Platform</h4>
            <nav className="mt-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-emerald-700 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Connect</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
              <span>General: hello@terravalue.io</span>
              <span>Partnerships: partners@terravalue.io</span>
              <span>Investors: capital@terravalue.io</span>
              <Link href="/#waitlist" className="mt-1 font-medium text-emerald-700 hover:text-emerald-800">
                Start a conversation &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} TerraValue. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Decision infrastructure for natural capital in agriculture.
          </p>
        </div>
      </div>
    </footer>
  );
}
