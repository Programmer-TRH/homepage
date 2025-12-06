import { connectToDatabase } from "@/lib/db";
import { ContactMessage } from "@/lib/types/messages-types";

export async function createContactMessage(data: ContactMessage) {
  const db = await connectToDatabase();
  const result = await db.collection("contact").insertOne(data);
  if (!result.insertedId) {
    throw new Error("Message sumition failed");
  }
  return { message: "Message submited successfully." };
}

export async function getContactMessage({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    return {
      success: false,
      data: [],
    };
  }

  const db = await connectToDatabase();
  const messages = await db
    .collection("contact")
    .find({})
    .project({ _id: 0 })
    .toArray();
  return { success: true, data: messages as ContactMessage[] };
}

export async function deleteContactMessageService(messageId: string) {
  const db = await connectToDatabase();
  const result = await db.collection("contact").deleteOne({ id: messageId });
  if (result.deletedCount === 0) {
    throw new Error("Contact message delete failed");
  }
  return { message: "Contact message delete successfull" };
}
