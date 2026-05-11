import { personalInfo, skills, coreCapabilities } from "@/lib/data";
import { Badge } from "../ui/badge";
import { Shield, Search, Zap } from "lucide-react";

const iconMap = {
  "Security Architecture": Shield,
  "Adversarial Analysis": Search,
  "Full-Stack Execution": Zap,
};

export function About() {
  return (
    <section id="capabilities" className="py-24 bg-black/40 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Technical <span className="text-primary">Capabilities</span></h2>
            <div className="space-y-6 mb-12">
              {coreCapabilities.map((cap) => {
                const Icon = iconMap[cap.title as keyof typeof iconMap] || Shield;
                return (
                  <div key={cap.title} className="glass p-6 rounded-2xl group hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg">{cap.title}</h3>
                      <Badge variant="outline" className="ml-auto text-[10px] uppercase tracking-tighter opacity-50 font-mono">
                        {cap.tag}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="glass p-8 rounded-3xl border-primary/10 mb-12">
              <h3 className="text-2xl font-bold mb-6">Security-First Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {personalInfo.bio}
              </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 border-white/5 bg-white/5 hover:border-primary/50 transition-colors font-mono text-[10px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Security & Research</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.security.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1 border-white/5 bg-white/5 hover:border-accent/50 transition-colors font-mono text-[10px]">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
