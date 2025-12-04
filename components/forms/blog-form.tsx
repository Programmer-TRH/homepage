"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { NewsPostFormData, NewsPostSchema } from "@/lib/schema/news-schema";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field";
import { RichEditor } from "../editor/rich-editor";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface BlogEditorFormProps {
  postId?: string;
  initialData?: NewsPostFormData;
  mode?: "add" | "edit";
}

export function BlogEditorForm({
  postId,
  initialData,
  mode = "add",
}: BlogEditorFormProps) {
  const form = useForm<NewsPostFormData>({
    resolver: zodResolver(NewsPostSchema),
    defaultValues: initialData || {
      slug: "",
      title: "",
      description: "",
      content: "",
      image: "",
    },
  });
  const router = useRouter();

  const slug = form
    .watch("title")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const SubmitForm = async (data: NewsPostFormData) => {
    console.log("Data:", data);
    console.log("Images:", data.content);

    try {
      if (mode === "add") {
        // Create new post
        const response = await fetch("/api/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Failed to create post");

        toast.success("Post published successfully!");
      } else if (mode === "edit") {
        // Update existing post
        const response = await fetch(`/api/blog/${postId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Failed to update post");

        toast.success("Post updated successfully!");
      }

      router.push("/admin");
    } catch (error) {
      toast.error((error as Error).message);
      console.error("Error submitting post:", error);
    }
  };

  return (
    <form
      id="Editor"
      onSubmit={form.handleSubmit(SubmitForm)}
      className="space-y-8"
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Post Title</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter an engaging title..."
                className="text-lg font-semibold"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="slug"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Slug</FieldLabel>
              <Input
                {...field}
                id={field.name}
                value={slug}
                aria-invalid={fieldState.invalid}
                placeholder="Enter slug..."
                className="text-lg font-semibold"
              />
              <FieldDescription>This is for blog link</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Description</FieldLabel>

              <Textarea
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Brief summary of your post..."
                rows={3}
              />

              <FieldDescription>
                Appears in blog card (max 300 characters)
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="content"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Post Content</FieldLabel>

              <RichEditor
                content={field.value}
                onChange={field.onChange}
                aria-invalid={fieldState.invalid}
                placeholder="Write your news here..."
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="image"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Featured Image URL</FieldLabel>

              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="https://example.com/image.jpg"
              />

              <FieldDescription>
                URL to the featured image for your post
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={form.formState.isLoading}
          className="bg-primary hover:bg-primary/90"
        >
          {form.formState.isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {mode === "add"
            ? form.formState.isLoading
              ? "Publishing..."
              : "Publish Post"
            : form.formState.isLoading
            ? "Editing..."
            : "Edit Post"}
        </Button>
      </div>
    </form>
  );
}
