import { DesignSchoolNavbar } from "@/components/design/DesignSchoolNavbar";

export default function DesignSchoolSeoGroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            <DesignSchoolNavbar />
            {children}
        </div>
    );
}
