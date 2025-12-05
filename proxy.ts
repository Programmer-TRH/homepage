import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt, updateToken } from "./lib/session";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;

  // No tokens at all → redirect to login
  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 1️⃣ Try to verify access token
  const verified = await decrypt(accessToken).catch(() => null);

  if (verified) {
    if (verified.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // 2️⃣ Access token failed → Try refresh token
  const refreshed = await updateToken(req);

  if (!refreshed) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const res = NextResponse.next();
  return res;
}

export const config = {
  matcher: ["/admin/:path*"],
};
