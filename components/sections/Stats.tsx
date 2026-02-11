"use client"

import { motion } from "framer-motion"

const stats = [
    { label: "Successful Projects", value: "250+" },
    { label: "Client Retention", value: "98%" },
    { label: "Global Presence", value: "15+" },
    { label: "Expert Developers", value: "40+" },
]

export function Stats() {
    return (
        <section className="py-20 md:py-24 border-y bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-2"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-primary">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
