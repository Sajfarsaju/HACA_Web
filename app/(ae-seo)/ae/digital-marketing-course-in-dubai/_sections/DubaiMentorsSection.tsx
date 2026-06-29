import { UaeMentorsContent } from "@/components/ae/UaeMentorsContent";

export function DubaiMentorsSection() {
    return (
        <UaeMentorsContent
            sectionId="dubai-mentors"
            headingId="dubai-mentors-heading"
            heading={
                <>
                    <span className="block">Learn Directly From</span>
                    <span className="block">Mentor Practitioners</span>
                </>
            }
            introCopy="Learn from professionals who have worked with Kairali TMT, Walkaroo, TCS, Care n Cure Pharmacy, Volkswagen and other brands."
        />
    );
}
