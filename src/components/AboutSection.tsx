const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "SaaS", label: "Multi-tenant Products" },
  { value: "100%", label: "End-to-End Delivery" },
];

const skills = [
  { icon: "🖥️", label: "Frontend & Backend Development" },
  { icon: "⚙️", label: "Workflow Automation" },
  { icon: "🚀", label: "DevOps & CI/CD Pipelines" },
  { icon: "🐳", label: "Docker & Deployment" },
  { icon: "🧪", label: "Automation Testing" },
  { icon: "📊", label: "Product Lifecycle Management" },
];

const AboutSection = () => (
  <section className="px-6 py-10 surface-mint">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest mb-4">
          👨‍💻 About Jay
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
          The Person Behind the Systems
        </h2>
      </div>

      {/* Main split */}
      <div className="flex flex-col md:flex-row gap-10 items-start">

        {/* LEFT - Photo + Stats */}
        <div className="w-full md:w-80 shrink-0 flex flex-col items-center gap-6">
          {/* Profile image */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl ring-2 ring-blue/15">
            <img
              src="/JK.jpg"
              alt="Jay – Workflow Automation Specialist"
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Name + Title badge */}
          <div className="text-center">
            <h3 className="text-xl font-extrabold text-foreground">Jay K</h3>
            <p className="text-sm text-muted-foreground mt-1">Workflow Automation Specialist</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full bg-green/10 border border-green/20 text-xs font-semibold text-green">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Available for Projects
            </div>
          </div>

          {/* Stats */}
          <div className="w-full grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-white/70 rounded-xl border border-border p-3 text-center shadow-sm">
                <span className="text-lg font-extrabold text-blue">{s.value}</span>
                <span className="text-[10px] text-muted-foreground leading-snug mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* LinkedIn */}
          <div className="w-full flex flex-col items-center gap-3 px-4 py-4 rounded-2xl bg-blue/5 border border-blue/15">
            <div className="flex items-center gap-2">
              {/* LinkedIn icon */}
              <svg className="w-5 h-5 text-blue shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <p className="text-xs font-medium text-muted-foreground">
                <span className="font-bold text-foreground">1,000+</span> connections on LinkedIn
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/jay-kumar-s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT - Bio + Skills */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Bio paragraphs */}
          <div className="flex flex-col gap-4 text-justify">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I am <span className="font-bold text-foreground">Jay</span>, a Workflow Automation Specialist helping businesses and educational institutions simplify their operations. I create practical systems that save time, reduce errors and make daily workflows easier to manage.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I specialize in automating <span className="font-semibold text-foreground">business and education workflows</span>, helping organizations grow their customer base while fully automating manual tasks.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              With <span className="font-semibold text-foreground">2 years of experience</span> in software development, I have worked on desktop and web applications, including SaaS and multi-tenant products. I handle the entire product lifecycle - from development, testing and deployment to monitoring - ensuring smooth, reliable and bug-free systems.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I am proficient in <span className="font-semibold text-blue">frontend and backend development</span>, <span className="font-semibold text-orange">DevOps (CI/CD pipelines, Docker)</span> and <span className="font-semibold text-green">automation testing</span>, making sure every system runs perfectly from day one.
            </p>
          </div>

          {/* Goal callout */}
          <div className="px-5 py-4 rounded-2xl bg-blue/5 border-l-4 border-blue">
            <p className="text-sm text-foreground leading-relaxed italic">
              "My focus is on delivering <span className="font-bold not-italic">practical, structured and reliable automation</span> that drives growth and truly makes work easier."
            </p>
          </div>

          {/* Skills grid */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Core Skills</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 border border-border shadow-sm hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <span className="text-base leading-none">{skill.icon}</span>
                  <span className="text-xs font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
