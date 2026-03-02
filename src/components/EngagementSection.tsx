import React from "react";

const EngagementSection = ({ onBookDemo }: { onBookDemo: () => void }) => {
    return (
        <section className="relative px-6 py-10 overflow-hidden bg-background">
            {/* Soft background */}
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, hsl(210 40% 98%) 0%, hsl(0 0% 100%) 100%)" }}
            />
            <div className="absolute top-[-80px] right-[-60px] w-[350px] h-[350px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "hsl(217 91% 60%)" }} />
            <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: "hsl(152 69% 50%)" }} />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* CTA banner */}
                <div className="relative rounded-3xl overflow-hidden border border-blue/10 shadow-lg shadow-blue/5">
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(217 91% 97%) 0%, hsl(152 69% 96%) 100%)" }} />
                    <div className="relative z-10 px-8 py-10 md:px-14 flex flex-col md:flex-row items-center gap-8 justify-between">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/15 border border-blue/20 text-[10px] font-bold text-blue uppercase tracking-widest mb-4">
                                🚀 Let's Build Together
                            </div>
                            <h3 className="text-xl md:text-2xl font-extrabold text-foreground leading-tight mb-2">
                                Let's Build Structured Systems
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                                If you're looking to move from manual operations to structured automation, I am open to discussions and collaborations.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto items-center md:items-end">
                            <button
                                onClick={onBookDemo}
                                className="inline-flex items-center justify-center gap-2 bg-blue text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-blue/25 hover:shadow-xl hover:shadow-blue/35 hover:-translate-y-0.5 transition-all duration-300 text-sm w-full sm:w-auto"
                            >
                                🗓️ Book a Demo Session
                            </button>
                            <p className="text-[11px] font-semibold text-muted-foreground/80 flex items-center gap-1.5 px-2">
                                ✉️ Further Support: <a href="mailto:joyjk348@gmail.com" className="text-blue hover:underline">joyjk348@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngagementSection;
