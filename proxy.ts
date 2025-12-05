import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt, updateToken } from "./lib/session";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;

  const accessPayload = await decrypt(accessToken).catch(() => null);
  const refreshPayload = await decrypt(refreshToken).catch(() => null);

  // ----------------------------
  // /login page → redirect if already logged in
  // ----------------------------
  if (pathname === "/login") {
    if (accessPayload || refreshPayload) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.next();
  }

  // ----------------------------
  // Only protect /admin routes
  // ----------------------------
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  // No valid token
  if (!accessPayload && !refreshPayload) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Access token valid
  if (accessPayload) {
    if (accessPayload.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // Access token invalid but refresh token valid → rotate tokens
  if (refreshPayload) {
    const refreshed = await updateToken(req);
    if (!refreshed) return NextResponse.redirect(new URL("/login", req.url));
    return NextResponse.next(); // user stays logged in
  }

  // Fallback
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
};
