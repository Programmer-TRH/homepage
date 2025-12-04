"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Newspaper, Mail, Coins } from "lucide-react";
import { GoldRequest, UserMessage } from "@/lib/types/messages-types";
import { NewsPost } from "@/lib/types/news-types";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    newsCount: 0,
    messageCount: 0,
    requestCount: 0,
  });

  useEffect(() => {
    const savedNews = localStorage.getItem("adminNews");
    const savedMessages = localStorage.getItem("userMessages");
    const savedRequests = localStorage.getItem("goldRequests");

    const news: NewsPost[] = savedNews ? JSON.parse(savedNews) : [];
    const messages: UserMessage[] = savedMessages
      ? JSON.parse(savedMessages)
      : [];
    const requests: GoldRequest[] = savedRequests
      ? JSON.parse(savedRequests)
      : [];

    setStats({
      newsCount: news.length,
      messageCount: messages.length,
      requestCount: requests.length,
    });
  }, []);

  const statCards = [
    {
      label: "News Articles",
      value: stats.newsCount,
      icon: Newspaper,
      color: "from-amber-500 to-orange-600",
      href: "/admin-gold/news",
    },
    {
      label: "User Messages",
      value: stats.messageCount,
      icon: Mail,
      color: "from-blue-500 to-blue-600",
      href: "/admin-gold/messages",
    },
    {
      label: "Gold Requests",
      value: stats.requestCount,
      icon: Coins,
      color: "from-yellow-500 to-amber-600",
      href: "/admin-gold/requests",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back to your admin panel
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary group"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-linear-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-lg font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 p-4 rounded-lg bg-accent/50">
            <p className="text-sm text-muted-foreground">Active Requests</p>
            <p className="font-semibold">{stats.requestCount} pending review</p>
          </div>
          <div className="space-y-2 p-4 rounded-lg bg-accent/50">
            <p className="text-sm text-muted-foreground">New Messages</p>
            <p className="font-semibold">{stats.messageCount} unread</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
