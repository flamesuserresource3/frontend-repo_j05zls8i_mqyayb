import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.25)_0%,rgba(168,85,247,0.15)_35%,rgba(0,0,0,0)_70%)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">A starter that feels premium</h3>
              <p className="mt-2 text-white/70">
                Thoughtful defaults, elegant styling, and a clean structure so you can focus on your product. Built with modern tooling and an eye for detail.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6">
              <ul className="space-y-3 text-white/80 list-disc list-inside">
                <li>Responsive out of the box</li>
                <li>Accessible and keyboard-friendly</li>
                <li>Flexible components you can extend</li>
                <li>Clean, minimal aesthetic</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
