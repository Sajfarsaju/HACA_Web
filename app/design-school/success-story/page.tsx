import type { Metadata } from "next";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";

export const metadata: Metadata = {
    title: "Design School Success Story | HACA",
    description: "Design School success stories.",
};

export default function DesignSchoolSuccessStoryPage() {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolNavbar />
            <main className="w-full px-6 py-10">
                <h1 className="text-3xl font-semibold text-black">Success Story</h1>
            </main>
        </div>
    );
}

