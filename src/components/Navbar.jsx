import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <Rocket className="h-6 w-6 text-indigo-400" />
            <span className="font-semibold tracking-tight">Vibe Starter</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#" className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-400 transition">
              Get Started
            </a>
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden rounded-md p-2 text-white/80 hover:bg-white/5 hover:text-white"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3 text-sm text-white/90">
            <a href="#features" onClick={() => setOpen(false)} className="hover:text-white">Features</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</a>
            <a href="#" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-400 transition">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
