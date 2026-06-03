"use client";

import { motion } from "framer-motion";
import { DestinationCard } from "@/components/destinations/destination-card";
import { destinations } from "@/lib/data/destinations";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

export default function DestinationsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return destinations;
    return destinations.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-display text-4xl md:text-5xl">Destinations</h1>
        <p className="mt-2 text-muted-foreground">
          Interactive corridor catalog · {destinations.length} private journeys
        </p>
        <Input
          className="mt-6 max-w-md"
          placeholder="Search Norway, aurora, yacht…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((d, i) => (
          <DestinationCard key={d.id} destination={d} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">
          No corridors match your search. Try &quot;aurora&quot; or &quot;Lofoten&quot;.
        </p>
      )}
    </div>
  );
}
