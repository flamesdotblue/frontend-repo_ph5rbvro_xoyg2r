import { MapPin, Wifi, Network, Server, Wrench, ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import { useState } from 'react';

function ServiceRow({ icon: Icon, title, detail }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <div className="mt-0.5 h-8 w-8 shrink-0 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center shadow-inner">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-800">{title}</div>
        <div className="text-xs text-slate-500">{detail}</div>
      </div>
    </div>
  );
}

function LocationCard({ location }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-[8px_8px_24px_rgba(16,24,40,0.04),-6px_-6px_20px_rgba(255,255,255,0.6)] overflow-hidden">
      <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <MapPin size={16} className="text-[#38B6FF]" />
            <span className="truncate">Service Location - {location.index} ({location.name})</span>
          </div>
          <div className="mt-1 text-sm text-slate-500 truncate">{location.address}</div>
        </div>
        <div className="text-right">
          <div className="inline-flex flex-col items-end rounded-2xl bg-slate-50/70 backdrop-blur px-4 py-3 border border-slate-100 shadow-inner">
            <div className="text-[11px] uppercase tracking-wide text-slate-400">MRC</div>
            <div className="text-slate-900 font-semibold">₹{location.mrc.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
            <div className="text-[11px] uppercase tracking-wide text-slate-400 mt-2">NRC</div>
            <div className="text-slate-900 font-semibold">₹{location.nrc.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
        {location.services && location.services.length > 0 ? (
          <div className="rounded-2xl border border-slate-100 bg-white shadow-[0_4px_16px_rgba(16,24,40,0.05)] p-4 sm:p-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {location.services.map((s) => (
                  <ServiceRow key={s.title} icon={s.icon} title={s.title} detail={s.detail} />
                ))}
              </div>
              <div className="lg:col-span-1 flex items-center justify-end">
                <div className="w-full lg:w-auto inline-flex flex-col items-end rounded-2xl bg-[#38B6FF]/5 px-5 py-4 border border-[#38B6FF]/20">
                  <div className="text-[11px] uppercase tracking-wide text-slate-400">Monthly (MRC)</div>
                  <div className="text-xl font-semibold text-slate-900">₹{location.mrc.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                  <div className="mt-3 text-[11px] uppercase tracking-wide text-slate-400">One-time (NRC)</div>
                  <div className="text-xl font-semibold text-slate-900">₹{location.nrc.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
                </div>
              </div>
            </div>

            <button onClick={() => setOpen(!open)} className="mt-4 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-800">
              {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              <span>Terms & Conditions</span>
            </button>
            {open && (
              <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-sm text-slate-600">
                Service availability contingent on site survey. Pricing valid for 30 days from issue date. Standard SLA applies. Early termination fees may apply. Taxes extra as applicable.
              </div>
            )}
          </div>
        ) : (
          <div className="text-sm text-slate-500 p-4">No services added yet.</div>
        )}
      </div>
    </div>
  );
}

export default function LocationsSection({ locations, showAggregate }) {
  const totalMrc = locations.reduce((a, b) => a + b.mrc, 0);
  const totalNrc = locations.reduce((a, b) => a + b.nrc, 0);

  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showAggregate && (
          <div className="mb-6 rounded-2xl bg-white border border-slate-100 p-5 sm:p-6 shadow-[8px_8px_24px_rgba(16,24,40,0.04),-6px_-6px_20px_rgba(255,255,255,0.6)] flex items-center justify-between">
            <div className="flex items-center gap-3 text-slate-700 font-semibold">
              <Building2 size={18} className="text-[#38B6FF]" />
              <span>{locations.length} Service Locations</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-slate-600"><span className="text-[11px] uppercase tracking-wide text-slate-400 mr-2">MRC</span><span className="font-semibold text-slate-900">₹{totalMrc.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
              <div className="text-slate-600"><span className="text-[11px] uppercase tracking-wide text-slate-400 mr-2">NRC</span><span className="font-semibold text-slate-900">₹{totalNrc.toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Icon mapping helpers for demo usage
export const demoIcons = {
  wifi: Wifi,
  network: Network,
  server: Server,
  wrench: Wrench,
};
