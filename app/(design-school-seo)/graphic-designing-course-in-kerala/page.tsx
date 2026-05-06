import { DesignSchoolSeoLanding } from "@/components/design/DesignSchoolSeoLanding";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";

export const metadata = buildDesignSchoolSeoMetadata("graphic-designing-course-in-kerala");

export default function GraphicDesigningCourseInKeralaPage() {
    return <DesignSchoolSeoLanding slug="graphic-designing-course-in-kerala" />;
}
