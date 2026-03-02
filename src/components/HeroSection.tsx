import React from "react";

const businessSolutions = [
  {
    icon: "📅",
    label: "Appointment & Booking Automation",
    desc: "Customers can easily book slots online, saving you time and reducing phone calls."
  },
  {
    icon: "📱",
    label: "WhatsApp & Email Follow-Up Systems",
    desc: "Automated confirmations and reminders sent directly to customers via WhatsApp and email."
  },
  {
    icon: "💳",
    label: "Automated Billing & Payment Alerts",
    desc: "Instantly send digital bills and easy payment links to customers via WhatsApp after every service."
  },
  {
    icon: "🤝",
    label: "Customer Retention Automation",
    desc: "Reconnect with previous customers through automated personalized offers and birthday wishes."
  },
  {
    icon: "⭐",
    label: "Review & Feedback Collection Systems",
    desc: "Automatically collect Google reviews and feedback after every service to build trust."
  },
  {
    icon: "🧾",
    label: "Custom Billing & Inventory Software",
    desc: "Powerful desktop and web-based software to manage your sales, stock, and business reports with ease."
  },
  {
    icon: "🌐",
    label: "Static & Dynamic Website Development",
    desc: "Fast, secure, and mobile-responsive websites designed to showcase your business and grow your online presence."
  },
];

const businessIdealFor = [
  "Salons & Clinics",
  "Gyms & Fitness",
  "Restaurants",
  "Tuition Centers",
  "Service Centers",
  "Retail Shops",
  "Real Estate Brokers",
];

const educationSolutions = [
  {
    icon: "🏫",
    label: "Automated School Admission & Attendance",
    desc: "Simplify school admissions and track daily student attendance with automated systems."
  },
  {
    icon: "🎓",
    label: "College Fee & Student Record Management",
    desc: "Manage fee collection and maintain comprehensive student academic records digitally."
  },
  {
    icon: "🏢",
    label: "Coaching Institute Placement & Scheduling Platform",
    desc: "Organize class batches and track student placement progress in one specialized tool."
  },
  {
    icon: "💼",
    label: "Job Seeker Career & Interview Preparation Tool",
    desc: "Structured tools for career guidance and interview prep for students looking for jobs."
  },
  {
    icon: "🤖",
    label: "AI Chatbot Support & Workflow Automation",
    desc: "Handle common student queries and automate repetitive administrative tasks with AI."
  },
  {
    icon: "🏨",
    label: "Hostel & Mess Management System",
    desc: "Efficiently manage student room allocations, mess billings and entry/exit logs digitally."
  },
  {
    icon: "🚀",
    label: "Customized College Projects",
    desc: "High-quality software project builds for college students with full documentation and support."
  },
];

const educationCovers = [
  "Schools",
  "Colleges",
  "Coaching Centers",
  "Training Institutes",
  "Job-Focused Programs",
];

