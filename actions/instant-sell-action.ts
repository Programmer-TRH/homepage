"use server";
import { v4 as uuidv4 } from "uuid";
import {
  InstantSellRequestFormData,
  InstantSellRequestSchema,
} from "@/lib/schema/contact-schema";
import { InstantSellRequest } from "@/lib/types/messages-types";
import {
  createInstantSellMessageService,
  deleteInstantSellMessageService,
  updateInstantSellStatusService,
} from "@/services/instant-sell-service";

export async function createInstantSellMessageAction(
  formData: InstantSellRequestFormData
) {
  const parsed = InstantSellRequestSchema.safeParse(formData);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return { success: false, message: firstError?.message || "Invalid input" };
  }

  try {
    const contactMessage: InstantSellRequest = {
      id: uuidv4(),
      ...parsed.data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const result = await createInstantSellMessageService(contactMessage);
    return { success: true, message: result.message };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

export async function updateInstantSellStatus({
  messageId,
  status,
}: {
  messageId: string;
  status: string;
}) {
  try {
    const result = await updateInstantSellStatusService({ messageId, status });
    return { success: true, message: result.message };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Server error",
    };
  }
}

export async function deleteInstantSellMessage(messageId: string) {
  try {
    const result = await deleteInstantSellMessageService(messageId);
    return { success: true, message: result.message };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Server error",
    };
  }
}
