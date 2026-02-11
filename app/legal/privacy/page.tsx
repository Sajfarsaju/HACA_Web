export const metadata = {
    title: "Privacy Policy | HACA",
    description: "Learn how HACA collects, uses, and protects your personal data.",
}

export default function PrivacyPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-blue dark:prose-invert">
                    <p className="text-muted-foreground mb-6">Last updated: February 10, 2026</p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">1. Introduction</h2>
                    <p className="mb-6">
                        HACA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">We collect information that you provide directly to us, such as:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Name and contact information when you fill out a form.</li>
                        <li>Communication preferences and history.</li>
                        <li>Information about your company and project requirements.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4">3. How We Use Your Information</h2>
                    <p className="mb-6">
                        We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and send you technical notices and support messages.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">4. Cookies and Tracking</h2>
                    <p className="mb-6">
                        We use essential cookies to ensure our website functions correctly. We may also use analytics cookies (like Google Analytics) to understand how visitors interact with our site.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">5. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about this Privacy Policy, please contact us at privacy@haca-web.com.
                    </p>
                </div>
            </div>
        </div>
    )
}
