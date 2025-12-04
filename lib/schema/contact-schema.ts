import { z } from "zod";

export const ContactMessageSchema = z.object({
  name: z.string().trim().min(3, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().trim().min(4, "Subject is required"),
  message: z.string().trim().min(10, "Message cannot be empty"),
  status: z.enum(["new", "reviewed", "contacted"]),
});

export type ContactMessageFormData = z.infer<typeof ContactMessageSchema>;

export const items = [
  { id: "goldBars", label: "Gold Bars" },
  { id: "goldCoins", label: "Gold Coins" },
  { id: "silverBars", label: "Silver Bars" },
  { id: "silverCoins", label: "Silver Coins" },
] as const;

export const InstantSellRequestSchema = z.object({
  items: z
    .array(z.string())
    .min(1, "Please select at least one notification type.")
    .refine(
      (value) => value.every((item) => items.some((t) => t.id === item)),
      {
        message: "Invalid item type selected.",
      }
    ),
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-() ]+$/, "Invalid phone number format"),
  dropOff: z.string().trim().min(1, "Please select a drop-off method"),
  status: z.enum(["new", "reviewed", "contacted"]),
});

export type InstantSellRequestFormData = z.infer<
  typeof InstantSellRequestSchema
>;
