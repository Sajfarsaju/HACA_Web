"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

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
        <div className="mobile-menu-overlay">
            {/* ── Upper Container ── */}
            <div className="mobile-menu-upper">

                {/* Header: Close Button + Enquire Button */}
                <div className="mobile-menu-header">
                    <button onClick={onClose} className="mobile-menu-close-btn" aria-label="Close menu">
                        <Image
                            src="/ion_close.svg"
                            alt="Close"
                            width={30}
                            height={30}
                        />
                    </button>

                    <Link href="/contact" onClick={handleLinkClick}>
                        <div className="mobile-menu-enquire-btn">
                            <Image
                                src="/photos/common/enqr button.svg"
                                alt="Enquire Now"
                                width={120}
                                height={46}
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>

                {/* Navigation Buttons Container */}
                <nav className="mobile-menu-nav-container">
                    <Link
                        href="/"
                        onClick={handleLinkClick}
                        className={`mobile-menu-nav-btn ${isActive("/") ? "active" : ""}`}
                    >
                        <span>Home</span>
                    </Link>

                    <Link
                        href="/about"
                        onClick={handleLinkClick}
                        className={`mobile-menu-nav-btn ${isActive("/about") ? "active" : ""}`}
                    >
                        <span>About Us</span>
                    </Link>

                    {/* Schools with Dropdown */}
                    <div className="mobile-menu-dropdown-wrapper">
                        <button
                            onClick={() => setIsSchoolsOpen(!isSchoolsOpen)}
                            className={`mobile-menu-nav-btn ${pathname.includes("/schools") || isSchoolsOpen ? "active" : ""}`}
                        >
                            <span>Schools</span>
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
                            <div className="mobile-menu-dropdown">
                                <Link href="/schools/marketing" className="mobile-menu-dropdown-item" onClick={handleLinkClick}>
                                    <span className="mobile-menu-dropdown-text">Marketing School</span>
                                </Link>
                                <Link href="/schools/design" className="mobile-menu-dropdown-item" onClick={handleLinkClick}>
                                    <span className="mobile-menu-dropdown-text">Design School</span>
                                </Link>
                                <Link href="/schools/tech" className="mobile-menu-dropdown-item" onClick={handleLinkClick}>
                                    <span className="mobile-menu-dropdown-text">Tech School</span>
                                </Link>
                                <Link href="/schools/finance" className="mobile-menu-dropdown-item" onClick={handleLinkClick}>
                                    <span className="mobile-menu-dropdown-text">Finance School</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/success-story"
                        onClick={handleLinkClick}
                        className={`mobile-menu-nav-btn ${isActive("/success-story") ? "active" : ""}`}
                    >
                        <span>Success Story</span>
                    </Link>

                    <Link
                        href="/blog"
                        onClick={handleLinkClick}
                        className={`mobile-menu-nav-btn ${isActive("/blog") ? "active" : ""}`}
                    >
                        <span>Blogs</span>
                    </Link>
                </nav>
            </div>


            {/* ── Bottom Container ── */}
            <div className="mobile-menu-bottom">

                {/* Upper Row: Privacy & Terms */}
                <div className="mobile-menu-bottom-legal">
                    <Link href="/privacy-policy" onClick={onClose} className="mobile-menu-legal-link">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-conditions" onClick={onClose} className="mobile-menu-legal-link">
                        Terms and conditions
                    </Link>
                </div>

                {/* Lower Row: Socials */}
                <div className="mobile-menu-bottom-social">
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="mobile-menu-social-link"
                    >
                        Instagram
                    </Link>
                    <Link
                        href="https://youtube.com"
                        target="_blank"
                        className="mobile-menu-social-link"
                    >
                        Youtube
                    </Link>
                </div>

            </div>
        </div>
    )
}
