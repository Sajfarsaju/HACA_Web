import { DesignSchoolSeoLanding } from "@/components/design/DesignSchoolSeoLanding";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";

export const metadata = buildDesignSchoolSeoMetadata("introduction-to-graphic-design");

export default function IntroductionToGraphicDesignPage() {
    return <DesignSchoolSeoLanding slug="introduction-to-graphic-design" />;
}
