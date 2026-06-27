import { UaeMentorsContent } from "@/components/ae/UaeMentorsContent";

export function SharjahMentorsSection() {
    return (
        <UaeMentorsContent
            sectionId="sharjah-mentors"
            headingId="sharjah-mentors-heading"
            heading={
                <>
                    <span className="block">Learn From Professionals Actively</span>
                    <span className="block">Working In The Industry</span>
                </>
            }
            introCopy="Gain insights from mentor practitioners who have worked with leading brands and bring practical experience into every learning session."
        />
    );
}
