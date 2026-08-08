import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/schedule", label: "Schedule" },
  { to: "/venue", label: "Venue" },
  { to: "/prizes", label: "Prizes" },

  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between lg:px-8"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Impressions 2026 home">
          <img
            src="/impressions-logo.png"
            alt="Impressions 2026 logo"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-accent/40"
          />
          <span className="min-w-0">
            <span className="display block truncate text-lg leading-none tracking-wide">
              Impressions
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.32em] text-accent">
              2026
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                activeProps={{ className: "bg-secondary/70 text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/register"
              className="ml-2 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
            >
              Register Now
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border sm:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-6 pt-3 backdrop-blur-xl sm:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="flex min-h-12 items-center border-b border-border/60 text-base font-medium text-muted-foreground data-[status=active]:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/register"
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-primary px-5 font-bold text-primary-foreground"
          >
            Register Now
          </Link>
        </div>
      )}
    </header>
  );
}
