export function WaitlistSection() {
  return (
    <section id="waitlist" className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-emerald-900">Join TerraValue Early Access</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <form className="rounded-xl border border-white/70 bg-white p-4 shadow-sm">
          <h3 className="font-semibold">Waitlist</h3>
          <input className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Full name" />
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Email" />
          <button type="button" className="mt-3 w-full rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white">Join Waitlist</button>
        </form>
        <form className="rounded-xl border border-white/70 bg-white p-4 shadow-sm">
          <h3 className="font-semibold">Partnership Request</h3>
          <input className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Organization" />
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Focus" />
          <button type="button" className="mt-3 w-full rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white">Request Collaboration</button>
        </form>
        <form className="rounded-xl border border-white/70 bg-white p-4 shadow-sm">
          <h3 className="font-semibold">Investor / Updates</h3>
          <input className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Fund / firm" />
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Email" />
          <button type="button" className="mt-3 w-full rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white">Connect</button>
        </form>
      </div>
    </section>
  );
}
