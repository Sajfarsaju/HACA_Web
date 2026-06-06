import { UaeSuccessStoriesMarquee } from "@/components/ae/UaeSuccessStoriesMarquee";

export function SharjahSuccessStoriesSection() {
    return (
        <UaeSuccessStoriesMarquee
            headingId="sharjah-success-stories-heading"
            mobileLines={["See Where Our Learners", "Are Getting Placed"]}
            desktopLines={["See Where Our Learners", "Are Getting Placed"]}
            subtitle="Students from across the UAE have moved into roles in content marketing, SEO, performance advertising, social media, and e-commerce by building practical experience through projects and real execution."
            srLabel="Animated showcase of student placement success stories across the UAE."
        />
    );
}
