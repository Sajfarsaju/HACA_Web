"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function EnquireSection() {
    return (
        /* ─── Outer Section: 1440 × 428, padding 32px 60px, border-radius 20px ─── */
        <section
            className="enq-outer"
            aria-label="Enquire CTA"
        >
            {/* ─── Inner Container: 1320 × 364, padding 25px / 29px, gap 474px, border-radius 20px ─── */}
            <div className="enq-inner">

                {/* ─── Background radial gradient ─── */}
                <div className="enq-bg" aria-hidden="true" />

                {/* ─── Content Container: 569 × 167, gap 20px ─── */}
                <motion.div
                    className="enq-content"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* ─── Headline ─── */}
                    <p className="enq-heading">
                        Everyone starts somewhere. The smart ones start here.
                    </p>

                    {/* ─── Enquire Button ─── */}
                    <motion.button
                        className="enq-btn"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        aria-label="Enquire Now"
                    >
                        <Image
                            src="/photos/common/enqr button.svg"
                            alt="Enquire Now"
                            width={143}
                            height={55}
                            className="enq-btn-img"
                        />
                    </motion.button>
                </motion.div>

            </div>
        </section>
    )
}
