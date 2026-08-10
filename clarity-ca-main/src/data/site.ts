import portraitAsset from "@/assets/file_0000000088988208865bbe267def90ec.png";

/**
 * Single source of truth for all professional details, services, FAQs and navigation.
 * Update values here — components read from this file only.
 */

export const professional = {
  name: "CA Deepak Vyas",
  title: "Chartered Accountant",
  brand: "Vyas Consultancy & Co.",
  city: "Indore",
  state: "Madhya Pradesh",
};

export const contact = {
  phones: ["9893014143", "7898914143"],
  email: "deepakvyas272@gmail.com",
  whatsapp: "919893014143",
  whatsappMessage: "Hello, I would like to discuss a professional requirement.",
  office: {
    lines: ["504 Vikram Tower", "Sapna Sangeeta", "Indore, Madhya Pradesh, India"],
    query: "504 Vikram Tower, Sapna Sangeeta, Indore, Madhya Pradesh",
  },
};

export const primaryPhone = contact.phones[0]!;

export const telHref = (phone: string) => `tel:+91${phone}`;
export const mailHref = `mailto:${contact.email}`;
export const whatsappHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  contact.office.query,
)}`;

/**
 * Professional portrait.
 * The photo is served from Lovable Assets CDN. To update it, replace the
 * asset pointer at `src/assets/deepak-vyas.png.asset.json`.
 */
export const portraitSrc: ImageSource = portraitAsset as ImageSource & { url: string } ;

export const nav = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Expertise", id: "expertise" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Income Tax & Taxation",
    description: "Tax return filing, taxation assistance and related professional support.",
    icon: "FileText",
  },
  {
    title: "GST Services",
    description: "GST registration, return filing and compliance-related assistance.",
    icon: "Receipt",
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate accounting, bookkeeping and financial record management.",
    icon: "BookOpen",
  },
  {
    title: "Tax Planning & Advisory",
    description: "Professional guidance for understanding and planning taxation matters.",
    icon: "Compass",
  },
  {
    title: "Audit & Assurance",
    description:
      "Audit and assurance support, subject to applicable professional scope and requirements.",
    icon: "ShieldCheck",
  },
  {
    title: "TDS & Compliance",
    description: "TDS-related documentation, filing and compliance assistance.",
    icon: "ClipboardCheck",
  },
  {
    title: "Financial Statements",
    description:
      "Preparation and support relating to financial statements and financial reporting.",
    icon: "Landmark",
  },
  {
    title: "Business & Financial Advisory",
    description: "Practical financial guidance for businesses and professionals.",
    icon: "Briefcase",
  },
];

export const serviceOptions = [...services.map((s) => s.title), "Other"];

export const approach = [
  { step: "01", title: "Understand", text: "Understand the client's requirement and financial situation." },
  { step: "02", title: "Review", text: "Review the relevant information, records and documentation." },
  { step: "03", title: "Advise", text: "Provide clear and practical professional guidance." },
  { step: "04", title: "Support", text: "Assist with the relevant financial or compliance process." },
];

export const audiences = [
  { title: "Individuals", text: "Personal taxation and financial documentation." },
  { title: "Salaried Professionals", text: "Return filing and salary-related tax matters." },
  { title: "Freelancers & Consultants", text: "Income reporting and compliance support." },
  { title: "Entrepreneurs", text: "Guidance while setting up and running a venture." },
  { title: "Startups", text: "Registrations, records and early-stage compliance." },
  { title: "Small & Medium Businesses", text: "Accounting, GST and routine compliance." },
  { title: "Established Businesses", text: "Reporting, review and advisory support." },
  { title: "Professionals", text: "Practice-related accounting and taxation matters." },
];

export const principles = [
  { title: "Clarity", text: "Complex financial matters explained simply." },
  { title: "Accuracy", text: "Careful attention to records and documentation." },
  { title: "Confidentiality", text: "Professional handling of client information." },
  { title: "Practical Guidance", text: "Straightforward advice focused on the client's requirement." },
];

export const faqs = [
  {
    q: "What services are available?",
    a: "Income tax and taxation, GST, accounting and bookkeeping, TDS and compliance, financial statements, audit and assurance support, and general business and financial advisory.",
  },
  {
    q: "Can individuals get taxation assistance?",
    a: "Yes. Individuals and salaried professionals can get help with income tax return filing, documentation and general taxation questions.",
  },
  {
    q: "Do you provide GST-related services?",
    a: "Yes. This includes GST registration, periodic return filing and assistance with routine GST compliance requirements.",
  },
  {
    q: "Can businesses get accounting support?",
    a: "Yes. Businesses can get help with bookkeeping, maintaining financial records, preparing financial statements and related reporting.",
  },
  {
    q: "How can I discuss my requirement?",
    a: "You can call or send a message using the contact details below, or share your requirement through the consultation form and it will be reviewed.",
  },
  {
    q: "Where is the office located?",
    a: "504 Vikram Tower, Sapna Sangeeta, Indore, Madhya Pradesh. Directions are available through the map link in the contact section.",
  },
];
