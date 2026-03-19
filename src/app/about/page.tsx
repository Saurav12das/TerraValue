import { Section } from '../../components/Section';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Section title="Mission" subtitle="Build the financial and decision infrastructure for natural capital in agriculture."><p className="text-slate-700">TerraValue converts regenerative and resilient farm practices into quantified, decision-ready, and monetizable ecosystem outcomes.</p></Section>
      <Section title="The Problem" subtitle="Most systems are carbon-only or fragmented, leaving major value invisible."><p className="text-slate-700">Agricultural ecosystems generate multi-dimensional services, yet current markets often isolate a single signal and miss system-level value creation.</p></Section>
      <Section title="Vision: Digital Twin + Valuation Engine" subtitle="A farm-level operating intelligence layer for natural capital."><p className="text-slate-700">TerraValue will evolve into a modular digital twin capable of simulation, scenario testing, and ecosystem service valuation across carbon, water, biodiversity, resilience, and economics.</p></Section>
      <Section title="A broader thesis" subtitle="Agriculture is not just a sector — it is a systems platform for the century ahead.">
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li><strong>Human purpose:</strong> agriculture connects community and science in practical, place-based work.</li>
          <li><strong>Climate response:</strong> farm ecosystems are central to carbon outcomes and climate resilience.</li>
          <li><strong>AI-era relevance:</strong> water-aware decision intelligence in agriculture can inform next-generation AI resource optimization.</li>
        </ul>
      </Section>
    </div>
  );
}
