import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, School } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { fest } from "@/data/fest";

export const Route = createFileRoute("/venue")({
  head: () => ({
    meta: [
      { title: "Venue — Anandathirtha PU College, Pajaka, Udupi" },
      {
        name: "description",
        content:
          "Impressions 2026 is hosted at Anandathirtha Pre-University College, Pajaka, Kunjarugiri, Udupi - 574105. Scan the QR for directions.",
      },
      { property: "og:title", content: "Venue — Impressions 2026" },
      {
        property: "og:description",
        content: "Anandathirtha PU College, Pajaka, Kunjarugiri, Udupi - 574105.",
      },
    ],
  }),
  component: VenuePage,
});

function VenuePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 lg:px-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Getting there</p>
        <h1 className="display mt-3 text-5xl sm:text-7xl">Venue</h1>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
            <School className="h-7 w-7 text-accent" aria-hidden="true" />
            <h2 className="display mt-5 text-3xl">{fest.college}</h2>
            <p className="mt-1 text-sm text-accent">{fest.collegeNote}</p>
            <p className="mt-6 flex gap-3 text-muted-foreground">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {fest.address}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {fest.pillars.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-accent/30 bg-card p-8 text-center">
            <Navigation className="h-6 w-6 text-accent" aria-hidden="true" />
              <a
                href="google.com/maps/place/Anandathirtha+PU+College/@13.2718493,74.7870131,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbca549e003ea63:0x6e588245cd8c351f!8m2!3d13.2718441!4d74.789588!16s%2Fg%2F11hzwh2j5w?authuser=0&entry=tts&g_ep=EgoyMDI2MDgwNS4xIPu8ASoASAFQAw%3D%3D&skid=2496a81f-a1dc-4bb5-9866-e34ccfb15ecc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Anandathirtha PU College location in Google Maps"
              >
              <img
                src="/location-qr.png"
                alt="QR code with directions to Anandathirtha PU College"
                width={224}
                height={224}
                loading="lazy"
                className="mt-6 h-52 w-52 cursor-pointer rounded-xl object-contain transition-transform hover:scale-105"
              />
            </a>
            <p className="mt-5 text-xs uppercase tracking-[0.24em] text-accent">
              Scan for location
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
