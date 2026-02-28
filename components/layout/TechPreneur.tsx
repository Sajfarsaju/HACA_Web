"use client";
import React from "react";
import Image from "next/image";

export function TechPreneur() {
    return (
        <section
            className="w-full max-w-[1460px] min-h-[708px] bg-transparent pt-[clamp(60px,10vw,140px)] pb-[clamp(20px,8vw,120px)] px-[clamp(20px,4vw,60px)] flex flex-col items-center gap-[30px] mx-auto overflow-hidden relative"
        >
            {/* Main Title */}
            <h2
                className="w-full max-w-[737px] font-outfit font-normal text-[clamp(32px,6vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] text-center align-middle m-0 z-[2] relative"
            >
                Your Name Could Be Next in Our Techpreneur List
            </h2>

            {/* SVG Button */}
            <div className="w-[246px] h-[44px] relative mt-[32px] cursor-pointer z-[2] shrink-0">
                <Image
                    src="/photos/schools/tech/Button Container.svg"
                    alt="Join Techpreneur List"
                    width={246}
                    height={44}
                    className="object-contain"
                />
            </div>

            {/* Decorative Group SVG — absolutely positioned, fills bottom of section */}
            <div className="absolute bottom-0 left-0 right-0 h-[520px] z-[1] pointer-events-none">
                <Image
                    src="/photos/schools/tech/Group.svg"
                    alt=""
                    fill
                    className="object-contain object-top"
                />
            </div>
        </section>
    );
}
