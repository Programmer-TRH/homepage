import AdminHeader from "@/components/admin/AdminHeader";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="w-full">
        <AdminHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
