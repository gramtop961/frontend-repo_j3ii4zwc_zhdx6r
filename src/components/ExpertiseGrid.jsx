import React from 'react';
import { Database, BarChart3, Globe, Code2, Workflow, ClipboardCheck } from 'lucide-react';

const items = [
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
    title: 'Data Analytics',
    desc: 'Dashboards, KPI monitoring, forecasting, and statistical insights that drive decisions.'
  },
  {
    icon: <Database className="h-6 w-6 text-purple-500" />,
    title: 'Business Analysis',
    desc: 'Requirements, stakeholder alignment, and ROI-focused solution design.'
  },
  {
    icon: <Code2 className="h-6 w-6 text-fuchsia-500" />,
    title: 'Web App Development',
    desc: 'End-to-end business web apps that automate processes and scale reliably.'
  },
  {
    icon: <Globe className="h-6 w-6 text-cyan-500" />,
    title: 'Geospatial Analytics',
    desc: 'Mapping, spatial analysis, and location intelligence for smart planning.'
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-emerald-500" />,
    title: 'Data Collection',
    desc: 'Designing field data schemas, digital forms, QA pipelines, and ETL.'
  },
  {
    icon: <Workflow className="h-6 w-6 text-amber-500" />,
    title: 'Process Digitization',
    desc: 'Turning manual workflows into streamlined, automated digital systems.'
  }
];

const ExpertiseGrid = () => {
  return (
    <section id="expertise" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Core Expertise</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A multidisciplinary toolkit to connect strategy, data, and technology into tangible outcomes.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/5 p-3">
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{card.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl transition group-hover:from-blue-500/20 group-hover:to-purple-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
