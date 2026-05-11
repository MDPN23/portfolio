"use client";

import { projects } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const DustParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
      {[...Array(15)].map((_, i) => {
        // Deterministic pseudo-random values to prevent hydration mismatch
        const xStart = (i * 13) % 100;
        const yStart = (i * 27) % 100;
        const xEnd = (i * 17) % 100;
        const yEnd = (i * 31) % 100;
        const duration = 10 + (i % 5) * 2;
        const delay = (i % 3) * 2;

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
            initial={{ x: `${xStart}%`, y: `${yStart}%`, opacity: 0 }}
            animate={{
              x: [`${xStart}%`, `${xEnd}%`, `${xStart}%`],
              y: [`${yStart}%`, `${yEnd}%`, `${yStart}%`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Where full-stack engineering meets security research — shipped to production.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 20 },
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
            >
              <Card className="glass group hover:border-primary/40 hover:border-glow transition-all duration-500 bg-black/40 relative overflow-hidden h-full flex flex-col">
                <DustParticles />

                {/* Subtle top border highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-4 flex-none">
                  <div className="flex justify-between items-start mb-2">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{project.category}</span>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <CardDescription className="text-muted-foreground/80 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 text-[10px] uppercase tracking-wider font-bold">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">Category</span>
                    <span className="text-[10px] text-accent font-mono font-bold uppercase tracking-widest">{project.metric}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
