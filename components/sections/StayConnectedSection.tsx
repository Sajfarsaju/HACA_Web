"use client"

import Image from "next/image"
import { motion } from "framer-motion"

/** One social card — logo + Instagram button + YouTube button */
interface SocialCardProps {
    logoSrc: string
    logoAlt: string
    logoW: number
    logoH: number
    instagramHref?: string
    youtubeHref?: string
}

function SocialCard({ logoSrc, logoAlt, logoW, logoH, instagramHref = "#", youtubeHref = "#" }: SocialCardProps) {
    return (
        <motion.div
            className="relative w-[calc(430/1320*100%)] min-h-[163px] bg-[#000319] border border-[#25317d] rounded-[20px] p-[20px] box-border flex flex-row justify-between items-center shrink-0 overflow-hidden max-[1200px]:p-[12px] max-md:w-full max-md:min-h-[126.98px] max-md:rounded-[15.58px] max-md:border-[0.78px] max-md:p-[15.58px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Grid background: subtle, fading from top-left to bottom-right, only behind logo (not under buttons) */}
            <div
                className="pointer-events-none absolute inset-y-[1px] left-[1px] right-[35%] rounded-[18px]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(to right, rgba(51,85,170,0.14) 0, rgba(51,85,170,0.14) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(to bottom, rgba(51,85,170,0.14) 0, rgba(51,85,170,0.14) 1px, transparent 1px, transparent 28px)",
                    backgroundBlendMode: "screen",
                    backgroundPosition: "left top",
                    WebkitMaskImage:
                        "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)",
                    maskImage:
                        "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0) 100%)",
                }}
            />

            {/* ─── Logo ─── */}
            <div className="flex items-center justify-center flex-1 min-w-0 relative z-[1]">
                <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={logoW}
                    height={logoH}
                    className="w-auto h-[33px] max-w-full object-contain block max-[1200px]:h-[54px] max-md:h-[25.66px]"
                />
            </div>

            {/* ─── Social Buttons ─── */}
            <div className="flex flex-col gap-[7px] items-end justify-center basis-[156px] grow-0 shrink min-w-[100px] max-[1200px]:basis-[110px] max-md:gap-[5.45px] relative z-[1]">
                {/* Instagram */}
                <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="block leading-[0] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 w-full">
                    <Image
                        src="/photos/main/insta button.svg"
                        alt="Instagram"
                        width={139}
                        height={63}
                        className="w-[114.4%] h-auto block -mr-[7.2%] max-md:w-[139px]"
                    />
                </a>
                {/* YouTube */}
                <a href={youtubeHref} target="_blank" rel="noopener noreferrer" className="block leading-[0] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 w-full">
                    <Image
                        src="/photos/main/youtube button.svg"
                        alt="YouTube"
                        width={178}
                        height={80}
                        className="w-[114.1%] h-auto block -mr-[7.05%] max-md:w-[138.7px]"
                    />
                </a>
            </div>
        </motion.div>
    )
}

/** Social cards data — logos vary per card */
const cards: SocialCardProps[] = [
    { logoSrc: "/photos/common/haca logo.svg", logoAlt: "HACA", logoW: 113, logoH: 33 },
    { logoSrc: "/photos/common/haca uae.svg", logoAlt: "HACA UAE", logoW: 113, logoH: 33 },
    { logoSrc: "/photos/main/haca degital marketing.svg", logoAlt: "Digital Marketing", logoW: 113, logoH: 33 },
    { logoSrc: "/photos/main/haca design school.svg", logoAlt: "Design School", logoW: 113, logoH: 33 },
    { logoSrc: "/photos/main/haca tech school.svg", logoAlt: "Tech School", logoW: 113, logoH: 33 },
    { logoSrc: "/photos/main/haca FINANCE SCHOOL.svg", logoAlt: "Finance School", logoW: 113, logoH: 33 },
]

export function StayConnectedSection() {
    return (
        /* ─── Outer Section: 1440×563 desktop | 375×1016 mobile ─── */
        <section className="w-full section-4k mx-auto bg-[#000210] p-[26px_60px] flex flex-col items-center gap-[36px] box-border max-md:p-[20px] max-md:gap-[26px]" aria-label="Stay Connected">

            {/* ─── Header: 332×131 desktop | 335×88 mobile ─── */}
            <motion.div
                className="w-full max-w-[332px] flex flex-col items-start gap-[20px] self-start max-md:max-w-[335px] max-md:self-center max-md:items-center max-md:gap-[7.97px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Pill button SVG: viewBox 201×61, inner pill 190×42 */}
                <button className="bg-transparent border-none p-0 cursor-pointer w-[201px] h-[61px] flex items-center transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 max-md:w-[143.9px] max-md:h-auto" aria-label="Stay Connected">
                    <Image
                        src="/photos/main/stay connected.svg"
                        alt="Stay Connected"
                        width={201}
                        height={61}
                        className="w-full h-auto block"
                        priority
                    />
                </button>

                {/* Heading */}
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#ffffff] m-0 max-w-[332px] text-left max-md:text-[22px] max-md:max-w-[317px] max-md:text-center">
                    Catch the Highlights on Our Socials
                </h2>
            </motion.div>

            {/* ─── Cards Container: 1320×344 desktop | 335 mobile ─── */}
            <div className="w-full max-w-[min(1320px,91vw)] flex flex-col gap-[18px] max-md:max-w-[335px] max-md:gap-[20px]">
                {/* Row 1: cards 0–2 */}
                <div className="w-full flex flex-row justify-between gap-0 max-md:flex-col max-md:gap-[20px]">
                    {cards.slice(0, 3).map((c, i) => (
                        <SocialCard key={i} {...c} />
                    ))}
                </div>
                {/* Row 2: cards 3–5 */}
                <div className="w-full flex flex-row justify-between gap-0 max-md:flex-col max-md:gap-[20px]">
                    {cards.slice(3, 6).map((c, i) => (
                        <SocialCard key={i + 3} {...c} />
                    ))}
                </div>
            </div>

        </section>
    )
}
