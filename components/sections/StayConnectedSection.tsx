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
            className="sc-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* ─── Logo ─── */}
            <div className="sc-logo-wrap">
                <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={logoW}
                    height={logoH}
                    className="sc-logo"
                />
            </div>

            {/* ─── Social Buttons ─── */}
            <div className="sc-btns">
                {/* Instagram */}
                <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="sc-btn-link">
                    <Image
                        src="/photos/main/insta button.svg"
                        alt="Instagram"
                        width={139}
                        height={63}
                        className="sc-btn-img sc-insta"
                    />
                </a>
                {/* YouTube */}
                <a href={youtubeHref} target="_blank" rel="noopener noreferrer" className="sc-btn-link">
                    <Image
                        src="/photos/main/youtube button.svg"
                        alt="YouTube"
                        width={178}
                        height={80}
                        className="sc-btn-img sc-yt"
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
        <section className="sc-outer" aria-label="Stay Connected">

            {/* ─── Header: 332×131 desktop | 335×88 mobile ─── */}
            <motion.div
                className="sc-header"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Pill button SVG: viewBox 201×61, inner pill 190×42 */}
                <button className="sc-pill-btn" aria-label="Stay Connected">
                    <Image
                        src="/photos/main/stay connected.svg"
                        alt="Stay Connected"
                        width={201}
                        height={61}
                        className="sc-pill-img"
                        priority
                    />
                </button>

                {/* Heading */}
                <h2 className="sc-heading">
                    Catch the Highlights on Our Socials
                </h2>
            </motion.div>

            {/* ─── Cards Container: 1320×344 desktop | 335 mobile ─── */}
            <div className="sc-cards">
                {/* Row 1: cards 0–2 */}
                <div className="sc-row">
                    {cards.slice(0, 3).map((c, i) => (
                        <SocialCard key={i} {...c} />
                    ))}
                </div>
                {/* Row 2: cards 3–5 */}
                <div className="sc-row">
                    {cards.slice(3, 6).map((c, i) => (
                        <SocialCard key={i + 3} {...c} />
                    ))}
                </div>
            </div>

        </section>
    )
}
