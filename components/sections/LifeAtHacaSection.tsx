"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function LifeAtHacaSection() {
    return (
        /* ─── Outer Section: 1440×868 desktop, 375×510 mobile ─── */
        <section className="lah-outer" aria-label="Life at HACA">

            {/* ─── Header Container: 1312×141 desktop, 335×88 mobile ─── */}
            <motion.div
                className="lah-header"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* ─── Pill Button: 158×42 (desktop) / 113×32 (mobile) ─── */}
                {/* We use width 180 to ensure the internal pill is exactly 158px wide */}
                <motion.button
                    className="lah-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Life @ HACA"
                >
                    <Image
                        src="/photos/main/life@haca.svg"
                        alt="Life at HACA"
                        width={180}
                        height={64}
                        className="lah-btn-img"
                        priority
                    />
                </motion.button>

                {/* ─── Heading ─── */}
                <h2 className="lah-heading">
                    This Is What Learning Here Looks Like
                </h2>
            </motion.div>

            {/* ─── Photo Grid: 1320×619 desktop, 335×357 mobile ─── */}
            <div className="lah-grid">

                {/* ─── Row 1: 3 photos desktop / 2 photos mobile ─── */}
                <div className="lah-row lah-row-1">
                    {/* Photo 1: 449×302 desktop / 196×174 mobile */}
                    <div className="lah-photo lah-p1-1" aria-hidden="true" />

                    {/* Photo 2: 341×302 desktop / 128×174 mobile */}
                    <div className="lah-photo lah-p1-2" aria-hidden="true" />

                    {/* Photo 3: 490×302 desktop only */}
                    <div className="lah-photo lah-p1-3 lah-desktop-only" aria-hidden="true" />
                </div>

                {/* ─── Row 2: 4 photos desktop / 2 photos mobile ─── */}
                <div className="lah-row lah-row-2">
                    {/* Photo 1: 214×305 desktop / 123×176 mobile */}
                    <div className="lah-photo lah-p2-1" aria-hidden="true" />

                    {/* Photo 2: 350×305 desktop / 202×176 mobile */}
                    <div className="lah-photo lah-p2-2" aria-hidden="true" />

                    {/* Photo 3: 350×305 desktop only */}
                    <div className="lah-photo lah-p2-3 lah-desktop-only" aria-hidden="true" />

                    {/* Photo 4: 350×305 desktop only */}
                    <div className="lah-photo lah-p2-4 lah-desktop-only" aria-hidden="true" />
                </div>

            </div>

        </section>
    )
}
