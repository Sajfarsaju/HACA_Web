"use client";

import { BlogsSection } from "@/components/sections/BlogsSection";
import type { BlogPost } from "@/lib/blog-data";
import { FAQSection } from "@/components/sections/FAQSection";
import { EnquireSection } from "@/components/sections/EnquireSection";
import { Hero } from "@/components/sections/Hero";
import { HeroBottom } from "@/components/sections/HeroBottom";
import { LifeAtHacaSection } from "@/components/sections/LifeAtHacaSection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { PlacementSection, type PlacementGroup } from "@/components/sections/PlacementSection";
import { SchoolsSection } from "@/components/sections/SchoolsSection";
import { StayConnectedSection } from "@/components/sections/StayConnectedSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyHacaSection } from "@/components/sections/WhyHacaSection";
import { SectionReveal } from "@/components/animations/SectionReveal";

type HomePageContentProps = {
    homeBlogs: BlogPost[];
    placementGroups?: PlacementGroup[];
};

export function HomePageContent({ homeBlogs, placementGroups }: HomePageContentProps) {
    return (
        <>
            {/* Above-the-fold: own staggered animations inside Hero */}
            <Hero />
            <SectionReveal sectionIndex={0} delay={0.06} duration={0.55} y={28}>
                <PlacementSection initialGroups={placementGroups} />
            </SectionReveal>
            <SectionReveal sectionIndex={1} delay={0.06} duration={0.55} y={28}>
                <WhyHacaSection />
            </SectionReveal>
            <SectionReveal sectionIndex={2} delay={0.06} duration={0.55} y={28}>
                <SchoolsSection />
            </SectionReveal>
            <SectionReveal sectionIndex={3} delay={0.06} duration={0.55} y={28}>
                <MentorsSection />
            </SectionReveal>
            <SectionReveal sectionIndex={4} delay={0.06} duration={0.55} y={28}>
                <EnquireSection />
            </SectionReveal>
            <SectionReveal sectionIndex={5} delay={0.06} duration={0.55} y={28}>
                <LifeAtHacaSection />
            </SectionReveal>
            <SectionReveal sectionIndex={6} delay={0.06} duration={0.55} y={28}>
                <StayConnectedSection />
            </SectionReveal>
            <SectionReveal sectionIndex={7} delay={0.06} duration={0.55} y={28}>
                <TestimonialsSection />
            </SectionReveal>
            <SectionReveal sectionIndex={8} delay={0.06} duration={0.55} y={28}>
                <BlogsSection blogs={homeBlogs} />
            </SectionReveal>
            <SectionReveal sectionIndex={9} delay={0.06} duration={0.55} y={28}>
                <FAQSection />
            </SectionReveal>
            <SectionReveal sectionIndex={10} delay={0.06} duration={0.55} y={28}>
                <HeroBottom />
            </SectionReveal>
        </>
    );
}
