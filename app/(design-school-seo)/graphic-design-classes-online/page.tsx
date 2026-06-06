import { GraphicDesignOnlineHeroSection } from "./_sections/GraphicDesignOnlineHeroSection";
import { GraphicDesignOnlineStatsSection } from "./_sections/GraphicDesignOnlineStatsSection";
import { GraphicDesignOnlineWhyChooseSection } from "./_sections/GraphicDesignOnlineWhyChooseSection";
import { GraphicDesignOnlineCurriculumSection } from "./_sections/GraphicDesignOnlineCurriculumSection";
import { GraphicDesignOnlineAchieveSection } from "./_sections/GraphicDesignOnlineAchieveSection";
import { GraphicDesignOnlineWhoIsThisForSection } from "./_sections/GraphicDesignOnlineWhoIsThisForSection";
import { GraphicDesignOnlineCareerSection } from "./_sections/GraphicDesignOnlineCareerSection";
import { GraphicDesignOnlineExploreProgramsSection } from "./_sections/GraphicDesignOnlineExploreProgramsSection";
import { GraphicDesignOnlineWhyDesignSchoolSection } from "./_sections/GraphicDesignOnlineWhyDesignSchoolSection";
import { GraphicDesigningKeralaToolsSection } from "@/app/(design-school-seo)/graphic-designing-course-in-kerala/_sections/GraphicDesigningKeralaToolsSection";
import { GraphicDesigningCalicutBrandsSection } from "@/components/design/GraphicDesigningCalicutBrandsSection";
import { GraphicDesigningCalicutTestimonialsSection } from "@/components/design/GraphicDesigningCalicutTestimonialsSection";
import { GraphicDesigningCalicutMentorsSection } from "@/components/design/GraphicDesigningCalicutMentorsSection";
import { GraphicDesigningCalicutStudentsWorkSection } from "@/components/design/GraphicDesigningCalicutStudentsWorkSection";
import { DesignSeoCultureGrid } from "@/components/design/DesignSeoCultureGrid";
import { DesignSeoFaqList, type FaqItem } from "@/components/design/DesignSeoFaqList";
import { DesignSchoolFooter } from "@/components/design/DesignSchoolFooter";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";
import Link from "next/link";

export const metadata = buildDesignSchoolSeoMetadata("graphic-design-classes-online");

const DESIGN_HEADING_FONT = '"VC Nudge Trial Normal", sans-serif';
const DESIGN_SERIF_FONT = '"IvyPresto Display", serif';

const ONLINE_FAQS: FaqItem[] = [
    {
        id: "gd-online-faq-1",
        q: "Which is the best online graphic design course for beginners?",
        plusColor: "#8F56FF",
        a: "The best online graphic design courses for beginners are those that focus on practical learning, mentorship, portfolio building, and real projects instead of only teaching software tools. At HACA Design School, students learn through a structured process designed to make graphic design easy, even for complete beginners.",
    },
    {
        id: "gd-online-faq-2",
        q: "Can I get a graphic design certificate in this online course?",
        plusColor: "#FF5C00",
        a: "Yes, after completing our course, you'll receive a graphic design certificate that validates your learning and can strengthen your resume or portfolio.",
    },
    {
        id: "gd-online-faq-3",
        q: "Can I learn graphic design without experience?",
        plusColor: "#2592FF",
        a: "Absolutely, you can learn graphic design without prior experience. HACA's online graphic design course starts with fundamentals and gradually builds practical skills.",
    },
    {
        id: "gd-online-faq-4",
        q: "How long does it take to learn graphic design and become job-ready?",
        plusColor: "#29C76B",
        a: "Most beginners can learn core graphic design skills within a few months. With consistent practice, project work, and portfolio development, many students become ready for internships, freelance work, or entry-level opportunities.",
    },
    {
        id: "gd-online-faq-5",
        q: "Does HACA Design School provide placement support?",
        plusColor: "#F25555",
        a: "Yes. HACA Design School offers placement support, resume guidance, interview preparation, and career assistance to help students explore creative opportunities after completing the course.",
    },
    {
        id: "gd-online-faq-6",
        q: "Is a portfolio more important than a certificate in graphic design?",
        plusColor: "#FF5659",
        a: "Both are valuable, but in graphic design, your portfolio often matters more because it shows your practical skills, creativity, and thinking process. That's why HACA Design School focuses on portfolio building from the beginning.",
    },
];

