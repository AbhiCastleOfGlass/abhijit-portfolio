"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award, Sparkles, X } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{image: string, title: string} | null>(null);

  // Group certifications by category
  const coreCerts = certifications.filter(cert => cert.category === 'core');
  const aiCerts = certifications.filter(cert => cert.category === 'ai');

  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-3">
            Certifications
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-balance">
            Leveling up continuously
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Core Engineering Certs */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={20} />
              Core Engineering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreCerts.map((cert, index) => (
                <CertCard
                  key={cert.id}
                  cert={cert}
                  index={index}
                  onClick={() => cert.image && setSelectedCert({ image: cert.image, title: cert.title })}
                />
              ))}
            </div>
          </div>

          {/* AI & Digital Certs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2 mt-8 border-t border-border pt-12">
              <Sparkles className="text-blue-500" size={20} />
              AI & Digital Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiCerts.map((cert, index) => (
                <CertCard
                  key={cert.id}
                  cert={cert}
                  index={index}
                  isAi={true}
                  onClick={() => cert.image && setSelectedCert({ image: cert.image, title: cert.title })}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox for Certificates */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(null);
              }}
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-4xl flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full aspect-[4/3] bg-card md:rounded-lg overflow-hidden shadow-2xl mb-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-2"
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white font-display text-xl md:text-2xl font-bold text-center"
              >
                {selectedCert.title}
              </motion.h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Sub-component for individual certificate cards
function CertCard({ cert, index, isAi = false, onClick }: { cert: any, index: number, isAi?: boolean, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={`flex items-start gap-4 p-4 md:p-5 bg-card border border-border rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${cert.image ? 'cursor-pointer hover:border-primary/50' : ''}`}
    >
      <div className={`w-12 h-12 min-w-12 rounded-lg flex items-center justify-center ${isAi ? 'bg-blue-500/10 text-blue-500' : 'bg-primary/10 text-primary'}`}>
        {isAi ? <Sparkles size={22} /> : <Award size={22} />}
      </div>
      <div>
        <h4 className="font-semibold text-sm md:text-base leading-tight mb-1.5 line-clamp-2">
          {cert.title}
        </h4>
        <div className="text-xs text-muted-foreground flex items-center gap-1.5">
          <span>{cert.issuer}</span>
          <span className="w-1 h-1 rounded-full bg-border inline-block"></span>
          <span>{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}