"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { Mail, Phone, ExternalLink } from "lucide-react";

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-display font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-balance mb-8">
            Let's power up together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Looking for GAE roles, dimensional management projects, or automotive engineering challenges. Let's connect!
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center gap-3 px-6 py-4 bg-card hover:bg-muted border border-border rounded-xl font-medium transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <span className="text-foreground">{contact.email}</span>
            </a>

            <a
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              className="group flex items-center gap-3 px-6 py-4 bg-card hover:bg-muted border border-border rounded-xl font-medium transition-all duration-300 hover:shadow-md hover:border-blue-500/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <span className="text-foreground">{contact.phone}</span>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-card hover:bg-muted border border-border rounded-xl font-medium transition-all duration-300 hover:shadow-md hover:border-blue-600/30 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-transform">
                <LinkedinIcon size={18} />
              </div>
              <span className="text-foreground">LinkedIn Profile</span>
              <ExternalLink size={14} className="text-muted-foreground ml-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}