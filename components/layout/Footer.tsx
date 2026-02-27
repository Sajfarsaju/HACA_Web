import Image from "next/image"
import Link from "next/link"
import { LucideGithub, LucideTwitter, LucideLinkedin } from "lucide-react"

export function Footer() {
    return (
        <footer
            className="w-full bg-[#000210] mx-auto overflow-hidden flex flex-col items-center justify-center"
            style={{
                width: '100%',
                maxWidth: '1440px',
                height: '534px',
                padding: '60px 63px',
                gap: '20px',
                opacity: 1,
            }}
        >
            <div className="w-full h-full flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 flex-grow">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/photos/common/Logo_Desktop.png"
                                alt="HACA Logo"
                                width={106}
                                height={31}
                                className="object-contain"
                            />
                        </Link>
                        <p className="max-w-xs text-sm text-[#A7ADBE] mb-6">
                            The ultimate fusion of performance, design, and developer efficiency. HACA provides the enterprise-ready foundations you need to scale.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-[#A7ADBE] hover:text-white transition-colors">
                                <LucideTwitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-[#A7ADBE] hover:text-white transition-colors">
                                <LucideGithub className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-[#A7ADBE] hover:text-white transition-colors">
                                <LucideLinkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-rethink font-semibold mb-4 text-white">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-[#A7ADBE] hover:text-white">Home</Link></li>
                            <li><Link href="/about" className="text-[#A7ADBE] hover:text-white">About Us</Link></li>
                            <li><Link href="/success-story" className="text-[#A7ADBE] hover:text-white">Success Story</Link></li>
                            <li><Link href="/blog" className="text-[#A7ADBE] hover:text-white">Blogs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-rethink font-semibold mb-4 text-white">Schools</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/schools/marketing" className="text-[#A7ADBE] hover:text-white">Marketing School</Link></li>
                            <li><Link href="/schools/design" className="text-[#A7ADBE] hover:text-white">Design School</Link></li>
                            <li><Link href="/schools/tech" className="text-[#A7ADBE] hover:text-white">Tech School</Link></li>
                            <li><Link href="/schools/finance" className="text-[#A7ADBE] hover:text-white">Finance School</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-rethink font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/legal/privacy" className="text-[#A7ADBE] hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className="text-[#A7ADBE] hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-auto border-t border-white/5 pt-8 text-center text-sm text-[#A7ADBE]">
                    <p>© {new Date().getFullYear()} HACA Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
