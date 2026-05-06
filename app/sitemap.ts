import { MetadataRoute } from "next";
import { DESIGN_SCHOOL_SEO_PATHS } from "@/lib/design-school-seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisandcoacademy.com";

    const coreRoutes = [
        "",
        "/about",
        "/solutions",
        "/pricing",
        "/contact",
        "/blog",
        "/legal/privacy",
        "/legal/terms",
        ...DESIGN_SCHOOL_SEO_PATHS,
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
        priority: route === "" ? 1 : route.startsWith("/graphic-") || route.includes("design") ? 0.85 : 0.8,
    }));

    return coreRoutes;
}
