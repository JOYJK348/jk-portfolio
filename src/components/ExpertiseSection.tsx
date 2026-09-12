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
    shortDesc: "Interactive foundation platforms, AI exam simulation engines, and real-time student analytics.",
    focusItems: [
      "Adaptive Testing",
      "Gamified Learning",
      "Multi-Tenant SaaS",
      "Analytics Hub",
    ],
    accentBadgeStyle: "bg-blue/15 text-blue border-blue/30",
    accentCardStyle: "from-blue-50/90 via-white/95 to-blue-100/70 border-blue-200/80 shadow-blue/5",
    accentTextStyle: "text-blue",
    activeHeaderStyle: "bg-blue-50/90 border-l-4 border-l-blue border-blue-200/80 text-blue shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3.5 p-4 sm:p-5">
        {/* Visual Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-blue-200/60 pb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-blue tracking-wide uppercase">Learning Analytics UI</span>
          </div>
          <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20">
            EdTech Platform
          </span>
        </div>

        {/* Live Learning Analytics Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/95 rounded-xl p-3 border border-blue-100 shadow-2xs flex flex-col gap-1">
            <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">Student Mastery</span>
            <span className="text-lg sm:text-xl font-extrabold text-blue">94%</span>
            <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden mt-1">
              <div className="bg-blue h-full rounded-full w-[94%]" />
            </div>
          </div>
          <div className="bg-white/95 rounded-xl p-3 border border-blue-100 shadow-2xs flex flex-col gap-1">
            <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider">Active Drills</span>
            <span className="text-lg sm:text-xl font-extrabold text-foreground">10,000+</span>
            <span className="text-xs font-bold text-emerald-600">Adaptive AI Live</span>
          </div>
        </div>

        {/* Active Quiz Session UI Mock */}
        <div className="bg-white/95 rounded-xl p-3 border border-blue-100 shadow-2xs flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm gap-1.5">
            <span className="font-bold text-foreground">Interactive Assessment Engine</span>
            <span className="text-xs font-bold text-purple-700 bg-purple-100/90 px-2.5 py-0.5 rounded-full shrink-0">Gamified Drills</span>
          </div>
          <div className="p-2.5 bg-blue-50/70 rounded-lg border border-blue-100 text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
            "Real-time diagnostic scoring & instant feedback loops."
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "02",
    title: "AI & AI AGENTS",
    shortDesc: "Autonomous AI agents, RAG vector context search, and intelligent workflow automation.",
    focusItems: [
      "AI Agents",
      "RAG Search",
      "LLM Pipelines",
      "Smart Workflows",
    ],
    accentBadgeStyle: "bg-indigo-500/15 text-indigo-700 border-indigo-500/30",
    accentCardStyle: "from-indigo-50/90 via-white/95 to-purple-100/70 border-indigo-200/80 shadow-indigo/5",
    accentTextStyle: "text-indigo-700",
    activeHeaderStyle: "bg-indigo-50/90 border-l-4 border-l-indigo-600 border-indigo-200/80 text-indigo-700 shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3.5 p-4 sm:p-5">
        {/* Visual Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-indigo-200/60 pb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-indigo-700 tracking-wide uppercase">AI Agent Workflow</span>
          </div>
          <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
            Autonomous Graph
          </span>
        </div>

        {/* Execution Flow Mock */}
        <div className="flex flex-col gap-2.5">
          <div className="bg-white/95 rounded-xl p-3 border border-indigo-100 shadow-2xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <span className="text-xs sm:text-sm font-bold text-foreground">Intent Parser</span>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">Active</span>
          </div>

          <div className="bg-white/95 rounded-xl p-3 border border-indigo-300 shadow-xs flex items-center justify-between gap-2 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-600" />
            <div className="flex items-center gap-2.5 pl-1.5">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <span className="text-xs sm:text-sm font-bold text-indigo-950">RAG Context Search</span>
            </div>
            <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full animate-pulse shrink-0">Processing</span>
          </div>

          <div className="bg-white/95 rounded-xl p-3 border border-indigo-100 shadow-2xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <span className="text-xs sm:text-sm font-bold text-foreground">Action Execution</span>
            </div>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">Queued</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "03",
    title: "WORKFLOW AUTOMATION",
    shortDesc: "Automating business processes through event triggers, webhooks, and messaging APIs.",
    focusItems: [
      "Process Automation",
      "Webhook Triggers",
      "API Integration",
      "Event Pipelines",
    ],
    accentBadgeStyle: "bg-emerald-500/15 text-emerald-800 border-emerald-500/30",
    accentCardStyle: "from-emerald-50/90 via-white/95 to-teal-100/70 border-emerald-200/80 shadow-emerald/5",
    accentTextStyle: "text-emerald-800",
    activeHeaderStyle: "bg-emerald-50/90 border-l-4 border-l-emerald-600 border-emerald-200/80 text-emerald-800 shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3.5 p-4 sm:p-5">
        {/* Visual Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-emerald-200/60 pb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-emerald-800 tracking-wide uppercase">Automation Engine</span>
          </div>
          <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            Live Pipeline
          </span>
        </div>

        {/* WhatsApp / Automation Card */}
        <div className="bg-white/95 rounded-xl p-3 border border-emerald-100 shadow-2xs flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">API</div>
              <span className="text-xs sm:text-sm font-bold text-foreground">Event Webhook Trigger</span>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">Active</span>
          </div>
          <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
            Event intake → Data processing → Instant multi-channel alert.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "04",
    title: "PRODUCT ENGINEERING",
    shortDesc: "End-to-end full-stack web products, robust backend APIs, and cloud deployments.",
    focusItems: [
      "Full-Stack Apps",
      "REST APIs",
      "Database Systems",
      "Cloud Hosting",
    ],
    accentBadgeStyle: "bg-blue/15 text-blue border-blue/30",
    accentCardStyle: "from-slate-50/90 via-white/95 to-blue-100/70 border-blue-200/80 shadow-blue/5",
    accentTextStyle: "text-blue",
    activeHeaderStyle: "bg-blue-50/90 border-l-4 border-l-blue border-blue-200/80 text-blue shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3.5 p-4 sm:p-5">
        {/* Visual Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-blue-200/60 pb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-blue tracking-wide uppercase">System Architecture</span>
          </div>
          <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20">
            Full Stack
          </span>
        </div>

        {/* Stack Layers Mock */}
        <div className="flex flex-col gap-2">
          <div className="bg-white/95 rounded-xl p-2.5 border border-blue-100 shadow-2xs flex items-center justify-between">
            <span className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-0.5 rounded-md">Frontend UI</span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">React & Modern Frameworks</span>
          </div>
          <div className="bg-white/95 rounded-xl p-2.5 border border-blue-200 shadow-2xs flex items-center justify-between">
            <span className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-0.5 rounded-md">Backend API</span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">REST & Microservices</span>
          </div>
          <div className="bg-white/95 rounded-xl p-2.5 border border-blue-100 shadow-2xs flex items-center justify-between">
            <span className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-0.5 rounded-md">Database</span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Relational & Caching Stores</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "05",
    title: "BUSINESS & DIGITAL SYSTEMS",
    shortDesc: "Connected digital tools and management systems for team operations, ERP, and CRM.",
    focusItems: [
      "Business ERP",
      "CRM Pipelines",
      "LMS Platforms",
      "Team Dashboards",
    ],
    accentBadgeStyle: "bg-amber-500/15 text-amber-800 border-amber-500/30",
    accentCardStyle: "from-amber-50/90 via-white/95 to-emerald-100/70 border-amber-200/80 shadow-amber/5",
    accentTextStyle: "text-amber-800",
    activeHeaderStyle: "bg-amber-50/90 border-l-4 border-l-amber-600 border-amber-200/80 text-amber-800 shadow-xs",
    renderVisual: () => (
      <div className="flex flex-col gap-3.5 p-4 sm:p-5">
        {/* Visual Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-amber-200/60 pb-2.5 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-amber-800 tracking-wide uppercase">Business OS Engine</span>
          </div>
          <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            Digital OS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white/95 rounded-xl p-3 border border-amber-100 shadow-2xs flex flex-col gap-0.5">
            <span className="text-xs font-bold text-muted-foreground uppercase">Core Modules</span>
            <span className="text-base sm:text-lg font-bold text-amber-900">ERP • CRM • LMS</span>
          </div>
          <div className="bg-white/95 rounded-xl p-3 border border-amber-100 shadow-2xs flex flex-col gap-0.5">
            <span className="text-xs font-bold text-muted-foreground uppercase">Data Sync</span>
            <span className="text-base sm:text-lg font-bold text-foreground">Real-Time Sync</span>
          </div>
        </div>
      </div>
    ),
  },
];

const ExpertiseSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

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
      className="relative w-full surface-mint text-foreground px-4 sm:px-10 lg:px-16 xl:px-24 py-8 md:py-14 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center"
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
                  className={`w-full py-4 px-3.5 sm:px-6 flex items-center justify-between gap-3 text-left rounded-xl transition-all duration-200 cursor-pointer ${
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
                      className={`text-xs font-extrabold uppercase tracking-wider transition-colors hidden sm:inline-block ${
                        isOpen ? item.accentTextStyle : "text-muted-foreground"
                      }`}
                    >
                      {isOpen ? "Close" : "Explore"}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
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
                  <div className="px-2 sm:px-5 pb-5 pt-3 animate-in fade-in-50 duration-200">
                    <div className="bg-gradient-to-b from-white via-white/95 to-blue-50/40 rounded-2xl border border-blue-200/80 p-4 sm:p-6 shadow-sm flex flex-col gap-5">
                      
                      {/* Top Row: Description & Focus Tags */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
                          <span className="text-xs font-extrabold text-blue tracking-wider uppercase">
                            CORE CAPABILITIES
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium text-justify">
                          {item.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.focusItems.map((focus, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-bold bg-white text-blue-900 border border-blue-200/90 px-3 py-1 rounded-lg shadow-2xs hover:bg-blue hover:text-white transition-colors"
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Row: Visual Demo Card */}
                      <div className="w-full pt-2 border-t border-blue-100">
                        <div
                          className={`rounded-xl border backdrop-blur-sm bg-gradient-to-br ${item.accentCardStyle} shadow-2xs overflow-hidden`}
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
