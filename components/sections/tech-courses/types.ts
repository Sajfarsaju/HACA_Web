export interface Course {
    /** URL hash anchor — must match TechPathSection "Know More" links */
    slug: string;
    title: string;
    /** First line of heading (for 2-line display) */
    titleLine1: string;
    /** Second line of heading (for 2-line display) */
    titleLine2: string;
    duration: string;
    mode: string;
    description: string;
    label: string;
    labelImage: string;
    learnItems: string[];
    careerRoles: string[];
}
