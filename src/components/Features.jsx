import { Clock, Users, Trophy, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Micro‑lessons',
    desc: 'Structured, bite-sized modules that fit any schedule, with checkpoints that reinforce retention.',
    icon: Clock,
  },
  {
    title: 'Mentor support',
    desc: 'Get real feedback from experienced instructors and a community that keeps you accountable.',
    icon: Users,
  },
  {
    title: 'Career outcomes',
    desc: 'Projects and portfolios that impress recruiters, plus certificates you can share anywhere.',
    icon: Trophy,
  },
  {
    title: 'Trusted & secure',
    desc: 'Your progress syncs across devices with privacy-first design and enterprise-grade security.',
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            <Sparkles size={14} /> Why learners choose EduSpark
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Designed to make learning stick
          </h2>
          <p className="mt-4 text-slate-600">
            A focused experience that blends engaging content with interactive practice and human support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
