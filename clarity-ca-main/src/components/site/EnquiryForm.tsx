import { useId, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { serviceOptions } from "@/data/site";
import { submitEnquiry } from "@/lib/enquiries.functions";

type Values = { name: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[0-9+\s-]{10,15}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.service) e.service = "Please select a service.";
  if (v.message.trim().length < 5) e.message = "Please describe your requirement briefly.";
  return e;
}

/**
 * Enquiry form. Submissions are stored in the project database through the
 * `submitEnquiry` server function.
 */
export function EnquiryForm({
  defaultService = "",
  compact = false,
  submitLabel = "Request a Consultation",
}: {
  defaultService?: string;
  compact?: boolean;
  submitLabel?: string;
}) {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);
  const send = useServerFn(submitEnquiry);
  const uid = useId();
  const fid = (name: string) => `${uid}-${name}`;

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const field =
    "mt-1.5 w-full border border-border-strong bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
  const label = "block text-[0.8125rem] font-medium text-foreground";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    setFailed(null);
    try {
      await send({ data: values });
      setSent(true);
      setValues({ name: "", phone: "", email: "", service: defaultService, message: "" });
    } catch {
      setFailed("Something went wrong while sending your enquiry. Please try again or call directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className={compact ? "" : "sm:col-span-1"}>
          <label className={label} htmlFor={fid("name")}>
            Full Name
          </label>
          <input id={fid("name")} className={field} value={values.name} onChange={set("name")} autoComplete="name" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor={fid("phone")}>
            Phone Number
          </label>
          <input id={fid("phone")} className={field} value={values.phone} onChange={set("phone")} inputMode="tel" autoComplete="tel" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className={label} htmlFor={fid("email")}>
            Email Address
          </label>
          <input id={fid("email")} className={field} value={values.email} onChange={set("email")} inputMode="email" autoComplete="email" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className={label} htmlFor={fid("service")}>
            {compact ? "What service are you interested in?" : "Service Required"}
          </label>
          <select id={fid("service")} className={field} value={values.service} onChange={set("service")}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className={label} htmlFor={fid("message")}>
            Message
          </label>
          <textarea
            id={fid("message")}
            rows={compact ? 3 : 4}
            className={field}
            value={values.message}
            onChange={set("message")}
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 w-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending\u2026" : submitLabel}
      </button>

      {failed && <p className="mt-3 text-xs leading-relaxed text-destructive">{failed}</p>}

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground" role="status">
        {sent
          ? "Thank you \u2014 your enquiry has been received and will be reviewed personally. You will be contacted shortly."
          : "Your details are submitted securely and reviewed personally."}
      </p>
    </form>
  );
}
