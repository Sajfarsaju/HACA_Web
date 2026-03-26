"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    /** Extra delay after scroll trigger (seconds) */
    delay?: number;
    duration?: number;
    /** Vertical offset before reveal (px) */
    y?: number;
    /** Adds stagger: delay + sectionIndex * staggerStep */
    sectionIndex?: number;
    /** Seconds added per sectionIndex step (default 0.04) */
    staggerStep?: number;
    className?: string;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Reveals each section when it scrolls into view (one animation per section).
 * Respects prefers-reduced-motion.
 */
export function SectionReveal({
    children,
    delay = 0,
    duration = 0.55,
    y = 24,
    sectionIndex,
    staggerStep = 0.04,
    className,
}: SectionRevealProps) {
    const reduceMotion = useReducedMotion();

    const staggerDelay =
        sectionIndex !== undefined ? delay + sectionIndex * staggerStep : delay;

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.18,
                margin: "-10% 0px -8% 0px",
            }}
            transition={{
                duration,
                delay: staggerDelay,
                ease,
            }}
        >
            {children}
        </motion.div>
    );
}
