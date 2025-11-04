import { Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-purple-600/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              New launch — build beautiful apps faster
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Design, build, and ship with style
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl">
              A modern starter that blends thoughtful design with developer happiness. Crafted with React and Tailwind for speed and elegance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 transition"
              >
                Explore Features
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                Get a demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-1">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-transparent blur-2xl" />
              <div className="relative h-full w-full rounded-xl bg-black/40 backdrop-blur p-6 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-20 rounded-lg bg-white/5 border border-white/10" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-white/50">Zero-config beauty. Ready for your content.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
