import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import CaseStudyModal, { CaseStudyData } from "@/components/CaseStudyModal";
import { ArrowRight, ChevronRight, Layers, Cpu, Workflow, Sparkles, Server, CheckCircle2, Layout, Briefcase, GraduationCap } from "lucide-react";



const featuredCaseStudies: CaseStudyData[] = [
  {
    id: "neet",
    title: "NEET Academy Platform",
    subtitle: "A complete education platform designed around learning, assessments, institutional workflows and student management.",
    role: "Independent Venture (Agaran)",
    categoryBadges: ["Education", "SaaS", "Product Engineering"],
    model: "B2B SaaS · Multi-Tenant",
    overview: "NEET Academy Platform is an all-in-one medical education SaaS designed to handle high-stakes exam simulations, diagnostic topic analytics, and institutional student performance tracking.",
    targetAudience: "Medical Aspirants, NEET Coaching Institutes, Educators, and Academic Directors.",
    challenge: "Existing quiz platforms lack detailed question taxonomy diagnostics, real-time institutional analytics, and scalable multi-tenant management for coaching centers.",
    approach: "Built a decoupled micro-service architecture separating test delivery engines from real-time analytics aggregation, paired with offline attempt synchronization.",
    whatIBuilt: [
      "Adaptive Quiz & Assessment Engine",
      "Multi-Tenant Institutional Dashboard",
      "Granular Question Taxonomy Engine",
      "Automated Marking & Score Diagnostics",
      "Student Performance Heatmaps",
      "RBAC & Academic Role Permissions",
    ],
    howItWorks: [
      { step: "01", title: "Subject Hierarchy", desc: "Organized by Subject → Unit → Chapter → Topic taxonomy." },
      { step: "02", title: "Timed Assessment", desc: "Simulated exam conditions with instant response logging." },
      { step: "03", title: "Automated Scoring", desc: "Instant negative marking calculations and answer keys." },
      { step: "04", title: "AI Diagnostics", desc: "Weak-area identification and topic mastery heatmaps." },
    ],
    systemArchitecture: {
      frontend: "Next.js 14 · React 18 · TypeScript · Tailwind CSS · Zustand",
      backend: "Node.js · NestJS · Express · REST APIs · Microservices",
      database: "PostgreSQL · Supabase · Redis State Cache",
      storage: "Cloudflare R2 Storage for PDFs & Media",
      ai: "LLM APIs for automated diagnostic explanations",
      infrastructure: "Docker · Railway · Vercel · Cloudflare DNS",
    },
    technicalImplementation: [
      {
        title: "Architecture & Dataflow",
        description: "Decoupled assessment execution engine with state caching in Redis to support high-concurrency test submissions without database locking.",
      },
      {
        title: "Database Schema Design",
        description: "Normalized relational PostgreSQL schema with row-level security policies partitioning data by institution ID.",
      },
      {
        title: "APIs & Serialization",
        description: "High-performance REST API endpoints with cached question payloads reducing round-trip latency.",
      },
      {
        title: "Security & RBAC",
        description: "JWT session tokens with fine-grained Role-Based Access Control for SuperAdmin, Institute Admin, Teacher, and Student roles.",
      },
    ],
    myRole: [
      "Architected the full system end-to-end as Lead Product Engineer & Founder.",
      "Designed the normalized database schema and multi-tenant security layer.",
      "Built the adaptive quiz engine and student diagnostic analytics dashboard.",
      "Deployed and configured production infrastructure on Railway and Cloudflare.",
    ],
    outcomes: [
      "Deployed to production supporting multi-institutional mock exam series.",
      "Sub-100ms test attempt submission scoring & instant response analysis.",
      "Zero data leakage between institutional tenants through strict RLS policies.",
    ],
  },
  {
    id: "zhi",
    title: "ZHI — Learn While Playing",
    subtitle: "An interactive learning platform designed to combine learning, activities, animation and personalized experiences.",
    role: "Independent Venture",
    categoryBadges: ["Education", "Interactive Learning", "AI"],
    model: "B2B & B2C SaaS",
    overview: "ZHI reimagines educational content delivery by converting complex concepts into gamified interactive activities, animations, and active practice loops.",
    targetAudience: "School Students, Self-learners, and Innovative Educational Institutions.",
    challenge: "Traditional online learning suffers from low engagement due to passive video watching without active problem-solving reinforcement.",
    approach: "Designed active gamified learning loops featuring instant feedback, visual rewards, and adaptive difficulty scaling.",
    whatIBuilt: [
      "Interactive Canvas Activity Engine",
      "Gamified Practice & Drill Modules",
      "Real-Time Progress & Mastery Tracker",
      "Student Avatar & Reward System",
      "Interactive Lesson Player",
    ],
    howItWorks: [
      { step: "01", title: "Concept Visualizer", desc: "Animated concept presentation explaining core principles." },
      { step: "02", title: "Interactive Drill", desc: "Hands-on practice activity with instant feedback." },
      { step: "03", title: "Reward Milestone", desc: "XP gains and progress unlock indicators." },
      { step: "04", title: "Mastery Review", desc: "Adaptive revision recommendations based on performance." },
    ],
    systemArchitecture: {
      frontend: "React · TypeScript · Tailwind CSS · Framer Motion",
      backend: "Node.js · Express · REST APIs",
      database: "Supabase PostgreSQL · Redis",
      storage: "Cloudflare R2 Media Storage",
      ai: "AI Agents for personalized practice suggestions",
      infrastructure: "Vercel · Cloudflare",
    },
    technicalImplementation: [
      {
        title: "Interactive Canvas State",
        description: "Optimized client-side state management for fluid animation and instant response during interactive exercises.",
      },
      {
        title: "Progress Analytics",
        description: "Incremental sync engine recording drill completion rates and mastery scores with low bandwidth overhead.",
      },
    ],
    myRole: [
      "Designed and developed the core interactive engine and user interface.",
      "Integrated real-time progress syncing with Supabase backend.",
      "Created the gamified mastery and activity progression architecture.",
    ],
    outcomes: [
      "Significantly higher lesson completion rates compared to passive video courses.",
      "Seamless mobile and tablet touch responsiveness across interactive drills.",
    ],
  },
  {
    id: "durkkas",
    title: "Durkkas Enterprise Platform",
    subtitle: "A unified enterprise platform connecting business, education and organizational workflows through a multi-tenant system.",
    role: "Team Lead",
    categoryBadges: ["ERP", "LMS", "CRM", "Multi-Tenant"],
    model: "B2B Enterprise",
    overview: "Durkkas Enterprise Platform is a comprehensive enterprise operating system built to streamline multi-organization business operations, staff workflows, customer management, and internal education.",
    targetAudience: "Enterprise Organizations, Multi-branch Businesses, and Operational Teams.",
    challenge: "Operating multiple fragmented tools (separate CRM, ERP, and LMS) created data sync gaps, redundant licenses, and inefficient operational handoffs.",
    approach: "Architected a unified core multi-tenant schema with shared authentication, modular extension apps, and real-time activity audit trails.",
    whatIBuilt: [
      "Multi-Organization Tenant Routing",
      "Unified ERP Business Management Module",
      "LMS Staff & Student Training Hub",
      "CRM Lead & Work Pipeline Tracker",
      "Role-Based Permission Matrix",
      "Automated Workflow Triggers",
    ],
    howItWorks: [
      { step: "01", title: "Tenant Onboarding", desc: "Dedicated workspace created per organization branch." },
      { step: "02", title: "Unified OS", desc: "Access ERP, LMS, and CRM from one central dashboard." },
      { step: "03", title: "Role Control", desc: "Granular access rules for Executives, Managers, and Staff." },
      { step: "04", title: "Operational Sync", desc: "Real-time updates across sales, staff, and learning workflows." },
    ],
    systemArchitecture: {
      frontend: "Next.js · React · TypeScript · Tailwind CSS · Radix UI",
      backend: "Node.js · NestJS · TypeScript · REST APIs",
      database: "PostgreSQL · Redis Caching",
      storage: "AWS S3 Storage",
      infrastructure: "Docker · DigitalOcean · Nginx · Linux",
    },
    technicalImplementation: [
      {
        title: "Multi-Tenancy Architecture",
        description: "Row-level tenant isolation ensuring absolute privacy and data partitioning across distinct client organizations.",
      },
      {
        title: "Enterprise Permission Matrix",
        description: "Flexible RBAC engine allowing custom role definitions and feature access flags per department.",
      },
    ],
    myRole: [
      "Led the technical team as Team Lead guiding architecture and delivery.",
      "Designed the multi-tenant database layer and authentication strategy.",
      "Engineered core integration modules connecting ERP and LMS workflows.",
    ],
    outcomes: [
      "Replaced 4 standalone legacy tools with 1 unified platform.",
      "Reduced multi-branch operational overhead and data synchronization errors.",
    ],
  },
  {
    id: "isml",
    title: "ISML — AI Resource & LMS Platform",
    subtitle: "An intelligent LMS ecosystem featuring AI-driven resource curation, learning analytics, and multi-tenant organizational management.",
    role: "Product Architect & Lead",
    categoryBadges: ["AI Agent", "LMS", "EdTech"],
    model: "Enterprise LMS · AI Resource Agent",
    overview: "ISML is an enterprise Learning Management System integrated with an AI Resource Agent that dynamically indexes, curates, and delivers personalized educational content and diagnostic feedback to learners.",
    targetAudience: "Educational Institutions, Corporate Learning Centers, Instructors, and Students.",
    challenge: "Traditional LMS platforms lack contextual content recommendations, automated resource classification, and intelligent student support agents.",
    approach: "Architected a hybrid LMS core with a Retrieval-Augmented Generation (RAG) AI Agent workflow to process, organize, and serve context-aware study resources in real-time.",
    whatIBuilt: [
      "ISML LMS AI Resource Agent Engine",
      "Contextual RAG Search & Indexing Pipeline",
      "Multi-Tenant Institutional LMS Workspace",
      "Interactive Student Resource Hub",
      "Automated Content Taxonomy Classifier",
      "Role-Based LMS Access & Analytics Dashboard",
    ],
    howItWorks: [
      { step: "01", title: "Content Ingestion", desc: "Ingests raw course materials, notes, and curriculum assets." },
      { step: "02", title: "Vector Indexing", desc: "AI Agent embeds and categorizes assets into domain taxonomies." },
      { step: "03", title: "Contextual Query", desc: "Student submits topic queries or diagnostic help requests." },
      { step: "04", title: "AI Delivery", desc: "RAG engine synthesizes exact relevant answers with cited resources." },
    ],
    systemArchitecture: {
      frontend: "React · TypeScript · Tailwind CSS · Zustand",
      backend: "Node.js · NestJS · Python FastAPI · REST APIs",
      database: "PostgreSQL · Redis · PgVector / Vector Store",
      storage: "Cloudflare R2 Media Storage",
      ai: "LLM APIs · RAG Engine · LangChain · AI Agents",
      infrastructure: "Docker · Railway · Cloudflare",
    },
    technicalImplementation: [
      {
        title: "RAG Vector Search Pipeline",
        description: "Contextual semantic retrieval engine mapping student queries directly to relevant course units and source documents.",
      },
      {
        title: "LMS Multi-Tenant Isolation",
        description: "Institutional data partitioning ensuring strict privacy and zero cross-tenant resource leakage.",
      },
      {
        title: "Asynchronous Content Ingestion",
        description: "Background processing worker queues handling PDF, markdown, and video asset vectorization.",
      },
      {
        title: "Role-Based Access Control",
        description: "Fine-grained permission system for Institutional Admin, Instructor, and Student access levels.",
      },
    ],
    myRole: [
      "Architected the complete ISML platform and AI agent integration framework.",
      "Engineered the RAG resource retrieval pipeline and vectorized data indexer.",
      "Built the multi-tenant LMS administrative workspace and interactive student portal.",
    ],
    outcomes: [
      "Reduced student study material discovery time by 75% via context-aware AI search.",
      "Successfully handles automated content ingestion across multi-institutional course catalogs.",
    ],
  },
];

