'use client';

import { useState, type ReactNode } from 'react';

type Tab = {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'pills' | 'underline';
};

export function Tabs({ tabs, defaultTab, variant = 'pills' }: TabsProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <div>
      {/* Tab buttons */}
      <div
        className={`flex gap-1 ${
          variant === 'underline'
            ? 'border-b border-slate-200'
            : 'rounded-xl bg-slate-100/80 p-1'
        }`}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                variant === 'underline'
                  ? isActive
                    ? 'border-b-2 border-emerald-600 text-emerald-800 -mb-px'
                    : 'text-slate-500 hover:text-slate-700'
                  : isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="mt-6 animate-fade-in" key={active}>
        {activeTab?.content}
      </div>
    </div>
  );
}
