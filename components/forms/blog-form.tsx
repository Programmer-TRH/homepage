"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { NewsPostFormData, NewsPostSchema } from "@/lib/schema/news-schema";
import { BLOG_CATEGORIES } from "@/lib/types/blog-types";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field";
import { RichEditor } from "../editor/rich-editor";

interface BlogEditorProps {
  initialData?: any;
  onSubmit: (data: NewsPostFormData) => Promise<void>;
  isLoading?: boolean;
}

export function BlogEditor({
  initialData,
  onSubmit,
  isLoading,
}: BlogEditorProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsPostFormData>({
    resolver: zodResolver(NewsPostSchema),
    defaultValues: initialData || {
      title: "",
      excerpt: "",
      content: "",
      category: "Technology",
      author: "",
      image: "",
      featured: false,
      published: false,
    },
  });

  const handleDraft = () => {
    const currentValues = form.getValues();
    onSubmit({
      ...currentValues,
      published: false,
    });
  };

  const SubmitForm = async (data: NewsPostFormData) => {
    console.log("Data:", data);
    console.log("Images:", data.content);

    try {
      setIsSubmitting(true);

      await onSubmit({
        ...data,
        published: true,
      });
    } catch (error) {
      console.error("Error submitting post:", error);
    } finally {
      setIsSubmitting(false);
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
          name="excerpt"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name}>Excerpt</FieldLabel>

              <Textarea
                {...field}
                id={field.name}
                placeholder="Brief summary of your post..."
                rows={3}
              />

              <FieldDescription>
                Appears in blog listings (max 300 characters)
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
                placeholder="Write your news here..."
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            control={form.control}
            name="category"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor={field.name}>Category</FieldLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>

                  <SelectContent id={field.name}>
                    {BLOG_CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            control={form.control}
            name="author"
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Author</FieldLabel>

                <Input placeholder="Your name" {...field} />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <Controller
          control={form.control}
          name="image"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Featured Image URL</FieldLabel>

              <Input placeholder="https://example.com/image.jpg" {...field} />

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
          disabled={isSubmitting || isLoading}
          className="bg-primary hover:bg-primary/90"
        >
          {(isSubmitting || isLoading) && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {isSubmitting || isLoading ? "Publishing..." : "Publish Post"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleDraft}
          disabled={isSubmitting || isLoading}
        >
          Save Draft
        </Button>
      </div>
    </form>
  );
}
