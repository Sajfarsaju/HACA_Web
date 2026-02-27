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
        <header className="sticky top-0 z-50 navbar-container navbar-mobile-padding">
            {/* Inner container */}
            <div className="navbar-inner">
                {/* Logo */}
                <Link href="/" className="navbar-logo-link" onClick={closeDropdown}>
                    <Image
                        src="/photos/common/haca logo.svg"
                        alt="HACA Logo"
                        width={106}
                        height={31}
                        className="object-contain navbar-logo"
                        priority
                    />
                </Link>

                {/* Desktop Nav Buttons Container */}
                <nav className="navbar-nav-desktop navbar-nav-pill">
                    {/* Home */}
                    <Link
                        href="/"
                        className={`navbar-nav-item ${pathname === "/" ? "navbar-nav-item--active" : ""}`}
                        onClick={closeDropdown}
                    >
                        <span>Home</span>
                    </Link>

                    {/* About Us */}
                    <Link
                        href="/about"
                        className={`navbar-nav-item ${pathname === "/about" ? "navbar-nav-item--active" : ""}`}
                        onClick={closeDropdown}
                    >
                        <span>About Us</span>
                    </Link>

                    {/* Schools - with dropdown arrow */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className={`navbar-nav-item navbar-nav-dropdown ${isSchoolsOpen ? 'navbar-nav-item--active' : ''}`}
                            onClick={() => setIsSchoolsOpen(!isSchoolsOpen)}
                        >
                            <span>Schools</span>
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
                            <div className="navbar-dropdown-overlay">
                                <Link href="/schools/marketing" className="navbar-dropdown-item" onClick={closeDropdown}>
                                    <span className="navbar-dropdown-text">Marketing School</span>
                                </Link>
                                <Link href="/schools/design" className="navbar-dropdown-item" onClick={closeDropdown}>
                                    <span className="navbar-dropdown-text">Design School</span>
                                </Link>
                                <Link href="/schools/tech" className="navbar-dropdown-item" onClick={closeDropdown}>
                                    <span className="navbar-dropdown-text">Tech School</span>
                                </Link>
                                <Link href="/schools/finance" className="navbar-dropdown-item" onClick={closeDropdown}>
                                    <span className="navbar-dropdown-text">Finance School</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Success Story */}
                    <Link
                        href="/success-story"
                        className={`navbar-nav-item ${pathname === "/success-story" ? "navbar-nav-item--active" : ""}`}
                        onClick={closeDropdown}
                    >
                        <span>Success Story</span>
                    </Link>

                    {/* Blogs */}
                    <Link
                        href="/blog"
                        className={`navbar-nav-item ${pathname === "/blog" ? "navbar-nav-item--active" : ""}`}
                        onClick={closeDropdown}
                    >
                        <span>Blogs</span>
                    </Link>
                </nav>

                {/* Enquire Now Button - Desktop only */}
                <Link href="/contact" className="navbar-enquire-desktop navbar-enquire-btn" onClick={closeDropdown}>
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
                    className="navbar-menu-mobile"
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
