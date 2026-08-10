import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { contact, faqs, telHref, primaryPhone } from "@/data/site";

export function Faq({ onConsult }: { onConsult: () => void }) {
  return (
    <section id="faq" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
        <span className="gold-rule mb-5" aria-hidden />
        <h2 className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
          Simple answers to the questions clients ask most often.
        </p>

        <Accordion type="single" collapsible className="mt-8 max-w-3xl border-t border-border">
          {faqs.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-b border-border">
              <AccordionTrigger className="py-4 text-left font-serif text-base text-foreground hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 border border-border bg-card p-5 sm:mt-14 sm:p-10">
          <h3 className="font-serif text-xl leading-snug text-foreground sm:text-2xl">
            Have a Financial or Tax-Related Requirement?
          </h3>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            Let's discuss your requirement and identify the right professional approach.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onConsult}
              className="bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a Consultation
            </button>
            <a
              href={telHref(primaryPhone)}
              className="border border-border-strong px-6 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
