"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { PlacementCropModal } from "@/components/admin/PlacementCropModal";
import {
  PLACEMENT_SCHOOL_OPTIONS,
  type PlacementSchoolName,
} from "@/lib/placementConstants";

type PlacementCard = {
  _id: string;
  title?: string;
  imageUrl: string;
  cloudinaryPublicId: string;
  schoolName: string;
};

type PlacementGroup = {
  schoolName: string;
  items: PlacementCard[];
  total: number;
};

function sortGroupsBySchoolOrder(groups: PlacementGroup[]): PlacementGroup[] {
  const order = [...PLACEMENT_SCHOOL_OPTIONS];
  return [...groups].sort((a, b) => {
    const ia = order.indexOf(a.schoolName as PlacementSchoolName);
    const ib = order.indexOf(b.schoolName as PlacementSchoolName);
    const va = ia === -1 ? 999 : ia;
    const vb = ib === -1 ? 999 : ib;
    if (va !== vb) return va - vb;
    return a.schoolName.localeCompare(b.schoolName);
  });
}

const schoolAccent: Record<string, string> = {
  "Marketing School": "from-rose-500/12 to-orange-500/6 ring-rose-400/25",
  "Design School": "from-violet-500/12 to-fuchsia-500/6 ring-violet-400/25",
  "Tech School": "from-cyan-500/12 to-blue-500/6 ring-cyan-400/25",
};

