"use client"

import Image from "next/image"

const TOOL_LOGOS = [
    { src: "/photos/main/tools 1.svg", alt: "Tool 1", width: 176, height: 31 },
    { src: "/photos/main/tools 2.svg", alt: "Tool 2", width: 176, height: 31 },
    { src: "/photos/main/tools 3.svg", alt: "Tool 3", width: 176, height: 31 },
    { src: "/photos/main/tools 4.svg", alt: "Tool 4", width: 176, height: 31 },
    { src: "/photos/main/tools 5.svg", alt: "Tool 5", width: 176, height: 31 },
] as const

const TRACK = [...TOOL_LOGOS, ...TOOL_LOGOS]

/**
 * Auto-scrolling tool logos — same loop idea as PressLogos / PhotoGallery marquee.
 */
export function CourseToolsMarquee() {
    return (
        <div className="mx-auto flex w-full max-w-[1163px] flex-col gap-[26.44px] py-[10px] px-[clamp(16px,4vw,30px)]">
            <style>{`
                @keyframes course-tools-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .course-tools-marquee-track {
                    animation: course-tools-marquee 36s linear infinite;
                    will-change: transform;
                }
                .course-tools-marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Heading pill — matches course badge / Figma */}
            <div className="flex w-full justify-center">
                <div className="inline-flex max-w-full items-center justify-center rounded-[88.12px] border border-white/10 bg-[#FFFFFF1A] px-[14.1px] py-[7.05px] shadow-[0px_0.88px_0.88px_0px_#0003124D,0px_7.05px_9.61px_0px_#0003121F] backdrop-blur-[5.29px]">
                    <h3 className="font-rethink font-semibold text-center text-[16px] leading-[22.47px] text-[#A7ADBE] sm:text-[20px] m-0 min-h-[23px]">
                        Tools you&apos;ll Learn
                    </h3>
                </div>
            </div>

            {/* SVG row — seamless horizontal scroll */}
            <div className="w-full min-h-[31px] overflow-hidden">
                <div className="course-tools-marquee-track flex w-max items-center gap-[26.44px]">
                    {TRACK.map((tool, index) => (
                        <div
                            key={`${tool.src}-${index}`}
                            className="flex h-[31px] w-[min(176px,42vw)] shrink-0 items-center justify-center sm:w-[176px]"
                        >
                            <Image
                                src={tool.src}
                                alt={tool.alt}
                                width={tool.width}
                                height={tool.height}
                                className="h-[31px] w-auto max-w-full object-contain object-center"
                                sizes="(max-width: 640px) 42vw, 176px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
