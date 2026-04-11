import Image from "next/image";
import { TechDotsBackground } from "@/components/tech/TechDotsBackground";
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
import { SectionReveal } from "@/components/animations/SectionReveal";

export default function TechSchoolPage() {
    return (
        <div className="w-full min-h-[1391px] bg-[#111111] overflow-x-hidden relative" role="main">

            {/* ── Page content ── */}
            <div className="relative z-[2]">
                <TechHero />

                {/* ── All sections: TechIntro → TechQuote with single Image.svg background ── */}
                <div className="relative w-full bg-[#111111]">

                    {/* Background layer: animated dot grid with cursor repulsion */}
                    <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
                        <TechDotsBackground />
                    </div>

                    {/* Content components — TechIntro → TechPlacements */}
                    <div className="relative z-[5]">
                        <SectionReveal>
                            <TechIntroSection />
                        </SectionReveal>
                        <SectionReveal>
                            <TechShowcaseSection />
                        </SectionReveal>
                        <SectionReveal>
                            <TechPathSection />
                        </SectionReveal>
                        <SectionReveal>
                            <TechProjectsSection />
                        </SectionReveal>
                        <SectionReveal>
                            <TechPlacementsSection />
                        </SectionReveal>
                    </div>

                    {/* TechPreneur → TechQuote */}
                    <div className="relative z-[5] w-full flex flex-col">
                        <SectionReveal>
                            <TechPreneur />
                        </SectionReveal>
                        <SectionReveal>
                            <TechMentors />
                        </SectionReveal>

                        {/* WhyChoose + Culture — shared gradient layer for tablet+ */}
                        <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column" }}>

                            {/* Tablet+: purple gradient — strong presence from WhyChoose cards through Culture cards */}
                            <div
                                className="hidden md:block absolute left-0 right-0 z-0 pointer-events-none overflow-hidden"
                                style={{
                                    top: "250px",
                                    height: "1700px",
                                    maskImage: `
                                        linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.5) 18%, black 25%, black 75%, rgba(0,0,0,0.5) 88%, rgba(0,0,0,0.1) 95%, transparent 100%),
                                        radial-gradient(ellipse 80% 88% at 50% 50%, black 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 60%, transparent 100%)
                                    `,
                                    WebkitMaskImage: `
                                        linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.5) 18%, black 25%, black 75%, rgba(0,0,0,0.5) 88%, rgba(0,0,0,0.1) 95%, transparent 100%),
                                        radial-gradient(ellipse 80% 88% at 50% 50%, black 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 60%, transparent 100%)
                                    `,
                                    maskComposite: "intersect",
                                    WebkitMaskComposite: "source-in",
                                }}
                            >
                                <div style={{ position: "absolute", inset: 0 }}>
                                    <Image src="/photos/Tech/Gradient2.1.svg" alt="" fill className="object-cover object-center" aria-hidden />
                                </div>
                                <div style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
                                    <Image src="/photos/Tech/Ellipse 156.svg" alt="" fill className="object-cover object-center" aria-hidden />
                                </div>
                            </div>

                            {/* Mobile: Gradient Layer (Rectangle 15 + Ellipses) */}
                            <div
                                className="md:hidden absolute left-1/2 -translate-x-1/2 z-0 pointer-events-none"
                                style={{
                                    top: "0",
                                    width: "304px",
                                    height: "2800px",
                                    borderRadius: "250px",
                                    opacity: 0.87,
                                    backdropFilter: "blur(88.726px)",
                                    WebkitBackdropFilter: "blur(88.726px)",
                                    // Two-way mask for smooth spread on all sides
                                    maskImage: `
                                        linear-gradient(to bottom, transparent, black 10%, black 90%, transparent),
                                        linear-gradient(to right, transparent, black 5%, black 95%, transparent)
                                    `,
                                    WebkitMaskImage: `
                                        linear-gradient(to bottom, transparent, black 10%, black 90%, transparent),
                                        linear-gradient(to right, transparent, black 5%, black 95%, transparent)
                                    `,
                                    maskComposite: "intersect",
                                    WebkitMaskComposite: "source-in",
                                }}
                                aria-hidden="true"
                            >
                                {/* Base Rectangle 15 - Added extra blur for smoother horizontal spread */}
                                <Image 
                                    src="/photos/Tech/Rectangle 15.svg" 
                                    alt="" 
                                    fill 
                                    className="object-cover rounded-[250px]"
                                    style={{ filter: "blur(10px)" }} 
                                />

                                {/* Ellipse 4 (1) - Positioned for WhyChoose first card */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: "237.52px",
                                        height: "277.25px",
                                        top: "16%", // Adjusted for better central alignment in first card
                                        left: "75%",
                                        transform: "translateX(-50%) rotate(-162.46deg)",
                                        opacity: 1,
                                        filter: "blur(20px) brightness(1.5)",
                                        backdropFilter: "blur(111.23px)",
                                        WebkitBackdropFilter: "blur(111.23px)",
                                        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                                        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
                                    }}
                                >
                                    <Image src="/photos/Tech/Ellipse 4 (1).svg" alt="" fill className="object-cover" />
                                </div>

                                {/* Ellipse 5 - Positioned for WhyChoose last card */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: "237.52px",
                                        height: "277.25px",
                                        top: "75.5%", // Adjusted for central alignment with the 6th card
                                        left: "75%",
                                        transform: "translateX(-50%) rotate(-162.46deg)",
                                        opacity: 1,
                                        filter: "blur(20px)",
                                        backdropFilter: "blur(111.23px)",
                                        WebkitBackdropFilter: "blur(111.23px)",
                                        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                                        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
                                    }}
                                >
                                    <Image src="/photos/Tech/Ellipse 5.svg" alt="" fill className="object-cover" />
                                </div>
                            </div>

                            <SectionReveal>
                                <TechWhyChoose />
                            </SectionReveal>
                            <SectionReveal>
                                <TechCulture />
                            </SectionReveal>
                        </div>

                        <SectionReveal>
                            <TechYoutube />
                        </SectionReveal>
                        <SectionReveal>
                            <TechBlogs />
                        </SectionReveal>
                        <SectionReveal>
                            <TechFaq />
                        </SectionReveal>
                        <SectionReveal>
                            <TechGlobalLearning />
                        </SectionReveal>
                        <SectionReveal>
                            <TechQuote />
                        </SectionReveal>
                    </div>
                </div>

                {/* Footer: solid block, no Image.svg */}
                <div className="relative z-10 bg-[#111111]">
                    <TechFooter />
                </div>
            </div>

        </div>
    );
}

