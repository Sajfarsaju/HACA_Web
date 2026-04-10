"use client"

import * as React from "react"
import type { BlogBlock } from "@/lib/blog-blocks"
import { PlacementCropModal } from "@/components/admin/PlacementCropModal"
import { getCroppedPlacementImage } from "@/lib/getCroppedPlacementImage"

// 871 × 514 — matches the inline blog image aspect ratio on the static blog detail page
const BLOG_IMAGE_ASPECT = 871 / 514

function uid() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function Button({
    children,
    onClick,
    disabled,
    variant = "default",
    type = "button",
}: {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    variant?: "default" | "ghost" | "danger"
    type?: "button" | "submit"
}) {
    const base =
        "inline-flex items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold transition select-none disabled:opacity-40"
    const styles =
        variant === "danger"
            ? "border border-red-400/35 bg-red-500/10 text-red-100 hover:bg-red-500/18"
            : variant === "ghost"
              ? "border border-white/15 bg-white/[0.06] text-[#d1d5e0] hover:bg-white/10 hover:text-white"
              : "bg-gradient-to-r from-[#4C75FF] to-[#3558e6] text-white hover:brightness-110"
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles}`}>
            {children}
        </button>
    )
}

export function BlogBlockBuilder({
    value,
    onChange,
    onImageUpload,
}: {
    value: BlogBlock[]
    onChange: (next: BlogBlock[]) => void
    onImageUpload: (file: File) => Promise<string>
}) {
    const [uploadingId, setUploadingId] = React.useState<string | null>(null)
    // Crop modal state for image blocks
    const [cropSrc, setCropSrc] = React.useState<string | null>(null)
    const [cropTargetIdx, setCropTargetIdx] = React.useState<number | null>(null)

    const addHeading = (level: 1 | 2) => {
        onChange([...value, { id: uid(), type: "heading", level, text: "" }])
    }
    const addParagraph = () => {
        onChange([...value, { id: uid(), type: "paragraph", text: "" }])
    }
    const addImage = () => {
        onChange([...value, { id: uid(), type: "image", url: "", alt: "", caption: "" }])
    }
    const addList = (ordered: boolean) => {
        onChange([...value, { id: uid(), type: "list", ordered, items: [""] }])
    }
    const addCallout = () => {
        onChange([...value, { id: uid(), type: "callout", title: "", text: "" }])
    }

    const move = (from: number, to: number) => {
        if (to < 0 || to >= value.length) return
        const next = [...value]
        const [item] = next.splice(from, 1)
        next.splice(to, 0, item)
        onChange(next)
    }

    const remove = (idx: number) => {
        const next = value.filter((_, i) => i !== idx)
        onChange(next)
    }

    const update = (idx: number, patch: Partial<BlogBlock>) => {
        onChange(value.map((b, i) => (i === idx ? ({ ...b, ...patch } as BlogBlock) : b)))
    }

    const handlePickImage = (idx: number, file: File) => {
        const src = URL.createObjectURL(file)
        setCropSrc(src)
        setCropTargetIdx(idx)
    }

    const handleCropClose = () => {
        setCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null })
        setCropTargetIdx(null)
    }

    const handleCropped = async (croppedFile: File) => {
        const idx = cropTargetIdx
        setCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null })
        setCropTargetIdx(null)
        if (idx === null) return
        const block = value[idx]
        if (!block || block.type !== "image") return
        setUploadingId(block.id)
        try {
            const url = await onImageUpload(croppedFile)
            update(idx, { url })
        } finally {
            setUploadingId((prev) => (prev === block.id ? null : prev))
        }
    }

    return (
        <div className="space-y-4">
            {/* Crop modal for blog inline images */}
            {cropSrc && cropTargetIdx !== null && (
                <PlacementCropModal
                    key={cropSrc}
                    imageSrc={cropSrc}
                    open={true}
                    onClose={handleCropClose}
                    onCropped={handleCropped}
                    aspect={BLOG_IMAGE_ASPECT}
                />
            )}
            <div className="flex flex-wrap gap-2">
                <Button onClick={() => addHeading(1)}>Add H1</Button>
                <Button onClick={() => addHeading(2)}>Add H2</Button>
                <Button onClick={addParagraph}>Add Paragraph</Button>
                <Button onClick={addImage}>Add Image</Button>
                <Button onClick={() => addList(false)}>Add Bullet List</Button>
                <Button onClick={() => addList(true)}>Add Numbered List</Button>
                <Button onClick={addCallout}>Add Callout</Button>
            </div>

            {value.length === 0 ? (
                <div className="rounded-xl border border-white/15 bg-white/[0.06] p-4 text-sm text-[#9aa3b8]">
                    No blocks yet. Use the buttons above to add content.
                </div>
            ) : null}

            <div className="space-y-3">
                {value.map((block, idx) => (
                    <div
                        key={block.id}
                        className="rounded-xl border border-white/15 bg-white/[0.06] p-4 space-y-3"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9aa3b8]">
                                {idx + 1}. {block.type}
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" onClick={() => move(idx, idx - 1)} disabled={idx === 0}>
                                    ↑
                                </Button>
                                <Button
                                    variant="ghost"
                                    onClick={() => move(idx, idx + 1)}
                                    disabled={idx === value.length - 1}
                                >
                                    ↓
                                </Button>
                                <Button variant="danger" onClick={() => remove(idx)}>
                                    Remove
                                </Button>
                            </div>
                        </div>

                        {block.type === "heading" ? (
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <label className="text-xs font-medium text-[#A7ADBE]">Level</label>
                                    <select
                                        className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-xs text-white outline-none"
                                        value={block.level}
                                        onChange={(e) =>
                                            update(idx, { level: Number(e.target.value) as 1 | 2 })
                                        }
                                    >
                                        <option value={1} className="bg-[#1a1f2e] text-white">
                                            H1
                                        </option>
                                        <option value={2} className="bg-[#1a1f2e] text-white">
                                            H2
                                        </option>
                                    </select>
                                </div>
                                <input
                                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                    placeholder="Heading text…"
                                    value={block.text}
                                    onChange={(e) => update(idx, { text: e.target.value })}
                                />
                            </div>
                        ) : null}

                        {block.type === "paragraph" ? (
                            <textarea
                                rows={4}
                                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                placeholder="Paragraph…"
                                value={block.text}
                                onChange={(e) => update(idx, { text: e.target.value })}
                            />
                        ) : null}

                        {block.type === "callout" ? (
                            <div className="space-y-2">
                                <input
                                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                    placeholder="Callout title (optional)…"
                                    value={block.title ?? ""}
                                    onChange={(e) => update(idx, { title: e.target.value })}
                                />
                                <textarea
                                    rows={3}
                                    className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                    placeholder="Callout text…"
                                    value={block.text}
                                    onChange={(e) => update(idx, { text: e.target.value })}
                                />
                            </div>
                        ) : null}

                        {block.type === "list" ? (
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <label className="text-xs font-medium text-[#A7ADBE]">Type</label>
                                    <select
                                        className="rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-xs text-white outline-none"
                                        value={block.ordered ? "ordered" : "bullet"}
                                        onChange={(e) => update(idx, { ordered: e.target.value === "ordered" })}
                                    >
                                        <option value="bullet" className="bg-[#1a1f2e] text-white">
                                            Bullet
                                        </option>
                                        <option value="ordered" className="bg-[#1a1f2e] text-white">
                                            Numbered
                                        </option>
                                    </select>
                                    <Button
                                        variant="ghost"
                                        onClick={() => update(idx, { items: [...block.items, ""] })}
                                    >
                                        + Item
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    {block.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex items-start gap-2">
                                            <input
                                                className="flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                                placeholder={`Item ${itemIdx + 1}…`}
                                                value={item}
                                                onChange={(e) => {
                                                    const next = [...block.items]
                                                    next[itemIdx] = e.target.value
                                                    update(idx, { items: next })
                                                }}
                                            />
                                            <Button
                                                variant="danger"
                                                onClick={() => {
                                                    const next = block.items.filter((_, i) => i !== itemIdx)
                                                    update(idx, { items: next.length ? next : [""] })
                                                }}
                                            >
                                                ✕
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        {block.type === "image" ? (
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <label className="text-xs font-medium text-[#A7ADBE]">
                                        Upload <span className="font-normal text-[#8890a0]">(871 × 514, auto-cropped)</span>
                                    </label>
                                    <label className="cursor-pointer rounded-lg border border-white/20 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-[#d1d5e0] transition hover:bg-white/10">
                                        Choose image
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                const f = e.target.files?.[0]
                                                e.target.value = ""
                                                if (f) handlePickImage(idx, f)
                                            }}
                                            disabled={uploadingId === block.id}
                                        />
                                    </label>
                                    {uploadingId === block.id ? (
                                        <span className="text-xs text-[#9aa3b8]">Uploading…</span>
                                    ) : null}
                                </div>
                                <input
                                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                    placeholder="Image URL (auto-filled after upload)…"
                                    value={block.url}
                                    onChange={(e) => update(idx, { url: e.target.value })}
                                />
                                <div className="grid gap-2 sm:grid-cols-2">
                                    <input
                                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                        placeholder="Alt text (optional)…"
                                        value={block.alt ?? ""}
                                        onChange={(e) => update(idx, { alt: e.target.value })}
                                    />
                                    <input
                                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                                        placeholder="Caption (optional)…"
                                        value={block.caption ?? ""}
                                        onChange={(e) => update(idx, { caption: e.target.value })}
                                    />
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

