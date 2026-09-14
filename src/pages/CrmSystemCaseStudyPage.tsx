import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import {
  ArrowLeft,
  ChevronRight,
  Briefcase,
  Users,
  Kanban,
  Activity,
  Zap,
} from "lucide-react";

const CrmSystemCaseStudyPage: React.FC = () => {
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
            <span className="font-bold text-foreground truncate">CRM Management System</span>
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
            CASE STUDY • ENTERPRISE CUSTOM CRM
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              CRM Management <span className="text-blue">System</span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-foreground/85 leading-relaxed max-w-6xl">
              Tailored enterprise CRM platform built to manage sales deal pipelines, lead intake, interaction histories, deal stages, and account management.
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            {["Custom CRM", "Drag-and-Drop Kanban", "Lead Intake Webhooks", "Activity Timeline", "Sales Analytics"].map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-white border border-blue-200/80 text-blue font-bold text-xs shadow-2xs">
                {badge}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-b border-border/70 py-5 w-full text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">My Role</span>
              <p className="text-xs sm:text-sm font-bold text-foreground">Full-Stack Engineer</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Frontend</span>
              <p className="text-xs sm:text-sm font-bold text-foreground">Next.js + React + Tailwind</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Database</span>
              <p className="text-xs sm:text-sm font-bold text-blue">PostgreSQL + Redis</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Cost Savings</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-700">Replaced Expensive Saas Licenses</p>
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
            Generic commercial CRMs were bloated, difficult to customize, and required expensive user license tiers. This custom CRM Management System features a clean drag-and-drop deal pipeline, instant lead intake, chronological call/meeting activity logging, and conversion analytics.
          </p>
        </section>

        {/* CORE MODULES */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
              CRM CORE MODULES
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ● Optimistic UI Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 01</div>
              <h3 className="text-base font-bold text-foreground">Drag-and-Drop Kanban</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Visual sales pipeline board with optimistic UI updates and real-time deal stage transitions.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 02</div>
              <h3 className="text-base font-bold text-foreground">Lead Intake Directory</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Automated lead capture from web forms, manual imports, and webhook API integrations.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 03</div>
              <h3 className="text-base font-bold text-foreground">Interaction Timeline</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Chronological activity logging for sales calls, emails, notes, and task reminders.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 04</div>
              <h3 className="text-base font-bold text-foreground">Conversion Analytics</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Sales velocity reporting, win-rate analytics, and deal stage bottleneck diagnostic charts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue via-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            Build Tailored CRM & Pipeline Systems
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button onClick={openDemo} className="px-7 py-3.5 rounded-xl bg-white text-blue font-extrabold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all shadow-md cursor-pointer">
              Discuss Custom CRM →
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

export default CrmSystemCaseStudyPage;