export default function GraphicDesignClassesOnlinePage() {
    return (
        <>
            <GraphicDesignOnlineHeroSection />
            <GraphicDesignOnlineStatsSection />
            <GraphicDesignOnlineWhyChooseSection />
            <GraphicDesignOnlineCurriculumSection />
            <GraphicDesigningKeralaToolsSection />
            <GraphicDesignOnlineAchieveSection />
            <GraphicDesigningCalicutBrandsSection />
            <GraphicDesigningCalicutTestimonialsSection />
            <GraphicDesignOnlineWhoIsThisForSection />
            <GraphicDesignOnlineCareerSection />
            <GraphicDesigningCalicutMentorsSection />
            <GraphicDesignOnlineExploreProgramsSection />
            <GraphicDesignOnlineWhyDesignSchoolSection />
            <GraphicDesigningCalicutStudentsWorkSection />

            {/* Culture section */}
            <section className="w-full bg-[#FCFCFC] flex justify-center" aria-label="Learning community">
                <div className="w-full max-w-[1440px] box-border flex flex-col items-center px-5 pt-10 pb-10 gap-8 lg:px-[60px] lg:pt-[60px] lg:pb-[60px] lg:gap-[50px]">
                    <div className="w-full flex flex-col items-center text-center gap-[10px]">
                        <h2
                            className="m-0 w-full max-w-[530px]"
                            style={{
                                fontFamily: DESIGN_HEADING_FONT,
                                fontWeight: 500,
                                fontSize: "clamp(28px, 4vw, 45px)",
                                lineHeight: "110%",
                                letterSpacing: "-0.02em",
                                color: "#000000",
                            }}
                        >
                            Learning Beyond Lessons
                        </h2>
                        <p
                            className="m-0 max-w-[600px]"
                            style={{
                                fontFamily: DESIGN_HEADING_FONT,
                                fontWeight: 400,
                                color: "#000000B2",
                                lineHeight: "120%",
                                fontSize: "clamp(14px, 1.8vw, 20px)",
                                textAlign: "center",
                            }}
                        >
                            Collaborative sessions, workshops, creative challenges, and learning communities help students stay inspired.
                        </p>
                    </div>

                    <DesignSeoCultureGrid />
                </div>
            </section>

            {/* FAQ section */}
            <section className="w-full bg-[#FCFCFC] flex justify-center" aria-label="FAQ">
                <div className="w-full max-w-[1440px] flex flex-col px-5 py-10 gap-8 lg:flex-row lg:justify-between lg:px-[60px] lg:py-[60px]">
                    <div className="w-full flex justify-start">
                        <div className="w-full max-w-[500px] lg:w-[clamp(320px,34vw,500px)]">
                            <h2
                                className="m-0 text-black"
                                style={{
                                    fontFamily: DESIGN_HEADING_FONT,
                                    fontWeight: 500,
                                    fontSize: "clamp(28px, 3.5vw, 45px)",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </div>
                    <div className="w-full flex justify-start lg:justify-end">
                        <div className="w-full lg:w-[clamp(520px,55vw,794px)]">
                            <DesignSeoFaqList font={DESIGN_HEADING_FONT} items={ONLINE_FAQS} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section
                className="w-full flex justify-center bg-[#FCFCFC] px-5 lg:px-0"
                aria-label="Join the course"
            >
                <div
                    className="flex w-full max-w-[1440px] flex-col items-center justify-center text-center gap-6 pt-10 pb-14 lg:pt-[60px] lg:pb-[80px]"
                >
                    <h2
                        className="m-0 w-full max-w-[800px] text-black"
                        style={{
                            fontFamily: DESIGN_HEADING_FONT,
                            fontWeight: 600,
                            fontSize: "clamp(32px, 5vw, 72px)",
                            lineHeight: "108%",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Build a Portfolio That Speaks Before You Do
                    </h2>
                    <p
                        className="m-0 max-w-[600px] text-[15px] leading-[155%] text-black/55 lg:text-[17px]"
                        style={{ fontFamily: DESIGN_HEADING_FONT, fontWeight: 400 }}
                    >
                        Join one of the best online graphic design courses with certificates and begin creating work that speaks for itself.
                    </p>
                    <Link
                        href="/enquire"
                        className="inline-flex h-[54px] items-center justify-center rounded-full bg-[#FF5C00] px-9 text-[16px] font-medium text-white no-underline transition-opacity hover:opacity-90 lg:h-[60px] lg:px-10 lg:text-[18px]"
                        style={{ fontFamily: DESIGN_HEADING_FONT }}
                    >
                        Join Now →
                    </Link>
                </div>
            </section>

            <DesignSchoolFooter font={DESIGN_HEADING_FONT} serif={DESIGN_SERIF_FONT} />
        </>
    );
}
