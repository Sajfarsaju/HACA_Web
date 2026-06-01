import Image from "next/image"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog-data"

/** First three posts — matches previous home preview count */
const homeBlogs = BLOG_POSTS.slice(0, 3)

const blogCardLinkClass =
    "w-[calc(407/1320*100%)] flex flex-col gap-[20px] bg-transparent border border-[#25317d] rounded-[20px] p-[10px] box-border overflow-hidden max-[1200px]:w-[calc(50%-13px)] max-[1200px]:max-w-[407px] [&:nth-child(3)]:max-[1200px]:hidden max-md:w-full max-md:p-[8.23px] max-md:gap-[16.46px] max-md:rounded-[16.46px] max-md:border-[0.82px] [&:nth-child(n+3)]:max-md:hidden transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C75FF]/80"

export function BlogsSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] p-[20px_60px] flex flex-col items-center gap-[20px] box-border max-[1100px]:px-[clamp(24px,4vw,50px)] max-md:p-[20px_clamp(16px,5vw,24px)]" aria-label="The Learning Space">

            {/* ─── Header ─── */}
            <div className="w-full max-w-[300px] flex flex-col items-center gap-[10px] max-md:max-w-[335px] max-md:self-center max-md:items-center max-md:gap-[7.97px]">
                {/* Pill button — viewBox 133×64, inner pill 111×42 */}
                <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="Blogs">
                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">Blogs</span>
                    <span className="flex items-center justify-center shrink-0 w-[38px] h-[26px] max-md:w-[24px] max-md:h-[16.42px]" aria-hidden="true">
                        <Image
                            src="/photos/main/blue arrow.svg"
                            alt=""
                            width={38}
                            height={26}
                            className="w-full h-full object-contain"
                        />
                    </span>
                </button>

                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#ffffff] m-0 text-center max-md:text-[22px] max-md:text-center">The Learning Space</h2>
            </div>

            {/* ─── Cards grid — whole card links to post; hover grows slightly ─── */}
            <div className="w-full max-w-[min(1320px,91vw)] max-md:max-w-none flex flex-row justify-between gap-0 max-[1200px]:justify-center max-[1200px]:gap-[26px] max-md:flex-col max-md:gap-[20px] max-md:max-w-[335px] max-md:self-center">
                {homeBlogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={`/blog/${blog.slug}`}
                        className={blogCardLinkClass}
                        aria-label={`Read blog: ${blog.title}`}
                    >
                        {/* Cover image — 387×287.72 desktop, proportional mobile */}
                        <div className="relative w-full aspect-[387/287.72] rounded-[20px] overflow-hidden shrink-0 max-md:rounded-[16.46px] max-md:aspect-[318.54/236.82]">
                            <Image
                                src="/photos/main/blog cover.webp"
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width: 767px) 100vw, 33vw"
                            />
                        </div>

                        {/* Card body */}
                        <div className="w-full flex flex-col gap-[23px] p-[0_16px_20px_16px] box-border max-md:p-[0_13.17px_16.46px_13.17px] max-md:gap-[18.93px]">

                            {/* Meta row + title */}
                            <div className="flex flex-col gap-[16px] max-md:gap-[13.17px]">

                                {/* Meta: category tag + date */}
                                <div className="flex flex-row items-center justify-between gap-[10px] max-md:gap-[8.23px]">
                                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_16px] rounded-[100px] whitespace-nowrap max-md:text-[13px] max-md:p-[6.58px_13.17px] max-md:rounded-[82.31px]">{blog.category}</span>
                                    <span className="font-rethink font-medium text-[16px] leading-[19.2px] text-[#6d7792] whitespace-nowrap max-md:text-[13px]">{blog.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="font-rethink font-semibold text-[20px] leading-[30px] m-0 max-md:text-[16px] max-md:leading-[24.69px] text-white">{blog.title}</h3>
                            </div>

                            {/* Read Full Blog — decorative; navigation is the whole card */}
                            <span className="inline-flex items-center w-fit pointer-events-none" aria-hidden="true">
                                <Image
                                    src="/photos/main/read full blog.svg"
                                    alt=""
                                    width={123}
                                    height={26}
                                    className="block h-[26px] w-auto"
                                />
                            </span>

                        </div>
                    </Link>
                ))}
            </div>

            {/* ─── Bottom CTA ─── */}
            <div className="flex justify-center">
                <Link
                    href="/blog"
                    className="group relative inline-flex no-underline w-[176px] h-[55px] rounded-[100px] items-center justify-center bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-[24px] max-md:w-[160px] max-md:h-[46px] max-md:px-[18px] max-md:rounded-[82px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 active:scale-97"
                    aria-label="Read more blogs"
                >
                    <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                        Read More Blogs
                    </span>
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                        Read More Blogs
                    </span>
                </Link>
            </div>

        </section>
    )
}
