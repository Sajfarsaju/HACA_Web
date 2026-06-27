import { UaeGuestExpertsContent } from "@/components/ae/UaeGuestExpertsContent";

export function DubaiGuestExpertsSection() {
    return (
        <UaeGuestExpertsContent
            sectionId="dubai-guest-experts"
            headingId="dubai-guest-experts-heading"
            heading={
                <>
                    <span className="block">Industry Insights From</span>
                    <span className="block">Guest Experts</span>
                </>
            }
        />
    );
}
