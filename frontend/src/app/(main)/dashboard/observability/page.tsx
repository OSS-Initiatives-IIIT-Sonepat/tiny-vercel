import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CashFlowOverview } from "../default/_components/cash-flow-overview";
import { IncomeReliability } from "../default/_components/income-reliability";
import { SpendingBreakdown } from "../default/_components/spending-breakdown";

export default function Page() {
  return (
    <div>
      <Tabs className="gap-4" defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger disabled value="activity">
            Activity
          </TabsTrigger>
          <TabsTrigger disabled value="insights">
            Insights
          </TabsTrigger>
          <TabsTrigger disabled value="utilities">
            Utilities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="flex flex-col gap-4 **:data-[slot=card]:shadow-xs">
            <div className="flex flex-col gap-4">
              <CashFlowOverview />

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <SpendingBreakdown />
                <IncomeReliability />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
