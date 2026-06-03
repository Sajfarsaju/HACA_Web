export const TECH_COURSES_PAGE = "/tech-school/tech-courses";

export function techCourseHref(slug: string) {
    return `${TECH_COURSES_PAGE}#course-${slug}`;
}

export function techCourseElementId(slug: string) {
    return `course-${slug}`;
}
