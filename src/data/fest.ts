// SOURCE OF TRUTH: Official IMPRESSIONS 2026 pamphlet.
// Anything not printed on the pamphlet is marked NOT_PROVIDED — never invented.

export const NOT_PROVIDED = "[CONTENT NOT PROVIDED]";
export const REGISTRATION_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSflXOKZr2cywcUVIrKza9PpU4WvU2a9NxCepKjk0eVECtPcRg/viewform";

export const fest = {
  name: "IMPRESSIONS",
  year: "2026",
  tagline: "Leave your mark. Inspire the world...",
  kind: "Inter School Competitions",
  date: "August 21, 2026",
  day: "Friday",
  dateISO: "2026-08-21",
  college: "Anandathirtha Pre-University College",
  collegeNote: "A Unit of Anandathirtha Trust (R)",
  address: "Pajaka, Kunjarugiri, Udupi - 574105",
  email: "impressions.atpuc@gmail.com",
  eligibility: "Students of Class IX and X are eligible to participate.",
  prizeHeadline: "Take home amazing cash prizes and attractive trophies",
  pillars: [
    "Quality Education",
    "Value Based",
    "Holistic Development",
    "Discipline & Excellence",
  ],
} as const;

export type Category = "Individual Event" | "Team Event";

export type FestEvent = {
  no: string;
  slug: string;
  name: string;
  subtitle: string;
  category: Category;
  teamSize: string;
  blurb: string;
  icon: "mask" | "rangoli" | "flower" | "ramp" | "ad" | "paint" | "hunt";
};

export const events: FestEvent[] = [
  {
    no: "01",
    slug: "the-mask-and-mirror",
    name: "The Mask & Mirror",
    subtitle: "Turncoat",
    category: "Individual Event",
    teamSize: "1 participant",
    blurb:
      "A solo speaking challenge where you argue a stand — and then flip it on cue.",
    icon: "mask",
  },
  {
    no: "02",
    slug: "rang-e-vigyan",
    name: "Rang-E-Vigyan",
    subtitle: "Rangoli",
    category: "Team Event",
    teamSize: "2 participants",
    blurb: "Colour, symmetry and science come together in a traditional rangoli face-off.",
    icon: "rangoli",
  },
  {
    no: "03",
    slug: "chromoplast-corner",
    name: "Chromoplast Corner",
    subtitle: "Flower Arrangement — Ikebana",
    category: "Team Event",
    teamSize: "2 participants",
    blurb: "Compose living art with blooms, balance and negative space.",
    icon: "flower",
  },
  {
    no: "04",
    slug: "spectrum-walk",
    name: "Spectrum Walk",
    subtitle: "Ramp Walk",
    category: "Team Event",
    teamSize: "2 participants",
    blurb: "Own the ramp with attitude, theme and presence under the lights.",
    icon: "ramp",
  },
  {
    no: "05",
    slug: "big-bang-branding",
    name: "Big Bang Branding",
    subtitle: "Mad Ad",
    category: "Team Event",
    teamSize: "4 participants",
    blurb: "Invent a product, sell the impossible, and make the room laugh.",
    icon: "ad",
  },
  {
    no: "06",
    slug: "prism-clash",
    name: "Prism Clash",
    subtitle: "Painting",
    category: "Individual Event",
    teamSize: "1 participant",
    blurb: "A canvas, a theme, and the clock. Paint your impression.",
    icon: "paint",
  },
  {
    no: "07",
    slug: "the-quantum-quest",
    name: "The Quantum Quest",
    subtitle: "Treasure Hunt",
    category: "Team Event",
    teamSize: "4 members per team",
    blurb: "Clues across the campus. Speed, logic and teamwork decide the winners.",
    icon: "hunt",
  },
];

export type Coordinator = {
  name: string;
  role: string;
  dept: string;
  phone: string;
};

export const coordinators: Coordinator[] = [
  {
    name: "Mr. Keerthan Kumar",
    role: "Coordinator, Impressions-2026",
    dept: "Dept. of Physics",
    phone: "+91 9986560205",
  },
  {
    name: "Ms. Deeksha K",
    role: "Coordinator, Impressions-2026",
    dept: "Dept. of Chemistry",
    phone: "+91 8277240329",
  },
  {
    name: "Mrs. Chethana Shenoy",
    role: "Coordinator, Impressions-2026",
    dept: "Dept. of Biology",
    phone: "+91 9482661676",
  },
];

export const eventBySlug = (slug: string) => events.find((e) => e.slug === slug);
