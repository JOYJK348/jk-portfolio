import { Search, Target, Wrench, RefreshCw } from "lucide-react";

const steps = [
  { number: "01", title: "Understand Current Process", icon: Search, color: "text-blue bg-blue-light" },
  { number: "02", title: "Identify Gaps", icon: Target, color: "text-orange bg-orange-light" },
  { number: "03", title: "Build Simple System", icon: Wrench, color: "text-green bg-green-light" },
  { number: "04", title: "Support and Improve", icon: RefreshCw, color: "text-teal bg-teal-light" },
];

const ProcessSection = () => (
  <section className="px-6 py-20 surface-warm">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">How Jay Works</h2>
      <p className="text-muted-foreground text-center mb-12">A clear, repeatable process for every project</p>
      <div className="space-y-4">
        {steps.map(({ number, title, icon: Icon, color }, i) => (
          <div key={number} className="relative">
            {i < steps.length - 1 && (
              <div className="absolute left-6 top-[4.5rem] w-0.5 h-4 bg-border" />
            )}
            <div className="flex items-center gap-5 bg-card rounded-xl p-5 border border-border shadow-sm">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground font-bold text-sm">{number}</span>
                <span className="text-foreground font-semibold">{title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
