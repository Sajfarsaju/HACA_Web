"use client";

import { useEffect } from "react";

export default function EnquirePage() {
    useEffect(() => {
        const containerId =
            "lsq-portal-widget-9139a214-6c5b-11ef-8af5-02fc10e7d939-7bd9f529-a223-4354-b026-774c8e47edb5";

        const container = document.getElementById(containerId);
        if (!container) return;

        const script = document.createElement("script");
        script.src =
            "https://portal-widgets.lsqportal.com/assets/bootstrap-widget.js";
        script.setAttribute(
            "data-widget-id",
            "9139a214-6c5b-11ef-8af5-02fc10e7d939"
        );
        script.setAttribute(
            "data-version-id",
            "7bd9f529-a223-4354-b026-774c8e47edb5"
        );
        script.setAttribute(
            "data-formjs",
            "https://forms.lsqportal.com/r21/js/lsq.form.js"
        );
        script.setAttribute(
            "data-URL",
            "https://portal-widgets.lsqportal.com"
        );
        script.charset = "utf-8";
        script.onload = function (event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const helpers = (window as any)[
                "___lsq-portal-widget-helpers___"
            ];
            if (helpers?.bootstrapLSQWidget) {
                helpers.bootstrapLSQWidget(event);
            }
        };

        container.appendChild(script);

        return () => {
            if (script.parentNode === container) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-16 sm:py-24">
            <div className="w-full max-w-2xl mx-auto">
                <div className="mb-10 text-center">
                    <h1
                        className="text-white font-outfit font-semibold text-[clamp(28px,5vw,44px)] leading-tight tracking-[-0.02em]"
                    >
                        Enquire Now
                    </h1>
                    <p className="mt-3 text-[#A7ADBE] font-outfit text-[clamp(14px,2vw,17px)]">
                        Fill in your details and our team will reach out to you shortly.
                    </p>
                </div>

                <div
                    id="lsq-portal-widget-9139a214-6c5b-11ef-8af5-02fc10e7d939-7bd9f529-a223-4354-b026-774c8e47edb5"
                    className="lsq-portal-widget lsq-form-widget w-full"
                />
            </div>
        </main>
    );
}
