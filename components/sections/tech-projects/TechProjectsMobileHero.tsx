"use client";

import Image from "next/image";
import { MOBILE_DESIGN_H, MOBILE_DESIGN_W } from "@/components/sections/tech-courses/constants";

interface TechProjectsMobileHeroProps {
    scale: number;
}

export function TechProjectsMobileHero({ scale }: TechProjectsMobileHeroProps) {
    return (
        <div
            className="tech-mobile-hero-wrapper"
            style={{
                height: `${MOBILE_DESIGN_H * scale}px`,
                position: "relative",
                zIndex: 20,
            }}
        >
            <div
                className="tech-mobile-hero-canvas"
                style={{
                    transform: `translateX(-50%) scale(${scale})`,
                    transformOrigin: "top center",
                    left: "50%",
                    width: `${MOBILE_DESIGN_W}px`,
                    height: `${MOBILE_DESIGN_H}px`,
                }}
            >
                <div className="tech-mobile-bg-wrap">
                    <div
                        className="tech-mobile-hero-dots"
                        style={{
                            position: "absolute",
                            width: "406px",
                            height: "4877px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            top: "0",
                            zIndex: -2,
                            pointerEvents: "none",
                        }}
                    >
                        <Image
                            src="/photos/Tech/DOTsBG.svg"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "342px",
                            height: "4705px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            top: "0",
                            zIndex: -1,
                            pointerEvents: "none",
                        }}
                    >
                        <Image
                            src="/photos/Tech/Group 23.svg"
                            alt=""
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="tech-mobile-gradient-wrap">
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
                    className="tech-mobile-nav"
                    style={{
                        padding: "0 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "63px",
                    }}
                >
                    <div
                        className="tech-mobile-nav-logo"
                        style={{ position: "relative", width: "130px", height: "23px" }}
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
                        className="tech-mobile-nav-menu"
                        style={{
                            width: "16px",
                            height: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
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

