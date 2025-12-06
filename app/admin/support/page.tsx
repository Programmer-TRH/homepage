import DeleteSupportMessageButton from "@/components/admin/mesages/DeleteSupportMessageButton";
import { statusColorMap } from "@/components/shared/status-color-map";
import ViewSupport from "@/components/shared/view/view-support";
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
import { getContactMessage } from "@/services/contact";

export default async function SupportPage() {
  const { isAuth } = await isAuthenticated();
  const { data: messages } = await getContactMessage({ isAuth });

  return (
    <main className=" min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold">User Message Management</h1>
        <div className="bg-card border border-border rounded-lg overflow-hidden px-4 py-2 mt-6">
          {messages.length > 0 ? (
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
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
                      <TableCell>{message.subject}</TableCell>
                      <TableCell>{message.message}</TableCell>
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
                          <ViewSupport message={message} />
                          <DeleteSupportMessageButton messageId={message.id} />
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
