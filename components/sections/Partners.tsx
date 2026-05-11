"use client";

import Image from "next/image";
import { partners } from "@/lib/partner";
import { motion } from "framer-motion";

export function Partners() {
  return (
    <section className="pb-32 pt-0 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass group p-6 rounded-2xl flex flex-col items-center text-center gap-4 border-white/5 hover:border-primary/20 transition-all duration-500 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[320px]"
              >
                <div className="relative w-28 h-14 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>

                <p className="text-xs text-muted-foreground/80 italic leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  &ldquo;{partner.testimonial}&rdquo;
                </p>

                <div className="mt-2 pt-4 border-t border-white/5 w-full flex justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/10 group-hover:text-primary/60 transition-colors duration-500">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
