import Image from "next/image"
import { AboutStatsSection } from "@/components/about/AboutStatsSection"
import { AboutWhyHacaSection } from "@/components/about/AboutWhyHacaSection"
import { AboutCampusesSection } from "@/components/about/AboutCampusesSection"
import { AboutRecognitionSection } from "@/components/about/AboutRecognitionSection"
import { AboutValuesSection } from "@/components/about/AboutValuesSection"
import { AboutFacesSection } from "@/components/about/AboutFacesSection"
import { AboutFounderInsightsSection } from "@/components/about/AboutFounderInsightsSection"
import { AboutBeliefSection } from "@/components/about/AboutBeliefSection"

export const metadata = {
    title: "About Us | HACA",
    description: "Learn about HACA, our mission, and how we prepare students in India and UAE for real-world careers across Digital Marketing, Design, Tech, and Finance.",
}

export default function AboutPage() {
    return (
        <main className="w-full bg-transparent text-white">
            {/* ─── First Section: Hero About layout ─── */}
            <section className="w-full section-4k mx-auto pt-[120px] pb-[80px] flex flex-col items-center gap-[100px] px-[clamp(20px,4vw,60px)] max-md:pt-[24px] max-md:pb-[60px] max-md:gap-[30px]">
                {/* Heading: About us */}
                <h1 className="w-full max-w-[min(1440px,100%)] max-md:max-w-[335px] font-rethink font-medium text-[clamp(32px,5vw,58px)] leading-[1.1] text-center text-white m-0">
                    About us
                </h1>

                {/* Content row: Image + Copy */}
                <div className="w-full flex flex-row justify-between items-start gap-[clamp(24px,3vw,40px)] px-[clamp(12px,3vw,60px)] max-md:px-0 max-md:flex-col max-md:gap-[30px]">
                    {/* Photo with gradient fallback */}
                    <div className="relative w-[clamp(260px,34vw,487px)] aspect-[487/537] rounded-[20px] overflow-hidden bg-[#10152F] shrink-0 max-md:w-full max-md:max-w-[335px] max-md:aspect-[335/286] max-md:mx-auto">
                        <Image
                            src="/photos/main/about-hero.jpg"
                            alt="Students learning at HACA"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 335px, (max-width: 1200px) 34vw, 487px"
                        />
                    </div>

                    {/* Text column */}
                    <div className="w-full max-w-[clamp(320px,48vw,741px)] flex flex-col gap-[50px] max-md:max-w-[335px] max-md:gap-[20px] max-md:mx-auto">
                        {/* Big heading */}
                        <h2 className="w-full max-w-[min(597px,100%)] font-rethink font-semibold text-[clamp(26px,4vw,54px)] leading-[110%] text-white m-0">
                            Industry-Ready Skill Training Institute in India &amp; UAE
                        </h2>

                        {/* Subheading + paragraph */}
                        <div className="w-full max-w-[min(741px,100%)] flex flex-col gap-[20px]">
                            <h3 className="font-rethink font-semibold text-[clamp(20px,3vw,36px)] leading-[34px] text-white m-0">
                                Welcome to HACA
                            </h3>
                            <p className="font-rethink font-medium text-[clamp(16px,1.25vw,20px)] leading-[clamp(28px,2.1vw,34px)] text-[#A7ADBE] m-0">
                                HACA ( Haris &amp; Co Academy ) is a multidisciplinary professional training institute built to prepare
                                students for the real world of work. Backed by an active agency ecosystem, HACA focuses on skill-first
                                education across Digital Marketing, Design, Technology, and Finance.
                                <br />
                                <br />
                                For the past 4 years, we’ve helped learners build industry-ready skills through hands-on training, real
                                projects, and exposure to live agency workflows. At HACA, learning doesn’t stop at theory. Students work
                                the way professionals do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Second Section: About stats (same layout as home stats) ─── */}
            <AboutStatsSection />

            {/* ─── Third Section: Why HACA cards ─── */}
            <AboutWhyHacaSection />

            {/* ─── Fourth Section: Campuses & Global Presence ─── */}
            <AboutCampusesSection />

            {/* ─── Fifth Section: Recognition, Media & Awards ─── */}
            <AboutRecognitionSection />

            {/* ─── Sixth Section: Our Values ─── */}
            <AboutValuesSection />

            {/* ─── Seventh Section: Faces Behind HACA ─── */}
            <AboutFacesSection />

            {/* ─── Eighth Section: Founder Insights & Industry Talks ─── */}
            <AboutFounderInsightsSection />

            {/* ─── Ninth Section: The Belief That Drives Us ─── */}
            <AboutBeliefSection />
        </main>
    )
}

