import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { NavAdmin } from "./NavUser";

export default function AdminHeader() {
  return (
    <header className="w-full flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4 border-b ">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-6"
        />
      </div>
      <NavAdmin />
    </header>
  );
}