const otherWorkCaseStudies: CaseStudyData[] = [
  {
    id: "internal-erp",
    title: "Internal ERP Platform",
    subtitle: "Business operations platform for managing internal workflows, records, users and day-to-day organizational processes.",
    role: "Full-Stack Engineer & Architect",
    categoryBadges: ["Business", "ERP", "Workflow Automation"],
    model: "Internal Business OS",
    overview: "Internal ERP Platform is a centralized organizational operating system designed to handle staff records, internal department approvals, asset tracking, and operational task distribution.",
    targetAudience: "Internal Organizational Staff, Department Heads, and Operations Managers.",
    challenge: "Paper-based processes and manual spreadsheet tracking caused delays, missing records, and lack of visibility during internal audits.",
    approach: "Architected a unified relational database schema with centralized authentication, role-based permissions, and immutable audit logs.",
    whatIBuilt: [
      "Centralized User & Staff Directory",
      "Multi-Department Approval Pipeline Engine",
      "Operational Asset & Inventory Tracker",
      "Automated Activity Audit Logging Engine",
      "Role-Based Permission Matrix",
    ],
    howItWorks: [
      { step: "01", title: "Request Intake", desc: "Digital submission of internal requests or operational updates." },
      { step: "02", title: "Department Routing", desc: "Automated routing to designated department heads." },
      { step: "03", title: "Multi-Tier Approval", desc: "Sequential verification and sign-off workflow." },
      { step: "04", title: "Process Audit", desc: "Instant logging of completed actions in audit history." },
    ],
    systemArchitecture: {
      frontend: "React · TypeScript · Tailwind CSS",
      backend: "Node.js · Express · REST APIs",
      database: "PostgreSQL · Redis Caching",
      storage: "Cloudflare R2 Storage",
      infrastructure: "Docker · Linux Server",
    },
    technicalImplementation: [
      {
        title: "Relational Schema & Auditing",
        description: "Normalized PostgreSQL database with automated triggers writing state mutations to immutable audit tables.",
      },
      {
        title: "Role-Based Access Control",
        description: "Granular access control policies restricting sensitive department data to authorized users.",
      },
    ],
    myRole: [
      "Engineered the full system architecture from database design to API delivery.",
      "Built the multi-stage approval engine and user directory interfaces.",
      "Configured production servers and automated database backups.",
    ],
    outcomes: [
      "Reduced internal operational processing time by 60%.",
      "Achieved 100% digital audit compliance across organizational departments.",
    ],
  },
  {
    id: "multilingual-ai",
    title: "Multilingual Code Explanation AI",
    subtitle: "AI-powered system that takes code as input and explains it across 5 different programming languages, making complex code easier to understand and compare.",
    role: "AI Engineer",
    categoryBadges: ["AI", "LLM APIs", "Code Analysis"],
    model: "AI Code Analysis Engine",
    overview: "Multilingual Code Explanation AI parses code snippets in Python, TypeScript, Java, C++, and Go, generating line-by-line semantic explanations and cross-language translation breakdowns.",
    targetAudience: "Developers, Students, Code Reviewers, and Technical Leads.",
    challenge: "Deciphering legacy or cross-language code logic requires deep syntax familiarity and manual documentation research.",
    approach: "Engineered structured LLM prompt pipelines combined with AST code parsers to extract semantic meaning and translate across target languages.",
    whatIBuilt: [
      "AST Code Parser & Tokenizer",
      "Multi-LLM Prompt Engineering Pipeline",
      "Parallel Language Translation Engine",
      "Interactive Side-by-Side Explanation UI",
      "Code Comparison Diff Viewer",
    ],
    howItWorks: [
      { step: "01", title: "Code Input", desc: "Paste code snippet in any supported language." },
      { step: "02", title: "AST Analysis", desc: "System parses AST structure and variable dependencies." },
      { step: "03", title: "LLM Processing", desc: "RAG and prompt pipeline generate semantic explanations." },
      { step: "04", title: "Parallel Output", desc: "Side-by-side translation and line-by-line breakdown." },
    ],
    systemArchitecture: {
      frontend: "Next.js · React · TypeScript · Tailwind CSS",
      backend: "Python · FastAPI · REST APIs",
      database: "Redis Cache Store",
      storage: "Vector & Prompt Cache",
      ai: "LLM APIs · LangChain · OpenRouter",
      infrastructure: "Vercel · Cloudflare",
    },
    technicalImplementation: [
      {
        title: "Prompt Pipeline Engineering",
        description: "Structured prompt templates with context injection to guarantee precise line-by-line explanations.",
      },
      {
        title: "High-Speed Response Caching",
        description: "Redis caching layer storing frequent code pattern explanations to bypass redundant LLM API calls.",
      },
    ],
    myRole: [
      "Designed and developed the core AI prompt pipeline and backend APIs.",
      "Built the interactive split-pane code diff and explanation frontend.",
      "Optimized latency and token usage through prompt caching.",
    ],
    outcomes: [
      "Instant code translation and syntax explanations across 5 major languages.",
      "Significantly reduced onboarding time for developers reading complex codebases.",
    ],
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation System",
    subtitle: "Automated WhatsApp workflows for customer communication, notifications, follow-ups and business interactions.",
    role: "Automation & Integration Engineer",
    categoryBadges: ["Automation", "WhatsApp API", "Webhooks"],
    model: "Event-Driven Messaging System",
    overview: "WhatsApp Automation System connects business databases and payment webhooks directly to the Meta WhatsApp Business API for instant transactional alerts, automated follow-ups, and interactive chatbot flows.",
    targetAudience: "Sales Teams, Customer Support Managers, and Business Operations.",
    challenge: "Manual WhatsApp messaging led to delayed responses, lost sales leads, and lack of integration with core business software.",
    approach: "Designed an event-driven webhook processing pipeline with asynchronous queue retry handling and message template rendering.",
    whatIBuilt: [
      "WhatsApp Business API Integration Engine",
      "Asynchronous Webhook Listener & Queue",
      "Interactive Chatbot Flow Builder",
      "Customer Notification Analytics Dashboard",
      "Automated Follow-Up Scheduler",
    ],
    howItWorks: [
      { step: "01", title: "Event Trigger", desc: "Database event, payment webhook, or form signup occurs." },
      { step: "02", title: "Queue Processing", desc: "Task queue formats payload and selects message template." },
      { step: "03", title: "API Dispatch", desc: "Delivers message via Meta WhatsApp Business API." },
      { step: "04", title: "Status Sync", desc: "Tracks delivery, read receipts, and user replies." },
    ],
    systemArchitecture: {
      frontend: "React · TypeScript · Tailwind CSS",
      backend: "Node.js · Express · REST APIs",
      database: "PostgreSQL · Redis Queue (BullMQ)",
      storage: "Cloudflare Storage",
      infrastructure: "Docker · Railway",
    },
    technicalImplementation: [
      {
        title: "Asynchronous Queue Pipeline",
        description: "BullMQ queue backed by Redis handling spikes in message volume with automatic rate-limit throttling.",
      },
      {
        title: "Webhook Security & Verification",
        description: "HMAC signature verification validating incoming Meta webhooks prior to queue dispatch.",
      },
    ],
    myRole: [
      "Built the full WhatsApp API integration engine and webhook processing queues.",
      "Created automated template variable substitution and message logging.",
      "Configured monitoring and delivery success tracking dashboards.",
    ],
    outcomes: [
      "Automated 95% of routine customer notification follow-ups.",
      "Achieved 99.8% message delivery reliability with zero missed triggers.",
    ],
  },
  {
    id: "education-quiz",
    title: "Learning Management & Assessment System",
    subtitle: "Comprehensive Learning Management System (LMS) for delivering course materials, structured assessments, student submissions, and real-time performance analytics.",
    role: "Product Engineer",
    categoryBadges: ["Education", "LMS", "Analytics"],
    model: "Learning Management Platform",
    overview: "Learning Management & Assessment System is a full-featured educational LMS designed to manage course content, structure assignments, deliver interactive quizzes, track student submissions, and provide real-time academic performance analytics.",
    targetAudience: "Students, Instructors, Educational Institutions, and Academic Directors.",
    challenge: "Legacy educational setups fragment course content delivery, student assignments, and performance tracking across disconnected tools without centralized learning management.",
    approach: "Architected a unified LMS hub connecting course module hierarchies, timed assessment engines, automated grading, and student progress tracking dashboards.",
    whatIBuilt: [
      "Course & Learning Material Hub",
      "Interactive Quiz & Assessment Player",
      "Student Submission & Evaluation Pipeline",
      "Real-Time Progress & Mastery Analytics",
      "Teacher & Administrative LMS Portal",
    ],
    howItWorks: [
      { step: "01", title: "Course Access", desc: "Students access structured course modules, lessons, and study materials." },
      { step: "02", title: "Interactive Practice", desc: "Complete structured assignments, quizzes, and self-assessments." },
      { step: "03", title: "Submission & Evaluation", desc: "Automated evaluation and submission tracking with instant feedback." },
      { step: "04", title: "Analytics & Progress", desc: "Comprehensive performance analytics tracking student growth and subject mastery." },
    ],
    systemArchitecture: {
      frontend: "React · TypeScript · Tailwind CSS · Zustand",
      backend: "Node.js · Express · REST APIs",
      database: "PostgreSQL · Supabase",
      storage: "Cloudflare R2 Storage",
      infrastructure: "Vercel · Cloudflare",
    },
    technicalImplementation: [
      {
        title: "Client-Side State Persistence",
        description: "Local storage fallback syncing course progress and quiz answers to backend asynchronously to guard against internet drops.",
      },
      {
        title: "Instant Scoring & Evaluation Engine",
        description: "Optimized server-side evaluation algorithm calculating test results and progress metrics in under 50ms.",
      },
    ],
    myRole: [
      "Developed the interactive course player, quiz engine, and student diagnostic reporting UI.",
      "Engineered score evaluation logic and learning progress tracking APIs.",
      "Optimized content loading times across mobile and low-bandwidth connections.",
    ],
    outcomes: [
      "Supported thousands of student course activities and assessment submissions seamlessly.",
      "Sub-50ms score report generation and real-time progress syncing.",
    ],
  },
  {
    id: "crm-system",
    title: "CRM Management System",
    subtitle: "CRM platform for managing leads, customer information, follow-ups, interactions and business pipeline workflows.",
    role: "Full-Stack Engineer",
    categoryBadges: ["Business", "CRM", "Pipeline"],
    model: "Custom Enterprise CRM",
    overview: "CRM Management System is a tailored client relationship platform built to manage sales pipelines, lead intake, interaction histories, deal stages, and account management.",
    targetAudience: "Sales Executives, Account Managers, and Business Owners.",
    challenge: "Generic commercial CRMs were bloated, difficult to customize, and required expensive user license tiers.",
    approach: "Designed a clean drag-and-drop deal pipeline interface paired with fast inline note logging and task reminders.",
    whatIBuilt: [
      "Drag-and-Drop Deal Kanban Board",
      "Lead Intake & Contact Management Directory",
      "Interaction History & Activity Timeline",
      "Automated Follow-up Task Triggers",
      "Sales Pipeline Conversion Analytics",
    ],
    howItWorks: [
      { step: "01", title: "Lead Intake", desc: "Captures lead data from web forms, imports, or manual entry." },
      { step: "02", title: "Pipeline Routing", desc: "Assigns lead to sales rep and initializes deal card." },
      { step: "03", title: "Stage Tracking", desc: "Move deal across pipeline stages (Qualify → Demo → Closed)." },
      { step: "04", title: "Activity Logging", desc: "Records calls, emails, and follow-up tasks in deal timeline." },
    ],
    systemArchitecture: {
      frontend: "Next.js · React · TypeScript · Tailwind CSS",
      backend: "Node.js · NestJS · REST APIs",
      database: "PostgreSQL · Redis",
      storage: "AWS S3 Storage",
      infrastructure: "Docker · DigitalOcean",
    },
    technicalImplementation: [
      {
        title: "Interactive Kanban Pipeline",
        description: "Optimized drag-and-drop Kanban interface with optimistic UI updates and instant database sync.",
      },
      {
        title: "Activity Audit Timeline",
        description: "Chronological logging of lead interactions ensuring clear visibility for account managers.",
      },
    ],
    myRole: [
      "Engineered the full CRM application frontend and REST endpoints.",
      "Built the interactive drag-and-drop sales pipeline board.",
      "Designed data schemas for contacts, deals, and activity logs.",
    ],
    outcomes: [
      "Increased lead follow-up efficiency and sales pipeline transparency.",
      "Replaced expensive third-party CRM subscriptions with a custom tailored tool.",
    ],
  },
];

