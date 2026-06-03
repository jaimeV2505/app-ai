"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-4 pb-20 pt-28 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <Badge variant="luxury" className="mb-6 px-4 py-1.5">
          Series B · Arctic Intelligence Platform
        </Badge>

        <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient-premium">Nordic Explorer</span>
          <br />
          <span className="text-gradient-aurora">AI</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          The world&apos;s first spatial travel intelligence layer for the
          Nordic corridor — curated by machine, perfected by human concierges.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="premium" size="lg" asChild>
            <Link href="/dashboard">
              Enter the platform
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/planner">
              <Play className="h-4 w-4 fill-current" />
              Plan with AI
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-16 max-w-5xl"
      >
        <div className="glass-panel-strong overflow-hidden rounded-5xl p-2 shadow-glow-violet">
          <div className="relative aspect-[21/9] overflow-hidden rounded-4xl">
            <Image
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&q=85"
              alt="Lofoten archipelago at golden hour — Nordic Explorer AI"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 md:bottom-10 md:left-10 md:right-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="glass-panel rounded-2xl px-5 py-4 text-left">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Live availability
                </p>
                <p className="font-display text-2xl md:text-3xl">
                  Lofoten · July 2026
                </p>
                <p className="text-sm text-primary">3 suites remaining</p>
              </div>
              <div className="glass-panel animate-float-slow rounded-full px-6 py-3">
                <span className="text-sm text-muted-foreground">Aurora index</span>
                <span className="ml-3 font-display text-xl text-aurora-cyan">
                  94%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
