"use client";
import React from "react";
import Link from "next/link";
import Threads from "@/components/ui/Threads";
import { ENQUIRE_URL } from "@/lib/enquire";

export function TechPreneur() {
    return (
        <div className="w-full flex flex-col items-center overflow-visible pb-[20px] md:pb-[0px]">
            {/* Content: title + button — constrained width, padded */}
            <div className="w-full max-w-[1460px] mx-auto pt-[60px] md:pt-[100px] px-[clamp(20px,4vw,60px)] flex flex-col items-center gap-[16px] md:gap-[10px]">
                {/* Main Title */}
                <h2 className="w-full max-w-[737px] font-outfit font-normal text-[clamp(32px,6vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] text-center m-0">
                    Your Name Could Be Next in Our Techpreneur List
                </h2>

                {/* CTA button — gradient border + radial fill + slide animation (Figma spec) */}
                <div
                    className="mt-[32px] shrink-0 flex items-center justify-center rounded-[12px] p-[1px] w-[244px] h-[44px] max-md:w-[201px] max-md:h-[40px] max-md:rounded-[10px] max-md:p-[0.87px]"
                    style={{
                        background: "linear-gradient(110.55deg, #CDA4FF 12.15%, #8831F2 115.98%)",
                    }}
                >
                    <div
                        className="w-full h-full rounded-[11px] max-md:rounded-[9.13px] overflow-hidden flex items-center justify-center"
                        style={{
                            background: "radial-gradient(71.34% 136.68% at 50% 14.3%, #927DF7 0%, #694AFF 100%)",
                        }}
                    >
                        <Link
                            href={ENQUIRE_URL}
                            className="group relative flex w-full h-full items-center justify-center overflow-hidden px-[20px] py-[15px] max-md:px-[18px] max-md:py-[12px]"
                        >
                            <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-medium text-[20px] leading-[100%] text-center text-white whitespace-nowrap transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:-translate-y-full max-md:text-[16px] max-md:font-semibold max-md:leading-[100%]">
                                Become a Techpreneur
                            </span>
                            <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-medium text-[20px] leading-[100%] text-center text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:translate-y-0 max-md:text-[16px] max-md:font-semibold max-md:leading-[100%]">
                                Become a Techpreneur
                            </span>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Animated flowing purple dots — replaces Group.svg */}
            <div
                className="relative h-[140px] md:h-[280px] lg:h-[380px] xl:h-[480px] shrink-0 -mt-[20px] md:-mt-[50px] lg:-mt-[100px] xl:-mt-[140px]"
                style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
            >
                <Threads
                    color={[0.53, 0.31, 1.0]}
                    amplitude={1.2}
                    distance={0.6}
                    enableMouseInteraction={true}
                />
            </div>
        </div>
    );
}
