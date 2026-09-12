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
  Flame,
  Check,
  Clock,
  HelpCircle,
} from "lucide-react";

const ZhiCaseStudyPage: React.FC = () => {
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
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
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
              ZHI Early Learning Platform
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
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* ── 00. HERO HEADER BLOCK ── */}
        <section className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-mono font-extrabold text-blue uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
            OFFICIAL TECHNICAL WHITEPAPER • CASE STUDY REPORT
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              ZHI — <span className="text-blue">Learn While Playing</span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-foreground/85 leading-relaxed max-w-4xl">
              <strong className="text-foreground font-bold">ZHI</strong> is a production-grade, multi-portal EdTech SaaS platform purpose-built for early childhood foundation learning (Pre-KG, LKG, UKG, and 1st Standard).
            </p>
          </div>

          {/* Quick Badges Bar */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["EdTech SaaS", "Pre-KG to 1st Std Foundation", "B2C Parent & B2B School Pack", "4 Role-Based Systems", "Bilingual EN+Tamil"].map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white border border-blue-200/80 text-blue font-bold text-xs shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* High-Level Spec Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-b border-border/70 py-5">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Platform Name</span>
              <p className="text-sm font-bold text-foreground">ZHI (Agaran EdTech)</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Target Grades</span>
              <p className="text-sm font-bold text-foreground">Pre-KG to 1st Std (Ages 3–7)</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Portals Built</span>
              <p className="text-sm font-bold text-blue">4 Authenticated Portals</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Deployment</span>
              <p className="text-sm font-bold text-emerald-700">Live Production (Vercel + Railway)</p>
            </div>
          </div>
        </section>

        {/* ── 4 PORTALS QUICK MAP CARDS ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
              ZHI PLATFORM v3.1 — 4 PORTALS ACTIVE
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ● All Systems Live
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 01</div>
              <h3 className="text-base font-bold text-foreground">Super Admin HQ</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Platform Command Center for global operations, school approvals, & payment overrides.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 02</div>
              <h3 className="text-base font-bold text-foreground">School Admin HQ</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Principal portal with student rosters, class pulse analytics, & GST billing logs.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 03</div>
              <h3 className="text-base font-bold text-foreground">Parent Dashboard</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Real-time child progress monitoring, multi-child switcher, & Razorpay countdown timers.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PORTAL 04</div>
              <h3 className="text-base font-bold text-foreground">Kids Learning Hub</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Interactive gamified student interface with TTS Mascot voice, WordSorter, & badge rewards.
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

          <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal">
            <strong className="text-foreground font-bold">ZHI</strong> is a full-stack, production-grade early childhood learning platform that replaces fragmented PDF worksheets and passive YouTube playlists with a structured, interactive digital curriculum. The platform was engineered to serve two distinct business models simultaneously: <strong className="text-blue font-bold">B2C individual parents</strong> who subscribe to monthly plans for home learning, and <strong className="text-foreground font-bold">B2B school institutions</strong> paying a per-student monthly fee.
          </p>

          {/* Dual Monetization Banner */}
          <div className="p-5 rounded-2xl bg-blue/5 border border-blue/20 space-y-2">
            <h3 className="text-xs font-mono font-extrabold text-blue uppercase tracking-wider">
              DUAL MONETIZATION ARCHITECTURE
            </h3>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
              B2C parents subscribe via automated monthly Razorpay plans (<strong className="font-bold text-foreground">Free 14-day trial, Focus ₹149, Premium ₹399, Ultimate ₹699</strong>) with countdown trial timers and instant activation. B2B schools pay <strong className="font-bold text-blue">₹50/child/month</strong> via GST invoice and bank transfer, activated via Super Admin control.
            </p>
          </div>

          {/* Key Executive Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <div className="text-xs font-bold text-blue uppercase">4 Authenticated Portals</div>
              <p className="text-xs text-foreground/80">Super Admin HQ, School Admin HQ, Parent Dashboard & Kids Hub.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <div className="text-xs font-bold text-blue uppercase">Dual Revenue Model</div>
              <p className="text-xs text-foreground/80">B2C Razorpay subscriptions + B2B manual school GST invoice flow.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <div className="text-xs font-bold text-blue uppercase">Gamified Curriculum</div>
              <p className="text-xs text-foreground/80">English Phonics (-at/-an/-ig), Tamil, Early Maths & EVS with TTS Mascot.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <div className="text-xs font-bold text-blue uppercase">Bilingual Engine</div>
              <p className="text-xs text-foreground/80">Multilingual English + Tamil i18n support powered by next-intl.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <div className="text-xs font-bold text-blue uppercase">50+ Curriculum Modules</div>
              <p className="text-xs text-foreground/80">Term-by-term sequential lesson unlock & assessment library.</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
              <div className="text-xs font-bold text-emerald-700 uppercase">₹0 Lost Payment Failures</div>
              <p className="text-xs text-emerald-950 font-medium">Triple-verified idempotency engine preventing activation drops.</p>
            </div>
          </div>
        </section>

        {/* ── 02. THE CHALLENGE ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-red-500/10 text-red-600 font-mono font-bold text-xs flex items-center justify-center">
              02
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              THE CORE CHALLENGES SOLVED
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-50/50 rounded-3xl border border-red-100 space-y-3">
              <div className="text-red-600 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                <span>✕</span> No Structured Curriculum
              </div>
              <h3 className="text-base font-bold text-foreground">PDF & YouTube Dependency</h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                Schools and parents had no structured digital curriculum for Pre-KG to 1st Std. Learning happened through scattered WhatsApp PDFs and YouTube playlists with zero progress data or parent visibility.
              </p>
            </div>

            <div className="p-6 bg-amber-50/50 rounded-3xl border border-amber-100 space-y-3">
              <div className="text-amber-700 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                <span>✕</span> Payment & Access Chaos
              </div>
              <h3 className="text-base font-bold text-foreground">Past Payment Failures</h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                Prior EdTech systems faced critical failure modes: parents paid via Razorpay, but webhook misses meant course access never activated. Money was deducted with zero access granted — destroyed user trust.
              </p>
            </div>

            <div className="p-6 bg-blue/5 rounded-3xl border border-blue/10 space-y-3">
              <div className="text-blue font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
                <span>✕</span> Multi-Role Complexity
              </div>
              <h3 className="text-base font-bold text-foreground">Four Personas, One Architecture</h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                Super admins, principals, parents, and young students each require completely different interfaces, data scopes, and permissions. Building four coherent portals on one backend was a fundamental challenge.
              </p>
            </div>
          </div>
        </section>

        {/* ── 03. PORTAL ARCHITECTURE — FOUR USER SYSTEMS ── */}
        <section className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              03
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              PORTAL ARCHITECTURE — FOUR USER SYSTEMS
            </h2>
          </div>

          {/* PORTAL 01: SUPER ADMIN */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 01</span>
                <h3 className="text-xl font-extrabold text-foreground">Super Admin — Platform Command Center</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
              The Super Admin portal is the master control layer for the entire ZHI platform. This is an internal operations dashboard accessible only to Agaran/ZHI platform administrators.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">School Registration & Limits</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Create new school accounts, set student capacity limits, view plan status, and manage soft-deletes.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Platform KPI Dashboard</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Real-time metrics: total students, active schools, platform revenue, quiz score averages, & engagement.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Pending Approvals Queue</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Review and approve parent+student account creation requests prior to system access authorization.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Payment Verification Center</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Verify unverified school bank transfers (UTR credit) and force-activate parent subscriptions if webhooks fail.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Curriculum Settings</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Map education boards, add grades, manage chapters and lessons, and publish quizzes across subjects.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Real-Time Alert System</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Live severity panel monitoring pending approvals, unverified payments, and expiring subscription plans.</p>
              </div>
            </div>
          </div>

          {/* PORTAL 02: SCHOOL ADMIN */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 02</span>
                <h3 className="text-xl font-extrabold text-foreground">School Admin — Institution Management Portal</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
              Issued to principals and school administrators with strictly scoped institution datasets enforced via JWT-bound <code className="text-blue font-bold">school_id</code> claims.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">School Dashboard KPIs</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Real-time enrolled student counts, active daily users, total stars awarded, and section metrics.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Students Directory & Roster</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Full student roster management, roll number assignment, section sorting, and bulk CSV import capability.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Class Pulse — Grade Analytics</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Per-grade curriculum progress tracking with visual Green/Amber/Red performance threshold indicators.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Needs Attention Panel</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Smart alert surfacing students with progress &lt; 30% or 7-day inactivity for proactive teacher intervention.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Top Performers Leaderboard</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Star-based ranking highlighting top 5 performers in the school to encourage healthy academic competition.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Parents Directory & Billing</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">View all parent profiles linked to enrolled students and monitor school plan GST billing status.</p>
              </div>
            </div>
          </div>

          {/* PORTAL 03: PARENT PORTAL */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 03</span>
                <h3 className="text-xl font-extrabold text-foreground">Parent Portal — Child Progress Monitoring Dashboard</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
              Simplicity-first monitoring portal giving parents a real-time window into their child's learning journey, streaks, quiz attempts, and subscription status.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Multi-Child Switcher</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Instant profile switching between siblings with pre-fetched React Query data caching.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Learning Journey KPIs</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Lessons completed, daily streak counter, badges earned, and total quiz attempt logs.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Subject-wise Progress Map</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Visual completion progress bars across English, Tamil, Maths, EVS, and GK subjects.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Quiz History Drawer</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Detailed quiz scores, percentages, pass/fail status, attempt timestamps, and solution reviews.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Recent Milestones Feed</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Chronological activity timeline logging quiz completions, chapter finishes, and badge unlocks.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Plan Countdown Timer</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Live countdown timer showing remaining premium access time integrated with Razorpay plan renewal.</p>
              </div>
            </div>
          </div>

          {/* PORTAL 04: STUDENT PORTAL */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-border/80 space-y-5 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
              <div>
                <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest">PORTAL 04</span>
                <h3 className="text-xl font-extrabold text-foreground">Student Portal — Kids Interactive Learning Hub</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                LIVE PRODUCTION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
              Child-first interactive hub built for children aged 3 to 7 with large visual controls, Web Speech Synthesis TTS mascot instruction, and gamified practice loops.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Student Home Dashboard</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Personalized greeting, total stars earned, streak counter, and unlocked lesson previews.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Structured Lesson Library</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Term-sequenced chapters covering English Phonics, Early Maths, Tamil Foundation, and EVS/GK.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Mascot TTS Voice Tutorial</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Step-by-step audio mascot instructions speaking directly to the child with clear letter sound isolation.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Gamified Quiz Engines</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">WordSorterQuiz, PictureLetterMatch, MissingLettersTrain, and animated RhymesPlayer sing-alongs.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Standalone Activity Mini-Games</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Independent word building, picture matching, and counting challenges earning bonus star rewards.</p>
              </div>
              <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
                <h4 className="text-xs font-bold text-foreground">Badge Reward System</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">Sequential lesson unlocks and milestone badge achievements synced in real-time to parent dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. PAYMENT ENGINE & DUAL MONETIZATION ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              04
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              PAYMENT ENGINE & SUBSCRIPTION ARCHITECTURE
            </h2>
          </div>

          <p className="text-sm text-foreground/85 leading-relaxed font-normal">
            The ZHI payment system was engineered with bulletproof idempotency and triple-verification to guarantee <strong className="text-emerald-700 font-bold">₹0 lost payment failures</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* B2C Razorpay Flow */}
            <div className="p-5 bg-surface-mint rounded-2xl border border-border/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue uppercase">
                <CreditCard className="w-4 h-4" />
                <span>B2C — Razorpay Parent Subscription Plans</span>
              </div>

              <div className="space-y-2 text-xs text-foreground/85">
                <p><strong className="text-foreground">Free Plan (₹0):</strong> 14-day full trial with auto-lock on expiry.</p>
                <p><strong className="text-foreground">Focus Plan (₹149/mo):</strong> Single subject full lesson & quiz unlock.</p>
                <p><strong className="text-foreground">Premium Plan (₹399/mo):</strong> All subjects, video tutorials, & activity games.</p>
                <p><strong className="text-foreground">Ultimate Plan (₹699/mo):</strong> Everything in Premium + AI Tutor mentor support.</p>
              </div>

              <div className="pt-2 border-t border-border/60">
                <span className="text-[11px] font-bold text-blue uppercase block mb-1">Razorpay Bulletproof Verification Flow</span>
                <ol className="text-[11px] text-foreground/80 space-y-1 list-decimal pl-4">
                  <li>Parent clicks Upgrade → button disabled immediately</li>
                  <li>Backend generates Razorpay order reference</li>
                  <li>Razorpay checkout opens (UPI / Card / NetBanking)</li>
                  <li>Signature verification + idempotency check on backend</li>
                  <li>Secure transaction commit + Webhook backup trigger</li>
                  <li>Super Admin manual override fallback if webhooks miss</li>
                </ol>
              </div>
            </div>

            {/* B2B School Flow */}
            <div className="p-5 bg-surface-mint rounded-2xl border border-border/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue uppercase">
                <Building2 className="w-4 h-4" />
                <span>B2B — School Institution Pack (Manual Invoice)</span>
              </div>

              <p className="text-xs text-foreground/85 leading-relaxed">
                Schools pay <strong className="font-bold text-blue">₹50 per child per month</strong> via NEFT/IMPS bank transfer or cheque. For a 500-student school (₹25,000/mo), the manual PO & GST invoice verification flow ensures full accounting compliance.
              </p>

              <div className="pt-2 border-t border-border/60">
                <span className="text-[11px] font-bold text-blue uppercase block mb-1">School Invoice Activation Steps</span>
                <ol className="text-[11px] text-foreground/80 space-y-1 list-decimal pl-4">
                  <li>Agaran issues formal quotation & Purchase Order (PO) intake</li>
                  <li>Agaran Finance generates custom GST Invoice PDF</li>
                  <li>School transfers funds via NEFT/IMPS bank credit</li>
                  <li>Accountant verifies credit statement</li>
                  <li>Super Admin enters UTR reference number & marks [Paid]</li>
                  <li>System unlocks full curriculum access for all school students instantly</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05. CURRICULUM ARCHITECTURE — SUBJECTS & MODULES ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              05
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              CURRICULUM ARCHITECTURE — SUBJECTS & MODULES
            </h2>
          </div>

          <p className="text-sm text-foreground/80 font-medium">
            Hierarchical structure: <strong className="text-foreground">Board → Grade → Subject → Chapter → Lesson → Activity/Quiz</strong> with term-by-term sequential unlocks (Term 1, Term 2, Term 3).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">SUBJECT 01</div>
              <h3 className="text-base font-bold text-foreground">English Phonics & Literacy</h3>
              <ul className="text-xs text-foreground/80 space-y-1.5">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Capital Letters A–Z (Mascot audio)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Small Letters a–z matching</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> CVC Word Families (-at, -an, -ig, -op)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Sight Words & Story Reading Time</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Animated Rhymes Sing-along player</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">SUBJECT 02</div>
              <h3 className="text-base font-bold text-foreground">Early Mathematics & Logic</h3>
              <ul className="text-xs text-foreground/80 space-y-1.5">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Number Counting 1 to 100 range</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Object Counting & Visual Aids</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Missing Number Train fill-in</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Shape & Color Pattern Matching</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Grade 1 Intro to Visual Addition</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">SUBJECT 03</div>
              <h3 className="text-base font-bold text-foreground">Tamil Language Foundation</h3>
              <ul className="text-xs text-foreground/80 space-y-1.5">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> உயிர் எழுத்துக்கள் — 12 Vowels</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> மெய் எழுத்துக்கள் — 18 Consonants</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Tamil Mascot Pronunciation</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Picture-to-word Tamil matching</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Tamil Rhymes Sing-along player</li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-bold text-blue uppercase">SUBJECT 04</div>
              <h3 className="text-base font-bold text-foreground">EVS & General Knowledge</h3>
              <ul className="text-xs text-foreground/80 space-y-1.5">
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> My Body Parts (Interactive canvas)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Animals of the World (Domestic/Wild)</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Seasons & Weather visual cards</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Fruits & Vegetables picture quiz</li>
                <li className="flex items-start gap-1.5"><Check className="w-3.5 h-3.5 text-blue shrink-0 mt-0.5" /> Community Helpers & Nature</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 06. HOW IT WORKS — TWO USER JOURNEYS ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              06
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              HOW IT WORKS — TWO USER JOURNEYS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B2C Journey */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-extrabold text-blue uppercase">B2C Journey — Individual Parent</h3>
              <div className="space-y-2">
                {[
                  { step: "01", title: "Parent Registers", desc: "Account created → pending registration queue" },
                  { step: "02", title: "Super Admin Approves", desc: "Registration reviewed & approved → account activated" },
                  { step: "03", title: "14-Day Free Trial", desc: "Full content access with countdown timer active in dashboard" },
                  { step: "04", title: "Parent Subscribes", desc: "Picks plan (₹149/₹399/₹699) → Razorpay checkout" },
                  { step: "05", title: "Triple Verification", desc: "Signature verify → idempotency check → secure transaction commit" },
                  { step: "06", title: "Access Activated", desc: "Plan tier unlocked. Child begins structured learning journey" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-surface-mint rounded-xl border border-border/70 flex items-start gap-3 text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <strong className="font-bold text-foreground block">{item.title}</strong>
                      <span className="text-foreground/75 font-normal">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B Journey */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-extrabold text-blue uppercase">B2B Journey — School Institution</h3>
              <div className="space-y-2">
                {[
                  { step: "01", title: "School Onboarding", desc: "Super Admin creates school account & assigns Principal credentials" },
                  { step: "02", title: "Student Registration", desc: "School Admin adds students (LKG/UKG/Grade 1, roll numbers, sections)" },
                  { step: "03", title: "Invoice Sent", desc: "Agaran Finance sends formal GST invoice (₹50/child/month)" },
                  { step: "04", title: "Bank Transfer", desc: "School accounts department transfers via NEFT/IMPS bank credit" },
                  { step: "05", title: "Super Admin Verifies", desc: "UTR number logged → Mark as Paid → system activation triggered" },
                  { step: "06", title: "All Students Unlocked", desc: "Every student in school gets full curriculum access immediately" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-surface-mint rounded-xl border border-border/70 flex items-start gap-3 text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <strong className="font-bold text-foreground block">{item.title}</strong>
                      <span className="text-foreground/75 font-normal">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 07. SYSTEM ARCHITECTURE TOPOLOGY ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              07
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              SYSTEM ARCHITECTURE TOPOLOGY (v3.1 PRODUCTION)
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl space-y-6 font-mono text-xs shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-blue font-bold">CLIENT LAYER — 4 AUTHENTICATED PORTALS</span>
              <span className="text-slate-400 text-[10px]">Next.js App Router + JWT Middleware</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">Super Admin (/admin)</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">School Admin (/school-admin)</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">Parent (/parent)</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">Student (/student)</div>
            </div>

            <div className="text-center text-blue font-bold py-1">
              ↓ Next.js Middleware — JWT Role Validation & School ID Scope ↓
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-slate-300">
              <div className="p-3 bg-slate-800/80 rounded-xl">Admin Management</div>
              <div className="p-3 bg-slate-800/80 rounded-xl">School Roster & Billing</div>
              <div className="p-3 bg-slate-800/80 rounded-xl">Parent Sync & Razorpay</div>
              <div className="p-3 bg-slate-800/80 rounded-xl">TTS Mascot Engine</div>
            </div>

            <div className="text-center text-blue font-bold py-1">
              ↓ Shared Persistence & External Integrations ↓
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-950 rounded-2xl text-[11px] text-slate-300">
              <span>PostgreSQL & Supabase</span>
              <span>•</span>
              <span>Razorpay Subscriptions</span>
              <span>•</span>
              <span>Web Speech TTS</span>
              <span>•</span>
              <span>next-intl (EN+Tamil)</span>
              <span>•</span>
              <span>Vercel + Railway Deploy</span>
            </div>
          </div>
        </section>

        {/* ── 08. AGARAN'S ENGINEERING ROLE ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              08
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              AGARAN'S ENGINEERING ROLE & RESPONSIBILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <h3 className="text-xs font-bold text-blue uppercase">Full-Stack System Architecture</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Designed complete multi-portal architecture, role management, tenant data scoping, and idempotent payment workflows.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <h3 className="text-xs font-bold text-blue uppercase">Four Independent Portal Frontends</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Built all four Next.js frontend portals with role-specific dashboards, React Query state caching, and responsive design.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <h3 className="text-xs font-bold text-blue uppercase">Bulletproof Payment Engine</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Engineered Razorpay integration with triple-verification, idempotency enforcement, audit logs, and Super Admin fallback.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <h3 className="text-xs font-bold text-blue uppercase">Curriculum & Mascot Voice Engine</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Built TTS-driven mascot tutorial player, gamified quiz components (WordSorter, PictureLetterMatch), and badge reward systems.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <h3 className="text-xs font-bold text-blue uppercase">B2B School Admin System</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Designed school-scoped portal with student rosters, class pulse analytics, needs-attention alerts, and GST invoice billing flows.</p>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-1">
              <h3 className="text-xs font-bold text-blue uppercase">Multi-Language i18n Infrastructure</h3>
              <p className="text-xs text-foreground/80 leading-relaxed">Implemented next-intl internationalization supporting English and Tamil across all portal routes and content delivery.</p>
            </div>
          </div>
        </section>

        {/* ── 09 & 10. TECH STACK & PROJECT DETAILS ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech Stack */}
          <div className="p-6 bg-white rounded-3xl border border-border/80 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
                09
              </span>
              <h2 className="text-lg font-extrabold text-foreground tracking-tight">
                TECHNOLOGY STACK
              </h2>
            </div>

            <div className="space-y-2 text-xs text-foreground/85 font-medium">
              <p><strong className="text-blue">Frontend:</strong> Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, React Query.</p>
              <p><strong className="text-blue">Backend & APIs:</strong> Next.js App Router Server Actions, JWT Auth, Role Middleware.</p>
              <p><strong className="text-blue">Payments & Billing:</strong> Razorpay B2C, Webhook Handlers, Idempotency Engine, Manual GST Invoice B2B.</p>
              <p><strong className="text-blue">Learning Engine:</strong> Web Speech Synthesis TTS, Custom Mascot Player, WordSorterQuiz, PictureLetterMatch.</p>
              <p><strong className="text-blue">i18n & Localisation:</strong> next-intl (English + Tamil), Locale-scoped routing /[locale]/*.</p>
              <p><strong className="text-blue">Infrastructure:</strong> Vercel (Frontend), Railway (Backend), Docker (Local Dev).</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 bg-white rounded-3xl border border-border/80 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
                10
              </span>
              <h2 className="text-lg font-extrabold text-foreground tracking-tight">
                PROJECT SPECIFICATIONS
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-foreground/85">
              <div className="p-3 bg-surface-mint rounded-xl space-y-0.5">
                <span className="text-[10px] font-bold text-foreground/60 uppercase block">Model</span>
                <strong className="text-foreground">B2B + B2C Dual Monetization</strong>
              </div>
              <div className="p-3 bg-surface-mint rounded-xl space-y-0.5">
                <span className="text-[10px] font-bold text-foreground/60 uppercase block">Industry</span>
                <strong className="text-foreground">EdTech (Pre-KG to 1st Std)</strong>
              </div>
              <div className="p-3 bg-surface-mint rounded-xl space-y-0.5">
                <span className="text-[10px] font-bold text-foreground/60 uppercase block">Audience</span>
                <strong className="text-foreground">Children Aged 3 to 7 & Schools</strong>
              </div>
              <div className="p-3 bg-surface-mint rounded-xl space-y-0.5">
                <span className="text-[10px] font-bold text-foreground/60 uppercase block">Portals</span>
                <strong className="text-foreground">4 Role-Based Systems</strong>
              </div>
              <div className="p-3 bg-surface-mint rounded-xl space-y-0.5">
                <span className="text-[10px] font-bold text-foreground/60 uppercase block">Localization</span>
                <strong className="text-foreground">Bilingual (English + Tamil)</strong>
              </div>
              <div className="p-3 bg-surface-mint rounded-xl space-y-0.5">
                <span className="text-[10px] font-bold text-foreground/60 uppercase block">Status</span>
                <strong className="text-emerald-700">Active Production System</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. OUTCOMES & TESTIMONIAL ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              11
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              MEASURABLE OUTCOMES & INSTITUTIONAL TESTIMONIAL
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70">
              <span className="text-2xl font-extrabold text-blue block">4</span>
              <span className="text-xs font-bold text-foreground">Authenticated Portals</span>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <span className="text-2xl font-extrabold text-emerald-700 block">₹0</span>
              <span className="text-xs font-bold text-emerald-950">Lost Payment Failures</span>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70">
              <span className="text-2xl font-extrabold text-blue block">2</span>
              <span className="text-xs font-bold text-foreground">Revenue Models (B2C+B2B)</span>
            </div>
            <div className="p-4 bg-surface-mint rounded-2xl border border-border/70">
              <span className="text-2xl font-extrabold text-blue block">100%</span>
              <span className="text-xs font-bold text-foreground">Syllabus Coverage</span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3 relative">
            <MessageSquareQuote className="w-8 h-8 text-blue/30 absolute top-4 right-4" />
            <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed font-medium">
              “The ZHI platform completely changed how we track our kindergarten students' learning progress. The school admin dashboard shows us which grade sections are falling behind in real time, and parents love being able to see their child's quiz scores and chapter completions the same day it happens. The structured term-by-term curriculum also gave our teachers a proper digital framework to follow for the first time.”
            </p>
            <div className="text-xs font-bold text-blue pt-1">
              — Principal, Partner Kindergarten Institution (South India)
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BANNER ── */}
        <section className="p-8 sm:p-12 rounded-3xl bg-blue text-white text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Interested in building an EdTech or SaaS system?
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-medium">
            Let’s discuss your architecture, multi-role requirements, or payment engine workflow.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openDemo}
              className="px-8 py-3.5 rounded-full bg-white text-blue font-extrabold text-sm shadow-md hover:bg-slate-100 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/work")}
              className="px-8 py-3.5 rounded-full bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* BOOK DEMO / CONTACT MODAL */}
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
};

export default ZhiCaseStudyPage;
