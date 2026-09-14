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
  ExternalLink,
  ChevronRight,
  GraduationCap,
  MessageSquareQuote,
  Check,
  Clock,
  Video,
  Play,
  FileText,
  Cpu,
  Code,
  Activity,
  UserCheck,
  Key,
  RefreshCw,
  Workflow,
  HelpCircle,
} from "lucide-react";

const NeetCaseStudyPage: React.FC = () => {
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
              NEET SaaS Platform (Education Core Engine)
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
              NEET SaaS Platform — <span className="text-blue">Education Core Engine</span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-foreground/85 leading-relaxed max-w-6xl">
              <strong className="text-foreground font-bold">NEET SaaS Platform</strong> is an enterprise multi-tenant Education Core Platform (CMP) purpose-built for NEET coaching institutes, academy chains, and higher education test prep centers.
            </p>
          </div>

          {/* Quick Badges Bar */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            {[
              "Multi-Tenant EdTech SaaS",
              "NEET Coaching & Higher Ed CMP",
              "LiveKit Real-Time WebRTC",
              "Cloudflare Stream DRM",
              "Moodle-Style Course Builder",
              "PostgreSQL RLS Isolated",
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
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Live Streaming</span>
              <p className="text-xs sm:text-sm font-bold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <Video className="w-4 h-4 text-blue shrink-0" />
                <span>LiveKit WebRTC (&lt;200ms)</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Recorded Lectures</span>
              <p className="text-xs sm:text-sm font-bold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <Lock className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Cloudflare Stream DRM</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Course Architecture</span>
              <p className="text-xs sm:text-sm font-bold text-blue flex items-center justify-center sm:justify-start gap-1.5">
                <BookOpen className="w-4 h-4 text-blue shrink-0" />
                <span>Moodle-Style Builder</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Deployment</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center justify-center sm:justify-start gap-1.5">
                <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Vercel + Railway</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── 4 PORTALS QUICK MAP CARDS ── */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
              NEET PLATFORM — 4 ROLE-BASED PORTALS
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ● LIVEKIT & CLOUDFLARE DRM VIDEO VAULT ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 01</div>
              <h3 className="text-base font-bold text-foreground">Platform Admin HQ</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Global Super Admin tenant onboarding & license control (Tenants List, Sub Tiers, Cloudflare DRM).
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 02</div>
              <h3 className="text-base font-bold text-foreground">Institute Operations HQ</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Institute Admin for student admissions, parallel batch allocation, fee ledgers & PDF receipts.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 03</div>
              <h3 className="text-base font-bold text-foreground">Tutor Faculty Hub</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Faculty studio for LiveKit classrooms, Cloudflare DRM lectures, OMR test queues & Moodle builder.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 04</div>
              <h3 className="text-base font-bold text-foreground">Learner & Parent Hub</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                LiveKit live streams, DRM recorded video vault, NTA NEET mock simulator & parent weak-topic analytics.
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
              PROJECT OVERVIEW & ARCHITECTURAL PHILOSOPHY
            </h2>
          </div>

          <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal text-justify">
            The <strong className="text-foreground font-bold">NEET SaaS Platform</strong> (Education Management Core Platform — CMP) is designed to transition NEET coaching centers and test prep academies away from disjointed software stacks — such as combinations of WhatsApp groups, spreadsheets, physical receipt books, manual OMR optical scanners, and standalone video tools — into a single unified enterprise workspace.
          </p>

          {/* Golden Architectural Rule Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-white to-white border border-blue-200/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue shrink-0" />
              <span>Configuration-Driven Domain Philosophy</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed text-justify">
              <strong className="text-blue font-bold">Golden Architectural Rule:</strong> Business-specific behaviors live in tenant configuration, NOT hardcoded database schemas. NEET's +4/-1 marking scheme, configurable total marks criteria, OMR evaluation parameters, and subject splits (Physics, Chemistry, Botany, Zoology) are stored as tenant settings — making the system extensible to JEE, UPSC, TNPSC, and Banking exams out of the box.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Live Streaming</span>
              <p className="text-sm font-extrabold text-blue">LiveKit WebRTC</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Video Protection</span>
              <p className="text-sm font-extrabold text-indigo-700">Cloudflare DRM</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Course Authoring</span>
              <p className="text-sm font-extrabold text-foreground">Moodle-Style</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Mock Exam Marks</span>
              <p className="text-sm font-extrabold text-foreground">NTA Exam Format</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">API Endpoints</span>
              <p className="text-sm font-extrabold text-blue">362+ Routes</p>
            </div>
            <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Tenancy Security</span>
              <p className="text-sm font-extrabold text-emerald-700">Verified RLS</p>
            </div>
          </div>
        </section>

        {/* ── 02. CORE MEDIA & ACADEMIC ENGINE (3 PILLARS) ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              02
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              CORE MEDIA & ACADEMIC ENGINE — THE 3 PILLARS
            </h2>
          </div>

          <p className="text-sm text-foreground/80 font-medium">
            Engineered around three interconnected pillar engines that give students an uninterrupted, secure learning experience while empowering tutors with complete curriculum authoring control.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PILLAR 01 */}
            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-4 hover:border-blue/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue uppercase">PILLAR 01</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue/10 text-blue font-extrabold text-[11px] border border-blue/20">
                    &lt;200ms Latency
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground">
                  LiveKit Real-Time Classrooms
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                  Students attend live interactive faculty lectures via our integrated LiveKit WebRTC SFU engine. Designed for high student capacity without buffering or quality drop.
                </p>
                <ul className="text-xs text-foreground/85 space-y-2 pt-2 border-t border-border/60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Real-Time Video, Audio & Screen Sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Interactive Digital Whiteboard & Annotations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Student Hand-Raising & Audio Moderation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Automated Join/Leave Attendance Tracking</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] font-bold text-blue uppercase tracking-wider flex items-center justify-between">
                <span>Powered by LiveKit WebRTC Core</span>
                <Video className="w-4 h-4" />
              </div>
            </div>

            {/* PILLAR 02 */}
            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-4 hover:border-indigo-400/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-700 uppercase">PILLAR 02</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-[11px] border border-indigo-200">
                    DRM Protected
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground">
                  Cloudflare Stream DRM Vault
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                  All pre-recorded video lectures are hosted on Cloudflare Stream with DRM encryption. Students can watch missed lectures anytime with absolute piracy protection.
                </p>
                <ul className="text-xs text-foreground/85 space-y-2 pt-2 border-t border-border/60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Dynamic Student Watermark Overlay (Anti-Piracy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Signed JWT HLS Tokens (Prevents Video Downloads)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Adaptive Bitrate Streaming (1080p to 360p)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Playback Resume & Completion Percentage Tracking</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] font-bold text-indigo-700 uppercase tracking-wider flex items-center justify-between">
                <span>Secured by Cloudflare Stream DRM</span>
                <Lock className="w-4 h-4" />
              </div>
            </div>

            {/* PILLAR 03 */}
            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-4 hover:border-blue/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue uppercase">PILLAR 03</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue/10 text-blue font-extrabold text-[11px] border border-blue/20">
                    Moodle-Style
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground">
                  Modular Course Builder Engine
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                  Faculty members can build structured, multi-tier courses (like Moodle) with hierarchical modules, chapters, live schedules, pre-recorded videos, and DPP exercise worksheets.
                </p>
                <ul className="text-xs text-foreground/85 space-y-2 pt-2 border-t border-border/60">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Course → Module → Chapter → Lesson Hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Attach LiveKit Live Sessions to Lessons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Embed Cloudflare Stream Pre-Recorded Videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                    <span>Attach DPP PDFs & Lesson MCQ Quizzes</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] font-bold text-blue uppercase tracking-wider flex items-center justify-between">
                <span>Extensible Curriculum Management</span>
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 03. FOUR ROLE-BASED PORTALS (DEEP BREAKDOWN) ── */}
        <section className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              03
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              FOUR ROLE-BASED PORTALS — SYSTEM BREAKDOWN
            </h2>
          </div>

          {/* PORTAL 01: PLATFORM ADMIN HQ */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 01</span>
                <h3 className="text-xl font-extrabold text-foreground">Platform Admin HQ — Super Admin Operations</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium text-justify">
              The Super Admin workspace gives platform owners multi-tenant control: instant tenant provisioning, custom subdomain assignment, subscription tier management, Cloudflare Stream DRM API key configuration, and global platform revenue metrics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Tenant Provisioning Engine</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">One-click institute creation: auto-provisions tenant record, generates isolated database schema, maps primary admin credentials, and configures Cloudflare Stream video keys.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Custom Subdomain Routing</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Binds institute subdomains (e.g. allen.neet-platform.com) dynamically via Next.js middleware headers without requiring server restarts.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Subscription Tier Controls</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Configure license packages (Max Student Limits, Storage Allowances, LiveKit live class concurrency, Cloudflare DRM video bandwidth, and AI analytics).</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Global Revenue & Usage Analytics</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Real-time dashboard displaying total platform ARR/MRR, active student user counts across institutes, and storage consumption.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Global Audit Logger</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Immutable security audit stream logging every administrative action, data export request, and authentication event across all tenants.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Feature Flag Management</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Toggle experimental platform modules (such as AI Answer Solvers, Biometric Attendance, and Offline OMR Graders) per institute.</p>
              </div>
            </div>
          </div>

          {/* PORTAL 02: INSTITUTE OPERATIONS HQ */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 02</span>
                <h3 className="text-xl font-extrabold text-foreground">Institute Operations HQ — Tenant Administrator</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium text-justify">
              The Institute Admin portal manages the complete academic and operational lifecycle for a coaching center: student enrollment rosters, batch assignments, fee installment plans, auto-generated PDF receipts, and faculty timetable scheduling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Student Roster & Admissions</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Admit students, generate custom enrollment roll numbers, upload photo IDs, and assign students to specific NEET study batches.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Batch Allocation & Timetables</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Create parallel batches (e.g. NEET 2026 Morning Batch A, Repeater Evening Batch), assign classroom schedules, and map dedicated tutors to subjects.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Fee Installments & PDF Receipts</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Define flexible fee structures (Upfront vs 3-Installment plans, scholarships, discounts), record offline/online payments, and generate auto-styled PDF receipts.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Mock Test Scheduler</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Schedule institute-wide NEET mock tests, select syllabus topics, upload question papers/OMR answer keys, and set auto-evaluation cutoff times.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Branch Operations Control</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">For multi-branch institutes: manage branch-wise student rosters, room allocations, branch admin sub-accounts, and comparative performance reports.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Attendance & Leave Ledger</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Monitor daily student and faculty attendance rates, track biometric/manual entry logs, and trigger instant automated SMS alerts to parents for absences.</p>
              </div>
            </div>
          </div>

          {/* PORTAL 03: TUTOR PORTAL */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 03</span>
                <h3 className="text-xl font-extrabold text-foreground">Tutor Portal — Faculty Workstation</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium text-justify">
              The Tutor Portal provides a specialized workspace for faculty members to manage daily teaching delivery: launch integrated LiveKit live video classes, upload pre-recorded Cloudflare DRM videos, build modular courses, upload DPP notes, and review OMR answer sheets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">LiveKit Live Studio</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">One-click launch of secure LiveKit live video classes with screen sharing, interactive whiteboards, student mute controls, and auto-archived recordings.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Moodle-Style Course Builder</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Build multi-tier courses with modules, chapters, and lessons. Attach LiveKit live schedules, Cloudflare Stream pre-recorded videos, and DPP exercise sheets.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Cloudflare DRM Video Vault Manager</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Upload pre-recorded video lectures directly to Cloudflare Stream with dynamic student watermark protection and tokenized HLS playback links.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">OMR & Subjective Test Evaluator</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Review scanned student OMR sheets, grade subjective test papers, override auto-graded question exceptions, and submit final marks to the institute ledger.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Classroom Pulse Analytics</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Real-time class performance metrics: average score per topic, question difficulty rating analysis, attendance trend graphs, and student engagement indicators.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Doubt Resolution Queue</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Student doubt ticketing portal: faculty can view submitted student question doubts, reply with text/image/audio explanations, and mark doubts resolved.</p>
              </div>
            </div>
          </div>

          {/* PORTAL 04: STUDENT & PARENT PORTAL */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 04</span>
                <h3 className="text-xl font-extrabold text-foreground">Student & Parent Portal — Learner & Guardian Hub</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium text-justify">
              The Student and Parent Portal gives learners access to LiveKit live streams, Cloudflare DRM pre-recorded videos, modular course trees, and an adaptive NTA Mock Exam Engine. Parents gain full visibility into academic progress and fee payment history.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">LiveKit Live Class Room</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Join scheduled live video classes in real-time with ultra-low latency, live chat, and hand-raising capability.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Cloudflare DRM Pre-Recorded Vault</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Watch missed recorded lectures with dynamic student ID watermarking and adaptive resolution streaming on desktop and mobile.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">720-Mark NEET Mock Simulator</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Full-length NEET mock exam simulator matching NTA exam format (180 questions, Physics/Chem/Bio splits, +4/-1 countdown timer, and instant scorecards).</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Weak-Topic Diagnostic Engine</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">AI-driven topic analysis breaking down performance across Physics (Mechanics, Optics), Chemistry (Organic, Physical), Botany, and Zoology.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Parent Guardian View</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Transparent parent access: view child test rank history, overall attendance percentage, upcoming fee installment due dates, and fee receipt downloads.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Fee Payment & Installment Ledger</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">View total course fee breakdown, payment installment timelines, paid receipts, and clear pending dues via integrated Razorpay online gateway.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. TENANCY & SECURITY ARCHITECTURE (DEFENSE-IN-DEPTH) ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              04
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              TENANCY & SECURITY ARCHITECTURE (DEFENSE-IN-DEPTH)
            </h2>
          </div>

          <p className="text-sm text-foreground/85 leading-relaxed font-normal text-justify">
            The platform implements a defense-in-depth security model designed for enterprise multi-tenancy. Every request is verified at three distinct layers before database execution:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-surface-mint border border-border/70 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue uppercase">
                <Key className="w-4 h-4" />
                <span>LAYER 01 — AUTH</span>
              </div>
              <h3 className="text-base font-bold text-foreground">Stateless JWT + Silent Refresh</h3>
              <p className="text-xs text-foreground/80 leading-relaxed text-justify">
                Short-lived access tokens (15-min lifetime) stored in client memory carry <code className="text-blue font-bold">institute_id</code>, <code className="text-blue font-bold">user_id</code>, and role claims. Silent refreshes use HttpOnly, Secure, SameSite=Strict cookies with rotating refresh tokens and instant session revocation in Redis.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-mint border border-border/70 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-indigo-700 uppercase">
                <RefreshCw className="w-4 h-4" />
                <span>LAYER 02 — MIDDLEWARE</span>
              </div>
              <h3 className="text-base font-bold text-foreground">Prisma Tenant Injection</h3>
              <p className="text-xs text-foreground/80 leading-relaxed text-justify">
                Every NestJS backend request executes through a Prisma middleware wrapper that automatically binds <code className="text-indigo-700 font-bold">WHERE institute_id = ctx.instituteId</code> to every SELECT, UPDATE, and DELETE query — preventing developer error from missing tenant clauses.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-mint border border-border/70 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-emerald-700 uppercase">
                <Database className="w-4 h-4" />
                <span>LAYER 03 — DATABASE RLS</span>
              </div>
              <h3 className="text-base font-bold text-foreground">PostgreSQL Row-Level Security</h3>
              <p className="text-xs text-foreground/80 leading-relaxed text-justify">
                At the database level, Supabase PostgreSQL enforces Row-Level Security (RLS) policies on all core entity tables. Even if raw SQL were executed, the database kernel blocks access to rows belonging to other institute IDs.
              </p>
            </div>
          </div>
        </section>

        {/* ── 05. ACADEMIC & ASSESSMENT ENGINE (NEET MASTER CURRICULUM) ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              05
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              ACADEMIC & ASSESSMENT ENGINE — NEET MASTER CURRICULUM
            </h2>
          </div>

          <p className="text-sm text-foreground/85 leading-relaxed font-normal text-justify">
            The curriculum database model separates Course Structure from Batch Execution. Subjects, Chapters, and Topics are Course-scoped, allowing an institute to define their master NEET curriculum once and reuse it across 50+ parallel batch iterations without data duplication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">NEET MASTER CURRICULUM</div>
              <h3 className="text-base font-bold text-foreground">Physics (Class 11 & 12 NEET)</h3>
              <ul className="text-xs text-foreground/80 space-y-2">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Mechanics (Kinematics, Laws of Motion, Work & Energy)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Thermodynamics & Kinetic Theory</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Electrostatics & Current Electricity</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Optics (Ray & Wave Optics)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Modern Physics & Semiconductors</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">NEET MASTER CURRICULUM</div>
              <h3 className="text-base font-bold text-foreground">Chemistry (Physical, Organic & Inorganic)</h3>
              <ul className="text-xs text-foreground/80 space-y-2">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Physical Chemistry (Atomic Structure, Chemical Bonding, Equilibrium)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Organic Chemistry (Hydrocarbons, Reaction Mechanisms, Biomolecules)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Inorganic Chemistry (Periodic Table, Coordination Compounds, p-Block)</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">NEET MASTER CURRICULUM</div>
              <h3 className="text-base font-bold text-foreground">Botany (Plant Biology)</h3>
              <ul className="text-xs text-foreground/80 space-y-2">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Cell Biology & Genetics (DNA, Cell Cycle, Inheritance)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Plant Physiology (Photosynthesis, Respiration, Transport)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Plant Reproduction & Diversity in Living World</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Ecology & Environment Systems</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">NEET MASTER CURRICULUM</div>
              <h3 className="text-base font-bold text-foreground">Zoology (Animal Biology & Human Physiology)</h3>
              <ul className="text-xs text-foreground/80 space-y-2">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Human Physiology (Digestion, Circulation, Nervous System, Excretion)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Human Reproduction & Reproductive Health</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Evolution & Animal Kingdom Classification</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Biotechnology & Its Applications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 06. HOW IT WORKS — OPERATIONAL WORKFLOW ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              06
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              HOW IT WORKS — END-TO-END COACHING INSTITUTE JOURNEY
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5">
            {[
              { step: "01", title: "Tenant Onboarding", desc: "Super Admin registers institute, sets subdomains, and issues Tenant Admin account." },
              { step: "02", title: "Academic & Course Builder", desc: "Institute Admin & Tutors build Moodle-style modular courses & attach LiveKit/DRM video links." },
              { step: "03", title: "Student Admission", desc: "Admit students, generate roll numbers, set fee installment plans & PDF receipts." },
              { step: "04", title: "Live & DRM Classes", desc: "Tutor hosts LiveKit live class, uploads Cloudflare DRM pre-recorded videos & evaluates OMR tests." },
              { step: "05", title: "Parent Analytics", desc: "Parents view real-time weak-topic analytics, mock test rankings, and fee ledger." },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-surface-mint rounded-2xl border border-border/70 flex flex-col gap-2 relative">
                <span className="w-7 h-7 rounded-full bg-blue text-white font-mono font-extrabold text-xs flex items-center justify-center shrink-0">
                  {item.step}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-foreground/75 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 07. ARCHITECTURE & TECH STACK DEEP DIVE ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              07
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              ARCHITECTURE & TECH STACK DEEP DIVE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-2 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">FRONTEND FRAMEWORK</div>
              <h3 className="text-sm font-bold text-foreground">Next.js 15 (App Router)</h3>
              <p className="text-xs text-foreground/75 leading-relaxed">TypeScript Strict, Tailwind CSS v4, Framer Motion, Shadcn UI.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-2 shadow-2xs">
              <div className="text-xs font-mono font-bold text-indigo-600 uppercase">BACKEND INFRASTRUCTURE</div>
              <h3 className="text-sm font-bold text-foreground">NestJS Monorepo</h3>
              <p className="text-xs text-foreground/75 leading-relaxed">Prisma ORM (PostgreSQL), Redis Cache & Queue, Supabase Database RLS, Razorpay Gateway.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-2 shadow-2xs">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase">VIDEO & REAL-TIME ENGINE</div>
              <h3 className="text-sm font-bold text-foreground">LiveKit + Cloudflare DRM</h3>
              <p className="text-xs text-foreground/75 leading-relaxed">LiveKit WebRTC SFU Engine, Cloudflare Stream DRM, Socket.io, Signed JWT HLS Tokens.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-2 shadow-2xs">
              <div className="text-xs font-mono font-bold text-amber-800 uppercase">ACADEMIC & COURSE TOOLS</div>
              <h3 className="text-sm font-bold text-foreground">Moodle Builder & OMR</h3>
              <p className="text-xs text-foreground/75 leading-relaxed">Moodle-Style Course Builder, PDF Generator Engine, NTA Format OMR Grader, Chart.js Analytics.</p>
            </div>
          </div>

          {/* 8 Decoupled Modules Banner */}
          <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 font-mono text-xs">
              <span className="text-blue font-bold">NestJS Monorepo Architecture — 8 Decoupled Modules</span>
              <span className="text-slate-400">Micro-Services Architecture</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">1. Auth & Identity</div>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">2. Tenant Operations</div>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">3. Academic Engine</div>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">4. Assessment & OMR</div>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">5. Fee & PDF Receipts</div>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">6. LiveKit Gateway</div>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">7. Cloudflare DRM Stream</div>
              <div className="p-3 bg-slate-800/90 rounded-xl border border-slate-700 text-slate-200">8. Audit Logger</div>
            </div>
          </div>
        </section>

        {/* ── 08. SYSTEM IMPACT & CLIENT VERIFICATION ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 font-mono font-bold text-xs flex items-center justify-center">
              08
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              SYSTEM IMPACT & CLIENT VERIFICATION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-2 text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600">100%</span>
              <h3 className="text-sm font-bold text-foreground">Tenant RLS Isolation</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Verified across 362+ API routes: zero cross-tenant data leakage detected under simulated penetration testing.</p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-2 text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue">&lt;200ms</span>
              <h3 className="text-sm font-bold text-foreground">LiveKit Stream Latency</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Ultra-low latency live classroom delivery during high-concurrency peak institute broadcast hours.</p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-border/80 shadow-2xs space-y-2 text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-700">0%</span>
              <h3 className="text-sm font-bold text-foreground">DRM Video Piracy Rate</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Cloudflare Stream tokenized HLS + dynamic student ID watermark preventing screen recording leakage.</p>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50/90 via-white to-white rounded-3xl border border-blue-200/90 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue uppercase tracking-wider">
              <MessageSquareQuote className="w-5 h-5 text-blue shrink-0" />
              <span>CLIENT TESTIMONIAL • COACHING ACADEMY DIRECTOR</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium italic text-justify">
              "The NEET SaaS Platform completely replaced our manual optical scanners and fragmented video links with a single unified multi-portal workspace. LiveKit classrooms run effortlessly and Cloudflare Stream DRM guarantees our video lectures remain 100% protected."
            </p>
          </div>
        </section>

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl border border-slate-800 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/20 border border-blue/40 text-xs font-bold text-blue uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
            ENTERPRISE ARCHITECTURE VERIFIED
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to deploy an enterprise multi-tenant EdTech platform?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Let’s discuss custom multi-tenant architecture, LiveKit integration, Cloudflare Stream DRM video security, or custom EdTech product engineering.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openDemo}
              className="px-8 py-3.5 rounded-full text-xs font-bold bg-blue text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Discuss Platform Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/work")}
              className="px-6 py-3.5 rounded-full text-xs font-bold bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-all cursor-pointer border border-slate-700"
            >
              Back to All Work
            </button>
          </div>
        </section>

      </main>

      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <Footer onBookDemo={openDemo} />
    </div>
  );
};

export default NeetCaseStudyPage;
