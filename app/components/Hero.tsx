"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { stats } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background geometric pattern - subtle tech feel */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)',
             backgroundSize: '32px 32px'
           }}>
      </div>

      {/* Subtle glowing orb in background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10" ref={containerRef}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
              Ready for the next challenge
            </div>
          </motion.div>

          <motion.h1
            className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-display font-bold uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Geometrical<br />
            Assurance<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-red-500 animate-gradient-x" style={{ backgroundSize: '200% auto' }}>
              Engineer
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Forging dimensional precision in automotive assemblies — tolerance analysis, GD&T mastery, and cross-functional problem solving. <strong className="text-foreground">Every micron matters.</strong>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all shadow-[0_4px_14px_rgba(234,88,12,0.3)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Get in Touch
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-card hover:bg-muted border border-border hover:border-primary text-foreground rounded-lg font-semibold transition-all hover:text-primary hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 md:gap-16 pt-12 mt-12 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl md:text-5xl font-bold text-primary tabular-nums">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="font-display text-2xl font-bold text-primary">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-1">
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