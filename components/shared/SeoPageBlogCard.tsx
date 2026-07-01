import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

const FALLBACK_IMAGE = "/photos/schools/marketing/ZcJAlPgAi41q3RtmnhrDwOeQ46A.png.webp";

function ChevronRight() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function SeoPageBlogCard({ post }: { post: BlogPost }) {
    const href = `/blog/${post.slug}`;
    const imgSrc = post.bannerUrl || FALLBACK_IMAGE;

    return (
        <article className="
            box-border flex w-full min-w-0 flex-col bg-[#E6EFFF]
            gap-[17px] rounded-[17px] p-[17px]
            lg:gap-5 lg:rounded-[20px] lg:p-5
            transition-transform duration-300 hover:scale-[1.04] cursor-pointer
        ">
            <div className="relative w-full shrink-0 overflow-hidden rounded-[12px] bg-white aspect-[16/9] lg:rounded-[14px]">
                <Image
                    src={imgSrc}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 347px"
                    unoptimized={imgSrc.startsWith("http")}
                />
            </div>

            <div className="flex min-h-0 w-full flex-1 flex-col gap-[20px] pb-[17px] lg:gap-[23px] lg:pb-5">
                <div className="flex min-h-0 w-full flex-1 flex-col gap-[14px] lg:gap-4">
                    <div className="flex h-7 w-full shrink-0 items-center gap-[9px] lg:h-8 lg:gap-[10px]">
                        <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-[17px] bg-white px-[9px] py-[4px] font-['Satoshi',sans-serif] text-[14px] font-medium text-black lg:h-8 lg:rounded-[20px] lg:px-2.5 lg:py-[5px] lg:text-[16px]">
                            {post.category}
                        </span>
                        <span className="size-[3.5px] shrink-0 rounded-full bg-black lg:size-1" aria-hidden />
                        <time dateTime={post.date} className="font-['Satoshi',sans-serif] text-[14px] font-medium text-black lg:text-[16px]">
                            {post.date}
                        </time>
                    </div>

                    <h3 className="m-0 line-clamp-2 min-h-0 w-full text-left font-bold text-black [font-family:'Darker_Grotesque',sans-serif] text-[22px] leading-[1.18] lg:text-[26px] lg:leading-[1.15]">
                        <Link href={href} className="text-inherit no-underline">
                            {post.title}
                        </Link>
                    </h3>
                </div>

                <Link
                    href={href}
                    className="mt-auto inline-flex h-[23px] shrink-0 items-center gap-1 self-start font-['Satoshi',sans-serif] text-[14px] font-medium text-black no-underline lg:h-[26px] lg:text-[15px]"
                >
                    Read Full Blog
                    <ChevronRight />
                </Link>
            </div>
        </article>
    );
}
