"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroBottom() {
  return (
    /* ─── Outer Section: 1440 × 428, padding 32px 60px, border-radius 20px ─── */
    <section
      className="hb-outer"
      aria-label="Find your passion at HACA"
    >
      {/* ─── Inner Container: 1320 × 364, padding 25px / 29px, gap 474px, border-radius 20px ─── */}
      <div className="hb-inner">

        {/* ─── Content Container: 569 × 177, gap 30px ─── */}
        <motion.div
          className="hb-content"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ─── Ellipse decorative background: 1060 × 855 ─── */}
          <div className="hb-ellipse" aria-hidden="true">
            <Image
              src="/photos/Ellipse 3.svg"
              alt=""
              fill
              priority
              className="hb-ellipse-img"
            />
          </div>

          {/* ─── Headline: 744 × 92 ─── */}
          <div className="hb-headline-wrap">
            <h2 className="hb-headline">
              Find your passion. Find your mentors. Find your future at HACA
            </h2>
          </div>

          {/* ─── Web Button: 272 × 55, border-radius 100px ─── */}
          <motion.button
            className="hb-button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Get started with HACA"
          >
            <Image
              src="/photos/Web Button.svg"
              alt="Get Started"
              width={272}
              height={55}
              className="hb-button-img"
            />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}