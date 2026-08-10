import { professional } from "@/data/site";
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section id="home" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-20 lg:py-28">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_42%] lg:items-center lg:gap-16">
          {/* Portrait first in the DOM so mobile shows it above the introduction */}
          <div className="lg:order-2">
            <Portrait />
          </div>

          <div className="lg:order-1">
            <span className="gold-rule mb-5" aria-hidden />
            <h1 className="hidden font-serif text-[1.75rem] leading-[1.15] text-foreground sm:block sm:text-[2.5rem] lg:text-[3rem]">
              {professional.name}
            </h1>
            <p className="hidden text-[0.8125rem] tracking-[0.18em] text-primary uppercase sm:mt-2 sm:block">
              {professional.title}
            </p>

            <p className="mt-5 font-serif text-lg leading-snug text-foreground sm:text-2xl">
              Clear financial guidance for confident decisions.
            </p>
            <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-muted-foreground">
              Providing professional accounting, taxation and financial guidance with a focus on
              clarity, accuracy and practical client support.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4">
              <a
                href="#services"
                className="bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="text-center text-sm text-foreground underline decoration-gold decoration-1 underline-offset-4 transition-colors hover:text-primary"
              >
                Get in Touch &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
