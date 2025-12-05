"use server";

import { v4 as uuidv4 } from "uuid";
import { QuoteDetailsUploadSchema } from "@/lib/schema/contact-schema";
import { UploadDetails } from "@/lib/types/messages-types";
import {
  DeleteDetailsService,
  UploadDetailsService,
} from "@/services/request-service";
import {
  deleteCloudinaryImage,
  ServerUploadCloudinaryImage,
} from "./cloudinary-action";
import { connectToDatabase } from "@/lib/db";

export async function UploadDetailsAction(formData: FormData) {
  const requestFormData = {
    name: (formData.get("name") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
    status: (formData.get("status") as string) || "new",
    images: formData.getAll("images") as File[],
  };
  const parsed = QuoteDetailsUploadSchema.safeParse(requestFormData);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return { success: false, message: firstError?.message || "Invalid input" };
  }
  const data = parsed.data;

  const urls = await Promise.all(
    data.images.map((image) => ServerUploadCloudinaryImage(image))
  );
  const now = new Date().toISOString();

  const detailsData: UploadDetails = {
    id: uuidv4(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    status: data.status,
    images: urls,
    createdAt: now,
    updatedAt: now,
  };

  try {
    const result = await UploadDetailsService(detailsData);
    return { success: true, message: result.message };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

export async function DeleteRequestAction(requestId: string) {
  try {
    const db = await connectToDatabase();
    const request = await db
      .collection("sell-request")
      .findOne({ id: requestId });
    console.log("Request:", request);
    if (!request) {
      return { success: false, message: "Request not found" };
    }

    if (request.images && Array.isArray(request.images)) {
      for (const image of request.images) {
        if (image.publicId) {
          try {
            await deleteCloudinaryImage(image.publicId);
          } catch (error) {
            console.error("Cloudinary file delete failed:", error);
          }
        }
      }
    }

    const result = await DeleteDetailsService(requestId);
    return { success: true, message: result.message };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Server error",
    };
  }
}
