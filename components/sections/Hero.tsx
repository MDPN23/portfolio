import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface HeroProps {
  /** Path to your photo — put in /public, e.g. "/photo.jpg" */
  photoSrc?: string;
  photoAlt?: string;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STACK = ["Next.js", "TypeScript", "Node.js", "Solidity", "Python", "PostgreSQL"];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PulseDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block w-2 h-2 rounded-full bg-primary animate-pulse",
        className
      )}
    />
  );
}

function TrustBar() {
  const items = ["1+ Yrs Full-Stack", "MSc Cybersecurity", "DeFi / Web3"];
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-3 sm:gap-4">
          {i > 0 && <span className="text-white/10 text-sm select-none">·</span>}
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/40">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function PhotoCard({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt={alt ?? "Profile photo"}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 50vw, 240px"
          priority
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full border border-dashed border-white/[0.08] flex items-center justify-center">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="text-white/15"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <span className="text-[10px] text-white/15 tracking-[0.25em] uppercase font-medium">
            Photo
          </span>
        </div>
      )}
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}

function StackCard() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/20 mb-3">
        Stack
      </p>
      <div className="flex flex-wrap gap-1.5">
        {STACK.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 rounded-md border border-primary/15 bg-primary/[0.06] text-primary/70 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function AchievementCard() {
  return (
    <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-4">
      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary/50 mb-2">
        Achievement
      </p>
      <p className="text-[12px] text-fore/80 font-medium leading-snug">
        IEEE SCOReD 2024 Best Paper Award
      </p>
      <a href="https://ieeexplore.ieee.org/document/10872676/" className="text-[10px] font-medium leading-snug">View Paper</a>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Hero
// ---------------------------------------------------------------------------

export function Hero({ photoSrc, photoAlt }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Keyframes for drifting orbs */}
      <style>{`
        @keyframes drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, -40px) scale(1.1); }
          50% { transform: translate(-30px, 50px) scale(0.95); }
          75% { transform: translate(40px, 20px) scale(1.05); }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-50px, 30px) scale(1.08); }
          66% { transform: translate(40px, -60px) scale(0.92); }
        }
        @keyframes drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(30px, -20px) scale(1.15); opacity: 0.7; }
        }
      `}</style>

      {/* ── Animated atmospheric orbs ── */}
      <div
        aria-hidden
        className="absolute top-[-20%] right-[-10%] w-[700px] h-[500px] bg-primary/[0.06] rounded-full blur-[180px] pointer-events-none"
        style={{ animation: "drift-1 20s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[400px] bg-accent/[0.04] rounded-full blur-[160px] pointer-events-none"
        style={{ animation: "drift-2 25s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none"
        style={{ animation: "drift-3 18s ease-in-out infinite" }}
      />
      {/* Subtle floating particles */}
      <div
        aria-hidden
        className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-primary/30 animate-pulse"
      />
      <div
        aria-hidden
        className="absolute top-[35%] right-[20%] w-0.5 h-0.5 rounded-full bg-white/20 animate-pulse [animation-delay:1s]"
      />
      <div
        aria-hidden
        className="absolute bottom-[30%] left-[40%] w-0.5 h-0.5 rounded-full bg-primary/20 animate-pulse [animation-delay:2s]"
      />

      <div className="container mx-auto px-5 sm:px-6 py-20 md:py-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">

          {/* ── Left: Content ── */}
          <div className="flex-1 min-w-0 max-w-2xl">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/[0.08] border border-primary/15 text-accent text-xs font-medium mb-8">
              <PulseDot />
              Open to Collaborate
            </div>

            {/* Headline — large, impactful */}
            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl xl:text-[5.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-6">
              I build{" "}
              <span className="text-primary text-glow">secure</span>
              <br className="hidden sm:block" />{" "}
              systems and break
              <br className="hidden sm:block" />{" "}
              insecure ones.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              <strong className="text-foreground/60 font-medium">
                Full-Stack Engineer &amp; Security Researcher.
              </strong>{" "}
              I ship production-grade systems in Next.js / TypeScript and research
              cross-chain bridge vulnerabilities at MSc level.
            </p>

            {/* Trust bar */}
            <TrustBar />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 px-6 h-11 text-sm font-semibold"
                )}
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-white/[0.08] hover:bg-white/[0.04] text-muted-foreground px-6 h-11 text-sm"
                )}
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* ── Right: Profile sidebar ── */}
          <div className="w-full max-w-[300px] lg:w-[280px] flex-shrink-0 flex flex-col gap-3">
            <PhotoCard src={photoSrc} alt={photoAlt} />
            {/* Stack + Achievement side by side */}
            <div className="grid grid-cols-2 gap-3">
              <StackCard />
              <AchievementCard />
            </div>
            {/* Sliding card slot — future implementation */}
          </div>

        </div>
      </div>
    </section>
  );
}