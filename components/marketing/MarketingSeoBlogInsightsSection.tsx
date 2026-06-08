"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";
import { getPublicBackendBase } from "@/lib/placements-api";

const HEADING_ID = "marketing-seo-blog-insights-heading";
const VIEW_MORE_HREF = "/blog";
const FALLBACK_IMG = "/photos/schools/marketing/ZcJAlPgAi41q3RtmnhrDwOeQ46A.png.webp";
const HEADING = "Insights, Trends & Real Digital Marketing Lessons";
const SUB = "Learn beyond the classrooms and explore insights, trends, and ideas that keep you one step ahead.";

type BlogItem = {
    id: string;
    slug: string;
    category: string;
    date: string;
    title: string;
    bannerUrl?: string;
};

const PLACEHOLDER: BlogItem[] = [
    { id: "p-1", slug: "", category: "Marketing", date: "Aug 19, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop" },
    { id: "p-2", slug: "", category: "Marketing", date: "Aug 19, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop" },
    { id: "p-3", slug: "", category: "Marketing", date: "Aug 19, 2025", title: "A Complete Guide on How to Design a Logo in Photoshop" },
];

function formatDate(raw: string): string {
    try {
        return new Date(raw).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    } catch {
        return raw;
    }
}

function MobileViewMoreArrow() {
    return (
        <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden" aria-hidden>
            <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block shrink-0 text-white">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

function BlogInsightsViewMoreLink() {
    return (
        <Link
            href={VIEW_MORE_HREF}
            className="group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0 lg:h-[60px]"
            aria-label="View more marketing blogs and insights"
        >
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] tracking-normal text-black lg:hidden">
                View More
            </span>
            <MobileViewMoreArrow />
            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span className="flex h-full items-center whitespace-nowrap text-black" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}>
                    View More
                </span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </Link>
    );
}

