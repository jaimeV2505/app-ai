import { AmbientBackground } from "@/components/layout/ambient-background";
import { HeroSection } from "@/components/home/hero-section";
import { IntelligenceSection } from "@/components/home/intelligence-section";
import { LandingNav } from "@/components/home/landing-nav";
import { TrendingSection } from "@/components/dashboard/trending-section";
import { DestinationCard } from "@/components/destinations/destination-card";
import { destinations } from "@/lib/data/destinations";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <LandingNav />
      <HeroSection />

      <section id="destinations" className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <TrendingSection
          title="Corridor highlights"
          subtitle="Hand-selected by our Oslo intelligence team · Updated hourly"
          showViewAll
        />
      </section>

      <IntelligenceSection />

      <section className="mx-auto max-w-6xl px-4 pb-32 md:px-8">
        <h2 className="mb-8 text-center font-display text-3xl">
          The full Nordic collection
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <DestinationCard key={d.id} destination={d} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
