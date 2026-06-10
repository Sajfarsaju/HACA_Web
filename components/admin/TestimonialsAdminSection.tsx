"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { PlacementCropModal } from "./PlacementCropModal";

type TestimonialDoc = {
  _id: string;
  schoolName: string;
  quote: string;
  name: string;
  role: string;
  photoUrl: string | null;
  cloudinaryPublicId: string | null;
  order: number;
};

type Props = {
  token: string;
  backendUrl: string;
  showToast: (msg: string, type?: "error" | "success") => void;
};

const SCHOOL_OPTIONS = ["HACA", "Design School", "Marketing School", "Tech School"] as const;
type SchoolOption = (typeof SCHOOL_OPTIONS)[number];

const SCHOOL_BADGE: Record<string, string> = {
  "HACA": "bg-indigo-500/15 text-indigo-300 border-indigo-400/25",
  "Design School": "bg-violet-500/15 text-violet-300 border-violet-400/25",
  "Marketing School": "bg-rose-500/15 text-rose-300 border-rose-400/25",
  "Tech School": "bg-cyan-500/15 text-cyan-300 border-cyan-400/25",
};

const SELECT_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`;

function getApiError(err: unknown, fallback: string): string {
  if (axios.isAxiosError(err)) {
    const data = err.response?.data as { error?: string } | undefined;
    return data?.error || err.message || fallback;
  }
  return err instanceof Error ? err.message : String(err);
}

export function TestimonialsAdminSection({ token, backendUrl, showToast }: Props) {
  const [items, setItems] = useState<TestimonialDoc[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterSchool, setFilterSchool] = useState<SchoolOption | "All">("All");

  // Form state
  const [schoolName, setSchoolName] = useState<SchoolOption>("HACA");
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [cropOpen, setCropOpen] = useState(false);
  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const [existingPhotoUrl, setExistingPhotoUrl] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // Confirm delete
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [confirmLabel, setConfirmLabel] = useState("");

  const formRef = useRef<HTMLElement>(null);

  async function refresh() {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/testimonials`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems(data.items || []);
    } catch {
      // silent
    }
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resetForm() {
    setQuote("");
    setName("");
    setRole("");
    setPhotoFile(null);
    setExistingPhotoUrl("");
    setEditingId(null);
    setSchoolName("HACA");
  }

  function handlePhotoPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f || !f.type.startsWith("image/")) { showToast("Please choose an image file."); return; }
    setCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(f); });
    setCropOpen(true);
  }

  function handleCropClose() {
    setCropOpen(false);
    setCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
  }

  function handleCropped(file: File) {
    setCropSrc((prev) => { if (prev) URL.revokeObjectURL(prev); return null; });
    setCropOpen(false);
    setPhotoFile(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!quote.trim()) { showToast("Quote is required."); return; }
    if (!name.trim()) { showToast("Name is required."); return; }

    setLoading(true);
    try {
      const form = new FormData();
      form.append("schoolName", schoolName);
      form.append("quote", quote.trim());
      form.append("name", name.trim());
      form.append("role", role.trim());
      if (photoFile) form.append("photo", photoFile);

      if (editingId) {
        await axios.put(`${backendUrl}/api/admin/testimonials/${editingId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        showToast("Testimonial updated!", "success");
      } else {
        await axios.post(`${backendUrl}/api/admin/testimonials`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        showToast("Testimonial added!", "success");
      }
      resetForm();
      await refresh();
    } catch (err) {
      showToast(getApiError(err, "Save failed"));
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(doc: TestimonialDoc) {
    setEditingId(doc._id);
    setSchoolName((SCHOOL_OPTIONS.includes(doc.schoolName as SchoolOption) ? doc.schoolName : "HACA") as SchoolOption);
    setQuote(doc.quote);
    setName(doc.name);
    setRole(doc.role || "");
    setPhotoFile(null);
    setExistingPhotoUrl(doc.photoUrl || "");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleDelete(id: string) {
    setLoading(true);
    try {
      await axios.delete(`${backendUrl}/api/admin/testimonials/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showToast("Deleted.", "success");
      await refresh();
    } catch (err) {
      showToast(getApiError(err, "Delete failed"));
    } finally {
      setLoading(false);
      setConfirmId(null);
    }
  }

  const previewPhoto = photoFile ? URL.createObjectURL(photoFile) : existingPhotoUrl || null;

  const filteredItems = filterSchool === "All" ? items : items.filter((i) => i.schoolName === filterSchool);

  return (
    <>
      {cropSrc && (
        <PlacementCropModal
          key={cropSrc}
          imageSrc={cropSrc}
          open={cropOpen}
          onClose={handleCropClose}
          onCropped={handleCropped}
          aspect={1}
        />
      )}

      {confirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-[#0f1520] p-6 shadow-2xl">
            <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold text-white">Confirm Delete</h3>
            <p className="mt-2 text-sm text-[#9aa3b8]">
              Delete testimonial from <span className="font-medium text-white">&ldquo;{confirmLabel}&rdquo;</span>? This cannot be undone.
            </p>
            <div className="mt-5 flex justify-end gap-3">
              <button type="button" onClick={() => setConfirmId(null)} className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-[#9aa3b8] transition hover:border-white/35 hover:text-white">Cancel</button>
              <button type="button" onClick={() => handleDelete(confirmId)} className="rounded-xl border border-red-400/35 bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-100 transition hover:bg-red-500/25">Delete</button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {/* ── Form ── */}
        <section ref={formRef} className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-5 backdrop-blur-md sm:p-6">
          <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4C75FF]/20">
              <svg className="h-4 w-4 text-[#4C75FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
              </svg>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-manrope)] text-base font-semibold text-white">
                {editingId ? "Edit testimonial" : "Add testimonial"}
              </h2>
              <p className="text-xs text-[#9aa3b8]">Profile photo is optional (1:1 square). Design School shows max 3 cards.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* School */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9aa3b8]">School</label>
              <select
                className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                style={{ backgroundImage: SELECT_SVG }}
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value as SchoolOption)}
              >
                {SCHOOL_OPTIONS.map((s) => (
                  <option key={s} value={s} className="bg-[#1a1f2e] text-white">{s}</option>
                ))}
              </select>
            </div>

            {/* Quote */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9aa3b8]">
                Quote <span className="text-red-400">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Student's testimonial text…"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9aa3b8]">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Nadha Faizal"
                />
              </div>

              {/* Role */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9aa3b8]">
                  Role / Designation <span className="font-normal normal-case tracking-normal text-[#8890a0]">(optional)</span>
                </label>
                <input
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Digital Marketer"
                />
              </div>
            </div>

            {/* Photo */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9aa3b8]">
                Profile photo <span className="font-normal normal-case tracking-normal text-[#8890a0]">(optional · 1:1)</span>
              </label>
              <div className="flex items-center gap-4">
                <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/[0.04]">
                  {previewPhoto ? (
                    <Image src={previewPhoto} alt="Preview" fill className="object-cover" unoptimized />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[#6b7280]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="cursor-pointer rounded-xl border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-medium text-[#d1d5e0] transition hover:bg-white/[0.12] hover:text-white">
                    {photoFile ? "Change photo" : previewPhoto ? "Replace photo" : "Choose photo"}
                    <input type="file" accept="image/*" className="hidden" onChange={handlePhotoPick} />
                  </label>
                  {(photoFile || existingPhotoUrl) && (
                    <button type="button" onClick={() => { setPhotoFile(null); setExistingPhotoUrl(""); }} className="rounded-xl border border-red-400/25 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-300 transition hover:bg-red-500/20">
                      Remove photo
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex items-center gap-3 pt-1">
              <button type="submit" disabled={loading} className="rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:opacity-40">
                {loading ? (editingId ? "Saving…" : "Adding…") : (editingId ? "Save changes" : "Add testimonial")}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-[#9aa3b8] transition hover:border-white/35 hover:text-white">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* ── List ── */}
        <section>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-[family-name:var(--font-manrope)] text-base font-semibold text-white">Testimonials</h2>
              <p className="mt-0.5 text-xs text-[#9aa3b8]">{items.length} total</p>
            </div>
            {/* School filter */}
            <select
              className="cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 bg-[length:1rem] bg-[right_0.6rem_center] bg-no-repeat pl-3 pr-8 py-2 text-sm text-white outline-none transition focus:border-[#4C75FF]/45"
              style={{ backgroundImage: SELECT_SVG }}
              value={filterSchool}
              onChange={(e) => setFilterSchool(e.target.value as SchoolOption | "All")}
            >
              <option value="All" className="bg-[#1a1f2e] text-white">All schools</option>
              {SCHOOL_OPTIONS.map((s) => (
                <option key={s} value={s} className="bg-[#1a1f2e] text-white">{s}</option>
              ))}
            </select>
          </div>

          {filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-6 py-14 text-center text-sm text-[#9aa3b8]">
              {items.length === 0 ? "No testimonials yet. Add the first one above." : `No testimonials for ${filterSchool}.`}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredItems.map((doc) => (
                <div key={doc._id} className="flex items-start gap-4 rounded-2xl border border-white/12 bg-white/[0.04] p-4">
                  {/* Avatar */}
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/[0.06]">
                    {doc.photoUrl ? (
                      <Image src={doc.photoUrl} alt={doc.name} fill className="object-cover" unoptimized />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[#9aa3b8]">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-white">{doc.name}</p>
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${SCHOOL_BADGE[doc.schoolName] ?? "bg-white/10 text-[#9aa3b8] border-white/15"}`}>
                        {doc.schoolName}
                      </span>
                    </div>
                    {doc.role && <p className="text-xs text-[#9aa3b8]">{doc.role}</p>}
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#A7ADBE]">{doc.quote}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 gap-2">
                    <button type="button" onClick={() => handleEdit(doc)} className="rounded-xl border border-white/20 px-3 py-1.5 text-xs font-medium text-[#d1d5e0] transition hover:bg-white/10 hover:text-white">Edit</button>
                    <button type="button" onClick={() => { setConfirmId(doc._id); setConfirmLabel(doc.name); }} disabled={loading} className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-300 transition hover:bg-red-500/20 disabled:opacity-50">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
