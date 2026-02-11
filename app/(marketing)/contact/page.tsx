import { ContactForm } from "@/components/forms/ContactForm"
import { LucideMail, LucidePhone, LucideMapPin } from "lucide-react"

export const metadata = {
    title: "Contact Us | HACA",
    description: "Get in touch with the HACA team for enterprise-grade technology solutions and specialist consultation.",
}

export default function ContactPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Let&apos;s build something <span className="text-primary italic">extraordinary</span> together.
                            </h1>
                            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                                Whether you have a specific project in mind or just want to explore how our technology stack can accelerate your business, we&apos;re here to help.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <LucideMail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Email Us</h4>
                                        <p className="text-muted-foreground">hello@haca-web.com</p>
                                        <p className="text-sm text-primary font-medium mt-1">Average response time: 2 hours</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <LucidePhone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Call Us</h4>
                                        <p className="text-muted-foreground">+1 (555) 000-0000</p>
                                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <LucideMapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Our Office</h4>
                                        <p className="text-muted-foreground">123 Innovation Drive, Suite 500</p>
                                        <p className="text-muted-foreground">San Francisco, CA 94103</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
