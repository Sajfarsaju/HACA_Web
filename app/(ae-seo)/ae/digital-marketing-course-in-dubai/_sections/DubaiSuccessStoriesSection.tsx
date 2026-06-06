import { UaeSuccessStoriesMarquee } from "@/components/ae/UaeSuccessStoriesMarquee";

export function DubaiSuccessStoriesSection() {
    return (
        <UaeSuccessStoriesMarquee
            headingId="dubai-success-stories-heading"
            mobileLines={["From Learning Digital Marketing", "Skills Into Careers", "in Dubai"]}
            desktopLines={["From Learning Digital Marketing", "Skills to Building Careers"]}
            subtitle="Our learners across Dubai and UAE have moved into opportunities in SEO, content marketing, paid advertising, ecommerce, social media management and performance marketing through practical learning and project exposure."
            srLabel="Animated showcase of student placement success stories in Dubai."
        />
    );
}
