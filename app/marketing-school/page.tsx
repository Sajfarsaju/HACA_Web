import { MarketingHeroSection } from "@/components/marketing/MarketingHeroSection";
import { MarketingImpactSection } from "@/components/marketing/MarketingImpactSection";
import { MarketingCoursesSection } from "@/components/marketing/MarketingCoursesSection";
import { MarketingMentorsSection } from "@/components/marketing/MarketingMentorsSection";
import { MarketingCoursesAndMentorsWrapper } from "@/components/marketing/MarketingCoursesAndMentorsWrapper";
import { MarketingCultureSection } from "@/components/marketing/MarketingCultureSection";
import { MarketingYoutubeHubSection } from "@/components/marketing/MarketingYoutubeHubSection";
import { MarketingCultureAndYoutubeWrapper } from "@/components/marketing/MarketingCultureAndYoutubeWrapper";
import { MarketingPlacementsSection } from "@/components/marketing/MarketingPlacementsSection";
import { MarketingTestimonialsSection } from "@/components/marketing/MarketingTestimonialsSection";
import { MarketingFaqSection } from "@/components/marketing/MarketingFaqSection";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingNavbar } from "@/components/marketing/MarketingNavbar";
import { MarketingTestimonialsAndFaqWrapper } from "@/components/marketing/MarketingTestimonialsAndFaqWrapper";
import { MarketingPageColorLayer } from "@/components/marketing/MarketingPageColorLayer";

export const metadata = {
  title: "Digital Marketing School by HACA | Learn in a Career-Driven Ecosystem",
  description:
    "Build your digital marketing career with HACA's expert-led digital marketing school, part of a thriving ecosystem. Get hands-on training and expert mentorship.",
  openGraph: {
    title: "Digital Marketing School by HACA | Learn in a Career-Driven Ecosystem",
    description:
      "Build your digital marketing career with HACA's expert-led digital marketing school, part of a thriving ecosystem. Get hands-on training and expert mentorship.",
    url: "https://harisandcoacademy.com/marketing-school/",
    siteName: "Haris & Co Academy",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing School by HACA | Learn in a Career-Driven Ecosystem",
    description:
      "Build your digital marketing career with HACA's expert-led digital marketing school, part of a thriving ecosystem. Get hands-on training and expert mentorship.",
  },
};

export default function MarketingSchoolPage() {
    return (
        <MarketingPageColorLayer>
        <main className="w-full min-h-screen overflow-x-hidden">
            <MarketingNavbar />
            <MarketingHeroSection />
            <MarketingImpactSection />
            <MarketingCoursesAndMentorsWrapper>
                <MarketingCoursesSection />
                <MarketingMentorsSection />
            </MarketingCoursesAndMentorsWrapper>
            <MarketingPlacementsSection />
            <MarketingCultureAndYoutubeWrapper>
                <MarketingCultureSection />
                <MarketingYoutubeHubSection />
            </MarketingCultureAndYoutubeWrapper>
            <MarketingTestimonialsAndFaqWrapper>
                <MarketingTestimonialsSection />
                <MarketingFaqSection />
            </MarketingTestimonialsAndFaqWrapper>
            <MarketingFooter />
        </main>
        </MarketingPageColorLayer>
    );
}
