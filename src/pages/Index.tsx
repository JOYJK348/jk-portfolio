import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import EngagementSection from "@/components/EngagementSection";
import Footer from "@/components/Footer";
import BookDemoModal from "@/components/BookDemoModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <main className="min-h-screen">
      <Navbar onBookDemo={openDemo} />
      <HeroSection onBookDemo={openDemo} />
      <ExpertiseSection />
      <ExperienceSection />
      <AboutSection />
      <TechStackSection />
      <EngagementSection onBookDemo={openDemo} />

      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <Footer onBookDemo={openDemo} />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
