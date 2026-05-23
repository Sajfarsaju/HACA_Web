"use client";

import { usePathname } from "next/navigation";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";

const VIDEO_EDITING_CALICUT_PATH = "/video-editing-course-in-calicut";

export function DesignSchoolSeoShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() ?? "";
    const isVideoCalicut = pathname === VIDEO_EDITING_CALICUT_PATH;

    return (
        <div className="min-h-screen w-full bg-[#FCFCFC]">
            <DesignSchoolNavbar variant={isVideoCalicut ? "video-calicut" : "default"} />
            {children}
        </div>
    );
}
