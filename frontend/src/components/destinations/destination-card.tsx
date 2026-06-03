"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import type { Destination } from "@/lib/data/destinations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  destination: Destination;
  index?: number;
  compact?: boolean;
};

export function DestinationCard({ destination, index = 0, compact }: Props) {
  const [saved, setSaved] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10",
        compact ? "min-w-[280px] max-w-[320px] shrink-0" : "w-full"
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {destination.trending && (
            <Badge variant="trending">Trending</Badge>
          )}
          {destination.highlight && (
            <Badge variant="luxury" className="max-w-[200px] truncate">
              {destination.highlight}
            </Badge>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-full bg-black/30 backdrop-blur-md"
          onClick={() => setSaved(!saved)}
          aria-label={saved ? "Remove from wishlist" : "Save destination"}
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              saved ? "fill-aurora-rose text-aurora-rose" : "text-white"
            )}
          />
        </Button>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {destination.region} · {destination.country}
          </p>
          <h3 className="font-display text-2xl text-white">{destination.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/70">
            {destination.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{destination.rating}</span>
              <span className="text-muted-foreground">
                ({destination.reviews})
              </span>
            </div>
            <p className="font-display text-lg">
              from{" "}
              <span className="text-primary">
                {destination.currency === "EUR" ? "€" : destination.currency}
                {destination.priceFrom.toLocaleString()}
              </span>
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {destination.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.div
            initial={false}
            animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
            className="overflow-hidden"
          >
            <Button variant="premium" className="mt-4 w-full" size="sm">
              Request private itinerary
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
