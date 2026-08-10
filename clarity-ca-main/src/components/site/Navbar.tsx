import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, professional } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar({ onConsult }: { onConsult: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm transition-shadow duration-200",
        scrolled && "shadow-nav",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-8 sm:py-3.5 lg:py-4">
        <a href="#home" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-serif text-[1.0625rem] leading-tight text-foreground sm:text-lg">
            {professional.brand}
          </span>
          <span className="mt-0.5 hidden text-[0.6875rem] tracking-[0.16em] text-muted-foreground uppercase sm:block">
            {professional.city}, {professional.state}
          </span>
        </a>

        <nav className="hidden shrink-0 items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onConsult}
            className="border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Consultation
          </button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border bg-background transition-[grid-template-rows] duration-200 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0",
        )}
      >
        <nav className="min-h-0 overflow-hidden">
          <ul className="px-4 py-2 sm:px-8">
            {nav.map((item) => (
              <li key={item.id} className="border-b border-border last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[0.9375rem] text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-5 sm:px-8">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onConsult();
              }}
              className="w-full bg-primary px-4 py-3 text-sm text-primary-foreground"
            >
              Consultation
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
