import Image from "next/image";
import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";

const HEADING_ID = "dubai-blog-insights-heading";
const VIEW_MORE_HREF = "/blog";
const CARD_IMAGE_SRC = "/photos/schools/marketing/ZcJAlPgAi41q3RtmnhrDwOeQ46A.png.webp";

type PlaceholderPost = {
    id: string;
    category: string;
    dateLabel: string;
    dateIso: string;
    title: string;
    href: string;
};

const PLACEHOLDER_POSTS: PlaceholderPost[] = [
    { id: "p-1", category: "Graphic Design", dateLabel: "Aug 19, 2025", dateIso: "2025-08-19", title: "A Complete Guide on How to Design a Logo in Photoshop", href: VIEW_MORE_HREF },
    { id: "p-2", category: "Graphic Design", dateLabel: "Aug 19, 2025", dateIso: "2025-08-19", title: "A Complete Guide on How to Design a Logo in Photoshop", href: VIEW_MORE_HREF },
    { id: "p-3", category: "Graphic Design", dateLabel: "Aug 19, 2025", dateIso: "2025-08-19", title: "A Complete Guide on How to Design a Logo in Photoshop", href: VIEW_MORE_HREF },
];

function ChevronRight({ className }: { className?: string }) {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ViewMoreLink() {
    return (
        <Link
            href={VIEW_MORE_HREF}
            className="
                group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline
                max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0
                lg:h-[60px]
            "
            aria-label="View more marketing blog insights"
        >
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] text-black lg:hidden">
                View More
            </span>
            <span
                className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden"
                aria-hidden
            >
                <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block text-white">
                    <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span className="flex h-full items-center whitespace-nowrap text-black" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}>
                    View More
                </span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </Link>
    );
}

function BlogCard({ post }: { post: PlaceholderPost }) {
    return (
        <article className="box-border flex h-[444px] w-full min-w-0 flex-col bg-[#E6EFFF] gap-[17px] rounded-[17px] p-[17px] lg:h-[512px] lg:gap-5 lg:rounded-[20px] lg:p-5">
            <div className="relative w-full shrink-0 overflow-hidden rounded-[12px] bg-white h-[239px] lg:h-[276px] lg:rounded-[14px]">
                <Image
                    src={CARD_IMAGE_SRC}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 347px"
                />
            </div>

            <div className="flex min-h-0 w-full flex-1 flex-col gap-[20px] pb-[17px] lg:gap-[23px] lg:pb-5">
                <div className="flex min-h-0 w-full flex-1 flex-col gap-[14px] lg:gap-4">
                    <div className="flex h-7 w-full shrink-0 items-center gap-[9px] lg:h-8 lg:gap-[10px]">
                        <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-[17px] bg-white px-[9px] py-[4px] font-['Satoshi',sans-serif] text-[14px] font-medium text-black lg:h-8 lg:rounded-[20px] lg:px-2.5 lg:py-[5px] lg:text-[16px]">
                            {post.category}
                        </span>
                        <span className="size-[3.5px] shrink-0 rounded-full bg-black lg:size-1" aria-hidden />
                        <time dateTime={post.dateIso} className="font-['Satoshi',sans-serif] text-[14px] font-medium text-black lg:text-[16px]">
                            {post.dateLabel}
                        </time>
                    </div>

                    <h3 className="m-0 line-clamp-2 min-h-0 w-full text-left font-bold text-black [font-family:'Darker_Grotesque',sans-serif] text-[22px] leading-[1.18] lg:text-[26px] lg:leading-[1.15]">
                        <Link href={post.href} className="text-inherit no-underline hover:underline">
                            {post.title}
                        </Link>
                    </h3>
                </div>

                <Link
                    href={post.href}
                    className="mt-auto inline-flex h-[23px] shrink-0 items-center gap-1 self-start font-['Satoshi',sans-serif] text-[14px] font-medium text-black no-underline hover:underline lg:h-[26px] lg:text-[15px]"
                >
                    Read Full Blog
                    <ChevronRight className="mt-px shrink-0" />
                </Link>
            </div>
        </article>
    );
}

export function DubaiBlogInsightsSection() {
    return (
        <section
            id="dubai-blog-insights"
            className="w-full bg-white text-black"
            role="region"
            aria-labelledby={HEADING_ID}
        >
            <div
                className="
                    mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[30px]
                    px-5 py-5
                    lg:px-[60px] lg:py-[30px]
                "
            >
                {/* Heading + description */}
                <div className="mx-auto flex w-full max-w-[335px] flex-col items-center gap-[10px] lg:mx-0 lg:w-full lg:max-w-none">
                    <h2
                        id={HEADING_ID}
                        className="
                            m-0 w-full max-w-[335px] text-center font-semibold tracking-[-0.05em] text-black
                            [font-family:'Darker_Grotesque',sans-serif]
                            text-[36px] leading-[1.1] [text-rendering:geometricPrecision]
                            lg:max-w-none lg:text-[55px] lg:leading-[1.1]
                        "
                    >
                        Explore Digital Marketing Insights &amp; Industry Trends
                    </h2>
                    <p
                        className="
                            m-0 w-full max-w-[335px] text-center font-medium tracking-[-0.03em] text-[#000000B2]
                            text-[16px] leading-[1.5]
                            [font-family:'Satoshi',sans-serif]
                            lg:max-w-[700px] lg:text-[18px] lg:leading-[1.4] lg:tracking-normal
                        "
                    >
                        Explore beginner-friendly guides, AI marketing updates, campaign strategies, and real lessons
                        designed to help you learn beyond the classroom.
                    </p>
                </div>

                {/* Blog cards — 3 column desktop, single on mobile */}
                <ul
                    className="m-0 flex w-full min-w-0 list-none flex-col gap-[17px] p-0 lg:grid lg:grid-cols-3 lg:gap-[30px]"
                    aria-label="Marketing blog posts and insights"
                >
                    {PLACEHOLDER_POSTS.map((post, index) => (
                        <li
                            key={post.id}
                            className={["w-full min-w-0", index > 0 ? "hidden lg:block" : ""].filter(Boolean).join(" ")}
                        >
                            <BlogCard post={post} />
                        </li>
                    ))}
                </ul>

                {/* View More CTA */}
                <div className="flex w-full shrink-0 items-center justify-center">
                    <ViewMoreLink />
                </div>
            </div>
        </section>
    );
}
