import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { EventIcon } from "@/components/EventIcon";
import { Reveal } from "@/components/Reveal";
import { coordinators, eventBySlug, fest } from "@/data/fest";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = eventBySlug(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Event not found — Impressions 2026" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    const title = `${event.name} (${event.subtitle}) — Impressions 2026`;
    return {
      meta: [
        { title },
        { name: "description", content: `${event.blurb} ${event.category}, ${event.teamSize}.` },
        { property: "og:title", content: title },
        { property: "og:description", content: event.blurb },
      ],
    };
  },
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-5xl px-5 pb-24 pt-32 lg:px-8">
      <Link
        to="/events"
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All events
      </Link>

      <Reveal className="mt-8">
        <div className="flex items-start gap-5">
          <EventIcon name={event.icon} className="h-14 w-14 shrink-0 text-primary" />
          <div className="min-w-0">
            <p className="display text-3xl text-accent/70">{event.no}</p>
            <h1 className="display text-5xl leading-none sm:text-7xl">{event.name}</h1>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              {event.subtitle}
            </p>
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{event.blurb}</p>
      </Reveal>

      <dl className="mt-12 grid gap-5 sm:grid-cols-2">
        {[
          { icon: Users, label: "Format", value: `${event.category} · ${event.teamSize}` },
          { icon: CalendarDays, label: "Date", value: `${fest.date} · ${fest.day}` },
          { icon: MapPin, label: "Venue", value: `${fest.college}, ${fest.address}` },
          { icon: Trophy, label: "Rewards", value: fest.prizeHeadline },
        ].map((row, i) => (
          <Reveal key={row.label} delay={i * 70}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
              <row.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <dt className="mt-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {row.label}
              </dt>
              <dd className="mt-1 font-semibold">{row.value}</dd>
            </div>
          </Reveal>
        ))}
      </dl>

      <Reveal className="mt-12">
        <div className="rounded-2xl border border-border bg-card/60 p-6">
          <h2 className="display text-2xl">Eligibility</h2>
          <p className="mt-2 text-muted-foreground">{fest.eligibility}</p>
          <h2 className="display mt-8 text-2xl">Event queries</h2>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            {coordinators.map((c) => (
              <li key={c.phone}>
                <span className="font-semibold text-foreground">{c.name}</span>
                <br />
                <a className="hover:text-foreground" href={`tel:${c.phone.replace(/\s/g, "")}`}>
                  {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-12">
        <Link
          to="/register"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Register for {event.name}
        </Link>
      </div>
    </article>
  );
}
