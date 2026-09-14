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
  Bot,
  Search,
} from "lucide-react";

const IsmlCaseStudyPage: React.FC = () => {
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
              ISML — AI Resource & LMS Platform
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
              ISML — <span className="text-blue">AI Resource & LMS Platform</span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-foreground/85 leading-relaxed max-w-6xl">
              <strong className="text-foreground font-bold">ISML</strong> is an enterprise Learning Management System integrated with an AI Resource Agent that dynamically indexes, vectorizes, curates, and delivers personalized educational content and contextual diagnostic feedback to learners in real time.
            </p>
          </div>

          {/* Quick Badges Bar */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            {[
              "AI Agent Architecture",
              "Retrieval-Augmented Generation (RAG)",
              "PgVector Semantic Indexing",
              "Enterprise Multi-Tenant LMS",
              "Automated Taxonomy Classifier",
              "Contextual Question Solver",
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
                <Bot className="w-4 h-4 text-blue shrink-0" />
                <span>Product Architect & Lead</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">AI Pipeline</span>
              <p className="text-xs sm:text-sm font-bold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>RAG Vector Search Engine</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Vector Storage</span>
              <p className="text-xs sm:text-sm font-bold text-blue flex items-center justify-center sm:justify-start gap-1.5">
                <Database className="w-4 h-4 text-blue shrink-0" />
                <span>PostgreSQL PgVector</span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Impact</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center justify-center sm:justify-start gap-1.5">
                <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>75% Faster Material Discovery</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── 4 CORE AI & LMS PILLARS ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
              ISML PLATFORM — 4 CORE ARCHITECTURAL PILLARS
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ● RAG Vector Engine Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PILLAR 01</div>
              <h3 className="text-base font-bold text-foreground">AI Resource Agent</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Contextual vector retrieval engine matching student queries directly to relevant course units and source documents.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PILLAR 02</div>
              <h3 className="text-base font-bold text-foreground">RAG Vector Indexer</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Asynchronous content ingestion worker queues vectorizing PDF, markdown, and video asset taxonomies into PgVector.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PILLAR 03</div>
              <h3 className="text-base font-bold text-foreground">Multi-Tenant LMS Core</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Institutional workspace with strict data partitioning, course hierarchies, and student performance heatmaps.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2 hover:border-blue/40 transition-all">
              <div className="text-xs font-mono font-bold text-blue uppercase">PILLAR 04</div>
              <h3 className="text-base font-bold text-foreground">Interactive Student Hub</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Learner portal featuring AI practice drills, instant doubt explanations, and topic-wise mastery tracking.
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
            Traditional Learning Management Systems suffer from rigid search and passive content delivery: students spend significant time manually digging through long course catalogs and PDF lecture notes to find answers to specific diagnostic doubts. <strong className="text-foreground font-bold">ISML</strong> solves this by embedding an autonomous <strong className="text-blue font-bold">RAG AI Resource Agent</strong> into a multi-tenant LMS core, allowing learners to ask open-ended conceptual questions and receive precise, cited answers linked directly to their institution's official curriculum materials.
          </p>

          {/* RAG Architectural Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-white to-white border border-blue-200/90 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-blue uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue shrink-0" />
              <span>Retrieval-Augmented Generation (RAG) Philosophy</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed text-justify">
              <strong className="text-blue font-bold">Cited & Verified Answers:</strong> Rather than relying on generic LLM hallucinations, the ISML AI Agent first performs vector similarity search against the institution's vectorized database index (PgVector), injecting true textbook context into the prompt before generating step-by-step explanations with exact citations.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Discovery Speed</span>
              <p className="text-sm font-extrabold text-blue">75% Faster</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Vector Storage</span>
              <p className="text-sm font-extrabold text-indigo-700">PgVector</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Retrieval Latency</span>
              <p className="text-sm font-extrabold text-foreground">&lt;200ms</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">Tenancy Model</span>
              <p className="text-sm font-extrabold text-foreground">RLS Isolated</p>
            </div>
            <div className="p-3.5 bg-surface-mint rounded-2xl border border-border/70 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-foreground/60 uppercase">AI Pipeline</span>
              <p className="text-sm font-extrabold text-blue">RAG LangChain</p>
            </div>
            <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-0.5">
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">Cross-Tenant Leak</span>
              <p className="text-sm font-extrabold text-emerald-700">0% Detected</p>
            </div>
          </div>
        </section>

        {/* ── 02. HOW IT WORKS — RAG AI SEARCH PIPELINE ── */}
        <section className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-border/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              02
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              HOW IT WORKS — RAG AI RESOURCE SEARCH PIPELINE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Content Ingestion",
                desc: "Ingests raw course materials, lecture notes, DPP worksheets, and video transcript assets.",
              },
              {
                step: "02",
                title: "Vector Embedding",
                desc: "Background worker queues embed text chunks into high-dimensional vectors stored in PgVector.",
              },
              {
                step: "03",
                title: "Contextual Query",
                desc: "Student submits topic queries or diagnostic question doubts via the LMS study assistant.",
              },
              {
                step: "04",
                title: "AI Synthesis & Citation",
                desc: "RAG engine retrieves exact relevant context and synthesizes clear explanations with cited sources.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-surface-mint rounded-2xl border border-border/70 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-blue text-white font-mono font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-foreground/50 uppercase">Step {idx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-foreground/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03. SYSTEM ARCHITECTURE TOPOLOGY ── */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-blue/10 text-blue font-mono font-bold text-xs flex items-center justify-center">
              03
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
              SYSTEM ARCHITECTURE TOPOLOGY (RAG + FASTAPI + NESTJS)
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl space-y-6 font-mono text-xs shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-blue font-bold">FRONTEND LAYER — LMS DASHBOARD</span>
              <span className="text-slate-400 text-[10px]">React + TypeScript + Tailwind CSS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">Course Catalog</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">RAG AI Search UI</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">Interactive Quiz Player</div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">Mastery Heatmap</div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-3 pt-3">
              <span className="text-indigo-400 font-bold">AI & BACKEND MICROSERVICES</span>
              <span className="text-slate-400 text-[10px]">NestJS + Python FastAPI + LangChain</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">NestJS Core API</div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">FastAPI AI Gateway</div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">LangChain Pipeline</div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">Ingestion Worker</div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-3 pt-3">
              <span className="text-emerald-400 font-bold">VECTOR & RELATIONAL STORAGE</span>
              <span className="text-slate-400 text-[10px]">PostgreSQL PgVector + Redis Cache</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-emerald-300">
                PostgreSQL + PgVector Storage
              </div>
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-blue-300">
                Redis Prompt & Vector Cache
              </div>
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-purple-300">
                Cloudflare R2 Media Storage
              </div>
            </div>
          </div>
        </section>

        {/* ── 04. CALL TO ACTION FOOTER ── */}
        <section className="bg-gradient-to-r from-blue via-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
              Transform Learning with Intelligent RAG AI
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
              Discover how ISML integrates autonomous AI resource curation into enterprise LMS ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={openDemo}
              className="px-7 py-3.5 rounded-xl bg-white text-blue font-extrabold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all shadow-md cursor-pointer"
            >
              Discuss AI Integration →
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

export default IsmlCaseStudyPage;
