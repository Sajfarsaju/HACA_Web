"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname()
    const [isSchoolsOpen, setIsSchoolsOpen] = React.useState(false)

    if (!isOpen) return null

    // Helper to determine if a link is active
    const isActive = (path: string) => pathname === path

    const handleLinkClick = () => {
        setIsSchoolsOpen(false)
        onClose()
    }

    return (
        <div className="fixed top-0 left-0 w-full h-[100dvh] bg-[#000210] z-[60] flex flex-col p-[clamp(40px,8vh,55px)_clamp(16px,5vw,20px)] gap-[clamp(20px,5vh,40px)] overflow-y-auto">
            {/* ── Upper Container ── */}
            <div className="w-full flex flex-col gap-[clamp(20px,4vh,40px)]">

                {/* Header: Close Button + Enquire Button */}
                <div className="w-full h-[46px] flex justify-between items-center">
                    <button onClick={onClose} className="w-[30px] h-[30px] flex items-center justify-center bg-transparent border-none cursor-pointer p-0" aria-label="Close menu">
                        <Image
                            src="/ion_close.svg"
                            alt="Close"
                            width={30}
                            height={30}
                        />
                    </button>

                    <div className="flex items-center gap-[12px]">
                        <Link href="/enquire" onClick={handleLinkClick}>
                            <motion.button
                                className="group relative w-[121px] h-[46px] rounded-[82px] border-none bg-[linear-gradient(180deg,#4C75FF_0%,#1A4FFF_100%)] flex items-center justify-center px-[18px] cursor-pointer overflow-hidden"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", mass: 1, stiffness: 220.5, damping: 17.14 }}
                            >
                                <span className="flex w-full h-full items-center justify-center font-rethink font-medium text-[16px] leading-[24px] text-white whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-full max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                                    Enquire Now
                                </span>
                                <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-rethink font-medium text-[16px] leading-[24px] text-white whitespace-nowrap translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-md:font-normal max-md:text-[14px] max-md:leading-[22.19px]">
                                    Enquire Now
                                </span>
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Navigation Buttons Container */}
                <nav className="w-full flex flex-col gap-[20px]">
                    <Link
                        href="/"
                        onClick={handleLinkClick}
                        className={`w-fit min-w-[98px] h-[44px] flex items-center justify-center p-[10px_16px] gap-[10px] rounded-[18px] border no-underline transition-all duration-200 ease group ${isActive("/") ? "bg-[#131839] border-[#232D6B]" : "bg-transparent border-transparent"}`}
                    >
                        <span className={`font-rethink font-normal text-[clamp(20px,6vw,24px)] leading-[100%] tracking-tight ${isActive("/") ? "text-[#FFFFFF]" : "text-[#A7ADBE]"}`}>Home</span>
                    </Link>

                    <Link
                        href="/about"
                        onClick={handleLinkClick}
                        className={`w-fit min-w-[98px] h-[44px] flex items-center justify-center p-[10px_16px] gap-[10px] rounded-[18px] border no-underline transition-all duration-200 ease group ${isActive("/about") ? "bg-[#131839] border-[#232D6B]" : "bg-transparent border-transparent"}`}
                    >
                        <span className={`font-rethink font-normal text-[clamp(20px,6vw,24px)] leading-[100%] tracking-tight ${isActive("/about") ? "text-[#FFFFFF]" : "text-[#A7ADBE]"}`}>About Us</span>
                    </Link>

                    {/* Schools with Dropdown */}
                    <div className="flex flex-col gap-[10px]">
                        <button
                            onClick={() => setIsSchoolsOpen(!isSchoolsOpen)}
                            className={`w-fit min-w-[98px] h-[44px] flex items-center justify-center p-[10px_16px] gap-[10px] rounded-[18px] border no-underline transition-all duration-200 ease group ${pathname.includes("/schools") || isSchoolsOpen ? "bg-[#131839] border-[#232D6B]" : "bg-transparent border-transparent"}`}
                        >
                            <span className={`font-rethink font-normal text-[clamp(20px,6vw,24px)] leading-[100%] tracking-tight ${pathname.includes("/schools") || isSchoolsOpen ? "text-[#FFFFFF]" : "text-[#A7ADBE]"}`}>Schools</span>
                            <Image
                                src="/photos/common/down arrow.svg"
                                alt="dropdown"
                                width={12}
                                height={12}
                                className={`transition-transform duration-200 ${isSchoolsOpen ? 'rotate-180' : ''}`}
                                style={{ filter: 'brightness(0) invert(1)' }} /* Make white */
                            />
                        </button>

                        {isSchoolsOpen && (
                            <div className="flex flex-col pl-[20px] gap-[5px]">
                                <Link href="/marketing-school" className="h-[40px] flex items-center px-[16px] no-underline rounded-[12px] transition-colors duration-200 ease group/dropdown hover:bg-[#131839]" onClick={handleLinkClick}>
                                    <span className="font-rethink font-normal text-[18px] text-[#A7ADBE] group-hover/dropdown:text-[#FFFFFF]">Marketing School</span>
                                </Link>
                                <Link href="/design-school" className="h-[40px] flex items-center px-[16px] no-underline rounded-[12px] transition-colors duration-200 ease group/dropdown hover:bg-[#131839]" onClick={handleLinkClick}>
                                    <span className="font-rethink font-normal text-[18px] text-[#A7ADBE] group-hover/dropdown:text-[#FFFFFF]">Design School</span>
                                </Link>
                                <Link href="/tech-school" className="h-[40px] flex items-center px-[16px] no-underline rounded-[12px] transition-colors duration-200 ease group/dropdown hover:bg-[#131839]" onClick={handleLinkClick}>
                                    <span className="font-rethink font-normal text-[18px] text-[#A7ADBE] group-hover/dropdown:text-[#FFFFFF]">Tech School</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/success-story"
                        onClick={handleLinkClick}
                        className={`w-fit min-w-[98px] h-[44px] flex items-center justify-center p-[10px_16px] gap-[10px] rounded-[18px] border no-underline transition-all duration-200 ease group ${isActive("/success-story") ? "bg-[#131839] border-[#232D6B]" : "bg-transparent border-transparent"}`}
                    >
                        <span className={`font-rethink font-normal text-[clamp(20px,6vw,24px)] leading-[100%] tracking-tight ${isActive("/success-story") ? "text-[#FFFFFF]" : "text-[#A7ADBE]"}`}>Success Story</span>
                    </Link>

                    <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className={`w-fit min-w-[98px] h-[44px] flex items-center justify-center p-[10px_16px] gap-[10px] rounded-[18px] border no-underline transition-all duration-200 ease group ${isActive("/blog") ? "bg-[#131839] border-[#232D6B]" : "bg-transparent border-transparent"}`}
                    >
                        <span className={`font-rethink font-normal text-[clamp(20px,6vw,24px)] leading-[100%] tracking-tight ${isActive("/blog") ? "text-[#FFFFFF]" : "text-[#A7ADBE]"}`}>Blogs</span>
                    </Link>

                    <Link
                        href="/case-studies"
                        onClick={handleLinkClick}
                        className={`w-fit min-w-[98px] h-[44px] flex items-center justify-center p-[10px_16px] gap-[10px] rounded-[18px] border no-underline transition-all duration-200 ease group ${isActive("/case-studies") ? "bg-[#131839] border-[#232D6B]" : "bg-transparent border-transparent"}`}
                    >
                        <span className={`font-rethink font-normal text-[clamp(20px,6vw,24px)] leading-[100%] tracking-tight ${isActive("/case-studies") ? "text-[#FFFFFF]" : "text-[#A7ADBE]"}`}>Case Studies</span>
                    </Link>
                </nav>
            </div>


            {/* ── Bottom Container ── */}
            <div className="max-w-[335px] flex flex-col gap-[20px]">

                {/* Upper Row: Privacy & Terms */}
                <div className="w-full h-[16px] flex items-center gap-[53px]">
                    <Link href="/privacy-policy" onClick={onClose} className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline whitespace-nowrap w-[102px]">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-conditions" onClick={onClose} className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline whitespace-nowrap">
                        Terms and conditions
                    </Link>
                </div>

                {/* Lower Row: Socials */}
                <div className="w-full h-[16px] flex items-center gap-[65px]">
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline w-[90px]"
                    >
                        Instagram
                    </Link>
                    <Link
                        href="https://youtube.com"
                        target="_blank"
                        className="font-rethink font-normal text-[16px] leading-[100%] text-[#A7ADBE] no-underline"
                    >
                        Youtube
                    </Link>
                </div>

            </div>
        </div>
    )
}
