import { DesignSchoolSeoLanding } from "@/components/design/DesignSchoolSeoLanding";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";

export const metadata = buildDesignSchoolSeoMetadata("ui-ux-design-course-in-calicut");

export default function UiUxDesignCourseInCalicutPage() {
    return <DesignSchoolSeoLanding slug="ui-ux-design-course-in-calicut" />;
}
