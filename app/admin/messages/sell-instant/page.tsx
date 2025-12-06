import DeleteInstantSellButton from "@/components/shared/delete-button/instant-sell-delete-button";
import { statusColorMap } from "@/components/shared/status-color-map";
import ViewInstantSell from "@/components/shared/view/view-instant-sell";
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
import { itemLabelMap } from "@/lib/schema/contact-schema";
import { getInstantSellMessageService } from "@/services/instant-sell-service";

export default async function SellInstantPage() {
  const { isAuth } = await isAuthenticated();
  const { data: messages } = await getInstantSellMessageService({ isAuth });

  return (
    <main className=" min-h-screen bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold">User Sell Request Management</h1>
        <div className="bg-card border border-border rounded-lg overflow-hidden px-4 py-2 mt-6">
          {messages.length > 0 ? (
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Drop Off</TableHead>
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
                      <TableCell className="font-medium max-w-xs truncate">
                        {message.name}
                      </TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{message.phone}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap items-center gap-1 w-44">
                          {message.items.map((item) => {
                            const key = item.toLowerCase();
                            return (
                              <Badge key={key}>
                                {itemLabelMap[key] ?? key}
                              </Badge>
                            );
                          })}
                        </div>
                      </TableCell>
                      <TableCell>{message.dropOff} </TableCell>
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
                          <ViewInstantSell message={message} />
                          <DeleteInstantSellButton messageId={message.id} />
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
