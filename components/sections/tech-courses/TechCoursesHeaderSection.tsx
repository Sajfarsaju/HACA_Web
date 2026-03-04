"use client";

/**
 * Header text ("Courses We Offer" + description) in document flow.
 * Mobile only — desktop uses header inside TechCoursesHero.
 */
export function TechCoursesHeaderSection() {
    return (
        <section className="tech-courses-header-section tech-courses-header-mobile-only">
            <h1 className="tech-courses-hero-heading">Courses We Offer</h1>
            <p className="tech-courses-hero-desc">
                Learn practical tech and AI skills through hands-on courses built for real-world work.
            </p>
        </section>
    );
}
