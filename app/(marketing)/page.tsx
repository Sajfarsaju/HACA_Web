import { BlogsSection } from "@/components/sections/BlogsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { EnquireSection } from "@/components/sections/EnquireSection"
import { Hero } from "@/components/sections/Hero"
import { HeroBottom } from "@/components/sections/HeroBottom"
import { LifeAtHacaSection } from "@/components/sections/LifeAtHacaSection"
import { MentorsSection } from "@/components/sections/MentorsSection"
import { PlacementSection } from "@/components/sections/PlacementSection"
import { SchoolsSection } from "@/components/sections/SchoolsSection"
import { StayConnectedSection } from "@/components/sections/StayConnectedSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { WhyHacaSection } from "@/components/sections/WhyHacaSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HACA | Build Production-Grade Web Experiences",
  description: "The official website of HACA. Experience the ultimate fusion of performance, design, and developer efficiency with our production-ready tech stack.",
  openGraph: {
    title: "HACA | Build Production-Grade Web Experiences",
    description: "Enterprise-ready foundations for modern web applications.",
    type: "website",
    url: "https://haca-web.com",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlacementSection />
      <WhyHacaSection />
      <SchoolsSection />
      <MentorsSection />
      <EnquireSection />
      <LifeAtHacaSection />
      <StayConnectedSection />
      <TestimonialsSection />
      <BlogsSection />
      <FAQSection />
      <HeroBottom />
    </>
  )
}
