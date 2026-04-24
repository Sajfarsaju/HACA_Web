"use client";

import Image from "next/image";
import { useState } from "react";

export function DesignEventCard() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div
            className="hidden lg:flex absolute flex-col bg-white"
            style={{
                top: 277,
                right: "clamp(16px, 4vw, 75px)",
                width: "clamp(260px, 20.6vw, 296px)",
                minHeight: "clamp(256px, 18.2vw, 274px)",
                padding: "clamp(8px, 0.7vw, 10px)",
                paddingBottom: "clamp(2px, 0.35vw, 4px)",
                gap: "clamp(10px, 1.05vw, 14px)",
                boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.25)",
            }}
        >
            {/* Close button (top-right) */}
            <button
                type="button"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
                className="absolute -top-[15px] -right-[15px] w-[30px] h-[30px] rounded-full overflow-hidden"
            >
                <Image src="/photos/schools/design/Group 41623.svg" alt="" fill className="object-contain" />
            </button>

            {/* Top container */}
            <div className="w-full flex flex-col" style={{ gap: "clamp(10px, 1vw, 14px)" }}>
                <div className="relative w-full overflow-hidden" style={{ height: "clamp(124px, 9.72vw, 140px)" }}>
                    <Image
                        src="/photos/schools/design/8dc3404f5234d84208404225dee268a9a3cafc50.jpg"
                        alt="Event cover"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                </div>

                <div className="w-full flex items-center justify-between" style={{ height: "21px" }}>
                    {/* Left pill button */}
                    <div className="relative w-[94px] h-[21px] shrink-0">
                        <Image src="/photos/schools/design/Frame 2131331240.svg" alt="" fill className="object-contain" />
                    </div>

                    {/* Date + time */}
                    <div className="h-[20px] w-[127px] flex items-center justify-between shrink-0">
                        <span
                            className="text-[#000000] text-[14px] leading-none"
                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                        >
                            July 28
                        </span>
                        <span className="h-[16.5px] w-0 border-l-[2px] border-l-[#FF5C00]" />
                        <span
                            className="text-[#000000] text-[14px] leading-none"
                            style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500 }}
                        >
                            7:00pm
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom container */}
            <div className="w-full flex items-center justify-between" style={{ height: "53px" }}>
                <div className="w-[209px] h-[46px]">
                    <p
                        className="m-0 text-[#000000] leading-[120%]"
                        style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif', fontWeight: 500, fontSize: 18.95 }}
                    >
                        We are breaking down <br />
                        Apple’s UI/UX
                    </p>
                </div>

                <button type="button" aria-label="Open event" className="relative w-[53px] h-[53px] shrink-0">
                    <Image src="/photos/schools/design/Frame 2131331242.svg" alt="" fill className="object-contain" />
                </button>
            </div>
        </div>
    );
}

