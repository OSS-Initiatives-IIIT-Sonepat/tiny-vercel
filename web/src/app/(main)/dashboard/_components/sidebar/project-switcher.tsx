"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PROJECTS = [
  { slug: "project-1", name: "Project 1" },
  { slug: "project-2", name: "Project 2" },
  { slug: "project-3", name: "Project 3" },
];

export function ProjectSwitcher() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/")[3]; // Extract slug from /dashboard/[slug]/...
  const isInProject = PROJECTS.some((p) => p.slug === currentSlug);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 font-semibold text-base hover:opacity-80 transition-opacity">
          All Projects
          <ChevronDown className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {PROJECTS.map((project) => (
          <DropdownMenuItem key={project.slug} asChild>
            <Link href={`/dashboard/${project.slug}/deployments`}>
              {project.name}
              {isInProject && currentSlug === project.slug && " ✓"}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

