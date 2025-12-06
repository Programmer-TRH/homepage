import { connectToDatabase } from "@/lib/db";
import { DashboardStats } from "@/lib/types/dashboard-stats";

export async function getDashboardStatsService(isAuth: boolean) {
  if (!isAuth) {
    return { success: false, message: "Unauthorized" };
  }
  const db = await connectToDatabase();

  const newsCount = await db.collection("news-posts").countDocuments();

  const messageTotal = await db.collection("contact").countDocuments();
  const messageNew = await db
    .collection("contact")
    .countDocuments({ status: "new" });

  const sellRequestTotal = await db.collection("sell-request").countDocuments();
  const sellRequestNew = await db
    .collection("sell-request")
    .countDocuments({ status: "new" });

  const instantSellTotal = await db.collection("sell-instant").countDocuments();
  const instantSellNew = await db
    .collection("sell-instant")
    .countDocuments({ status: "new" });

  return {
    success: true,
    stats: {
      newsCount,
      message: {
        total: messageTotal,
        new: messageNew,
      },
      sellRequest: {
        total: sellRequestTotal,
        new: sellRequestNew,
      },
      instantSell: {
        total: instantSellTotal,
        new: instantSellNew,
      },
    } as DashboardStats,
  };
}
