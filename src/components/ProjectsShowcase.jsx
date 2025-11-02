import React from 'react';
import { ExternalLink, Map, BarChart3, ServerCog } from 'lucide-react';

const projects = [
  {
    title: 'Geospatial Coverage Planner',
    desc: 'Optimized site selection using spatial clustering, drive-time isochrones, and demographic overlays.',
    tags: ['GIS', 'Isochrones', 'Clustering', 'Leaflet'],
    icon: <Map className="h-5 w-5" />,
    link: '#'
  },
  {
    title: 'Executive KPI Dashboard',
    desc: 'Company-wide metrics with role-based access, anomaly alerts, and automated reporting cadence.',
    tags: ['BI', 'Data Viz', 'ETL', 'Python'],
    icon: <BarChart3 className="h-5 w-5" />,
    link: '#'
  },
  {
    title: 'Process Automation Portal',
    desc: 'Digitized requests, approvals, and integrations to reduce cycle time by 60% across departments.',
    tags: ['Workflow', 'APIs', 'RBAC', 'DevOps'],
    icon: <ServerCog className="h-5 w-5" />,
    link: '#'
  }
];

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A snapshot of recent work across analytics, development, automation, and spatial intelligence.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition hover:border-white/20"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-white/80">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                  {p.icon}
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mb-4 text-sm text-white/75">{p.desc}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                >
                  View details <ExternalLink size={16} />
                </a>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl transition group-hover:from-blue-500/20 group-hover:to-purple-500/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
