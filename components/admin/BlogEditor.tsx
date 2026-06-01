"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Node, mergeAttributes } from "@tiptap/core";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import { PlacementCropModal } from "@/components/admin/PlacementCropModal";
import { useCallback, useEffect, useRef, useState } from "react";

// ── Custom VideoEmbed TipTap node ─────────────────────────────────────────────
// Renders as <video> for uploaded files or <iframe> for YouTube/Vimeo embeds.

function getYouTubeEmbedUrl(url: string): string | null {
  const m = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function getVimeoEmbedUrl(url: string): string | null {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? `https://player.vimeo.com/video/${m[1]}` : null;
}

const VideoEmbed = Node.create({
  name: "videoEmbed",
  group: "block",
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      src:   { default: null },
      embed: { default: false },
    };
  },

  parseHTML() {
    return [
      { tag: "video[data-tiptap-video]", getAttrs: (el) => ({ src: (el as HTMLElement).getAttribute("src"), embed: false }) },
      { tag: "iframe[data-tiptap-video]", getAttrs: (el) => ({ src: (el as HTMLElement).getAttribute("src"), embed: true }) },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    if (HTMLAttributes.embed) {
      return ["iframe", mergeAttributes({
        "data-tiptap-video": "",
        src: HTMLAttributes.src,
        allowfullscreen: "true",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        frameborder: "0",
        class: "w-full rounded-lg my-4 block",
        style: "aspect-ratio:16/9;display:block;",
      })];
    }
    return ["video", mergeAttributes({
      "data-tiptap-video": "",
      src: HTMLAttributes.src,
      controls: "true",
      preload: "metadata",
      class: "w-full h-auto rounded-lg my-4 block bg-black",
    })];
  },
});

// ── Types ─────────────────────────────────────────────────────────────────────

