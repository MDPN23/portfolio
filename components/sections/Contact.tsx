"use client";

import { personalInfo } from "@/lib/data";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="pt-32 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="glass p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden text-center max-w-5xl mx-auto border border-white/5 bg-black/40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
              Let&apos;s Solve Your Next <br />
              <span className="text-primary">Digital Challenge.</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Ready to bridge the gap between complex business needs and digital solutions? Let&apos;s start a conversation.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <ContactLink
              href={`mailto:${personalInfo.email}`}
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              value={personalInfo.email}
              color="primary"
            />
            <ContactLink
              href={personalInfo.github}
              icon={<FaGithub className="w-5 h-5" />}
              label="GitHub"
              value="MDPN23"
              color="white"
            />
            <ContactLink
              href={personalInfo.linkedin}
              icon={<FaLinkedin className="w-5 h-5" />}
              label="LinkedIn"
              value="Connect"
              color="blue"
            />
          </div>
        </motion.div>

        <motion.div
          className="relative w-240 h-240 mx-auto mt-[-16rem] mb-[-48rem] pointer-events-none"
        >
          <Image
            src="/circular.png"
            alt="Logo"
            fill
            sizes="1200px"
            className="object-contain opacity-5 transition-opacity duration-1000"
          />
        </motion.div>

        <footer className="mt-64 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-bold text-white tracking-tight">© {new Date().getFullYear()} {personalInfo.name}</p>
            <p className="opacity-50">All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">
            <span>Secure by Design</span>
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span>Adversarial by Nature</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

function ContactLink({ href, icon, label, value, color }: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  color: "primary" | "white" | "blue";
}) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    white: "bg-white/10 text-white",
    blue: "bg-blue-500/10 text-blue-400",
  };

  const glowClasses = {
    primary: "group-hover:shadow-[0_0_30px_oklch(var(--primary)/0.2)] group-hover:border-primary/30",
    white: "group-hover:shadow-[0_0_30px_oklch(0.99_0.01_260/0.1)] group-hover:border-white/20",
    blue: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:border-blue-400/30",
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 group min-w-[220px] ${glowClasses[color]}`}
      >
        <div className={`p-3 rounded-xl ${colorClasses[color]} group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
          {icon}
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1 font-bold">{label}</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white/80 group-hover:text-white transition-colors tracking-tight">{value}</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
