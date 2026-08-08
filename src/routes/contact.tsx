import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { coordinators, fest } from "@/data/fest";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Impressions 2026 Coordinators" },
      {
        name: "description",
        content:
          "Reach the Impressions 2026 coordinators at Anandathirtha PU College, Udupi by phone or email for event and registration queries.",
      },
      { property: "og:title", content: "Contact — Impressions 2026" },
      { property: "og:description", content: `Email ${fest.email} or call the coordinators.` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 lg:px-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Say hello</p>
        <h1 className="display mt-3 text-5xl sm:text-7xl">Contact</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          For any query about events, eligibility or registration, get in touch with the
          Impressions {fest.year} team.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {coordinators.map((c, i) => (
          <Reveal key={c.phone} delay={i * 90}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-7">
              <p className="display text-2xl">{c.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">{c.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.dept}</p>
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/50 px-4 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {c.phone}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="grid gap-6 rounded-2xl border border-border bg-card/60 p-8 sm:grid-cols-2">
          <p className="flex gap-3 text-muted-foreground">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <a className="hover:text-foreground" href={`mailto:${fest.email}`}>
              {fest.email}
            </a>
          </p>
          <p className="flex gap-3 text-muted-foreground">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            {fest.college}, {fest.address}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
