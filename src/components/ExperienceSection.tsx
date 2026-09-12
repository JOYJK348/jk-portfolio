import React, { useState } from "react";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";

interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  overview: React.ReactNode;
  bullets: React.ReactNode[];
  techStack?: string[];
  focusItems?: string[];
  linkText: string;
  linkUrl?: string;
  badge: string;
  accentTextStyle: string;
  activeHeaderStyle: string;
  badgeStyle: string;
  bulletDotStyle: string;
  highlightTextStyle: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: "01",
    organization: "DURKKAS INNOVATIONS PVT. LTD.",
    role: "Technical Lead · Product Engineering",
    overview: (
      <>
        Started as a Junior Software Developer and grew into a{" "}
        <strong className="text-emerald-900 font-bold">Technical Lead</strong>, working across{" "}
        <strong className="text-emerald-900 font-bold">end-to-end product development</strong> for business and education platforms.
      </>
    ),
    bullets: [
      <>Built and maintained <strong className="text-foreground font-bold">ERP, LMS and CRM systems</strong> for real-world organizational workflows.</>,
      <>Worked across <strong className="text-foreground font-bold">frontend, backend, database, deployment</strong>, testing and production monitoring.</>,
      <>Designed and worked with <strong className="text-emerald-800 font-bold">multi-tenant architecture</strong>, separate schemas and role-based access systems.</>,
      <>Built modules for <strong className="text-foreground font-bold">HR, CRM, education, student management</strong>, finance and internal operations.</>,
      <>Worked on complex <strong className="text-emerald-800 font-bold">RBAC and dynamic menu/module permissions</strong>.</>,
      <>Designed and integrated <strong className="text-foreground font-bold">REST APIs, database models</strong> and business workflows.</>,
      <>Handled <strong className="text-foreground font-bold">production deployments, debugging</strong>, monitoring and ongoing improvements.</>,
      <>Worked closely with <strong className="text-emerald-800 font-bold">interns and junior developers</strong>, reviewing work and guiding implementation.</>,
      <>Took <strong className="text-foreground font-bold">responsibility beyond coding</strong> — from understanding requirements to getting features into production.</>,
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Docker",
      "Cloudflare",
      "GitHub Actions",
    ],
    linkText: "Explore →",
    badge: "Technical Lead · Enterprise ERP & LMS",
    accentTextStyle: "text-emerald-800",
    activeHeaderStyle: "bg-emerald-50/90 border-l-4 border-l-emerald-600 border-emerald-200/80 text-emerald-800 shadow-xs",
    badgeStyle: "bg-emerald-500/15 text-emerald-800 border-emerald-500/30",
    bulletDotStyle: "bg-emerald-600",
    highlightTextStyle: "text-emerald-800",
  },
  {
    id: "02",
    organization: "ISML",
    role: "Product & Technology",
    overview: (
      <>
        Working on the development of an education technology platform with a focus on{" "}
        <strong className="text-blue font-bold">learning systems</strong>,{" "}
        <strong className="text-blue font-bold">intelligent AI features</strong> and scalable digital infrastructure.
      </>
    ),
    bullets: [
      <>Contributing to the development of a <strong className="text-foreground font-bold">modern LMS platform</strong>.</>,
      <>Working across <strong className="text-foreground font-bold">product architecture, frontend, backend</strong> and AI services.</>,
      <>Building structured learning experiences around <strong className="text-blue font-bold">courses, lessons, assessments</strong> and resources.</>,
      <>Working on <strong className="text-blue font-bold">AI-powered systems and intelligent agents</strong> for education workflows.</>,
      <>Exploring <strong className="text-blue font-bold">RAG, LangChain, LangGraph and LLM-based applications</strong>.</>,
      <>Building integrations for <strong className="text-foreground font-bold">communication, payments, storage</strong> and real-time learning.</>,
      <>Working with separate services for <strong className="text-foreground font-bold">core LMS functionality and AI capabilities</strong>.</>,
      <>Contributing to <strong className="text-foreground font-bold">product refinement, technical planning</strong> and production implementation.</>,
      <>Focused on building systems that can eventually support <strong className="text-blue font-bold">multiple learning domains and languages</strong>.</>,
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Supabase",
      "Cloudflare R2",
      "LangChain",
      "LangGraph",
      "LLM APIs",
    ],
    linkText: "Explore →",
    badge: "Product & Technology · EdTech & AI",
    accentTextStyle: "text-blue",
    activeHeaderStyle: "bg-blue-50/90 border-l-4 border-l-blue border-blue-200/80 text-blue shadow-xs",
    badgeStyle: "bg-blue/15 text-blue border-blue/30",
    bulletDotStyle: "bg-blue",
    highlightTextStyle: "text-blue",
  },
  {
    id: "03",
    organization: "INDEPENDENT FREELANCER",
    role: "Software Engineer & Product Developer",
    overview: (
      <>
        Working independently across freelance projects, client solutions and product development, turning real requirements into{" "}
        <strong className="text-purple-900 font-bold">production-ready systems</strong>.
      </>
    ),
    bullets: [
      <>Building software solutions based on <strong className="text-foreground font-bold">actual business and product requirements</strong>.</>,
      <>Working across <strong className="text-foreground font-bold">web applications, SaaS platforms</strong>, education products and automation systems.</>,
      <>Handling projects <strong className="text-purple-800 font-bold">end-to-end — from problem to deployment</strong>.</>,
      <>Building custom <strong className="text-foreground font-bold">dashboards, management systems, APIs</strong> and workflow applications.</>,
      <>Working with <strong className="text-purple-800 font-bold">AI, AI agents and automation</strong> where they provide practical value.</>,
      <>Developing integrations with <strong className="text-foreground font-bold">third-party services, communication platforms</strong> and cloud infra.</>,
      <>Working directly with <strong className="text-foreground font-bold">clients and stakeholders</strong> to translate requirements into working products.</>,
      <>Managing <strong className="text-foreground font-bold">development, testing, deployment</strong> and production improvements independently.</>,
      <>Continuously experimenting with <strong className="text-purple-800 font-bold">new technologies while prioritizing user problems</strong>.</>,
    ],
    focusItems: [
      "AI",
      "AI Agents",
      "Automation",
      "Education Technology",
      "SaaS",
      "Product Engineering",
      "Business Systems",
    ],
    linkText: "Explore →",
    badge: "Independent Venture · Freelance",
    accentTextStyle: "text-purple-700",
    activeHeaderStyle: "bg-purple-50/90 border-l-4 border-l-purple-600 border-purple-200/80 text-purple-700 shadow-xs",
    badgeStyle: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    bulletDotStyle: "bg-purple-600",
    highlightTextStyle: "text-purple-700",
  },
  {
    id: "04",
    organization: "AGARAN",
    role: "Founder & Builder",
    overview: (
      <>
        Building Agaran as my own technology venture around{" "}
        <strong className="text-blue font-bold">AI, automation, education technology</strong> and digital products.
      </>
    ),
    bullets: [
      <>Building <strong className="text-foreground font-bold">practical software solutions</strong> for businesses and organizations.</>,
      <>Exploring <strong className="text-blue font-bold">AI agents and intelligent workflows</strong> that perform useful tasks.</>,
      <>Developing ideas around <strong className="text-blue font-bold">business process automation</strong> and AI operations.</>,
      <>Building technology for <strong className="text-foreground font-bold">education, learning platforms</strong> and institutional workflows.</>,
      <>Working across <strong className="text-foreground font-bold">product strategy, architecture, development</strong> and implementation.</>,
      <>Exploring <strong className="text-blue font-bold">SaaS products</strong> that solve recurring business problems.</>,
      <>Combining <strong className="text-foreground font-bold">software engineering with AI</strong> to build scalable, production systems.</>,
      <>Working toward a model where <strong className="text-foreground font-bold">products, solutions and services grow together</strong>.</>,
      <>Building Agaran gradually through <strong className="text-blue font-bold">real products, projects and requirements</strong>.</>,
    ],
    focusItems: [
      "AI",
      "AI Agents",
      "Workflow Automation",
      "Education Technology",
      "SaaS",
      "Software Products",
    ],
    linkText: "agaran.in →",
    linkUrl: "https://agaran.in",
    badge: "Founder & Builder · Agaran",
    accentTextStyle: "text-blue",
    activeHeaderStyle: "bg-blue-50/90 border-l-4 border-l-blue border-blue-200/80 text-blue shadow-xs",
    badgeStyle: "bg-blue/15 text-blue border-blue/30",
    bulletDotStyle: "bg-blue",
    highlightTextStyle: "text-blue",
  },
];

const ExperienceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>("01");

  const toggleItem = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setTimeout(() => {
        const el = document.getElementById(`experience-item-${id}`);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 120);
    }
  };

  return (
    <section
      id="experience"
      className="relative w-full surface-mint text-foreground px-4 sm:px-10 lg:px-16 xl:px-24 py-6 md:py-10 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-7xl lg:max-w-[1500px] mx-auto flex flex-col gap-6 sm:gap-10">
        
        {/* ── HEADER BLOCK ── */}
        <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-[11px] sm:text-xs font-bold text-blue uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            EXPERIENCE
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-foreground leading-tight tracking-tight max-w-4xl">
            The Journey <span className="text-blue">So Far.</span>
          </h2>

          <p className="text-xs sm:text-base font-semibold text-foreground/80 leading-relaxed max-w-3xl px-2">
            A journey from product engineering to independent building and entrepreneurship.
          </p>
        </div>

        {/* ── HIGH-READABILITY EDITORIAL ACCORDION LIST ── */}
        <div className="flex flex-col divide-y divide-border/60 border-y border-border/60 bg-white/50 rounded-2xl p-1.5 sm:p-3 shadow-xs backdrop-blur-xs">
          {experienceData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                id={`experience-item-${item.id}`}
                className="transition-all duration-200 overflow-hidden scroll-mt-24"
              >
                {/* 1-Line Accordion Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className={`w-full py-4 px-3 sm:px-5 flex items-center justify-between gap-3 text-left rounded-xl transition-all duration-200 cursor-pointer ${
                    isOpen ? item.activeHeaderStyle : "bg-white/40 hover:bg-white/80 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0">
                    <span
                      className={`text-base sm:text-xl font-extrabold font-mono tracking-tighter shrink-0 transition-colors ${
                        isOpen ? item.accentTextStyle : "text-foreground/40"
                      }`}
                    >
                      {item.id}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 flex-1 min-w-0">
                      <h3
                        className={`text-xs sm:text-base font-bold tracking-tight uppercase leading-snug truncate sm:whitespace-normal transition-colors ${
                          isOpen ? "text-foreground font-extrabold" : "text-foreground/85 font-bold"
                        }`}
                      >
                        {item.organization}
                      </h3>
                      <span className={`text-[11px] sm:text-xs font-semibold ${item.accentTextStyle} truncate`}>
                        · {item.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-xs font-bold transition-colors hidden sm:inline-block ${
                        isOpen ? item.accentTextStyle : "text-muted-foreground"
                      }`}
                    >
                      {isOpen ? "Collapse" : "Details"}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-white border-blue-300 shadow-2xs"
                          : "bg-white/90 border-border/80 text-foreground/50 group-hover:border-blue/30"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? `${item.accentTextStyle} rotate-180` : "text-foreground/60"
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content Body (Expands when isOpen) */}
                {isOpen && (
                  <div className="px-3.5 sm:px-6 pb-6 pt-3 animate-in fade-in-50 duration-200 flex flex-col gap-4">
                    
                    {/* Badge Pill */}
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wider shadow-2xs ${item.badgeStyle}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* High-Readability Short Overview Paragraph */}
                    <p className="text-xs sm:text-sm md:text-base text-foreground font-normal leading-relaxed bg-white/80 p-3 sm:p-4 rounded-xl border border-border/60 shadow-2xs">
                      {item.overview}
                    </p>

                    {/* High-Contrast Bullet Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed bg-white p-3.5 sm:p-5 rounded-xl border border-border/80 shadow-2xs">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5">
                          <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${item.bulletDotStyle}`} />
                          <span className="font-normal">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack or Focus Items Pill Tags */}
                    {item.techStack && (
                      <div className="flex flex-col gap-2 pt-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">Tech Stack:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="text-xs font-semibold bg-white text-foreground border border-blue-200 px-3 py-1 rounded-md shadow-2xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.focusItems && (
                      <div className="flex flex-col gap-2 pt-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">Focus Areas:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.focusItems.map((focus, fIdx) => (
                            <span key={fIdx} className="text-xs font-semibold bg-white text-foreground border border-purple-200 px-3 py-1 rounded-md shadow-2xs">
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Link Footer (Rendered only if linkUrl exists, e.g., agaran.in) */}
                    {item.linkUrl && (
                      <div className="pt-3 flex items-center justify-between border-t border-border/50 mt-1">
                        <a
                          href={item.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-1.5 ${item.accentTextStyle} hover:underline`}
                        >
                          <span>{item.linkText}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
