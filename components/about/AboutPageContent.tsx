"use client"

import { PageLoadReveal } from "@/components/animations/PageLoadReveal"
import { SectionReveal } from "@/components/animations/SectionReveal"
import { AboutHeroSection } from "@/components/about/AboutHeroSection"
import { AboutStatsSection } from "@/components/about/AboutStatsSection"
import { AboutWhyHacaSection } from "@/components/about/AboutWhyHacaSection"
import { AboutCampusesSection } from "@/components/about/AboutCampusesSection"
import { AboutRecognitionSection } from "@/components/about/AboutRecognitionSection"
import { AboutValuesSection } from "@/components/about/AboutValuesSection"
import { AboutFacesSection } from "@/components/about/AboutFacesSection"
import { AboutFounderInsightsSection } from "@/components/about/AboutFounderInsightsSection"
import { AboutBeliefSection } from "@/components/about/AboutBeliefSection"

export function AboutPageContent() {
    return (
        <PageLoadReveal duration={0.5} y={12}>
            <main className="w-full bg-transparent text-white">
                <AboutHeroSection />

                <SectionReveal delay={0.1} duration={0.65} y={28}>
                    <AboutStatsSection />
                </SectionReveal>
                <SectionReveal delay={0.12} duration={0.65} y={28}>
                    <AboutWhyHacaSection />
                </SectionReveal>
                <SectionReveal delay={0.14} duration={0.65} y={28}>
                    <AboutCampusesSection />
                </SectionReveal>
                <SectionReveal delay={0.1} duration={0.65} y={28}>
                    <AboutRecognitionSection />
                </SectionReveal>
                <SectionReveal delay={0.12} duration={0.65} y={28}>
                    <AboutValuesSection />
                </SectionReveal>
                <SectionReveal delay={0.14} duration={0.65} y={28}>
                    <AboutFacesSection />
                </SectionReveal>
                <SectionReveal delay={0.1} duration={0.65} y={28}>
                    <AboutFounderInsightsSection />
                </SectionReveal>
                <SectionReveal delay={0.12} duration={0.65} y={28}>
                    <AboutBeliefSection />
                </SectionReveal>
            </main>
        </PageLoadReveal>
    )
}
