"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BlogEditor } from "@/components/admin/BlogEditor";
import { PlacementCropModal } from "@/components/admin/PlacementCropModal";
import { sanitizeSlug } from "@/lib/slug";

const SCHOOL_OPTIONS = ["Marketing School", "Design School", "Tech School"] as const;

type CaseStudyDoc = {
  _id: string;
  title: string;
  slug: string;
  school: string;
  authorName: string;
  authorRole?: string;
  authorBio?: string;
  authorPhotoUrl?: string;
  readTime?: string;
  studentName?: string;
  batch?: string;
  youtubeUrl?: string;
  content?: string;
  bannerUrl?: string;
  bannerAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
};

type Props = {
  token: string;
  backendUrl: string;
  showToast: (msg: string, type?: "success" | "error") => void;
};

const EMPTY_FORM = {
  title: "",
  slug: "",
  school: "",
  authorName: "",
  authorRole: "",
  authorBio: "",
  readTime: "",
  studentName: "",
  batch: "",
  youtubeUrl: "",
  content: "",
  bannerAlt: "",
  metaTitle: "",
  metaDescription: "",
};

export function CaseStudiesAdminSection({ token, backendUrl, showToast }: Props) {
  const [items, setItems] = useState<CaseStudyDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [editingId, setEditingId] = useState<string | null>(null);

  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [bannerCropOpen, setBannerCropOpen] = useState(false);
  const [bannerCropSrc, setBannerCropSrc] = useState<string | null>(null);

  const [authorPhotoFile, setAuthorPhotoFile] = useState<File | null>(null);
  const [authorPhotoUrl, setAuthorPhotoUrl] = useState("");
  const [authorPhotoCropOpen, setAuthorPhotoCropOpen] = useState(false);
  const [authorPhotoCropSrc, setAuthorPhotoCropSrc] = useState<string | null>(null);

  const formRef = useRef<HTMLDivElement>(null);
  const headers = { Authorization: `Bearer ${token}` };

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/admin/case-studies`, { headers });
      const data = await res.json();
      setItems(data.items ?? []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function resetForm() {
    setForm({ ...EMPTY_FORM });
    setEditingId(null);
    setBannerFile(null);
    setAuthorPhotoFile(null);
    setAuthorPhotoUrl("");
  }

  function cancelEdit() {
    resetForm();
  }

  function handleBannerPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f || !f.type.startsWith("image/")) {
      showToast("Please choose an image file.", "error");
      return;
    }
    setBannerCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
    setBannerCropOpen(true);
  }

  function handleBannerCropClose() {
    setBannerCropOpen(false);
    setBannerCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
  }

  function handleBannerCropped(file: File) {
    setBannerCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
    setBannerCropOpen(false);
    setBannerFile(file);
  }

  function handleAuthorPhotoPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f || !f.type.startsWith("image/")) {
      showToast("Please choose an image file.", "error");
      return;
    }
    setAuthorPhotoCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
    setAuthorPhotoCropOpen(true);
  }

  function handleAuthorPhotoCropClose() {
    setAuthorPhotoCropOpen(false);
    setAuthorPhotoCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
  }

  function handleAuthorPhotoCropped(file: File) {
    setAuthorPhotoCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
    setAuthorPhotoCropOpen(false);
    setAuthorPhotoFile(file);
  }

  async function handleImageUpload(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("photo", file);
    const res = await fetch(`${backendUrl}/api/admin/upload`, { method: "POST", headers, body: fd });
    const data = await res.json();
    if (!res.ok || !data.url) throw new Error(data.error || "Upload failed");
    return data.url as string;
  }

  async function handleVideoUpload(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("video", file);
    const res = await fetch(`${backendUrl}/api/admin/upload-video`, { method: "POST", headers, body: fd });
    const data = await res.json();
    if (!res.ok || !data.url) throw new Error(data.error || "Upload failed");
    return data.url as string;
  }

  async function startEdit(item: CaseStudyDoc) {
    try {
      const slug = item.slug || item._id;
      const res = await fetch(`${backendUrl}/api/admin/public-case-studies/${slug}`);
      const data = await res.json();
      const b: CaseStudyDoc = data.item ?? item;
      setForm({
        title: b.title || "",
        slug: b.slug || "",
        school: b.school || "",
        authorName: b.authorName || "",
        authorRole: b.authorRole || "",
        authorBio: b.authorBio || "",
        readTime: b.readTime || "",
        studentName: b.studentName || "",
        batch: b.batch || "",
        youtubeUrl: b.youtubeUrl || "",
        content: b.content || "",
        bannerAlt: b.bannerAlt || "",
        metaTitle: b.metaTitle || "",
        metaDescription: b.metaDescription || "",
      });
      setAuthorPhotoUrl(b.authorPhotoUrl || "");
    } catch {
      setForm({
        title: item.title || "",
        slug: item.slug || "",
        school: item.school || "",
        authorName: item.authorName || "",
        authorRole: item.authorRole || "",
        authorBio: item.authorBio || "",
        readTime: item.readTime || "",
        studentName: item.studentName || "",
        batch: item.batch || "",
        youtubeUrl: item.youtubeUrl || "",
        content: item.content || "",
        bannerAlt: item.bannerAlt || "",
        metaTitle: item.metaTitle || "",
        metaDescription: item.metaDescription || "",
      });
      setAuthorPhotoUrl(item.authorPhotoUrl || "");
    }
    setBannerFile(null);
    setAuthorPhotoFile(null);
    setEditingId(item._id);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hasContent = form.content.trim() !== "" && form.content !== "<p></p>";
    if (!form.title.trim()) {
      showToast("Please fill in the title", "error");
      return;
    }
    const finalSlug = sanitizeSlug(form.slug);
    if (!finalSlug) {
      showToast("Please enter a custom URL for this case study", "error");
      return;
    }
    if (!form.school.trim()) {
      showToast("Please select a school", "error");
      return;
    }
    if (!form.authorName.trim()) {
      showToast("Please fill in the author name", "error");
      return;
    }
    if (!hasContent) {
      showToast("Please write some content before publishing", "error");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title.trim());
      fd.append("slug", finalSlug);
      fd.append("school", form.school);
      fd.append("authorName", form.authorName.trim());
      fd.append("authorRole", form.authorRole.trim());
      fd.append("authorBio", form.authorBio.trim());
      fd.append("readTime", form.readTime.trim());
      fd.append("studentName", form.studentName.trim());
      fd.append("batch", form.batch.trim());
      fd.append("youtubeUrl", form.youtubeUrl.trim());
      fd.append("content", form.content);
      fd.append("metaTitle", form.metaTitle.trim());
      fd.append("metaDescription", form.metaDescription.trim());
      fd.append("bannerAlt", form.bannerAlt.trim());
      if (bannerFile) fd.append("banner", bannerFile);
      if (authorPhotoFile) {
        fd.append("authorPhoto", authorPhotoFile);
      } else if (authorPhotoUrl) {
        fd.append("authorPhotoUrl", authorPhotoUrl);
      }

      const url = editingId
        ? `${backendUrl}/api/admin/case-studies/${editingId}`
        : `${backendUrl}/api/admin/case-studies`;
      const method = editingId ? "PATCH" : "POST";

      const res = await fetch(url, { method, headers, body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");

      showToast(editingId ? "Case study updated" : "Case study published", "success");
      resetForm();
      await load();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Save failed", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this case study?")) return;
    try {
      const res = await fetch(`${backendUrl}/api/admin/case-studies/${id}`, { method: "DELETE", headers });
      if (!res.ok) throw new Error("Delete failed");
      showToast("Case study deleted", "success");
      await load();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Delete failed", "error");
    }
  }

  return (
    <div className="space-y-10">
      {/* Banner crop modal — 16:9 */}
      {bannerCropSrc && (
        <PlacementCropModal
          key={bannerCropSrc}
          imageSrc={bannerCropSrc}
          open={bannerCropOpen}
          onClose={handleBannerCropClose}
          onCropped={handleBannerCropped}
          aspect={16 / 9}
        />
      )}
      {/* Author photo crop modal — 1:1 square */}
      {authorPhotoCropSrc && (
        <PlacementCropModal
          key={authorPhotoCropSrc}
          imageSrc={authorPhotoCropSrc}
          open={authorPhotoCropOpen}
          onClose={handleAuthorPhotoCropClose}
          onCropped={handleAuthorPhotoCropped}
          aspect={1}
        />
      )}

      {/* ── Form ── */}
      <section ref={formRef} className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md sm:p-8">
        <div className="mb-6 border-b border-white/12 pb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
              {editingId ? "Edit case study" : "New case study"}
            </h2>
            <p className="mt-1 text-sm text-[#9aa3b8]">
              {editingId
                ? "Update the case study details and click Save changes."
                : "Fill in the details and write the story. It will publish to the public case studies page immediately."}
            </p>
          </div>
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="shrink-0 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-[#A7ADBE] transition hover:bg-white/10 hover:text-white"
            >
              ✕ Cancel edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="cs-title" className="text-xs font-medium text-[#A7ADBE]">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              id="cs-title"
              required
              className={inputCls}
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="e.g. From Beginner to Brand Designer in 6 Months"
            />
          </div>

          {/* Custom URL (slug) */}
          <div className="space-y-2">
            <label htmlFor="cs-slug" className="text-xs font-medium text-[#A7ADBE]">
              Custom URL <span className="text-red-400">*</span>
            </label>
            <input
              id="cs-slug"
              required
              className={inputCls}
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
              onBlur={() => setForm((f) => ({ ...f, slug: sanitizeSlug(f.slug) }))}
              placeholder="e.g. aisha-brand-designer-journey"
            />
            <p className="text-[11px] text-[#6b7280]">
              Will be published at: /case-studies/{sanitizeSlug(form.slug) || "your-slug-here"}
            </p>
          </div>

          {/* School */}
          <div className="space-y-2">
            <label htmlFor="cs-school" className="text-xs font-medium text-[#A7ADBE]">
              School <span className="text-red-400">*</span>
            </label>
            <select
              id="cs-school"
              required
              className={inputCls}
              value={form.school}
              onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
            >
              <option value="" disabled>Select a school…</option>
              {SCHOOL_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Student name + Batch */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="cs-student" className="text-xs font-medium text-[#A7ADBE]">
                Student name <span className="font-normal text-[#8890a0]">(optional)</span>
              </label>
              <input
                id="cs-student"
                className={inputCls}
                value={form.studentName}
                onChange={(e) => setForm((f) => ({ ...f, studentName: e.target.value }))}
                placeholder="e.g. Aisha Rahman"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cs-batch" className="text-xs font-medium text-[#A7ADBE]">
                Batch <span className="font-normal text-[#8890a0]">(optional)</span>
              </label>
              <input
                id="cs-batch"
                className={inputCls}
                value={form.batch}
                onChange={(e) => setForm((f) => ({ ...f, batch: e.target.value }))}
                placeholder="e.g. Design School - June 2025"
              />
            </div>
          </div>

          {/* Author name + Role */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="cs-author" className="text-xs font-medium text-[#A7ADBE]">
                Author name <span className="text-red-400">*</span>
              </label>
              <input
                id="cs-author"
                required
                className={inputCls}
                value={form.authorName}
                onChange={(e) => setForm((f) => ({ ...f, authorName: e.target.value }))}
                placeholder="e.g. Priya Sharma"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cs-author-role" className="text-xs font-medium text-[#A7ADBE]">
                Author role
              </label>
              <input
                id="cs-author-role"
                className={inputCls}
                value={form.authorRole}
                onChange={(e) => setForm((f) => ({ ...f, authorRole: e.target.value }))}
                placeholder="e.g. Senior Design Trainer"
              />
            </div>
          </div>

          {/* Author photo + bio */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <span className="text-xs font-medium text-[#A7ADBE]">
                Author photo <span className="font-normal text-[#8890a0]">(1:1, optional)</span>
              </span>
              <div className="flex flex-col gap-3 rounded-xl border border-dashed border-white/20 bg-white/[0.06] p-3">
                <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] py-5 transition hover:border-[#4C75FF]/40 hover:bg-white/10">
                  <input className="absolute inset-0 cursor-pointer opacity-0" type="file" accept="image/*" onChange={handleAuthorPhotoPick} />
                  <span className="text-sm font-medium text-[#d1d5e0]">Click or drop photo</span>
                  <span className="mt-1 text-xs text-[#8890a0]">Square crop · shown in sidebar</span>
                </label>
                {authorPhotoFile ? (
                  <p className="text-center text-xs font-medium text-emerald-400/90">Ready: {authorPhotoFile.name}</p>
                ) : authorPhotoUrl ? (
                  <div className="flex flex-col items-center gap-2">
                    <Image src={authorPhotoUrl} alt="Author" width={48} height={48} unoptimized className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/20" />
                    <p className="text-center text-xs font-medium text-emerald-400/90">Using existing photo</p>
                  </div>
                ) : (
                  <p className="text-center text-xs text-[#8890a0]">No photo selected</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="cs-author-bio" className="text-xs font-medium text-[#A7ADBE]">
                Author bio <span className="font-normal text-[#8890a0]">(optional)</span>
              </label>
              <textarea
                id="cs-author-bio"
                rows={5}
                className={`${inputCls} resize-none`}
                value={form.authorBio}
                onChange={(e) => setForm((f) => ({ ...f, authorBio: e.target.value }))}
                placeholder="Short bio shown in the sidebar of the case study detail page…"
              />
            </div>
          </div>

          {/* Read Time + YouTube link */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="cs-read-time" className="text-xs font-medium text-[#A7ADBE]">
                Read time
              </label>
              <input
                id="cs-read-time"
                className={inputCls}
                value={form.readTime}
                onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
                placeholder="e.g. 5 mins"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="cs-youtube" className="text-xs font-medium text-[#A7ADBE]">
                YouTube link <span className="font-normal text-[#8890a0]">(optional)</span>
              </label>
              <input
                id="cs-youtube"
                className={inputCls}
                value={form.youtubeUrl}
                onChange={(e) => setForm((f) => ({ ...f, youtubeUrl: e.target.value }))}
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
          </div>

          {/* Banner upload */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-[#A7ADBE]">Banner image <span className="font-normal text-[#8890a0]">(16:9, optional)</span></span>
            <div className="flex flex-col gap-3 rounded-xl border border-dashed border-white/20 bg-white/[0.06] p-4">
              <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] py-6 transition hover:border-[#4C75FF]/40 hover:bg-white/10">
                <input className="absolute inset-0 cursor-pointer opacity-0" type="file" accept="image/*" onChange={handleBannerPick} />
                <span className="text-sm font-medium text-[#d1d5e0]">Click or drop banner image</span>
                <span className="mt-1 text-xs text-[#8890a0]">Opens crop tool · 16:9 ratio</span>
              </label>
              {bannerFile ? (
                <p className="text-center text-xs font-medium text-emerald-400/90">Ready: {bannerFile.name}</p>
              ) : (
                <p className="text-center text-xs text-[#8890a0]">No banner selected</p>
              )}
            </div>
            <div className="space-y-1">
              <label htmlFor="cs-banner-alt" className="text-xs font-medium text-[#A7ADBE]">
                Banner alt text <span className="font-normal text-[#8890a0]">(for SEO &amp; accessibility)</span>
              </label>
              <input
                id="cs-banner-alt"
                className={inputCls}
                value={form.bannerAlt}
                onChange={(e) => setForm((f) => ({ ...f, bannerAlt: e.target.value }))}
                placeholder="e.g. Student presenting final design project at HACA"
              />
            </div>
          </div>

          {/* Content editor */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-[#A7ADBE]">
              Case study content <span className="text-red-400">*</span>
            </label>
            <BlogEditor
              value={form.content}
              onChange={(html) => setForm((f) => ({ ...f, content: html }))}
              onImageUpload={handleImageUpload}
              onVideoUpload={handleVideoUpload}
              showToast={showToast}
            />
          </div>

          {/* SEO */}
          <div className="space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A7ADBE]">SEO (optional)</p>
            <div className="space-y-2">
              <label htmlFor="cs-meta-title" className="text-xs font-medium text-[#A7ADBE]">
                Meta title <span className="font-normal text-[#8890a0]">(defaults to title)</span>
              </label>
              <input
                id="cs-meta-title"
                className={inputCls}
                value={form.metaTitle}
                onChange={(e) => setForm((f) => ({ ...f, metaTitle: e.target.value }))}
                placeholder="e.g. How Aisha Became a Brand Designer | HACA"
                maxLength={160}
              />
              <p className="text-right text-[11px] text-[#6b7280]">{form.metaTitle.length}/160</p>
            </div>
            <div className="space-y-2">
              <label htmlFor="cs-meta-desc" className="text-xs font-medium text-[#A7ADBE]">
                Meta description <span className="font-normal text-[#8890a0]">(recommended: 120–160 chars)</span>
              </label>
              <textarea
                id="cs-meta-desc"
                rows={3}
                className={`${inputCls} resize-none`}
                value={form.metaDescription}
                onChange={(e) => setForm((f) => ({ ...f, metaDescription: e.target.value }))}
                placeholder="e.g. See how Aisha went from complete beginner to working brand designer through HACA's Design School."
                maxLength={320}
              />
              <p className="text-right text-[11px] text-[#6b7280]">{form.metaDescription.length}/320</p>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3">
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="flex-1 rounded-xl border border-white/20 bg-white/[0.06] py-3 text-sm font-semibold text-[#A7ADBE] transition hover:bg-white/10 hover:text-white"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={saving}
              className="flex-1 rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:opacity-40"
            >
              {saving
                ? editingId ? "Saving…" : "Publishing…"
                : editingId ? "Save changes" : "Publish case study"}
            </button>
          </div>
        </form>
      </section>

      {/* ── Library ── */}
      <section>
        <div className="mb-6">
          <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
            Case study library
          </h2>
          <p className="mt-1 text-sm text-[#9aa3b8]">
            All published case studies. Deleting one removes it from the public site immediately.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-7 h-7 rounded-full border-2 border-[#694AFF] border-t-transparent animate-spin" />
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-6 py-14 text-center text-sm text-[#9aa3b8] backdrop-blur-sm">
            No case studies published yet. Write your first one above.
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <article
                key={item._id}
                className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:border-white/20"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.school && (
                        <span className="rounded-full border border-[#4C75FF]/30 bg-[#4C75FF]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#7fa0ff]">
                          {item.school}
                        </span>
                      )}
                      {item.studentName && (
                        <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-300">
                          {item.studentName}
                        </span>
                      )}
                      {item.readTime && (
                        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-[#9aa3b8]">
                          {item.readTime}
                        </span>
                      )}
                      {editingId === item._id && (
                        <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
                          Editing
                        </span>
                      )}
                    </div>
                    <p className="truncate text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-[#9aa3b8]">
                      {item.authorName}{item.authorRole ? ` · ${item.authorRole}` : ""}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-[#4C75FF]/35 bg-[#4C75FF]/10 px-3 py-1.5 text-xs font-medium text-[#7fa0ff] transition hover:bg-[#4C75FF]/20 disabled:opacity-40"
                      onClick={() => startEdit(item)}
                      disabled={saving}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-red-400/35 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-100 transition hover:bg-red-500/18 disabled:opacity-40"
                      onClick={() => handleDelete(item._id)}
                      disabled={saving}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20";
