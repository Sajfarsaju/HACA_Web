"use client"

import { motion } from "framer-motion"
import {
    LucideShieldCheck,
    LucideZap,
    LucideLayout,
    LucideCode2,
    LucideSearch,
    LucideServer
} from "lucide-react"

const features = [
    {
        title: "Security First",
        description: "Enterprise-grade protection with advanced encryption and SOC2 compliance monitoring.",
        icon: LucideShieldCheck,
    },
    {
        title: "Ultra Performance",
        description: "Lightning-fast load times and optimized Core Web Vitals delivered via global edge networks.",
        icon: LucideZap,
    },
    {
        title: "Modern UI/UX",
        description: "Premium designs crafted with attention to detail, motion, and user accessibility.",
        icon: LucideLayout,
    },
    {
        title: "Developer Focused",
        description: "Type-safe architectures, comprehensive documentation, and seamless CI/CD integrations.",
        icon: LucideCode2,
    },
    {
        title: "SEO Optimized",
        description: "Built-in metadata management and semantic HTML to ensure search engine discoverability.",
        icon: LucideSearch,
    },
    {
        title: "Edge Scaling",
        description: "Serverless global infrastructure that scales automatically with your business traffic.",
        icon: LucideServer,
    },
]

export function Features() {
    return (
        <section id="features" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Features</h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Everything you need for a <span className="text-primary italic">successful</span> digital presence
                    </h3>
                    <p className="text-lg text-muted-foreground">
                        Our technology stack is meticulously curated to provide the perfect balance between performance, scalability, and ease of management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl border bg-card hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
