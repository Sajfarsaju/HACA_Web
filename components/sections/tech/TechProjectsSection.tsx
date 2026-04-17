"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";

const BASE_PROJECTS = [
    {
        src: "/photos/Tech/Rectangle 6.svg",
        desc: "Easily book a ride anytime and anywhere with a smooth and reliable experience."
    },
    {
        src: "/photos/Tech/Rectangle 6.svg",
        desc: "Build scalable and responsive interfaces tailored to your organization needs."
    },
    {
        src: "/photos/Tech/Rectangle 6.svg",
        desc: "Design data-driven analytical dashboards for modern business intelligence."
    },
    {
        src: "/photos/Tech/Rectangle 6.svg",
        desc: "Automate complex workflows and save valuable time using AI agents."
    }
];

const PROJECTS = BASE_PROJECTS;

/** Start on second item when possible so a left peek exists (index 0 alone leaves the left side empty). */
const INITIAL_PROJECT_INDEX = Math.min(1, PROJECTS.length - 1);

/** Linear slide index (finite list). Do not wrap — circular math caused wrong-way slides after we removed infinite looping. */
function getOffset(index: number, active: number) {
    return index - active;
}

function CountUp({
    target,
    suffix = "",
    duration = 1200,
    startAnimation,
}: {
    target: number;
    suffix?: string;
    duration?: number;
    startAnimation: boolean;
}) {
    const [count, setCount] = useState(0);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        if (!startAnimation) return;
        startRef.current = null;

        function step(ts: number) {
            if (startRef.current === null) startRef.current = ts;
            const elapsed = ts - startRef.current;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        }

        rafRef.current = requestAnimationFrame(step);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [startAnimation, target, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export function TechProjectsSection() {
    const [activeProject, setActiveProject] = useState(INITIAL_PROJECT_INDEX);
    const totalProjects = PROJECTS.length;

    const canPrev = activeProject > 0;
    const canNext = activeProject < totalProjects - 1;

    const nextProject = () =>
        setActiveProject((prev) => Math.min(prev + 1, totalProjects - 1));
    const prevProject = () => setActiveProject((prev) => Math.max(prev - 1, 0));

    const statsRef = useRef<HTMLDivElement>(null);
    const statsVisible = useInView(statsRef, { once: true, amount: 0.5 });

    return (
        <section className="w-full relative overflow-visible" id="tech-projects">
            {/* Shared gradient border ring for both cards */}
            <style>{`
                .tech-projects-card-gradient::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 22px;
                    padding: 1px;
                    background: linear-gradient(90deg, #FF5600 0%, #694AFF 100%);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                    z-index: 1;
                }
            `}</style>

            <div className="w-full max-w-[1440px] mx-auto pt-[100px] px-[60px] pb-[40px] flex flex-col gap-[60px] max-lg:px-[30px] max-md:py-[60px] max-md:px-[20px] max-md:pb-[40px] max-md:gap-[40px]">

                {/* Header */}
                <div className="w-full max-w-[1320px] mx-auto flex flex-col items-center gap-[20px]">
                    <h2 className="font-outfit font-normal text-[60px] leading-[62px] tracking-[-0.02em] text-center text-white m-0 w-full max-md:text-[36px] max-md:leading-[40px] max-[375px]:text-[30px] max-[375px]:leading-[1.1] max-[375px]:tracking-[-0.2px] max-[375px]:w-full max-[375px]:max-w-[373px] max-[375px]:min-h-[66px] max-[375px]:mx-auto max-[320px]:text-[24px]">
                        Your Dream, Your Projects. <br className="hidden max-[375px]:block" /> Your Proof.
                    </h2>
                    <p className="font-outfit font-normal text-[24px] leading-[33.6px] tracking-[-0.2px] text-center text-[#A7A7A7] m-0 max-w-[1320px] w-full max-md:text-[16px] max-md:leading-[24px]">
                        You&apos;ll build real, working projects that show what you can do, not just what you&apos;ve read about. These aren&apos;t classroom exercises. They&apos;re portfolio pieces. Proof that you&apos;ve got the skills to code, create, and contribute from day one.
                    </p>
                </div>

                {/* Content */}
                <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[60px] max-md:gap-[24px]">

                    {/* Two Column Layout */}
                    <div className="w-full max-w-[1340px] flex justify-center items-stretch gap-[40px] max-lg:flex-col max-lg:items-center">

                        {/* Left Card: Project Show (Sliding Carousel) */}
                        <div
                            className="tech-projects-card-gradient relative bg-[#D9D9D91A] rounded-[22px] shadow-[0px_2.18px_2.18px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px] flex flex-col w-full max-w-[650px] h-[428px] p-[20px] max-md:p-[16px] max-md:h-[340px] max-sm:h-[328px] overflow-hidden"
                        >

                            {/* Inner Sliding Track wrapper */}
                            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
                                <div className="relative w-full h-full flex items-center">
                                    {PROJECTS.map((proj, i) => {
                                        const offset = getOffset(i, activeProject);
                                        const isVisible = Math.abs(offset) <= 1;

                                        return (
                                            <div
                                                key={i}
                                                className="absolute inset-0 flex flex-col gap-[20px] max-md:gap-[12px]"
                                                style={{
                                                    transform: `translateX(${offset * 105}%) translateZ(0)`,
                                                    opacity: isVisible ? 1 : 0,
                                                    pointerEvents: offset === 0 ? "auto" : "none",
                                                    zIndex: offset === 0 ? 2 : Math.max(0, 1 - Math.abs(offset)),
                                                    transition:
                                                        "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.45s ease",
                                                }}
                                                aria-hidden={offset !== 0}
                                            >
                                                <div className="relative w-full h-[309px] rounded-[22px] overflow-hidden shrink-0 max-md:h-[220px]">
                                                    <Image
                                                        src={proj.src}
                                                        fill
                                                        alt="Project Screenshot"
                                                        className="object-cover rounded-[22px]"
                                                    />
                                                </div>
                                                <div className="w-full flex justify-between items-center gap-3">
                                                    <p className="w-[330px] font-outfit font-light text-[18px] leading-none text-white m-0 max-md:w-auto max-md:flex-1 max-md:text-[16px] max-md:text-left max-md:px-0">
                                                        {proj.desc}
                                                    </p>
                                                    {/* Desktop spacer to keep text left aligned while arrows sit on the right */}
                                                    <div className="w-[103px] hidden md:block shrink-0"></div>
                                                    {/* Mobile arrows — keep on right of text */}
                                                    <div className="flex gap-[10px] items-center shrink-0 md:hidden">
                                                        <button
                                                            onClick={() => {
                                                                if (!canPrev) return;
                                                                prevProject();
                                                            }}
                                                            disabled={!canPrev}
                                                            aria-disabled={!canPrev}
                                                            className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] rotate-[-180deg] opacity-70 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                                                            aria-label="Previous project"
                                                        >
                                                            <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (!canNext) return;
                                                                nextProject();
                                                            }}
                                                            disabled={!canNext}
                                                            aria-disabled={!canNext}
                                                            className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] opacity-100 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                                                            aria-label="Next project"
                                                        >
                                                            <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Fixed Navigation Arrows */}
                                <div className="absolute bottom-0 right-0 hidden md:flex gap-[10px] items-center z-20">
                                    <button
                                        onClick={() => {
                                            if (!canPrev) return;
                                            prevProject();
                                        }}
                                        disabled={!canPrev}
                                        aria-disabled={!canPrev}
                                        className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] rotate-[-180deg] opacity-70 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                                        aria-label="Previous project"
                                    >
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (!canNext) return;
                                            nextProject();
                                        }}
                                        disabled={!canNext}
                                        aria-disabled={!canNext}
                                        className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] opacity-100 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-30"
                                        aria-label="Next project"
                                    >
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Stats */}
                        <div
                            ref={statsRef}
                            className="tech-projects-card-gradient relative bg-[#D9D9D91A] rounded-[22px] shadow-[0px_2.18px_2.18px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px] flex flex-col w-full max-w-[650px] h-[428px] py-[35px] px-[100px] gap-[44px] justify-center items-center max-lg:px-[40px] max-md:px-[20px] max-md:h-[396px] max-md:py-[40px] overflow-hidden"
                        >

                            <div className="flex flex-col items-center gap-[13px] w-full">
                                <div className="font-outfit font-normal text-[64px] leading-[130%] text-white text-center m-0 max-md:text-[48px]">
                                    <CountUp target={10} suffix="+" startAnimation={statsVisible} />
                                </div>
                                <div className="font-outfit font-extralight text-[20px] leading-[130%] tracking-[0.5em] uppercase text-white text-center m-0 max-md:text-[16px] max-md:tracking-[0.3em]">Projects</div>
                            </div>

                            <div className="w-[249.8px] h-[1px] bg-white shrink-0"></div>

                            <div className="flex flex-col items-center gap-[13px] w-full">
                                <div className="font-outfit font-normal text-[64px] leading-[130%] text-white text-center m-0 max-md:text-[48px]">
                                    <CountUp target={250} suffix="+" startAnimation={statsVisible} />
                                </div>
                                <div className="font-outfit font-extralight text-[20px] leading-[130%] tracking-[0.5em] uppercase text-white text-center m-0 max-md:text-[16px] max-md:tracking-[0.3em]">Hours of work</div>
                            </div>

                        </div>

                    </div>

                    {/* Bottom Button — white pill + slide animation (match original) */}
                    <div className="w-full flex justify-center items-center">
                        <Link
                            href="/tech-school/tech-projects"
                            className="group relative w-[188px] h-[44px] rounded-[8px] flex items-center justify-center overflow-hidden bg-white text-[#111111] transition-transform duration-200 ease-out hover:scale-[1.05]"
                        >
                            <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[20px] leading-[1] text-center text-[#111111] transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:-translate-y-full max-md:text-[16px] max-md:leading-[16px]">
                                Explore Projects
                            </span>
                            <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[20px] leading-[1] text-center text-[#111111] translate-y-full transition-transform duration-300 ease-out will-change-transform transform-gpu group-hover:translate-y-0 max-md:text-[16px] max-md:leading-[16px]">
                                Explore Projects
                            </span>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}
