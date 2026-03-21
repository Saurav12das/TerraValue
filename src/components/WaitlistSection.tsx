'use client';

import { useState, useRef } from 'react';
import { CheckIcon } from './Icons';
import { SignupCounter } from './SignupCounter';

type FormState = 'idle' | 'submitting' | 'submitted' | 'error';

async function readErrorMessage(response: Response) {
  const fallback = 'Something went wrong. Please try again.';
  const responseText = await response.text();

  if (!responseText) {
    return fallback;
  }

  try {
    const parsed = JSON.parse(responseText) as { error?: string; message?: string };
    return parsed.error || parsed.message || responseText || fallback;
  } catch {
    return responseText || fallback;
  }
}

function FormCard({
  title,
  description,
  formType,
  fields,
  buttonLabel,
}: {
  title: string;
  description: string;
  formType: 'waitlist' | 'partnership' | 'investor';
  fields: { name: string; placeholder: string; type?: string }[];
  buttonLabel: string;
}) {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const fieldValues: Record<string, string> = {};
    fields.forEach((f) => {
      fieldValues[f.name] = formData.get(f.name) as string;
    });

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: formType, fields: fieldValues }),
      });

      if (!res.ok) {
        throw new Error(await readErrorMessage(res));
      }

      setState('submitted');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Please try again.');
    }
  }

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
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.04]"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm text-white/30 min-h-[40px]">{description}</p>
      <div className="mt-5 flex flex-col gap-3">
        {fields.map((f) => (
          <input
            key={f.name}
            name={f.name}
            type={f.type || 'text'}
            placeholder={f.placeholder}
            required
            className="w-full rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#3ECF8E]/30 focus:outline-none focus:ring-1 focus:ring-[#3ECF8E]/20 transition-all"
          />
        ))}
      </div>

      {state === 'error' && (
        <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="mt-5 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#0C0C0C] transition-all hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? 'Submitting...' : buttonLabel}
      </button>
    </form>
  );
}

export function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-32 bg-[#0C0C0C] py-24 lg:py-32 px-6 lg:px-8">
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
            formType="waitlist"
            fields={[
              { name: 'name', placeholder: 'Full name' },
              { name: 'email', placeholder: 'Email address', type: 'email' },
              { name: 'role', placeholder: 'Role (farmer, researcher, etc.)' },
            ]}
            buttonLabel="Join Waitlist"
          />
          <FormCard
            title="Partnerships"
            description="Pilots, data integration, and strategic collaboration."
            formType="partnership"
            fields={[
              { name: 'organization', placeholder: 'Organization name' },
              { name: 'email', placeholder: 'Contact email', type: 'email' },
              { name: 'focus', placeholder: 'Area of focus' },
            ]}
            buttonLabel="Request Partnership"
          />
          <FormCard
            title="Investor Access"
            description="Talk about the market thesis and long-term opportunity."
            formType="investor"
            fields={[
              { name: 'fund', placeholder: 'Fund / firm name' },
              { name: 'email', placeholder: 'Contact email', type: 'email' },
              { name: 'thesis', placeholder: 'Investment thesis / check size' },
            ]}
            buttonLabel="Connect with Founders"
          />
        </div>

        <div className="mt-12 flex justify-center">
          <SignupCounter />
        </div>
      </div>
    </section>
  );
}
