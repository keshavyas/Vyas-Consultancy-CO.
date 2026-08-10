import { contact, mailHref, nav, professional, telHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg text-foreground">{professional.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{professional.title}</p>
            <span className="gold-rule mt-4" aria-hidden />
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-3 space-y-2">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={telHref(phone)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={mailHref}
                  className="text-sm break-all text-muted-foreground transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Office</p>
            <address className="mt-3 text-sm leading-relaxed text-muted-foreground not-italic">
              504 Vikram Tower, Sapna Sangeeta, Indore, Madhya Pradesh
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">&copy; 2026. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#faq" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#faq" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
