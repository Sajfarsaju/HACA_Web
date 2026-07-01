"use client";

import { motion } from "framer-motion";

/**
 * Header text ("Courses We Offer" + description) in document flow.
 * Mobile only — desktop uses header inside TechCoursesHero.
 */
export function TechCoursesHeaderSection() {
    return (
        <section className="tech-courses-header-section tech-courses-header-mobile-only">
            <h1 className="tech-courses-hero-heading">Courses We Offer</h1>
            <p className="tech-courses-hero-desc">
                Learn practical tech and AI skills through hands-on courses built for real-world work.
            </p>

            <motion.div
                className="tech-promo-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                style={{
                    position: "relative",
                    width: "calc(100% + 40px)",
                    height: "52px",
                    background: "#D9D9D91A",
                    border: "1px solid transparent",
                    boxShadow: "0px 4px 4px 0px #00000040",
                    backdropFilter: "blur(12px)",
                    padding: "10px 0",
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    zIndex: 10,
                    marginTop: "20px",
                    borderRadius: 0
                }}
            >
                <div style={{ overflow: "hidden", width: "100%", height: "100%", display: "flex", alignItems: "center", borderRadius: "inherit" }}>
                    <motion.div
                        className="flex items-center shrink-0"
                        animate={{ x: [0, -806] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                        style={{ display: "flex", alignItems: "center", gap: "30px", paddingLeft: "30px" }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-[30px] shrink-0">
                                <span style={{ color: "#FFFFFF", fontSize: "20px", lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>★</span>
                                <span style={{ width: "726px", height: "24px", color: "#FFFFFF", fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: "20px", display: "flex", alignItems: "center" }}>Enroll in our flagship programs and get the Applied AI Course worth ₹10,000 FREE</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
