"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileIcon, FileText, Upload, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// -------------------------------------
// ZOD SCHEMA (with file validation)
// -------------------------------------
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "application/pdf"];

const formSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters."),
  phone: z.string().min(8, "Phone number is not valid."),
  email: z.email("Invalid email address."),
  files: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file.size <= MAX_FILE_SIZE, "Max file size is 5MB")
        .refine(
          (file) => ACCEPTED_TYPES.includes(file.type),
          "Only JPG, PNG or PDF allowed."
        )
    )
    .min(1, "At least one file is required.")
    .max(3, "You can upload a maximum of 3 files."),
});

export default function UploadDetails() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      files: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const displayData = {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      files: data.files.map((file) => ({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        type: file.type,
      })),
    };

    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(displayData, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });

    try {
      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("phone", data.phone);
      formData.append("email", data.email);

      // Append files
      data.files.forEach((file) => {
        formData.append("files", file);
      });

      // // Send to backend
      // const response = await fetch("/api/upload", {
      //   method: "POST",
      //   body: formData,
      // });

      // if (!response.ok) {
      //   throw new Error("Upload failed");
      // }

      // const result = await response.json();

      // Show success toast
      toast.success("Form submitted successfully!", {
        description: `${data.files.length} file(s) uploaded to Cloudinary`,
      });

      console.log("Files:", data.files);
      form.reset();
    } catch (error) {
      // Show error toast
      toast.error("Upload failed", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });

      console.error("Upload error:", error);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Upload your details here:
        </h2>

        <form
          id="upload-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-linear-to-br from-[#f5f5f5] to-[#efefef] rounded-3xl p-8 md:p-12 text-black border-2 border-[#e5dcc8] shadow-lg"
        >
          <FieldGroup>
            {/* Full Name */}
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input
                    {...field}
                    id="fullName"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your Full Name here"
                    autoComplete="off"
                    className="border-gray-400 placeholder:text-gray-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your Email here"
                    autoComplete="off"
                    className="border-gray-400 placeholder:text-gray-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Phone */}
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="+1 (697) 315-4224"
                    autoComplete="off"
                    className="border-gray-400 placeholder:text-gray-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* FILE UPLOAD */}

            <Controller
              name="files"
              control={form.control}
              render={({
                field: { onChange, value, ...field },
                fieldState,
              }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Upload Files</FieldLabel>

                  {/* Upload Area */}
                  <div className="relative">
                    <label
                      htmlFor="file-upload"
                      className={cn(
                        "flex flex-col items-center justify-center w-full h-32  border-2 border-dashed rounded-lg cursor-pointer  transition-all duration-200",

                        fieldState.invalid
                          ? "border-red-400 bg-red-50 hover:bg-red-100 hover:border-red-500"
                          : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
                      )}
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Upload className="w-10 h-10 text-gray-400" />
                        <div className="text-center">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            JPG, PNG or PDF (Max 5MB, up to 3 files)
                          </p>
                        </div>
                      </div>
                    </label>

                    <Input
                      {...field}
                      id="file-upload"
                      type="file"
                      multiple
                      accept={ACCEPTED_TYPES.join(",")}
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        onChange(files);
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>

                  {/* Display selected files */}
                  {value && value.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {value.map((file, index) => {
                        const isImage = file.type.startsWith("image/");
                        const isPDF = file.type === "application/pdf";
                        const previewUrl = isImage
                          ? URL.createObjectURL(file)
                          : null;

                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              {/* Preview Thumbnail */}
                              <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                                {isImage && previewUrl ? (
                                  <Image
                                    width={480}
                                    height={480}
                                    src={previewUrl}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                    onLoad={() =>
                                      URL.revokeObjectURL(previewUrl)
                                    }
                                  />
                                ) : isPDF ? (
                                  <FileText className="w-6 h-6 text-red-600" />
                                ) : (
                                  <FileIcon className="w-6 h-6 text-gray-400" />
                                )}
                              </div>

                              {/* File Info */}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB •{" "}
                                  {file.type.split("/")[1].toUpperCase()}
                                </p>
                              </div>
                            </div>

                            {/* Remove Button */}
                            <button
                              type="button"
                              onClick={() => {
                                const newFiles = value.filter(
                                  (_, i) => i !== index
                                );
                                onChange(newFiles);
                              }}
                              className="shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        {/* Submit Button */}
        <Button
          size="lg"
          type="submit"
          form="upload-form"
          className="w-full mt-6 bg-[#c4a564] hover:bg-[#b39556] text-white font-bold py-3 px-6 rounded-lg transition duration-200"
        >
          Continue
        </Button>
      </div>
    </section>
  );
}
