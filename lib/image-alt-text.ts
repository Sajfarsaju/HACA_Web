/** Press / publication logo alt text */
export function pressLogoAlt(publicationName: string): string {
    if (publicationName === "Forbes") return "Forbes logo";
    return `${publicationName} logo`;
}

/** Partner agency logo alt from asset filename (marketing SEO agency grids) */
export function partnerLogoAltFromFilename(filename: string): string {
    const base = filename.replace(/\.(svg|webp|png|jpe?g)$/i, "").trim();
    const imageNum = base.match(/^image\s*(\d+)$/i);
    if (imageNum) return `Partner brand ${imageNum[1]} logo`;
    const frameNum = base.match(/^Frame\s*(\d+)$/i);
    if (frameNum) return `Partner agency ${frameNum[1]} logo`;
    if (/^Rectangle$/i.test(base)) return "Partner brand logo";
    return `${base} logo`;
}

export const ALT = {
    figmaShowcase: "HACA student Figma design project showcase",
    studentPortfolio: "HACA Design School student portfolio work",
    calicutFigmaBlock: "Figma design project by HACA Calicut student",
    studentTestimonial: "Photo of HACA student testimonial",
    designStudentProject: "HACA Design School student project",
    designHeroStudents: "HACA Design School students learning graphic design",
    marketingImpactVideo: "HACA digital marketing program impact video",
    haca360Campus: "HACA 360 learning experience campus life",
} as const;

export function designCourseImageAlt(courseTitle: string): string {
    const plain = courseTitle.replace(/\s+/g, " ").trim();
    return `${plain} course at HACA Design School`;
}

export function techCourseImageAlt(courseTitle: string): string {
    return `${courseTitle} course at HACA Tech School`;
}
