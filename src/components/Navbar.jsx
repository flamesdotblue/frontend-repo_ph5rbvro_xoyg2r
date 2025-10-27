import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <BookOpen size={20} />
            </span>
            <span className="text-lg tracking-tight">EduSpark</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#courses" className="hover:text-slate-900 transition-colors">Courses</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-600 hover:text-slate-900 text-sm">Sign in</a>
            <a
              href="#get-started"
              className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Get Started
            </a>
          </div>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3 text-sm text-slate-700">
              <a href="#features" className="py-2">Features</a>
              <a href="#courses" className="py-2">Courses</a>
              <a href="#pricing" className="py-2">Pricing</a>
              <a href="#faq" className="py-2">FAQ</a>
              <a href="#" className="py-2">Sign in</a>
              <a href="#get-started" className="py-2 font-medium text-white bg-slate-900 rounded-md text-center">Get Started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
