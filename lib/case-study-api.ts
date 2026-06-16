import type { CaseStudy } from "@/lib/case-study-data";

function mapCaseStudyRecord(item: unknown): CaseStudy | null {
    if (!item || typeof item !== "object") return null;
    const b = item as Record<string, unknown>;
    const idRaw = b._id;
    const id = typeof idRaw === "string" || typeof idRaw === "number" ? String(idRaw) : null;
    if (!id) return null;

    const title = typeof b.title === "string" ? b.title : "";
    const authorName = typeof b.authorName === "string" ? b.authorName : "";
    if (!title || !authorName) return null;

    const createdAt =
        typeof b.createdAt === "string" || typeof b.createdAt === "number"
            ? new Date(b.createdAt)
            : new Date();

    const school = typeof b.school === "string" ? b.school : "";

    return {
        id,
        slug: typeof b.slug === "string" && b.slug ? b.slug : id,
        school,
        schoolSlug: school.toLowerCase().replace(/\s+/g, "-"),
        date: createdAt.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
        title,
        author: authorName,
        authorRole: typeof b.authorRole === "string" ? b.authorRole : undefined,
        readTime: typeof b.readTime === "string" && b.readTime ? b.readTime : "5 Mins",
        studentName: typeof b.studentName === "string" ? b.studentName : undefined,
        batch: typeof b.batch === "string" ? b.batch : undefined,
        youtubeUrl: typeof b.youtubeUrl === "string" ? b.youtubeUrl : undefined,
        bannerUrl: typeof b.bannerUrl === "string" ? b.bannerUrl : undefined,
    };
}

/** Published case studies from the API, newest first (matches admin `createdAt` sort). */
export async function fetchPublicCaseStudies(): Promise<CaseStudy[]> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000";
        const res = await fetch(`${backendUrl}/api/admin/public-case-studies`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];

        const data: { items?: unknown[] } = await res.json();
        return (data.items || []).flatMap((item) => {
            const mapped = mapCaseStudyRecord(item);
            return mapped ? [mapped] : [];
        });
    } catch {
        return [];
    }
}

/** Latest published case studies for home page previews. */
export async function getLatestCaseStudiesForHome(limit = 3): Promise<CaseStudy[]> {
    const items = await fetchPublicCaseStudies();
    return items.slice(0, limit);
}
