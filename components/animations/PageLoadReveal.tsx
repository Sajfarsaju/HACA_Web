"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageLoadRevealProps {
    children: ReactNode;
    /** Duration of the initial page fade-in */
    duration?: number;
    /** Optional vertical offset for subtle slide-up on load */
    y?: number;
}

/**
 * Wraps page content and runs a single play-once animation when the page loads.
 * Use on the main home (or any) page so content fades (and optionally slides) in.
 */
export function PageLoadReveal({
    children,
    duration = 0.55,
    y = 0,
}: PageLoadRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: y > 0 ? Math.min(y, 24) : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration,
                ease: [0.21, 0.47, 0.32, 0.98] as const,
            }}
        >
            {children}
        </motion.div>
    );
}
