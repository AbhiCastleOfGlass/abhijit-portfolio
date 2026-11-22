"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/lib/data";
import {
  X,
  ExternalLink,
  Zap,
  CheckCircle2,
  ShieldAlert,
  Sliders,
  Layers,
  Wrench,
  Maximize2,
  ArrowUpRight,
  Eye,
  Activity,
  Compass
} from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Lock body scroll when modal or lightbox is open
  useEffect(() => {
    if (activeModalProject || lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProject, lightboxImage]);

  // Handle escape key to close active modal or lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) setLightboxImage(null);
        else if (activeModalProject) setActiveModalProject(null);
      }
    },
    [activeModalProject, lightboxImage]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Extract categories dynamically
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Category visual styles and icons
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "GD&T & Tolerance Tools":
        return {
          icon: Sliders,
          pill: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
          accent: "text-amber-500",
          gradient: "from-amber-500/10 via-transparent to-transparent"
        };
      case "CAD Reference":
        return {
          icon: Layers,
          pill: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
          accent: "text-cyan-500",
          gradient: "from-cyan-500/10 via-transparent to-transparent"
        };
      case "Automation & Tools":
        return {
          icon: Zap,
          pill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
          accent: "text-emerald-500",
          gradient: "from-emerald-500/10 via-transparent to-transparent"
        };
      default:
        return {
          icon: Activity,
          pill: "bg-primary/10 text-primary border-primary/20",
          accent: "text-primary",
          gradient: "from-primary/10 via-transparent to-transparent"
        };
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background CAD grid accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(0,0,0,0))] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            <Compass size={14} />
            <span>Interactive Engineering Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground text-balance tracking-tight mb-4">
            Projects &amp; Engineering Tools
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed text-balance">
            Interactive web calculators, ASME Y14.5 GD&amp;T reference guides, and CAD workbench systems
            built for dimensional engineering workflows.
          </p>
        </motion.div>

        {/* Category Filter Tabs (only shown when > 2 projects) */}
        {projects.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border-border/70"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      isSelected
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className={`grid grid-cols-1 md:grid-cols-2 ${
            filteredProjects.length >= 3 ? "lg:grid-cols-3" : "max-w-5xl mx-auto"
          } gap-6 sm:gap-8`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const theme = getCategoryTheme(project.category);
              const CategoryIcon = theme.icon;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-card border border-border/70 hover:border-primary/50 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Subtle top gradient aura */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${theme.gradient} pointer-events-none`}
                  />

                  {/* Optional Image or Technical Header */}
                  {project.image ? (
                    <div
                      className="relative h-48 w-full bg-muted/40 cursor-pointer overflow-hidden border-b border-border/50"
                      onClick={() => setLightboxImage(project.image || null)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-black/20 to-transparent" />
                      <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={14} />
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 pb-0 flex items-center justify-between">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${theme.pill}`}
                      >
                        <CategoryIcon size={13} />
                        <span>{project.category}</span>
                      </div>
                      {project.datumStrategy && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/80 bg-muted/60 px-2 py-0.5 rounded border border-border/40">
                          ASME 3-2-1
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    {project.image && (
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${theme.pill}`}
                        >
                          <CategoryIcon size={12} />
                          <span>{project.category}</span>
                        </div>
                      </div>
                    )}

                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-1.5">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs font-mono text-muted-foreground mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Key Metrics Pill Grid */}
                    {project.keyMetrics && project.keyMetrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 py-3 px-3 mb-4 rounded-xl bg-muted/40 border border-border/60">
                        {project.keyMetrics.slice(0, 3).map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-xs sm:text-sm font-bold font-display text-foreground tracking-tight">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground truncate font-mono">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Component Scope or Tags */}
                    {project.components && project.components.length > 0 ? (
                      <div className="mb-5">
                        <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sliders size={12} />
                          <span>Subsystem Scope ({project.components.length} components)</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.components.slice(0, 4).map((comp, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground font-medium border border-border/50"
                            >
                              {comp}
                            </span>
                          ))}
                          {project.components.length > 4 && (
                            <span className="text-[11px] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                              +{project.components.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground font-medium border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tool Badges */}
                    {project.tools && (
                      <div className="flex items-center gap-1.5 mb-5 pt-2 border-t border-border/40">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase">
                          Tools:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {project.tools.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/70 text-foreground font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-2 flex items-center gap-2 mt-auto">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-200 cursor-pointer shadow-sm"
                      >
                        <Eye size={14} />
                        <span>Inspect Study</span>
                      </button>

                      {project.link && (
                        <Link
                          href={project.link}
                          target={project.link.startsWith("#") ? undefined : "_blank"}
                          rel={project.link.startsWith("#") ? undefined : "noopener noreferrer"}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-card hover:bg-muted text-foreground border border-border/70 hover:border-border transition-all duration-200"
                          title={project.link.startsWith("#") ? "Scroll to section" : "Open live resource"}
                        >
                          <ArrowUpRight size={15} />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Deep-Dive Engineering Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] sm:max-h-[85vh] bg-card border border-border rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Technical Header */}
              <div className="sticky top-0 z-20 px-4 sm:px-6 py-3.5 sm:py-4 bg-card/95 backdrop-blur-md border-b border-border flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground truncate">
                    Project Overview // {activeModalProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="w-8 h-8 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-1">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {activeModalProject.title}
                  </h3>
                  {activeModalProject.subtitle && (
                    <p className="text-sm font-mono text-primary font-medium">
                      {activeModalProject.subtitle}
                    </p>
                  )}
                  <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                    {activeModalProject.detailedOverview || activeModalProject.description}
                  </p>
                </div>

                {/* KPI Metrics Dashboard */}
                {activeModalProject.keyMetrics && (
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/30 border border-border">
                    {activeModalProject.keyMetrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-2">
                        <div className="text-lg sm:text-2xl font-bold font-display text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subsystem Components Scope */}
                {activeModalProject.components && activeModalProject.components.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Layers size={14} className="text-primary" />
                      <span>Components Scope ({activeModalProject.components.length})</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {activeModalProject.components.map((comp, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-muted/40 border border-border/50 text-xs text-foreground font-medium"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span className="truncate">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Datum Strategy */}
                {activeModalProject.datumStrategy && (
                  <div className="p-4 rounded-xl bg-card border border-border/80 flex items-start gap-3">
                    <Compass size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                        Datum Reference Frame & Alignment Strategy
                      </div>
                      <div className="text-xs sm:text-sm text-foreground font-medium">
                        {activeModalProject.datumStrategy}
                      </div>
                    </div>
                  </div>
                )}

                {/* Engineering Methodology */}
                {activeModalProject.methodology && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Wrench size={14} className="text-primary" />
                      <span>Simulation & Packaging Methodology</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {activeModalProject.methodology.map((step, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-primary shrink-0 mt-0.5"
                          />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Failure Modes Prevented (DFMEA) */}
                {activeModalProject.failureModesPrevented && (
                  <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2 font-bold">
                      <ShieldAlert size={15} />
                      <span>Failure Modes Prevented (DFMEA-MSR)</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeModalProject.failureModesPrevented.map((fm, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-foreground/90 flex items-start gap-2"
                        >
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{fm}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tools Applied */}
                {activeModalProject.tools && (
                  <div className="pt-2 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        Verified Software:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalProject.tools.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono font-bold px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {activeModalProject.link && (
                      <Link
                        href={activeModalProject.link}
                        target={activeModalProject.link.startsWith("#") ? undefined : "_blank"}
                        rel={activeModalProject.link.startsWith("#") ? undefined : "noopener noreferrer"}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline"
                      >
                        <span>Launch Live Resource</span>
                        <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-6 bg-muted/20 border-t border-border flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-muted-foreground truncate">
                  Engineering Resource // {activeModalProject.category}
                </span>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-secondary hover:bg-muted text-foreground transition-colors cursor-pointer shrink-0"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for Project Full-Res Images */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors z-[120] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(null);
              }}
              aria-label="Close image lightbox"
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3] bg-black/40 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Project blueprint preview"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
