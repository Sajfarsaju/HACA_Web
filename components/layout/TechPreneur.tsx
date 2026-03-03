"use client";
import React from "react";
import Image from "next/image";

export function TechPreneur() {
    return (
        <div className="w-full flex flex-col items-center overflow-visible pb-[20px] md:pb-[0px]">
            {/* Content: title + button — constrained width, padded */}
            <div className="w-full max-w-[1460px] mx-auto pt-[60px] md:pt-[100px] px-[clamp(20px,4vw,60px)] flex flex-col items-center gap-[16px] md:gap-[10px]">
                {/* Main Title */}
                <h2 className="w-full max-w-[737px] font-outfit font-normal text-[clamp(32px,6vw,60px)] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF] text-center m-0">
                    Your Name Could Be Next in Our Techpreneur List
                </h2>

                {/* SVG Button */}
                <div className="w-[246px] h-[44px] relative mt-[32px] cursor-pointer shrink-0">
                    <Image
                        src="/photos/schools/tech/Button Container.svg"
                        alt="Join Techpreneur List"
                        width={246}
                        height={44}
                        className="object-contain"
                    />
                </div>
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
