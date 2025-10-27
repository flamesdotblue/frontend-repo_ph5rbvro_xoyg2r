import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />

        <section id="courses" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Popular courses</h2>
                <p className="mt-2 text-slate-600">Curated tracks to help you reach your goals faster.</p>
              </div>
              <a href="#" className="hidden sm:inline-flex text-sm font-medium text-indigo-700 hover:text-indigo-800">View all</a>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[{
                title: 'Full‑stack Web Development',
                tag: 'Career track',
                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2069&auto=format&fit=crop',
              }, {
                title: 'Product Design (UI/UX)',
                tag: 'Certificate',
                img: 'https://images.unsplash.com/photo-1587614295999-6c07f1eeab86?q=80&w=2069&auto=format&fit=crop',
              }, {
                title: 'Data Science & Machine Learning',
                tag: 'Advanced',
                img: 'https://images.unsplash.com/photo-1534759846116-5797a4d0f29f?q=80&w=2069&auto=format&fit=crop',
              }].map((c) => (
                <a key={c.title} href="#" className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-lg">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img src={c.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">{c.tag}</span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">{c.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">Project-based curriculum with mentor feedback.</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="get-started" className="relative py-16 sm:py-20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.08),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-slate-900 p-8 sm:p-12 text-white shadow-lg">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">Ready to spark your learning journey?</h3>
                  <p className="mt-2 text-white/70">Join thousands of learners leveling up their careers with EduSpark.</p>
                </div>
                <a href="#" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-white/90">Create free account</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
