"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Webinar = {
  _id: string;
  title: string;
  slug: string;
  bannerUrl: string | null;
  whatsappLink: string;
  sheetTabName: string;
  isActive: boolean;
  createdAt: string;
};

type Props = {
  token: string;
  backendUrl: string;
  showToast: (msg: string, type?: "success" | "error") => void;
};

const EMPTY_FORM = {
  title: "",
  whatsappLink: "",
  sheetTabName: "",
  isActive: true,
};

export function WebinarsAdminSection({ token, backendUrl, showToast }: Props) {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const headers = { Authorization: `Bearer ${token}` };

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/admin/webinars`, { headers });
      const data = await res.json();
      setWebinars(data.items ?? []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setBannerFile(file);
    if (file) setBannerPreview(URL.createObjectURL(file));
    else setBannerPreview(null);
  }

  function startEdit(w: Webinar) {
    setEditingId(w._id);
    setForm({ title: w.title, whatsappLink: w.whatsappLink, sheetTabName: w.sheetTabName, isActive: w.isActive });
    setBannerFile(null);
    setBannerPreview(w.bannerUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ ...EMPTY_FORM });
    setBannerFile(null);
    setBannerPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.whatsappLink.trim() || !form.sheetTabName.trim()) {
      showToast("Title, WhatsApp link, and sheet tab name are required", "error");
      return;
    }
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title.trim());
      fd.append("whatsappLink", form.whatsappLink.trim());
      fd.append("sheetTabName", form.sheetTabName.trim());
      fd.append("isActive", String(form.isActive));
      if (bannerFile) fd.append("banner", bannerFile);

      const url = editingId
        ? `${backendUrl}/api/admin/webinars/${editingId}`
        : `${backendUrl}/api/admin/webinars`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, { method, headers, body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");

      showToast(editingId ? "Webinar updated" : "Webinar created", "success");
      cancelEdit();
      await load();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Save failed", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this webinar?")) return;
    try {
      const res = await fetch(`${backendUrl}/api/admin/webinars/${id}`, { method: "DELETE", headers });
      if (!res.ok) throw new Error("Delete failed");
      showToast("Webinar deleted", "success");
      await load();
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Delete failed", "error");
    }
  }

  return (
    <div className="space-y-8">
      {/* ── Form ── */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl p-6 space-y-5"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <h3 className="text-white font-semibold text-base">
          {editingId ? "Edit Webinar" : "New Webinar"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AdminField label="Title" required>
            <input
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="e.g. Digital Marketing Masterclass"
              className={inputCls}
            />
          </AdminField>

          <AdminField label="WhatsApp Group Link" required>
            <input
              value={form.whatsappLink}
              onChange={(e) => setForm((f) => ({ ...f, whatsappLink: e.target.value }))}
              placeholder="https://chat.whatsapp.com/..."
              className={inputCls}
            />
          </AdminField>

          <AdminField label="Sheet Tab Name" required hint="Exact tab name to write rows into">
            <input
              value={form.sheetTabName}
              onChange={(e) => setForm((f) => ({ ...f, sheetTabName: e.target.value }))}
              placeholder="e.g. Webinar June 2025"
              className={inputCls}
            />
          </AdminField>

          <AdminField label="Status">
            <select
              value={form.isActive ? "active" : "inactive"}
              onChange={(e) => setForm((f) => ({ ...f, isActive: e.target.value === "active" }))}
              className={inputCls}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </AdminField>
        </div>

        {/* Banner Upload */}
        <AdminField label="Banner Image">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="px-4 py-2 rounded-xl text-sm font-medium text-white/80 hover:text-white transition"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              {bannerPreview ? "Change image" : "Upload image"}
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            {bannerPreview && (
              <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <Image src={bannerPreview} alt="Preview" fill className="object-cover" unoptimized />
              </div>
            )}
          </div>
        </AdminField>

        <div className="flex gap-3 pt-1">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition disabled:opacity-50"
            style={{ background: "linear-gradient(135deg, #FF5600 0%, #694AFF 100%)" }}
          >
            {saving ? "Saving…" : editingId ? "Update Webinar" : "Create Webinar"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="px-6 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white transition"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* ── List ── */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-7 h-7 rounded-full border-2 border-[#694AFF] border-t-transparent animate-spin" />
        </div>
      ) : webinars.length === 0 ? (
        <p className="text-center text-white/40 text-sm py-10">No webinars yet</p>
      ) : (
        <div className="space-y-3">
          {webinars.map((w) => (
            <div
              key={w._id}
              className="flex items-center gap-4 rounded-2xl p-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Thumbnail */}
              <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                {w.bannerUrl ? (
                  <Image src={w.bannerUrl} alt={w.title} width={64} height={64} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">No image</div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{w.title}</p>
                <p className="text-white/40 text-xs mt-0.5 truncate">
                  /webinar/{w.slug}
                </p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: w.isActive ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)",
                      color: w.isActive ? "#4ade80" : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {w.isActive ? "Active" : "Inactive"}
                  </span>
                  <span className="text-white/30 text-xs">Tab: {w.sheetTabName}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => startEdit(w)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white transition"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(w._id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition"
                  style={{ background: "rgba(239,68,68,0.12)", color: "#f87171" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition bg-white/[0.06] border border-white/10 focus:border-[#694AFF]/60";

function AdminField({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-white/50">
        {label}
        {required && <span className="text-[#FF5600] ml-0.5">*</span>}
        {hint && <span className="ml-1.5 text-white/30 font-normal">({hint})</span>}
      </label>
      {children}
    </div>
  );
}
