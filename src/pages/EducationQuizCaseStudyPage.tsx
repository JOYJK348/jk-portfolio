import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import {
  ArrowLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Award,
  Zap,
  Check,
} from "lucide-react";

const EducationQuizCaseStudyPage: React.FC = () => {
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
            <span className="font-bold text-foreground truncate">Learning Management & Assessment System</span>
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
            CASE STUDY • EDTECH LMS & ASSESSMENTS
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Learning Management & <span className="text-blue">Assessment System</span>
            </h1>
            <p className="text-base sm:text-xl font-medium text-foreground/85 leading-relaxed max-w-6xl">
              Comprehensive Learning Management System (LMS) designed for delivering structured course materials, timed assessments, student submissions, and real-time performance analytics.
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            {["LMS Core", "Timed Assessment Player", "Automated Score Engine", "Student Progress Heatmap", "Teacher Portal"].map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-white border border-blue-200/80 text-blue font-bold text-xs shadow-2xs">
                {badge}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-b border-border/70 py-5 w-full text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">My Role</span>
              <p className="text-xs sm:text-sm font-bold text-foreground">Product Engineer & Architect</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Frontend</span>
              <p className="text-xs sm:text-sm font-bold text-foreground">React + TypeScript + Tailwind</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Scoring Speed</span>
              <p className="text-xs sm:text-sm font-bold text-blue">Sub-50ms Evaluation</p>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-foreground/60 uppercase">Submissions</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-700">10,000+ Assessments Processed</p>
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
            Legacy educational setups fragment course content delivery, student assignments, and performance tracking across disconnected tools. This unified LMS hub connects course module hierarchies, timed assessment players, automated score evaluations, and real-time student growth tracking.
          </p>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue bg-blue/10 px-3 py-1 rounded-full border border-blue/20">
              LMS PLATFORM MODULES
            </h2>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              ● Sub-50ms Scoring Engine
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 01</div>
              <h3 className="text-base font-bold text-foreground">Course Material Hub</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Structured term-based curriculum modules, downloadable PDF worksheets, and video lesson player.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 02</div>
              <h3 className="text-base font-bold text-foreground">Interactive Assessment Player</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Timed exam player featuring question bookmarking, response autosave, and local storage state persistence.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 03</div>
              <h3 className="text-base font-bold text-foreground">Automated Evaluation Engine</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Instant score calculation with negative marking options, solution review, and pass/fail thresholds.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-border/80 shadow-2xs space-y-2">
              <div className="text-xs font-mono font-bold text-blue uppercase">MODULE 04</div>
              <h3 className="text-base font-bold text-foreground">Teacher Analytics Portal</h3>
              <p className="text-xs text-foreground/80 leading-relaxed font-normal">
                Classroom performance heatmaps, topic difficulty ratings, and individual student progress reports.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue via-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
            Build High-Performance LMS & Assessment Systems
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button onClick={openDemo} className="px-7 py-3.5 rounded-xl bg-white text-blue font-extrabold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all shadow-md cursor-pointer">
              Discuss EdTech Architecture →
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

export default EducationQuizCaseStudyPage;
