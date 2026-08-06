import { CardOverview } from "./_components/card-overview";
import { MonthlyCashFlow } from "./_components/kpis/monthly-cash-flow";
import { NetWorth } from "./_components/kpis/net-worth";
import { PrimaryAccount } from "./_components/kpis/primary-account";
import { SavingsRate } from "./_components/kpis/savings-rate";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 **:data-[slot=card]:shadow-xs">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_1fr]">
        <div className="row-span-3 lg:col-span-1">
          <CardOverview />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <PrimaryAccount />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <NetWorth />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <MonthlyCashFlow />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <SavingsRate />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <PrimaryAccount />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <NetWorth />
        </div>
      </div>
    </div>
  );
}
