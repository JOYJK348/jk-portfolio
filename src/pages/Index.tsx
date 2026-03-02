import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import SampleWorkSection from "@/components/SampleWorkSection";
import AboutSection from "@/components/AboutSection";
import EngagementSection from "@/components/EngagementSection";
import BookDemoModal from "@/components/BookDemoModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <main className="min-h-screen">
      <HeroSection onBookDemo={openDemo} />
      <AboutSection />
      <ProblemsSection />
      <WorkProcessSection />
      <SampleWorkSection />
      <EngagementSection onBookDemo={openDemo} />


      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

      <footer className="px-6 py-8 text-center text-sm text-muted-foreground border-t border-border bg-background">
        © {new Date().getFullYear()} Jay – Workflow Automation Specialist
      </footer>
      <WhatsAppButton />
    </main>
  );
};

export default Index;
