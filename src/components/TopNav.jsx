import { Bell, Settings, User, ChevronLeft } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-9 w-9 rounded-xl bg-[#38B6FF] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.06),inset_-2px_-2px_6px_rgba(255,255,255,0.8)] flex items-center justify-center text-white font-bold select-none">
            C
          </div>
          <div className="flex items-baseline gap-3 min-w-0">
            <span className="text-slate-800 font-semibold tracking-tight truncate">Choozy</span>
            <span className="text-slate-300">/</span>
            <h1 className="text-slate-700 font-semibold truncate">Quote Generator</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Back" className="hidden sm:inline-flex p-2 rounded-xl hover:bg-slate-50 text-slate-600">
            <ChevronLeft size={18} />
          </button>
          <button aria-label="Notifications" className="p-2 rounded-xl hover:bg-slate-50 text-slate-600">
            <Bell size={18} />
          </button>
          <button aria-label="Settings" className="p-2 rounded-xl hover:bg-slate-50 text-slate-600">
            <Settings size={18} />
          </button>
          <button aria-label="Profile" className="ml-1 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm hover:shadow transition text-slate-700">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FEF858] text-slate-800 text-xs font-semibold">JP</span>
            <User size={16} className="text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
