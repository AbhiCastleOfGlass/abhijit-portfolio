"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { stats } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-0 lg:min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
      id="hero"
    >
      {/* 21st.dev Spotlight Mouse Tracker */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 hidden md:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(234, 88, 12, 0.08), transparent 70%)`,
        }}
      />

      {/* Top ambient spotlight beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Background geometric grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse shrink-0" />
              <span>Senior Systems Engineer @ Infosys · Stellantis</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.15rem,9vw,5.25rem)] leading-[1.05] font-display font-bold uppercase mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Geometrical<br />
            Assurance &amp;<br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-amber-600 animate-gradient-x"
              style={{ backgroundSize: '200% auto' }}
            >
              Dimensional Mastery
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl leading-relaxed font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Forging micron-level precision in automotive assemblies. Specializing in 3D tolerance stack-up analysis (<strong className="text-foreground">CETOL</strong>), <strong className="text-foreground">Siemens NX</strong> design integration, and variation simulation. <span className="text-primary font-semibold">Every micron matters.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('vehicle-inspector')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all shadow-[0_4px_20px_rgba(234,88,12,0.35)] hover:shadow-[0_6px_25px_rgba(234,88,12,0.5)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Sparkles size={18} />
              Inspect 3D Vehicle
              <ArrowRight size={16} />
            </button>
            <div className="flex gap-3 sm:contents">
              <a
                href="/resume.pdf"
                download
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3.5 bg-card hover:bg-muted border border-border hover:border-primary text-foreground rounded-xl text-sm sm:text-base font-semibold transition-all hover:text-primary hover:-translate-y-0.5 shadow-xs"
              >
                <Download size={17} />
                <span>Resume (PDF)</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-card hover:bg-muted border border-border text-muted-foreground hover:text-foreground rounded-xl text-sm sm:text-base font-semibold transition-all cursor-pointer"
              >
                <Mail size={16} />
                Contact
              </button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-2.5 sm:gap-6 md:gap-12 pt-10 sm:pt-14 mt-10 sm:mt-14 border-t border-border/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col p-3 sm:p-4 rounded-xl bg-card/60 border border-border/50 backdrop-blur-xs hover:border-primary/40 transition-colors">
                <div className="flex items-baseline gap-0.5 sm:gap-1">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary tabular-nums">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
