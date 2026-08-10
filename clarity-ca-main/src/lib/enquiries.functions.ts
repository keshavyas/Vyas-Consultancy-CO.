import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(10).max(20),
  email: z.string().trim().email().max(200),
  service: z.string().trim().min(2).max(160),
  message: z.string().trim().min(5).max(4000),
});

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("enquiries").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      service: data.service,
      message: data.message,
    });

    if (error) {
      console.error("Failed to store enquiry", error);
      throw new Error("Could not save your enquiry. Please try again or call directly.");
    }

    return { ok: true as const };
  });
