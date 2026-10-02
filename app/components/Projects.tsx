"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { X, Microscope, Zap, FileText } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Helper to render placeholder icon for projects without images
  const getProjectIcon = (category: string) => {
    switch(category) {
      case 'Research': return <Microscope size={64} className="text-blue-500 opacity-50" />;
      case 'Automation': return <Zap size={64} className="text-yellow-500 opacity-50" />;
      default: return <FileText size={64} className="text-primary opacity-50" />;
    }
  };

  const getBackgroundForCategory = (category: string) => {
    switch(category) {
      case 'Research': return 'bg-gradient-to-br from-blue-500/20 to-green-500/20';
      case 'Automation': return 'bg-gradient-to-br from-yellow-500/20 to-blue-500/20';
      default: return 'bg-card';
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Projects
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-balance">
            Engineering quests
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-primary/50 flex flex-col h-full cursor-pointer"
              onClick={() => project.image && setSelectedProject(project.image)}
            >
              {/* Cover Image or Placeholder */}
              <div className={`relative h-56 w-full ${getBackgroundForCategory(project.category)} flex items-center justify-center overflow-hidden`}>
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  </>
                ) : (
                  getProjectIcon(project.category)
                )}

                {/* Bottom gradient fade for text overlap */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => {
                    // Give diverse colors to tags based on index or category
                    let tagColor = "bg-primary/10 text-primary";
                    if (tagIndex === 1) tagColor = "bg-blue-500/10 text-blue-500";
                    if (tagIndex === 2) tagColor = "bg-green-500/10 text-green-600 dark:text-green-500";

                    return (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${tagColor}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for Project Images */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(null);
              }}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-[4/3] bg-black md:rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject}
                alt="Project preview"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}