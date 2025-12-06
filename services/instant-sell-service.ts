import { connectToDatabase } from "@/lib/db";
import { InstantSellRequest } from "@/lib/types/messages-types";

export async function createInstantSellMessageService(
  data: InstantSellRequest
) {
  const db = await connectToDatabase();
  const result = await db.collection("sell-instant").insertOne(data);
  if (!result.insertedId) {
    throw new Error("Message sumition failed");
  }
  return { message: "Message submited successfully." };
}

export async function getInstantSellMessageService({
  isAuth,
}: {
  isAuth: boolean;
}) {
  if (!isAuth) {
    return {
      success: false,
      data: [],
    };
  }

  const db = await connectToDatabase();
  const messages = await db
    .collection("sell-instant")
    .find({})
    .project({ _id: 0 })
    .toArray();
  return { success: true, data: messages as InstantSellRequest[] };
}

export async function updateInstantSellStatusService({
  messageId,
  status,
}: {
  messageId: string;
  status: string;
}) {
  const db = await connectToDatabase();
  const result = await db
    .collection("sell-instant")
    .updateOne({ id: messageId }, { $set: { status } });
  if (result.matchedCount === 0) {
    throw new Error("Request not found");
  }

  if (result.modifiedCount === 0) {
    throw new Error("Status already up-to-date");
  }

  return { message: "Status updated successfully" };
}

export async function deleteInstantSellMessageService(messageId: string) {
  const db = await connectToDatabase();
  const result = await db
    .collection("sell-instant")
    .deleteOne({ id: messageId });
  if (result.deletedCount === 0) {
    throw new Error("Contact message delete failed");
  }
  return { message: "Contact message delete successfull" };
}
