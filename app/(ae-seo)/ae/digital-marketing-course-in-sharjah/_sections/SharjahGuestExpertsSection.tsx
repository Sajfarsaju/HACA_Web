import { UaeGuestExpertsContent } from "@/components/ae/UaeGuestExpertsContent";

export function SharjahGuestExpertsSection() {
    return (
        <UaeGuestExpertsContent
            sectionId="sharjah-guest-experts"
            headingId="sharjah-guest-experts-heading"
            heading={
                <>
                    <span className="block">Conversations &amp; Insights</span>
                    <span className="block">From Industry Leaders</span>
                </>
            }
        />
    );
}
