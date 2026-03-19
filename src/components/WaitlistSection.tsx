'use client';

import { useState } from 'react';
import { CheckIcon } from './Icons';

type FormState = 'idle' | 'submitted';

function FormCard({
  title,
  description,
  fields,
  buttonLabel,
}: {
  title: string;
  description: string;
  fields: { placeholder: string; type?: string }[];
  buttonLabel: string;
}) {
  const [state, setState] = useState<FormState>('idle');

  if (state === 'submitted') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50/60 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckIcon size={24} />
        </div>
        <p className="mt-3 font-semibold text-emerald-900">Thank you!</p>
        <p className="mt-1 text-sm text-emerald-700">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setState('submitted');
      }}
      className="card-hover rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
      <div className="mt-4 flex flex-col gap-2.5">
        {fields.map((f) => (
          <input
            key={f.placeholder}
            type={f.type || 'text'}
            placeholder={f.placeholder}
            required
            className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-all"
          />
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 active:bg-emerald-900"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

export function WaitlistSection() {
  return (
    <section id="waitlist" className="rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 p-6 shadow-sm sm:p-10">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Early Access</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Join TerraValue
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
          Be among the first to access integrated ecosystem valuation for agriculture.
          Whether you&apos;re a farmer, researcher, investor, or partner — we want to hear from you.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <FormCard
          title="Join the Waitlist"
          description="Get notified when TerraValue launches."
          fields={[
            { placeholder: 'Full name' },
            { placeholder: 'Email address', type: 'email' },
            { placeholder: 'Role (farmer, researcher, etc.)' },
          ]}
          buttonLabel="Join Waitlist"
        />
        <FormCard
          title="Partnership Inquiry"
          description="Explore strategic collaboration opportunities."
          fields={[
            { placeholder: 'Organization name' },
            { placeholder: 'Contact email', type: 'email' },
            { placeholder: 'Area of interest' },
          ]}
          buttonLabel="Request Partnership"
        />
        <FormCard
          title="Investor Interest"
          description="Learn about the TerraValue opportunity."
          fields={[
            { placeholder: 'Fund / firm name' },
            { placeholder: 'Contact email', type: 'email' },
            { placeholder: 'Investment thesis focus' },
          ]}
          buttonLabel="Connect"
        />
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        Structured for easy backend integration. No data is stored in this prototype.
      </p>
    </section>
  );
}
