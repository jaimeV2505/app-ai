"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";
import { dashboardStats } from "@/lib/data/stats";
import { cn } from "@/lib/utils";

export function StatsWidgets() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-panel group p-6 transition-shadow hover:shadow-glow"
          >
            <div className="flex items-start justify-between">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              {stat.trend === "up" && (
                <TrendingUp className="h-4 w-4 text-primary" />
              )}
              {stat.trend === "down" && (
                <TrendingDown className="h-4 w-4 text-aurora-rose" />
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{stat.label}</p>
            <p className="font-display text-3xl tracking-tight">{stat.value}</p>
            <p
              className={cn(
                "mt-2 text-xs",
                stat.trend === "up" ? "text-primary" : "text-muted-foreground"
              )}
            >
              {stat.change}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
