export type Destination = {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  image: string;
  priceFrom: number;
  currency: string;
  rating: number;
  reviews: number;
  duration: string;
  tags: string[];
  trending?: boolean;
  highlight?: string;
};

export const destinations: Destination[] = [
  {
    id: "lofoten",
    name: "Lofoten Archipelago",
    country: "Norway",
    region: "Arctic Circle",
    description:
      "Private yacht charters between fishing villages, midnight sun dining, and heli-accessed peaks above the Norwegian Sea.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
    priceFrom: 12400,
    currency: "EUR",
    rating: 4.97,
    reviews: 284,
    duration: "7–12 nights",
    tags: ["Heli-safari", "Nordic cuisine", "Yacht"],
    trending: true,
    highlight: "Most requested · Summer 2026",
  },
  {
    id: "reykjavik",
    name: "Reykjavík & Golden Circle",
    country: "Iceland",
    region: "North Atlantic",
    description:
      "Geothermal lagoon suites, superjeep glacier corridors, and chef-led foraging on the Snæfellsnes peninsula.",
    image:
      "https://images.unsplash.com/photo-1529963182354-09d5044a856e?w=1200&q=80",
    priceFrom: 8900,
    currency: "EUR",
    rating: 4.94,
    reviews: 412,
    duration: "5–9 nights",
    tags: ["Blue Lagoon", "Glacier", "Foraging"],
    trending: true,
  },
  {
    id: "tromso",
    name: "Tromsø Aurora Reserve",
    country: "Norway",
    region: "Troms og Finnmark",
    description:
      "Glass igloo observatories, Sami-led reindeer migrations, and suborbital-ready aurora forecasting with on-call astrophysicists.",
    image:
      "https://images.unsplash.com/photo-1531366934457-7c912a2f93a4?w=1200&q=80",
    priceFrom: 11200,
    currency: "EUR",
    rating: 4.98,
    reviews: 198,
    duration: "4–8 nights",
    tags: ["Aurora", "Indigenous", "Observatory"],
    trending: true,
    highlight: "98% aurora visibility index",
  },
  {
    id: "stockholm",
    name: "Stockholm Archipelago",
    country: "Sweden",
    region: "Baltic Sea",
    description:
      "Design-forward archipelago villas, RIB transfers to Michelin pop-ups, and silent electric skiff island hopping.",
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=1200&q=80",
    priceFrom: 7600,
    currency: "EUR",
    rating: 4.92,
    reviews: 356,
    duration: "3–6 nights",
    tags: ["Design", "RIB", "Island hop"],
  },
  {
    id: "lapland",
    name: "Finnish Lapland",
    country: "Finland",
    region: "Arctic Wilderness",
    description:
      "Snowmobile-to-sauna circuits, Arctic treehouse suites, and husky-led expeditions across Oulanka National Park.",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&q=80",
    priceFrom: 9800,
    currency: "EUR",
    rating: 4.96,
    reviews: 267,
    duration: "5–10 nights",
    tags: ["Sauna", "Husky", "Wilderness"],
  },
  {
    id: "faroe",
    name: "Faroe Islands",
    country: "Denmark",
    region: "North Atlantic",
    description:
      "Cliff-edge grass-roof lodges, puffin colony flyovers, and Atlantic storm-watching from geothermal cliff spas.",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bcca758?w=1200&q=80",
    priceFrom: 10200,
    currency: "EUR",
    rating: 4.95,
    reviews: 143,
    duration: "4–7 nights",
    tags: ["Cliff spa", "Puffin", "Remote"],
    highlight: "Limited inventory · 12 suites",
  },
];

export const trendingDestinations = destinations.filter((d) => d.trending);
