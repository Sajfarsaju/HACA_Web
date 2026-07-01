import Link from "next/link";

import { MarketingCtaArrowCircle } from "@/components/marketing/MarketingCtaArrowCircle";
import { fetchPublicBlogs } from "@/lib/blog-api";
import { SeoPageBlogCard } from "@/components/shared/SeoPageBlogCard";

const HEADING_ID = "marketing-seo-kollam-blog-insights-heading";
const HEADING = "Insights, Ideas and Marketing Trends Worth Exploring";
const SUB = "Explore content, industry trends, and practical lessons designed to help you stay informed.";

function ViewMoreLink() {
    return (
        <Link href="/blog" className="group relative inline-flex w-fit shrink-0 cursor-pointer items-center no-underline max-lg:h-[44px] max-lg:gap-[7.33px] max-lg:rounded-full max-lg:bg-[#E8F1FF] max-lg:pl-[14px] max-lg:pr-0 lg:h-[60px]" aria-label="View more marketing blogs and insights">
            <span className="whitespace-nowrap font-['Satoshi',sans-serif] text-[16px] font-medium leading-[100%] text-black lg:hidden">View More</span>
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[22px] bg-[#0066FF] p-[13.2px] lg:hidden" aria-hidden>
                <svg width={17.6} height={17.6} viewBox="0 0 24 24" fill="none" className="block text-white"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div className="relative hidden h-[60px] w-fit rounded-[30px] bg-[#E6EFFF] pl-[20px] pr-[76px] transition-colors duration-300 group-hover:bg-[#d6e4ff] lg:block">
                <span className="flex h-full items-center whitespace-nowrap text-black" style={{ fontFamily: "Satoshi, sans-serif", fontWeight: 500, fontSize: "18px", lineHeight: "100%" }}>View More</span>
            </div>
            <MarketingCtaArrowCircle size="60" className="pointer-events-none absolute right-0 top-0 hidden lg:block" />
        </Link>
    );
}

export async function MarketingSeoBlogInsightsSection() {
    const posts = (await fetchPublicBlogs()).filter((b) => b.category === "Marketing").slice(0, 3);
    return (
        <section id="marketing-seo-kollam-blog-insights" className="w-full bg-white text-black" role="region" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full min-w-0 max-w-[1440px] flex-col gap-[30px] px-5 py-5 lg:px-[60px] lg:py-[30px]">
                <div className="mx-auto flex w-full max-w-[335px] flex-col items-center gap-[10px] lg:mx-0 lg:w-full lg:max-w-none">
                    <h2 id={HEADING_ID} className="m-0 w-full max-w-[335px] text-center font-semibold tracking-[-0.05em] text-black [font-family:'Darker_Grotesque',sans-serif] text-[36px] leading-[1.1] [text-rendering:geometricPrecision] lg:max-w-none lg:text-[55px] lg:leading-[1.1]">{HEADING}</h2>
                    <p className="m-0 w-full max-w-[335px] text-center font-medium tracking-[-0.03em] text-[#000000B2] text-[16px] leading-[1.5] [font-family:'Satoshi',sans-serif] lg:max-w-[700px] lg:text-[18px] lg:leading-[1.4] lg:tracking-normal">{SUB}</p>
                </div>
                {posts.length > 0 && (
                    <ul className="m-0 flex w-full min-w-0 list-none flex-col gap-[17px] p-0 lg:grid lg:grid-cols-3 lg:gap-[30px]" aria-label="Featured marketing blog posts">
                        {posts.map((post, index) => (
                            <li key={post.id} className={["w-full min-w-0", index > 0 ? "hidden lg:block" : ""].filter(Boolean).join(" ")}>
                                <SeoPageBlogCard post={post} />
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex w-full shrink-0 items-center justify-center"><ViewMoreLink /></div>
            </div>
        </section>
    );
}