export interface BlogEditorProps {
  value: string;
  onChange: (html: string) => void;
  /**
   * Called when the user inserts an image (toolbar or paste).
   * Should upload the file and resolve with the public URL.
   * If omitted, image insertion is disabled.
   */
  onImageUpload?: (file: File) => Promise<string>;
  /**
   * Called when the user uploads a video file via the toolbar.
   * Should upload the file and resolve with the public URL.
   * If omitted, only URL-based video embeds are available.
   */
  onVideoUpload?: (file: File) => Promise<string>;
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

export function BlogEditor({ value, onChange, onImageUpload, onVideoUpload }: BlogEditorProps) {
  const fileInputRef      = useRef<HTMLInputElement>(null);
  const videoFileInputRef = useRef<HTMLInputElement>(null);
  const uploadingRef      = useRef(false);
  const [videoUploading, setVideoUploading] = useState(false);

  // Crop modal state — used for toolbar image button and single-file pastes
  const [cropOpen, setCropOpen] = useState(false);
  const [cropSrc, setCropSrc]   = useState<string | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        bulletList: {},
        orderedList: {},
        blockquote: {},
        link: false,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-[#4C75FF] underline underline-offset-2" },
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
        HTMLAttributes: { class: "w-full h-auto rounded-lg my-4 block" },
      }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
      VideoEmbed,
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class:
          "min-h-[260px] px-4 py-3 text-sm text-white outline-none prose prose-invert max-w-none " +
          "prose-headings:text-white prose-p:text-[#d1d5e0] prose-li:text-[#d1d5e0] " +
          "prose-h1:text-3xl prose-h1:font-bold prose-h1:leading-tight " +
          "prose-h2:text-2xl prose-h2:font-bold prose-h2:leading-tight " +
          "prose-h3:text-xl prose-h3:font-semibold prose-h3:leading-tight " +
          "prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-5 prose-ol:pl-5 " +
          "prose-blockquote:border-l-2 prose-blockquote:border-[#4C75FF]/50 prose-blockquote:pl-3 prose-blockquote:italic prose-blockquote:text-[#d1d5e0] " +
          "prose-img:w-full prose-img:h-auto prose-img:rounded-lg",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  // Sync editor when value is set externally (form reset or edit mode load)
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value === "") {
      if (current !== "<p></p>") editor.commands.clearContent();
    } else if (value !== current) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [value, editor]);

  // ── Link ──────────────────────────────────────────────────────────────────────
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

  // ── Image — open file picker ──────────────────────────────────────────────────
  const triggerImagePick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  // File picked via toolbar → open cropper
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file || !onImageUpload) return;
      const src = URL.createObjectURL(file);
      setCropSrc(src);
      setCropOpen(true);
    },
    [onImageUpload]
  );

  // After cropping → upload → insert
  const handleCropped = useCallback(
    async (file: File) => {
      setCropOpen(false);
      setCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
      if (!onImageUpload || uploadingRef.current || !editor) return;
      uploadingRef.current = true;
      try {
        const url = await onImageUpload(file);
        if (url) editor.chain().focus().setImage({ src: url, alt: file.name }).run();
      } catch (err) {
        console.error("Image upload failed:", err);
      } finally {
        uploadingRef.current = false;
      }
    },
    [editor, onImageUpload]
  );

  // ── Video — insert by URL (YouTube/Vimeo) ────────────────────────────────────
  const insertVideoUrl = useCallback(() => {
    if (!editor) return;
    const raw = window.prompt("Paste a YouTube or Vimeo URL:");
    if (!raw) return;
    const url = raw.trim();
    const embedUrl = getYouTubeEmbedUrl(url) ?? getVimeoEmbedUrl(url);
    if (!embedUrl) {
      window.alert("Unrecognised URL. Please enter a YouTube or Vimeo link.");
      return;
    }
    editor.chain().focus().insertContent({
      type: "videoEmbed",
      attrs: { src: embedUrl, embed: true },
    }).run();
  }, [editor]);

  // ── Video — upload file ────────────────────────────────────────────────────
  const triggerVideoPick = useCallback(() => {
    videoFileInputRef.current?.click();
  }, []);

  const handleVideoFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file || !onVideoUpload || !editor) return;
      setVideoUploading(true);
      try {
        const url = await onVideoUpload(file);
        if (url) {
          editor.chain().focus().insertContent({
            type: "videoEmbed",
            attrs: { src: url, embed: false },
          }).run();
        }
      } catch (err) {
        console.error("Video upload failed:", err);
      } finally {
        setVideoUploading(false);
      }
    },
    [editor, onVideoUpload]
  );

  // ── Paste handler ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!editor || !onImageUpload) return;
    const dom = editor.view.dom as HTMLElement;

    const handlePaste = async (event: ClipboardEvent) => {
      const cd = event.clipboardData;
      if (!cd) return;

      const html = cd.getData("text/html");
      const hasHtmlImages = /<img[\s>]/i.test(html);

      // Case 1: no HTML images → single raw image file → open cropper
      if (!hasHtmlImages) {
        const fileItem = Array.from(cd.items).find((i) => i.type.startsWith("image/"));
        if (!fileItem) return;
        const file = fileItem.getAsFile();
        if (!file || uploadingRef.current) return;
        event.preventDefault();
        const src = URL.createObjectURL(file);
        setCropSrc(src);
        setCropOpen(true);
        return;
      }

      // Case 2: HTML with images (Google Docs, web copy) → upload all, no crop
      event.preventDefault();
      const parsed = new DOMParser().parseFromString(html, "text/html");
      const imgs = Array.from(parsed.querySelectorAll("img"));

      await Promise.all(
        imgs.map(async (img) => {
          const src = img.getAttribute("src") ?? "";
          if (!src) { img.remove(); return; }
          try {
            const res = await fetch(src.startsWith("data:") ? src : src);
            if (!res.ok) throw new Error("fetch-failed");
            const blob = await res.blob();
            const ext = blob.type.split("/")[1] || "png";
            const file = new File([blob], `pasted-image.${ext}`, { type: blob.type });
            const uploadedUrl = await onImageUpload(file);
            if (uploadedUrl) img.setAttribute("src", uploadedUrl);
            else img.remove();
          } catch {
            // CORS / network failure — keep original src as fallback
          }
        })
      );

      editor.chain().focus().insertContent(parsed.body.innerHTML).run();
    };

    dom.addEventListener("paste", handlePaste);
    return () => dom.removeEventListener("paste", handlePaste);
  }, [editor, onImageUpload]);

  if (!editor) return null;

  const inTable = editor.isActive("table");

  return (
    <>
      {/* Crop modal — shown when user picks or pastes a single image */}
      {cropSrc && (
        <PlacementCropModal
          imageSrc={cropSrc}
          open={cropOpen}
          onClose={() => {
            setCropOpen(false);
            setCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
          }}
          onCropped={handleCropped}
          aspect={16 / 9}
        />
      )}

      <div className="overflow-hidden rounded-xl border border-white/20 bg-white/[0.07] backdrop-blur-sm">
        {/* Hidden file inputs */}
        {onImageUpload && (
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        )}
        {onVideoUpload && (
          <input
            ref={videoFileInputRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideoFileChange}
          />
        )}

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 border-b border-white/12 bg-white/[0.04] px-3 py-2">
          {/* Headings */}
          <ToolbarBtn
            title="Heading 1"
            active={editor.isActive("heading", { level: 1 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          >H1</ToolbarBtn>
          <ToolbarBtn
            title="Heading 2"
            active={editor.isActive("heading", { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >H2</ToolbarBtn>
          <ToolbarBtn
            title="Heading 3"
            active={editor.isActive("heading", { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          >H3</ToolbarBtn>

          <span className="mx-1 h-4 w-px bg-white/15" />

          {/* Bold + Italic */}
          <ToolbarBtn
            title="Bold"
            active={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          ><span className="font-bold">B</span></ToolbarBtn>
          <ToolbarBtn
            title="Italic"
            active={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          ><span className="italic">I</span></ToolbarBtn>

          <span className="mx-1 h-4 w-px bg-white/15" />

          {/* Lists */}
          <ToolbarBtn
            title="Bullet list"
            active={editor.isActive("bulletList")}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >• List</ToolbarBtn>
          <ToolbarBtn
            title="Ordered list"
            active={editor.isActive("orderedList")}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >1. List</ToolbarBtn>

          <span className="mx-1 h-4 w-px bg-white/15" />

          {/* Blockquote */}
          <ToolbarBtn
            title="Blockquote"
            active={editor.isActive("blockquote")}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >❝ Quote</ToolbarBtn>

          <span className="mx-1 h-4 w-px bg-white/15" />

          {/* Link */}
          <ToolbarBtn
            title="Insert / edit link"
            active={editor.isActive("link")}
            onClick={setLink}
          >🔗 Link</ToolbarBtn>
          {editor.isActive("link") && (
            <ToolbarBtn
              title="Remove link"
              onClick={() => editor.chain().focus().extendMarkRange("link").unsetLink().run()}
            >✕ Unlink</ToolbarBtn>
          )}

          {/* Image */}
          {onImageUpload && (
            <>
              <span className="mx-1 h-4 w-px bg-white/15" />
              <ToolbarBtn title="Insert image (opens cropper)" onClick={triggerImagePick}>
                🖼 Image
              </ToolbarBtn>
            </>
          )}

          {/* Video */}
          <span className="mx-1 h-4 w-px bg-white/15" />
          <ToolbarBtn title="Insert YouTube or Vimeo embed" onClick={insertVideoUrl}>
            📹 Embed
          </ToolbarBtn>
          {onVideoUpload && (
            <ToolbarBtn
              title="Upload video file (mp4, mov, webm)"
              onClick={triggerVideoPick}
              disabled={videoUploading}
            >
              {videoUploading ? "Uploading…" : "⬆ Video"}
            </ToolbarBtn>
          )}

          {/* Table — insert button always visible; editing controls appear when inside a table */}
          <span className="mx-1 h-4 w-px bg-white/15" />
          <ToolbarBtn
            title="Insert new 3×3 table with header row"
            onClick={() =>
              editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
            }
          >⊞ Table</ToolbarBtn>
          {inTable && (
            <>
              <span className="mx-1 h-4 w-px bg-white/15" />
              <ToolbarBtn title="Add row below" onClick={() => editor.chain().focus().addRowAfter().run()}>+Row</ToolbarBtn>
              <ToolbarBtn title="Delete current row" onClick={() => editor.chain().focus().deleteRow().run()}>−Row</ToolbarBtn>
              <ToolbarBtn title="Add column right" onClick={() => editor.chain().focus().addColumnAfter().run()}>+Col</ToolbarBtn>
              <ToolbarBtn title="Delete current column" onClick={() => editor.chain().focus().deleteColumn().run()}>−Col</ToolbarBtn>
              <ToolbarBtn title="Delete table" onClick={() => editor.chain().focus().deleteTable().run()}>✕ Tbl</ToolbarBtn>
            </>
          )}
        </div>

        {/* Editor area */}
        <EditorContent editor={editor} />
      </div>
    </>
  );
}
