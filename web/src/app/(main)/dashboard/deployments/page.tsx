import { RecentCustomersTable } from "./_components/recent-customers-table/table";
import customersData from "./_components/data.json";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">18,426 Customers</h1>
        <p className="text-muted-foreground">Recent customer records with plan, billing, status, and signup activity.</p>
      </div>
      <RecentCustomersTable data={customersData} />
    </div>
  );
}
