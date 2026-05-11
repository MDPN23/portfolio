"use client";

import { personalInfo, skills, coreCapabilities } from "@/lib/data";
import { Badge } from "../ui/badge";
import { Shield, Search, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const iconMap = {
  "Security Architecture": Shield,
  "Adversarial Analysis": Search,
  "Full-Stack Execution": Zap,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function About() {
  return (
    <section id="capabilities" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Security-first engineering across the full stack — from cryptographic design to production deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: Core Capabilities Cards */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {coreCapabilities.map((cap, index) => {
              const Icon = iconMap[cap.title as keyof typeof iconMap] || Shield;
              return (
                <motion.div
                  key={cap.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="glass relative p-8 rounded-2xl group border border-white/5 bg-black/40 hover:bg-black/60 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top border highlight */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(var(--color-primary),0.3)] transition-all duration-500">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg tracking-tight">{cap.title}</h3>
                      <Badge variant="outline" className="ml-auto text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-70 font-mono border-white/10 transition-opacity duration-500">
                        {cap.tag}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed pl-[52px]">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Philosophy + Skills */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass relative p-10 rounded-3xl border border-white/5 bg-black/40 overflow-hidden group">

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                  Security-First <span className="text-accent">Philosophy</span>
                </h3>
                <p className="text-muted-foreground/80 leading-relaxed mb-10 text-sm md:text-base">
                  {personalInfo.bio}
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                      Technical Arsenal
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((skill) => (
                        <motion.div key={skill} whileHover={{ scale: 1.05 }}>
                          <Badge
                            variant="outline"
                            className="px-3 py-1.5 border-white/5 bg-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 font-mono text-[10px] tracking-wider cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
                      Security &amp; Research
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.security.map((skill) => (
                        <motion.div key={skill} whileHover={{ scale: 1.05 }}>
                          <Badge
                            variant="outline"
                            className="px-3 py-1.5 border-white/5 bg-white/5 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 font-mono text-[10px] tracking-wider cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
