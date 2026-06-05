import { MetadataRoute } from "next";
import { DESIGN_SCHOOL_SEO_PATHS } from "@/lib/design-school-seo";
import {
    DIGITAL_MARKETING_CALICUT_SEO_PATH,
    DIGITAL_MARKETING_ERNAKULAM_SEO_PATH,
    DIGITAL_MARKETING_KANNUR_SEO_PATH,
    DIGITAL_MARKETING_KASARAGOD_SEO_PATH,
    DIGITAL_MARKETING_KERALA_SEO_PATH,
    DIGITAL_MARKETING_KOCHI_SEO_PATH,
    DIGITAL_MARKETING_KOLLAM_SEO_PATH,
    DIGITAL_MARKETING_MALAPPURAM_SEO_PATH,
    DIGITAL_MARKETING_PALAKKAD_SEO_PATH,
    DIGITAL_MARKETING_THRISSUR_SEO_PATH,
    DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH,
    DIGITAL_MARKETING_WAYANAD_SEO_PATH,
    DIGITAL_MARKETING_DUBAI_SEO_PATH,
    DIGITAL_MARKETING_SHARJAH_SEO_PATH,
    DIGITAL_MARKETING_KOTTAYAM_SEO_PATH,
    DIGITAL_MARKETING_ALAPPUZHA_SEO_PATH,
    DIGITAL_MARKETING_MALAYALAM_SEO_PATH,
    ONLINE_DIGITAL_MARKETING_INDIA_SEO_PATH,
    HACA_AE_SEO_PATH,
} from "@/lib/marketing-school-seo";
import {
    CODING_KERALA_SEO_PATH,
    DATA_ANALYTICS_KERALA_SEO_PATH,
    PYTHON_CALICUT_SEO_PATH,
} from "@/lib/tech-school-seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisandcoacademy.com";

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = NonNullable<SitemapEntry["changeFrequency"]>;

function toEntry(
    path: string,
    opts?: { priority?: number; changeFrequency?: ChangeFrequency }
): SitemapEntry {
    return {
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: opts?.changeFrequency ?? "weekly",
        priority: opts?.priority ?? 0.8,
    };
}

const MARKETING_SEO_PATHS = [
    DIGITAL_MARKETING_CALICUT_SEO_PATH,
    DIGITAL_MARKETING_KERALA_SEO_PATH,
    DIGITAL_MARKETING_KANNUR_SEO_PATH,
    DIGITAL_MARKETING_TRIVANDRUM_SEO_PATH,
    DIGITAL_MARKETING_KOLLAM_SEO_PATH,
    DIGITAL_MARKETING_KASARAGOD_SEO_PATH,
    DIGITAL_MARKETING_PALAKKAD_SEO_PATH,
    DIGITAL_MARKETING_WAYANAD_SEO_PATH,
    DIGITAL_MARKETING_KOCHI_SEO_PATH,
    DIGITAL_MARKETING_MALAPPURAM_SEO_PATH,
    DIGITAL_MARKETING_THRISSUR_SEO_PATH,
    DIGITAL_MARKETING_ERNAKULAM_SEO_PATH,
    HACA_AE_SEO_PATH,
    DIGITAL_MARKETING_DUBAI_SEO_PATH,
    DIGITAL_MARKETING_SHARJAH_SEO_PATH,
    DIGITAL_MARKETING_KOTTAYAM_SEO_PATH,
    DIGITAL_MARKETING_ALAPPUZHA_SEO_PATH,
    DIGITAL_MARKETING_MALAYALAM_SEO_PATH,
    ONLINE_DIGITAL_MARKETING_INDIA_SEO_PATH,
] as const;

const TECH_SEO_PATHS = [
    DATA_ANALYTICS_KERALA_SEO_PATH,
    PYTHON_CALICUT_SEO_PATH,
    CODING_KERALA_SEO_PATH,
] as const;

const CORE_PAGES: Array<{ path: string; priority?: number; changeFrequency?: ChangeFrequency }> = [
    { path: "", priority: 1, changeFrequency: "daily" },
    { path: "/about", priority: 0.7 },
    { path: "/solutions", priority: 0.7 },
    { path: "/pricing", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/courses", priority: 0.75 },
    { path: "/blog", priority: 0.85, changeFrequency: "daily" },
    { path: "/success-story", priority: 0.75 },
    { path: "/marketing-school", priority: 0.9 },
    { path: "/marketing-school/courses", priority: 0.8 },
    { path: "/marketing-school/success-story", priority: 0.75 },
    { path: "/design-school", priority: 0.9 },
    { path: "/design-school/courses", priority: 0.8 },
    { path: "/design-school/projects", priority: 0.75 },
    { path: "/design-school/success-story", priority: 0.75 },
    { path: "/tech-school", priority: 0.9 },
    { path: "/tech-school/tech-courses", priority: 0.8 },
    { path: "/tech-school/tech-projects", priority: 0.75 },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
];

async function getBlogSlugs(): Promise<string[]> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://127.0.0.1:5000";
        const res = await fetch(`${backendUrl}/api/admin/public-blogs`, {
            next: { revalidate: 3600 },
            signal: AbortSignal.timeout(3000),
        });

        if (!res.ok) return [];

        const data: { items?: unknown[] } = await res.json();
        const slugs: string[] = [];

        for (const item of data.items ?? []) {
            if (!item || typeof item !== "object") continue;
            const blog = item as Record<string, unknown>;
            const slug =
                typeof blog.slug === "string" && blog.slug
                    ? blog.slug
                    : typeof blog._id === "string" || typeof blog._id === "number"
                      ? String(blog._id)
                      : null;
            if (slug) slugs.push(slug);
        }

        return slugs;
    } catch {
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogSlugs = await getBlogSlugs();

    return [
        ...CORE_PAGES.map(({ path, priority, changeFrequency }) =>
            toEntry(path, { priority, changeFrequency })
        ),
        ...MARKETING_SEO_PATHS.map((path) => toEntry(path, { priority: 0.85 })),
        ...DESIGN_SCHOOL_SEO_PATHS.map((path) => toEntry(path, { priority: 0.85 })),
        ...TECH_SEO_PATHS.map((path) => toEntry(path, { priority: 0.85 })),
        ...blogSlugs.map((slug) =>
            toEntry(`/blog/${slug}`, { priority: 0.7, changeFrequency: "monthly" })
        ),
    ];
}
