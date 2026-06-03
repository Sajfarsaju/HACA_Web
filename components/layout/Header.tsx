"use client"

import * as React from "react"
import Link from "next/link"
import { Navigation } from "./Navigation"
import { Button } from "@/components/ui/button"
import { LucideMenu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from "next/image"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/photos/common/Logo_Desktop.png"
                            alt="HACA Logo"
                            width={106}
                            height={31}
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <Navigation />
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/contact">Support</Link>
                        </Button>
                        <Button size="sm" asChild className="ml-2">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <LucideMenu className="h-6 w-6" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[240px]">
                                <DropdownMenuItem asChild>
                                    <Link href="/">Home</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/about">About Us</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/success-story">Success Story</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/blog">Blogs</Link>
                                </DropdownMenuItem>
                                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Schools</div>
                                <DropdownMenuItem asChild className="pl-4">
                                    <Link href="/marketing-school">Marketing School</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="pl-4">
                                    <Link href="/design-school">Design School</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="pl-4">
                                    <Link href="/tech-school">Tech School</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/contact" className="font-semibold text-primary mt-2">
                                        Get Started
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}
