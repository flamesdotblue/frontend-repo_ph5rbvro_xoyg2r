import { Rocket, Star, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-400/20 to-sky-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
              <Star size={14} /> Award-winning learning platform
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Learn anything, faster — with a platform you’ll love
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Bite-sized lessons, hands-on projects, and world-class mentors. Build real skills with courses designed for busy lives.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Rocket size={18} /> Start learning free
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50"
              >
                <PlayCircle size={18} /> Watch how it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=1" alt="" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=2" alt="" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/40?img=3" alt="" />
                </span>
                <span>120k+ learners</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5 shadow-lg bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
              <img
                src="https://images.unsplash.com/photo-1584697964192-0f83f9208f47?q=80&w=2069&auto=format&fit=crop"
                alt="Learning preview"
                className="h-full w-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg ring-1 ring-inset ring-slate-200 hover:bg-white">
                  <PlayCircle size={18} /> Preview a lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
