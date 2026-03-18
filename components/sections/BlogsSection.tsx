import Image from "next/image"
import { motion } from "framer-motion"

/* ── Blog card data — same cover for all until real content provided ── */
const blogs = [
    {
        id: 1,
        category: "Graphic Design",
        date: "Aug 19, 2025",
        title: "A Complete Guide on How to Design a Logo in Photoshop",
    },
    {
        id: 2,
        category: "UI/UX Design",
        date: "Sep 04, 2025",
        title: "A Complete Guide on How to Design a Logo in Photoshop",
    },
    {
        id: 3,
        category: "Digital Marketing",
        date: "Oct 12, 2025",
        title: "A Complete Guide on How to Design a Logo in Photoshop",
    },
]

export function BlogsSection() {
    return (
        <section className="w-full section-4k mx-auto bg-[#000210] p-[36px_60px] flex flex-col items-center gap-[26px] box-border max-md:p-[20px]" aria-label="The Learning Space">

            {/* ─── Header ─── */}
            <div className="w-full max-w-[300px] flex flex-col items-center gap-[10px] max-md:max-w-[335px] max-md:self-start max-md:items-start max-md:gap-[7.97px]">
                {/* Pill button — viewBox 133×64, inner pill 111×42 */}
                <button className="bg-transparent border-none p-0 cursor-pointer w-[133px] h-[64px] flex items-center shrink-0 transition-transform duration-200 ease-in-out hover:scale-104 active:scale-96 max-md:w-[93.5px] max-md:h-auto" aria-label="Blogs">
                    <Image
                        src="/photos/main/blogs arrow.svg"
                        alt="Blogs"
                        width={133}
                        height={64}
                        className="w-full h-auto block"
                        priority
                    />
                </button>

                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#ffffff] m-0 text-center max-md:text-[22px] max-md:text-left">The Learning Space</h2>
            </div>

            {/* ─── Cards grid ─── */}
            <div className="w-full max-w-[min(1320px,91vw)] flex flex-row justify-between gap-0 max-[1200px]:justify-center max-[1200px]:gap-[26px] max-md:flex-col max-md:gap-[20px] max-md:max-w-[335px] max-md:self-center">
                {blogs.map((blog) => (
                    <article key={blog.id} className="w-[calc(407/1320*100%)] flex flex-col gap-[20px] bg-transparent border border-[#25317d] rounded-[20px] p-[10px] box-border overflow-hidden max-[1200px]:w-[calc(50%-13px)] max-[1200px]:max-w-[407px] [&:nth-child(3)]:max-[1200px]:hidden max-md:w-full max-md:p-[8.23px] max-md:gap-[16.46px] max-md:rounded-[16.46px] max-md:border-[0.82px] [&:nth-child(n+3)]:max-md:hidden">

                        {/* Cover image — 387×287.72 desktop, proportional mobile */}
                        <div className="relative w-full aspect-[387/287.72] rounded-[20px] overflow-hidden shrink-0 max-md:rounded-[16.46px] max-md:aspect-[318.54/236.82]">
                            <Image
                                src="/photos/main/blog cover.png"
                                alt={blog.title}
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
                                    <span className="font-rethink font-medium text-[16px] leading-[100%] color-[#a7adbe] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_16px] rounded-[100px] whitespace-nowrap max-md:text-[13px] max-md:p-[6.58px_13.17px] max-md:rounded-[82.31px] text-[#A7ADBE]">{blog.category}</span>
                                    <span className="font-rethink font-medium text-[16px] leading-[19.2px] text-[#6d7792] whitespace-nowrap max-md:text-[13px]">{blog.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="font-rethink font-semibold text-[20px] leading-[30px] color-[#ffffff] m-0 max-md:text-[16px] max-md:leading-[24.69px] text-white">{blog.title}</h3>
                            </div>

                            {/* Read Full Blog link — viewBox from SVG */}
                            <a href="#" className="inline-flex items-center no-underline transition-transform duration-200 ease-in-out w-fit hover:scale-104 active:scale-97" aria-label="Read full blog">
                                <Image
                                    src="/photos/main/read full blog.svg"
                                    alt="Read Full Blog"
                                    width={123}
                                    height={26}
                                    className="block h-[26px] w-auto"
                                />
                            </a>

                        </div>
                    </article>
                ))}
            </div>

            {/* ─── Bottom CTA ─── */}
            <div className="flex justify-center">
                <a
                    href="#"
                    className="inline-flex no-underline transition-transform duration-200 ease-in-out hover:scale-105 active:scale-97"
                    aria-label="Read more blogs"
                >
                    <motion.button
                        className="group relative w-[176px] h-[55px] rounded-[100px] border-none cursor-pointer flex items-center justify-center bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-[24px] max-md:w-[160px] max-md:h-[46px] max-md:px-[18px] max-md:rounded-[82px] overflow-hidden"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                    >
                        <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                            Read More Blogs
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[18px] leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                            Read More Blogs
                        </span>
                    </motion.button>
                </a>
            </div>

        </section>
    )
}
