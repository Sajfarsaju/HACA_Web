import { notFound } from "next/navigation"

interface SchoolPageProps {
    params: Promise<{ slug: string }>
}

const schoolData: Record<string, { title: string; description: string; curriculum: string[] }> = {
    marketing: {
        title: "Marketing School",
        description: "Learn to drive growth and build brands in the digital age.",
        curriculum: ["Growth Hacking", "Content Strategy", "Performance Marketing", "Social Media ROI"],
    },
    design: {
        title: "Design School",
        description: "Master the art and science of user-centric digital design.",
        curriculum: ["UI Design Systems", "UX Research", "Motion Design", "Product Strategy"],
    },
    tech: {
        title: "Tech School",
        description: "Deep dive into production-grade engineering and architecture.",
        curriculum: ["Next.js Masterclass", "Cloud Native Architectures", "Security Foundations", "DevOps at Scale"],
    },
    finance: {
        title: "Finance School",
        description: "The intersection of business strategy and digital finance.",
        curriculum: ["Fintech Ecosystems", "Digital Economy", "Venture Capital basics", "Business Analysis"],
    },
}

export async function generateMetadata({ params }: SchoolPageProps) {
    const { slug } = await params
    const school = schoolData[slug]
    if (!school) return { title: "School Not Found" }

    return {
        title: `${school.title} | HACA`,
        description: school.description,
    }
}

export default async function SchoolPage({ params }: SchoolPageProps) {
    const { slug } = await params
    const school = schoolData[slug]

    if (!school) {
        notFound()
    }

    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        {school.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {school.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl border bg-card">
                        <h3 className="text-2xl font-bold mb-6">What you&apos;ll learn</h3>
                        <ul className="space-y-4">
                            {school.curriculum.map((item) => (
                                <li key={item} className="flex gap-3 text-sm font-medium items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
                        <h3 className="text-2xl font-bold mb-4">Enrollment Open</h3>
                        <p className="mb-8 opacity-90">
                            Join our next cohort of high-performing professionals and elevate your career to production standards.
                        </p>
                        <button className="w-full h-12 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                            Apply to {school.title}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
