"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LucideArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-0 right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-3xl border bg-card p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/5"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Ready to elevate your <br className="hidden md:block" /> digital presence?
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join hundreds of forward-thinking companies building their future with HACA. Start your production-grade journey today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-10 text-lg font-bold group w-full sm:w-auto" asChild>
                                <Link href="/contact">
                                    Start My Project
                                    <LucideArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold w-full sm:w-auto" asChild>
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                        <p className="mt-8 text-sm text-muted-foreground">
                            No credit card required. Free initial consultation for enterprise users.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
