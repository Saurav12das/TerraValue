'use client';

import { useInView } from '../hooks/useInView';

type WorkflowStep = {
  number: number;
  title: string;
  items: string[];
  color: string;       // hex
  accentBg: string;    // tailwind bg class
};

type AnimatedWorkflowProps = {
  steps: WorkflowStep[];
};

export function AnimatedWorkflow({ steps }: AnimatedWorkflowProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>(0.15);

  return (
    <div ref={ref} className="relative">
      {/* Connection line (desktop only) */}
      <div className="absolute top-[52px] left-[10%] right-[10%] hidden md:block">
        <div className="h-0.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 rounded-full"
            style={{
              width: isVisible ? '100%' : '0%',
              transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="relative rounded-2xl border-2 bg-white p-6 card-hover"
            style={{
              borderColor: isVisible ? step.color : '#e2e8f0',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 200}ms`,
            }}
          >
            {/* Step number badge */}
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-extrabold text-white shadow-lg"
              style={{
                backgroundColor: step.color,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 200 + 200}ms`,
              }}
            >
              {step.number}
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>

            <ul className="mt-4 space-y-2.5">
              {step.items.map((item, j) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-slate-600"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
                    transition: `all 0.4s ease ${i * 200 + j * 60 + 400}ms`,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: step.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
