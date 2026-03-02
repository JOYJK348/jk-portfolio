import { PlayCircle, Camera, FileText } from "lucide-react";

const SampleWorkSection = () => (
  <section id="sample-work" className="relative px-6 py-20 overflow-hidden bg-background">
    {/* Rich background pattern */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(135deg, hsl(217 91% 98%) 0%, hsl(0 0% 100%) 50%, hsl(152 69% 97%) 100%)",
      }}
    />

    {/* Decorative Grid Overlay */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(hsl(217 91% 40%) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }}
    />

    {/* Decorative blobs */}
    <div
      className="absolute top-[-40px] right-[-40px] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none animate-pulse"
      style={{ background: "hsl(217 91% 60%)" }}
    />
    <div
      className="absolute bottom-[-40px] left-[-40px] w-[250px] h-[250px] rounded-full opacity-10 blur-3xl pointer-events-none animate-pulse"
      style={{ background: "hsl(152 69% 50%)" }}
    />

    <div className="relative z-10 max-w-4xl mx-auto">
      {/* Section heading */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-[10px] font-bold text-blue uppercase tracking-widest mb-6">
          ✨ Coming Soon: Project Showcase
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tight mb-4">
          Sample Work Examples
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          I'm currently preparing a comprehensive showcase of my recent automation builds.
          Real results, real efficiency.
        </p>
      </div>

      {/* Premium Informational Card */}
      <div className="relative rounded-[2rem] overflow-hidden border border-blue/10 bg-white/70 backdrop-blur-md shadow-2xl p-8 md:p-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative z-10">

          {/* Item 1 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center text-blue shadow-sm">
              <PlayCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Live Demo Scenarios</h3>
              <p className="text-xs text-muted-foreground leading-relaxed px-4">Interactive video walkthroughs of automated dashboards.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center gap-4 border-y md:border-y-0 md:border-x border-border/50 py-8 md:py-0">
            <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center text-green shadow-sm">
              <Camera className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Process Screenshots</h3>
              <p className="text-xs text-muted-foreground leading-relaxed px-4">Step-by-step visuals showing before & after automation.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-sm">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">Detailed Case Studies</h3>
              <p className="text-xs text-muted-foreground leading-relaxed px-4">In-depth reports on time saved and ROI for each business.</p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue"></span>
            </span>
            <span className="text-xs font-bold text-foreground tracking-wide uppercase">Curating Client Results...</span>
          </div>
          <div className="max-w-xs mx-auto h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-blue rounded-full animate-progress-shimmer w-[70%]" style={{
              backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              backgroundSize: '200px 100%'
            }} />
          </div>
          <p className="mt-4 text-[11px] font-semibold text-muted-foreground">
            Wait for the final reveal. My automation builds are worth the wait!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SampleWorkSection;
