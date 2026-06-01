import { Fragment } from "react";

const HEADING_ID = "ae-journey-heading";

type Step = { readonly id: number; readonly title: string; readonly description: string };

const STEPS: readonly Step[] = [
    { id: 1, title: "Course Inquiry",               description: "Have questions about the course? Connect with our team and explore how this program aligns with your goals and career plans." },
    { id: 2, title: "Career Discussion Session",    description: "Join a friendly one-on-one conversation where we understand your goals and help you plan the right direction." },
    { id: 3, title: "Enrollment & Onboarding",      description: "Complete your registration and payment process to secure your spot and officially join our program." },
    { id: 4, title: "Foundation Module",            description: "Begin with a pre-course learning experience designed to introduce key digital marketing concepts and tools." },
    { id: 5, title: "Live Learning Begins",         description: "Join mentor-led sessions, interact with peers, learn practical skills, and become part of an active learning community." },
    { id: 6, title: "Project & Practical Learning", description: "Apply what you learn through assignments, live projects, audits, and hands-on activities built around real work." },
    { id: 7, title: "Portfolio & Career Support",   description: "Build your portfolio, prepare for interviews, improve your resume, and get ready for career opportunities." },
    { id: 8, title: "Graduate & Move Forward",      description: "Complete your learning journey with certifications, practical experience, and the confidence to step into the industry." },
    { id: 9, title: "Sharing Your Insights",        description: "Celebrate your journey and inspire future learners with the experiences, growth, and skills you've built along the way." },
] as const;

const C = "rgba(178,178,178,0.3)";

/** Horizontal right arrow — line stretches to fill container, solid triangle tip */
function ArrowRight() {
    return (
        <div className="flex w-full items-center" aria-hidden>
            <div className="h-[2px] flex-1" style={{ backgroundColor: C }} />
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <polygon points="0,0 14,6 0,12" fill={C} />
            </svg>
        </div>
    );
}

/** Horizontal left arrow — solid triangle tip on the left, line stretches */
function ArrowLeft() {
    return (
        <div className="flex w-full items-center" aria-hidden>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                <polygon points="14,0 0,6 14,12" fill={C} />
            </svg>
            <div className="h-[2px] flex-1" style={{ backgroundColor: C }} />
        </div>
    );
}

/** Vertical down arrow with fixed height */
function ArrowDown({ height = 80 }: { height?: number }) {
    return (
        <div className="flex flex-col items-center" style={{ height }} aria-hidden>
            <div className="w-[2px] flex-1" style={{ backgroundColor: C }} />
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <polygon points="0,0 12,0 6,14" fill={C} />
            </svg>
        </div>
    );
}

function StepCard({ step }: { step: Step }) {
    return (
        <div className="flex flex-col gap-[10px]">
            <h3 className="m-0 text-[24px] font-medium leading-[120%] tracking-[-0.01em] text-white [font-family:'Darker_Grotesque',sans-serif] lg:text-[30px]">
                {step.title}
            </h3>
            <p className="m-0 text-[16px] font-normal leading-[120%] tracking-[-0.01em] text-[#FFFFFFB2] [font-family:'Satoshi',sans-serif]">
                {step.description}
            </p>
        </div>
    );
}

/* 4fr cards, 1fr arrow columns — cards + arrows scale together on all desktop widths */
const COL_STYLE = { gridTemplateColumns: "4fr 1fr 4fr 1fr 4fr" };

function DesktopCardRow({ left, center, right, direction }: {
    left: Step; center: Step; right: Step; direction: "right" | "left";
}) {
    return (
        <div className="grid items-center" style={COL_STYLE}>
            <div className="self-start"><StepCard step={left} /></div>
            <div className="flex items-center px-2">
                {direction === "right" ? <ArrowRight /> : <ArrowLeft />}
            </div>
            <div className="self-start"><StepCard step={center} /></div>
            <div className="flex items-center px-2">
                {direction === "right" ? <ArrowRight /> : <ArrowLeft />}
            </div>
            <div className="self-start"><StepCard step={right} /></div>
        </div>
    );
}

function DesktopDownConnector({ side }: { side: "left" | "right" }) {
    return (
        <div className="grid" style={COL_STYLE}>
            {side === "left" ? (
                <>
                    <div className="flex justify-center"><ArrowDown height={80} /></div>
                    <div /><div /><div /><div />
                </>
            ) : (
                <>
                    <div /><div /><div /><div />
                    <div className="flex justify-center"><ArrowDown height={80} /></div>
                </>
            )}
        </div>
    );
}

export function AeJourneySection() {
    return (
        <section className="w-full bg-black text-white" aria-labelledby={HEADING_ID}>
            <div className="mx-auto box-border flex w-full max-w-[1440px] flex-col gap-[30px] px-4 py-5 lg:px-[60px] lg:py-[60px]">
                <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-[60px]">

                    {/* Heading */}
                    <h2
                        id={HEADING_ID}
                        className="m-0 max-w-[343px] text-[36px] font-semibold leading-[110%] tracking-[-0.01em] text-white [font-family:'Darker_Grotesque',sans-serif] [text-rendering:geometricPrecision] lg:max-w-[801px] lg:text-[55px] lg:tracking-[-0.05em]"
                    >
                        How Your Journey with HACA Will Look Like
                    </h2>

                    {/* Content */}
                    <div>

                        {/* Mobile: single column, sequential */}
                        <div className="flex flex-col gap-[30px] lg:hidden">
                            {STEPS.map((step, i) => (
                                <Fragment key={step.id}>
                                    <StepCard step={step} />
                                    {i < STEPS.length - 1 && (
                                        <div className="flex justify-center">
                                            <ArrowDown height={40} />
                                        </div>
                                    )}
                                </Fragment>
                            ))}
                        </div>

                        {/* Desktop: snake layout */}
                        <div className="hidden lg:flex lg:flex-col lg:gap-5">
                            <DesktopCardRow left={STEPS[0]} center={STEPS[1]} right={STEPS[2]} direction="right" />
                            <DesktopDownConnector side="right" />
                            <DesktopCardRow left={STEPS[5]} center={STEPS[4]} right={STEPS[3]} direction="left" />
                            <DesktopDownConnector side="left" />
                            <DesktopCardRow left={STEPS[6]} center={STEPS[7]} right={STEPS[8]} direction="right" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
