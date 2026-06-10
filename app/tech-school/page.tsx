import Image from "next/image";
import dynamic from "next/dynamic";
import TechHero from "@/components/sections/tech/TechHeroSection";
import { TechIntroSection } from "@/components/sections/tech/TechIntroSection";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { TechMentors } from "@/components/layout/TechMentors";
import type { TechMentorCard } from "@/components/layout/TechMentorsCarousel";
import { fetchMentorsBySchool } from "@/lib/mentors-api";
import { buildSitePageMetadata } from "@/lib/site-page-metadata";
import {
    TechDotsBackground,
    TechWhatsAppFloatingButton,
    TechYoutube,
} from "./_components/TechClientComponents";

export const metadata = buildSitePageMetadata({
  title: "AI-Infused Coding Courses | Learn to Code Smarter at Tech School",
  description:
    "Learn to code with AI at Tech School—master MERN, Flutter, Python & analytics. Build the future with skills that go beyond basics.",
  canonical: "https://harisandcoacademy.com/tech-school/",
});

// ── Below-fold sections — lazy with height placeholders to prevent CLS ─────
const TechShowcaseSection = dynamic(
    () => import("@/components/sections/tech/TechShowcaseSection").then(m => ({ default: m.TechShowcaseSection })),
    { loading: () => <div style={{ minHeight: 560 }} /> }
);
const TechPathSection = dynamic(
    () => import("@/components/sections/tech/TechPathSection").then(m => ({ default: m.TechPathSection })),
    { loading: () => <div style={{ minHeight: 500 }} /> }
);
const TechProjectsSection = dynamic(
    () => import("@/components/sections/tech/TechProjectsSection").then(m => ({ default: m.TechProjectsSection })),
    { loading: () => <div style={{ minHeight: 500 }} /> }
);
const TechPlacementsSection = dynamic(
    () => import("@/components/sections/tech/TechPlacementsSection").then(m => ({ default: m.TechPlacementsSection })),
    { loading: () => <div style={{ minHeight: 500 }} /> }
);
const TechPreneur = dynamic(
    () => import("@/components/layout/TechPreneur").then(m => ({ default: m.TechPreneur })),
    { loading: () => <div style={{ minHeight: 600 }} /> }
);
const TechWhyChoose = dynamic(
    () => import("@/components/layout/TechWhyChoose").then(m => ({ default: m.TechWhyChoose })),
    { loading: () => <div style={{ minHeight: 500 }} /> }
);
const TechCulture = dynamic(
    () => import("@/components/layout/TechCulture").then(m => ({ default: m.TechCulture })),
    { loading: () => <div style={{ minHeight: 500 }} /> }
);
const TechBlogs = dynamic(
    () => import("@/components/layout/TechBlogs").then(m => ({ default: m.TechBlogs })),
    { loading: () => <div style={{ minHeight: 500 }} /> }
);
const TechFaq = dynamic(
    () => import("@/components/layout/TechFaq").then(m => ({ default: m.TechFaq })),
    { loading: () => <div style={{ minHeight: 400 }} /> }
);
const TechGlobalLearning = dynamic(
    () => import("@/components/layout/TechGlobalLearning").then(m => ({ default: m.TechGlobalLearning })),
    { loading: () => <div style={{ minHeight: 400 }} /> }
);
const TechQuote = dynamic(
    () => import("@/components/layout/TechQuote").then(m => ({ default: m.TechQuote })),
    { loading: () => <div style={{ minHeight: 300 }} /> }
);
const TechFooter = dynamic(
    () => import("@/components/layout/TechFooter").then(m => ({ default: m.TechFooter })),
    { loading: () => <div style={{ minHeight: 400 }} /> }
);

export default async function TechSchoolPage() {
    const apiMentors = await fetchMentorsBySchool("Tech School");
    const techMentorCards: TechMentorCard[] = apiMentors.map((m) => ({
        imgSrc: m.photoUrl,
        name: m.name,
        role: m.designation,
    }));

    return (
        <div className="w-full min-h-[1391px] bg-[#111111] overflow-x-hidden relative" role="main">

            {/* ── Page content ── */}
            <div className="relative z-[2]">
                {/* Hero — statically imported, renders immediately */}
                <TechHero />

                {/* ── All sections: TechIntro → TechQuote with single Image.svg background ── */}
                <div className="relative w-full bg-[#111111]">

                    {/* Dot grid follows pointer — client-only, no SSR */}
                    <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
                        <TechDotsBackground />
                    </div>

                    {/* Content components — TechIntro → TechPlacements */}
                    <div className="relative z-[5]">
                        {/* TechIntroSection is above the fold — no reveal animation */}
                        <TechIntroSection />
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

                            {/* Tablet+: purple gradient — simplified mask for lower GPU cost */}
                            <div
                                className="hidden md:block absolute left-0 right-0 z-0 pointer-events-none overflow-hidden"
                                style={{
                                    top: "250px",
                                    height: "1700px",
                                    maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
                                }}
                            >
                                <div style={{ position: "absolute", inset: 0 }}>
                                    <Image src="/photos/Tech/Gradient2.1.svg" alt="" fill className="object-cover object-center" aria-hidden loading="lazy" />
                                </div>
                                <div style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
                                    <Image src="/photos/Tech/Ellipse 156.svg" alt="" fill className="object-cover object-center" aria-hidden loading="lazy" />
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

            {/* Floating button — mounted last, client-only, no layout impact */}
            <TechWhatsAppFloatingButton />
        </div>
    );
}
