import { Metadata } from "next";
import { schoolData } from "@/lib/schools-data";
import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";

const school = schoolData.design;

export const metadata: Metadata = {
    title: `${school.title} | HACA`,
    description: school.description,
};

export default function DesignSchoolPage() {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolNavbar />

            {/* Hero Section */}
            <main className="max-w-[1440px] mx-auto w-full lg:h-[810px] h-auto min-h-[400px]">{/* ... */}</main>
        </div>
    );
}
