"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { format } from "date-fns";
import { Edit, Trash2, Plus, Eye } from "lucide-react";
import { NewsPost } from "@/lib/types/news-types";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async () => {
    if (!deleteId) return;

    await fetch(`/api/blog/${deleteId}`, { method: "DELETE" });
    setPosts(posts.filter((p) => p.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <p className="text-muted-foreground">
              Create and manage your blog posts
            </p>
          </div>
          <Link href="/admin/news/add">
            <Button className="gap-2">
              <Plus size={20} />
              New Post
            </Button>
          </Link>
        </div>

        {/* Posts Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden px-4 py-2">
          {posts.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow
                      key={post.id}
                      className="border-b border-border hover:bg-muted/50"
                    >
                      <TableCell className="font-medium max-w-xs truncate">
                        {post.title}
                      </TableCell>

                      <TableCell className="text-sm text-muted-foreground">
                        {format(new Date(post.createdAt), "MMM dd, yyyy")}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/news/${post.slug}`}>
                            <Button size="sm" variant="ghost">
                              <Eye size={16} />
                            </Button>
                          </Link>
                          <Link href={`/admin/news/add/${post.id}`}>
                            <Button size="sm" variant="ghost">
                              <Edit size={16} />
                            </Button>
                          </Link>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setDeleteId(post.id)}
                          >
                            <Trash2 size={16} className="text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No posts yet</p>
              <Link href="/admin/news/add">
                <Button>Create your first post</Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation */}
      <AlertDialog
        open={deleteId !== null}
        onOpenChange={() => setDeleteId(null)}
      >
        <AlertDialogContent>
          <AlertDialogTitle>Delete Post?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The post will be permanently deleted.
          </AlertDialogDescription>
          <div className="flex justify-end gap-4">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
