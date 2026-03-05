"use client";

import React from "react";
import Image from "next/image";
import type { Course } from "./types";

interface TechCourseCardProps {
    course: Course;
    showLabel?: boolean;
}

export function TechCourseCard({ course, showLabel = false }: TechCourseCardProps) {
    return (
        <div className="course-card">
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
                    <span className="course-duration-value">{course.duration}</span>
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
                <div className="course-btn-wrap">
                    <Image
                        src="/photos/Tech/Link - Regular (1).svg"
                        alt="Enquire Now"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
}
