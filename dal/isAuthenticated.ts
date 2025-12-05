import "server-only";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";
import type { NextRequest } from "next/server";

export type AuthResult = {
  isAuth: boolean;
  id: string | null;
  role: string | null;
};

export async function isAuthenticated(req?: NextRequest): Promise<AuthResult> {
  const cookieStore = req ? req.cookies : await cookies();

  const accessToken = cookieStore.get("access_token")?.value;
  const session = accessToken ? await decrypt(accessToken) : null;

  if (!session) {
    return { isAuth: false, id: null, role: null };
  }

  return {
    isAuth: true,
    id: session.id,
    role: session.role,
  };
}
