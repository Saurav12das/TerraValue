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
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] p-8 text-center min-h-[280px]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3ECF8E]/10 text-[#3ECF8E] mb-4">
          <CheckIcon size={28} />
        </div>
        <p className="font-semibold text-white text-lg">Thank you</p>
        <p className="mt-2 text-sm text-white/35">Our team will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setState('submitted');
      }}
      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.04]"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm text-white/30 min-h-[40px]">{description}</p>
      <div className="mt-5 flex flex-col gap-3">
        {fields.map((f) => (
          <input
            key={f.placeholder}
            type={f.type || 'text'}
            placeholder={f.placeholder}
            required
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#3ECF8E]/30 focus:outline-none focus:ring-1 focus:ring-[#3ECF8E]/20 transition-all"
          />
        ))}
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#0C0C0C] transition-all hover:bg-white/90"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

export function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-[#0C0C0C] py-24 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ECF8E]/60">
            Start the conversation
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl [font-family:var(--font-display)]">
            Build with TerraValue
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/35">
            This is an open door for investors, pilot partners, and collaborators who want to help define the missing market infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
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

        <p className="mt-12 text-center text-[10px] text-white/15 uppercase tracking-[0.2em] font-medium">
          Prototype forms for early conversations
        </p>
      </div>
    </section>
  );
}
