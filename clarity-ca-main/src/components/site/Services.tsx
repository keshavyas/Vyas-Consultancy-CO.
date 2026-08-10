import {
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Compass,
  FileText,
  Landmark,
  Receipt,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  FileText,
  Receipt,
  BookOpen,
  Compass,
  ShieldCheck,
  ClipboardCheck,
  Landmark,
  Briefcase,
};

export function Services({ onDiscuss }: { onDiscuss: (service: string) => void }) {
  return (
    <section id="services" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
        <span className="gold-rule mb-5" aria-hidden />
        <h2 className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]">
          Professional Services
        </h2>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
          Practical financial and compliance support for individuals, professionals and businesses.
        </p>

        <div className="mt-8 grid gap-px sm:mt-10 border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? FileText;
            return (
              <article key={service.title} className="bg-card p-5 sm:p-7">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 font-serif text-lg leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={() => onDiscuss(service.title)}
                  className="mt-5 text-[0.8125rem] font-medium text-primary transition-colors hover:text-foreground"
                >
                  Discuss Requirement &rarr;
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
