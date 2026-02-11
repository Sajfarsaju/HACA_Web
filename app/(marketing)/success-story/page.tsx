export const metadata = {
    title: "Success Stories | HACA",
    description: "Read how HACA help businesses achieve extraordinary results with our technology stack.",
}

const stories = [
    {
        company: "FintechFlow",
        title: "Scaling to 1M users in 6 months",
        content: "By implementing HACA's core architecture, FintechFlow was able to handle massive traffic spikes without a single minute of downtime.",
        stat: "400% growth in throughput",
    },
    {
        company: "DesignCore",
        title: "Reducing page load time by 70%",
        content: "DesignCore transitioned their entire portfolio to our Next.js foundations, resulting in a significantly better UX and higher conversion rates.",
        stat: "70% faster load times",
    }
]

export default function SuccessStoryPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center">
                    Building <span className="text-primary italic">success</span> stories.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {stories.map((story) => (
                        <div key={story.company} className="p-8 rounded-3xl border bg-card hover:border-primary/50 transition-colors shadow-2xl shadow-primary/5">
                            <div className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">{story.company}</div>
                            <h3 className="text-2xl font-bold mb-4">{story.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {story.content}
                            </p>
                            <div className="text-3xl font-black text-foreground">{story.stat}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
