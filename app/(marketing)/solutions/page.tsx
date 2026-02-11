import { LucideShield, LucideZap, LucideCloud, LucideCpu, LucideLineChart, LucideSmartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: "Our Solutions | HACA",
    description: "Explore our range of production-grade technology solutions, from SaaS platforms to AI implementation.",
}

const solutions = [
    {
        title: "SaaS Platform Development",
        description: "End-to-end development of scalable multi-tenant architectures with advanced subscription management.",
        icon: LucideSmartphone,
        features: ["Role-based Access Control", "Billing Integration", "Real-time Analytics"],
    },
    {
        title: "Cloud Infrastructure",
        description: "Modern devops practices and cloud-native architectures designed for high availability and zero downtime.",
        icon: LucideCloud,
        features: ["Auto-scaling", "Edge Delivery", "Automated Backups"],
    },
    {
        title: "AI & Data Solutions",
        description: "Integrating intelligent automation and predictive analytics into your existing business workflows.",
        icon: LucideCpu,
        features: ["ML Pipeline Integration", "Data Visualization", "Process Automation"],
    },
    {
        title: "Cybersecurity & Compliance",
        description: "Hardened security posture with continuous monitoring and automated compliance reporting.",
        icon: LucideShield,
        features: ["SOC2 Ready", "Advanced Encryption", "Threat Detection"],
    },
    {
        title: "Performance Optimization",
        description: "Deep audits and engineering to ensure your platform meets the highest standards for speed and reliability.",
        icon: LucideZap,
        features: ["Core Web Vitals", "Database Tuning", "Asset Optimization"],
    },
    {
        title: "Business Intelligence",
        description: "Custom dashboards and reporting tools that turn complex data into actionable business insights.",
        icon: LucideLineChart,
        features: ["Custom Dashboards", "KPI Tracking", "Exportable Reports"],
    },
]

export default function SolutionsPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Enterprise-grade <span className="text-primary italic">solutions</span> <br /> for complex challenges.
                </h1>
                <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
                    We combine cutting-edge technology with proven engineering patterns to deliver digital platforms that don&apos;t just work—they excel.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {solutions.map((solution) => (
                        <div key={solution.title} className="p-8 rounded-3xl border bg-card hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <solution.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {solution.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {solution.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/contact">Learn More</Link>
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="bg-muted/30 rounded-3xl p-12 text-center border">
                    <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Our engineering team specializes in architecting bespoke systems tailored to your specific business requirements and scalability goals.
                    </p>
                    <Button size="lg" className="h-12 px-8 font-bold" asChild>
                        <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
