import { TechQuote } from "@/components/layout/TechQuote";
import { TechFooter } from "@/components/layout/TechFooter";
import { TechGlobalLearning } from "@/components/layout/TechGlobalLearning";
import { TechFaq } from "@/components/layout/TechFaq";
import { TechBlogs } from "@/components/layout/TechBlogs";
import { TechYoutube } from "@/components/layout/TechYoutube";
import { TechCulture } from "@/components/layout/TechCulture";
import { TechWhyChoose } from "@/components/layout/TechWhyChoose";
import { TechMentors } from "@/components/layout/TechMentors";
import { TechPreneur } from "@/components/layout/TechPreneur";

export default function TechSchoolPage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#111111" }}>

            {/* ── Main Content Wrapper with Global Dot Background ── */}
            <div className="relative w-full" style={{ backgroundColor: "#111111" }}>

                {/* Global Dot Background Pattern — Covers entire content area until Quote */}
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

                    {/* ── WhyChoose + Culture with Figma-accurate centered gradients ── */}
                    <div style={{
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)",
                    }}>

                        {/* Main purple glow — shifted down to connect with Culture title */}
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

                        {/* Sub orange-purple glow — boosted for clarity */}
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

                        {/* Section content — above both gradient layers */}
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
    )
}
