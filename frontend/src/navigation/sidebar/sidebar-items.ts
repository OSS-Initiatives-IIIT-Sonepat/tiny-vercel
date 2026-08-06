import {
  Banknote,
  ChartBar,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  ListTodo,
  type LucideIcon,
  ShoppingBag,
  Forklift,
} from "lucide-react";

export type NavBadge = "new" | "soon";

export interface NavSubItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

interface NavItemBase {
  id: string;
  title: string;
  icon?: LucideIcon;
  badge?: NavBadge;
  disabled?: boolean;
  newTab?: boolean;
}

export interface NavMainLinkItem extends NavItemBase {
  url: string;
  subItems?: never;
}

export interface NavMainParentItem extends NavItemBase {
  subItems: NavSubItem[];
}

export type NavMainItem = NavMainLinkItem | NavMainParentItem;

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        id: "projects",
        title: "Projects",
        url: "/dashboard/finance-v1",
        icon: LayoutDashboard,
      },
      {
        id: "logs",
        title: "Logs",
        url: "/dashboard/logs",
        icon: ChartBar,
      },
      {
        id: "observability",
        title: "Observability",
        url: "/dashboard/observability",
        icon: Banknote,
      },
      {
        id: "analytics",
        title: "Analytics",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        id: "environment-variables",
        title: "Environment Variables",
        url: "/dashboard/environment-variables",
        icon: ListTodo,
      },
      {
        id: "domains",
        title: "Domains",
        url: "/dashboard/domains",
        icon: ShoppingBag,
      },
      {
        id: "usage",
        title: "Usage",
        url: "/dashboard/usage",
        icon: GraduationCap,
      },
      {
        id: "storage",
        title: "Storage",
        url: "/dashboard/storage",
        icon: Forklift,
      },
    ],
  },
];
