"use client";

import dynamic from "next/dynamic";

// ssr: false is only valid inside Client Components in the App Router.
// page.tsx is a Server Component, so these three client-only dynamic imports live here.

export const TechDotsBackground = dynamic(
    () => import("@/components/tech/TechDotsBackground").then(m => ({ default: m.TechDotsBackground })),
    { ssr: false }
);

export const TechWhatsAppFloatingButton = dynamic(
    () => import("@/components/layout/TechWhatsAppFloatingButton").then(m => ({ default: m.TechWhatsAppFloatingButton })),
    { ssr: false }
);

export const TechYoutube = dynamic(
    () => import("@/components/layout/TechYoutube").then(m => ({ default: m.TechYoutube })),
    { ssr: false, loading: () => <div style={{ minHeight: 420 }} /> }
);
