import React from 'react';
import { Code2, Link2 } from 'lucide-react';

const projects = [
  {
    name: 'ssrf-scout',
    tag: 'Tooling',
    desc: 'Automated SSRF surface mapper with smart endpoint heuristics.',
    link: 'https://github.com/',
  },
  {
    name: 'scope-scraper',
    tag: 'Recon',
    desc: 'Harvests and normalizes program scopes with diff alerts.',
    link: 'https://github.com/',
  },
  {
    name: 'cache-poison-lab',
    tag: 'Research',
    desc: 'Reproducible lab to craft and test cache poisoning chains.',
    link: 'https://github.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0f] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Projects & Tools</span>
            </h2>
            <p className="mt-2 text-white/70 max-w-2xl">Open-source tools, research labs, and write-ups that support the hunt.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-40 transition-opacity bg-gradient-to-br from-fuchsia-400/10 to-cyan-400/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-white/60">
                  <Code2 className="h-4 w-4" />
                  <span className="text-xs font-mono px-2 py-0.5 rounded border border-white/10 bg-black/40">{p.tag}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
                  <Link2 className="h-4 w-4" /> View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
