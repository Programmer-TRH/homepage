import z from "zod";

export const LoginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters"),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export const CreateAdminSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be less than 50 characters")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must include at least one special character"
    )
    .regex(/^\S+$/, "Password cannot contain spaces"),
});

export type CreateAdminFormData = z.infer<typeof CreateAdminSchema>;
