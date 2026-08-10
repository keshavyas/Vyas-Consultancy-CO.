import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Expertise } from "@/components/site/Expertise";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ConsultationDialog } from "@/components/site/ConsultationDialog";
import { contact, professional } from "@/data/site";

const title = "CA Deepak Vyas | Chartered Accountant in Indore";
const description =
  "Professional taxation, GST, accounting, compliance and financial advisory services in Indore, Madhya Pradesh.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Accountant",
          name: professional.name,
          description,
          jobTitle: professional.title,
          telephone: contact.phones.map((p) => `+91${p}`),
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "504 Vikram Tower, Sapna Sangeeta",
            addressLocality: "Indore",
            addressRegion: "Madhya Pradesh",
            addressCountry: "IN",
          },
          areaServed: "Indore, Madhya Pradesh",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>(undefined);

  const openConsult = (selected?: string) => {
    setService(selected);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onConsult={() => openConsult()} />
      <main>
        <Hero />
        <Services onDiscuss={(s) => openConsult(s)} />
        <Expertise />
        <Faq onConsult={() => openConsult()} />
        <Contact />
      </main>
      <Footer />
      <ConsultationDialog open={open} onOpenChange={setOpen} service={service} />
    </div>
  );
}
