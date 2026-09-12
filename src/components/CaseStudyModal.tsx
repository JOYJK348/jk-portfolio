import React, { useState } from "react";
import {
  X,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  Globe,
  ShieldCheck,
  Server,
  Zap,
  ExternalLink,
  Code,
  Layout,
  Workflow,
  Sparkles,
} from "lucide-react";

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  categoryBadges: string[];
  model: string;
  overview: string;
  targetAudience: string;
  challenge: string;
  approach: string;
  whatIBuilt: string[];
  howItWorks: { step: string; title: string; desc: string }[];
  systemArchitecture: {
    frontend: string;
    backend: string;
    database: string;
    storage: string;
    ai?: string;
    infrastructure: string;
  };
  technicalImplementation: {
    title: string;
    description: string;
  }[];
  myRole: string[];
  outcomes: string[];
  galleryScreenshots?: { label: string; url?: string; description: string }[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyData | null;
  onBookDemo: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  caseStudy,
  onBookDemo,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "implementation" | "outcomes">("overview");

  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-900/80 backdrop-blur-md animate-in fade-in-50 duration-200 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-border shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col font-sans">
        
        {/* ── MODAL HEADER BAR ── */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue text-white uppercase tracking-wider shrink-0">
              CASE STUDY
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white truncate tracking-tight">
              {caseStudy.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── MODAL BODY CONTAINER (SCROLLABLE) ── */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* 1. HERO TITLE & BADGES BLOCK */}
          <div className="space-y-4 border-b border-border/60 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {caseStudy.categoryBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue/10 border border-blue/20 rounded-full text-xs font-bold text-blue uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
              <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
                Role: {caseStudy.role}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed font-normal">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* 2. NAVIGATION TABS */}
          <div className="flex items-center gap-2 border-b border-border overflow-x-auto no-scrollbar pb-1">
            {[
              { id: "overview", label: "01 Overview & Challenge" },
              { id: "architecture", label: "02 System Architecture" },
              { id: "implementation", label: "03 Technical Implementation" },
              { id: "outcomes", label: "04 Role & Outcomes" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue text-white shadow-xs"
                    : "text-foreground/70 hover:text-blue hover:bg-blue/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── TAB 1: OVERVIEW & CHALLENGE ── */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in-50 duration-200">
              {/* Overview & Audience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-blue font-bold text-xs uppercase tracking-wider">
                    <Globe className="w-4 h-4" />
                    <span>Project Overview</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {caseStudy.overview}
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-blue font-bold text-xs uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>Target Audience</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {caseStudy.targetAudience}
                  </p>
                </div>
              </div>

              {/* Challenge & Approach */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    The Challenge
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed bg-red-50/50 p-4 rounded-xl border border-red-100">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue" />
                    The Approach & Strategy
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed bg-blue/5 p-4 rounded-xl border border-blue/10">
                    {caseStudy.approach}
                  </p>
                </div>
              </div>

              {/* What I Built (Modules) */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue" />
                  What I Built & Developed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.whatIBuilt.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-border/80 rounded-xl flex items-start gap-2.5 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-foreground/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works Workflow */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-blue" />
                  How It Works (System Workflow)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {caseStudy.howItWorks.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col gap-2 relative"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue text-white text-xs font-mono font-extrabold flex items-center justify-center">
                        {step.step}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-foreground/75 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 2: SYSTEM ARCHITECTURE ── */}
          {activeTab === "architecture" && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue" />
                  System Architecture Breakdown
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  End-to-end technology stack powering frontend, backend, data, storage, and infrastructure.
                </p>
              </div>

              {/* Architecture Stack Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-blue/5 border border-blue/20 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-blue font-bold text-xs uppercase tracking-wider">
                    <Layout className="w-4 h-4" />
                    <span>FRONTEND</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">
                    {caseStudy.systemArchitecture.frontend}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                    <Server className="w-4 h-4" />
                    <span>BACKEND & APIS</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">
                    {caseStudy.systemArchitecture.backend}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                    <Database className="w-4 h-4" />
                    <span>DATABASE & CACHE</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">
                    {caseStudy.systemArchitecture.database}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>STORAGE & MEDIA</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">
                    {caseStudy.systemArchitecture.storage}
                  </p>
                </div>

                {caseStudy.systemArchitecture.ai && (
                  <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>AI & INTELLIGENCE</span>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-foreground">
                      {caseStudy.systemArchitecture.ai}
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>INFRASTRUCTURE & DEPLOY</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-foreground">
                    {caseStudy.systemArchitecture.infrastructure}
                  </p>
                </div>
              </div>

              {/* Dataflow Banner */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 font-mono text-blue font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" />
                  <span>Data & Request Flow</span>
                </div>
                <span className="font-mono text-slate-300 text-[11px] sm:text-xs">
                  Client Request → CDN Edge → API Gateway → RBAC Middleware → DB Transaction → Event Trigger
                </span>
              </div>
            </div>
          )}

          {/* ── TAB 3: TECHNICAL IMPLEMENTATION ── */}
          {activeTab === "implementation" && (
            <div className="space-y-4 animate-in fade-in-50 duration-200">
              <div className="flex flex-col gap-1">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue" />
                  Technical Implementation Details
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Engineering specs covering database schemas, security, multi-tenancy, and API design.
                </p>
              </div>

              <div className="space-y-3 divide-y divide-border/60 border-t border-b border-border/70">
                {caseStudy.technicalImplementation.map((item, idx) => (
                  <div key={idx} className="pt-3 pb-3 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                      <h4 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed pl-3.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TAB 4: MY ROLE & OUTCOMES ── */}
          {activeTab === "outcomes" && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              {/* My Role */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue" />
                  My Specific Engineering Role
                </h3>
                <div className="space-y-2">
                  {caseStudy.myRole.map((rolePoint, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue/10 text-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                        {rolePoint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Outcomes */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue" />
                  Real Outcomes & Delivery Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caseStudy.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-xl flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ── MODAL FOOTER CTA BAR ── */}
        <div className="sticky bottom-0 z-20 bg-slate-100 px-6 sm:px-8 py-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span>Ready to build something similar?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-bold text-foreground/80 hover:text-foreground hover:bg-slate-200 transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDemo();
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-blue text-white hover:bg-blue-700 transition-all shadow-md shadow-blue/20 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyModal;
