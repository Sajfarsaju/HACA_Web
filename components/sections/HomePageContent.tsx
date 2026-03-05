"use client";

import { BlogsSection } from "@/components/sections/BlogsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { EnquireSection } from "@/components/sections/EnquireSection";
import { Hero } from "@/components/sections/Hero";
import { HeroBottom } from "@/components/sections/HeroBottom";
import { LifeAtHacaSection } from "@/components/sections/LifeAtHacaSection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { PlacementSection } from "@/components/sections/PlacementSection";
import { SchoolsSection } from "@/components/sections/SchoolsSection";
import { StayConnectedSection } from "@/components/sections/StayConnectedSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyHacaSection } from "@/components/sections/WhyHacaSection";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { PageLoadReveal } from "@/components/animations/PageLoadReveal";

export function HomePageContent() {
    return (
        <PageLoadReveal duration={0.5} y={12}>
            <Hero />
            <SectionReveal delay={0.1} duration={0.65} y={28}>
                <PlacementSection />
            </SectionReveal>
            <SectionReveal delay={0.12} duration={0.65} y={28}>
                <WhyHacaSection />
            </SectionReveal>
            <SectionReveal delay={0.14} duration={0.65} y={28}>
                <SchoolsSection />
            </SectionReveal>
            <SectionReveal delay={0.1} duration={0.65} y={28}>
                <MentorsSection />
            </SectionReveal>
            <SectionReveal delay={0.12} duration={0.65} y={28}>
                <EnquireSection />
            </SectionReveal>
            <SectionReveal delay={0.14} duration={0.65} y={28}>
                <LifeAtHacaSection />
            </SectionReveal>
            <SectionReveal delay={0.1} duration={0.65} y={28}>
                <StayConnectedSection />
            </SectionReveal>
            <SectionReveal delay={0.12} duration={0.65} y={28}>
                <TestimonialsSection />
            </SectionReveal>
            <SectionReveal delay={0.14} duration={0.65} y={28}>
                <BlogsSection />
            </SectionReveal>
            <SectionReveal delay={0.1} duration={0.65} y={28}>
                <FAQSection />
            </SectionReveal>
            <SectionReveal delay={0.12} duration={0.65} y={28}>
                <HeroBottom />
            </SectionReveal>
        </PageLoadReveal>
    );
}
