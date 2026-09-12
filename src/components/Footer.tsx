import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

interface FooterProps {
  onBookDemo: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookDemo }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0F172A] text-slate-100 border-t border-slate-800 py-10 sm:py-14 font-sans">
      <div className="max-w-7xl lg:max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24 flex flex-col gap-8 sm:gap-10">
        
        {/* ── TOP / MAIN GRID SECTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center md:items-start text-center md:text-left">
          
          {/* LEFT: Identity */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wider uppercase">
              JAY KUMAR S
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              Software Engineer & Entrepreneur
            </p>
          </div>

          {/* MIDDLE: Quick Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300">
            <button
              onClick={() => handleScrollTo("sample-work")}
              className="hover:text-blue transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => handleScrollTo("expertise")}
              className="hover:text-blue transition-colors cursor-pointer"
            >
              Expertise
            </button>
            <button
              onClick={() => handleScrollTo("experience")}
              className="hover:text-blue transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => handleScrollTo("about")}
              className="hover:text-blue transition-colors cursor-pointer"
            >
              About
            </button>
          </div>

          {/* RIGHT: CTA & Contacts */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <button
              onClick={onBookDemo}
              className="group inline-flex items-center gap-2 bg-blue text-white hover:bg-blue-600 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Email · LinkedIn · WhatsApp */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs font-semibold text-slate-400">
              <a
                href="mailto:joyjk348@gmail.com"
                className="hover:text-blue transition-colors"
              >
                Email
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/jay-kumar-s"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href="https://wa.me/919080558130"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue transition-colors"
              >
                WhatsApp (+91 90805 58130)
              </a>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400">
          {/* Copyright */}
          <p className="font-medium">
            © {new Date().getFullYear()} Jay Kumar S
          </p>

          {/* Agaran Path */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 font-medium">
            <span>Building my own path —</span>
            <span className="text-blue font-extrabold">Agaran.</span>
            <span>·</span>
            <a
              href="https://agaran.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue font-semibold hover:underline inline-flex items-center gap-0.5"
            >
              agaran.in
              <ExternalLink size={10} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
