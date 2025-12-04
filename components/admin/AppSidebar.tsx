"use client";
import Logo from "@/public/image/Logo White.png";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { NavMain } from "./NavMain";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-0 px-4 w-full border-b group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 h-16">
        <Link
          href="/"
          className="h-full flex items-center transition-all duration-200"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={720}
            height={720}
            className="w-40 h-20"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
