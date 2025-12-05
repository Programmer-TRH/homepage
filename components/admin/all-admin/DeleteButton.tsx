"use client";
import { DeleteAdminAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteButton({ adminId }: { adminId: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    const result = await DeleteAdminAction(adminId);
    if (!result.success) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message);
    router.refresh();
  };
  return (
    <Button size="sm" variant="ghost" onClick={handleDelete}>
      <Trash2 size={16} className="text-destructive" />
    </Button>
  );
}
