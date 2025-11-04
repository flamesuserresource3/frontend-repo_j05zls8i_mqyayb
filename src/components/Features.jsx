import { Shield, Zap, Sparkles, LayoutGrid } from 'lucide-react';

const items = [
  {
    icon: <Zap className="h-5 w-5 text-indigo-400" />,
    title: 'Fast by default',
    desc: 'Vite-powered development and optimized builds keep you in flow.'
  },
  {
    icon: <Shield className="h-5 w-5 text-indigo-400" />,
    title: 'Secure and robust',
    desc: 'Best practices baked in so you can ship with confidence.'
  },
  {
    icon: <LayoutGrid className="h-5 w-5 text-indigo-400" />,
    title: 'Beautiful UI',
    desc: 'Tailwind utilities and thoughtful defaults for elegant layouts.'
  },
  {
    icon: <Sparkles className="h-5 w-5 text-indigo-400" />,
    title: 'Delightful details',
    desc: 'Micro-interactions and polish that make your app feel premium.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Everything you need to launch</h2>
          <p className="mt-2 text-white/60 max-w-2xl mx-auto">
            A curated set of utilities and patterns that help you move from idea to production faster.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, idx) => (
            <div key={idx} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
