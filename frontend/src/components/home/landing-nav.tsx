"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingNav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Compass className="h-5 w-5 text-primary" />
          <span className="font-display text-lg">Nordic Explorer</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link href="#destinations" className="hover:text-foreground">
            Destinations
          </Link>
          <Link href="#intelligence" className="hover:text-foreground">
            Intelligence
          </Link>
          <Link href="/planner" className="hover:text-foreground">
            AI Planner
          </Link>
        </nav>
        <Button variant="premium" size="sm" asChild>
          <Link href="/dashboard">Member access</Link>
        </Button>
      </div>
    </motion.header>
  );
}
