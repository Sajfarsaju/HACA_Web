"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LucideArrowRight, LucideCheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Next-Gen Solutions for Modern Teams
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Build Production-Grade <br className="hidden md:block" />
                    Web Experiences Fast
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
                >
                    Experience the ultimate fusion of performance, design, and developer efficiency. HACA provides the enterprise-ready foundations you need to scale your vision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <Button size="lg" className="h-12 px-8 text-base font-semibold group" asChild>
                        <Link href="/contact">
                            Get Started Now
                            <LucideArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base font-semibold" asChild>
                        <Link href="/solutions">View Solutions</Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                >
                    <div className="flex items-center gap-1.5">
                        <LucideCheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Enterprise-Grade Security</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <LucideCheckCircle2 className="h-4 w-4 text-primary" />
                        <span>99.9% Uptime SLA</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <LucideCheckCircle2 className="h-4 w-4 text-primary" />
                        <span>WCAG 2.1 Compliant</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
