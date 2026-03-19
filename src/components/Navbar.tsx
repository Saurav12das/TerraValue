import Link from 'next/link';
import { navItems, brand } from '../content/site';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-emerald-900">{brand.name}</Link>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-emerald-700">{item.label}</Link>
          ))}
        </nav>
        <Link href="/#waitlist" className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white">Join Waitlist</Link>
      </div>
    </header>
  );
}
