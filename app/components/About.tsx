"use client";

import { motion } from "framer-motion";
import { Ruler, Box, Car, Workflow, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-3">
            About Me & Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-balance max-w-3xl">
            Precision is not a goal — it&apos;s a daily engineering discipline
          </h2>
        </motion.div>

        {/* 21st.dev Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Bento Card 1: Featured Tolerance Engineering (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Ruler size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  Core Discipline
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                3D Tolerance Stack-Up & VSA
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                As a Senior Systems Engineer at Infosys (Stellantis Program), I perform rigorous 1D and 3D variation simulation analysis using <strong className="text-foreground">CETOL</strong> and <strong className="text-foreground">Siemens NX</strong> to identify geometric risks, confirm clearances, and optimize stack-up allocations before tooling.
              </p>
            </div>

            {/* Yield Metric Callout Box */}
            <div className="bg-muted/50 border border-border p-5 rounded-xl flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-semibold block mb-1">
                  Assembly Yield Impact
                </span>
                <span className="font-display text-2xl font-bold text-foreground">
                  54.34% <span className="text-muted-foreground font-normal">→</span> <span className="text-primary font-bold">99.90%</span>
                </span>
              </div>
              <div className="text-xs text-muted-foreground font-medium max-w-[200px]">
                Recommended critical design & tolerance changes per million units.
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: CAD & Digital Validation (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Box size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  Daily Driver
                </span>
              </div>

              <h3 className="font-display text-xl font-bold mb-3">
                Siemens NX & Vis Mockup
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Primary daily CAD environment for design modifications, PMI verification, and digital assembly mockups. Conducting rigorous gap & flush checks and clash reviews in Teamcenter Vis Mockup.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-muted text-muted-foreground">NX PLM-1 Author</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-muted text-muted-foreground">Teamcenter</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-muted text-muted-foreground">CATIA V5</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Automotive Domain (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-green-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                  <Car size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-500 border border-green-500/20">
                  Domain
                </span>
              </div>

              <h3 className="font-display text-xl font-bold mb-3">
                BIW & Trim Assemblies
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Expertise in Body-in-White (BIW) structures, interior & exterior closures, sheet metal forming, and injection-molded plastic components adhering to ASME Y14.5 and 3-2-1 datum strategies.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-muted text-muted-foreground">ASME Y14.5</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-muted text-muted-foreground">3-2-1 Datums</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-muted text-muted-foreground">DFMEA-MSR</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Process Automation & Leadership (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 bg-card border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-yellow-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-600 dark:text-yellow-500 group-hover:scale-110 transition-transform">
                  <Workflow size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border border-yellow-500/20">
                  Infosys Insta Award 2026
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-3">
                Workflow Automation & Digital Efficiency
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Architected automated Microsoft Power Automate and Microsoft Lists pipelines to streamline project management, minimizing operational clutter and significantly enhancing data transparency with the client.
              </p>
            </div>

            <div className="flex items-center gap-6 flex-wrap pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-xs font-semibold text-foreground">Power Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-xs font-semibold text-foreground">Lean Six Sigma Yellow Belt</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-xs font-semibold text-foreground">Client Transparency Pipelines</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
