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
                    className="course-btn-wrap block no-underline"
                    aria-label="Enquire now"
                >
                    <Image
                        src="/photos/Tech/Link - Regular (1).svg"
                        alt="Enquire Now"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </Link>
            </div>
        </div>
    );
}
