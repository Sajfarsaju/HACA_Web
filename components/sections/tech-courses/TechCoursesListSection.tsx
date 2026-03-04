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
            <div
                className="tech-desktop-only courses-section-group29"
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: `translateX(-50%) scale(${desktopScale})`,
                    transformOrigin: "top center",
                    width: "1440px",
                    height: "3179.26px",
                    zIndex: -2,
                    pointerEvents: "none",
                }}
            >
                <Image src="/photos/Tech/Group 29.svg" alt="" fill style={{ objectFit: "contain" }} />
            </div>

            <div className="courses-section-bg">
                <Image
                    src="/photos/Tech/Image (3).svg"
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>

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
                <div
                    className="tech-desktop-only courses-section-gradient2"
                    style={{
                        position: "absolute",
                        top: 335,
                        left: 75.16,
                        width: 1292.9193,
                        height: 3179.2605,
                        opacity: 1,
                        transform: "rotate(0deg)",
                        zIndex: -1,
                        pointerEvents: "none",
                    }}
                >
                    <Image
                        src="/photos/Tech/Gradient2.svg"
                        alt=""
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                {COURSES_DATA.map((course, idx) => (
                    <TechCourseCard key={idx} course={course} showLabel={idx < 3} />
                ))}
            </div>
        </div>
    );
}
