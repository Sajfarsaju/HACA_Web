"use client";

import Image from "next/image";
import { MOBILE_DESIGN_H } from "@/components/sections/tech-courses/constants";

interface TechProjectsMobileHeroProps {
    scale: number;
}

export function TechProjectsMobileHero({ scale }: TechProjectsMobileHeroProps) {
    return (
        <div
            className="relative z-20 w-full overflow-hidden block md:hidden bg-[#111111]"
            style={{
                height: `${MOBILE_DESIGN_H * scale}px`,
            }}
        >
            <div
                className="tech-mobile-hero-canvas absolute top-0 left-1/2 w-[375px]"
                style={{
                    transform: `translateX(-50%) scale(${scale})`,
                    transformOrigin: "top center",
                    left: "50%",
                    height: `${MOBILE_DESIGN_H}px`,
                }}
            >
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div
                        className="absolute w-[406px] h-[4877px] left-1/2 -translate-x-1/2 top-0 z-[-2] pointer-events-none"
                    >
                        <Image
                            src="/photos/Tech/DOTsBG.svg"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div
                        className="absolute w-[342px] h-[4705px] left-1/2 -translate-x-1/2 top-0 z-[-1] pointer-events-none"
                    >
                        <Image
                            src="/photos/Tech/Group 23.svg"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="absolute w-[561.55px] h-[131.8px] top-0 left-[-93.2px] opacity-100">
                        <Image
                            src="/photos/Tech/Gradient.svg"
                            alt=""
                            width={561.55}
                            height={131.8}
                            priority
                        />
                    </div>
                </div>

                <nav
                    className="relative z-10 w-full h-[63px] flex justify-between items-center px-5 box-border"
                >
                    <div
                        className="relative w-[130px] h-[23px] shrink-0"
                    >
                        <Image
                            src="/photos/Tech/tech PW 1.svg"
                            alt="Logo"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>
                    <div
                        className="w-4 h-4 flex items-center justify-center shrink-0"
                    >
                        <Image
                            src="/photos/Tech/Frame 68.svg"
                            alt="Menu"
                            width={16}
                            height={16}
                        />
                    </div>
                </nav>
            </div>
        </div>
    );
}

