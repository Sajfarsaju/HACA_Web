import Image from "next/image";
import dynamic from "next/dynamic";
import { TechDotsBackground } from "@/components/tech/TechDotsBackground";
import TechHero from "@/components/sections/tech/TechHeroSection";
import { TechIntroSection } from "@/components/sections/tech/TechIntroSection";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { TechMentors } from "@/components/layout/TechMentors";
import type { TechMentorCard } from "@/components/layout/TechMentorsCarousel";
import { fetchMentorsBySchool } from "@/lib/mentors-api";
import { buildSitePageMetadata } from "@/lib/site-page-metadata";

export const metadata = buildSitePageMetadata({
  title: "AI-Infused Coding Courses | Learn to Code Smarter at Tech School",
  description:
    "Learn to code with AI at Tech School—master MERN, Flutter, Python & analytics. Build the future with skills that go beyond basics.",
  canonical: "https://harisandcoacademy.com/tech-school/",
});

// Below-fold sections — loaded only when browser is idle / user scrolls
const TechShowcaseSection   = dynamic(() => import("@/components/sections/tech/TechShowcaseSection").then(m => ({ default: m.TechShowcaseSection })));
const TechPathSection       = dynamic(() => import("@/components/sections/tech/TechPathSection").then(m => ({ default: m.TechPathSection })));
const TechProjectsSection   = dynamic(() => import("@/components/sections/tech/TechProjectsSection").then(m => ({ default: m.TechProjectsSection })));
const TechPlacementsSection = dynamic(() => import("@/components/sections/tech/TechPlacementsSection").then(m => ({ default: m.TechPlacementsSection })));
const TechPreneur           = dynamic(() => import("@/components/layout/TechPreneur").then(m => ({ default: m.TechPreneur })));
const TechWhyChoose         = dynamic(() => import("@/components/layout/TechWhyChoose").then(m => ({ default: m.TechWhyChoose })));
const TechCulture           = dynamic(() => import("@/components/layout/TechCulture").then(m => ({ default: m.TechCulture })));
const TechYoutube           = dynamic(() => import("@/components/layout/TechYoutube").then(m => ({ default: m.TechYoutube })));
const TechBlogs             = dynamic(() => import("@/components/layout/TechBlogs").then(m => ({ default: m.TechBlogs })));
const TechFaq               = dynamic(() => import("@/components/layout/TechFaq").then(m => ({ default: m.TechFaq })));
const TechGlobalLearning    = dynamic(() => import("@/components/layout/TechGlobalLearning").then(m => ({ default: m.TechGlobalLearning })));
const TechQuote             = dynamic(() => import("@/components/layout/TechQuote").then(m => ({ default: m.TechQuote })));
const TechFooter            = dynamic(() => import("@/components/layout/TechFooter").then(m => ({ default: m.TechFooter })));
const TechWhatsAppFloatingButton = dynamic(() => import("@/components/layout/TechWhatsAppFloatingButton").then(m => ({ default: m.TechWhatsAppFloatingButton })));

export default async function TechSchoolPage() {
    const apiMentors = await fetchMentorsBySchool("Tech School");
    const techMentorCards: TechMentorCard[] = apiMentors.map((m) => ({
        imgSrc: m.photoUrl,
        name: m.name,
        role: m.designation,
    }));

    return (
        <div className="w-full min-h-[1391px] bg-[#111111] overflow-x-hidden relative" role="main">
            <TechWhatsAppFloatingButton />

            {/* ── Page content ── */}
            <div className="relative z-[2]">
                <TechHero />

                {/* ── All sections: TechIntro → TechQuote with single Image.svg background ── */}
                <div className="relative w-full bg-[#111111]">

                    {/* Dot grid follows pointer (mouse/touch); see TechDotsBackground.tsx for physics + tuning */}
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
                            <TechMentors mentors={techMentorCards} />
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

