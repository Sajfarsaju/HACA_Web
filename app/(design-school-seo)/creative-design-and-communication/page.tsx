import { DesignSchoolSeoLanding } from "@/components/design/DesignSchoolSeoLanding";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";

export const metadata = buildDesignSchoolSeoMetadata("creative-design-and-communication");

export default function CreativeDesignAndCommunicationPage() {
    return <DesignSchoolSeoLanding slug="creative-design-and-communication" />;
}
