"use server";

import { connectToDatabase } from "@/lib/db";
import bcrypt from "bcryptjs";
import { LoginFormData, LoginSchema } from "@/lib/schema/login-schema";
import { createToken } from "@/lib/session";

// export async function registrationAction(
//   formData: FormData
// ): Promise<ActionResponse> {
//   const parsed = registerSchema.safeParse(formData);

//   if (!parsed.success) {
//     const errors = z.flattenError(parsed.error);
//     console.log("Errors:", errors);
//     return {
//       success: false,
//       message: "Validation failed. Please check your input.",
//       code: "VALIDATION_FAILED",
//       data: errors,
//     };
//   }

//   const { first_name, last_name, email, password } = parsed.data;

//   try {
//     const insertedUser = await createUser({
//       first_name,
//       last_name,
//       email,
//       password,
//     });
//     console.log("Inserted User:", insertedUser);

//     const token = await createToken(insertedUser.userId, insertedUser.role);

//     console.log("Token Creating:", token);

//     return {
//       success: true,
//       message: "Registration successful",
//     };
//   } catch (error: any) {
//     console.log("Error:", error);
//     if (error instanceof AppError) {
//       return {
//         success: false,
//         message: error.message,
//         code: error.code,
//       };
//     }
//     return {
//       success: false,
//       message:
//         error.message ||
//         "An unexpected error occurred. Please try again later.",
//       code: error.code || "UNKNOWN_ERROR",
//     };
//   }
// }

export async function LoginAction(formData: LoginFormData) {
  const parsed = LoginSchema.safeParse(formData);

  if (!parsed.success) {
    const errors: Record<string, string> = {};

    parsed.error.issues.forEach((err) => {
      if (err.path[0]) {
        errors[err.path[0] as string] = err.message;
      }
    });

    return { success: false, errors };
  }

  const data = parsed.data;

  try {
    const db = await connectToDatabase();
    const users = db.collection("users");

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

    await createToken(user.userId, user.role);

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
