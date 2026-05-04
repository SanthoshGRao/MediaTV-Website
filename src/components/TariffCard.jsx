import ProgramIcon from './ProgramIcon';

/**
 * Rate card — professional layout with muted warm gold accents
 * (borders, rail, typography) — not high-saturation marketing gold.
 */
export default function TariffCard({ tariff, onPlanSelect }) {
  return (
    <article
      className="tariff-wheel-card group/card relative flex h-full min-h-0 flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0c0c0e] text-left shadow-[0_24px_54px_-12px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(245,166,35,0.05)] transition-all duration-500"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-400/[0.04] via-transparent to-[#050505]" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-400/[0.12] blur-[50px] transition-all duration-700 group-hover/card:bg-brand-400/[0.18] group-hover/card:blur-[60px]" />

      {/* Top light beam */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-60 transition-opacity duration-500 group-hover/card:opacity-100"
      />

      <div className="relative flex min-h-0 flex-1 flex-col p-5">
        {/* Header Block */}
        <header className="mb-4 pb-4 relative">
          {/* subtle divider */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-brand-400/0 via-brand-400/20 to-brand-400/0" />
          
          <div className="flex items-start gap-4">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-400/10 to-brand-600/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover/card:border-brand-400/30 transition-colors duration-500">
              <div className="absolute inset-0 rounded-2xl bg-brand-400/20 blur-md opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
              <ProgramIcon name={tariff.icon} size={24} className="text-brand-300 relative z-10" />
            </div>
            
            <div className="min-w-0 flex-1 pt-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-heading text-lg font-bold tracking-tight text-white group-hover/card:text-brand-50 transition-colors">
                  {tariff.type}
                </h3>
                {tariff.popular && (
                  <span className="rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-dark-800 shadow-[0_0_12px_rgba(245,166,35,0.4)]">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-400/70">
                {tariff.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-white/50 line-clamp-2">
            {tariff.description}
          </p>
        </header>

        {/* Pricing Content */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="mb-3 flex items-baseline justify-between gap-2">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_8px_rgba(245,166,35,0.8)]" aria-hidden />
              Standard Slots
            </span>
          </div>

          {/* Table Container */}
          <div className="relative overflow-hidden rounded-xl border border-brand-400/10 bg-[#111113]/50 backdrop-blur-sm">
            <table className="w-full text-left text-[13px]">
              <tbody className="divide-y divide-white/[0.04]">
                {tariff.plans.map((plan) => (
                  <tr
                    key={plan.duration}
                    onClick={(e) => {
                      if (onPlanSelect) {
                        e.stopPropagation();
                        onPlanSelect(tariff, plan);
                      }
                    }}
                    className="group/row relative text-white/70 transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-400/[0.08] hover:to-transparent cursor-pointer"
                  >
                    {/* Hover highlight bar */}
                    <td className="absolute inset-y-0 left-0 w-[2px] bg-brand-400 opacity-0 transition-opacity duration-300 group-hover/row:opacity-100" />
                    
                    <td className="px-3.5 py-2.5 align-middle font-medium transition-colors group-hover/row:text-white">
                      {plan.duration}
                    </td>
                    <td className="px-3.5 py-2.5 text-right align-middle font-heading text-[14px] font-bold tabular-nums tracking-tight text-brand-300 transition-colors group-hover/row:text-brand-200">
                      ₹{plan.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Annual Block - Highly Emphasized */}
          <div
            onClick={(e) => {
               if (onPlanSelect) {
                 e.stopPropagation();
                 onPlanSelect(tariff, { duration: '1 Year', price: tariff.yearlyPrice });
               }
            }}
            className="group/annual relative mt-3 overflow-hidden rounded-xl border border-brand-400/20 bg-gradient-to-br from-brand-400/[0.08] via-[#1a150e] to-transparent p-3.5 transition-all duration-300 hover:border-brand-400/40 hover:from-brand-400/[0.12] cursor-pointer shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_24px_-4px_rgba(245,166,35,0.15)]"
          >
            {/* Animated background glow */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-400/20 blur-2xl transition-transform duration-700 group-hover/annual:scale-150" />
            
            <div className="relative flex items-end justify-between gap-3">
              <div>
                <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-400">
                  Annual Package
                </p>
                <p className="mt-1 text-xs text-white/50 font-medium">12-month commitment</p>
              </div>
              <p className="font-heading text-lg font-bold tabular-nums tracking-tight text-brand-200 drop-shadow-[0_2px_10px_rgba(245,166,35,0.3)]">
                ₹{tariff.yearlyPrice}
              </p>
            </div>
            <div className="relative mt-3 pt-3">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-brand-400/20 to-transparent" />
              <p className="flex items-center gap-2 text-[11px] font-medium text-green-400/90">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]"><path d="M20 6 9 17l-5-5"/></svg>
                {tariff.yearlyBonus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
