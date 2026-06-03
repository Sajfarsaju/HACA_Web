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
            className="relative w-[calc(430/1320*100%)] min-h-[163px] bg-[#000319] border border-[#25317d] rounded-[20px] p-[20px] box-border flex flex-row justify-between items-center gap-[20px] shrink-0 overflow-hidden max-[1200px]:p-[12px] max-md:w-full max-md:min-h-[126.98px] max-md:rounded-[15.58px] max-md:border-[0.78px] max-md:p-[15.58px] max-md:gap-[15px]"
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
            <div className="flex flex-col gap-[7px] items-end justify-center basis-[136px] grow-0 shrink min-w-[100px] max-[1200px]:basis-[110px] max-md:gap-[5.45px] relative z-[1]">
                {/* Instagram Button */}
                <a
                    href={instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-[8px] w-[136px] h-[46px] p-[10px] rounded-[100px] bg-[#FFFFFF1A] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_#0003124D,0px_8px_10.9px_0px_#0003121F] border border-[rgba(255,255,255,0.12)] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 box-border max-md:w-[105px] max-md:h-[38px] max-md:gap-[6px] max-md:rounded-[77.9px] max-md:p-[8px] max-md:backdrop-blur-[4.67px] max-md:shadow-[0px_0.78px_0.78px_0px_#0003124D,0px_6.23px_8.49px_0px_#0003121F]"
                >
                    <Image
                        src="/photos/main/instagram.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px] object-contain block max-md:w-[16px] max-md:h-[16px]"
                    />
                    <span className="font-rethink font-semibold text-[15px] leading-[100%] tracking-[-0.02em] text-[#FFFFFF] max-md:text-[13px]">
                        Instagram
                    </span>
                </a>

                {/* YouTube Button */}
                <a
                    href={youtubeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-[8px] w-[136px] h-[46px] p-[10px] rounded-[100px] bg-[#FFFFFF1A] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_#0003124D,0px_8px_10.9px_0px_#0003121F] border border-[rgba(255,255,255,0.12)] transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 box-border max-md:w-[105px] max-md:h-[38px] max-md:gap-[6px] max-md:rounded-[77.9px] max-md:p-[8px] max-md:backdrop-blur-[4.67px] max-md:shadow-[0px_0.78px_0.78px_0px_#0003124D,0px_6.23px_8.49px_0px_#0003121F]"
                >
                    <Image
                        src="/photos/main/mdi_youtube.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-[20px] h-[20px] object-contain block max-md:w-[16px] max-md:h-[16px]"
                    />
                    <span className="font-rethink font-semibold text-[15px] leading-[100%] tracking-[-0.02em] text-[#FFFFFF] max-md:text-[13px]">
                        Youtube
                    </span>
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
                <button type="button" className="inline-flex flex-row items-center gap-[10px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[6px] shadow-[0px_1px_1px_0px_rgba(0,3,18,0.30),0px_8px_10.9px_0px_rgba(0,3,18,0.12)] p-[8px_8px_8px_16px] rounded-[100px] border border-[rgba(255,255,255,0.12)] cursor-default h-[42px] max-md:h-[32px] max-md:p-[3px_6px_3px_12px] max-md:gap-[6px]" aria-label="Stay Connected">
                    <span className="font-rethink font-medium text-[16px] leading-[100%] text-[#A7ADBE] whitespace-nowrap max-md:text-[13px]">Stay Connected</span>
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

                {/* Heading */}
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] text-[#ffffff] m-0 max-w-[332px] text-left max-md:text-[22px] max-md:max-w-[317px] max-md:text-center">
                    Catch the Highlights on Our Socials
                </h2>
            </motion.div>

            {/* ─── Cards Container: 1320×344 desktop | 335 mobile ─── */}
            <div className="w-full max-w-[min(1320px,91vw)] max-md:max-w-none flex flex-col gap-[18px] max-md:max-w-[335px] max-md:gap-[20px]">
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
