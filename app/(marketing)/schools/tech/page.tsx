import Image from "next/image";
import TechHero from "@/components/sections/tech/TechHeroSection";
import { TechIntroSection } from "@/components/sections/tech/TechIntroSection";
import { TechShowcaseSection } from "@/components/sections/tech/TechShowcaseSection";
import { TechProjectsSection } from "@/components/sections/tech/TechProjectsSection";
import { TechPlacementsSection } from "@/components/sections/tech/TechPlacementsSection";
import { TechPathSection } from "@/components/sections/tech/TechPathSection";

import { TechPreneur } from "@/components/layout/TechPreneur";
import { TechMentors } from "@/components/layout/TechMentors";
import { TechWhyChoose } from "@/components/layout/TechWhyChoose";
import { TechCulture } from "@/components/layout/TechCulture";
import { TechYoutube } from "@/components/layout/TechYoutube";
import { TechBlogs } from "@/components/layout/TechBlogs";
import { TechFaq } from "@/components/layout/TechFaq";
import { TechGlobalLearning } from "@/components/layout/TechGlobalLearning";
import { TechQuote } from "@/components/layout/TechQuote";
import { TechFooter } from "@/components/layout/TechFooter";
export default function TechSchoolPage() {
    return (
        <main className="w-full min-h-[1391px] bg-[#111111] overflow-x-hidden relative">

            {/* ── Page content ── */}
            <div className="relative z-[2]">
                <TechHero />

                {/* ── Main sections with Image.svg background (Mobile) ── */}
                <div className="relative w-full bg-[#111111]">

                    {/* Background layer: Image.svg - mobile/tablet only; hidden on lg+ so footer has no pattern */}
                    <div className="absolute top-0 left-0 w-full h-[13278px] z-[1] pointer-events-none overflow-hidden max-lg:block lg:hidden" aria-hidden="true">
                        <Image
                            src="/photos/Tech/Image.svg"
                            alt=""
                            width={1442}
                            height={13278}
                            className="w-full h-full object-cover object-top"
                            priority
                        />
                    </div>

                    {/* Content components */}
                    <div className="relative z-[5]">
                        <TechIntroSection />
                        <TechShowcaseSection />
                        <TechPathSection />
                        <TechProjectsSection />
                        <TechPlacementsSection />
                    </div>
                </div>

                {/* ── Sajfar Branch Content: TechPreneur → TechQuote with Image.svg background ── */}
                <div className="relative w-full" style={{ backgroundColor: "#111111" }}>
                    <div className="relative w-full">
                        {/* Background: Image.svg — full coverage, same visibility as other sections */}
                        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                            <Image
                                src="/photos/Tech/Image.svg"
                                alt=""
                                fill
                                sizes="100vw"
                                className="object-cover object-top"
                                aria-hidden
                            />
                        </div>
                        <div className="relative z-10 w-full flex flex-col">
                            <TechPreneur />
                            <TechMentors />

                            {/* WhyChoose + Culture — shared gradient layer for tablet+ */}
                            <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column" }}>

                                {/* Tablet+: purple gradient — strong presence from WhyChoose cards through Culture cards */}
                                <div
                                    className="hidden md:block absolute left-0 right-0 z-0 pointer-events-none overflow-hidden"
                                    style={{
                                        top: "100px",
                                        height: "1700px",
                                        maskImage: "radial-gradient(ellipse 80% 88% at 50% 49%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 14%, rgba(0,0,0,0.62) 28%, rgba(0,0,0,0.40) 44%, rgba(0,0,0,0.20) 62%, rgba(0,0,0,0.07) 78%, rgba(0,0,0,0.02) 90%, transparent 100%)",
                                        WebkitMaskImage: "radial-gradient(ellipse 80% 88% at 50% 49%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.82) 14%, rgba(0,0,0,0.62) 28%, rgba(0,0,0,0.40) 44%, rgba(0,0,0,0.20) 62%, rgba(0,0,0,0.07) 78%, rgba(0,0,0,0.02) 90%, transparent 100%)",
                                    }}
                                >
                                    <div style={{ position: "absolute", inset: 0 }}>
                                        <Image src="/photos/Tech/Gradient2.1.svg" alt="" fill className="object-cover object-center" aria-hidden />
                                    </div>
                                    <div style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
                                        <Image src="/photos/Tech/Ellipse 156.svg" alt="" fill className="object-cover object-center" aria-hidden />
                                    </div>
                                </div>

                                {/* Tablet+: orange gradient — localized at TechCulture title right side */}
                                <div
                                    className="hidden md:block absolute pointer-events-none z-[2]"
                                    style={{
                                        top: "1150px",
                                        left: "55%",
                                        transform: "translateY(-50%)",
                                        width: "320px",
                                        height: "260px",
                                        rotate: "-164.21deg",
                                        opacity: 0.72,
                                    }}
                                >
                                    <Image src="/photos/Tech/Ellipse 4.svg" alt="" fill className="object-contain object-center" aria-hidden />
                                </div>

                                <TechWhyChoose />
                                <TechCulture />
                            </div>

                            <TechYoutube />
                            <TechBlogs />
                            <TechFaq />
                            <TechGlobalLearning />
                            <TechQuote />
                        </div>
                    </div>
                </div>

                {/* Footer: no dot/Image.svg on any screen; solid block on top */}
                <div className="relative z-10 bg-[#111111]">
                    <TechFooter />
                </div>
            </div>

        </main>
    );
}
