import { UaeSuccessStoriesMarquee } from "@/components/ae/UaeSuccessStoriesMarquee";

export function AeSuccessStoriesSection() {
    return (
        <UaeSuccessStoriesMarquee
            headingId="ae-success-stories-heading"
            mobileLines={["How HACA Students Turned", "Skills Into Careers", "Across UAE"]}
            desktopLines={["How HACA Students Turned", "Skills Into Careers Across UAE"]}
            subtitle="Meet HACA learners who secured opportunities across different parts of the UAE through practical learning, placement support, resume guidance, and mock interview training."
            srLabel="Animated showcase of student placement success stories across the UAE."
        />
    );
}
