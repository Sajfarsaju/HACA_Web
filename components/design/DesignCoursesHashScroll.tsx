"use client";

import { useEffect } from "react";

const SCROLL_MARGIN_PX = 120;

function scrollToCourseHash() {
    const raw = window.location.hash;
    if (!raw || !raw.startsWith("#course-")) return;

    const id = raw.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_MARGIN_PX;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export function DesignCoursesHashScroll() {
    useEffect(() => {
        scrollToCourseHash();
        const t1 = window.setTimeout(scrollToCourseHash, 150);
        const t2 = window.setTimeout(scrollToCourseHash, 500);
        window.addEventListener("hashchange", scrollToCourseHash);
        return () => {
            window.clearTimeout(t1);
            window.clearTimeout(t2);
            window.removeEventListener("hashchange", scrollToCourseHash);
        };
    }, []);

    return null;
}
