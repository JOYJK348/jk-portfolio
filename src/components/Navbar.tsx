import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  onBookDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBrandClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavWork = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/work") {
      navigate("/work");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border/60 transition-all font-sans">
      <div className="max-w-7xl lg:max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-24 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <button
          onClick={handleBrandClick}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-hidden"
        >
          <div className="relative shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-blue/30 ring-2 ring-blue/10 shadow-xs group-hover:scale-105 group-hover:border-blue transition-all duration-200">
              <img
                src="/JK.jpg"
                alt="Jay Kumar S"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green border-2 border-white animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm sm:text-base font-extrabold text-foreground tracking-tight leading-tight group-hover:text-blue transition-colors">
              JAY KUMAR S
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground tracking-wide leading-none mt-0.5">
              Entrepreneur
            </span>
          </div>
        </button>

        {/* Desktop Nav Links & CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <button
              onClick={handleNavWork}
              className={`text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                location.pathname === "/work"
                  ? "text-blue font-bold"
                  : "text-foreground/80 hover:text-blue"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => handleScrollToSection("experience")}
              className="text-xs sm:text-sm font-semibold text-foreground/80 hover:text-blue transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => handleScrollToSection("about")}
              className="text-xs sm:text-sm font-semibold text-foreground/80 hover:text-blue transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Right CTA */}
          <button
            onClick={onBookDemo}
            className="group inline-flex items-center gap-2 bg-blue text-white hover:bg-blue-700 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-blue/20 hover:shadow-lg hover:shadow-blue/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>Let’s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-1.5 bg-blue text-white font-bold text-xs px-3.5 py-2 rounded-full shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground/80 hover:text-blue transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border/80 px-6 py-4 flex flex-col gap-4 animate-in fade-in-50 duration-200">
          <button
            onClick={handleNavWork}
            className="text-left text-sm font-semibold text-foreground/90 hover:text-blue py-1.5 border-b border-border/40"
          >
            Work
          </button>
          <button
            onClick={() => handleScrollToSection("experience")}
            className="text-left text-sm font-semibold text-foreground/90 hover:text-blue py-1.5 border-b border-border/40"
          >
            Experience
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="text-left text-sm font-semibold text-foreground/90 hover:text-blue py-1.5"
          >
            About
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

