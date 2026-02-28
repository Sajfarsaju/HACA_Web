"use client"

import React from "react"

export function PhotoGallery() {
    // Fallback colors for cards
    const cardColors = [
        "#1E2A5E", "#2D3E7F", "#3A50B0", "#4A62D1",
        "#1E2A5E", "#2D3E7F", "#3A50B0", "#4A62D1"
    ]

    return (
        <section className="w-full h-[354px] flex justify-center overflow-hidden relative max-[1024px]:h-[330px] max-md:h-[225px]">
            <div className="w-full max-w-[1440px] h-[354px] relative shadow-[0px_4px_4px_0px_#00000040] max-[1024px]:h-[310px] max-[1024px]:w-[95%] max-[1024px]:max-w-[1100px] max-md:h-[203px] max-md:-top-[0.91px] max-md:max-w-full">
                <div className="w-full h-full flex gap-[16px] overflow-x-auto scroll-smooth py-0 px-[40px] max-md:gap-[13.67px] max-md:py-0 max-md:px-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {cardColors.map((color, index) => (
                        <div
                            key={index}
                            className="flex-none w-[440px] h-full rounded-[20px] opacity-100 max-[1024px]:w-[400px] max-md:w-[252.3px] max-md:rounded-[11.47px]"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
                {/* Gradient overlay for fading edges */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(89.96deg,_#01051C_0.03%,_rgba(0,0,0,0)_39.57%,_rgba(0,0,0,0)_72.75%,_#01051C_101.57%)]" />
            </div>
        </section>
    )
}
