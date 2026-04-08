"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useCallback, useEffect, useRef } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface BlogEditorProps {
  value: string;
  onChange: (html: string) => void;
  /**
   * Called when the user picks an image via the toolbar button.
   * Should upload the file and resolve with the public image URL.
   * If omitted, inline image insertion is disabled.
   */
  onImageUpload?: (file: File) => Promise<string>;
}

// ── Toolbar button ────────────────────────────────────────────────────────────

function ToolbarBtn({
  onClick,
  active,
  title,
  disabled,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition select-none disabled:opacity-40 ${
        active
          ? "bg-[#4C75FF]/30 text-white ring-1 ring-[#4C75FF]/50"
          : "text-[#A7ADBE] hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function BlogEditor({ value, onChange, onImageUpload }: BlogEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadingRef  = useRef(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        bulletList: {},
        orderedList: {},
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[#4C75FF] underline underline-offset-2",
        },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: {
          // Responsive by default — matches the prose class on the public page
          class: "w-full h-auto rounded-lg my-4 block",
        },
      }),
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class:
          "min-h-[260px] px-4 py-3 text-sm text-white outline-none prose prose-invert max-w-none " +
          "prose-headings:text-white prose-p:text-[#d1d5e0] prose-li:text-[#d1d5e0] " +
          "prose-h2:text-base prose-h3:text-sm prose-h2:font-semibold prose-h3:font-medium " +
          "prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-5 prose-ol:pl-5 " +
          "prose-img:w-full prose-img:h-auto prose-img:rounded-lg",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  // Reset when value is cleared externally (form reset)
  useEffect(() => {
    if (!editor) return;
    if (value === "" && editor.getHTML() !== "<p></p>") {
      editor.commands.clearContent();
    }
  }, [value, editor]);

  // ── Link handler ─────────────────────────────────────────────────────────────
  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL:", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  // ── Image handler ────────────────────────────────────────────────────────────
  const triggerImagePick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      // Reset so the same file can be re-picked later
      e.target.value = "";
      if (!file || !onImageUpload) return;
      if (uploadingRef.current) return;

      uploadingRef.current = true;
      try {
        const url = await onImageUpload(file);
        if (url && editor) {
          editor.chain().focus().setImage({ src: url, alt: file.name }).run();
        }
      } catch (err) {
        console.error("Image upload failed:", err);
      } finally {
        uploadingRef.current = false;
      }
    },
    [editor, onImageUpload]
  );

  if (!editor) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-white/20 bg-white/[0.07] backdrop-blur-sm">
      {/* Hidden file input for image picking */}
      {onImageUpload && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-white/12 bg-white/[0.04] px-3 py-2">
        {/* Headings */}
        <ToolbarBtn
          title="Heading 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </ToolbarBtn>
        <ToolbarBtn
          title="Heading 3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          H3
        </ToolbarBtn>

        <span className="mx-1 h-4 w-px bg-white/15" />

        {/* Bold */}
        <ToolbarBtn
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <span className="font-bold">B</span>
        </ToolbarBtn>

        <span className="mx-1 h-4 w-px bg-white/15" />

        {/* Lists */}
        <ToolbarBtn
          title="Bullet list"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • List
        </ToolbarBtn>
        <ToolbarBtn
          title="Ordered list"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          1. List
        </ToolbarBtn>

        <span className="mx-1 h-4 w-px bg-white/15" />

        {/* Link */}
        <ToolbarBtn
          title="Insert / edit link"
          active={editor.isActive("link")}
          onClick={setLink}
        >
          🔗 Link
        </ToolbarBtn>
        {editor.isActive("link") && (
          <ToolbarBtn
            title="Remove link"
            onClick={() =>
              editor.chain().focus().extendMarkRange("link").unsetLink().run()
            }
          >
            ✕ Unlink
          </ToolbarBtn>
        )}

        {/* Image — only shown when handler is provided */}
        {onImageUpload && (
          <>
            <span className="mx-1 h-4 w-px bg-white/15" />
            <ToolbarBtn
              title="Insert inline image"
              onClick={triggerImagePick}
            >
              🖼 Image
            </ToolbarBtn>
          </>
        )}
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} />
    </div>
  );
}
