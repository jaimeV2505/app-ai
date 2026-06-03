"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { StatsWidgets } from "@/components/dashboard/stats-widgets";
import { TrendingSection } from "@/components/dashboard/trending-section";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Member dashboard
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl text-gradient-premium">
          Good evening, Explorer
        </h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Your Nordic intelligence graph is synchronized. Three trending
          corridors match your saved preferences.
        </p>
      </motion.div>

      <StatsWidgets />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel-strong relative overflow-hidden rounded-4xl p-8 lg:col-span-2"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <Sparkles className="h-8 w-8 text-primary" />
          <h2 className="mt-4 font-display text-2xl">Continue planning</h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Your Tromsø aurora draft is 78% complete. Add travel party details
            to unlock heli-transfer options.
          </p>
          <Button variant="premium" className="mt-6" asChild>
            <Link href="/planner">
              Open AI Planner
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-panel rounded-4xl p-8"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Explorer Black status
          </p>
          <p className="mt-2 font-display text-4xl text-primary">Active</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Priority inventory · 24/7 concierge · Complimentary rebooking
          </p>
        </motion.div>
      </div>

      <TrendingSection />
    </div>
  );
}
