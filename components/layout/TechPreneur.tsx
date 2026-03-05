"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function TechPreneur() {
    return (
        <div className="w-full flex flex-col items-center overflow-visible pb-[20px] md:pb-[0px]">
            {/* Content: title + button — constrained width, padded */}
            <div className="w-full max-w-[1460px] mx-auto pt-[60px] md:pt-[100px] px-[clamp(20px,4vw,60px)] flex flex-col items-center gap-[16px] md:gap-[10px]">
                {/* Main Title */}
                <h2 className="w-full max-w-[737px] font-outfit font-normal text-[clamp(32px,6vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] text-center m-0">
                    Your Name Could Be Next in Our Techpreneur List
                </h2>

                {/* White pill + slide animation (match original) */}
                <Link
                    href="/contact"
                    className="group relative w-[246px] h-[44px] rounded-[8px] mt-[32px] flex items-center justify-center shrink-0 overflow-hidden bg-white text-[#111111]"
                >
                    <span className="flex w-full h-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#111111] transition-transform duration-300 ease-out group-hover:-translate-y-full">
                        Join Techpreneur List
                    </span>
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#111111] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                        Join Techpreneur List
                    </span>
                </Link>
            </div>


            {/* Decorative SVG — full bleed using negative margin technique, touches both edges on ALL screens */}
            <div
                className="relative h-[140px] md:h-[280px] lg:h-[380px] xl:h-[480px] shrink-0 -mt-[20px] md:-mt-[50px] lg:-mt-[100px] xl:-mt-[140px]"
                style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
            >
                <Image
                    src="/photos/schools/tech/Group.svg"
                    alt=""
                    fill
                    className="object-contain object-top"
                />
            </div>
        </div>
    );
}
