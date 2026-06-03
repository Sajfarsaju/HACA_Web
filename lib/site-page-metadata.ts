import type { Metadata } from "next";

export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://harisandcoacademy.com";

type SitePageMetadataInput = {
    title: string;
    description: string;
    canonical: string;
    openGraphType?: "website" | "article";
};

export function buildSitePageMetadata({
    title,
    description,
    canonical,
    openGraphType = "article",
}: SitePageMetadataInput): Metadata {
    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: "Haris & Co Academy",
            type: openGraphType,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}
