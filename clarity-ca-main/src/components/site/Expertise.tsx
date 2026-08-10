import { approach, audiences, principles } from "@/data/site";

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
        <span className="gold-rule mb-5" aria-hidden />
        <h2 className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]">
          Professional Approach
        </h2>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
          A straightforward way of working, so you always know what is happening and why.
        </p>

        <ol className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {approach.map((step) => (
            <li key={step.step} className="border-t border-border-strong pt-5">
              <span className="font-serif text-sm text-gold">{step.step}</span>
              <h3 className="mt-1.5 font-serif text-lg text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 sm:mt-16">
          <h2 className="font-serif text-[1.5rem] leading-tight text-foreground sm:text-[1.875rem]">
            Who We Serve
          </h2>
          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div key={item.title} className="bg-card px-5 py-5">
                <h3 className="font-serif text-base text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-10 sm:mt-16 sm:pt-12">
          <h2 className="font-serif text-[1.5rem] leading-tight text-foreground sm:text-[1.875rem]">
            What Matters in Professional Financial Guidance
          </h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <div key={item.title}>
                <span className="block h-px w-8 bg-gold" aria-hidden />
                <h3 className="mt-3 font-serif text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
