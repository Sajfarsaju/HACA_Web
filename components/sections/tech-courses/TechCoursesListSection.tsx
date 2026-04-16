"use client";

import Image from "next/image";
import { COURSES_DATA } from "./coursesData";
import { TechCourseCard } from "./TechCourseCard";

interface TechCoursesListSectionProps {
    desktopScale: number;
}

export function TechCoursesListSection({ desktopScale }: TechCoursesListSectionProps) {
    return (
        <div className="courses-section">
            <div className="courses-mobile-bg">
                <Image
                    src="/photos/Tech/Group 23.svg"
                    alt="background"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center bottom" }}
                    priority
                />
            </div>

            <div className="courses-list">
                {COURSES_DATA.map((course, idx) => (
                    <TechCourseCard key={idx} course={course} showLabel={idx < 3} />
                ))}
            </div>
        </div>
    );
}
