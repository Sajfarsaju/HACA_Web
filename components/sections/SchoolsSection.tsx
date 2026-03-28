"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion"

/** Paths match `Navbar` / `Navigation` school dropdown */
const schools = [
    {
        id: 1,
        logo: "/photos/main/degital marketing.svg",
        alt: "Digital Marketing School",
        exploreHref: "/marketing-school",
    },
    {
        id: 2,
        logo: "/photos/main/design school.svg",
        alt: "Design School",
        exploreHref: "/design-school",
    },
    {
        id: 3,
        logo: "/photos/main/tech school.svg",
        alt: "Tech School",
        exploreHref: "/tech-school",
    },
    {
        id: 4,
        logo: "/photos/main/FINANCE SCHOOL.svg",
        alt: "Finance School",
        exploreHref: "/finance-school",
    },
] as const

function SchoolCard({
    logo,
    alt,
    exploreHref,
    cardIndex,
}: {
    logo: string
    alt: string
    exploreHref: string
    cardIndex: number
}) {
    const prefersReducedMotion = useReducedMotion()
    const cardRef = React.useRef<HTMLDivElement>(null)
    /** Stops 3D tilt updates while hovering the Explore link — avoids jitter from micro mouse moves. */
    const [tiltLocked, setTiltLocked] = React.useState(false)
    const [exploreHover, setExploreHover] = React.useState(false)

    const mx = useMotionValue(0.5)
    const my = useMotionValue(0.5)
    const rotateX = useTransform(my, [0, 1], [8, -8])
    const rotateY = useTransform(mx, [0, 1], [-8, 8])
    const springX = useSpring(rotateX, { stiffness: 180, damping: 22, mass: 0.9 })
    const springY = useSpring(rotateY, { stiffness: 180, damping: 22, mass: 0.9 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReducedMotion || !cardRef.current || tiltLocked) return
        const rect = cardRef.current.getBoundingClientRect()
        mx.set((e.clientX - rect.left) / rect.width)
        my.set((e.clientY - rect.top) / rect.height)
    }

    const handleMouseLeave = () => {
        mx.set(0.5)
        my.set(0.5)
    }

    return (
        <motion.div
            ref={cardRef}
            className="flex-1 min-w-0 max-w-[317px] h-[444px] max-[1100px]:flex-auto max-[1100px]:max-w-full max-[1100px]:w-full max-[1100px]:h-[clamp(280px,38vw,380px)] max-md:h-[clamp(140px,41.6vw,160px)]"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: "-48px 0px -32px 0px" }}
            transition={{
                duration: 0.5,
                delay: cardIndex * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            <Link
                href={exploreHref}
                className="block h-full w-full rounded-[20px] no-underline outline-none focus-visible:ring-2 focus-visible:ring-[#4C75FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#000210]"
                aria-label={`${alt} — explore courses`}
            >
            <motion.div
                className="w-full h-full rounded-[20px] border border-[#25317D] p-[20px_16px_16px_16px] flex flex-col justify-between items-start bg-[radial-gradient(ellipse_60%_40%_at_0%_0%,rgba(30,80,255,0.35)_0%,rgba(10,20,100,0.15)_45%,transparent_75%),radial-gradient(ellipse_85%_65%_at_100%_100%,rgba(30,80,255,0.45)_0%,rgba(10,20,100,0.25)_45%,rgba(0,3,25,1)_75%)] max-[1100px]:h-full max-md:h-full"
                style={
                    prefersReducedMotion
                        ? undefined
                        : { rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }
                }
                whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
                transition={{ type: "spring", stiffness: 210, damping: 20 }}
            >
                {/* School Logo — top left */}
                <div className="w-[158px] h-[65px] flex items-start shrink-0 max-[1100px]:w-[clamp(110px,16vw,158px)] max-[1100px]:h-[clamp(45px,7vw,65px)] max-md:w-[clamp(80px,24.9vw,96px)] max-md:h-[clamp(32px,10.2vw,40px)]">
                    <Image
                        src={logo}
                        alt={alt}
                        width={158}
                        height={65}
                        className="w-full h-full object-contain object-left"
                    />
                </div>

                {/* Explore Courses — bottom right: subtle “breathing” loop + stronger hover */}
                <motion.div
                    className="self-end inline-flex max-[1100px]:w-[clamp(120px,17vw,162px)] max-[1100px]:h-[clamp(20px,3vw,26px)] max-md:w-[clamp(115px,35.2vw,135px)] max-md:h-[clamp(15px,4.8vw,19px)]"
                    style={{ transformOrigin: "100% 50%" }}
                    // Important: don't scale the whole pill on hover to avoid flicker.
                    animate={{ scale: 1 }}
                    transition={{ duration: 0 }}
                >
                    <span
                        className="group/explore relative inline-flex h-[26px] w-[162px] shrink-0 cursor-pointer items-center justify-center rounded-[100px] bg-transparent p-0 overflow-hidden max-[1100px]:h-[clamp(20px,3vw,26px)] max-[1100px]:w-full max-md:h-[clamp(15px,4.8vw,19px)] max-md:w-full transition-colors"
                        onPointerEnter={() => {
                            setTiltLocked(true)
                            setExploreHover(true)
                            mx.set(0.5)
                            my.set(0.5)
                        }}
                        onPointerLeave={() => {
                            setTiltLocked(false)
                            setExploreHover(false)
                        }}
                    >
                        {/* Animate only the button text/label (SVG) via CSS masking */}
                        <motion.span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-[100px] opacity-0"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(76,117,255,0.0) 0%, rgba(76,117,255,0.9) 35%, rgba(26,79,255,0.95) 55%, rgba(76,117,255,0.0) 100%)",
                                backgroundSize: "220% 100%",
                                backgroundPosition: "0% 50%",
                                WebkitMaskImage: "url('/photos/main/explore course arrow.svg')",
                                maskImage: "url('/photos/main/explore course arrow.svg')",
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                                WebkitMaskSize: "contain",
                                maskSize: "contain",
                                WebkitMaskPosition: "center",
                                maskPosition: "center",
                            }}
                            animate={{
                                opacity: exploreHover ? 1 : 0,
                                backgroundPosition: exploreHover ? ["0% 50%", "100% 50%"] : "0% 50%",
                            }}
                            transition={
                                prefersReducedMotion
                                    ? { duration: 0.15 }
                                    : exploreHover
                                      ? { duration: 1.6, repeat: Infinity, ease: "linear" }
                                      : { duration: 0.15 }
                            }
                        />

                        <Image
                            src="/photos/main/explore course arrow.svg"
                            alt=""
                            width={162}
                            height={26}
                            className="pointer-events-none relative h-full w-full object-contain brightness-100 transition-[filter] duration-200 ease-out group-hover/explore:brightness-125 group-hover/explore:saturate-150 group-active/explore:brightness-95"
                        />
                    </span>
                </motion.div>
            </motion.div>
            </Link>
        </motion.div>
    )
}

