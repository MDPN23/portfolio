import { research } from "@/lib/data";
import { Badge } from "../ui/badge";
import { FileText, Award, Calendar } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Academic <span className="text-accent">Research</span></h2>
          <p className="text-lg text-muted-foreground">
            Formalizing security protocols and cryptographic implementations, validated by IEEE standards.
          </p>
        </div>
        
        <div className="space-y-12 max-w-4xl">
          {research.map((item, index) => (
            <div key={index} className="relative pl-10 border-l border-white/10 hover:border-accent/50 transition-colors duration-500 group">
              {/* Glowing timeline dot */}
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-accent/50 border border-accent group-hover:bg-accent group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(var(--color-accent),0.8)] transition-all duration-300" />
              
              <div className="glass p-8 rounded-2xl group-hover:-translate-y-1 group-hover:border-glow transition-all duration-500 bg-black/40">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge variant={item.status === "Published" ? "default" : "outline"} className={item.status === "Published" ? "bg-accent hover:bg-accent/80 text-accent-foreground" : "border-white/10"}>
                    <span className="text-[10px] uppercase tracking-wider font-bold">{item.status}</span>
                  </Badge>
                  <span className="text-[10px] uppercase tracking-widest text-primary/80 font-bold">{item.type}</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <Calendar className="w-3 h-3" />
                    {item.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <FileText className="w-4 h-4 text-primary" />
                    {item.institution}
                  </div>
                  {item.status === "Published" && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                      <Award className="w-4 h-4" />
                      Best Paper Award
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
