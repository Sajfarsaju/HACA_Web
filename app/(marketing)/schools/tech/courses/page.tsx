// "use client";

// import { useEffect, useState } from "react";
// import {
//     TechCoursesGlobalBg,
//     TechCoursesHero,
//     TechCoursesMobileHero,
//     TechCoursesHeaderSection,
//     TechCoursesListSection,
//     TechCoursesStyles,
// } from "@/components/sections/tech-courses";
// import { DESIGN_W, MOBILE_DESIGN_W } from "@/components/sections/tech-courses/constants";

// export default function CoursesPage() {
//     const [mounted, setMounted] = useState(false);
//     const [scales, setScales] = useState({ desktop: 1, mobile: 1 });

//     useEffect(() => {
//         setMounted(true);
//         const update = () => {
//             const containerWidth = Math.min(window.innerWidth, DESIGN_W);
//             setScales({
//                 desktop: containerWidth / DESIGN_W,
//                 mobile: window.innerWidth / MOBILE_DESIGN_W,
//             });
//         };
//         update();
//         window.addEventListener("resize", update);
//         return () => window.removeEventListener("resize", update);
//     }, []);

//     if (!mounted) {
//         return <main style={{ background: "#0B0B0B", minHeight: "100vh" }} />;
//     }

//     return (
//         <main
//             className="tech-page-root"
//             style={{
//                 background: "#0B0B0B",
//                 minHeight: "100vh",
//                 position: "relative",
//                 overflowX: "hidden",
//             }}
//         >
//             <TechCoursesStyles />
//             <TechCoursesGlobalBg />
//             <TechCoursesHero scale={scales.desktop} />
//             <TechCoursesMobileHero scale={scales.mobile} />
//             <TechCoursesHeaderSection />
//             <TechCoursesListSection desktopScale={scales.desktop} />
//         </main>
//     );
// }