const FlowItem = ({
  icon,
  label,
  desc,
  color,
}: {
  icon: string;
  label: string;
  desc?: string;
  color: "blue" | "green";
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`group flex flex-col gap-2 px-4 py-2.5 rounded-xl border bg-white transition-all duration-300 cursor-pointer hover:shadow-md ${isOpen
        ? (color === "blue" ? "border-blue/50 ring-1 ring-blue/5" : "border-green/50 ring-1 ring-green/5")
        : (color === "blue" ? "border-blue/20" : "border-green/20")
        } ${!isOpen && "hover:-translate-y-0.5"}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-base leading-none shrink-0">{icon}</span>
        <span className="text-[13px] font-semibold text-foreground leading-tight flex-1">{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-90" : ""}`}
        >
          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Expandable description */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-[11px] text-muted-foreground leading-relaxed pt-1.5 border-t border-border/50">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const TagPill = ({
  label,
  color,
}: {
  label: string;
  color: "blue" | "green";
}) => (
  <span
    className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium border ${color === "blue"
      ? "bg-blue/8 border-blue/20 text-blue"
      : "bg-green/8 border-green/20 text-green"
      }`}
  >
    {label}
  </span>
);



const HeroSection = ({ onBookDemo }: { onBookDemo: () => void }) => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(217 91% 97%) 0%, hsl(0 0% 100%) 50%, hsl(152 69% 96%) 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "hsl(217 91% 60%)" }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "hsl(152 69% 50%)" }}
      />

      {/* Top badge */}
      <div className="relative z-10 pt-10 flex justify-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-border shadow-sm text-sm font-semibold text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
          Workflow Automation Specialist
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-10 pb-6">

        {/* Headline */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
            Hi, I'm <span className="text-blue">Jay</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-justify px-2">
            I'm a{" "}
            <span className="font-semibold text-foreground">Workflow Automation Specialist</span>{" "}
            dedicated to transforming how{" "}
            <span className="font-semibold text-blue">local businesses</span>{" "}
            and{" "}
            <span className="font-semibold text-green">education</span>{" "}
            operate. My goal is to save you{" "}
            <span className="font-bold text-blue">20+ hours every week</span>,{" "}
            allowing you to focus on{" "}
            <span className="font-semibold text-green">growth</span>{" "}
            while my systems{" "}
            <span className="font-semibold text-green">handle the rest</span>{" "}
            - no technical expertise required.
          </p>
        </div>

        {/* Split Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* ── Business Card ── */}
          <div className="rounded-2xl border border-blue/20 bg-white shadow-lg p-6 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300">

            {/* Card header */}
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue/10 flex items-center justify-center text-2xl shrink-0">
                🏢
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-blue uppercase tracking-widest mb-0.5">
                  🔹 Business Automation Solutions
                </p>
                <p className="text-sm text-muted-foreground leading-snug">
                  I help local & growing businesses streamline customer management and daily operations.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-blue/10" />

            {/* Core Solutions */}
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2.5">
                Core Solutions
              </p>
              <div className="flex flex-col gap-2">
                {businessSolutions.map((item) => (
                  <FlowItem key={item.label} icon={item.icon} label={item.label} desc={item.desc} color="blue" />
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2.5">
                Ideal For
              </p>
              <div className="flex flex-wrap gap-2">
                {businessIdealFor.map((tag) => (
                  <TagPill key={tag} label={tag} color="blue" />
                ))}
                <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium border border-blue/10 bg-blue/5 text-muted-foreground">
                  & more
                </span>
              </div>
            </div>

          </div>

          {/* ── Education Card ── */}
          <div className="rounded-2xl border border-green/20 bg-white shadow-lg p-6 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300">

            {/* Card header */}
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-green/10 flex items-center justify-center text-2xl shrink-0">
                🎓
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "hsl(152 69% 36%)" }}>
                  🎓 Education Automation Solutions
                </p>
                <p className="text-sm text-muted-foreground leading-snug text-justify">
                  I design structured systems for schools, colleges & training institutes to manage their complete workflow.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-green/10" />

            {/* Education Suite */}
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2.5">
                Education Workflow Automation Suite
              </p>
              <div className="flex flex-col gap-2">
                {educationSolutions.map((item) => (
                  <FlowItem key={item.label} icon={item.icon} label={item.label} desc={item.desc} color="green" />
                ))}
              </div>
            </div>

            {/* Covers */}
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-2.5">
                Covers
              </p>
              <div className="flex flex-wrap gap-2">
                {educationCovers.map((tag) => (
                  <TagPill key={tag} label={tag} color="green" />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center justify-center gap-2 bg-blue text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue/25 hover:shadow-xl hover:shadow-blue/35 hover:-translate-y-0.5 transition-all duration-300"
          >
            🗓️ Book a Demo Session
          </button>
        </div>

        {/* Trust pills */}
        <div className="mt-7 flex flex-wrap justify-center gap-5 text-xs text-muted-foreground">
          {[
            "✅ No technical skills needed",
            "⚡ Setup in days, not months",
            "🔒 Your data stays private",
          ].map((item) => (
            <span key={item} className="font-medium">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
