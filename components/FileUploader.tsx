// FileUploader.tsx
"use client";

import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react";
import { formatBytes, useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";

interface FileUploaderProps {
  value: File[];
  onChange: (files: File[]) => void;
}

export default function FileUploader({ value, onChange }: FileUploaderProps) {
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024;
  const maxFiles = 3;

  const [
    { files, isDragging, errors },
    {
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      clearFiles,
      getInputProps,
    },
  ] = useFileUpload({
    accept: "image/jpeg,image/png,application/pdf",
    maxFiles,
    maxSize,
    multiple: true,
  });

  // Sync internal state with RHF value
  useEffect(() => {
    onChange(files.map((f) => f.file));
  }, [files, onChange]);

  return (
    <div className="flex flex-col gap-2">
      {/* Drop area */}
      <div
        className="relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-input border-dashed p-4 transition-colors data-[dragging=true]:bg-accent/50"
        data-dragging={isDragging || undefined}
        data-files={files.length > 0 || undefined}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input {...getInputProps()} className="sr-only" />
        <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
          <div
            aria-hidden="true"
            className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
          >
            <ImageIcon className="size-4 opacity-60" />
          </div>
          <p className="mb-1.5 font-medium text-sm">Drop your files here</p>
          <p className="text-muted-foreground text-xs">
            JPG, PNG or PDF (max. {maxSizeMB}MB)
          </p>
          <Button className="mt-4" onClick={openFileDialog} variant="outline">
            <UploadIcon aria-hidden="true" className="-ms-1 opacity-60" />
            Select files
          </Button>
        </div>
      </div>

      {errors.length > 0 && (
        <div
          className="flex items-center gap-1 text-destructive text-xs"
          role="alert"
        >
          <AlertCircleIcon className="size-3 shrink-0" />
          <span>{errors[0]}</span>
        </div>
      )}

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file) => (
            <div
              className="flex items-center justify-between gap-2 rounded-lg border bg-background p-2 pe-3"
              key={file.id}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                {file.file.type.startsWith("image") && (
                  <div className="aspect-square shrink-0 rounded bg-accent">
                    <Image
                      width={720}
                      height={480}
                      alt={file.file.name}
                      className="size-10 rounded-[inherit] object-cover"
                      src={file.preview!}
                    />
                  </div>
                )}
                <div className="flex min-w-0 flex-col gap-0.5">
                  <p className="truncate font-medium text-[13px]">
                    {file.file.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {formatBytes(file.file.size)}
                  </p>
                </div>
              </div>

              <Button
                aria-label="Remove file"
                className="-me-2 size-8 text-muted-foreground/80 hover:bg-transparent hover:text-foreground"
                onClick={() => removeFile(file.id)}
                size="icon"
                variant="ghost"
              >
                <XIcon aria-hidden="true" />
              </Button>
            </div>
          ))}

          {files.length > 1 && (
            <div>
              <Button onClick={clearFiles} size="sm" variant="outline">
                Remove all files
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
