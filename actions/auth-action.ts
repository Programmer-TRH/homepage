"use server";

import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";
import {
  CreateAdminFormData,
  CreateAdminSchema,
  LoginFormData,
  LoginSchema,
} from "@/lib/schema/login-schema";
import { createToken, deleteToken } from "@/lib/session";
import { v4 as uuidv4 } from "uuid";
import { Admin } from "@/lib/types/login-types";
import { createAdmin, deleteAdmin } from "@/services/auth-service";

export async function CreateAdminAction(formData: CreateAdminFormData) {
  const parsed = CreateAdminSchema.safeParse(formData);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return { success: false, message: firstError?.message || "Invalid input" };
  }

  const data = parsed.data;

  const db = await connectToDatabase();
  const admin = db.collection<Admin>("admin");

  const existingUser = await admin.findOne({ email: data.email });
  if (existingUser) {
    return {
      success: true,
      message: "Admin already exists",
    };
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const now = new Date().toISOString();

  const createdAdmin: Admin = {
    id: uuidv4(),
    name: data.name,
    email: data.email,
    password: hashedPassword,
    role: "admin",
    createdAt: now,
    updatedAt: now,
  };

  try {
    const result = await createAdmin(createdAdmin);
    return {
      success: true,
      message: result.message,
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}

export async function DeleteAdminAction(adminId: string) {
  try {
    const result = await deleteAdmin(adminId);
    return { success: true, message: result.message };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

export async function LoginAdminAction(formData: LoginFormData) {
  const parsed = LoginSchema.safeParse(formData);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return { success: false, message: firstError?.message || "Invalid input" };
  }

  const data = parsed.data;

  try {
    const db = await connectToDatabase();
    const users = db.collection("admin");

    const user = await users.findOne({ email: data.email });

    if (!user) {
      return {
        success: false,
        message: "Email not registered",
      };
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Password is incorrect",
      };
    }

    await createToken(user.id, user.role);

    return {
      success: true,
      message: "Login Successfull",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}

export async function Logout() {
  await deleteToken();
}
