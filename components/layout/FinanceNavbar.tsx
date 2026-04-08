"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export function FinanceNavbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/finance-school" },
        { name: "Courses", href: "/finance-school/courses" },
        { name: "Blog", href: "/finance-school/blog" },
    ];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1440px] flex justify-center">
            <nav 
                className="flex items-center justify-between w-full md:w-[1100px] h-[54px] md:h-[70px] bg-[#161A1B] rounded-[12px] md:rounded-[14px] px-4 md:px-6 py-2 md:py-3 transition-all duration-300"
                style={{
                    boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.4)",
                    opacity: 1,
                }}
            >
                {/* Logo Section */}
                <Link href="/finance-school" className="relative flex items-center hover:opacity-80 transition-opacity">
                    <div className="relative w-[120px] md:w-[160px] h-[21px] md:h-[27.865px]">
                        <Image 
                            src="/photos/schools/finance/haca_finance_school.svg"
                            alt="HACA Finance School"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className="relative flex items-center gap-2 group"
                            >
                                <span className={`w-1.5 h-1.5 bg-[#A3E635] rounded-full transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                                <span className={`text-[18px] font-medium transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#6B7280] group-hover:text-[#A7ADBE]'}`}>
                                    {link.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Contact Us Button */}
                <Link href="/contact" className="hidden md:block">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-6 h-[46px] bg-white text-black font-semibold rounded-[12px] text-[16px] transition-all"
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </motion.button>
                </Link>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[70px] left-0 w-full bg-[#161A1B]/95 backdrop-blur-xl rounded-[20px] border border-white/5 p-6 flex flex-col gap-6 shadow-2xl md:hidden z-40"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link 
                                        key={link.name} 
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all group"
                                    >
                                        <span className={`w-2 h-2 bg-[#A3E635] rounded-full transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                                        <span className={`text-xl font-semibold ${isActive ? 'text-white' : 'text-[#A7ADBE]'}`}>
                                            {link.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                        
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-bold rounded-xl text-lg transition-transform active:scale-95 shadow-lg">
                                Contact Us
                                <ArrowRight size={20} />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
