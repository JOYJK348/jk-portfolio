import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Check,
} from "lucide-react";

const HeroSection: React.FC<{ onBookDemo?: () => void }> = () => {
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewMyWork = () => {
    navigate("/work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full surface-mint text-foreground px-4 sm:px-8 lg:px-16 pt-5 pb-10 md:pt-8 md:pb-16 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center">

      {/* ── SINGLE CENTERED FULL-SCREEN HERO CONTAINER ── */}
      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8">

        {/* 1. Centered Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
          JAY KUMAR S
        </div>

        {/* 2. Centered Profile Image */}
        <div className="relative my-1 group">
          <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-blue/15 mx-auto transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src="/JK.jpg"
              alt="Jay Kumar S"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 p-1 bg-white rounded-full shadow-md border border-border/80 flex items-center justify-center">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue text-white flex items-center justify-center shadow-xs">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Status & Credentials Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue flex items-center gap-2 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            Software Engineer & Entrepreneur
          </span>
          <span className="px-4 py-1.5 rounded-full bg-green/10 border border-green/20 text-xs font-bold text-green flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            Available for Projects
          </span>
          <a
            href="https://www.linkedin.com/in/jay-kumar-s"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue flex items-center gap-2 hover:bg-blue/20 transition-colors shadow-2xs"
          >
            <span>LinkedIn</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* 3. Centered Main Title */}
        <div className="mt-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight max-w-5xl">
            SOFTWARE ENGINEER <br className="block sm:hidden" />
            <span className="text-blue"> & ENTREPRENEUR</span>
          </h1>
        </div>

        {/* 4. Centered Supporting Statement */}
        <p className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-relaxed max-w-4xl lg:max-w-5xl">
          Building <span className="text-blue">intelligent workflows</span> for <span className="text-blue">businesses</span> and <span className="text-blue">education</span> with <span className="text-blue">AI agents</span>.
        </p>

        {/* 7. Centered CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <button
            onClick={handleViewMyWork}
            className="inline-flex items-center justify-center gap-2 bg-blue text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>VIEW MY WORK</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => handleScrollTo("about")}
            className="inline-flex items-center justify-center gap-2 bg-white text-foreground border border-border font-semibold text-sm px-8 py-3.5 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>ABOUT ME</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        </div>



        {/* Centered Agaran Building Path Text Link */}
        <div className="pt-2">
          <a
            href="https://agaran.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-blue transition-colors group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span>BUILDING MY OWN PATH — <strong className="text-foreground font-extrabold group-hover:text-blue transition-colors">AGARAN</strong></span>
            <span className="text-blue font-bold">· agaran.in</span>
            <ExternalLink size={12} className="text-blue opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
