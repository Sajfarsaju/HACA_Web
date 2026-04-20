import type { Metadata } from "next";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";

export const metadata: Metadata = {
    title: "Design School Projects | HACA",
    description: "Design School projects.",
};

export default function DesignSchoolProjectsPage() {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolNavbar />
            <main className="w-full px-6 py-10">
                <h1 className="text-3xl font-semibold text-black">Projects</h1>
            </main>
        </div>
    );
}

