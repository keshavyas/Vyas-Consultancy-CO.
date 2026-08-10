import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, mailHref, mapsHref, telHref, whatsappHref, primaryPhone } from "@/data/site";
import { EnquiryForm } from "./EnquiryForm";

export function Contact() {
  return (
    <section id="contact" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-20">
        <span className="gold-rule mb-5" aria-hidden />
        <h2 className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-[2.125rem]">
          Let's Talk
        </h2>
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
          For taxation, accounting, GST, compliance or business-related financial requirements, get
          in touch to discuss your needs.
        </p>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <dl className="space-y-7">
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <div className="min-w-0">
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-1.5 space-y-1">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={telHref(phone)}
                        className="block text-[0.9375rem] text-foreground transition-colors hover:text-primary"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <div className="min-w-0">
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={mailHref}
                      className="block truncate text-[0.9375rem] text-foreground transition-colors hover:text-primary"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <div className="min-w-0">
                  <dt className="eyebrow">Office</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-foreground">
                    {contact.office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={telHref(primaryPhone)}
                className="border border-border-strong bg-card px-4 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border-strong bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                WhatsApp
              </a>
              <a
                href={mailHref}
                className="border border-border-strong bg-card px-4 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Send Email
              </a>
            </div>

            <div className="mt-8 border border-border bg-surface p-5 sm:p-6">
              <p className="eyebrow">Location</p>
              <p className="mt-2 font-serif text-base leading-snug text-foreground">
                504 Vikram Tower, Sapna Sangeeta, Indore
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Madhya Pradesh, India — visits by prior appointment.
              </p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[0.8125rem] font-medium text-primary underline decoration-gold decoration-1 underline-offset-4"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

          <div className="border border-border bg-card p-5 sm:p-8">
            <h3 className="font-serif text-xl text-foreground">Request a Consultation</h3>
            <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">
              Share your requirement and it will be reviewed personally.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
