import React from 'react';
import { Trophy, Star, Shield } from 'lucide-react';

const badges = [
  {
    icon: Trophy,
    title: 'Top 1% Program Rank',
    desc: 'Consistent leaderboard finishes across multiple public programs.',
    glow: 'from-amber-400/30 to-amber-600/10',
  },
  {
    icon: Star,
    title: 'Critical Impact Reports',
    desc: 'Multiple criticals for auth bypass and injection chains.',
    glow: 'from-fuchsia-400/30 to-fuchsia-600/10',
  },
  {
    icon: Shield,
    title: 'Responsible Disclosure',
    desc: 'Dozens of coordinated disclosures with clear remediation steps.',
    glow: 'from-cyan-400/30 to-cyan-600/10',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-amber-300 to-fuchsia-300 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="mt-2 text-white/70 max-w-2xl">Highlights from programs, public write-ups, and recognition.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className={`pointer-events-none absolute -inset-px opacity-40 bg-gradient-to-br ${b.glow}`} />
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
