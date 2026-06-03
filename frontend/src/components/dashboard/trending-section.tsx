"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DestinationCard } from "@/components/destinations/destination-card";
import { Button } from "@/components/ui/button";
import { trendingDestinations } from "@/lib/data/destinations";

type Props = {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
};

export function TrendingSection({
  title = "Trending corridors",
  subtitle = "Real-time demand across our Nordic intelligence graph",
  showViewAll = true,
}: Props) {
  return (
    <section className="mt-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-3xl md:text-4xl"
          >
            {title}
          </motion.h2>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        </div>
        {showViewAll && (
          <Button variant="ghost" asChild>
            <Link href="/destinations">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>

      <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
        {trendingDestinations.map((dest, i) => (
          <DestinationCard key={dest.id} destination={dest} index={i} compact />
        ))}
      </div>
    </section>
  );
}
