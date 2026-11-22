"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const links = [
  { name: "3D Vehicle", href: "vehicle-inspector" },
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Certifications", href: "certifications" },
  { name: "Contact", href: "contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [powerLevel, setPowerLevel] = useState<number | null>(null);

  // Handle scroll events
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          // Determine active section
          const scrollPosition = window.scrollY + 100;
          let found = false;

          for (let i = links.length - 1; i >= 0; i--) {
            const section = document.getElementById(links[i].href);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(links[i].href);
              found = true;
              break;
            }
          }

          if (!found && window.scrollY < 100) {
            setActiveSection("");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize theme
  useEffect(() => {
    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
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
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const handleNavClick = (href: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        scrollToSection(href);
      }, 150);
    } else {
      scrollToSection(href);
    }
  };

  useEffect(() => {
    if (powerLevel === null) return;
    const timer = setTimeout(() => setPowerLevel(null), 3200);
    return () => clearTimeout(timer);
  }, [powerLevel]);

  const checkPowerLevel = () => {
    // Random Scouter reading between 9,001 and 99,999
    const reading = Math.floor(Math.random() * 90999) + 9001;
    setPowerLevel(reading);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-background/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3.5 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(234,88,12,0.4)] group-hover:shadow-[0_0_16px_rgba(234,88,12,0.6)] transition-all shrink-0">
            <span className="text-white text-sm">★</span>
          </div>
          <span className="font-display font-bold text-base sm:text-xl tracking-wider uppercase">Abhijit Ghosh</span>
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
                  className={`px-4 py-3 text-left w-full rounded-md font-medium ${
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
                  onClick={() => {
                    checkPowerLevel();
                    setMobileMenuOpen(false);
                  }}
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

      {/* Non-blocking Scouter HUD Toast */}
      <AnimatePresence>
        {powerLevel !== null && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="status"
            aria-live="polite"
            className="fixed top-20 right-4 sm:right-6 z-[60] px-4 py-2.5 rounded-xl bg-card/95 backdrop-blur-md border border-primary/40 shadow-lg flex items-center gap-3"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping shrink-0" />
            <div className="font-mono text-xs">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Scouter Reading
              </div>
              <div className="text-sm font-bold text-primary tabular-nums">
                {powerLevel.toLocaleString()} <span className="text-foreground/80 font-normal">· OVER 9,000!</span>
              </div>
            </div>
            <button
              onClick={() => setPowerLevel(null)}
              className="p-1 text-muted-foreground hover:text-foreground rounded cursor-pointer"
              aria-label="Dismiss scouter reading"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}