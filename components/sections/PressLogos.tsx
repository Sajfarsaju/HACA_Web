"use client"

import React from "react"
import Image from "next/image"

export function PressLogos() {
    return (
        <section className="press-logos-section">
            <div className="press-logos-inner">
                {/* Times of India */}
                <div className="press-logo-wrap press-logo-toi">
                    <Image
                        src="/photos/main/times of india.svg"
                        alt="Times of India"
                        width={230}
                        height={17}
                        className="press-logo-img"
                    />
                </div>

                {/* Malayala Manorama */}
                <div className="press-logo-wrap press-logo-manorama">
                    <Image
                        src="/photos/main/malayala manorama.svg"
                        alt="Malayala Manorama"
                        width={192}
                        height={18}
                        className="press-logo-img"
                    />
                </div>

                {/* Indian Express */}
                <div className="press-logo-wrap press-logo-express">
                    <Image
                        src="/photos/main/indian express.svg"
                        alt="Indian Express"
                        width={198}
                        height={20}
                        className="press-logo-img"
                    />
                </div>
            </div>
        </section>
    )
}
