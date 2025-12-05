"use server";
import { v4 as uuidv4 } from "uuid";
import {
  ContactMessageFormData,
  ContactMessageSchema,
} from "@/lib/schema/contact-schema";
import { ContactMessage } from "@/lib/types/messages-types";
import { createContactMessage } from "@/services/contact";

export async function createContactMessageAction(
  formData: ContactMessageFormData
) {
  const parsed = ContactMessageSchema.safeParse(formData);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return { success: false, message: firstError?.message || "Invalid input" };
  }

  try {
    const contactMessage: ContactMessage = {
      id: uuidv4(),
      ...parsed.data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const result = await createContactMessage(contactMessage);
    return { success: true, message: result.message };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
