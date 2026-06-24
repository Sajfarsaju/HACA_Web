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
            {/* Decorative Top-Right Purple Gradient for all SEO Pages */}
            <div
                className="pointer-events-none absolute -right-[368px] -top-[368px] z-0 h-[737px] w-[737px] md:-right-[740px] md:-top-[740px] md:h-[1479px] md:w-[1479px]"
                style={{
                    background: "radial-gradient(43.25% 44.67% at 50.05% 50.05%, rgba(143, 55, 255, 0.35) 0%, #000010 100%)",
                }}
            />
            <TechWhatsAppFloatingButton />
            <TechSchoolNavbar />
            <main className="relative z-10 flex min-h-0 w-full flex-col">{children}</main>
            <div className="relative z-10">
                <TechFooter variant="seo" />
            </div>
        </div>
    );
}
