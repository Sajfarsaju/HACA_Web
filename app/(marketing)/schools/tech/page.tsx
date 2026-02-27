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
        /* Outermost page wrapper: max-width 1440px, position relative for bg layer */
        <main className="tech-page-root">

            {/* ── Page content ── */}
            <div className="tech-page-content">
                <TechHero />

                {/* ── Main sections with Image.svg background (Mobile) ── */}
                <div className="tech-sections-container">

                    {/* Background layer: Image.svg - specifically for components after hero */}
                    <div className="tech-page-bg" aria-hidden="true">
                        <Image
                            src="/photos/Tech/Image.svg"
                            alt=""
                            width={1442}
                            height={13278}
                            className="tech-page-bg-img"
                            priority
                        />
                    </div>

                    {/* Content components */}
                    <div className="tech-sections-inner">
                        <TechIntroSection />
                        <TechShowcaseSection />
                        <TechPathSection />
                        <TechProjectsSection />
                        <TechPlacementsSection />
                    </div>
                </div>

                {/* ── Sajfar Branch Content: Mentors, Culture, FAQ, etc. ── */}
                <div className="relative w-full" style={{ backgroundColor: "#111111" }}>

                    {/* Global Dot Background Pattern */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "url('/photos/schools/tech/dotBG.svg')",
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center",
                        opacity: 1,
                        zIndex: 1,
                        pointerEvents: "none",
                    }} />

                    <div className="relative z-10 w-full flex flex-col">
                        <TechPreneur />
                        <TechMentors />

                        {/* WhyChoose + Culture with Figma-accurate centered gradients */}
                        <div style={{
                            position: "relative",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)",
                        }}>
                            {/* Main purple glow */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/photos/schools/tech/Whychoose&Culture-gradientMain.svg"
                                alt=""
                                style={{
                                    position: "absolute",
                                    top: "200px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "1200px",
                                    height: "1490.2px",
                                    opacity: 0.77,
                                    zIndex: 1,
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Sub orange-purple glow */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/photos/schools/tech/Whychoose&Culture-gradientSub.svg"
                                alt=""
                                style={{
                                    position: "absolute",
                                    top: "800px",
                                    left: "50%",
                                    transform: "translateX(calc(-50% + 79px)) rotate(-167.16deg)",
                                    width: "713px",
                                    height: "626.7px",
                                    opacity: 1,
                                    zIndex: 2,
                                    pointerEvents: "none",
                                    filter: "brightness(1.4) saturate(1.8) blur(24px)",
                                    mixBlendMode: "screen",
                                }}
                            />

                            {/* Section content */}
                            <div style={{ position: "relative", zIndex: 3 }}>
                                <TechWhyChoose />
                                <TechCulture />
                            </div>
                        </div>

                        <TechYoutube />
                        <TechBlogs />
                        <TechFaq />
                        <TechGlobalLearning />
                        <TechQuote />
                    </div>
                </div>

                <TechFooter />
            </div>

        </main>
    );
}
