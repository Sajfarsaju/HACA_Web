"use client"

import Image from "next/image"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog-data"

function filterByCategory(items: typeof BLOG_POSTS, activeCategory: string) {
    if (activeCategory === "all") return items
    return items.filter((b) => b.categorySlug === activeCategory)
}

export function BlogCardsContainer({ activeCategory }: { activeCategory: string }) {
    const filtered = filterByCategory(BLOG_POSTS, activeCategory)

    return (
        <div className="w-full flex flex-col gap-[clamp(16px,2vw,26px)] px-[clamp(16px,4vw,60px)] pb-[clamp(20px,3vw,40px)]">
            {/* Tablet & desktop: 3 rows × 3 columns, responsive gap and card size */}
            <div className="hidden md:grid w-full max-w-[1320px] mx-auto grid-cols-3 gap-x-[clamp(16px,2vw,26px)] gap-y-[clamp(16px,2vw,26px)]">
                {filtered.map((blog) => (
                    <div key={blog.id} className="min-w-0 w-full">
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </div>

            {/* Mobile: single column, cards horizontally centered */}
            <div className="md:hidden w-full flex flex-col items-center gap-[clamp(16px,4vw,20px)]">
                {filtered.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

function BlogCard({
    blog,
}: {
    blog: { id: number; slug: string; category: string; date: string; title: string }
}) {
    return (
        <article className="w-full flex flex-col bg-transparent border border-[#25317d] box-border overflow-hidden max-md:w-[min(335px,calc(100vw-40px))] rounded-[clamp(12px,1.2vw,20px)] gap-[clamp(12px,1.2vw,20px)] p-[clamp(6px,0.8vw,10px)] border max-md:border-[0.82px]">
            {/* Cover image */}
            <div className="relative w-full aspect-[387/287.72] overflow-hidden shrink-0 rounded-[clamp(12px,1.2vw,20px)]">
                <Image
                    src="/photos/main/blog cover.png"
                    alt={blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) min(335px, calc(100vw - 40px)), (max-width: 1023px) 33vw, 407px"
                />
            </div>

            {/* Card body: no flex-1 so height is content-only; no mt-auto on link so no gap above button */}
            <div className="w-full flex flex-col gap-[clamp(14px,1.5vw,23px)] px-[clamp(8px,1vw,16px)] pb-[clamp(12px,1.2vw,20px)] pt-0 box-border">
                <div className="flex flex-col gap-[clamp(10px,1vw,16px)]">
                    <div className="flex flex-row items-center justify-between gap-[clamp(6px,0.6vw,10px)]">
                        <span className="font-rethink font-medium leading-[100%] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] rounded-[100px] whitespace-nowrap text-[#A7ADBE] text-[clamp(12px,1.1vw,16px)] py-[clamp(5px,0.5vw,8px)] px-[clamp(10px,1vw,16px)]">
                            {blog.category}
                        </span>
                        <span className="font-rethink font-medium text-[#6d7792] whitespace-nowrap text-[clamp(12px,1.1vw,16px)] leading-[1.2]">
                            {blog.date}
                        </span>
                    </div>
                    <h3 className="font-rethink font-semibold text-white m-0 text-[clamp(14px,1.3vw,20px)] leading-[clamp(21px,1.8vw,30px)]">
                        {blog.title}
                    </h3>
                </div>
                <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center w-fit no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-97"
                    aria-label="Read full blog"
                >
                    <Image
                        src="/photos/main/read full blog.svg"
                        alt="Read Full Blog"
                        width={123}
                        height={26}
                        className="block h-[clamp(20px,2vw,26px)] w-auto"
                    />
                </Link>
            </div>
        </article>
    )
}
