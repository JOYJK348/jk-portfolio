import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Project {
  number: string;
  title: string;
  role: string;
  roleBadgeStyle: string;
  model: string;
  tags: string;
  cardBgStyle: string;
  topGradient: string;
  accentGlow: string;
  highlightText: React.ReactNode;
  description: React.ReactNode;
  linkText: string;
  linkStyle: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Durkkas Enterprise Platform",
    role: "Team Lead",
    roleBadgeStyle: "bg-blue/15 text-blue border-blue/30",
    model: "B2B Enterprise · Multi-Tenant",
    tags: "ERP · LMS · Multi-Tenant",
    topGradient: "bg-gradient-to-r from-blue via-blue-600 to-indigo-600",
    accentGlow: "bg-blue/15",
    cardBgStyle: "bg-gradient-to-b from-blue-50/70 via-white to-white border-blue-200/90 hover:border-blue-400/90 shadow-md hover:shadow-xl hover:shadow-blue-500/15 cursor-pointer",
    description: (
      <>
        An enterprise multi-tenant platform built as Team Lead, uniting{" "}
        <strong className="text-blue font-semibold">business ERP operations</strong>,{" "}
        <strong className="text-blue font-semibold">LMS education</strong>, and multi-org workflows.
      </>
    ),
    highlightText: (
      <>
        <strong className="text-blue font-semibold">Unified ERP & LMS</strong> · Multi-Organization OS
      </>
    ),
    linkText: "View Case Study",
    linkStyle: "bg-blue/10 group-hover:bg-blue text-blue group-hover:text-white border border-blue/20 group-hover:border-blue",
  },
  {
    number: "02",
    title: "NEET Academy Platform",
    role: "Independent Venture",
    roleBadgeStyle: "bg-blue/15 text-blue border-blue/30",
    model: "B2B SaaS · Multi-Tenant",
    tags: "Education · SaaS · AI",
    topGradient: "bg-gradient-to-r from-blue via-blue-600 to-indigo-600",
    accentGlow: "bg-blue/15",
    cardBgStyle: "bg-gradient-to-b from-blue-50/70 via-white to-white border-blue-200/90 hover:border-blue-400/90 shadow-md hover:shadow-xl hover:shadow-blue-500/15 cursor-pointer",
    description: (
      <>
        A complete multi-tenant education SaaS platform built independently through Agaran for{" "}
        <strong className="text-blue font-semibold">medical learning</strong>,{" "}
        <strong className="text-blue font-semibold">high-stakes assessments</strong>, and institutional diagnostics.
      </>
    ),
    highlightText: (
      <>
        <strong className="text-blue font-semibold">Adaptive AI Assessment Engine</strong> · Multi-Institutional Analytics
      </>
    ),
    linkText: "View Case Study",
    linkStyle: "bg-blue/10 group-hover:bg-blue text-blue group-hover:text-white border border-blue/20 group-hover:border-blue",
  },
  {
    number: "03",
    title: "ZHI",
    role: "Independent Venture",
    roleBadgeStyle: "bg-blue/15 text-blue border-blue/30",
    model: "B2B & B2C SaaS · Multi-Tenant",
    tags: "Learn While Playing · SaaS",
    topGradient: "bg-gradient-to-r from-blue via-blue-600 to-indigo-600",
    accentGlow: "bg-blue/15",
    cardBgStyle: "bg-gradient-to-b from-blue-50/70 via-white to-white border-blue-200/90 hover:border-blue-400/90 shadow-md hover:shadow-xl hover:shadow-blue-500/15 cursor-pointer",
    description: (
      <>
        An interactive platform designed to help students{" "}
        <strong className="text-blue font-semibold">learn while playing</strong> through{" "}
        <strong className="text-blue font-semibold">animations, drills, and activities</strong>.
      </>
    ),
    highlightText: (
      <>
        <strong className="text-blue font-semibold">Learn While Playing</strong> · Interactive Gamified Learning
      </>
    ),
    linkText: "View Case Study",
    linkStyle: "bg-blue/10 group-hover:bg-blue text-blue group-hover:text-white border border-blue/20 group-hover:border-blue",
  },
];

const SampleWorkSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / (clientWidth * 0.85));
        setActiveIndex(Math.min(Math.max(index, 0), projects.length - 1));
      }
    }
  };

  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const targetScroll = containerWidth * 0.85 * index;
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleNavigateToWorkPage = () => {
    navigate("/work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="sample-work"
      className="relative w-full surface-mint text-foreground px-4 sm:px-10 lg:px-16 xl:px-24 py-8 md:py-14 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center"
    >
      {/* ── FULL WIDTH HERO-THEMED CONTAINER ── */}
      <div className="relative z-10 w-full max-w-7xl lg:max-w-[1500px] mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
        
        {/* 1. Centered Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
          SELECTED WORK
        </div>

        {/* 2. Centered Main Title */}
        <div className="mt-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight max-w-5xl">
            What I've <span className="text-blue">Built.</span>
          </h2>
        </div>

        {/* 3. Centered Tagline */}
        <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-relaxed max-w-4xl lg:max-w-5xl">
          A few products and systems I've worked on across <span className="text-blue">education</span>, <span className="text-blue">AI</span>, <span className="text-blue">business</span> and <span className="text-blue">technology</span>.
        </p>

        {/* 4. MOBILE SWIPEABLE & DESKTOP GRID CARDS CONTAINER */}
        <div className="w-full pt-4 relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-5 sm:gap-8 w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 pt-1 px-1"
          >
            {projects.map((project) => (
              <div
                key={project.number}
                onClick={handleNavigateToWorkPage}
                className={`group relative rounded-2xl border p-6 sm:p-7 flex flex-col justify-between text-left gap-5 transition-all duration-300 hover:-translate-y-2 overflow-hidden shrink-0 w-[86vw] sm:w-[420px] md:w-auto snap-center ${project.cardBgStyle}`}
              >
                {/* Top Gradient Accent Bar */}
                <div className={`h-1.5 w-full absolute top-0 left-0 right-0 ${project.topGradient}`} />

                {/* Ambient Blur Glow Blob */}
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500 ${project.accentGlow}`} />

                {/* Header: Project Index & Role Tag */}
                <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3 relative z-10">
                  <span className="w-8 h-8 rounded-lg bg-white shadow-2xs border border-border/80 flex items-center justify-center text-xs font-extrabold text-foreground/80 group-hover:text-blue transition-colors font-mono tracking-tighter">
                    {project.number}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border shadow-2xs ${project.roleBadgeStyle}`}>
                    {project.role}
                  </span>
                </div>

                {/* Business Model & Tags Line */}
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-xs font-bold text-foreground tracking-tight">
                    {project.model}
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {project.tags}
                  </span>
                </div>

                {/* Title & Description with Crisp Key-Term Highlights */}
                <div className="flex flex-col gap-2 flex-grow relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-blue transition-colors tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Key System Highlight Line */}
                <div className="pt-2.5 border-t border-border/40 text-[11px] font-semibold text-foreground flex items-center gap-2 relative z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0 animate-pulse" />
                  <span className="leading-snug">{project.highlightText}</span>
                </div>

                {/* Action Link Footer - Highlighted CTA Button Pill */}
                <div className="pt-3 border-t border-border/40 flex items-center justify-between mt-auto w-full relative z-10">
                  <span
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center justify-between shadow-2xs ${project.linkStyle}`}
                  >
                    <span>{project.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Pagination Indicator Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 pt-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToProject(idx)}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx ? "w-8 bg-blue shadow-xs" : "w-2.5 bg-blue/25 hover:bg-blue/40"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 5. Bottom CTA Button */}
        <div className="pt-2">
          <button
            onClick={handleNavigateToWorkPage}
            className="group inline-flex items-center justify-center gap-2 bg-blue text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>View All Work →</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default SampleWorkSection;