export function SchoolsSection() {
    return (
        <section className="w-full section-4k h-[673px] mx-auto pt-[36px] px-[60px] pb-[40px] flex flex-col items-center gap-[57px] overflow-hidden opacity-100 max-[1100px]:h-auto max-[1100px]:p-[clamp(28px,4vw,50px)_clamp(24px,4vw,50px)] max-[1100px]:gap-[clamp(28px,4vw,48px)] max-md:p-[clamp(24px,6vw,40px)_clamp(16px,5vw,24px)] max-md:gap-[clamp(20px,7vw,28px)] max-md:items-start">
            {/* Header */}
            <div className="w-full max-w-[1320px] flex flex-col items-center gap-[20px] shrink-0 max-md:gap-[clamp(6px,2.1vw,10px)] max-md:items-start">
                {/* Badge Button */}
                <button className="flex items-center justify-start w-[152px] h-[64px] p-0 rounded-[100px] border-none bg-transparent cursor-default shrink-0 max-md:w-[106px] max-md:h-[45px]" aria-label="Explore Schools">
                    <Image
                        src="/photos/main/school arrow.svg"
                        alt="Schools"
                        width={152}
                        height={64}
                        className="w-full h-full object-contain"
                    />
                </button>

                {/* Heading */}
                <h2 className="font-rethink font-bold text-[32px] leading-[110%] tracking-[0%] text-center text-[#ffffff] m-0 max-[1100px]:text-[clamp(24px,3vw,30px)] max-md:text-[clamp(20px,5.8vw,24px)] max-md:text-left">Pick What Feels Right</h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-[1320px] h-[444px] flex flex-row justify-between items-stretch gap-[clamp(12px,1.6vw,20px)] max-[1100px]:h-auto max-[1100px]:grid max-[1100px]:grid-cols-2 max-[1100px]:gap-[clamp(16px,2vw,24px)] max-md:flex max-md:flex-col max-md:gap-[clamp(16px,5.3vw,22px)]">
                {schools.map((school, index) => (
                    <SchoolCard
                        key={school.id}
                        logo={school.logo}
                        alt={school.alt}
                        exploreHref={school.exploreHref}
                        cardIndex={index}
                    />
                ))}
            </div>
        </section>
    )
}
