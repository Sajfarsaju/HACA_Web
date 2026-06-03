import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";

function mapBlogRecord(blog: unknown): BlogPost | null {
    if (!blog || typeof blog !== "object") return null;
    const b = blog as Record<string, unknown>;
    const idRaw = b._id;
    const id = typeof idRaw === "string" || typeof idRaw === "number" ? String(idRaw) : null;
    if (!id) return null;

    const title = typeof b.title === "string" ? b.title : "";
    const authorName = typeof b.authorName === "string" ? b.authorName : "";
    if (!title || !authorName) return null;

    const category = typeof b.category === "string" ? b.category : "Marketing";
    const createdAt =
        typeof b.createdAt === "string" || typeof b.createdAt === "number"
            ? new Date(b.createdAt)
            : new Date();

    return {
        id,
        slug: typeof b.slug === "string" && b.slug ? b.slug : id,
        category,
        categorySlug: category.toLowerCase().replace(/\s+/g, "-") || "marketing",
        date: createdAt.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
        title,
        author: authorName,
        authorRole: typeof b.authorRole === "string" ? b.authorRole : undefined,
        readTime: typeof b.readTime === "string" && b.readTime ? b.readTime : "5 Mins",
        bannerUrl: typeof b.bannerUrl === "string" ? b.bannerUrl : undefined,
    };
}

/** Published blogs from the API, newest first (matches admin `createdAt` sort). */
export async function fetchPublicBlogs(): Promise<BlogPost[]> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:5000";
        const res = await fetch(`${backendUrl}/api/admin/public-blogs`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];

        const data: { items?: unknown[] } = await res.json();
        return (data.items || []).flatMap((item) => {
            const mapped = mapBlogRecord(item);
            return mapped ? [mapped] : [];
        });
    } catch {
        return [];
    }
}

/** Latest posts for home preview: API blogs first, then static fallback, deduped by slug. */
export async function getLatestBlogsForHome(limit = 3): Promise<BlogPost[]> {
    const dynamicBlogs = await fetchPublicBlogs();
    const dynamicSlugs = new Set(dynamicBlogs.map((b) => b.slug));
    const staticOnly = BLOG_POSTS.filter((b) => !dynamicSlugs.has(b.slug));
    return [...dynamicBlogs, ...staticOnly].slice(0, limit);
}
