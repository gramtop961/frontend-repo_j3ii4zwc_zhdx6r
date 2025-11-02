import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay to enhance contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          Data & Business Intelligence • Web Apps • Geospatial • Process Digitization
        </span>
        <h1 className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Transforming Data into Decisions
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-base text-white/80 sm:text-lg">
          I’m a data analyst, business analyst, and web application developer with a strong focus on geospatial analytics, field collection, and process digitization. I help organizations build intelligent, automated solutions that scale.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
