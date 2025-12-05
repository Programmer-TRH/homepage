"use client";
import { LogOut, User2 } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Admin } from "@/lib/types/login-types";
import { Logout } from "@/actions/auth-action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function NavAdmin() {
  const [admin, setAdmin] = useState<Admin>();
  const router = useRouter();

  useEffect(() => {
    const loadAdmin = async () => {
      const res = await fetch("/api/admin", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        await res.json();
        return;
      }

      const data = await res.json();
      setAdmin(data);
    };
    loadAdmin();
  }, []);

  const handleLogout = async () => {
    try {
      await Logout();
      toast.success("Logout successfull");
      router.replace("/login");
      return;
    } catch (error) {
      toast.error((error as Error).message);
      return;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarFallback className="rounded-lg">
            <User2 />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={"bottom"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarFallback className="rounded-lg">
                <User2 />
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{admin?.name}</span>
              <span className="truncate text-xs">{admin?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="hover:text-black" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
