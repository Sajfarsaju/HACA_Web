import { UaeGuestExpertsContent } from "@/components/ae/UaeGuestExpertsContent";

export function AeGuestExpertsSection() {
    return (
        <UaeGuestExpertsContent
            sectionId="ae-guest-experts"
            headingId="ae-guest-experts-heading"
            heading={
                <>
                    <span className="block">Exclusive Guest Lectures</span>
                    <span className="block">From Industry Experts</span>
                </>
            }
        />
    );
}
