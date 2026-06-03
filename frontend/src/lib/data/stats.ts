import {
  Compass,
  Globe2,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export type StatWidget = {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
};

export const dashboardStats: StatWidget[] = [
  {
    id: "journeys",
    label: "Curated journeys",
    value: "2,847",
    change: "+18.4% vs last quarter",
    trend: "up",
    icon: Compass,
  },
  {
    id: "members",
    label: "Private members",
    value: "12.4K",
    change: "+412 this month",
    trend: "up",
    icon: Users,
  },
  {
    id: "destinations",
    label: "Nordic corridors",
    value: "38",
    change: "6 new for 2026",
    trend: "neutral",
    icon: Globe2,
  },
  {
    id: "satisfaction",
    label: "AI match satisfaction",
    value: "97.2%",
    change: "+2.1 pts after planner v3",
    trend: "up",
    icon: Sparkles,
  },
];
