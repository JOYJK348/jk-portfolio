import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import {
  ArrowLeft,
  ChevronRight,
  Server,
  Database,
  ShieldCheck,
  Users,
  Activity,
  Key,
  Layers,
  Sparkles,
  Check,
  Building2,
  FileText,
  Workflow,
  Cpu,
} from "lucide-react";

const InternalErpCaseStudyPage: React.FC = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openDemo = () => setDemoOpen(true);

  return (
    <div className="min-h-screen surface-mint text-foreground font-sans flex flex-col">
      <Navbar onBookDemo={openDemo} />

      {/* BREADCRUMB HEADER */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-border/70 py-3.5 px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
          <div className="flex items-center gap-2 text-foreground/70">
            <button onClick={() => navigate("/")} className="hover:text-blue transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-border" />
            <button onClick={() => navigate("/work")} className="hover:text-blue transition-colors cursor-pointer">
              Case Studies
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-border" />
            <span className="font-bold text-foreground truncate">Internal ERP Platform</span>
          </div>

          <button
            onClick={() => navigate("/work")}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue/10 text-blue font-bold text-xs hover:bg-blue hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-14 space-y-12 sm:space-y-16">
        {/* HERO SECTION */}
        <section className="space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-mono font-extrabold text-blue uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
            CASE STUDY • INTERNAL ENTERPRISE PLATFORM
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Internal ERP <span className="text-blue">Platform</span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-foreground/85 leading-relaxed max-w-6xl">
              Centralized organizational operating system designed to handle staff records, internal department approvals, operational asset tracking, and audit compliance workflows.
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            {["Internal Business OS", "Multi-Department Workflow", "Automated Audit Logging", "Role-Based Access", "Asset Tracker"].map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-white border border-blue-200/80 text-blue font-bold text-xs shadow-2xs">
                {badge}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-b border-border/70 py-5 w-full text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">My Role</span>
              <p className="text-xs sm:text-sm font-bold text-foreground">Full-Stack Engineer & Architect</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Architecture</span>
              <p className="text-xs sm:text-sm font-bold text-foreground">React + Node.js + Express</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Database</span>
              <p className="text-xs sm:text-sm font-bold text-blue">PostgreSQL + Redis</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Efficiency</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-700">60% Operational Time Saved</p>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">01</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">EXECUTIVE OVERVIEW</h2>
          </div>
          <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal text-justify">
            Paper-based processes and manual spreadsheet tracking created delays, lost records, and compliance gaps during internal audits. The Internal ERP Platform centralizes employee directories, multi-stage approval requests, inventory records, and automated audit logging into one reliable workspace.
          </p>
        </section>

        {/* CORE MODULES */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
              CORE SYSTEM CAPABILITIES
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ● 100% Digital Audit Compliance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 01</div>
              <h3 className="text-base font-bold text-foreground">User & Staff Directory</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Centralized staff records, department mapping, role permissions, and active status tracking.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 02</div>
              <h3 className="text-base font-bold text-foreground">Multi-Tier Approval Engine</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Sequential sign-off workflows for department requests, equipment allocations, and internal approvals.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 03</div>
              <h3 className="text-base font-bold text-foreground">Asset & Inventory Tracker</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Real-time tracking of physical hardware, digital licenses, allocation history, and maintenance schedules.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 04</div>
              <h3 className="text-base font-bold text-foreground">Activity Audit Logging</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Immutable event stream logging every state change, document export, and user action for audit readiness.
              </p>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">02</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">OPERATIONAL WORKFLOW</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Request Intake", desc: "Staff submits internal request via structured digital form." },
              { step: "02", title: "Department Routing", desc: "Automated routing to designated department heads." },
              { step: "03", title: "Sequential Approval", desc: "Multi-tier verification and sign-off flow." },
              { step: "04", title: "Audit Log Sync", desc: "Instant append to immutable digital audit history." },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-blue text-white font-mono font-bold text-xs flex items-center justify-center">{item.step}</span>
                  <span className="text-[10px] font-mono font-bold text-foreground/50 uppercase">Phase {idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-foreground/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue via-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            Need Custom Internal Enterprise Automation?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button onClick={openDemo} className="px-7 py-3.5 rounded-xl bg-white text-blue font-extrabold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all shadow-md cursor-pointer">
              Discuss Your Project →
            </button>
            <button onClick={() => navigate("/work")} className="px-7 py-3.5 rounded-xl bg-white/10 text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              Explore Other Work
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default InternalErpCaseStudyPage;
