import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Users, User } from "lucide-react";
import type { FestEvent } from "@/data/fest";
import { fest } from "@/data/fest";
import { EventIcon } from "./EventIcon";

export function EventCard({ event, index = 0 }: { event: FestEvent; index?: number }) {
  const isTeam = event.category === "Team Event";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-lift)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0"
      />
      <div className="flex items-start justify-between gap-4">
        <span className="display text-4xl text-accent/70">{event.no}</span>
        <EventIcon name={event.icon} className="h-10 w-10 text-primary" />
      </div>

      <h3 className="display mt-5 text-2xl leading-tight">
        <Link
          to="/events/$slug"
          params={{ slug: event.slug }}
          className="after:absolute after:inset-0 after:content-['']"
        >
          {event.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {event.subtitle}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{event.blurb}</p>

      <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
        <li className="flex items-center gap-2">
          {isTeam ? (
            <Users className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          ) : (
            <User className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          )}
          {event.category} · {event.teamSize}
        </li>
        <li className="flex items-center gap-2">
          <CalendarDays className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          {fest.date} · {fest.day}
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
          {fest.college}, {fest.address}
        </li>
      </ul>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Cash prize + trophy
        </span>
        <span className="relative z-10 inline-flex items-center gap-1 text-sm font-bold text-foreground">
          Details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
      <span className="sr-only">Event {index + 1}</span>
    </article>
  );
}
