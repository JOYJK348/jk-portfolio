import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Server,
  Database,
  Lock,
  BookOpen,
  Award,
  Users,
  CreditCard,
  Building2,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Check,
  Clock,
  Workflow,
  Briefcase,
  Layout,
  FileText,
  Activity,
  Cpu,
  Key,
} from "lucide-react";

const DurkkasCaseStudyPage: React.FC = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openDemo = () => setDemoOpen(true);

  return (
    <div className="min-h-screen surface-mint text-foreground font-sans flex flex-col">
      {/* GLOBAL NAVBAR */}
      <Navbar onBookDemo={openDemo} />

      {/* ── BREADCRUMB HEADER STRIP ── */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-border/70 py-3.5 px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full max-w-[1920px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
          <div className="flex items-center gap-2 text-foreground/70">
            <button
              onClick={() => navigate("/")}
              className="hover:text-blue transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-border" />
            <button
              onClick={() => navigate("/work")}
              className="hover:text-blue transition-colors cursor-pointer"
            >
              Case Studies
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-border" />
            <span className="font-bold text-foreground truncate">
              Durkkas Enterprise Platform
            </span>
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

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* ── 00. HERO HEADER BLOCK ── */}
        <section className="space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-mono font-extrabold text-blue uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
            OFFICIAL TECHNICAL WHITEPAPER • CASE STUDY REPORT
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Durkkas Enterprise <span className="text-blue">Platform</span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-foreground/85 leading-relaxed max-w-6xl">
              <strong className="text-foreground font-bold">Durkkas Enterprise Platform</strong> is a unified multi-tenant enterprise operating system built to streamline multi-organization business operations, staff workflows, customer CRM pipelines, and internal education.
            </p>
          </div>

          {/* Quick Badges Bar */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            {[
              "Enterprise ERP OS",
              "B2B Multi-Tenant",
              "ERP + LMS + CRM Unified",
              "Row-Level Security (RLS)",
              "Multi-Branch Control",
              "Role-Based Permission Matrix",
            ].map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white border border-blue-200/80 text-blue font-bold text-xs shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* High-Level Spec Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-b border-border/70 py-5 w-full text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">My Role</span>
              <p className="text-xs sm:text-sm font-bold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <Users className="w-4 h-4 text-blue shrink-0" />
                <span>Team Lead & Architect</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Architecture</span>
              <p className="text-xs sm:text-sm font-bold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <Server className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Next.js + NestJS Monorepo</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Database Tenancy</span>
              <p className="text-xs sm:text-sm font-bold text-blue flex items-center justify-center sm:justify-start gap-1.5">
                <Database className="w-4 h-4 text-blue shrink-0" />
                <span>PostgreSQL RLS Partitioning</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Impact</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center justify-center sm:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>4 Legacy Tools Unified into 1</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── 4 CORE MODULES QUICK MAP CARDS ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
              DURKKAS ENTERPRISE OS — 4 INTEGRATED CORE MODULES
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ● Multi-Tenant Kernel Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 01</div>
              <h3 className="text-base font-bold text-foreground">Enterprise ERP Core</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Multi-branch business operations, staff directories, asset tracking, and multi-tier purchase order approval pipelines.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 02</div>
              <h3 className="text-base font-bold text-foreground">LMS Training Hub</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Internal employee onboarding, skill certification pathways, course module delivery, and real-time mastery tracking.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 03</div>
              <h3 className="text-base font-bold text-foreground">CRM Pipeline Engine</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Lead intake webhooks, drag-and-drop sales Kanban boards, account interaction history timelines, and follow-up triggers.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 04</div>
              <h3 className="text-base font-bold text-foreground">Multi-Branch Admin HQ</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Tenant organization onboarding, fine-grained Role-Based Access Control (RBAC), and immutable security audit logging.
              </p>
            </div>
          </div>
        </section>

        {/* ── 01. EXECUTIVE SUMMARY & OVERVIEW ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              01
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              PROJECT OVERVIEW & EXECUTIVE SUMMARY
            </h2>
          </div>

          <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal text-justify">
            Operating multiple fragmented business tools — such as separate CRMs for sales, standalone ERPs for inventory, and distinct LMS platforms for staff training — creates data synchronization gaps, redundant software license expenses, and inefficient handoffs across departments. <strong className="text-foreground font-bold">Durkkas Enterprise Platform</strong> eliminates these silos by unifying all core business workflows into a single multi-tenant enterprise operating system.
          </p>

          {/* Unified Architectural Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-white to-white border border-blue-200/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue shrink-0" />
              <span>Unified Enterprise Operating System Philosophy</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed text-justify">
              <strong className="text-blue font-bold">Single Source of Truth:</strong> Employees, managers, and executives interact with a single normalized database schema where user identities, organization tenants, CRM leads, inventory records, and training modules share a unified permission and audit infrastructure.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Tools Unified</span>
              <p className="text-sm font-extrabold text-blue">4 into 1 OS</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Tenant Security</span>
              <p className="text-sm font-extrabold text-indigo-700">Postgres RLS</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Efficiency Gain</span>
              <p className="text-sm font-extrabold text-foreground">60% Faster</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Permission Control</span>
              <p className="text-sm font-extrabold text-foreground">Custom RBAC</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Audit Trail</span>
              <p className="text-sm font-extrabold text-blue">100% Digital</p>
            </div>
            <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Cross-Tenant Leak</span>
              <p className="text-sm font-extrabold text-emerald-700">0% Detected</p>
            </div>
          </div>
        </section>

        {/* ── 02. SYSTEM ARCHITECTURE & TENANCY ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              02
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              MULTI-TENANT ARCHITECTURE & SECURITY MATRIX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-3">
              <div className="text-blue font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Key className="w-4 h-4" /> Row-Level Security (RLS)
              </div>
              <h3 className="text-base font-bold text-foreground">PostgreSQL Row Partitioning</h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal text-justify">
                Every database table includes an <code className="text-blue font-bold">organization_id</code> column enforced at the kernel level via PostgreSQL RLS policies. Even raw SQL queries executed by developers cannot cross organization boundaries.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-3">
              <div className="text-indigo-700 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Fine-Grained RBAC Matrix
              </div>
              <h3 className="text-base font-bold text-foreground">Granular Department Permissions</h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal text-justify">
                Flexible permission matrix allowing custom role definitions (Executive, Branch Manager, Department Head, Staff Member) with feature-flag overrides per department.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-3">
              <div className="text-emerald-700 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> Immutable Audit Stream
              </div>
              <h3 className="text-base font-bold text-foreground">Real-Time Event Audit Logging</h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal text-justify">
                Automated database triggers and NestJS interceptors record every state mutation, data export, and login event into an append-only audit stream for complete compliance.
              </p>
            </div>
          </div>
        </section>

        {/* ── 03. HOW IT WORKS — OPERATIONAL WORKFLOW ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              03
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              OPERATIONAL WORKFLOW — STEP-BY-STEP JOURNEY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Tenant Onboarding",
                desc: "Super Admin creates organization workspace, sets subdomain, and provisions initial admin credentials.",
              },
              {
                step: "02",
                title: "Unified OS Access",
                desc: "Staff and managers access ERP inventory, LMS training, and CRM sales pipelines from a single dashboard.",
              },
              {
                step: "03",
                title: "Sequential Approval",
                desc: "Purchase orders and operational requests route automatically through department sign-off pipelines.",
              },
              {
                step: "04",
                title: "Real-Time Audit Sync",
                desc: "Completed business actions and training milestones log instantly into executive reporting dashboards.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-blue text-white font-mono font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-foreground/50 uppercase">Phase {idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-foreground/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04. SYSTEM ARCHITECTURE TOPOLOGY ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              04
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              SYSTEM ARCHITECTURE TOPOLOGY (NESTJS + POSTGRESQL)
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl space-y-6 font-mono text-xs shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-blue font-bold">CLIENT LAYER — UNIFIED DASHBOARD</span>
              <span className="text-slate-400 text-[10px]">Next.js App Router + Tailwind CSS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">ERP Operations</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">LMS Training Hub</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">CRM Kanban Board</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">Multi-Branch Admin</div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-3 pt-3">
              <span className="text-indigo-400 font-bold">BACKEND CORE — NESTJS MONOREPO</span>
              <span className="text-slate-400 text-[10px]">REST APIs + BullMQ + Redis</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">Auth & Identity</div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">Tenant Injector</div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">ERP Pipeline</div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">Audit Stream</div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-3 pt-3">
              <span className="text-emerald-400 font-bold">DATABASE & STORAGE KERNEL</span>
              <span className="text-slate-400 text-[10px]">PostgreSQL RLS + AWS S3</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-emerald-300">
                PostgreSQL RLS Partitioning
              </div>
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-blue-300">
                Redis Queue (BullMQ)
              </div>
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-purple-300">
                AWS S3 Document Vault
              </div>
            </div>
          </div>
        </section>

        {/* ── 05. CALL TO ACTION FOOTER ── */}
        <section className="bg-gradient-to-r from-blue via-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
              Ready to Unify Your Enterprise Workflows?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
              Explore how Durkkas Enterprise Platform can streamline multi-branch operations, staff training, and CRM lead pipelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={openDemo}
              className="px-7 py-3.5 rounded-xl bg-white text-blue font-extrabold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all shadow-md cursor-pointer"
            >
              Discuss Your System Requirements →
            </button>
            <button
              onClick={() => navigate("/work")}
              className="px-7 py-3.5 rounded-xl bg-white/10 text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
            >
              Explore Other Case Studies
            </button>
          </div>
        </section>

      </main>

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* DEMO MODAL */}
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default DurkkasCaseStudyPage;
