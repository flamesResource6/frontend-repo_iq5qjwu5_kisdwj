import React from 'react';
import { Flag, Target, Search, Lock } from 'lucide-react';

const timeline = [
  {
    year: '2021',
    title: 'First Recon Wins',
    icon: <Search className="h-5 w-5 text-cyan-300" />,
    points: [
      'Built custom subdomain and endpoint discovery workflows',
      'First medium severity finding (IDOR) on a fintech target',
    ],
  },
  {
    year: '2022',
    title: 'Scaling the Hunt',
    icon: <Target className="h-5 w-5 text-fuchsia-300" />,
    points: [
      'Automated wordlist generation from target footprints',
      'Chained a cache poisoning + XSS for critical impact',
    ],
  },
  {
    year: '2023',
    title: 'Cloud & Auth Exploits',
    icon: <Lock className="h-5 w-5 text-indigo-300" />,
    points: [
      'Privilege escalation via misconfigured OAuth scopes',
      'S3 bucket policy confusion → exfiltration vector',
    ],
  },
  {
    year: '2024',
    title: 'Lead Research & Mentorship',
    icon: <Flag className="h-5 w-5 text-violet-300" />,
    points: [
      'Open-sourced tooling for SSRF surface discovery',
      'Mentored newcomers through live triage sessions',
    ],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative w-full bg-[#07070a] text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Bug Bounty Journey</span>
          </h2>
          <p className="mt-2 text-white/70 max-w-2xl">A snapshot of milestones, techniques, and lessons from the field.</p>
        </div>

        <ol className="relative border-l border-white/10">
          {timeline.map((t, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                {t.icon}
              </span>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="font-mono text-xs">{t.year}</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span>{t.title}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-white/80 space-y-1">
                  {t.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
