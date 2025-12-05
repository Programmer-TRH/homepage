import { isAuthenticated } from "@/dal/isAuthenticated";
import { getAdminById } from "@/services/auth-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { isAuth, id } = await isAuthenticated(req);
    if (!isAuth || !id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const admin = await getAdminById(id);
    if (!admin) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }
    return NextResponse.json(admin, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Something went wrong" },
      { status: 500 }
    );
  }
}
