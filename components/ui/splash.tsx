'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashProps {
    onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
    const targetText = "Hello I'm Nares, Nice To Meet You";
    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState<'scramble' | 'orbit' | 'fade'>('scramble');

    useEffect(() => {
        if (phase !== 'scramble') return;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#';
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                targetText.split("").map((letter, index) => {
                    if (index < iteration || letter === " ") return targetText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iteration >= targetText.length) {
                clearInterval(interval);
                setTimeout(() => setPhase('orbit'), 50);
            }
            iteration += 1;
        }, 30);
        return () => clearInterval(interval);
    }, [phase]);

    useEffect(() => {
        if (phase === 'orbit') {
            const timer = setTimeout(() => setPhase('fade'), 3000);
            return () => clearTimeout(timer);
        }
        if (phase === 'fade') {
            const timer = setTimeout(() => onComplete(), 1500);
            return () => clearTimeout(timer);
        }
    }, [phase, onComplete]);

    const orbits = Array.from({ length: 7 }, (_, i) => i);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden">
            <div className="relative flex items-center justify-center w-full h-full">
                {orbits.map((i) => {
                    const size = 900 + i * 80;
                    const duration = 2.5 + i * 0.5;
                    // Definisikan komponen warna oklch secara statis
                    const colorL = 0.7 + (i / 6) * 0.28;
                    const colorC = 0.25 - (i / 6) * 0.24;
                    const colorStr = `${colorL} ${colorC} 250`;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{
                                opacity: phase === 'fade' ? 0 : 1,
                                scale: phase === 'fade' ? 8 : 1,
                                // Kita gunakan opacity CSS untuk transisi warna
                                // Daripada menganimasi string 'oklch'
                                filter: phase === 'fade' ? "blur(20px)" : "blur(0px)",
                            }}
                            transition={{
                                duration: phase === 'fade' ? 1.2 : 1.5,
                                ease: phase === 'fade' ? "easeIn" : "easeOut",
                                delay: phase === 'scramble' ? i * 0.12 : 0
                            }}
                            className="absolute rounded-full border-t-2 border-b-2"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                borderColor: 'transparent',
                                borderTopColor: `oklch(${colorStr} / ${phase === 'scramble' ? 0.1 : 1})`,
                                borderBottomColor: `oklch(${colorStr} / ${phase === 'scramble' ? 0.1 : 1})`,
                                transition: 'border-color 1.5s ease-out',
                                filter: `drop-shadow(0 0 12px oklch(${colorStr} / ${phase === 'fade' ? 0.8 : 0.3}))`,
                                animation: `${i % 2 === 0 ? 'spin' : 'spin-reverse'} ${duration}s linear infinite`,
                                zIndex: 5 - i,
                            } as React.CSSProperties}
                        />
                    );
                })}

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: phase === 'fade' ? 0 : 1,
                        scale: phase === 'fade' ? 1.5 : 1,
                        filter: phase === 'fade' ? "blur(12px)" : "blur(0px)",
                        y: 0
                    }}
                    transition={{ duration: phase === 'fade' ? 1 : 0.8, ease: "easeIn" }}
                    className="z-10 text-xl sm:text-3xl font-mono font-medium tracking-[0.2em] text-foreground text-glow text-center px-4"
                >
                    {displayText}
                </motion.h1>
            </div>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
            `}</style>
        </div>
    );
}