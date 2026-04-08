import { Metadata } from "next";
import { schoolData } from "@/lib/schools-data";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FinanceNavbar } from "@/components/layout/FinanceNavbar";

const school = schoolData.finance;

export const metadata: Metadata = {
    title: `${school.title} | HACA`,
    description: school.description,
};

export default function FinanceSchoolPage() {
    return (
        <>
            <FinanceNavbar />
            <main 
                className="relative min-h-screen w-full bg-[#080D0E] overflow-x-hidden flex flex-col items-center pt-[150px] pb-20"
            >
            {/* Hero Section */}
            <section 
                className="relative w-full max-w-[1440px] flex flex-col items-center text-center px-6 pt-20"
            >
                {/* Pill Label */}
                <div className="flex items-center gap-3 bg-[#161A1B] border border-[#232D6B] rounded-full px-4 py-2 mb-10">
                    <span className="text-[#A7ADBE] text-[16px] font-medium">Learn the skills needed for finance careers.</span>
                    <div className="w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                        <ArrowDown size={14} className="text-black" />
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="max-w-[1000px] text-[56px] md:text-[84px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                    Building Finance Professionals <br className="hidden md:block" /> Through Practical Learning
                </h1>
                
                {/* Subtext */}
                <p className="max-w-[850px] text-[18px] md:text-[22px] text-[#A7ADBE] leading-relaxed mb-12">
                    At Finance School by HACA, we believe that financial knowledge should <br className="hidden md:block" /> go beyond textbooks and theoretical concepts.
                </p>

                {/* CTA Button */}
                <button className="flex items-center gap-2 px-10 py-5 bg-[#A3E635] text-black font-bold rounded-xl text-[20px] hover:scale-105 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                    Enquire Now
                    <ArrowRight size={22} />
                </button>

                {/* Premium Background Blurs */}
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#4C75FF] rounded-full blur-[150px] opacity-10 pointer-events-none" />
                <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#A3E635] rounded-full blur-[150px] opacity-5 pointer-events-none" />
            </section>

            {/* Curriculum Grid (Optional but kept for value) */}
            <section className="mt-32 w-full max-w-[1200px] px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {school.curriculum.map((item, index) => (
                        <div 
                            key={item}
                            className="bg-[#161A1B] p-8 rounded-[24px] border border-[#232D6B] hover:border-[#A3E635] transition-all group"
                        >
                            <div className="w-12 h-12 bg-[#080D0E] rounded-full flex items-center justify-center mb-6 font-bold text-[#A3E635]">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item}</h3>
                            <p className="text-sm text-[#A7ADBE]">Master the core concepts of {item.toLowerCase()} in our intensive program.</p>
                        </div>
                    ))}
                </div>
            </section>

            </main>
        </>
    );
}
