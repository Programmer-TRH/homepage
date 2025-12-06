"use client";
import { updateContactStatus } from "@/actions/contact";
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
import { ContactMessage } from "@/lib/types/messages-types";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function ViewSupport({ message }: { message: ContactMessage }) {
  const router = useRouter();
  const [status, setStatus] = useState<ContactMessage["status"]>(
    message.status
  );
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (value: ContactMessage["status"]) => {
    setStatus(value);
  };

  const handleSave = async () => {
    setIsUpdating(true);

    const res = await updateContactStatus({
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

      <DialogContent className="w-[90vw] p-8 h-[80vh] max-h-[80vh] overflow-hidden mx-auto sm:w-2xl">
        <ScrollArea className="h-full overflow-auto px-4 py-8">
          <DialogHeader>
            <DialogTitle>{`${message.name}'s Sell message`}</DialogTitle>
            <DialogDescription>
              This is the sell message of {message.name}. Update the status if
              need.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4 space-y-4">
            <p>
              <strong>Name:</strong> {message.name}
            </p>
            <p>
              <strong>Email:</strong> {message.email}
            </p>
            <p>
              <strong>Subject:</strong> {message.subject}
            </p>
            <p>
              <strong>Message:</strong> {message.message}
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
                  Update the status of this sell message.
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
