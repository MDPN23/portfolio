import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="glass p-12 rounded-3xl relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />

          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s build something secure.</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Open for collaborations on security research, adversarial testing, and secure software development projects.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">{personalInfo.email}</span>
            </Link>

            <Link
              href={personalInfo.github}
              target="_blank"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
            >
              <div className="p-2 rounded-lg bg-white/10 text-foreground group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">MDPN23</span>
            </Link>

            <Link
              href={personalInfo.linkedin}
              target="_blank"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
            >
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </Link>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-6 rounded-full group">
            Download CV
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 font-mono opacity-50">Secure by Design. Adversarial by Nature.</p>
        </footer>
      </div>
    </section>
  );
}
