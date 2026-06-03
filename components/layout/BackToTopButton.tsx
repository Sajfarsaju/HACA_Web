"use client"

import Image from "next/image"
import React from "react"

export function BackToTopButton() {
    const handleClick = () => {
        if (typeof window === "undefined") return
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="group flex items-center justify-center w-[57.7px] h-[57.7px] rounded-[82.55px] bg-[#131839] border border-[#232D6B] cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95 max-md:w-[37px] max-md:h-[37px] max-md:rounded-[52.93px]"
            aria-label="Back to top"
        >
            <Image
                src="/photos/main/top pointing arrow button.svg"
                alt="" aria-hidden="true"
                width={58}
                height={58}
                className="w-full h-full object-contain"
            />
        </button>
    )
}

