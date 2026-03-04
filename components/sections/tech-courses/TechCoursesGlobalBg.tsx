"use client";

export function TechCoursesGlobalBg() {
    return (
        <div
            className="tech-global-bg-ellipse"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                minHeight: "100%",
                opacity: 0.87,
                backgroundImage: `linear-gradient(322.3deg, rgba(132,0,255,0.7) 7.42%, rgba(132,0,255,0.7) 82.2%), url("/photos/Tech/Ellipse%20156%20(1).svg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backdropFilter: "blur(316.6px)",
                zIndex: -2,
                pointerEvents: "none",
            }}
        />
    );
}
