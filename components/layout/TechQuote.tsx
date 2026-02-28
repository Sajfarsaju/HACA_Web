"use client";

/**
 * Centered layout:
 * The three words are wrapped in a container that has the exact Figma width (1050.22px).
 * This container is centered within the section.
 * The words scale proportionally using vw-based scaling relative to the original 1440px design.
 */
export function TechQuote() {
    return (
        <section
            className="w-full relative overflow-visible flex flex-col items-center justify-center min-h-[120px] lg:h-[330.25px] py-6 lg:py-[60px] px-6 bg-transparent opacity-100"
        >
            {/* 
                Main Quote Container:
                Centers the staggered words as a single unit.
            */}
            <div
                className="relative shrink-0 w-[clamp(300px,72.93vw,1050.22px)] h-[120px] md:h-[160px] lg:h-[210.25px]"
            >
                {/* "Be" — Regular 54px @ 1440px */}
                <span className="absolute top-0 left-0 font-outfit font-normal text-[clamp(18px,3.75vw,54px)] leading-[130%] tracking-normal text-[#FFFFFF] whitespace-nowrap">
                    Be
                </span>

                {/* "Technically" — SemiBold 135px @ 1440px */}
                <span className="absolute top-[clamp(20px,2.45vw,35.25px)] left-0 font-outfit font-semibold text-[clamp(42px,9.375vw,135px)] leading-[130%] tracking-normal text-[#FFFFFF] whitespace-nowrap">
                    Technically
                </span>

                {/* "Awesome" — SemiBold 90px @ 1440px */}
                <span className="absolute top-[clamp(4px,0.42vw,6px)] right-0 font-outfit font-semibold text-[clamp(28px,6.25vw,90px)] leading-[130%] tracking-normal text-[#FFFFFF] whitespace-nowrap">
                    Awesome
                </span>
            </div>
        </section>
    );
}
