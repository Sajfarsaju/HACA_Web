import { DesignSchoolSeoLanding } from "@/components/design/DesignSchoolSeoLanding";
import { buildDesignSchoolSeoMetadata } from "@/lib/design-school-seo";

export const metadata = buildDesignSchoolSeoMetadata("graphic-design-classes-online");

export default function GraphicDesignClassesOnlinePage() {
    return <DesignSchoolSeoLanding slug="graphic-design-classes-online" />;
}