export default function AdminPage() {
  const backendUrl = useMemo(
    () => process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000",
    []
  );

  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<PlacementGroup[]>([]);
  const [groupsMeta, setGroupsMeta] = useState<{
    total: number;
    page: number;
    limit: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadSchoolName, setUploadSchoolName] =
    useState<PlacementSchoolName>("Marketing School");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const [cropOpen, setCropOpen] = useState(false);
  const [cropImageSrc, setCropImageSrc] = useState<string | null>(null);

  function getApiErrorMessage(error: unknown, fallback: string): string {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as { error?: string } | undefined;
      return data?.error || error.message || fallback;
    }
    return error instanceof Error ? error.message : String(error);
  }

  useEffect(() => {
    const t = window.localStorage.getItem("admin_token");
    if (t) setToken(t);
  }, []);

  useEffect(() => {
    if (!token) return;
    (async () => {
      setError(null);
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${backendUrl}/api/admin/placement-cards/grouped?limit=200&page=1`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setGroups(sortGroupsBySchoolOrder(data.groups || []));
        setGroupsMeta({
          total: data.total,
          page: data.page,
          limit: data.limit,
        });
      } catch (e: unknown) {
        const msg = getApiErrorMessage(e, "Failed to load cards");
        setError(msg);
        if (axios.isAxiosError(e) && e.response?.status === 401) {
          window.localStorage.removeItem("admin_token");
          setToken(null);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [backendUrl, token]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
        username,
        password,
      });
      setToken(data.token);
      window.localStorage.setItem("admin_token", data.token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Login failed"));
    } finally {
      setLoading(false);
    }
  }

  async function refreshCards(currentToken: string) {
    const { data } = await axios.get(
      `${backendUrl}/api/admin/placement-cards/grouped?limit=200&page=1`,
      {
        headers: { Authorization: `Bearer ${currentToken}` },
      }
    );
    setGroups(sortGroupsBySchoolOrder(data.groups || []));
    setGroupsMeta({
      total: data.total,
      page: data.page,
      limit: data.limit,
    });
  }

  function handlePickImage(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f || !f.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    setCropImageSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(f);
    });
    setCropOpen(true);
  }

  function handleCropClose() {
    setCropOpen(false);
    setCropImageSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }

  function handleCroppedFile(file: File) {
    setCropImageSrc((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setCropOpen(false);
    setUploadFile(file);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    if (!uploadFile) {
      setError("Choose and crop an image first.");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const form = new FormData();
      form.append("photo", uploadFile);
      if (uploadTitle.trim()) form.append("title", uploadTitle.trim());
      form.append("schoolName", uploadSchoolName);

      await axios.post(`${backendUrl}/api/admin/placement-cards`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUploadTitle("");
      setUploadSchoolName("Marketing School");
      setUploadFile(null);
      await refreshCards(token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Upload failed"));
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!token) return;
    setError(null);
    setLoading(true);
    try {
      await axios.delete(`${backendUrl}/api/admin/placement-cards/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      await refreshCards(token);
    } catch (e: unknown) {
      setError(getApiErrorMessage(e, "Delete failed"));
    } finally {
      setLoading(false);
    }
  }

  const schoolsWithCards = groups.filter((g) => g.items.length > 0).length;

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      {cropImageSrc ? (
        <PlacementCropModal
          key={cropImageSrc}
          imageSrc={cropImageSrc}
          open={cropOpen}
          onClose={handleCropClose}
          onCropped={handleCroppedFile}
        />
      ) : null}

      <div className="mb-8 sm:mb-10">
        <h1 className="font-[family-name:var(--font-manrope)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#A7ADBE]">
          Crop placement images to the correct ratio, assign a school (aligned with Success Story),
          and publish. Cards appear on the public site grouped by school.
        </p>
      </div>

      {error ? (
        <div
          className="mb-8 rounded-2xl border border-red-400/35 bg-red-500/10 px-4 py-3 text-sm text-red-100 backdrop-blur-md"
          role="alert"
        >
          {error}
        </div>
      ) : null}

      {!token ? (
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 shadow-lg shadow-black/10 backdrop-blur-xl sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9aa3b8]">
              Sign in
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-manrope)] text-xl font-semibold text-white">
              Welcome back
            </h2>
            <p className="mt-1 text-sm text-[#9aa3b8]">
              Use your admin credentials to manage placement cards.
            </p>
            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div className="space-y-2">
                <label htmlFor="admin-user" className="text-xs font-medium text-[#A7ADBE]">
                  Username
                </label>
                <input
                  id="admin-user"
                  autoComplete="username"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none ring-0 transition focus:border-[#4C75FF]/55 focus:ring-2 focus:ring-[#4C75FF]/25"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="admin-pass" className="text-xs font-medium text-[#A7ADBE]">
                  Password
                </label>
                <input
                  id="admin-pass"
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/55 focus:ring-2 focus:ring-[#4C75FF]/25"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:brightness-110 disabled:opacity-50"
              >
                {loading ? "Signing in…" : "Continue"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b8]">
                  Total cards
                </p>
                <p className="mt-1 font-[family-name:var(--font-manrope)] text-2xl font-semibold tabular-nums text-white">
                  {loading && !groupsMeta ? "—" : (groupsMeta?.total ?? 0)}
                </p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b8]">
                  Schools active
                </p>
                <p className="mt-1 font-[family-name:var(--font-manrope)] text-2xl font-semibold tabular-nums text-white">
                  {loading && groups.length === 0 ? "—" : schoolsWithCards}
                  <span className="text-base font-normal text-[#9aa3b8]"> / 3</span>
                </p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9aa3b8]">
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-300/95">
                  {loading ? "Syncing…" : "Connected"}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-xl border border-white/18 bg-white/[0.08] px-4 py-2.5 text-sm font-medium text-[#d1d5e0] backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
              onClick={() => {
                window.localStorage.removeItem("admin_token");
                setToken(null);
                setGroups([]);
                setGroupsMeta(null);
              }}
            >
              Log out
            </button>
          </div>

          <section className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md sm:p-8">
            <div className="mb-6 flex flex-col gap-1 border-b border-white/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                  New placement
                </h2>
                <p className="mt-1 text-sm text-[#9aa3b8]">
                  Pick an image to open the cropper, then submit to upload.
                </p>
              </div>
            </div>
            <form onSubmit={handleUpload} className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="upload-title" className="text-xs font-medium text-[#A7ADBE]">
                    Title <span className="font-normal text-[#8890a0]">(optional)</span>
                  </label>
                  <input
                    id="upload-title"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-[#6b7280] outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="e.g. Placement at Acme Corp"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="school-select" className="text-xs font-medium text-[#A7ADBE]">
                    School
                  </label>
                  <select
                    id="school-select"
                    className="w-full cursor-pointer appearance-none rounded-xl border border-white/20 bg-white/10 bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-white outline-none transition focus:border-[#4C75FF]/45 focus:ring-2 focus:ring-[#4C75FF]/20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371717a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    }}
                    value={uploadSchoolName}
                    onChange={(e) =>
                      setUploadSchoolName(e.target.value as PlacementSchoolName)
                    }
                  >
                    {PLACEMENT_SCHOOL_OPTIONS.map((name) => (
                      <option key={name} value={name} className="bg-[#1a1f2e] text-white">
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-xl border border-dashed border-white/20 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="space-y-2">
                  <span className="text-xs font-medium text-[#A7ADBE]">Photo</span>
                  <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] py-8 transition hover:border-[#4C75FF]/40 hover:bg-white/10">
                    <input
                      className="absolute inset-0 cursor-pointer opacity-0"
                      type="file"
                      accept="image/*"
                      onChange={handlePickImage}
                    />
                    <span className="text-sm font-medium text-[#d1d5e0]">Click or drop image</span>
                    <span className="mt-1 text-xs text-[#8890a0]">Opens crop tool with fixed ratio</span>
                  </label>
                </div>
                {uploadFile ? (
                  <p className="text-center text-xs font-medium text-emerald-400/90">
                    Ready: {uploadFile.name}
                  </p>
                ) : (
                  <p className="text-center text-xs text-[#8890a0]">No file selected yet</p>
                )}
                <button
                  type="submit"
                  disabled={loading || !uploadFile}
                  className="w-full rounded-xl bg-gradient-to-r from-[#4C75FF] to-[#3558e6] py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110 disabled:opacity-40"
                >
                  {loading ? "Uploading…" : "Upload to Cloudinary"}
                </button>
              </div>
            </form>
          </section>

          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                  Library by school
                </h2>
                <p className="mt-1 text-sm text-[#9aa3b8]">
                  Cards grouped like the public Success Story page.
                </p>
              </div>
            </div>

            {groups.length === 0 && !loading ? (
              <div className="rounded-2xl border border-white/12 bg-white/[0.06] px-6 py-14 text-center text-sm text-[#9aa3b8] backdrop-blur-sm">
                No cards uploaded yet. Add your first placement above.
              </div>
            ) : null}

            <div className="space-y-12">
              {groups.map((group) => (
                <div key={group.schoolName} className="space-y-5">
                  <div
                    className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-gradient-to-r px-5 py-4 ring-1 backdrop-blur-md ${schoolAccent[group.schoolName] ?? "from-white/8 to-white/[0.02] ring-white/15"}`}
                  >
                    <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold text-white">
                      {group.schoolName}
                    </h3>
                    <span className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-xs font-medium tabular-nums text-[#A7ADBE] backdrop-blur-sm">
                      {group.total} {group.total === 1 ? "card" : "cards"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {group.items.map((card) => (
                      <article
                        key={card._id}
                        className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-lg shadow-black/10 backdrop-blur-sm transition hover:border-white/20"
                      >
                        <div className="relative w-full overflow-hidden bg-black/25 aspect-[247.6561737060547/270]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={card.imageUrl}
                            alt={card.title || "Placement card"}
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="flex items-center justify-between gap-3 border-t border-white/12 px-4 py-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-white">
                              {card.title || "Untitled"}
                            </p>
                            <p className="truncate text-xs text-[#9aa3b8]">{card.schoolName}</p>
                          </div>
                          <button
                            type="button"
                            className="shrink-0 rounded-lg border border-red-400/35 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-100 transition hover:bg-red-500/18"
                            onClick={() => handleDelete(card._id)}
                            disabled={loading}
                          >
                            Delete
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
