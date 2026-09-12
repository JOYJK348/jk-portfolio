import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpertiseArea {
  id: string;
  title: string;
  shortDesc: string;
  focusItems: string[];
  accentBadgeStyle: string;
  accentCardStyle: string;
  accentTextStyle: string;
  activeHeaderStyle: string;
  renderVisual: () => React.ReactNode;
}

const expertiseData: ExpertiseArea[] = [
  {
    id: "01",
    title: "EDUCATION TECHNOLOGY & PRODUCTS",
    shortDesc: "Building digital products that make learning, teaching and education operations better.",
    focusItems: [
      "Education Platforms",
      "Learning Systems",
      "Assessment & Exam Platforms",
      "Student & Parent Experiences",
      "AI-Powered Learning",
      "Education SaaS",
    ],
    accentBadgeStyle: "bg-blue/15 text-blue border-blue/30",
    accentCardStyle: "from-blue-50/90 via-white/90 to-blue-100/70 border-blue-200/80 shadow-blue/5",
    accentTextStyle: "text-blue",
    activeHeaderStyle: "bg-blue-50/90 border-l-4 border-l-blue border-blue-200/80 text-blue shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3 p-3.5 sm:p-5">
        {/* Visual Header */}
        <div className="flex items-center justify-between border-b border-blue-200/60 pb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-blue tracking-wide uppercase">EdTech Diagnostic UI</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-blue/10 text-blue border border-blue/20">
            ZHI & NEET Platform
          </span>
        </div>

        {/* Live Learning Analytics Preview */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/90 rounded-xl p-2 sm:p-2.5 border border-blue-100 shadow-xs flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-foreground/60 uppercase tracking-wider">AI Student Mastery</span>
            <span className="text-base sm:text-lg font-bold text-blue">94.8%</span>
            <div className="w-full bg-blue-100 h-1.5 rounded-full overflow-hidden mt-0.5">
              <div className="bg-blue h-full rounded-full w-[94.8%]" />
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-2 sm:p-2.5 border border-blue-100 shadow-xs flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-foreground/60 uppercase tracking-wider">Exam Questions</span>
            <span className="text-base sm:text-lg font-bold text-foreground">12,450+</span>
            <span className="text-[9px] font-semibold text-emerald-600">Adaptive AI Active</span>
          </div>
        </div>

        {/* Active Quiz Session UI Mock */}
        <div className="bg-white/95 rounded-xl p-2.5 sm:p-3 border border-blue-100 shadow-xs flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs gap-1">
            <span className="font-bold text-foreground truncate">Gamified Quiz Drill: Physics & Biology</span>
            <span className="text-[9px] font-bold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-full shrink-0">Learn While Playing</span>
          </div>
          <div className="p-2 bg-blue-50/60 rounded-lg border border-blue-100 text-[11px] sm:text-xs text-foreground/90 font-medium">
            "Interactive drill engine delivering diagnostic feedback & explanation cards."
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "02",
    title: "AI & AI AGENTS",
    shortDesc: "Building intelligent systems and AI agents that can understand information, assist people and take useful actions.",
    focusItems: [
      "AI Applications",
      "AI Agents",
      "Intelligent Workflows",
      "RAG & Knowledge Systems",
      "AI Assistants",
      "Multi-Agent Systems",
    ],
    accentBadgeStyle: "bg-indigo-500/15 text-indigo-700 border-indigo-500/30",
    accentCardStyle: "from-indigo-50/90 via-white/90 to-purple-100/70 border-indigo-200/80 shadow-indigo/5",
    accentTextStyle: "text-indigo-700",
    activeHeaderStyle: "bg-indigo-50/90 border-l-4 border-l-indigo-600 border-indigo-200/80 text-indigo-700 shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3 p-3.5 sm:p-5">
        {/* Visual Header */}
        <div className="flex items-center justify-between border-b border-indigo-200/60 pb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-indigo-700 tracking-wide uppercase">AI Agent Graph</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 border border-indigo-200">
            Multi-Agent Node Architecture
          </span>
        </div>

        {/* Execution Flow Mock */}
        <div className="flex flex-col gap-2">
          <div className="bg-white/90 rounded-xl p-2 sm:p-2.5 border border-indigo-100 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-indigo-100 text-indigo-700 text-[10px] sm:text-xs font-bold flex items-center justify-center">1</span>
              <span className="text-xs font-bold text-foreground">User Intent & Prompt Parser</span>
            </div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Passed</span>
          </div>

          <div className="bg-white/90 rounded-xl p-2 sm:p-2.5 border border-indigo-200 shadow-xs flex items-center justify-between relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600" />
            <div className="flex items-center gap-2 pl-1">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-indigo-600 text-white text-[10px] sm:text-xs font-bold flex items-center justify-center">2</span>
              <span className="text-xs font-bold text-indigo-900">RAG Vector Context Retrieval</span>
            </div>
            <span className="text-[9px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded animate-pulse">Running</span>
          </div>

          <div className="bg-white/90 rounded-xl p-2 sm:p-2.5 border border-indigo-100 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-indigo-100 text-indigo-700 text-[10px] sm:text-xs font-bold flex items-center justify-center">3</span>
              <span className="text-xs font-bold text-foreground truncate">Agent Tool Synthesis</span>
            </div>
            <span className="text-[9px] font-bold text-muted-foreground bg-slate-100 px-1.5 py-0.5 rounded">Queued</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "03",
    title: "WORKFLOW AUTOMATION",
    shortDesc: "Turning repetitive business processes into connected, smarter workflows.",
    focusItems: [
      "Business Workflows",
      "Process Automation",
      "Notifications & Follow-ups",
      "WhatsApp Automation",
      "System Integrations",
      "Operational Automation",
    ],
    accentBadgeStyle: "bg-emerald-500/15 text-emerald-800 border-emerald-500/30",
    accentCardStyle: "from-emerald-50/90 via-white/90 to-teal-100/70 border-emerald-200/80 shadow-emerald/5",
    accentTextStyle: "text-emerald-800",
    activeHeaderStyle: "bg-emerald-50/90 border-l-4 border-l-emerald-600 border-emerald-200/80 text-emerald-800 shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3 p-3.5 sm:p-5">
        {/* Visual Header */}
        <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-emerald-800 tracking-wide uppercase">WhatsApp Automation Engine</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
            Real-time Pipeline
          </span>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-white/95 rounded-xl p-2.5 sm:p-3 border border-emerald-100 shadow-xs flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-600 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center">WA</div>
              <span className="text-xs font-bold text-foreground">WhatsApp API Webhook</span>
            </div>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Active</span>
          </div>
          <p className="text-[11px] sm:text-xs text-foreground/80 font-normal leading-snug bg-emerald-50/60 p-2 rounded border border-emerald-100">
            Auto-parsing lead details → Creating CRM record → Instant WhatsApp auto-responder sequence.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "04",
    title: "PRODUCT ENGINEERING",
    shortDesc: "Taking digital products from idea to production with a focus on scalable and maintainable systems.",
    focusItems: [
      "SaaS Products",
      "Web Platforms",
      "APIs & Backend Systems",
      "Multi-Tenant Architecture",
      "Product Development",
      "Deployment & Production",
    ],
    accentBadgeStyle: "bg-blue/15 text-blue border-blue/30",
    accentCardStyle: "from-slate-50/90 via-white/90 to-blue-100/70 border-blue-200/80 shadow-blue/5",
    accentTextStyle: "text-blue",
    activeHeaderStyle: "bg-blue-50/90 border-l-4 border-l-blue border-blue-200/80 text-blue shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3 p-3.5 sm:p-5">
        {/* Visual Header */}
        <div className="flex items-center justify-between border-b border-blue-200/60 pb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-blue tracking-wide uppercase">Multi-Tenant Stack</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-blue/10 text-blue border border-blue/20">
            Production Spec
          </span>
        </div>

        {/* Stack Layers Mock */}
        <div className="flex flex-col gap-2">
          <div className="bg-white/95 rounded-xl p-2 sm:p-2.5 border border-blue-100 shadow-xs flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold text-blue bg-blue/10 px-2 py-0.5 rounded">Frontend</span>
            <span className="text-xs font-semibold text-foreground">React / Vite / Tailwind UI</span>
          </div>
          <div className="bg-white/95 rounded-xl p-2 sm:p-2.5 border border-blue-200 shadow-xs flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold text-blue bg-blue/10 px-2 py-0.5 rounded">API Gateway</span>
            <span className="text-xs font-semibold text-foreground">Multi-Tenant Middleware</span>
          </div>
          <div className="bg-white/95 rounded-xl p-2 sm:p-2.5 border border-blue-100 shadow-xs flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-bold text-blue bg-blue/10 px-2 py-0.5 rounded">Database</span>
            <span className="text-xs font-semibold text-foreground">PostgreSQL / Redis Isolated</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "05",
    title: "BUSINESS & DIGITAL SYSTEMS",
    shortDesc: "Building connected technology that helps businesses and teams manage their everyday work better.",
    focusItems: [
      "Business Platforms",
      "ERP / CRM / LMS",
      "Dashboards",
      "Internal Tools",
      "Management Systems",
      "Digital Transformation",
    ],
    accentBadgeStyle: "bg-amber-500/15 text-amber-800 border-amber-500/30",
    accentCardStyle: "from-amber-50/90 via-white/90 to-emerald-100/70 border-amber-200/80 shadow-amber/5",
    accentTextStyle: "text-amber-800",
    activeHeaderStyle: "bg-amber-50/90 border-l-4 border-l-amber-600 border-amber-200/80 text-amber-800 shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3 p-3.5 sm:p-5">
        {/* Visual Header */}
        <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-amber-800 tracking-wide uppercase">Unified ERP & LMS</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
            Durkkas Platform
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/95 rounded-xl p-2 sm:p-2.5 border border-amber-100 shadow-xs flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-muted-foreground uppercase">Scope</span>
            <span className="text-sm sm:text-base font-bold text-amber-900">Active Orgs</span>
          </div>
          <div className="bg-white/95 rounded-xl p-2 sm:p-2.5 border border-amber-100 shadow-xs flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-muted-foreground uppercase">Sync</span>
            <span className="text-sm sm:text-base font-bold text-foreground">ERP + LMS</span>
          </div>
        </div>
      </div>
    ),
  },
];

const ExpertiseSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>("01");

  const toggleAccordion = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setTimeout(() => {
        const el = document.getElementById(`expertise-item-${id}`);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 120);
    }
  };

  return (
    <section
      id="expertise"
      className="relative w-full surface-mint text-foreground px-4 sm:px-10 lg:px-16 xl:px-24 py-6 md:py-10 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-7xl lg:max-w-[1500px] mx-auto flex flex-col gap-6 sm:gap-10">
        
        {/* ── COMPACT HEADER BLOCK ── */}
        <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-[11px] sm:text-xs font-bold text-blue uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            EXPERTISE
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight max-w-4xl">
            What I Do <span className="text-blue">Best.</span>
          </h2>

          <p className="text-xs sm:text-base font-semibold text-foreground/80 leading-relaxed max-w-3xl px-2">
            I work across technology, intelligence and automation to build practical solutions for real-world needs.
          </p>
        </div>

        {/* ── COLLAPSIBLE ACCORDION ROWS ── */}
        <div className="flex flex-col divide-y divide-border/60 border-y border-border/60 bg-white/40 rounded-2xl p-1.5 sm:p-3 shadow-xs backdrop-blur-xs">
          {expertiseData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                id={`expertise-item-${item.id}`}
                className="transition-all duration-200 overflow-hidden scroll-mt-24"
              >
                {/* 1-Line Accordion Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full py-3.5 px-3 sm:px-5 flex items-center justify-between gap-3 text-left rounded-xl transition-all duration-200 cursor-pointer ${
                    isOpen ? item.activeHeaderStyle : "bg-white/40 hover:bg-white/80 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <span
                      className={`text-base sm:text-xl font-bold font-mono tracking-tighter shrink-0 transition-colors ${
                        isOpen ? item.accentTextStyle : "text-foreground/40"
                      }`}
                    >
                      {item.id}
                    </span>
                    <h3
                      className={`text-xs sm:text-base font-bold tracking-tight uppercase leading-snug truncate sm:whitespace-normal transition-colors ${
                        isOpen ? "text-foreground" : "text-foreground/85"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-xs font-bold transition-colors hidden sm:inline-block ${
                        isOpen ? item.accentTextStyle : "text-muted-foreground"
                      }`}
                    >
                      {isOpen ? "Collapse" : "Explore"}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-white border-blue-300 shadow-2xs"
                          : "bg-white/90 border-border/80 text-foreground/50 group-hover:border-blue/30"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? `${item.accentTextStyle} rotate-180` : "text-foreground/60"
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content Body (Expands when isOpen) */}
                {isOpen && (
                  <div className="px-3 sm:px-5 pb-4 pt-3 animate-in fade-in-50 duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                      
                      {/* Left: Description & Focus Tags */}
                      <div className="md:col-span-6 flex flex-col gap-2.5">
                        <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-normal">
                          {item.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {item.focusItems.map((focus, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] sm:text-[11px] font-medium bg-white text-foreground border border-blue-200/70 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-2xs"
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Compact Visual Preview Pane */}
                      <div className="md:col-span-6 mt-1 md:mt-0">
                        <div
                          className={`rounded-xl border backdrop-blur-sm bg-gradient-to-br ${item.accentCardStyle}`}
                        >
                          {item.renderVisual()}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
