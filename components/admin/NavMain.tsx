"use client";

import {
  ChevronRight,
  LayoutDashboard,
  MessageCircleMore,
  MessagesSquare,
  Newspaper,
} from "lucide-react";

import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const NavItems = [
  {
    title: "Overview",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "News",
    url: "/admin/news",
    icon: Newspaper,
    items: [
      { title: "All News", url: "/admin/news" },
      { title: "Add News", url: "/admin/news/add" },
    ],
  },
  {
    title: "Messages",
    url: "/admin/messages",
    icon: MessageCircleMore,
    items: [
      { title: "Sell Request", url: "/admin/messages/sell-request" },
      { title: "Sell Instant", url: "/admin/messages/sell-instant" },
    ],
  },
  {
    title: "Support",
    url: "/admin/support",
    icon: MessagesSquare,
  },
];

export function NavMain() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {NavItems.map((item) => {
          const isActiveMain =
            pathname === item.url ||
            item.items?.some((sub) => pathname === sub.url);

          return item.items ? (
            // HAS SUBMENU
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActiveMain} // if submenu active → auto expand
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={
                      isActiveMain ? "bg-secondary text-black font-medium" : ""
                    }
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>

                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => {
                      const isActiveSub = pathname === subItem.url;

                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            className={
                              isActiveSub
                                ? "bg-secondary text-black font-medium"
                                : ""
                            }
                          >
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            // NO SUBMENU
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                tooltip={item.title}
                className={
                  pathname === item.url
                    ? "bg-secondary text-black font-medium"
                    : ""
                }
              >
                <Link href={item.url} className="flex items-center">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
