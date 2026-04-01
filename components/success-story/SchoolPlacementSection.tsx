"use client";

import { useCallback, useState, useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PlacementCardMedia } from "@/components/success-story/PlacementCardMedia";

export type PlacementItem = {
    _id: string;
    title: string | null;
    imageUrl: string;
};

const PLACEHOLDER_COUNT = 4;

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const staggerContainerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.11,
            delayChildren: 0.06,
        },
    },
};

const staggerItemVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease },
    },
};

/** Controls how many cards are shown before "View more". */
function subscribeVisibleCount(callback: () => void) {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const onChange = () => callback();
    mqMd.addEventListener("change", onChange);
    return () => {
        mqMd.removeEventListener("change", onChange);
    };
}

function getVisibleCountSnapshot(): number {
    if (typeof window === "undefined") return 4;
    if (window.matchMedia("(min-width: 768px)").matches) return 16;
    return 4;
}

function getServerVisibleCount(): number {
    return 16;
}

function useRowCapacity(): number {
    return useSyncExternalStore(
        subscribeVisibleCount,
        getVisibleCountSnapshot,
        getServerVisibleCount
    );
}

const cardClassName =
    "group relative flex flex-col bg-[#0A0C16] overflow-hidden border border-[#232D6B]/30 hover:border-[#232D6B] transition-all duration-500 shadow-2xl w-full min-w-0 rounded-[10.13px] aspect-[312.88/359.61]";

const gridClassName =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-[14px] md:gap-[50px]";

const scrollViewport = {
    once: true,
    amount: 0.12 as const,
    margin: "0px 0px -10% 0px" as const,
};

type Props = {
    schoolName: string;
    items: PlacementItem[];
};

function CardMediaBlock({
    item,
    schoolName,
}: {
    item: PlacementItem;
    schoolName: string;
}) {
    return (
        <div className="relative w-full h-full overflow-hidden flex-1 min-h-0">
            <PlacementCardMedia
                imageUrl={item.imageUrl}
                alt={item.title || schoolName}
            />
        </div>
    );
}

/** Staggered when the grid scrolls into view (first row / placeholders). */
function StaggerGrid({ children }: { children: ReactNode }) {
    const reduce = useReducedMotion();
    if (reduce) {
        return <div className={gridClassName}>{children}</div>;
    }
    return (
        <motion.div
            className={gridClassName}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
            variants={staggerContainerVariants}
        >
            {children}
        </motion.div>
    );
}

function StaggerCard({ children }: { children: ReactNode }) {
    const reduce = useReducedMotion();
    if (reduce) {
        return <div className={cardClassName}>{children}</div>;
    }
    return (
        <motion.div variants={staggerItemVariants} className={cardClassName}>
            {children}
        </motion.div>
    );
}

/** Each card animates when it enters the viewport (expanded “View more” grid). */
function ScrollRevealCard({ children }: { children: ReactNode }) {
    const reduce = useReducedMotion();
    if (reduce) {
        return <div className={cardClassName}>{children}</div>;
    }
    return (
        <motion.div
            className={cardClassName}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ duration: 0.5, ease }}
        >
            {children}
        </motion.div>
    );
}

export function SchoolPlacementSection({ schoolName, items }: Props) {
    const rowCapacity = useRowCapacity();
    const [expanded, setExpanded] = useState(false);

    const firstRow = items.slice(0, rowCapacity);
    const rest = items.slice(rowCapacity);
    const hasMore = rest.length > 0;

    const renderStaggerCard = useCallback(
        (item: PlacementItem) => (
            <StaggerCard key={item._id}>
                <CardMediaBlock item={item} schoolName={schoolName} />
            </StaggerCard>
        ),
        [schoolName]
    );

    const renderScrollRevealCard = useCallback(
        (item: PlacementItem) => (
            <ScrollRevealCard key={item._id}>
                <CardMediaBlock item={item} schoolName={schoolName} />
            </ScrollRevealCard>
        ),
        [schoolName]
    );

    if (items.length === 0) {
        return (
            <StaggerGrid>
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                    <StaggerCard key={`placeholder-${schoolName}-${i}`}>
                        <div className="relative w-full h-full overflow-hidden flex-1 min-h-0">
                            <PlacementCardMedia imageUrl={null} alt="" />
                        </div>
                    </StaggerCard>
                ))}
            </StaggerGrid>
        );
    }

    return (
        <div className="flex w-full flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {!expanded ? (
                <>
                    <StaggerGrid>{firstRow.map((item) => renderStaggerCard(item))}</StaggerGrid>
                    {hasMore ? (
                        <button
                            type="button"
                            onClick={() => setExpanded(true)}
                            className="font-rethink font-medium tracking-[0%] text-[#A7ADBE] hover:text-[#FFFFFF] m-0 self-center text-[15px] md:text-[16px] leading-[100%] underline underline-offset-4 decoration-[#232D6B]/50 hover:decoration-[#FFFFFF]/60 transition-colors"
                        >
                            View more
                        </button>
                    ) : null}
                </>
            ) : (
                <>
                    <div className={gridClassName}>
                        {items.map((item) => renderScrollRevealCard(item))}
                    </div>
                    <button
                        type="button"
                        onClick={() => setExpanded(false)}
                        className="font-rethink font-medium tracking-[0%] text-[#A7ADBE] hover:text-[#FFFFFF] m-0 self-center text-[15px] md:text-[16px] leading-[100%] underline underline-offset-4 decoration-[#232D6B]/50 hover:decoration-[#FFFFFF]/60 transition-colors"
                    >
                        View less
                    </button>
                </>
            )}
        </div>
    );
}

