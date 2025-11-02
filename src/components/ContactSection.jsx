import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Let’s Build Something Great</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Open to contracts, collaborations, and full-time opportunities. If your organization needs data-driven strategy,
          a robust web application, or location intelligence, I’d love to talk.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:hello@example.com"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-white/20 hover:bg-white/10"
          >
            <Mail size={18} /> hello@example.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-white/20 hover:bg-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-white/20 hover:bg-white/10"
          >
            <Github size={18} /> GitHub
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
          <MapPin size={16} /> Available for remote and hybrid engagements
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-500/10 to-transparent" />
    </section>
  );
};

export default ContactSection;
