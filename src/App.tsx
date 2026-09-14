import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkPage from "./pages/WorkPage";
import ZhiCaseStudyPage from "./pages/ZhiCaseStudyPage";
import NeetCaseStudyPage from "./pages/NeetCaseStudyPage";
import DurkkasCaseStudyPage from "./pages/DurkkasCaseStudyPage";
import IsmlCaseStudyPage from "./pages/IsmlCaseStudyPage";
import InternalErpCaseStudyPage from "./pages/InternalErpCaseStudyPage";
import MultilingualAiCaseStudyPage from "./pages/MultilingualAiCaseStudyPage";
import WhatsappAutomationCaseStudyPage from "./pages/WhatsappAutomationCaseStudyPage";
import EducationQuizCaseStudyPage from "./pages/EducationQuizCaseStudyPage";
import CrmSystemCaseStudyPage from "./pages/CrmSystemCaseStudyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/case-study/zhi" element={<ZhiCaseStudyPage />} />
          <Route path="/case-study/neet" element={<NeetCaseStudyPage />} />
          <Route path="/case-study/durkkas" element={<DurkkasCaseStudyPage />} />
          <Route path="/case-study/isml" element={<IsmlCaseStudyPage />} />
          <Route path="/case-study/internal-erp" element={<InternalErpCaseStudyPage />} />
          <Route path="/case-study/multilingual-ai" element={<MultilingualAiCaseStudyPage />} />
          <Route path="/case-study/whatsapp-automation" element={<WhatsappAutomationCaseStudyPage />} />
          <Route path="/case-study/education-quiz" element={<EducationQuizCaseStudyPage />} />
          <Route path="/case-study/crm-system" element={<CrmSystemCaseStudyPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

