"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function BottomReserveCta() {
    const [hasPassedGallery, setHasPassedGallery] = useState(false)
    const [isFooterInView, setIsFooterInView] = useState(false)

    // Show CTA only after gallery is passed AND footer is not visible.
    const visible = hasPassedGallery && !isFooterInView

    useEffect(() => {
        // Show the bar only after the *entire* photo gallery is scrolled past
        const gallerySection = document.querySelector("#photo-gallery") as HTMLElement | null

        const handleScroll = () => {
            if (!gallerySection) {
                setHasPassedGallery(window.scrollY > 100)
                return
            }

            const rect = gallerySection.getBoundingClientRect()
            // When the bottom of the gallery is above the top of the viewport,
            // the user has fully scrolled past it.
            const hasPassedGallery = rect.bottom <= 0
            setHasPassedGallery(hasPassedGallery)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        // Hide CTA when reaching the footer section.
        const footerCandidates = Array.from(document.querySelectorAll("footer")) as HTMLElement[]
        const footerEl =
            footerCandidates.find(
                el => el.textContent?.includes("All rights reserved") && el.textContent?.includes("HACA")
            ) ?? footerCandidates[0] ?? null

        if (!footerEl) return

        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0]
                setIsFooterInView(Boolean(entry?.isIntersecting))
            },
            { threshold: 0.01 }
        )

        observer.observe(footerEl)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            className={`pointer-events-none fixed inset-x-0 bottom-0 z-[90] hidden lg:flex justify-center px-[10px] pb-[6px] transition-all duration-500 ease-in-out ${visible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-full pointer-events-none"
                }`}
        >
            <div
                className="pointer-events-auto w-full max-w-[1440px] bg-[#000319] rounded-[20px] flex flex-row items-center justify-between gap-[20px] px-[20px] py-[20px] md:py-[30px] md:px-[20px] shadow-[0px_12px_40px_rgba(0,0,0,0.6)] border border-white/5"
            >
                {/* Text */}
                <p className="font-rethink font-bold text-[18px] leading-[110%] text-white m-0 max-w-[260px] md:text-[24px]">
                    Reserve Your Place in
                    <br />
                    the Next Batch
                </p>

                {/* Button */}
                <Link
                    href="/enquire"
                    className="shrink-0 flex items-center justify-center"
                    aria-label="Select a course"
                >
                    <motion.button
                        className="group relative w-[140px] h-[45px] md:w-[170px] md:h-[55px] rounded-[100px] border-none cursor-pointer flex items-center justify-center bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] px-[18px] md:px-[24px] overflow-hidden"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                        aria-label="Select a course"
                        type="button"
                    >
                        <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            Select a course
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                            Select a course
                        </span>
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}
