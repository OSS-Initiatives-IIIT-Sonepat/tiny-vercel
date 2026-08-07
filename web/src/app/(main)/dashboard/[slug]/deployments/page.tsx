import { RecentCustomersTable } from "../../deployments/_components/recent-customers-table/table";
import customersData from "../../deployments/_components/data.json";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">Deployments - {params.slug}</h1>
        <p className="text-muted-foreground">Customer records for this project with plan, billing, status, and signup activity.</p>
      </div>
      <RecentCustomersTable data={customersData} />
    </div>
  );
}
