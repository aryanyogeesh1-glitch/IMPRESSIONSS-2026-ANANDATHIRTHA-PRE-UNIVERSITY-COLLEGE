import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { fest, coordinators } from "@/data/fest";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="/impressions-logo.png"
                alt="Impressions 2026 logo"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-accent/40"
              />
              <div className="min-w-0">
                <p className="display text-xl leading-none">Impressions {fest.year}</p>
                <p className="text-xs text-accent">{fest.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {fest.kind} organised by {fest.college} ({fest.collegeNote}).
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-muted-foreground hover:text-foreground">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/venue" className="text-muted-foreground hover:text-foreground">
                  Venue
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-muted-foreground hover:text-foreground">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Reach us</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {fest.college}, {fest.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a className="hover:text-foreground" href={`mailto:${fest.email}`}>
                  {fest.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  className="hover:text-foreground"
                  href={`tel:${(coordinators[0]?.phone ?? "").replace(/\s/g, "")}`}
                >
                  {coordinators[0]?.phone}
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {fest.year} {fest.college}. All rights reserved.
          </p>
          <p>
            {fest.date} · {fest.day}
          </p>
        </div>
      </div>
    </footer>
  );
}
