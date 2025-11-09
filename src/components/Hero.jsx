import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bug } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden" id="home">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(1000px 600px at 50% -10%, rgba(168,85,247,0.25), transparent 60%), radial-gradient(800px 500px at 80% 120%, rgba(14,165,233,0.2), transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur">
            <Bug className="h-4 w-4 text-fuchsia-400" />
            <span className="text-fuchsia-200">Bug Bounty Hunter • Offensive Security</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Hack the Planet
            </span>
            <br />
            <span className="text-white/90">Crafting exploits, shipping impact.</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            I’m a cybersecurity tinkerer focused on web apps, cloud misconfigurations, and creative
            vulnerability research. Explore my bug bounty journey, reports, and tools I’ve built along the way.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#journey" className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-black hover:bg-fuchsia-400 transition-colors">
              <Rocket className="h-4 w-4" />
              View Journey
            </a>
            <a href="#achievements" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors">
              Achievements
            </a>
          </div>
        </div>

        {/* Spline Canvas */}
        <div className="relative h-[55vh] md:h-[65vh] lg:h-[70vh] rounded-xl overflow-hidden ring-1 ring-white/10">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-fuchsia-500/10" />
        </div>
      </div>
    </section>
  );
}
