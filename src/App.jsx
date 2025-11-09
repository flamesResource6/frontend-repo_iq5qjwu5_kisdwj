import React from 'react';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import { Bug, Github, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/40 selection:text-white">
      {/* Sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-fuchsia-600 text-black">
              <Bug className="h-4 w-4" />
            </span>
            <span>Hacker Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#journey" className="hover:text-white">Journey</a>
            <a href="#achievements" className="hover:text-white">Achievements</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Journey />
        <Achievements />
        <Projects />
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-white/10 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">Open to collaborations, research, and program invites.</p>
          <div className="flex items-center gap-3">
            <a href="mailto:hacker@example.com" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
