import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Medal, Award, Building2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { fest } from "@/data/fest";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: "Prizes & Sponsors — Impressions 2026" },
      {
        name: "description",
        content:
          "Impressions 2026 offers cash prizes and attractive trophies across seven inter school competitions at Anandathirtha PU College, Udupi.",
      },
      { property: "og:title", content: "Prizes & Sponsors — Impressions 2026" },
      { property: "og:description", content: fest.prizeHeadline },
    ],
  }),
  component: PrizesPage,
});

function PrizesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 lg:px-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Rewards</p>
        <h1 className="display mt-3 max-w-3xl text-5xl sm:text-7xl">{fest.prizeHeadline}</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Prize amounts per event are not printed on the official pamphlet and will be announced by
          the organisers.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { icon: Trophy, place: "Winner", note: "Cash prize + trophy" },
          { icon: Medal, place: "Runner-up", note: "Cash prize + trophy" },
          { icon: Award, place: "Amount", note: "Cash prize + trophy" },
        ].map((p, i) => (
          <Reveal key={p.place} delay={i * 90}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-8 text-center">
              <p.icon className="mx-auto h-9 w-9 text-accent" aria-hidden="true" />
              <h2 className="display mt-5 text-3xl">{p.place}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <h2 className="display text-4xl">Sponsors</h2>
        <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/40 p-10 text-center">
          <Building2 className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
          <p className="mt-4 text-muted-foreground">
            Sponsored by ANANDATHIRTHA-PRE-UNIVERSITY-COLLEGE.
          </p>
          <p className="mt-4 text-muted-foreground">
            No sponsor details are printed on the official pamphlet — {NOT_PROVIDED}.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            To partner with Impressions {fest.year}, write to{" "}
            <a className="text-accent hover:underline" href={`mailto:${fest.email}`}>
              {fest.email}
            </a>
            .
          </p>
        </div>
      </Reveal>
    </div>
  );
}
