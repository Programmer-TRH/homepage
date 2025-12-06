import DeleteAdminButton from "@/components/admin/all-admin/DeleteButton";
import CreateAdminForm from "@/components/forms/create-admin-form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { isAuthenticated } from "@/dal/isAuthenticated";
import { getAdmins } from "@/services/auth-service";

export default async function AllAdminPage() {
  const { isAuth, id } = await isAuthenticated();
  const { admins } = await getAdmins({ isAuth });

  return (
    <main className=" min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-bold">User Message Management</h1>
          <CreateAdminForm />
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden px-4 py-2 mt-6">
          {admins.length > 0 ? (
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admins.map((admin) => (
                    <TableRow
                      key={admin.id}
                      className="border-b border-border hover:bg-muted/50"
                    >
                      <TableCell className="font-medium max-w-xs truncate">
                        {admin.name}
                      </TableCell>
                      <TableCell>{admin.email}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {admin.createdAt}
                      </TableCell>
                      {admin.id !== id && (
                        <TableCell className="text-right">
                          <DeleteAdminButton adminId={admin.id} />
                        </TableCell>
                      )}
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
