import { connectToDatabase } from "@/lib/db";
import { Admin } from "@/lib/types/login-types";

export const createAdmin = async (data: Admin) => {
  const db = await connectToDatabase();
  const admin = db.collection<Admin>("admin");

  const result = await admin.insertOne(data);

  if (!result.acknowledged) {
    return { message: "Admin created failed" };
  }

  return { message: "Admin created successfully" };
};

export async function getAdmins({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    return { success: false, message: "Unauthorized", admins: [] };
  }
  const db = await connectToDatabase();
  const adminCollection = db.collection<Admin>("admin");

  const adminsData = await adminCollection
    .find({})
    .project({ _id: 0 })
    .toArray();
  return {
    success: true,
    message: "Admins data...",
    admins: adminsData as Admin[],
  };
}

export async function getAdminById(adminId: string) {
  const db = await connectToDatabase();
  const adminCollection = db.collection<Admin>("admin");

  const admin = await adminCollection.findOne(
    { id: adminId },
    { projection: { _id: 0 } }
  );

  return admin;
}

export async function deleteAdmin(adminId: string) {
  const db = await connectToDatabase();
  const adminCollection = db.collection<Admin>("admin");
  console.log("Admin ID:", adminId);

  const result = await adminCollection.deleteOne({ id: adminId });
  console.log("Result:", result);
  if (!result.acknowledged) {
    return { message: "Admin deletion failed" };
  }
  return { message: "Admin deletion successfull" };
}
