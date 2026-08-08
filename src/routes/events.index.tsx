import { createFileRoute } from "@tanstack/react-router";
import { EventCard } from "@/components/EventCard";
import { Reveal } from "@/components/Reveal";
import { events, fest } from "@/data/fest";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — Impressions 2026 Inter School Fest" },
      {
        name: "description",
        content:
          "All seven Impressions 2026 competitions: Turncoat, Rangoli, Ikebana, Ramp Walk, Mad Ad, Painting and Treasure Hunt for Class IX and X students.",
      },
      { property: "og:title", content: "Events — Impressions 2026" },
      {
        property: "og:description",
        content: "Seven inter school competitions at Anandathirtha PU College, Udupi.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 lg:px-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{fest.kind}</p>
        <h1 className="display mt-3 text-5xl sm:text-7xl">Events</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">{fest.eligibility}</p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event, i) => (
          <Reveal key={event.slug} delay={(i % 3) * 90}>
            <EventCard event={event} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
