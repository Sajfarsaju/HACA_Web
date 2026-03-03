"use client"

import Image from "next/image"
import Link from "next/link"

export function BottomReserveCta() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] hidden lg:flex justify-center px-[10px] pb-[6px]">
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

