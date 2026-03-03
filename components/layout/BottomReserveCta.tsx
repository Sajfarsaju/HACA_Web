"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function BottomReserveCta() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // Watch the <section> that Hero renders — it's the first <section> on the page.
        // When it leaves the viewport (scrolled past), we show the sticky bar.
        const heroSection = document.querySelector("main > div > section:first-of-type") as HTMLElement | null

        if (!heroSection) {
            // Fallback: just always show after a small scroll
            const onScroll = () => setVisible(window.scrollY > 100)
            window.addEventListener("scroll", onScroll, { passive: true })
            return () => window.removeEventListener("scroll", onScroll)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Hide when hero is intersecting (user is still in hero), show when it has left
                setVisible(!entry.isIntersecting)
            },
            {
                // Fire as soon as the hero fully exits the viewport
                threshold: 0,
                rootMargin: "0px 0px 0px 0px",
            }
        )

        observer.observe(heroSection)
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
                    href="/contact"
                    className="shrink-0 flex items-center justify-center"
                    aria-label="Claim your spot in the next batch"
                >
                    <Image
                        src="/photos/main/claim your spot.svg"
                        alt="Claim your spot"
                        width={170}
                        height={55}
                        className="w-[140px] h-[45px] md:w-[170px] md:h-[55px] object-contain"
                    />
                </Link>
            </div>
        </div>
    )
}
