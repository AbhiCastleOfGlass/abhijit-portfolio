"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import {
  Mail,
  Copy,
  Check,
  Download,
  ExternalLink,
  MapPin,
  Sparkles,
  ShieldCheck,
  Send
} from "lucide-react";

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
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
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } else {
        // Fallback for non-secure contexts or webviews
        const textArea = document.createElement("textarea");
        textArea.value = contact.email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            <Sparkles size={14} />
            <span>Recruitment & Engineering Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground text-balance tracking-tight mb-4">
            Let&apos;s Build Reliable Powertrain Systems
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed text-balance max-w-2xl mx-auto">
            Open to senior engineering roles in Geometrical Assurance (GAE), 3D Tolerance Stack-Up (CETOL),
            Siemens NX CAD modeling, and Powertrain Subsystem Packaging.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* Card 1: Direct Email & 1-Click Copy */}
          <div className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail size={22} />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Direct Inquiries
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                Send an Email
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 font-mono break-all">
                {contact.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-border/50">
              <a
                href={`mailto:${contact.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send size={14} />
                <span>Compose</span>
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-muted hover:bg-muted/80 text-foreground transition-colors cursor-pointer border border-border/60"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span className="text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Master Resume Download */}
          <div className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Download size={22} />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Verified Credentials
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                Curriculum Vitae
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                Authentic single-page master GAE resume with verified Stellantis powertrain packaging studies.
              </p>
            </div>

            <div className="pt-2 border-t border-border/50">
              <a
                href={contact.resumeUrl}
                download="Abhijit_Ghosh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-card hover:bg-muted text-foreground border border-border/80 hover:border-primary transition-all duration-200"
              >
                <Download size={14} />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Card 3: Professional Network & LinkedIn */}
          <div className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <LinkedinIcon size={22} />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Professional Network
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                LinkedIn Profile
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                Connect for engineering recommendations, industry updates, and technical discussions.
              </p>
            </div>

            <div className="pt-2 border-t border-border/50">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-card hover:bg-muted text-foreground border border-border/80 hover:border-[#0077b5]/60 transition-all duration-200"
              >
                <span>View LinkedIn</span>
                <ExternalLink size={14} className="text-muted-foreground" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Status & Location Pill Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-4 sm:p-5 rounded-2xl bg-muted/40 border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm font-medium text-foreground">
              Currently Active:{" "}
              <span className="text-muted-foreground">
                Senior Systems Engineer – GAE (Stellantis Project at Infosys)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-primary" />
              <span>{contact.location}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-500" />
              <span>ASME Y14.5 Certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
