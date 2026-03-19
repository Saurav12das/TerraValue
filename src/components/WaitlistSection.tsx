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
      <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-emerald-500/20 bg-emerald-500/5 p-6 text-center backdrop-blur-md">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
          <CheckIcon size={32} />
        </div>
        <p className="font-semibold text-white text-lg">Thank you!</p>
        <p className="mt-2 text-sm text-emerald-200/70">Our team will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setState('submitted');
      }}
      className="card-interactive glass-dark rounded-[1.5rem] p-6 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-emerald-100/60 h-10">{description}</p>
        <div className="mt-6 flex flex-col gap-3">
          {fields.map((f) => (
            <input
              key={f.placeholder}
              type={f.type || 'text'}
              placeholder={f.placeholder}
              required
              className="w-full rounded-xl border border-white/10 bg-[#021810]/50 px-4 py-3.5 text-sm text-white placeholder:text-emerald-200/40 focus:border-emerald-500/50 focus:bg-[#021810] focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
            />
          ))}
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-emerald-500 px-4 py-3.5 text-sm font-bold text-[#021810] shadow-[0_0_20px_rgba(34,197,136,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(34,197,136,0.5)] active:scale-[0.98]"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}

export function WaitlistSection() {
  return (
    <section id="waitlist" className="relative overflow-hidden rounded-[2.5rem] bg-[#021810] p-8 shadow-2xl sm:p-14 lg:p-20 text-white animate-fade-in-up">
      <div className="pointer-events-none absolute inset-0 mesh-gradient-dark opacity-60" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Start the conversation
        </p>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl [font-family:var(--font-display)]">
          Build with TerraValue
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-emerald-100/70">
          This is an open door for investors, pilot partners, and collaborators who want to help define the missing market infrastructure.
        </p>
      </div>

      <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-3">
        <FormCard
          title="Join the Waitlist"
          description="Stay close to the product as the platform takes shape."
          fields={[
            { placeholder: 'Full name' },
            { placeholder: 'Email address', type: 'email' },
            { placeholder: 'Role (farmer, researcher, etc.)' },
          ]}
          buttonLabel="Join Waitlist"
        />
        <FormCard
          title="Partnerships"
          description="Pilots, data integration, and strategic collaboration."
          fields={[
            { placeholder: 'Organization name' },
            { placeholder: 'Contact email', type: 'email' },
            { placeholder: 'Area of focus' },
          ]}
          buttonLabel="Request Partnership"
        />
        <FormCard
          title="Investor Access"
          description="Talk about the market thesis and long-term opportunity."
          fields={[
            { placeholder: 'Fund / firm name' },
            { placeholder: 'Contact email', type: 'email' },
            { placeholder: 'Investment thesis / check size' },
          ]}
          buttonLabel="Connect with Founders"
        />
      </div>

      <p className="relative z-10 mt-12 text-center text-xs text-emerald-500/40 uppercase tracking-widest font-semibold">
        Prototype forms for early conversations. Secure connections.
      </p>
    </section>
  );
}
