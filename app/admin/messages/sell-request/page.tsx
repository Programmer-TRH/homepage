import DeleteRequestButton from "@/components/admin/mesages/DeleteRequestButton";
import { statusColorMap } from "@/components/shared/status-color-map";
import ViewSellRequest from "@/components/shared/view/view-sell-request";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { isAuthenticated } from "@/dal/isAuthenticated";
import { FormatDateTime } from "@/lib/format-date-time";
import { getRequestService } from "@/services/request-service";
import Image from "next/image";

export default async function SellRequestPage() {
  const { isAuth } = await isAuthenticated();
  const { list: messages } = await getRequestService(isAuth);

  return (
    <main className=" min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold">User Sell Request Management</h1>
        <div className="bg-card border border-border rounded-lg overflow-hidden px-4 py-2 mt-6">
          {messages.length > 0 ? (
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Images</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((message) => (
                    <TableRow
                      key={message.id}
                      className="border-b border-border hover:bg-muted/50"
                    >
                      <TableCell>
                        <Image
                          src={message.images[0].url ?? message.images[0]}
                          alt="Details images"
                          width={1080}
                          height={1080}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell className="font-medium max-w-xs truncate">
                        {message.name}
                      </TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{message.phone}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={statusColorMap[message.status] || ""}
                        >
                          {message.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {FormatDateTime(message.createdAt)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <ViewSellRequest request={message} />
                          <DeleteRequestButton requestId={message.id} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No messages yet</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
