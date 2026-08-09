import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { events, fest } from "@/data/fest";
export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Impressions 2026, August 21" },
      {
        name: "description",
        content:
          "Impressions 2026 runs on Friday, August 21, 2026 at Anandathirtha PU College, Udupi. Event order and reporting details.",
      },
      { property: "og:title", content: "Schedule — Impressions 2026" },
      { property: "og:description", content: "All seven events on Friday, August 21, 2026." },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-32 lg:px-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
          {fest.date} · {fest.day}
        </p>
        <h1 className="display mt-3 text-5xl sm:text-7xl">Schedule</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          All events take place on a single day at {fest.college}. Exact reporting times are not
          printed on the official pamphlet — they will be announced by the coordinators.
        </p>
      </Reveal>

      <ol className="mt-14 space-y-4 border-l border-border pl-6">
        {events.map((event, i) => (
          <Reveal key={event.slug} delay={i * 60}>
            <li className="relative rounded-2xl border border-border bg-card/60 p-6">
              <span
                aria-hidden="true"
                className="absolute -left-[1.9rem] top-8 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
              />
                  <div>
                    <p className="display text-2xl">{event.name}</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">
                      {event.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {event.category} · {event.teamSize}
                    </p>
                  </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
