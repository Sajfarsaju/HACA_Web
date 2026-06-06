"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type FounderVideo = { _id: string; youtubeUrl: string; category: string; order: number };
type Category = "founder" | "design-school" | "marketing-school" | "tech-school" | "uae";

const CATEGORY_OPTIONS: { value: Category; label: string }[] = [
    { value: "founder",          label: "About Page — Founder Insights & Industry Talks" },
    { value: "design-school",    label: "Design School — Stories & Insights" },
    { value: "marketing-school", label: "Marketing School — YouTube Hub" },
    { value: "tech-school",      label: "Tech School — Insights We Share on YouTube" },
    { value: "uae",              label: "UAE Pages — Learner Stories (Dubai, AE, Sharjah)" },
];

function getYouTubeId(url: string): string | null {
    const patterns = [
        /[?&]v=([^&\s]+)/,
        /youtu\.be\/([^?&\s]+)/,
        /embed\/([^?&\s]+)/,
        /shorts\/([^?&\s]+)/,
    ];
    for (const p of patterns) {
        const m = url.match(p);
        if (m) return m[1];
    }
    return null;
}

function thumbnailUrl(youtubeUrl: string): string {
    const id = getYouTubeId(youtubeUrl);
    return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : "";
}

function VideoList({
    category,
    token,
    backendUrl,
    showToast,
}: {
    category: Category;
    token: string;
    backendUrl: string;
    showToast: (msg: string, type?: "error" | "success") => void;
}) {
    const [videos, setVideos] = useState<FounderVideo[]>([]);
    const [inputUrl, setInputUrl] = useState("");
    const [adding, setAdding] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const load = useCallback(async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/admin/founder-videos`, {
                params: { category },
                headers: { Authorization: `Bearer ${token}` },
            });
            setVideos((res.data.videos ?? []).filter((v: FounderVideo) => v.category === category));
        } catch { /* non-critical */ }
    }, [backendUrl, token, category]);

    useEffect(() => { load(); }, [load]);

    async function handleAdd() {
        const url = inputUrl.trim();
        if (!url) return;
        if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
            showToast("Please enter a valid YouTube URL");
            return;
        }
        setAdding(true);
        try {
            await axios.post(
                `${backendUrl}/api/admin/founder-videos`,
                { youtubeUrl: url, category },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setInputUrl("");
            showToast("Video added ✓", "success");
            await load();
        } catch (err) {
            const msg = axios.isAxiosError(err) ? err.response?.data?.error ?? err.message : String(err);
            showToast(msg);
        } finally {
            setAdding(false);
        }
    }

    async function handleDelete(id: string) {
        setDeletingId(id);
        try {
            await axios.delete(`${backendUrl}/api/admin/founder-videos/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            showToast("Video removed", "success");
            await load();
        } catch (err) {
            const msg = axios.isAxiosError(err) ? err.response?.data?.error ?? err.message : String(err);
            showToast(msg);
        } finally {
            setDeletingId(null);
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex gap-3">
                <input
                    type="url"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !adding && handleAdd()}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="flex-1 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-[#9aa3b8] focus:border-[#4C75FF] focus:outline-none"
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    disabled={adding || !inputUrl.trim()}
                    className="rounded-lg bg-[#4C75FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#3a63ee] disabled:opacity-50"
                >
                    {adding ? "Adding…" : "Add"}
                </button>
            </div>

            {videos.length === 0 ? (
                <p className="text-sm text-[#9aa3b8] italic">No videos added yet.</p>
            ) : (
                <div className="flex flex-col gap-3">
                    {videos.map((v, idx) => {
                        const thumb = thumbnailUrl(v.youtubeUrl);
                        const videoId = getYouTubeId(v.youtubeUrl);
                        return (
                            <div key={v._id} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                <span className="text-xs text-[#9aa3b8] w-5 text-center flex-shrink-0">{idx + 1}</span>
                                <div className="relative w-[120px] h-[68px] flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                                    {thumb ? (
                                        <Image src={thumb} alt="thumbnail" fill className="object-cover" unoptimized />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-[10px] text-[#9aa3b8]">No preview</div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-white truncate">{v.youtubeUrl}</p>
                                    {videoId && <p className="text-[11px] text-[#9aa3b8] mt-0.5">ID: {videoId}</p>}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleDelete(v._id)}
                                    disabled={deletingId === v._id}
                                    className="flex-shrink-0 rounded-lg bg-red-500/15 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/25 transition disabled:opacity-50"
                                >
                                    {deletingId === v._id ? "Removing…" : "Remove"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export function FounderVideosAdminSection({
    token,
    backendUrl,
    showToast,
}: {
    token: string;
    backendUrl: string;
    showToast: (msg: string, type?: "error" | "success") => void;
}) {
    const [activeCategory, setActiveCategory] = useState<Category>("founder");

    return (
        <div className="space-y-8">
            <section className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md">
                <h2 className="mb-1 font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                    YouTube Videos
                </h2>
                <p className="mb-5 text-sm text-[#9aa3b8]">
                    Select a school, paste a YouTube link, and click Add. Thumbnails are auto-fetched; clicking a card plays inline.
                </p>

                {/* School dropdown */}
                <div className="mb-6">
                    <label className="mb-1.5 block text-xs font-medium text-[#9aa3b8]">School / Section</label>
                    <select
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value as Category)}
                        className="w-full rounded-lg border border-white/15 bg-[#1a1f35] px-4 py-2.5 text-sm text-white focus:border-[#4C75FF] focus:outline-none"
                    >
                        {CATEGORY_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>

                <VideoList
                    key={activeCategory}
                    category={activeCategory}
                    token={token}
                    backendUrl={backendUrl}
                    showToast={showToast}
                />
            </section>
        </div>
    );
}
