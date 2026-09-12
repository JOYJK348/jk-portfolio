import React, { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Cpu,
  Workflow,
  Radio,
  Video,
  CreditCard,
  Webhook,
  Zap,
  Globe,
  Code,
  Layers,
  Database,
  Terminal,
  ShieldCheck,
} from "lucide-react";

interface ToolItem {
  name: string;
  iconUrl?: string;
  fallbackIcon?: React.ReactNode;
}

interface TechCategory {
  id: string;
  title: string;
  items: ToolItem[];
}

const categories: TechCategory[] = [
  {
    id: "01",
    title: "FRONTEND",
    items: [
      { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Zustand", fallbackIcon: <Layers className="w-4 h-4 text-purple-600" /> },
      { name: "Radix UI", fallbackIcon: <Code className="w-4 h-4 text-slate-700" /> },
    ],
  },
  {
    id: "02",
    title: "BACKEND",
    items: [
      { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "NestJS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Express", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Django", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "REST APIs", fallbackIcon: <Zap className="w-4 h-4 text-amber-500" /> },
    ],
  },
  {
    id: "03",
    title: "DATA & INFRASTRUCTURE",
    items: [
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Redis", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Linux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Railway", fallbackIcon: <Database className="w-4 h-4 text-purple-500" /> },
      { name: "Vercel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "DigitalOcean", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    ],
  },
  {
    id: "04",
    title: "AI & INTELLIGENT SYSTEMS",
    items: [
      { name: "LLM APIs", fallbackIcon: <Sparkles className="w-4 h-4 text-blue" /> },
      { name: "LangChain", fallbackIcon: <Workflow className="w-4 h-4 text-emerald-600" /> },
      { name: "LangGraph", fallbackIcon: <Layers className="w-4 h-4 text-blue-600" /> },
      { name: "RAG", fallbackIcon: <Cpu className="w-4 h-4 text-purple-600" /> },
      { name: "AI Agents", fallbackIcon: <Sparkles className="w-4 h-4 text-amber-500" /> },
      { name: "MCP", fallbackIcon: <Terminal className="w-4 h-4 text-teal-600" /> },
      { name: "OpenRouter", fallbackIcon: <Globe className="w-4 h-4 text-indigo-500" /> },
    ],
  },
  {
    id: "05",
    title: "CLOUD & INTEGRATIONS",
    items: [
      { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Cloudflare", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
      { name: "Cloudflare R2", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
      { name: "DevOps", fallbackIcon: <Workflow className="w-4 h-4 text-blue" /> },
      { name: "Jitsi", fallbackIcon: <Video className="w-4 h-4 text-blue-500" /> },
      { name: "LiveKit", fallbackIcon: <Radio className="w-4 h-4 text-red-500" /> },
      { name: "Razorpay", fallbackIcon: <CreditCard className="w-4 h-4 text-blue-600" /> },
      { name: "Stripe", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
      { name: "Webhooks", fallbackIcon: <Webhook className="w-4 h-4 text-amber-600" /> },
    ],
  },
  {
    id: "06",
    title: "DEVELOPMENT & DELIVERY",
    items: [
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitHub Actions", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "CI/CD", fallbackIcon: <ShieldCheck className="w-4 h-4 text-green" /> },
      { name: "Playwright", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
    ],
  },
];

const TechStackSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section
      id="tech-stack"
      className="relative w-full surface-mint text-foreground px-4 sm:px-10 lg:px-16 xl:px-24 py-8 md:py-14 overflow-hidden border-b border-border font-sans flex flex-col items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-7xl lg:max-w-[1500px] mx-auto flex flex-col items-center text-center gap-6 md:gap-10">
        
        {/* ── CENTERED HEADER BLOCK ── */}
        <div className="flex flex-col items-center text-center gap-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            TOOLS I BUILD WITH
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            Tools I Build <span className="text-blue">With.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/90 font-normal leading-relaxed max-w-3xl px-2">
            A practical stack shaped by real products, client work and production systems.
          </p>
        </div>

        {/* ── COLLAPSIBLE EDITORIAL DIVIDE ROWS ── */}
        <div className="w-full border-y border-border/70 divide-y divide-border/60 flex flex-col bg-white/40 backdrop-blur-xs rounded-2xl px-4 sm:px-8 py-2 shadow-2xs">
          {categories.map((cat) => {
            const isOpen = activeId === cat.id;
            return (
              <div key={cat.id} className="py-4 sm:py-5 transition-all duration-200">
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group py-1"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-full transition-colors ${
                        isOpen
                          ? "bg-blue text-white"
                          : "bg-blue/10 text-blue border border-blue/20 group-hover:bg-blue/20"
                      }`}
                    >
                      {cat.id}
                    </span>
                    <h3
                      className={`text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-colors ${
                        isOpen ? "text-blue" : "text-foreground group-hover:text-blue"
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-muted-foreground hidden sm:inline-block">
                      {isOpen ? "Hide Tools" : "View Tools"}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-blue border-blue text-white shadow-2xs"
                          : "bg-white border-border text-foreground/60 group-hover:border-blue/30"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-white" : "text-foreground/60"
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content - Mobile Friendly Alignment */}
                {isOpen && (
                  <div className="mt-3 pt-3 pb-3 px-3.5 sm:px-5 bg-white/70 backdrop-blur-xs rounded-xl border border-border/60 shadow-2xs animate-in fade-in-50 duration-200">
                    <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
                      {cat.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white hover:bg-slate-50 text-foreground/90 border border-blue-100/80 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs hover:border-blue/30 transition-all duration-200"
                        >
                          {item.iconUrl ? (
                            <img
                              src={item.iconUrl}
                              alt={item.name}
                              className="w-3.5 h-3.5 object-contain"
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : (
                            item.fallbackIcon
                          )}
                          <span>{item.name}</span>
                        </span>
                      ))}
                    </div>
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

export default TechStackSection;