function ChevronRight({ className }: { className?: string }) {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function BlogInsightCard({ post }: { post: BlogItem }) {
    const href = post.slug ? `/blog/${post.slug}` : VIEW_MORE_HREF;
    const imgSrc = post.bannerUrl || FALLBACK_IMG;

    return (
        <article className="box-border flex w-full min-w-0 flex-col bg-[#E6EFFF] opacity-100 gap-[17.31px] rounded-[17.31px] p-[17.31px] lg:w-full lg:gap-5 lg:rounded-[20px] lg:p-5">
            <div className="relative w-full shrink-0 overflow-hidden rounded-[12.12px] bg-white aspect-[871/514] lg:rounded-[14px]">
                <Image
                    src={imgSrc}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 347px"
                    unoptimized={imgSrc.startsWith("http")}
                />
            </div>
            <div className="flex min-h-0 w-full flex-col gap-[19.91px] pb-[17.31px] lg:w-full lg:gap-[23px] lg:pb-5">
                <div className="flex min-h-0 w-full flex-1 flex-col gap-[13.85px] lg:gap-4">
                    <div className="flex h-[27.656330108642578px] w-full shrink-0 items-center gap-[8.66px] lg:h-8 lg:max-w-full lg:gap-[10px]">
                        <span className="inline-flex h-[27.656330108642578px] shrink-0 items-center justify-center rounded-[17.31px] bg-white px-[8.66px] py-[4.33px] font-['Satoshi',sans-serif] text-[14px] font-medium leading-[100%] tracking-normal text-black lg:h-8 lg:w-[132px] lg:rounded-[20px] lg:px-2.5 lg:py-[5px] lg:text-[16px]">
                            {post.category}
                        </span>
                        <span className="size-[3.4625322818756104px] shrink-0 rounded-[3.4625322818756104px] bg-black lg:size-1 lg:rounded-[4px]" aria-hidden />
                        <time dateTime={post.date} className="font-['Satoshi',sans-serif] text-[14px] font-medium leading-[16.62px] tracking-normal text-black lg:text-[16px] lg:leading-[19.2px]">
                            {post.date}
                        </time>
                    </div>
                    <h3 className="m-0 line-clamp-2 min-h-0 w-full text-left font-bold tracking-normal text-black [font-family:'Darker_Grotesque',sans-serif] text-[22px] leading-[25.97px] lg:text-[26px] lg:leading-[30px]">
                        <Link href={href} className="text-inherit no-underline hover:underline">
                            {post.title}
                        </Link>
                    </h3>
                </div>
                <Link href={href} className="mt-auto inline-flex h-[23px] min-w-[91px] shrink-0 items-center gap-1 self-start font-['Satoshi',sans-serif] text-[14px] font-medium leading-[22.07px] tracking-normal text-black no-underline hover:underline lg:h-[26px] lg:min-w-[100px] lg:text-[15.5px] lg:leading-[25.5px]">
                    Read Full Blog
                    <ChevronRight className="mt-px shrink-0" />
                </Link>
            </div>
        </article>
    );
}

export function MarketingSeoBlogInsightsSection() {
    const [posts, setPosts] = useState<BlogItem[]>(PLACEHOLDER);

    const load = useCallback(async () => {
        try {
            const base = getPublicBackendBase();
            const res = await fetch(`${base}/api/admin/public-blogs`, { cache: "no-store" });
            if (!res.ok) return;
            const data: { items?: Record<string, unknown>[] } = await res.json();
            const items = (data.items ?? [])
                .filter((b) => typeof b.category === "string" && b.category.toLowerCase() === "marketing")
                .slice(0, 3)
                .map((b) => ({
                    id: String(b._id ?? Math.random()),
                    slug: typeof b.slug === "string" ? b.slug : "",
                    category: typeof b.category === "string" ? b.category : "Marketing",
                    date: typeof b.createdAt === "string" ? formatDate(b.createdAt) : "",
                    title: typeof b.title === "string" ? b.title : "",
                    bannerUrl: typeof b.bannerUrl === "string" && b.bannerUrl ? b.bannerUrl : undefined,
                }))
                .filter((b) => b.title);
            if (items.length > 0) setPosts(items);
        } catch {
            // keep placeholder
        }
    }, []);

    useEffect(() => { load(); }, [load]);

    return (
        <section id="marketing-seo-blog-insights" className="w-full bg-white text-black opacity-100" role="region" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[30px] px-5 pb-5 pt-5 min-h-[722.34px] lg:min-h-[756.72px] lg:px-[60px] lg:pb-[30px] lg:pt-[30px]">
                <div className="mx-auto flex w-full max-w-[335px] flex-col items-center gap-[10px] lg:mx-0 lg:w-full lg:max-w-none">
                    <h2 id={HEADING_ID} className="m-0 w-full max-w-[335px] text-center font-semibold tracking-[-0.05em] text-black [font-family:'Darker_Grotesque',sans-serif] text-[36px] leading-[1.1] [text-rendering:geometricPrecision] lg:max-w-[656px] lg:text-[55px] lg:leading-[1.1]">
                        {HEADING}
                    </h2>
                    <p className="m-0 w-full max-w-[335px] text-center font-medium tracking-[-0.05em] text-[#000000B2] text-[16px] leading-[1.5] [font-family:'Satoshi',sans-serif] lg:max-w-[912px] lg:text-[18px] lg:leading-[1.2] lg:tracking-normal">
                        {SUB}
                    </p>
                </div>
                <ul className="m-0 flex w-full min-w-0 list-none flex-col gap-[17.31px] p-0 lg:grid lg:w-full lg:grid-cols-3 lg:gap-[30px]" aria-label="Featured marketing blog posts">
                    {posts.map((post, index) => (
                        <li key={post.id} className={["w-full min-w-0 lg:min-w-0", index > 0 ? "hidden lg:block" : ""].filter(Boolean).join(" ")}>
                            <BlogInsightCard post={post} />
                        </li>
                    ))}
                </ul>
                <div className="flex w-full shrink-0 items-center justify-center">
                    <BlogInsightsViewMoreLink />
                </div>
            </div>
        </section>
    );
}
