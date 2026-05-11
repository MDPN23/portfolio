import { projects } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              High-integrity implementations ranging from secure digital wallets to MEV-resistant DeFi protocols.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass group hover:border-primary/40 hover:border-glow transition-all duration-500 bg-black/40 relative overflow-hidden">
              {/* Subtle top border highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{project.category}</span>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <Link href={project.link} className="text-muted-foreground hover:text-primary">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
                <CardDescription className="text-muted-foreground/80 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 text-[10px] uppercase tracking-wider font-bold">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">Status</span>
                  <span className="text-[10px] text-accent font-mono font-bold uppercase tracking-widest">{project.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
