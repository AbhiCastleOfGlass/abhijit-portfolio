"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const links = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Certifications", href: "certifications" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll events
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = links.map(link => document.getElementById(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].href);
          return;
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme
  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

  const checkPowerLevel = () => {
    alert("IT'S OVER 9000! 🐉"); // Simplified easter egg for now
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(234,88,12,0.4)] group-hover:shadow-[0_0_16px_rgba(234,88,12,0.6)] transition-all">
            <span className="text-white text-sm">★</span>
          </div>
          <span className="font-display font-bold text-xl tracking-wider uppercase hidden sm:block">Abhijit Ghosh</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeSection === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Easter Egg / Scouter */}
          <button
            onClick={checkPowerLevel}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
            title="Check Power Level"
          >
            <Zap size={14} className="text-primary" />
            <span>Scouter</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary w-9 h-9 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : <div className="w-[18px] h-[18px]" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute w-full bg-card border-b border-border shadow-lg overflow-y-auto max-h-[85vh] left-0 top-full origin-top"
          >
            <nav className="flex flex-col p-4 gap-2">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-3 text-left rounded-md font-medium ${
                    activeSection === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-border">
                <button
                  onClick={checkPowerLevel}
                  className="w-full flex items-center gap-2 px-4 py-3 text-left rounded-md font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Zap size={16} className="text-primary" />
                  Check Power Level
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}