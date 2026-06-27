import { UaeMentorsContent } from "@/components/ae/UaeMentorsContent";

export function AeMentorsSection() {
    return (
        <UaeMentorsContent
            sectionId="ae-mentors"
            headingId="ae-mentors-heading"
            heading={
                <>
                    <span className="block">Renowned Industry</span>
                    <span className="block">Leaders as Mentors</span>
                </>
            }
            introCopy="Learn with our industry experts who have experience working with premium brands like Kairali TMT, Walkaroo, TCS, Care n Cure Pharmacy, Volkswagen, etc."
        />
    );
}
