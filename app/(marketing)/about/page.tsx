export const metadata = {
    title: "About Us | HACA",
    description: "Learn about HACA, our mission to build production-grade web experiences, and the team driving digital innovation.",
}

export default function AboutPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        We&apos;re on a mission to <span className="text-primary italic">redefine</span> production standards.
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                            Founded by a team of engineers and designers who were tired of the gap between &quot;working code&quot; and &quot;production-ready software,&quot; HACA was built to bridge that divide.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-muted-foreground">
                                    We believe that every business, regardless of size, deserves access to the same technology standards used by industry leaders. High performance, absolute security, and inclusive design shouldn&apos;t be optional extras—they should be the foundation.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                                <p className="text-muted-foreground">
                                    We don&apos;t just build websites; we engineer digital platforms. By leveraging the power of Next.js, TypeScript, and edge computing, we create experiences that are as reliable as they are beautiful.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-8">Why &quot;HACA&quot;?</h2>
                        <p className="text-muted-foreground mb-12">
                            HACA stands for **High-Availability Content Architecture**. It represents our commitment to building systems that are always accessible, incredibly fast, and architected for growth.
                        </p>

                        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border">
                            <h3 className="text-2xl font-bold mb-6 text-center">Core Values</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-2">01</div>
                                    <h4 className="font-bold mb-2">Excellence</h4>
                                    <p className="text-sm text-muted-foreground">We never settle for &quot;good enough.&quot;</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-2">02</div>
                                    <div className="font-bold mb-2">Integrity</div>
                                    <p className="text-sm text-muted-foreground">Transparency in every line of code.</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-2">03</div>
                                    <div className="font-bold mb-2">Innovation</div>
                                    <p className="text-sm text-muted-foreground">Pushing the boundaries of the possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
