"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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

const PROJECTS = [...BASE_PROJECTS, ...BASE_PROJECTS];

function getOffset(index: number, active: number, total: number) {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
}

export function TechProjectsSection() {
    const [activeProject, setActiveProject] = useState(0);
    const totalProjects = PROJECTS.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % totalProjects);
        }, 3000);
        return () => clearInterval(timer);
    }, [activeProject, totalProjects]);

    const nextProject = () => setActiveProject((prev) => (prev + 1) % totalProjects);
    const prevProject = () => setActiveProject((prev) => (prev - 1 + totalProjects) % totalProjects);

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
                <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[60px]">

                    {/* Two Column Layout */}
                    <div className="w-full max-w-[1340px] flex justify-center items-stretch gap-[40px] max-lg:flex-col max-lg:items-center">

                        {/* Left Card: Project Show (Sliding Carousel) */}
                        <div
                            className="tech-projects-card-gradient relative bg-[#D9D9D91A] rounded-[22px] shadow-[0px_2.18px_2.18px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px] flex flex-col w-full max-w-[650px] h-[428px] p-[20px] max-md:p-[16px] max-md:h-[396px] overflow-hidden"
                        >

                            {/* Inner Sliding Track wrapper */}
                            <div className="relative w-full h-full flex flex-col justify-between overflow-hidden">
                                <div className="relative w-full h-full flex items-center">
                                    {PROJECTS.map((proj, i) => {
                                        const offset = getOffset(i, activeProject, totalProjects);
                                        const isVisible = Math.abs(offset) <= 1;

                                        return (
                                            <div
                                                key={i}
                                                className="absolute inset-0 flex flex-col gap-[20px]"
                                                style={{
                                                    transform: `translateX(${offset * 105}%)`,
                                                    opacity: isVisible ? 1 : 0,
                                                    pointerEvents: offset === 0 ? "auto" : "none",
                                                    transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease"
                                                }}
                                            >
                                                <div className="relative w-full h-[309px] rounded-[22px] overflow-hidden shrink-0 max-md:h-[220px]">
                                                    <Image
                                                        src={proj.src}
                                                        fill
                                                        alt="Project Screenshot"
                                                        className="object-cover rounded-[22px]"
                                                    />
                                                </div>
                                                <div className="w-full flex justify-between items-center max-md:justify-center">
                                                    <p className="w-[330px] font-outfit font-light text-[18px] leading-none text-white m-0 max-md:w-full max-md:text-[16px] max-md:text-center max-md:px-[20px]">
                                                        {proj.desc}
                                                    </p>
                                                    {/* Desktop spacer to keep text left aligned while arrows sit on the right */}
                                                    <div className="w-[103px] hidden md:block shrink-0"></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Fixed Navigation Arrows */}
                                <div className="absolute bottom-0 right-0 flex gap-[10px] items-center z-20 max-md:left-[51%] max-md:right-auto max-md:-translate-x-1/2">
                                    <button
                                        onClick={() => {
                                            prevProject();
                                            // Reset timer logic optionally if needed, standard relies on active project dep
                                        }}
                                        className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] rotate-[-180deg] opacity-70 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-100"
                                        aria-label="Previous project"
                                    >
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                                    </button>
                                    <button
                                        onClick={() => {
                                            nextProject();
                                        }}
                                        className="relative bg-transparent border-none p-0 w-[46.67px] h-[46.67px] opacity-100 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80"
                                        aria-label="Next project"
                                    >
                                        <Image src="/photos/Tech/Active Arowmark.svg" fill alt="" className="object-contain" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Stats */}
                        <div
                            className="tech-projects-card-gradient relative bg-[#D9D9D91A] rounded-[22px] shadow-[0px_2.18px_2.18px_0px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px] flex flex-col w-full max-w-[650px] h-[428px] py-[35px] px-[100px] gap-[44px] justify-center items-center max-lg:px-[40px] max-md:px-[20px] max-md:h-[396px] max-md:py-[40px] overflow-hidden"
                        >

                            <div className="flex flex-col items-center gap-[13px] w-full">
                                <div className="font-outfit font-normal text-[64px] leading-[130%] text-white text-center m-0 max-md:text-[48px]">10+</div>
                                <div className="font-outfit font-extralight text-[20px] leading-[130%] tracking-[0.5em] uppercase text-white text-center m-0 max-md:text-[16px] max-md:tracking-[0.3em]">Projects</div>
                            </div>

                            <div className="w-[249.8px] h-[1px] bg-white shrink-0"></div>

                            <div className="flex flex-col items-center gap-[13px] w-full">
                                <div className="font-outfit font-normal text-[64px] leading-[130%] text-white text-center m-0 max-md:text-[48px]">250+</div>
                                <div className="font-outfit font-extralight text-[20px] leading-[130%] tracking-[0.5em] uppercase text-white text-center m-0 max-md:text-[16px] max-md:tracking-[0.3em]">Hours of work</div>
                            </div>

                        </div>

                    </div>

                    {/* Bottom Button Component */}
                    <div className="w-full flex justify-center items-center">
                        <button className="bg-transparent border-none cursor-pointer p-0 transition-transform duration-200 ease hover:scale-[1.05]">
                            <Image
                                src="/photos/Tech/Button Container (1).svg"
                                width={188}
                                height={44}
                                alt="View Projects"
                                className="object-contain"
                            />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
