"use server";
import { v4 as uuidv4 } from "uuid";
import { ContactMessageFormData } from "@/lib/schema/contact-schema";
import { ContactMessage } from "@/lib/types/messages-types";
import { createContactMessage } from "@/services/contact";

export async function createContactMessageAction(data: ContactMessageFormData) {
  try {
    const contactMessage: ContactMessage = {
      id: uuidv4(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const result = await createContactMessage(contactMessage);
    return { success: true, message: result.message };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
