"use client";

import { Clock, Package } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-content-center rounded-sm bg-muted">
              <Package className="size-5" />
            </span>
            Project
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="font-medium text-sm truncate">https://tiny-vercel.vercel.app</p>
        </div>

        <div>
          <p className="font-medium text-xs line-clamp-2 text-muted-foreground">feat: add project switcher</p>
          <div className="flex items-center gap-1 text-muted-foreground text-xs mt-2">
            <span className="truncate">Shubham/tiny-vercel</span>
            <span className="flex-shrink-0">·</span>
            <Clock className="size-3 flex-shrink-0" />
            <span className="flex-shrink-0">2h ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
