import React from 'react';
import HeroSection from './components/HeroSection';
import ExpertiseGrid from './components/ExpertiseGrid';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-white">
      {/* Hero with Spline 3D scene */}
      <HeroSection />

      {/* Expertise */}
      <ExpertiseGrid />

      {/* Projects */}
      <ProjectsShowcase />

      {/* Contact */}
      <ContactSection />

      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Flames Blue — Data & Business Technology Portfolio
      </footer>
    </div>
  );
}

export default App;
