import React from "react";

const buildPrinciples = [
  {
    id: "01",
    title: "Problem First",
    description: "Understand what actually needs to be solved.",
  },
  {
    id: "02",
    title: "Build Practical",
    description: "Choose technology based on the requirement, not the trend.",
  },
  {
    id: "03",
    title: "Think End-to-End",
    description:
      "Consider the product, architecture, data, integrations and production environment together.",
  },
  {
    id: "04",
    title: "Keep Improving",
    description:
      "Build, learn from real usage and continuously make the system better.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full surface-mint text-foreground px-4 sm:px-8 lg:px-16 xl:px-24 py-10 md:py-16 overflow-hidden border-b border-border font-sans"
    >
      <div className="relative z-10 w-full max-w-7xl lg:max-w-[1400px] mx-auto">
        {/* ── 2-COLUMN RESPONSIVE GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN: ABOUT ── */}
          <div className="flex flex-col gap-5 sm:gap-6 text-left">
            {/* Eyebrow - Centered on Mobile */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                ABOUT
              </div>
            </div>

            {/* Main Heading - Centered on Mobile */}
            <h2 className="text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              I’m Jay. I Build <span className="text-blue">Things.</span>
            </h2>

            {/* Paragraph Content */}
            <div className="flex flex-col gap-4 text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              <p className="text-left">
                I’m a <strong className="text-foreground font-bold">Software Engineer & Entrepreneur</strong> focused on building practical technology across <strong className="text-blue font-bold">AI, AI agents, automation, education</strong> and digital products.
              </p>

              <p className="text-left">
                I enjoy taking ideas and real-world problems, turning them into systems that people can actually use — from <strong className="text-foreground font-bold">business platforms and education products</strong> to intelligent workflows and AI-powered solutions.
              </p>

              <p className="text-left">
                Today, I’m continuing that journey independently while building <strong className="text-blue font-bold">Agaran</strong> — my own technology venture focused on creating useful digital products and intelligent systems.
              </p>
            </div>

            {/* Metadata Pill Badges */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-center lg:justify-start gap-2">
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

          {/* ── RIGHT COLUMN: HOW I BUILD ── */}
          <div className="flex flex-col gap-5 sm:gap-6 pt-8 lg:pt-0 border-t border-border/60 lg:border-t-0 lg:border-l lg:border-border/60 lg:pl-10 xl:pl-12 text-left">
            {/* Eyebrow - Centered on Mobile */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
                HOW I BUILD
              </div>
            </div>

            {/* Subheading Block - Centered on Mobile */}
            <div className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
                Think. Build. <span className="text-blue">Improve.</span>
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
                I start by understanding the problem, then work backwards to find the simplest technology that can solve it well.
              </p>
            </div>

            {/* Editorial Principles List */}
            <div className="w-full flex flex-col divide-y divide-border/60 border-t border-b border-border/70 mt-1">
              {buildPrinciples.map((item) => (
                <div
                  key={item.id}
                  className="py-4 sm:py-5 flex items-start gap-3.5 sm:gap-4 group transition-all duration-200"
                >
                  <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-full bg-blue/10 text-blue border border-blue/20 shrink-0 mt-0.5">
                    {item.id}
                  </span>
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-blue transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;



