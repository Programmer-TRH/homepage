import { z } from "zod";

export const ContactMessageSchema = z.object({
  name: z.string().trim().min(3, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().trim().min(4, "Subject is required"),
  message: z.string().trim().min(10, "Message cannot be empty"),
  status: z.enum(["new", "read"]).default("new"),
});

export type ContactMessageFormData = z.infer<typeof ContactMessageSchema>;
