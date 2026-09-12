import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SampleWorkSection from "@/components/SampleWorkSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import EngagementSection from "@/components/EngagementSection";
import BookDemoModal from "@/components/BookDemoModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <main className="min-h-screen">
      <Navbar onBookDemo={openDemo} />
      <HeroSection onBookDemo={openDemo} />
      <SampleWorkSection />
      <ExpertiseSection />
      <ExperienceSection />
      <AboutSection />
      <EngagementSection onBookDemo={openDemo} />


      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

      {/* Footer Section */}
      <footer className="w-full bg-white border-t border-border/80 py-10">
        <div className="max-w-7xl lg:max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 text-center sm:text-left">
            {/* Left Block: Jay Kumar S */}
            <div>
              <h4 className="text-base font-bold text-foreground tracking-wider uppercase">
                JAY KUMAR S
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Software Engineer & Entrepreneur
              </p>
            </div>

            {/* Right Block: Agaran */}
            <div className="sm:text-right">
              <h4 className="text-base font-bold text-foreground tracking-wider uppercase">
                AGARAN
              </h4>
              <a
                href="https://agaran.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-blue hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                agaran.in <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jay Kumar S. All rights reserved.
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </main>
  );
};

export default Index;
