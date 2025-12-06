import { connectToDatabase } from "@/lib/db";
import { UploadDetails } from "@/lib/types/messages-types";

export async function getRequestService(isAuth: boolean) {
  if (!isAuth) {
    return { success: false, message: "Unauthorized", list: [] };
  }
  const db = await connectToDatabase();
  const list = await db
    .collection("sell-request")
    .find({})
    .project({ _id: 0 })
    .toArray();
  return {
    success: true,
    message: "Successfull",
    list: list as UploadDetails[],
  };
}

export async function UploadDetailsService(data: UploadDetails) {
  const db = await connectToDatabase();
  const result = await db.collection("sell-request").insertOne(data);
  if (!result.insertedId) {
    return { message: "Request submition failed." };
  }
  return { message: "Request submited successfully." };
}

export async function updateSellRequestStatusService({
  requestId,
  status,
}: {
  requestId: string;
  status: string;
}) {
  const db = await connectToDatabase();
  const result = await db
    .collection("sell-request")
    .updateOne({ id: requestId }, { $set: { status } });
  if (result.matchedCount === 0) {
    throw new Error("Request not found");
  }

  if (result.modifiedCount === 0) {
    return { message: "Status already up-to-date" };
  }

  return { message: "Status updated successfully" };
}

export async function DeleteDetailsService(requestId: string) {
  const db = await connectToDatabase();
  const result = await db
    .collection("sell-request")
    .deleteOne({ id: requestId });

  if (result.deletedCount === 0) {
    return { message: "Request not found or already deleted" };
  }
  return { message: "Request deleted successfully" };
}
