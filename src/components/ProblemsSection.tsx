const problems = [
  { icon: "📋", label: "Manual tracking" },
  { icon: "🔕", label: "Missed inquiries" },
  { icon: "🔀", label: "Unstructured follow-ups" },
  { icon: "📡", label: "Poor communication flow" },
  { icon: "🔍", label: "No centralized data visibility" },
  { icon: "👤", label: "Dependency on people instead of systems" },
];

const approach = [
  {
    icon: "🗺️",
    title: "Process Clarity",
    desc: "Every workflow is mapped out before anything is built - no guesswork.",
  },
  {
    icon: "⚙️",
    title: "Practical Usability",
    desc: "Solutions designed for real people, not just tech-savvy users.",
  },
  {
    icon: "📈",
    title: "Scalability",
    desc: "Systems that grow with your business - not outgrown in 6 months.",
  },
  {
    icon: "🔧",
    title: "Long-term Maintainability",
    desc: "Built to last, easy to update and simple to hand over.",
  },
];

const ProblemsSection = () => (
  <section className="px-6 py-10 surface-warm">
    <div className="max-w-5xl mx-auto flex flex-col gap-16">

      {/* ── Top split: Problem | Approach ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* LEFT - The Problem */}
        <div className="flex flex-col gap-5">
          {/* Label */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-500 uppercase tracking-widest">
            ⚠️ The Problem I Solve
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-snug">
            Many growing businesses and institutions{" "}
            <span className="text-red-400">struggle</span> with:
          </h2>

          {/* Problem list */}
          <div className="flex flex-col gap-3">
            {problems.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-red-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-lg leading-none">{p.icon}</span>
                <span className="text-sm font-medium text-foreground">{p.label}</span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
              </div>
            ))}
          </div>

          {/* Closing line */}
          <p className="text-sm text-muted-foreground leading-relaxed border-l-4 border-red-200 pl-4 italic">
            Without structured systems, growth becomes inconsistent and difficult to manage.
            <br /><br />
            That is where <span className="font-semibold text-foreground not-italic">automation and workflow design</span> becomes critical.
          </p>
        </div>

        {/* RIGHT - The Approach */}
        <div className="flex flex-col gap-5">
          {/* Label */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-bold text-blue uppercase tracking-widest">
            ✅ How My Approach Is Different
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-snug">
            I don't build random tools.{" "}
            <span className="text-blue">I design structured systems.</span>
          </h2>

          {/* Approach cards */}
          <div className="flex flex-col gap-3">
            {approach.map((a) => (
              <div
                key={a.title}
                className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-white border border-blue/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-xl leading-none mt-0.5 shrink-0">{a.icon}</span>
                <div>
                  <p className="text-sm font-bold text-foreground">{a.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Goal statement */}
          <div className="px-4 py-4 rounded-xl bg-blue/5 border border-blue/15">
            <p className="text-sm text-foreground leading-relaxed">
              The goal is not just automation -
            </p>
            <p className="text-base font-bold text-blue mt-1">
              but building an operational backbone.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemsSection;
