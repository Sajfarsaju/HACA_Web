import { TechFooter } from "@/components/layout/TechFooter";
import { TechWhatsAppFloatingButton } from "@/components/layout/TechWhatsAppFloatingButton";
import { TechSchoolNavbar } from "@/components/tech/TechSchoolNavbar";
import { TECH_SEO_PAGE_BG } from "@/lib/tech-school-seo";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
});

export default function TechSchoolSeoGroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`${outfit.className} relative w-full min-h-screen overflow-x-hidden bg-[#000010] text-white`}
            style={{ backgroundColor: TECH_SEO_PAGE_BG }}
        >
            <TechWhatsAppFloatingButton />
            <TechSchoolNavbar />
            <main className="relative z-[2] flex min-h-0 w-full flex-col">{children}</main>
            <div className="relative z-10">
                <TechFooter variant="seo" />
            </div>
        </div>
    );
}
