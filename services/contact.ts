import { isAuthenticated } from "@/dal/isAuthenticated";
import { connectToDatabase } from "@/lib/db";
import { ContactMessage } from "@/lib/types/messages-types";

export async function createContactMessage(data: ContactMessage) {
  const db = await connectToDatabase();
  const result = await db.collection("contact").insertOne(data);
  if (!result.insertedId) {
    return { message: "Message sumition failed." };
  }
  return { message: "Message submited successfully." };
}

export async function getContactMessage() {
  const { isAuth } = await isAuthenticated();
  if (!isAuth) return;

  const db = await connectToDatabase();
  const messages = await db
    .collection("contact")
    .find({})
    .project({ _id: 0 })
    .toArray();
  return messages as ContactMessage[];
}
