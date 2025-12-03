"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { Placeholder, Dropcursor } from "@tiptap/extensions";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import FileHandler from "@tiptap/extension-file-handler";
import { EditorToolbar } from "./editor-toolbar";

interface EditorProps {
  content?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  editable?: boolean;
}

export function RichEditor({
  content = "",
  onChange,
  placeholder = "Start writing...",
  editable = true,
}: EditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight.configure({ multicolor: false }),

      Image.configure({
        allowBase64: true,
        resize: {
          enabled: true,
          alwaysPreserveAspectRatio: true,
        },
      }),

      FileHandler.configure({
        allowedMimeTypes: ["image/png", "image/jpeg", "image/webp"],
        onDrop: (currentEditor, files, pos) => {
          files.forEach((file) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: "image",
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
      }),
      Dropcursor,
      Placeholder.configure({ placeholder }),
    ],
    content,
    editable,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none ",
      },
    },
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
  });

  if (!editable) {
    return <EditorContent editor={editor} />;
  }

  return (
    <div className="border rounded-lg overflow-hidden ">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
