import { LucideCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: "Pricing Plans | HACA",
    description: "Transparent pricing for production-grade technology solutions. Choose the plan that fits your business stage.",
}

const plans = [
    {
        name: "Starter",
        price: "$2,499",
        description: "Perfect for startups needing a high-performance landing page or MVP.",
        features: [
            "Next.js App Router Architecture",
            "Tailwind CSS v4 Styling",
            "Framer Motion Animations",
            "SEO Metadata Setup",
            "Mobile Responsive Design",
            "14 Days Delivery",
        ],
        cta: "Start Starter",
        featured: false,
    },
    {
        name: "Professional",
        price: "$5,999",
        description: "The complete package for growing companies needing a full official website.",
        features: [
            "Everything in Starter",
            "Up to 10 Advanced Pages",
            "Sanity or Contentful CMS",
            "Contact Form Integration",
            "Newsletter Setup",
            "30 Days Delivery",
        ],
        cta: "Start Professional",
        featured: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Bespoke digital platforms for large organizations with complex needs.",
        features: [
            "Everything in Professional",
            "Custom AI Integrations",
            "Advanced Security Audits",
            "Multi-language Support",
            "Dedicated Support",
            "Custom SLA",
        ],
        cta: "Contact Sales",
        featured: false,
    },
]

export default function PricingPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Transparent pricing for <br /> <span className="text-primary italic">scalable</span> growth.
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                    Choose a foundation that grows with your business. No hidden fees, just production-grade engineering.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`p-10 rounded-3xl border flex flex-col ${plan.featured
                                    ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 scale-105"
                                    : "bg-card border-border"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className={`text-sm mb-8 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                                {plan.description}
                            </p>
                            <div className="mb-8">
                                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-sm font-medium ml-2">/project</span>}
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-3 text-sm font-medium items-start">
                                        <LucideCheck className={`h-5 w-5 shrink-0 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.featured ? "secondary" : "default"}
                                className="w-full h-12 font-bold text-lg"
                                asChild
                            >
                                <Link href="/contact">{plan.cta}</Link>
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold mb-2">How does the payment process work?</h4>
                            <p className="text-muted-foreground">We typically require a 50% upfront deposit to secure your project slot, with the remaining 50% due upon production deployment and approval.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Can I upgrade my plan later?</h4>
                            <p className="text-muted-foreground">Absolutely. Many of our clients start with the Starter package and upgrade to Professional as their content and feature needs grow.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Do you provide ongoing maintenance?</h4>
                            <p className="text-muted-foreground">Yes, we offer monthly maintenance and support retainers to ensure your platform remains secure, updated, and optimized.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
