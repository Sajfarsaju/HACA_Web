"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
}

/**
 * Reveals content when it scrolls into view (loading-on-scroll effect).
 * Uses once: true so each section only animates the first time it enters the viewport.
 */
export function SectionReveal({ children, delay = 0.15, duration = 0.65, y = 28 }: SectionRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px 0px -80px 0px", amount: 0.12 }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            {children}
        </motion.div>
    );
}
