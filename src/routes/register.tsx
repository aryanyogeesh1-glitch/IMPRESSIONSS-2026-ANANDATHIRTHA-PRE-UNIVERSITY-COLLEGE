import { createFileRoute } from "@tanstack/react-router";
import { Mail, QrCode, ScrollText, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { fest, events, coordinators, NOT_PROVIDED } from "@/data/fest";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Impressions 2026 Inter School Fest" },
      {
        name: "description",
        content:
          "Register for Impressions 2026 at Anandathirtha PU College, Udupi. Open to Class IX and X students. Scan the official QR code to enter.",
      },
      { property: "og:title", content: "Register — Impressions 2026" },
      { property: "og:description", content: fest.eligibility },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 lg:px-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Join us</p>
        <h1 className="display mt-3 text-5xl sm:text-7xl">Registration</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">{fest.eligibility}</p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="h-full rounded-3xl border border-accent/30 bg-card p-8 text-center">
            <QrCode className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
            <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflXOKZr2cywcUVIrKza9PpU4WvU2a9NxCepKjk0eVECtPcRg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open IMPRESSIONS 2026 registration form"
            className="inline-block"
          >
            <img
              src="/registration-qr.jpg"
              alt="QR code for IMPRESSIONS 2026 registration"
              className="cursor-pointer rounded-xl object-contain transition-transform hover:scale-105"
            />
          </a>
            <p className="mt-5 text-xs uppercase tracking-[0.24em] text-accent">
              Scan the official QR to register
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-border bg-card/60 p-8">
            <ScrollText className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="display mt-5 text-3xl">What to know</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Date:</span> {fest.date} ·{" "}
                {fest.day}
              </li>
              <li>
                <span className="font-semibold text-foreground">Venue:</span> {fest.college},{" "}
                {fest.address}
              </li>
              <li>
                <span className="font-semibold text-foreground">Eligibility:</span>{" "}
                {fest.eligibility}
              </li>
              <li>
                <span className="font-semibold text-foreground">Events:</span> {events.length}{" "}
                competitions across individual and team formats
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a className="hover:text-foreground" href={`mailto:${fest.email}`}>
                  {fest.email}
                </a>
              </li>
            </ul>

            <h3 className="display mt-10 flex items-center gap-2 text-2xl">
              <Users className="h-5 w-5 text-accent" aria-hidden="true" /> Coordinators
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {coordinators.map((c) => (
                <li key={c.phone} className="flex flex-wrap justify-between gap-2">
                  <span className="font-semibold">{c.name}</span>
                  <a
                    className="text-muted-foreground hover:text-foreground"
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
