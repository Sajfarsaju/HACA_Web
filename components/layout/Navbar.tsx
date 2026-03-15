"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { MobileMenu } from "./MobileMenu"

export function Navbar() {
    const pathname = usePathname()
    const [isSchoolsOpen, setIsSchoolsOpen] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSchoolsOpen(false)
            }
        }

        if (isSchoolsOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isSchoolsOpen])

    const closeDropdown = () => setIsSchoolsOpen(false)

    return (
        <header className="sticky top-0 z-50 w-full px-[60px] pt-[10px] pb-0 bg-[rgba(0,0,0,0.01)] max-[1440px]:px-[40px] max-[1200px]:px-[30px] max-[1024px]:px-[20px] max-[1024px]:pt-[25px] max-[900px]:!px-[15px] max-md:!pt-[18px] max-md:!px-[20px] max-md:!pb-[40px]">
            {/* Inner container */}
            <div className="flex justify-between items-center pt-[30px] pb-0 max-[1024px]:pt-[20px] max-md:pt-0">
                {/* Logo */}
                <Link href="/" className="flex flex-row items-center shrink-0" onClick={closeDropdown}>
                    <Image
                        src="/photos/common/haca logo.svg"
                        alt="HACA Logo"
                        width={106}
                        height={31}
                        className="object-contain w-[106px] h-[31px] max-[1024px]:w-[90px] max-md:w-[80px] max-md:h-[23px]"
                        priority
                    />
                </Link>

                {/* Desktop Nav Buttons Container */}
                <nav className="flex flex-row items-center rounded-[100px] border border-[#232D6B] p-[8px] gap-0 shrink-0 bg-[rgba(13,17,45,0.4)] backdrop-blur-[10px] max-[900px]:p-[4px] max-md:!hidden">
                    {/* Home */}
                    <Link
                        href="/"
                        className={`flex items-center justify-center gap-[6px] p-[12px_16px] rounded-[100px] no-underline whitespace-nowrap cursor-pointer transition-all duration-200 ease max-[1200px]:p-[10px_14px] max-[1024px]:p-[8px_10px] max-[900px]:p-[4px_8px] group ${pathname === "/" ? "bg-[#131839] !border !border-[#1F275F]" : "bg-transparent border-none border-transparent"}`}
                        onClick={closeDropdown}
                    >
                        <span className={`font-rethink font-medium text-[18px] leading-[27px] max-[1200px]:text-[16px] max-[1024px]:text-[14px] max-[900px]:text-[13px] transition-colors duration-200 ${pathname === "/" ? "text-[#FFFFFF]" : "text-[#A7ADBE] group-hover:text-[#FFFFFF]"}`}>Home</span>
                    </Link>

                    {/* About Us */}
                    <Link
                        href="/about"
                        className={`flex items-center justify-center p-[12px_16px] rounded-[100px] no-underline whitespace-nowrap cursor-pointer transition-all duration-200 ease max-[1200px]:p-[10px_14px] max-[1024px]:p-[8px_10px] max-[900px]:p-[4px_8px] group ${pathname === "/about" ? "bg-[#131839] !border !border-[#1F275F]" : "bg-transparent border-none border-transparent"}`}
                        onClick={closeDropdown}
                    >
                        <span className={`font-rethink font-medium text-[18px] leading-[27px] max-[1200px]:text-[16px] max-[1024px]:text-[14px] max-[900px]:text-[13px] transition-colors duration-200 ${pathname === "/about" ? "text-[#FFFFFF]" : "text-[#A7ADBE] group-hover:text-[#FFFFFF]"}`}>About Us</span>
                    </Link>

                    {/* Schools - with dropdown arrow */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className={`flex flex-row items-center justify-center p-[12px_16px] rounded-[100px] no-underline whitespace-nowrap cursor-pointer transition-all duration-200 ease max-[1200px]:p-[10px_14px] max-[1024px]:p-[8px_10px] max-[900px]:p-[4px_8px] gap-[8px] max-[900px]:gap-[4px] group ${isSchoolsOpen ? "bg-[#131839] !border !border-[#1F275F]" : "bg-transparent border-none border-transparent"}`}
                            onClick={() => setIsSchoolsOpen(!isSchoolsOpen)}
                        >
                            <span className={`font-rethink font-medium text-[18px] leading-[27px] max-[1200px]:text-[16px] max-[1024px]:text-[14px] max-[900px]:text-[13px] transition-colors duration-200 ${isSchoolsOpen ? "text-[#FFFFFF]" : "text-[#A7ADBE] group-hover:text-[#FFFFFF]"}`}>Schools</span>
                            <Image
                                src="/photos/common/down arrow.svg"
                                alt="dropdown"
                                width={12}
                                height={12}
                                className={`transition-transform duration-200 ${isSchoolsOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* Dropdown Overlay */}
                        {isSchoolsOpen && (
                            <div className="absolute top-[calc(100%+15px)] left-1/2 -translate-x-1/2 w-[197px] h-[200px] bg-[#000319] border border-[#232D6B] rounded-[20px] p-[10px] flex flex-col z-[60]">
                                <Link href="/marketing-school" className="w-[177px] h-[45px] p-[10px_16px] flex items-center gap-[10px] rounded-[12px] no-underline transition-colors duration-200 ease group/dropdown hover:bg-[#131839]" onClick={closeDropdown}>
                                    <span className="w-[145px] h-[25px] font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.36px] text-[#A7ADBE] whitespace-nowrap transition-colors duration-200 group-hover/dropdown:text-[#FFFFFF]">Marketing School</span>
                                </Link>
                                <Link href="/design-school" className="w-[177px] h-[45px] p-[10px_16px] flex items-center gap-[10px] rounded-[12px] no-underline transition-colors duration-200 ease group/dropdown hover:bg-[#131839]" onClick={closeDropdown}>
                                    <span className="w-[145px] h-[25px] font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.36px] text-[#A7ADBE] whitespace-nowrap transition-colors duration-200 group-hover/dropdown:text-[#FFFFFF]">Design School</span>
                                </Link>
                                <Link href="/tech-school" className="w-[177px] h-[45px] p-[10px_16px] flex items-center gap-[10px] rounded-[12px] no-underline transition-colors duration-200 ease group/dropdown hover:bg-[#131839]" onClick={closeDropdown}>
                                    <span className="w-[145px] h-[25px] font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.36px] text-[#A7ADBE] whitespace-nowrap transition-colors duration-200 group-hover/dropdown:text-[#FFFFFF]">Tech School</span>
                                </Link>
                                <Link href="/finance-school" className="w-[177px] h-[45px] p-[10px_16px] flex items-center gap-[10px] rounded-[12px] no-underline transition-colors duration-200 ease group/dropdown hover:bg-[#131839]" onClick={closeDropdown}>
                                    <span className="w-[145px] h-[25px] font-manrope font-semibold text-[18px] leading-[100%] tracking-[-0.36px] text-[#A7ADBE] whitespace-nowrap transition-colors duration-200 group-hover/dropdown:text-[#FFFFFF]">Finance School</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Success Story */}
                    <Link
                        href="/success-story"
                        className={`flex items-center justify-center p-[12px_16px] rounded-[100px] no-underline whitespace-nowrap cursor-pointer transition-all duration-200 ease max-[1200px]:p-[10px_14px] max-[1024px]:p-[8px_10px] max-[900px]:p-[4px_8px] group ${pathname === "/success-story" ? "bg-[#131839] !border !border-[#1F275F]" : "bg-transparent border-none border-transparent"}`}
                        onClick={closeDropdown}
                    >
                        <span className={`font-rethink font-medium text-[18px] leading-[27px] max-[1200px]:text-[16px] max-[1024px]:text-[14px] max-[900px]:text-[13px] transition-colors duration-200 ${pathname === "/success-story" ? "text-[#FFFFFF]" : "text-[#A7ADBE] group-hover:text-[#FFFFFF]"}`}>Success Story</span>
                    </Link>

                    {/* Blogs */}
                    <Link
                        href="/blog"
                        className={`flex items-center justify-center p-[12px_16px] rounded-[100px] no-underline whitespace-nowrap cursor-pointer transition-all duration-200 ease max-[1200px]:p-[10px_14px] max-[1024px]:p-[8px_10px] max-[900px]:p-[4px_8px] group ${pathname === "/blog" ? "bg-[#131839] !border !border-[#1F275F]" : "bg-transparent border-none border-transparent"}`}
                        onClick={closeDropdown}
                    >
                        <span className={`font-rethink font-medium text-[18px] leading-[27px] max-[1200px]:text-[16px] max-[1024px]:text-[14px] max-[900px]:text-[13px] transition-colors duration-200 ${pathname === "/blog" ? "text-[#FFFFFF]" : "text-[#A7ADBE] group-hover:text-[#FFFFFF]"}`}>Blogs</span>
                    </Link>
                </nav>

                {/* Enquire Now Button - Desktop only */}
                <Link href="/contact" className="flex flex-row items-center shrink-0 transition-transform duration-200 ease hover:scale-105 max-[1024px]:scale-90 max-[1024px]:origin-right max-[900px]:!scale-[0.8] max-md:!hidden" onClick={closeDropdown}>
                    <Image
                        src="/photos/common/enqr button.svg"
                        alt="Enquire Now"
                        width={143}
                        height={55}
                        className="object-contain"
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="!hidden !bg-transparent !border-none !shadow-none cursor-pointer p-0 items-center max-md:!flex"
                    aria-label="Open menu"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Image
                        src="/photos/common/menu btn.svg"
                        alt="Menu"
                        width={24}
                        height={15}
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>
    )
}
