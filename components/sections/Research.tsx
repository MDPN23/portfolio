"use client";

import { research } from "@/lib/data";
import { Badge } from "../ui/badge";
import { FileText, Award, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Research() {
  return (
    <section id="research" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Academic <span className="text-accent">Research</span></h2>
          <p className="text-lg text-muted-foreground">
            Formalizing security protocols and cryptographic implementations, validated by IEEE standards.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto md:mx-0">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-[7px] md:left-[11px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-primary/20 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-16">
            {research.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-10 md:pl-16 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Glowing timeline dot */}
                <div className="absolute left-0 md:left-1 top-6 w-4 h-4 rounded-full bg-black border-2 border-accent/80 group-hover:border-accent group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(var(--color-accent),0.6)] transition-all duration-500 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-colors duration-500" />
                </div>

                <div className="glass relative p-8 md:p-10 rounded-2xl border border-white/5 bg-black/40 hover:bg-black/60 transition-all duration-500 overflow-hidden group-hover:-translate-y-1">

                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top border highlight */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <Badge variant={item.status === "Published" ? "default" : "outline"} className={item.status === "Published" ? "bg-accent/10 text-accent border-accent/30 hover:bg-accent/20" : "border-white/10 text-muted-foreground"}>
                        <span className="text-[10px] uppercase tracking-widest font-bold">{item.status}</span>
                      </Badge>
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{item.type}</span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60 font-mono tracking-wider">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground/80 leading-relaxed mb-8 max-w-2xl text-sm md:text-base">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          <FileText className="w-4 h-4 text-primary/70" />
                          {item.institution}
                        </div>
                        {item.status === "Published" && (
                          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest">
                            <Award className="w-4 h-4" />
                            Best Paper Award
                          </div>
                        )}
                      </div>

                      {item.link && item.link !== "#" && (
                        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                          Read Paper
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
