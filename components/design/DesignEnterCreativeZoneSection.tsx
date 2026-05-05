"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ARROW_PATH =
    "M30.5555 16.6667L20.8333 26.3889L18.8541 24.4444L25.243 18.0555L15.2777 18.0555L15.2777 15.2778L25.243 15.2778L18.8888 8.88888L20.8333 6.94444L30.5555 16.6667ZM12.4999 18.0555L8.33327 18.0555L8.33327 15.2778L12.4999 15.2778L12.4999 18.0555ZM5.55549 18.0555L2.77771 18.0555L2.77771 15.2778L5.55549 15.2778L5.55549 18.0555Z"

const SPRING = (delay: number) => ({
    type: "spring" as const,
    stiffness: 75,
    damping: 13,
    delay,
})

export function DesignEnterCreativeZoneSection() {
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.25 })

    const font = '"VC Nudge Trial Normal", sans-serif'

    const decoConcepts = "/photos/schools/design/Group (1).svg"
    const decoTools = "/photos/schools/design/Ellipse.svg"
    const decoTalent = "/photos/schools/design/Exclude.svg"
    const decoEnd = "/photos/schools/design/Group (2).svg"
    const mobileTextSize = "clamp(26px, 8.5vw, 32px)"
    const mobileDecoSize = "clamp(26px, 8vw, 32px)"

    return (
        <section
            ref={ref}
            className="w-full bg-[#FCFCFC]"
            style={{
                paddingTop: "clamp(40px, 8.6vw, 124px)",
                paddingBottom: "clamp(40px, 6.95vw, 100px)",
                paddingLeft: "clamp(20px, 0.7vw, 10px)",
                paddingRight: "clamp(20px, 0.7vw, 10px)",
            }}
        >
            <div
                className="w-full max-w-[1440px] mx-auto"
                style={{ height: "262.3865661621094px" }}
            >
                {/* ── Desktop ── */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-[21.92px] w-full h-full">
                    {/* Line 1 */}
                    <div className="flex items-center justify-center gap-[13.7px]" style={{ width: "1297.3983154296875px", height: "79px" }}>
                        <WordWithDeco
                            label="Concepts"
                            font={font}
                            textSize={66}
                            decoSrc={decoConcepts}
                            decoW={76.74749755859375}
                            decoH={76.7490234375}
                            gap={13.7}
                            fromX="-110vw"
                            delay={0}
                            inView={inView}
                        />
                        <WordWithDeco
                            label="Tools"
                            font={font}
                            textSize={66}
                            decoSrc={decoTools}
                            decoW={76.74749755859375}
                            decoH={76.7490234375}
                            gap={13.7}
                            fromX="-110vw"
                            delay={0.14}
                            inView={inView}
                        />
                        <WordWithDeco
                            label="Talent"
                            font={font}
                            textSize={66}
                            decoSrc={decoTalent}
                            decoW={76.74749755859375}
                            decoH={76.7490234375}
                            gap={13.7}
                            fromX="-110vw"
                            delay={0.28}
                            inView={inView}
                        />
                        <span
                            className="text-[#0A0A0A]"
                            style={{ fontFamily: font, fontWeight: 500, fontSize: "66px", lineHeight: "120%" }}
                        >
                            Align here.
                        </span>
                    </div>

                    {/* Line 2 */}
                    <div className="flex items-center justify-center gap-[13.7px]">
                        <span
                            className="text-[#0A0A0A]"
                            style={{ fontFamily: font, fontWeight: 500, fontSize: "66px", lineHeight: "120%" }}
                        >
                            Enter the Creative Zone.
                        </span>
                        <InlineDeco
                            decoSrc={decoEnd}
                            w={112.5585}
                            h={76.7475}
                            fromX="110vw"
                            delay={0.14}
                            inView={inView}
                        />
                    </div>

                    {/* Line 3 button */}
                    <ZoneButton font={font} />
                </div>

                {/* ── Mobile ── */}
                <div className="lg:hidden w-full flex flex-col items-center" style={{ gap: "30px" }}>
                    <div className="w-full max-w-[335px] flex flex-col items-center gap-[10px]">
                        {/* Mobile line 1 */}
                        <div className="w-full flex items-center justify-center gap-[10px]">
                            <div className="flex items-center gap-[5.71px]">
                                <span
                                    className="text-[#0A0A0A]"
                                    style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%" }}
                                >
                                    Concepts
                                </span>
                                <InlineDeco
                                    decoSrc={decoConcepts}
                                    size={mobileDecoSize}
                                    fromX="-110vw"
                                    delay={0}
                                    inView={inView}
                                />
                            </div>
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%" }}
                            >
                                Tools
                            </span>
                            <InlineDeco
                                decoSrc={decoTools}
                                size={mobileDecoSize}
                                fromX="110vw"
                                delay={0.12}
                                inView={inView}
                            />
                        </div>

                        {/* Mobile line 2 */}
                        <div className="w-full flex items-center justify-center gap-[10px]">
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%" }}
                            >
                                Talent
                            </span>
                            <InlineDeco
                                decoSrc={decoTalent}
                                size={mobileDecoSize}
                                fromX="-110vw"
                                delay={0.24}
                                inView={inView}
                            />
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%" }}
                            >
                                Align here.
                            </span>
                        </div>

                        {/* Mobile line 3 */}
                        <div className="w-full flex items-center justify-center">
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%" }}
                            >
                                Enter the
                            </span>
                        </div>

                        {/* Mobile line 4 */}
                        <div className="w-full flex items-center justify-center gap-[5.71px]">
                            <span
                                className="text-[#0A0A0A]"
                                style={{ fontFamily: font, fontWeight: 500, fontSize: mobileTextSize, lineHeight: "120%" }}
                            >
                                Creative Zone.
                            </span>
                            <InlineDeco
                                decoSrc={decoEnd}
                                w={46.96}
                                h={32}
                                fromX="110vw"
                                delay={0.18}
                                inView={inView}
                            />
                        </div>
                    </div>

                    {/* Mobile button */}
                    <ZoneButton font={font} isMobile />
                </div>
            </div>
        </section>
    )
}

