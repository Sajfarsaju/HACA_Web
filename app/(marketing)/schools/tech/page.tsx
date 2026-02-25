import Image from "next/image";
import TechHero from "@/components/sections/tech/TechHeroSection";
import { TechIntroSection } from "@/components/sections/tech/TechIntroSection";
import { TechShowcaseSection } from "@/components/sections/tech/TechShowcaseSection";
import { TechProjectsSection } from "@/components/sections/tech/TechProjectsSection";
import { TechPlacementsSection } from "@/components/sections/tech/TechPlacementsSection";
import { TechPathSection } from "@/components/sections/tech/TechPathSection";

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
            </div>

        </main>
    );
}
