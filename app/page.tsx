'use client';

import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import Splash from "@/components/ui/splash";
import { useState, useEffect } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showSplash]);

  return (
    <div className="flex flex-col min-h-screen">
      {showSplash && (
        <Splash onComplete={() => setShowSplash(false)} />
      )}
      <main
        className={`flex-1 transition-opacity duration-1000 ease-in-out ${showSplash ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <Hero isReady={!showSplash} />
        <Projects />
        <Research />
        <About />
        <Contact />
      </main>
    </div>
  );
}
