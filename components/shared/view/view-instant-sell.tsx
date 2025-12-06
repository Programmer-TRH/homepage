"use client";
import { updateInstantSellStatus } from "@/actions/instant-sell-action";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { itemLabelMap } from "@/lib/schema/contact-schema";
import { InstantSellRequest, UploadDetails } from "@/lib/types/messages-types";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function ViewInstantSell({
  message,
}: {
  message: InstantSellRequest;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<InstantSellRequest["status"]>(
    message.status
  );
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (value: UploadDetails["status"]) => {
    setStatus(value);
  };

  const handleSave = async () => {
    setIsUpdating(true);

    const res = await updateInstantSellStatus({
      messageId: message.id,
      status,
    });
    if (!res.success) {
      toast.error(res.message);
      return;
    }
    toast.success("Status updated successfully!");
    setIsUpdating(false);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          <Eye size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[90vw] h-[80vh] p-8 max-h-[80vh] overflow-hidden mx-auto sm:w-2xl">
        <ScrollArea className="h-full overflow-auto px-4 py-8">
          <DialogHeader>
            <DialogTitle>{`${message.name}'s Sell Request`}</DialogTitle>
            <DialogDescription>
              This is the sell request of {message.name}. Update the status if
              need.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4 space-y-4">
            <p>
              <strong>Email:</strong> {message.email}
            </p>
            <p>
              <strong>Phone:</strong> {message.phone}
            </p>
            <div className="flex gap-1 items-center">
              <strong>Items:</strong>
              <div className="flex flex-wrap items-center gap-1 w-44">
                {message.items.map((item) => {
                  const key = item.toLowerCase();
                  return <Badge key={key}>{itemLabelMap[key] ?? item}</Badge>;
                })}
              </div>
            </div>
            <p>
              <strong>Drop Off:</strong> {message.dropOff}
            </p>
            <p>
              <strong>Phone:</strong> {message.phone}
            </p>
            <p>
              <strong>Created At: </strong>
              {message.createdAt}
            </p>

            <section className="my-4 pb-4">
              <Field>
                <FieldLabel>
                  <strong className="text-lg">Status</strong>
                </FieldLabel>
                <Select value={status} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="reviewed">Reviewed</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                  </SelectContent>
                </Select>
                <FieldDescription>
                  Update the status of this sell request.
                </FieldDescription>
              </Field>
            </section>
          </div>

          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant={"outline"}>Close</Button>
            </DialogClose>
            <Button onClick={handleSave} disabled={isUpdating}>
              {isUpdating && <Spinner />}
              <span aria-live="polite">
                {isUpdating ? "Processing" : "Save Status"}
              </span>
            </Button>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
