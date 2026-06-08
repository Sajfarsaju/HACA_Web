"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type VideoItem = {
    _id: string;
    youtubeUrl: string;
    name: string;
    designation: string;
    order: number;
};

function getYouTubeId(url: string): string | null {
    const patterns = [
        /[?&]v=([^&\s]+)/,
        /youtu\.be\/([^?&\s]+)/,
        /embed\/([^?&\s]+)/,
        /shorts\/([^?&\s]+)/,
    ];
    for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
    return null;
}

export function MarketingCareerWinsAdminSection({
    token,
    backendUrl,
    showToast,
}: {
    token: string;
    backendUrl: string;
    showToast: (msg: string, type?: "error" | "success") => void;
}) {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [urlInput, setUrlInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [designationInput, setDesignationInput] = useState("");
    const [adding, setAdding] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const load = useCallback(async () => {
        try {
            const res = await axios.get(`${backendUrl}/api/admin/marketing-career-wins`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setVideos(res.data.videos ?? []);
        } catch { /* non-critical */ }
    }, [backendUrl, token]);

    useEffect(() => { load(); }, [load]);

    async function handleAdd() {
        const url = urlInput.trim();
        const name = nameInput.trim();
        const designation = designationInput.trim();
        if (!url || !name || !designation) { showToast("All three fields are required"); return; }
        if (!url.includes("youtube.com") && !url.includes("youtu.be")) { showToast("Please enter a valid YouTube URL"); return; }
        setAdding(true);
        try {
            await axios.post(
                `${backendUrl}/api/admin/marketing-career-wins`,
                { youtubeUrl: url, name, designation },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setUrlInput(""); setNameInput(""); setDesignationInput("");
            showToast("Video added ✓", "success");
            await load();
        } catch (err) {
            const msg = axios.isAxiosError(err) ? (err.response?.data?.error ?? err.message) : String(err);
            showToast(msg);
        } finally { setAdding(false); }
    }

    async function handleDelete(id: string) {
        setDeletingId(id);
        try {
            await axios.delete(`${backendUrl}/api/admin/marketing-career-wins/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            showToast("Video removed", "success");
            await load();
        } catch (err) {
            const msg = axios.isAxiosError(err) ? (err.response?.data?.error ?? err.message) : String(err);
            showToast(msg);
        } finally { setDeletingId(null); }
    }

    return (
        <div className="space-y-8">
            <section className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 backdrop-blur-md">
                <h2 className="mb-1 font-[family-name:var(--font-manrope)] text-lg font-semibold text-white">
                    Marketing School — Career Wins Videos
                </h2>
                <p className="mb-6 text-sm text-[#9aa3b8]">
                    Add YouTube videos with learner name and designation. These appear in the &ldquo;Career Wins&rdquo; section on all Marketing School SEO city pages.
                </p>

                {/* Add form */}
                <div className="mb-8 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <h3 className="text-sm font-semibold text-white">Add New Video</h3>
                    <input
                        type="url"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && !adding && handleAdd()}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-[#9aa3b8] focus:border-[#4C75FF] focus:outline-none"
                    />
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            placeholder="Learner name"
                            className="flex-1 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-[#9aa3b8] focus:border-[#4C75FF] focus:outline-none"
                        />
                        <input
                            type="text"
                            value={designationInput}
                            onChange={(e) => setDesignationInput(e.target.value)}
                            placeholder="Designation / Role"
                            className="flex-1 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-[#9aa3b8] focus:border-[#4C75FF] focus:outline-none"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleAdd}
                        disabled={adding || !urlInput.trim() || !nameInput.trim() || !designationInput.trim()}
                        className="self-start rounded-lg bg-[#4C75FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#3a63ee] disabled:opacity-50"
                    >
                        {adding ? "Adding..." : "Add Video"}
                    </button>
                </div>

                {/* Video list */}
                {videos.length === 0 ? (
                    <p className="text-sm italic text-[#9aa3b8]">No videos added yet.</p>
                ) : (
                    <div className="flex flex-col gap-3">
                        {videos.map((v, idx) => {
                            const videoId = getYouTubeId(v.youtubeUrl);
                            const thumb = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : "";
                            return (
                                <div key={v._id} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                    <span className="w-5 shrink-0 text-center text-xs text-[#9aa3b8]">{idx + 1}</span>
                                    <div className="relative h-[68px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-white/10">
                                        {thumb ? (
                                            <Image src={thumb} alt="thumbnail" fill className="object-cover" unoptimized />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-[10px] text-[#9aa3b8]">No preview</div>
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-semibold text-white">{v.name}</p>
                                        <p className="text-xs text-[#9aa3b8]">{v.designation}</p>
                                        <p className="mt-0.5 truncate text-[11px] text-[#9aa3b8]/60">{v.youtubeUrl}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(v._id)}
                                        disabled={deletingId === v._id}
                                        className="shrink-0 rounded-lg bg-red-500/15 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500/25 disabled:opacity-50"
                                    >
                                        {deletingId === v._id ? "Removing..." : "Remove"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
}
