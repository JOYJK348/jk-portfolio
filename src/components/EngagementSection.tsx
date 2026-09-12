import React from "react";
import { ArrowRight } from "lucide-react";

interface EngagementSectionProps {
  onBookDemo: () => void;
}

const EngagementSection: React.FC<EngagementSectionProps> = ({ onBookDemo }) => {
  const capabilityTags = ["SOFTWARE", "AI", "AUTOMATION", "EDUCATION", "PRODUCTS"];

  return (
    <section
      id="engagement"
      className="relative w-full surface-mint text-foreground px-4 sm:px-10 lg:px-16 xl:px-24 py-12 md:py-16 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        
        {/* ── CENTERED HEADER BLOCK ── */}
        <div className="flex flex-col items-center text-center gap-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            LET'S CONNECT
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight max-w-3xl">
            Have something worth <span className="text-blue">building?</span>
          </h2>
        </div>

        {/* ── SUPPORTING STATEMENT ── */}
        <p className="text-sm sm:text-base md:text-lg text-foreground/90 font-normal leading-relaxed max-w-2xl px-2">
          Whether you have an idea, a business problem, or something you want to make better — let’s talk about it.
        </p>

        {/* ── PRIMARY CTA BUTTON ── */}
        <div className="pt-1">
          <button
            onClick={onBookDemo}
            className="group inline-flex items-center justify-center gap-2.5 bg-blue text-white hover:bg-blue-700 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>Let’s Talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* ── CAPABILITY PILL TAGS ── */}
        <div className="pt-6 border-t border-border/60 w-full flex flex-wrap items-center justify-center gap-2">
          {capabilityTags.map((item) => (
            <span
              key={item}
              className="px-3.5 py-1 bg-blue/10 border border-blue/20 rounded-full text-xs font-bold text-blue uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngagementSection;