/* ─────────────────────────────────────────────────────────── */
/*  Sub-components                                             */
/* ─────────────────────────────────────────────────────────── */

function InlineDeco({
    decoSrc, w, h, size,
    fromX, delay, inView,
}: {
    decoSrc: string; w?: number; h?: number; size?: string
    fromX: string; delay: number; inView: boolean
}) {
    return (
        <motion.span
            className="relative shrink-0"
            style={{ width: size ?? `${w}px`, height: size ?? `${h}px`, zIndex: 10 }}
            initial={{ x: fromX }}
            animate={inView ? { x: 0 } : { x: fromX }}
            transition={SPRING(delay)}
            aria-hidden="true"
        >
            <Image src={decoSrc} alt="" fill className="object-contain" />
        </motion.span>
    )
}

function WordWithDeco({
    label, font, textSize, decoSrc, decoW, decoH, gap,
    fromX, delay, inView,
}: {
    label: string; font: string; textSize: number
    decoSrc: string; decoW: number; decoH: number; gap: number
    fromX: string; delay: number; inView: boolean
}) {
    return (
        <span className="inline-flex items-center" style={{ gap: `${gap}px` }}>
            <span
                className="text-[#0A0A0A]"
                style={{ fontFamily: font, fontWeight: 500, fontSize: `${textSize}px`, lineHeight: "120%" }}
            >
                {label}
            </span>
            <motion.span
                className="relative shrink-0"
                style={{ width: `${decoW}px`, height: `${decoH}px`, zIndex: 10 }}
                initial={{ x: fromX }}
                animate={inView ? { x: 0 } : { x: fromX }}
                transition={SPRING(delay)}
                aria-hidden="true"
            >
                <Image src={decoSrc} alt="" fill className="object-contain" />
            </motion.span>
        </span>
    )
}

function ZoneButton({ font, isMobile }: { font: string; isMobile?: boolean }) {
    const wrapW = isMobile ? 207.83334350585938 : 246.2222137451172
    const wrapH = isMobile ? 50.19047546386719 : 60.5555534362793
    const pillW = isMobile ? 155.85714721679688 : 180.66665649414062
    const pillH = wrapH
    const circle = isMobile ? 47.57143020629883 : 60
    const gap = isMobile ? 4.4 : 5.56
    const borderW = isMobile ? 0.88 : 1.11
    const radius = isMobile ? 39.64 : 50
    const padY = isMobile ? 14.1 : 17.78
    const padX = isMobile ? 26.43 : 33.33
    const fontSize = isMobile ? 16 : 17.78
    const arrowBox = isMobile ? 26 : 33.33

    return (
        <div className="w-full flex items-center justify-center">
            <div
                className="flex items-center gap-[5.56px] group cursor-pointer"
                style={{ width: `${wrapW}px`, height: `${wrapH}px`, gap: `${gap}px` }}
            >
                <Link
                    href="/design-school/courses"
                    className="flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-[#FF5C00]"
                    style={{
                        width: `${pillW}px`,
                        height: `${pillH}px`,
                        borderWidth: `${borderW}px`,
                        borderColor: "#FF5C00",
                        borderStyle: "solid",
                        borderRadius: `${radius}px`,
                        fontFamily: font,
                        fontWeight: 550,
                        padding: `${padY}px ${padX}px`,
                    }}
                >
                    <span
                        className="leading-none whitespace-nowrap transition-colors duration-300 group-hover:text-white"
                        style={{ fontSize: `${fontSize}px`, color: "#000000" }}
                    >
                        Enter the Zone
                    </span>
                </Link>

                <Link
                    href="/design-school/courses"
                    className="relative rounded-full bg-[#FF5C00] overflow-hidden shrink-0"
                    style={{ width: `${circle}px`, height: `${circle}px` }}
                    aria-label="Enter the Zone"
                >
                    <div
                        className={[
                            "absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0",
                            isMobile ? "-translate-x-[36px]" : "-translate-x-[45.56px]",
                        ].join(" ")}
                    >
                        <svg viewBox="0 0 34 34" fill="none" style={{ width: `${arrowBox}px`, height: `${arrowBox}px` }}>
                            <path d={ARROW_PATH} fill="white" />
                        </svg>
                    </div>
                    <div
                        className={[
                            "absolute inset-0 flex items-center justify-center transition-transform duration-300",
                            isMobile ? "group-hover:translate-x-[36px]" : "group-hover:translate-x-[46px]",
                        ].join(" ")}
                    >
                        <svg viewBox="0 0 34 34" fill="none" style={{ width: `${arrowBox}px`, height: `${arrowBox}px` }}>
                            <path d={ARROW_PATH} fill="white" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}