const whatIBuildCapabilities = [
  {
    title: "PRODUCTS",
    badge: "SaaS & Digital Products",
    icon: <Layout className="w-5 h-5 text-blue" />,
    items: "SaaS platforms · Education products · Business applications",
    desc: "End-to-end digital web products designed for usability, scale, and clear user value.",
  },
  {
    title: "SYSTEMS",
    badge: "Enterprise Architectures",
    icon: <Server className="w-5 h-5 text-blue" />,
    items: "ERP · LMS · CRM · Management systems",
    desc: "Robust organizational backbones connecting complex data flows and permission hierarchies.",
  },
  {
    title: "INTELLIGENCE",
    badge: "AI & Agents",
    icon: <Sparkles className="w-5 h-5 text-blue" />,
    items: "AI applications · AI agents · RAG · Intelligent workflows",
    desc: "Practical AI integration using LLMs, autonomous agents, and contextual vector search.",
  },
  {
    title: "AUTOMATION",
    badge: "Operational Workflows",
    icon: <Workflow className="w-5 h-5 text-blue" />,
    items: "Business workflows · Integrations · Operational automation",
    desc: "Streamlined data pipelines and webhook triggers that eliminate manual repetitive tasks.",
  },
];

const heroCategoryPills = [
  { name: "PRODUCTS", icon: <Layout className="w-3.5 h-3.5" /> },
  { name: "CLIENT WORK", icon: <Briefcase className="w-3.5 h-3.5" /> },
  { name: "AI", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { name: "EDUCATION", icon: <GraduationCap className="w-3.5 h-3.5" /> },
  { name: "SYSTEMS", icon: <Server className="w-3.5 h-3.5" /> },
];

const WorkPage: React.FC = () => {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const featuredScrollRef = useRef<HTMLDivElement>(null);

  const handleCaseStudySelect = (project: CaseStudyData) => {
    if (
      [
        "zhi",
        "neet",
        "durkkas",
        "isml",
        "internal-erp",
        "multilingual-ai",
        "whatsapp-automation",
        "education-quiz",
        "crm-system",
      ].includes(project.id)
    ) {
      navigate(`/case-study/${project.id}`);
      window.scrollTo(0, 0);
    } else {
      setSelectedCaseStudy(project);
    }
  };

  const handleFeaturedScroll = () => {
    if (featuredScrollRef.current) {
      const { scrollLeft, clientWidth } = featuredScrollRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / (clientWidth * 0.85));
        setActiveFeaturedIndex(Math.min(Math.max(index, 0), featuredCaseStudies.length - 1));
      }
    }
  };

  const scrollToFeaturedProject = (index: number) => {
    if (featuredScrollRef.current) {
      const containerWidth = featuredScrollRef.current.clientWidth;
      const targetScroll = containerWidth * 0.85 * index;
      featuredScrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActiveFeaturedIndex(index);
    }
  };

  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const capabilityScrollRef = useRef<HTMLDivElement>(null);

  const handleCapabilityScroll = () => {
    if (capabilityScrollRef.current) {
      const { scrollLeft, clientWidth } = capabilityScrollRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / (clientWidth * 0.85));
        setActiveCapabilityIndex(Math.min(Math.max(index, 0), whatIBuildCapabilities.length - 1));
      }
    }
  };

  const scrollToCapability = (index: number) => {
    if (capabilityScrollRef.current) {
      const containerWidth = capabilityScrollRef.current.clientWidth;
      const targetScroll = containerWidth * 0.85 * index;
      capabilityScrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
      setActiveCapabilityIndex(index);
    }
  };

  const openDemo = () => setDemoOpen(true);

  return (
    <div className="min-h-screen surface-mint text-foreground font-sans flex flex-col">
      {/* GLOBAL NAVBAR */}
      <Navbar onBookDemo={openDemo} />

      {/* ── 01: HERO SECTION (CLEAN, CRISPY & PROFESSIONAL) ── */}
      <section className="relative w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-14 sm:py-20 border-b border-border/70 surface-mint font-sans">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-5 sm:gap-7">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-semibold text-blue uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            WORK & SYSTEMS
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            What I’ve <span className="text-blue">Built.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl px-2">
            A collection of products, platforms and systems I’ve worked on across education, business, AI and technology.
          </p>

          {/* Clean Category Pills Bar */}
          <div className="w-full pt-2">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
              {heroCategoryPills.map((tag) => (
                <div
                  key={tag.name}
                  className="px-4 py-2 bg-white rounded-full border border-border/80 text-foreground/85 text-xs font-bold uppercase tracking-wider shadow-2xs hover:border-blue/40 hover:text-blue transition-all duration-200 inline-flex items-center gap-2 shrink-0 cursor-default"
                >
                  <span className="text-blue">{tag.icon}</span>
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Scope Spec Strip */}
          <div className="pt-6 border-t border-border/60 w-full max-w-2xl flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-foreground/75 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
              <span>4 Production Platforms</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
              <span>Multi-Tenant Architecture</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
              <span>Full-Stack & AI Systems</span>
            </div>
          </div>

        </div>
      </section>


      {/* ── 02: FEATURED WORK (SELECTED PROJECTS - DESKTOP EDITORIAL / MOBILE SWIPEABLE CAROUSEL) ── */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-12 md:py-18 border-b border-border/70">
        <div className="max-w-7xl lg:max-w-[1500px] mx-auto space-y-10 sm:space-y-12">
          
          {/* Section Header - Fully Centered */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-extrabold text-blue uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              02 — FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              Selected <span className="text-blue">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 font-medium max-w-xl">
              4 core production platforms with deep technical case study breakdowns.
            </p>
          </div>


          {/* 4 COLUMNS CARDS GRID ON DESKTOP & MOBILE TOUCH-SWIPEABLE CAROUSEL ON MOBILE */}
          <div className="w-full pt-4 relative">
            <div
              ref={featuredScrollRef}
              onScroll={handleFeaturedScroll}
              className="flex lg:grid lg:grid-cols-4 gap-6 sm:gap-8 w-full overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 pt-1 px-1"
            >
              {featuredCaseStudies.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => handleCaseStudySelect(project)}
                  className="group relative rounded-2xl border p-6 sm:p-7 flex flex-col justify-between text-left gap-5 transition-all duration-300 hover:-translate-y-2 overflow-hidden shrink-0 w-[85vw] sm:w-[380px] lg:w-auto snap-center bg-gradient-to-b from-blue-50/70 via-white to-white border-blue-200/90 hover:border-blue-400/90 shadow-md hover:shadow-xl hover:shadow-blue-500/15 cursor-pointer"
                >
                  {/* Top Gradient Accent Bar */}
                  <div className="h-1.5 w-full absolute top-0 left-0 right-0 bg-gradient-to-r from-blue via-blue-600 to-indigo-600" />

                  {/* Ambient Blur Glow Blob */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500 bg-blue/15" />

                  {/* Header: Project Index & Role Tag */}
                  <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3 relative z-10">
                    <span className="w-8 h-8 rounded-lg bg-white shadow-2xs border border-border/80 flex items-center justify-center text-xs font-extrabold text-foreground/80 group-hover:text-blue transition-colors font-mono tracking-tighter">
                      0{idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border shadow-2xs bg-blue/15 text-blue border-blue/30">
                      {project.role}
                    </span>
                  </div>

                  {/* Business Model & Tags Line */}
                  <div className="flex flex-col gap-2 relative z-10">
                    <span className="text-xs font-bold text-foreground tracking-tight">
                      {project.model}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.categoryBadges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2 py-0.5 rounded-full text-[10px] font-extrabold text-blue bg-blue/10 border border-blue/20 uppercase tracking-wider"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col gap-2 flex-grow relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-blue transition-colors tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Key System Highlight Line */}
                  <div className="pt-2.5 border-t border-border/40 text-[11px] font-semibold text-foreground flex items-center gap-2 relative z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0 animate-pulse" />
                    <span className="leading-snug truncate">{project.overview}</span>
                  </div>

                  {/* Action Link Footer - Highlighted CTA Button Pill */}
                  <div className="pt-3 border-t border-border/40 flex items-center justify-between mt-auto w-full relative z-10">
                    <span className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center justify-between shadow-2xs bg-blue/10 group-hover:bg-blue text-blue group-hover:text-white border border-blue/20 group-hover:border-blue">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Pagination Indicator Dots */}
            <div className="flex lg:hidden items-center justify-center gap-2 pt-4">
              {featuredCaseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToFeaturedProject(idx)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    activeFeaturedIndex === idx ? "w-8 bg-blue shadow-xs" : "w-2.5 bg-blue/25 hover:bg-blue/40"
                  }`}
                  aria-label={`Go to featured project ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>



      {/* ── 03: OTHER WORK (PRISTINE EDITORIAL DIVIDE LIST) ── */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-12 md:py-18 border-b border-border/70 surface-mint font-sans">
        <div className="max-w-7xl lg:max-w-[1400px] mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Header - Fully Centered */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-extrabold text-blue uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              03 — OTHER WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              Other <span className="text-blue">Work</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 font-medium max-w-xl">
              Additional genuine projects, workflows and operational systems.
            </p>
          </div>


          {/* SLEEK EDITORIAL LIST CONTAINER */}
          <div className="w-full border-t border-b border-border/70 divide-y divide-border/60">
            {otherWorkCaseStudies.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleCaseStudySelect(item)}
                className="py-5 sm:py-6 px-3 sm:px-5 flex flex-col gap-3 group cursor-pointer transition-all duration-200 hover:bg-white/90 rounded-2xl border border-transparent hover:border-blue-200/80 shadow-2xs hover:shadow-md"
              >
                {/* Top Line: Number + Title + Area Badge + Explore Pill */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20 shrink-0 group-hover:bg-blue group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-blue transition-colors tracking-tight truncate">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="hidden sm:inline-block px-3 py-1 bg-blue/10 border border-blue/20 text-blue font-extrabold text-[10px] sm:text-xs rounded-full uppercase tracking-wider">
                      {item.categoryBadges[0]}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-blue/10 group-hover:bg-blue text-blue group-hover:text-white border border-blue/20 group-hover:border-blue transition-all flex items-center gap-1.5 shadow-2xs">
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Description Line */}
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal pl-9 sm:pl-11 max-w-5xl">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>





      {/* ── 05: WHAT I ACTUALLY BUILD ── */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-12 md:py-18 border-b border-border/70">
        <div className="max-w-7xl lg:max-w-[1400px] mx-auto space-y-10 sm:space-y-12">
          
          {/* Header - Fully Centered */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue/10 border border-blue/20 text-xs font-extrabold text-blue uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              05 — WHAT I ACTUALLY BUILD
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              From interfaces to <span className="text-blue">infrastructure.</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 font-medium max-w-xl">
              Practical technical domain capabilities built for performance and real utility.
            </p>
          </div>


          {/* 4 Capabilities Cards Grid (Desktop 4 Columns / Mobile Touch-Swipeable Carousel) */}
          <div className="w-full relative">
            <div
              ref={capabilityScrollRef}
              onScroll={handleCapabilityScroll}
              className="flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 w-full overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 lg:pb-0 pt-1 px-1"
            >
              {whatIBuildCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-border/80 p-6 flex flex-col justify-between gap-4 shadow-2xs hover:border-blue/40 transition-all group shrink-0 w-[85vw] sm:w-[360px] lg:w-auto snap-center"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-extrabold text-blue bg-blue/10 px-2.5 py-0.5 rounded-full border border-blue/20">
                        0{idx + 1}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-blue/10 flex items-center justify-center">
                        {cap.icon}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-blue transition-colors">
                      {cap.title}
                    </h3>

                    <div className="text-xs font-semibold text-blue bg-blue/5 border border-blue/10 p-2.5 rounded-xl leading-relaxed">
                      {cap.items}
                    </div>
                  </div>

                  <p className="text-xs text-foreground/80 leading-relaxed font-normal pt-2 border-t border-border/60">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Pagination Indicator Dots */}
            <div className="flex lg:hidden items-center justify-center gap-2 pt-4">
              {whatIBuildCapabilities.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCapability(idx)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    activeCapabilityIndex === idx ? "w-8 bg-blue shadow-xs" : "w-2.5 bg-blue/25 hover:bg-blue/40"
                  }`}
                  aria-label={`Go to capability ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 06: FINAL CTA SECTION ── */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-14 sm:py-20 surface-mint text-foreground border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="text-xs font-mono font-extrabold text-blue uppercase tracking-widest bg-blue/10 border border-blue/20 px-3.5 py-1 rounded-full">
            06 — FINAL CTA
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Have something worth <span className="text-blue">building?</span>
          </h2>

          <p className="text-base sm:text-lg text-foreground/85 max-w-xl font-medium leading-relaxed">
            Let’s talk about turned ideas into practical technology systems that deliver real results.
          </p>

          <button
            onClick={openDemo}
            className="group inline-flex items-center gap-3 bg-blue text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-blue/20 hover:shadow-xl hover:shadow-blue/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer mt-2"
          >
            <span>Let’s Talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer onBookDemo={openDemo} />

      {/* MODALS */}
      <CaseStudyModal
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        caseStudy={selectedCaseStudy}
        onBookDemo={openDemo}
      />
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

export default WorkPage;
