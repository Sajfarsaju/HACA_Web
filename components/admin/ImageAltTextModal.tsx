"use client";

import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  mode: "insert" | "edit";
  initialValue: string;
  /** Preview of the exact image this alt text applies to, so it's never ambiguous which one is being edited. */
  imageSrc?: string | null;
  onCancel: () => void;
  onConfirm: (value: string) => void;
};

/** Small modal for adding/editing an in-body content image's alt text (accessibility & SEO). */
export function ImageAltTextModal({ open, mode, initialValue, imageSrc, onCancel, onConfirm }: Props) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (open) setValue(initialValue);
  }, [open, initialValue]);

  if (!open) return null;

  const title = mode === "insert" ? "Add alt text" : "Edit alt text";
  const confirmLabel = mode === "insert" ? "Insert image" : "Save";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div className="relative flex w-full max-w-md flex-col gap-4 rounded-2xl border border-white/20 bg-white/[0.12] p-5 shadow-xl shadow-black/15 backdrop-blur-2xl">
        <div>
          <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">{title}</h2>
          <p className="mt-1 text-xs leading-relaxed text-[#A7ADBE]">
            Describe this image for accessibility &amp; SEO. Optional — you can leave it blank for a purely decorative image.
          </p>
        </div>

        {/* Preview of the exact image this alt text will apply to — avoids any ambiguity when a body has several images. */}
        {imageSrc && (
          <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/20 p-2">
            {/* Plain <img>, not next/image: imageSrc is an arbitrary uploaded/object URL, not a Next-optimizable static path. */}
            <img
              src={imageSrc}
              alt=""
              className="h-16 w-24 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
            />
            <span className="min-w-0 truncate text-[11px] text-[#8890a0]">This is the image you're editing</span>
          </div>
        )}

        <input
          type="text"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. Student presenting final project to mentors"
          className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none focus:border-[#4C75FF]/60"
          onKeyDown={(e) => {
            if (e.key === "Enter") { e.preventDefault(); onConfirm(value); }
            if (e.key === "Escape") { e.preventDefault(); onCancel(); }
          }}
        />

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
          <button
            type="button"
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-[#d1d5e0] backdrop-blur-sm transition hover:bg-white/18 hover:text-white"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110"
            onClick={() => onConfirm(value)}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
