import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { fest } from "@/data/fest";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-veil)" }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/impressions-logo.png"
            alt="Impressions 2026 official logo"
            width={64}
            height={64}
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-accent/50 animate-float"
          />
          <p className="min-w-0 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            {fest.kind}
          </p>
        </div>

        <h1 className="display mt-6 text-[clamp(3.2rem,14vw,11rem)]">
          <span className="block text-gradient">Impressions</span>
          <span className="block text-[0.3em] tracking-[0.4em] text-foreground/80">
            {fest.year}
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-foreground/85 sm:text-lg">{fest.tagline}</p>

        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <div className="flex min-w-0 items-center gap-2">
            <CalendarDays className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Date</dt>
            <dd className="font-semibold">
              {fest.date} · {fest.day}
            </dd>
          </div>
          <div className="flex min-w-0 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <dt className="sr-only">Venue</dt>
            <dd className="min-w-0 font-semibold">
              {fest.college}, {fest.address}
            </dd>
          </div>
        </dl>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSflXOKZr2cywcUVIrKza9PpU4WvU2a9NxCepKjk0eVECtPcRg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-bold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
        >
          Register Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
          <Link
            to="/events"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-accent/60 px-7 font-bold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Explore Events
          </Link>
        </div>

        <p className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <ChevronDown className="h-4 w-4 animate-bounce text-accent" aria-hidden="true" />
          Scroll to discover
        </p>
      </div>
    </section>
  );
}
