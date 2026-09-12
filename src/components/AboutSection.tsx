import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection: React.FC = () => {
  const handleScrollToEngagement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("engagement");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative w-full surface-mint text-foreground px-4 sm:px-10 lg:px-16 xl:px-24 py-6 md:py-10 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-6xl lg:max-w-[1300px] mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
        
        {/* ── CENTERED HEADER BLOCK ── */}
        <div className="flex flex-col items-center text-center gap-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            ABOUT
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            I’m Jay. I Build <span className="text-blue">Things.</span>
          </h2>
        </div>

        {/* ── HIGH-READABILITY STRUCTURED TEXT CARD CONTAINER (LEFT-ALIGNED BODY) ── */}
        <div className="w-full bg-white/80 backdrop-blur-xs p-6 sm:p-8 rounded-2xl border border-border/80 shadow-xs flex flex-col gap-4 text-left">
          <p className="text-sm sm:text-base md:text-lg text-foreground/90 font-normal leading-relaxed">
            I’m a <strong className="text-foreground font-bold">Software Engineer & Entrepreneur</strong> focused on building practical technology across <strong className="text-blue font-bold">AI, AI agents, automation, education</strong> and digital products.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground/90 font-normal leading-relaxed">
            I enjoy taking ideas and real-world problems, turning them into systems that people can actually use — from <strong className="text-foreground font-bold">business platforms and education products</strong> to intelligent workflows and AI-powered solutions.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-foreground/90 font-normal leading-relaxed">
            Today, I’m continuing that journey independently while building <strong className="text-blue font-bold">Agaran</strong> — my own technology venture focused on creating useful digital products and intelligent systems.
          </p>

          {/* Highlight Metadata Pill Tags */}
          <div className="pt-3 border-t border-border/60 flex flex-wrap items-center gap-2">
            {["SOFTWARE", "AI", "AUTOMATION", "EDUCATION", "PRODUCTS"].map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-blue/10 border border-blue/20 rounded-full text-xs font-bold text-blue uppercase tracking-wider"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── CENTERED CTA BUTTON ── */}
        <div className="pt-1 flex justify-center w-full">
          <a
            href="#engagement"
            onClick={handleScrollToEngagement}
            className="group inline-flex items-center justify-center gap-2 bg-blue text-white hover:bg-blue-700 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>More About Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
