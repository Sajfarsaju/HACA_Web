"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ENQUIRE_URL } from "@/lib/enquire";
import { techCourseElementId } from "@/lib/tech-courses";
import type { Course } from "./types";

interface TechCourseCardProps {
    course: Course;
    showLabel?: boolean;
}

export function TechCourseCard({ course, showLabel = false }: TechCourseCardProps) {
    return (
        <div id={techCourseElementId(course.slug)} className="course-card course-card--anchored">
            <div className="course-top-row">
                <div className="course-title-col">
                    {showLabel && (
                        <div className="course-label-wrap">
                            <Image
                                src={course.labelImage}
                                alt={course.label}
                                fill
                                className="course-label-img"
                            />
                        </div>
                    )}
                    <h2 className="course-title">
                        {course.titleLine1}
                        <br />
                        {course.titleLine2}
                    </h2>
                </div>
                <div className="course-duration-col">
                    <span className="course-duration-label">Duration</span>
                    <span className="course-duration-value" style={{ whiteSpace: "pre-line" }}>{course.duration}</span>
                    <span className="course-mode">Mode: {course.mode}</span>
                </div>
            </div>

            <p className="course-desc">{course.description}</p>

            <div className="course-bottom-row">
                <div className="course-lists-wrap">
                    <div className="course-list-col">
                        <span className="course-list-heading">What You&apos;ll Learn:</span>
                        <div className="course-list-items">
                            {course.learnItems.map((item, i) => (
                                <React.Fragment key={i}>
                                    • {item}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="course-list-col">
                        <span className="course-list-heading">Career Roles:</span>
                        <div className="course-list-items">
                            {course.careerRoles.map((role, i) => (
                                <React.Fragment key={i}>
                                    • {role}
                                    <br />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <Link
                    href={ENQUIRE_URL}
                    className="course-btn-wrap group relative flex items-center justify-center no-underline overflow-hidden bg-white"
                    aria-label="Enquire now"
                >
                    <span className="absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full">
                        Enquire Now
                    </span>
                    <span className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center font-outfit font-semibold text-[14px] leading-none text-[#1a1a1a] whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                        Enquire Now
                    </span>
                </Link>
            </div>
        </div>
    );
}
