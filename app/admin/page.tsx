import { Card } from "@/components/ui/card";
import { isAuthenticated } from "@/dal/isAuthenticated";
import { getDashboardStatsService } from "@/services/dashboard-stats-service";
import { Newspaper, Mail, Coins, Zap } from "lucide-react";

export default async function AdminDashboard() {
  const { isAuth } = await isAuthenticated();
  if (!isAuth) return;

  const { stats } = await getDashboardStatsService(isAuth);

  const statCards = [
    {
      label: "News Articles",
      value: stats?.newsCount ?? 0,
      icon: Newspaper,
      color: "from-purple-500 to-indigo-600",
    },
    {
      label: "User Messages",
      value: stats?.message.total ?? 0,
      icon: Mail,
      color: "from-blue-500 to-sky-600",
    },
    {
      label: "Sell Requests",
      value: stats?.sellRequest.total ?? 0,
      icon: Coins,
      color: "from-amber-500 to-orange-600",
    },
    {
      label: "Instant Sell Requests",
      value: stats?.instantSell.total ?? 0,
      icon: Zap,
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back to your admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="p-6 bg-linear-to-b from-card to-muted/30 backdrop-blur-sm shadow-md hover:shadow-xl border border-border/40 hover:border-primary/40 transition-all rounded-xl cursor-pointer"
            >
              <div className="space-y-3">
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Overview Section */}
      <Card className="p-8 shadow-md border border-border/40 bg-linear-to-br from-background to-muted/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-6">Overview</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/30 shadow-sm border border-blue-300/20">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              New User Messages
            </p>
            <p className="text-2xl font-bold text-blue-900 dark:text-blue-200 mt-1">
              {stats?.message.new}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 shadow-sm border border-amber-300/20">
            <p className="text-sm text-amber-700 dark:text-amber-300">
              New Sell Requests
            </p>
            <p className="text-2xl font-bold text-amber-900 dark:text-amber-200 mt-1">
              {stats?.sellRequest.new}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/30 shadow-sm border border-green-300/20">
            <p className="text-sm text-green-700 dark:text-green-300">
              New Instant Requests
            </p>
            <p className="text-2xl font-bold text-green-900 dark:text-green-200 mt-1">
              {stats?.instantSell.new}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
