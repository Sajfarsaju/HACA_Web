"use client"

import React from "react"
import Image from "next/image"

export function PressLogos() {
    return (
        <section className="w-full max-w-[1180px] h-[91.81px] flex items-center justify-center mx-auto gap-[26px] opacity-100 relative max-md:max-w-full max-md:h-auto max-md:min-h-[14px] max-md:py-[10px] max-md:px-0 max-md:gap-[15px] max-md:opacity-50">
            <div className="flex items-center justify-center w-[95%] max-w-[1100px] h-auto gap-[clamp(20px,5vw,68.76px)] opacity-50 flex-wrap max-md:gap-[clamp(15px,6vw,27.12px)]">
                {/* Times of India */}
                <div className="flex items-center justify-center w-[clamp(140px,15vw,229.81px)] h-auto max-md:w-[100px]">
                    <Image
                        src="/photos/main/times of india.svg"
                        alt="Times of India"
                        width={230}
                        height={17}
                        className="w-full h-auto"
                    />
                </div>

                {/* Malayala Manorama */}
                <div className="flex items-center justify-center w-[clamp(120px,13vw,192.21px)] h-auto max-md:w-[85px]">
                    <Image
                        src="/photos/main/malayala manorama.svg"
                        alt="Malayala Manorama"
                        width={192}
                        height={18}
                        className="w-full h-auto"
                    />
                </div>

                {/* Indian Express */}
                <div className="flex items-center justify-center w-[clamp(120px,13vw,198.46px)] h-auto max-md:w-[90px]">
                    <Image
                        src="/photos/main/indian express.svg"
                        alt="Indian Express"
                        width={198}
                        height={20}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
