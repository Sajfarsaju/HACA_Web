import Image from "next/image"
import Link from "next/link"
import { LucideGithub, LucideTwitter, LucideLinkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-[#000210] border-white/5">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/photos/Logo_Desktop.png"
                                alt="HACA Logo"
                                width={106}
                                height={31}
                                className="object-contain"
                            />
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground mb-6">
                            The ultimate fusion of performance, design, and developer efficiency. HACA provides the enterprise-ready foundations you need to scale.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <LucideTwitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <LucideGithub className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <LucideLinkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                            <li><Link href="/success-story" className="text-muted-foreground hover:text-foreground">Success Story</Link></li>
                            <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blogs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Schools</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/schools/marketing" className="text-muted-foreground hover:text-foreground">Marketing School</Link></li>
                            <li><Link href="/schools/design" className="text-muted-foreground hover:text-foreground">Design School</Link></li>
                            <li><Link href="/schools/tech" className="text-muted-foreground hover:text-foreground">Tech School</Link></li>
                            <li><Link href="/schools/finance" className="text-muted-foreground hover:text-foreground">Finance School</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} HACA Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
