import { portraitSrc, professional } from "@/data/site";

/**
 * Responsive professional portrait frame.
 * Mobile: compact, centred 4:5 card with a small caption underneath.
 * Desktop: larger framed portrait with gold accent details.
 * Renders a real photo when `portraitSrc` is set in src/data/site.ts,
 * otherwise a neutral, clearly-marked placeholder (no invented likeness).
 */
export function Portrait() {
  return (
    <figure className="relative mx-auto w-[9.875rem] max-w-full sm:w-full sm:max-w-[20rem] lg:ml-auto lg:max-w-[24rem]">
      <span
        aria-hidden
        className="absolute -top-2 -right-2 hidden h-16 w-16 border-t border-r border-gold-soft lg:block"
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-surface sm:rounded-none">
        {portraitSrc ? (
          <img
            src={portraitSrc}
            alt={`${professional.name}, ${professional.title} in ${professional.city}`}
            width={800}
            height={1000}
            loading="eager"
            className="h-full w-full object-cover object-[center_25%] grayscale-[20%] transition-all duration-700 ease-out hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center sm:gap-3 sm:px-6">
            <span className="h-px w-8 bg-gold sm:w-10" aria-hidden />
            <p className="font-serif text-[0.8125rem] leading-snug text-foreground sm:text-base">
              Professional Portrait
            </p>
            <p className="text-[0.625rem] leading-relaxed text-muted-foreground sm:text-xs">
              Photograph to be added here
            </p>
          </div>
        )}
      </div>

      <figcaption className="mt-3 text-center sm:hidden">
        <p className="font-serif text-base leading-snug text-foreground">
          {professional.name}
        </p>
        <p className="mt-0.5 text-[0.625rem] tracking-[0.18em] text-muted-foreground uppercase">
          {professional.title}
        </p>
      </figcaption>

      <span aria-hidden className="mt-3 hidden h-px w-16 bg-gold lg:block" />
    </figure>
  );
}
