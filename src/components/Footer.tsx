import { brand } from '../content/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-emerald-900">{brand.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{brand.tagline}</p>
        </div>
        <div className="text-sm text-slate-600">Partnerships: partners@terravalue.io</div>
        <div className="text-sm text-slate-600">Investor relations: capital@terravalue.io</div>
      </div>
    </footer>
  );
}
