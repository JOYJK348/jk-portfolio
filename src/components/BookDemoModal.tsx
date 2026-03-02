import { useState, useEffect } from "react";

interface BookDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const businessOptions = [
    "Appointment & Booking Automation",
    "WhatsApp & Email Follow-Up Systems",
    "Automated Billing & Payment Alerts",
    "Customer Retention Automation",
    "Review & Feedback Collection Systems",
    "Custom Billing & Inventory Software",
    "Static & Dynamic Website Development",
    "Others",
];

const educationOptions = [
    "Automated School Admission & Attendance",
    "College Fee & Student Record Management",
    "Coaching Institute Placement & Scheduling Platform",
    "Job Seeker Career & Interview Preparation Tool",
    "AI Chatbot Support & Workflow Automation",
    "Hostel & Mess Management System",
    "Customized College Projects",
    "Others",
];

const BookDemoModal = ({ isOpen, onClose }: BookDemoModalProps) => {
    const [step, setStep] = useState<"form" | "success">("form");
    const [automationFor, setAutomationFor] = useState<"business" | "education">("business");
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        message: "",
    });

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
        return () => {
            document.body.style.overflow = "initial";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRadioChange = (val: "business" | "education") => {
        setAutomationFor(val);
        setSelectedOptions([]);
    };

    const handleOptionToggle = (option: string) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("success");
    };

    const handleClose = () => {
        setStep("form");
        setForm({ name: "", mobile: "", message: "" });
        setAutomationFor("business");
        setSelectedOptions([]);
        onClose();
    };

    const isFormValid = form.name.trim() && form.mobile.trim() && selectedOptions.length > 0;
    const currentOptions = automationFor === "business" ? businessOptions : educationOptions;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ── SUCCESS STATE ── */}
                    {step === "success" ? (
                        <div className="px-6 py-10 flex flex-col items-center text-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-green/10 border border-green/20 flex items-center justify-center text-3xl">
                                ✅
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-foreground mb-1">
                                    Request Sent!
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Thanks <span className="font-semibold text-foreground">{form.name}</span>! I'll reach out on{" "}
                                    <span className="font-semibold text-foreground">{form.mobile}</span> within 24 hours to schedule your demo.
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="mt-2 w-full bg-foreground text-background font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity"
                            >
                                Done
                            </button>
                        </div>
                    ) : (

                        /* ── FORM STATE ── */
                        <>
                            {/* Header - fixed */}
                            <div className="px-6 pt-5 pb-4 border-b border-border flex items-start justify-between gap-3 shrink-0">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-[10px] font-bold text-blue uppercase tracking-widest mb-2">
                                        🗓️ Free Session
                                    </div>
                                    <h2 className="text-lg font-extrabold text-foreground leading-tight">
                                        Book a Demo Session
                                    </h2>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        Fill in your details - I'll contact you within 24 hrs.
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-border transition-colors shrink-0 mt-0.5"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Form - scrollable */}
                            <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4 overflow-y-auto">

                                {/* Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                                        Your Name <span className="text-blue">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Eg: Ramesh Kumar"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all"
                                    />
                                </div>

                                {/* Mobile */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                                        Mobile Number <span className="text-blue">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={form.mobile}
                                        onChange={handleChange}
                                        placeholder="Eg: 9876543210"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all"
                                    />
                                </div>

                                {/* I Need Automation For - Radio */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                                        I Need Automation For <span className="text-blue">*</span>
                                    </label>
                                    <div className="flex gap-3">
                                        {/* Business */}
                                        <button
                                            type="button"
                                            onClick={() => handleRadioChange("business")}
                                            className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${automationFor === "business"
                                                ? "bg-blue/10 border-blue text-blue"
                                                : "bg-muted/30 border-border text-muted-foreground hover:bg-muted/60"}`}
                                        >
                                            <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${automationFor === "business" ? "border-blue" : "border-muted-foreground"}`}>
                                                {automationFor === "business" && <span className="w-1.5 h-1.5 rounded-full bg-blue block" />}
                                            </span>
                                            🏢 Business
                                        </button>
                                        {/* Education */}
                                        <button
                                            type="button"
                                            onClick={() => handleRadioChange("education")}
                                            className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${automationFor === "education"
                                                ? "bg-green/10 border-green text-green"
                                                : "bg-muted/30 border-border text-muted-foreground hover:bg-muted/60"}`}
                                        >
                                            <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center shrink-0 ${automationFor === "education" ? "border-green" : "border-muted-foreground"}`}>
                                                {automationFor === "education" && <span className="w-1.5 h-1.5 rounded-full bg-green block" />}
                                            </span>
                                            🎓 Education
                                        </button>
                                    </div>
                                </div>

                                {/* Checkbox Options */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                                        What Do You Need? <span className="text-blue">*</span>
                                    </label>
                                    <div className="grid grid-cols-1 gap-2">
                                        {currentOptions.map((option) => {
                                            const isChecked = selectedOptions.includes(option);
                                            const accentColor = automationFor === "business" ? "blue" : "green";
                                            return (
                                                <button
                                                    type="button"
                                                    key={option}
                                                    onClick={() => handleOptionToggle(option)}
                                                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left text-sm transition-all ${isChecked
                                                        ? accentColor === "blue"
                                                            ? "bg-blue/8 border-blue/50 text-foreground"
                                                            : "bg-green/8 border-green/50 text-foreground"
                                                        : "bg-muted/20 border-border text-muted-foreground hover:bg-muted/40"}`}
                                                >
                                                    <span className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${isChecked
                                                        ? accentColor === "blue" ? "bg-blue border-blue" : "bg-green border-green"
                                                        : "border-border bg-white"}`}>
                                                        {isChecked && (
                                                            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                                                                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        )}
                                                    </span>
                                                    <span className="font-medium">{option}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Optional message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                                        Anything to Share? <span className="text-muted-foreground font-normal">(Optional)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your current process or problem..."
                                        rows={2}
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/15 transition-all resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className="w-full bg-blue text-white font-bold py-3.5 rounded-xl shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                                >
                                    🗓️ Book My Demo Session →
                                </button>

                                <p className="text-center text-[11px] text-muted-foreground pb-2">
                                    🔒 Your info is private. No spam, ever.
                                </p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default BookDemoModal;
