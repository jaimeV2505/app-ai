"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Corridor intelligence",
    description:
      "Proprietary graph of 38 Nordic routes — weather, aurora, marine, and cultural layers fused in real time.",
  },
  {
    icon: Zap,
    title: "Sub-90s itineraries",
    description:
      "From prompt to bookable draft with live inventory signals from partner lodges, yachts, and heli operators.",
  },
  {
    icon: Shield,
    title: "Explorer Black",
    description:
      "Human concierges in Oslo, Reykjavík, and Stockholm validate every AI-generated journey before confirmation.",
  },
];

export function IntelligenceSection() {
  return (
    <section id="intelligence" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          Spatial intelligence
        </p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          Built for the post-screen era
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Inspired by visionOS spatial interfaces — depth, glass, and calm motion
          at every touchpoint.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
