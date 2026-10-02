"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function StackupAnalysisPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      {/* Minimal Header */}
      <header className="flex-none bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3 px-6 z-10 flex items-center justify-between">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span className="font-semibold text-sm">Back to Portfolio</span>
        </Link>
        <div className="font-display font-bold tracking-wide text-foreground">
          Interactive Tool
        </div>
      </header>

      {/* Iframe Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 w-full bg-[#100b09]" // Matching the root bg of the HTML tool
      >
        <iframe
          src="/tolerance-stackup-analysis.html"
          className="w-full h-full border-none"
          title="Tolerance Stack-Up Analysis Tool"
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
}