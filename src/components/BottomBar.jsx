export default function BottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-2xl bg-white border border-slate-100 shadow-[0_-8px_24px_rgba(16,24,40,0.06)] px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="hidden sm:block text-sm text-slate-600">Review details or proceed to place your order.</div>
          <div className="ml-auto flex items-center gap-3">
            <button className="h-11 rounded-xl border-2 border-[#38B6FF] px-5 text-sm font-semibold text-[#0B79B7] bg-white hover:bg-[#38B6FF]/5 transition">View Quote</button>
            <button className="h-11 rounded-xl bg-[#38B6FF] px-5 text-sm font-semibold text-white shadow hover:brightness-95 transition">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
