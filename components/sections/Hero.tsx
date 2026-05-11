"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface HeroProps {
  photoSrc?: string;
  photoAlt?: string;
  isReady?: boolean;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex items-center justify-between px-6 sm:px-12 py-8 relative z-50 w-full"
    >
    </motion.nav>
  );
}

function FeatureItem({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-1.5 group cursor-default">
      <span className="text-[10px] font-bold text-primary tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">
        {number}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white/50 transition-colors">
        {label}
      </span>
      <span className="text-sm font-semibold text-white/80">{title}</span>
    </motion.div>
  );
}

export function Hero({
  photoSrc = "/unBGPhotos.png",
  photoAlt = "Profile Photo",
  isReady = false,
}: HeroProps) {
  const isMobile = useMobile();

  return (
    <section className="relative min-h-screen flex flex-col">

      {/* ── Fixed Global Background Gradients ── */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
        {/* Vibrant Tech-Noir Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,oklch(0.7_0.25_250_/_0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,oklch(0.7_0.25_250_/_0.1),transparent_40%)]" />
      </div>

      {/* ── Hero-Specific Background Elements (Profile Image) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">

        {/* Profile Image - Centered (desktop) / Top-right (mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1, y: 50 }}
          animate={isReady ? { opacity: 0.6, scale: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={cn(
            "absolute",
            isMobile
              ? "bottom-[30%] right-[-5%] w-[60vw] max-w-[320px]"
              : "inset-0 flex items-center justify-center mt-20"
          )}
        >
          <div className={cn(
            "relative aspect-square",
            isMobile ? "w-full" : "w-full max-w-[800px] lg:max-w-[1400px]"
          )}>
            <Image
              src={photoSrc}
              alt={photoAlt}
              fill
              sizes={isMobile ? "300px" : "(max-width: 1024px) 800px, 1400px"}
              className="object-contain object-bottom grayscale brightness-75 contrast-125"
              priority
            />
            {/* Minimal mask just for the top edge if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />

            {isMobile && (
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col flex-1">

        <Navbar />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? "show" : "hidden"}
          className="flex-1 flex flex-col justify-between px-5 sm:px-8 lg:px-12 pt-2 sm:pt-8 pb-8 sm:pb-12"
        >
          {/* Middle Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center mt-0 sm:mt-12">
            {/* Left: Massive Typography */}
            <div className="lg:col-span-8 flex flex-col">
              <motion.span variants={itemVariants} className="text-base sm:text-lg lg:text-xl font-semibold tracking-[0.15em] text-primary mb-3 sm:mb-4">
                HEY, I&apos;M A
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-[2.5rem] sm:text-6xl md:text-7xl xl:text-[9rem] font-black leading-[0.9] tracking-[-0.04em] uppercase"
              >
                Secure <br />
                <span className="text-white/10 outline-text">Systems</span> <br />
                Engineer
              </motion.h1>
            </div>

            {/* Right: Secondary Description */}
            <div className="lg:col-span-4 lg:pl-12">
              <motion.div variants={itemVariants} className="max-w-sm lg:max-w-xs lg:ml-auto">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">
                  I build secure systems and break insecure ones.
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Full-stack expertise in Next.js &amp; TypeScript blended with advanced MSc research in blockchain vulnerabilities and DeFi security.
                </p>

                <Link
                  href="#contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full bg-primary hover:bg-primary/90 text-white mt-6 sm:mt-8 px-8 h-14 group gap-3 shadow-lg shadow-primary/30 text-sm font-semibold"
                  )}
                >
                  Get in Touch
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom: Numbered Trust Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-12 border-t border-white/10">
            <FeatureItem number="#01" label="Core Expertise" title="Full-Stack Engineering" />
            <FeatureItem number="#02" label="Research Focus" title="Smart Contract Security" />
            <FeatureItem number="#03" label="Track Record" title="1+ Year Industry Exp" />
            <FeatureItem number="#04" label="Academic Level" title="MSc Cybersecurity" />
          </div>

        </motion.div>
      </div>

      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.15);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
