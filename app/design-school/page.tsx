import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { schoolData } from "@/lib/schools-data";

const school = schoolData.design;

export const metadata: Metadata = {
    title: `${school.title} | HACA`,
    description: school.description,
};

export default function DesignSchoolPage() {
    return (
        <div className="w-full bg-[#FCFCFC] min-h-screen">
            {/* Navbar */}
            <nav className="max-w-[1440px] mx-auto w-full flex justify-between items-center lg:h-[120.56px] pt-[20px] pb-[20px] px-6 lg:px-[60px] lg:pb-[40px]">
                
                {/* Left Logo */}
                <div className="w-[200px] h-[40.91px] relative shrink-0">
                    <Image 
                        src="/photos/schools/design/DESIGN-SCHOOL-Logo.svg"
                        alt="Design School Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Navlinks */}
                <div className="hidden lg:flex items-center gap-[30px] w-[490px] h-[54px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] rounded-[10px]">
                    {['Home', 'Success Story', 'Projects', 'Courses', 'Blog'].map(link => (
                        <Link 
                            key={link} 
                            href="#" 
                            className="font-medium text-[#000000] hover:text-[#FF5C00] transition-colors whitespace-nowrap text-[16px]"
                        >
                            {link}
                        </Link>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden lg:flex flex-row items-center cursor-pointer group">
                    <button 
                        className="flex items-center justify-center w-[164.67px] h-[60.56px] border-[1.11px] border-[#FF5C00] rounded-[50px] px-[33.33px] py-[17.78px] bg-transparent transition-colors group-hover:bg-[#FF5C00]/5"
                        style={{ fontFamily: '"VC Nudge Trial Normal", sans-serif' }}
                    >
                        <span className="font-medium text-[17.78px] text-[#000000] leading-none whitespace-nowrap">
                            Contact Us
                        </span>
                    </button>
                    <div className="w-[60px] h-[60px] relative shrink-0">
                        <Image 
                            src="/photos/schools/design/NavRightArrow.svg"
                            alt="Arrow"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <button className="lg:hidden w-[32px] h-[32px] relative shrink-0">
                    <Image 
                        src="/photos/schools/design/HamburgerMenu.svg"
                        alt="Menu"
                        fill
                        className="object-contain"
                    />
                </button>
            </nav>

            {/* Hero Section */}
            <main className="max-w-[1440px] mx-auto w-full lg:h-[810px] h-auto min-h-[400px]">{/* ... */}</main>
        </div>
    );
}
