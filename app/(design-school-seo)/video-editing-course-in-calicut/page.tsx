import { DesignSchoolSeoLanding } from "@/components/design/DesignSchoolSeoLanding";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";

export const metadata = buildDesignSchoolSeoMetadata("video-editing-course-in-calicut");

export default function VideoEditingCourseInCalicutPage() {
    return <DesignSchoolSeoLanding slug="video-editing-course-in-calicut" />;
}
