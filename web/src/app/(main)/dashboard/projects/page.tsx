import { CardOverview } from "./_components/card-overview";
import { ProjectCard } from "./_components/kpis/project-card";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 **:data-[slot=card]:shadow-xs">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_1fr]">
        <div className="row-span-3 lg:col-span-1">
          <CardOverview />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <ProjectCard />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <ProjectCard />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <ProjectCard />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <ProjectCard />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <ProjectCard />
        </div>
        <div className="*:data-[slot=card]:gap-2 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
