import { Pencil, XCircle } from 'lucide-react';

function Item({ label, value, subtle }) {
  return (
    <div className="space-y-1 min-w-0">
      <div className="text-[11px] uppercase tracking-wide text-slate-400 font-medium">{label}</div>
      <div className={`truncate ${subtle ? 'text-slate-500' : 'text-slate-800 font-semibold'}`}>{value}</div>
    </div>
  );
}

export default function QuoteSummary({ summary }) {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white border border-slate-100 shadow-[8px_8px_24px_rgba(16,24,40,0.04),-6px_-6px_20px_rgba(255,255,255,0.6)]">
          <div className="p-5 sm:p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <Item label="Quote Nickname" value={summary.nickname} />
                <Item label="Quote ID" value={summary.id} subtle />
                <Item label="Valid Until" value={summary.validUntil} />
                <Item label="Status" value={
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${summary.status === 'Active' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : summary.status === 'Pending' ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' : 'bg-rose-50 text-rose-700 ring-1 ring-rose-200'}`}>{summary.status}</span>
                } />
                <Item label="Created By" value={summary.createdBy} subtle />
                <Item label="Total Locations" value={`${summary.totalLocations}`} subtle />
                <Item label="Overall MRC" value={`₹${summary.totals.mrc.toLocaleString(undefined, {minimumFractionDigits: 2})}`} />
                <Item label="Overall NRC" value={`₹${summary.totals.nrc.toLocaleString(undefined, {minimumFractionDigits: 2})}`} />
              </div>

              <div className="shrink-0 flex gap-2">
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:shadow transition">
                  <Pencil size={16} /> Modify
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 shadow-sm hover:shadow transition">
                  <XCircle size={16} /> Reject
                </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-3 rounded-b-2xl bg-gradient-to-r from-[#38B6FF] via-[#38B6FF]/30 to-[#FEF858]" />
        </div>
      </div>
    </section>
  );
}
