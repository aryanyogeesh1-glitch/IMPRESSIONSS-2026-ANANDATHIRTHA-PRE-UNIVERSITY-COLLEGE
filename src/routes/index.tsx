import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Trophy, Users, GraduationCap } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { EventCard } from "@/components/EventCard";
import { fest, events, coordinators } from "@/data/fest";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Impressions 2026 — Inter School Fest | Anandathirtha PU College" },
      {
        name: "description",
        content:
          "Impressions 2026: inter school competitions at Anandathirtha PU College, Udupi on August 21, 2026. Seven events, cash prizes and trophies for Class IX and X.",
      },
      { property: "og:title", content: "Impressions 2026 — Leave your mark" },
      {
        property: "og:description",
        content:
          "Seven cinematic competitions, one day. August 21, 2026 at Anandathirtha PU College, Pajaka, Udupi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <div className="marquee border-y border-border bg-card/50 py-3">
        <div className="marquee-track display text-2xl text-accent/70">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="px-6">
              {fest.tagline} · {fest.date} · {fest.kind} ·
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">The Fest</p>
          <h2 className="display mt-3 max-w-3xl text-4xl sm:text-6xl">
            One day. Seven arenas. Endless impressions.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            {fest.college} ({fest.collegeNote}) presents {fest.name} {fest.year} —{" "}
            {fest.kind.toLowerCase()} built for creativity, courage and collaboration.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, label: "Events", value: String(events.length) },
            { icon: GraduationCap, label: "Eligibility", value: "Class IX & X" },
            { icon: Trophy, label: "Rewards", value: "Cash + Trophies" },
            { icon: Users, label: "Coordinators", value: String(coordinators.length) },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
                <s.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <p className="display mt-4 text-3xl">{s.value}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Line-up</p>
              <h2 className="display mt-3 text-4xl sm:text-5xl">The Events</h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-foreground"
            >
              View all details <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.slice(0, 6).map((event, i) => (
              <Reveal key={event.slug} delay={(i % 3) * 90}>
                <EventCard event={event} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Registration</p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">{fest.prizeHeadline}</h2>
            <p className="mt-5 max-w-xl text-muted-foreground">{fest.eligibility}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Register Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent/60 px-7 font-bold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                See the schedule
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto w-fit rounded-3xl border border-accent/30 bg-card p-6 text-center">
              <img
                src="/registration-qr.jpg"
                alt="QR code to register for Impressions 2026"
                width={240}
                height={240}
                loading="lazy"
                className="h-56 w-56 rounded-xl object-contain"
              />
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-accent">
                Scan to register
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
