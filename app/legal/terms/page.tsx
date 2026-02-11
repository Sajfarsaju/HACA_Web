export const metadata = {
    title: "Terms of Service | HACA",
    description: "Read our terms of service and usage conditions for the HACA platform.",
}

export default function TermsPage() {
    return (
        <div className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-blue dark:prose-invert">
                    <p className="text-muted-foreground mb-6">Last updated: February 10, 2026</p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-6">
                        By accessing or using the HACA website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access our services.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">2. Intellectual Property</h2>
                    <p className="mb-6">
                        The content, design, and source code of the HACA website are protected by intellectual property rights owned by HACA Inc. or our licensors.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">3. Prohibited Use</h2>
                    <p className="mb-4">You may not use our website to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Engage in any unlawful or fraudulent activity.</li>
                        <li>Distribute malware or attempt to compromise site security.</li>
                        <li>Copy or scrape content without our express written permission.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-4">4. Limitation of Liability</h2>
                    <p className="mb-6">
                        HACA Inc. shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">5. Governing Law</h2>
                    <p className="mb-6">
                        These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                    </p>
                </div>
            </div>
        </div>
    )
}
