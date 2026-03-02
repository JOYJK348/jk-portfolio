const steps = [
    {
        number: "01",
        phase: "Planning",
        title: "Workflow Analysis",
        desc: "Understanding existing manual processes and identifying inefficiencies before anything is built.",
        icon: "🗺️",
        colorClass: "bg-blue text-white",
        borderClass: "border-blue/20",
        accentText: "text-blue",
        accentBg: "bg-blue/8",
        dotBg: "bg-blue",
        highlights: ["Process mapping", "Gap identification", "Stakeholder interview", "Priority setting"],
    },
    {
        number: "02",
        phase: "Communication",
        title: "System Architecture Design",
        desc: "Creating a structured automation plan fully aligned with your operational goals and team.",
        icon: "💬",
        colorClass: "bg-purple-500 text-white",
        borderClass: "border-purple-200",
        accentText: "text-purple-600",
        accentBg: "bg-purple-50",
        dotBg: "bg-purple-500",
        highlights: ["Blueprint creation", "Tool selection", "Team alignment", "Timeline planning"],
    },
    {
        number: "03",
        phase: "Development",
        title: "Build & Development",
        desc: "Designing and building the system with clear, practical, easy-to-use interfaces.",
        icon: "🔧",
        colorClass: "bg-orange text-white",
        borderClass: "border-orange/20",
        accentText: "text-orange",
        accentBg: "bg-orange/8",
        dotBg: "bg-orange",
        highlights: ["System building", "Automation setup", "UI configuration", "Integration"],
    },
    {
        number: "04",
        phase: "Testing",
        title: "Testing & Validation",
        desc: "Thorough testing of every workflow to ensure accuracy, reliability and zero errors.",
        icon: "🧪",
        colorClass: "bg-teal text-white",
        borderClass: "border-teal/20",
        accentText: "text-teal",
        accentBg: "bg-teal/8",
        dotBg: "bg-teal",
        highlights: ["Workflow testing", "Error checking", "User acceptance", "Feedback loops"],
    },
    {
        number: "05",
        phase: "Deployment",
        title: "Live Deployment",
        desc: "Implementing the system in a live environment, ensuring a smooth transition from manual to automated.",
        icon: "🚀",
        colorClass: "bg-green text-white",
        borderClass: "border-green/20",
        accentText: "text-green",
        accentBg: "bg-green/8",
        dotBg: "bg-green",
        highlights: ["Go-live support", "Team training", "Handoff docs", "Smooth migration"],
    },
    {
        number: "06",
        phase: "Monitoring",
        title: "Optimization & Refinement",
        desc: "Continuous monitoring and improvement based on real-world usage, feedback and growth needs.",
        icon: "📊",
        colorClass: "bg-blue text-white",
        borderClass: "border-blue/20",
        accentText: "text-blue",
        accentBg: "bg-blue/8",
        dotBg: "bg-blue",
        highlights: ["Performance tracking", "Usage analytics", "System upgrades", "Ongoing support"],
    },
];

type Step = typeof steps[0];

const StepCard = ({ step, isLast }: { step: Step; isLast: boolean }) => (
    <div className={`relative flex flex-col gap-4 rounded-2xl border ${step.borderClass} bg-white shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full`}>

        {/* Mobile header - icon + phase + title (no number, timeline circle handles it) */}
        <div className="md:hidden flex items-center gap-2">
            <span className="text-xl leading-none">{step.icon}</span>
            <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${step.accentText}`}>
                    {step.phase}
                </p>
                <h3 className="font-bold text-foreground text-sm leading-snug">{step.title}</h3>
            </div>
        </div>

        {/* Desktop header - number badge + phase + title */}
        <div className="hidden md:flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl ${step.colorClass} flex items-center justify-center font-black text-sm shadow-md shrink-0`}>
                {step.number}
            </div>
            <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${step.accentText}`}>
                    {step.icon} {step.phase}
                </p>
                <h3 className="font-bold text-foreground text-sm leading-snug">{step.title}</h3>
            </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full border-t ${step.borderClass}`} />

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">{step.desc}</p>

        {/* Highlight chips */}
        <div className="flex flex-wrap gap-1.5">
            {step.highlights.map((h) => (
                <span
                    key={h}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${step.accentBg} ${step.accentText} border ${step.borderClass}`}
                >
                    {h}
                </span>
            ))}
        </div>

        {/* Connector arrow (hidden on last card) */}
        {!isLast && (
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-border shadow-sm items-center justify-center text-muted-foreground text-xs font-bold">
                →
            </div>
        )}
    </div>
);

const WorkProcessSection = () => (
    <section className="px-4 py-14 surface-cool overflow-hidden">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest mb-4">
                    ⚙️ Work Process
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
                    How Every Project Gets Done
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                    A clear, repeatable process - from the first conversation to a fully running system.
                </p>
            </div>

            {/* ── MOBILE: Vertical timeline ── */}
            <div className="flex flex-col gap-0 md:hidden">
                {steps.map((step, i) => {
                    const isLast = i === steps.length - 1;
                    return (
                        <div key={step.number} className="flex items-stretch gap-4">
                            {/* Timeline spine */}
                            <div className="flex flex-col items-center shrink-0" style={{ width: "44px" }}>
                                <div className={`w-11 h-11 rounded-full ${step.colorClass} flex items-center justify-center font-black text-sm shadow-md ring-[3px] ring-white shrink-0 z-10`}>
                                    {step.number}
                                </div>
                                {!isLast && (
                                    <div className="w-0.5 flex-1 min-h-[16px] mt-1"
                                        style={{ background: "linear-gradient(to bottom, hsl(220 13% 91%), transparent)" }}
                                    />
                                )}
                            </div>
                            {/* Card */}
                            <div className={`flex-1 min-w-0 ${isLast ? "pb-0" : "pb-4"}`}>
                                <StepCard step={step} isLast={isLast} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── DESKTOP: Clean 3-column grid ── */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {steps.map((step, i) => (
                    <StepCard key={step.number} step={step} isLast={i === steps.length - 1} />
                ))}
            </div>

            {/* Bottom note */}
            <div className="mt-12 text-center">
                <div className="inline-flex flex-wrap justify-center items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-border shadow-sm">
                    <span className="text-xl">🔄</span>
                    <p className="text-sm text-muted-foreground">
                        This process is{" "}
                        <span className="font-semibold text-foreground">repeatable, scalable</span>,
                        and tailored for every client.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default WorkProcessSection;
