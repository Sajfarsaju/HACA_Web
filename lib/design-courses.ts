export const DESIGN_COURSES_PAGE = "/design-school/courses";

export function designCourseHref(slug: string) {
    return `${DESIGN_COURSES_PAGE}#course-${slug}`;
}

export function designCourseElementId(slug: string) {
    return `course-${slug}`;
}

/** Slugs aligned with course cards on `/design-school/courses` */
export const DESIGN_COURSE_SLUGS = {
    creativeDesign: "creative-design",
    aiGraphicDesign: "ai-graphic-design",
    brandingIdentity: "branding-identity-design",
    uiUxAi: "ui-ux-design-ai",
    aiVideoEditing: "ai-video-editing",
} as const;
