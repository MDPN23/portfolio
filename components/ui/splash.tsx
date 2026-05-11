'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface SplashProps {
    onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
    const targetText = "HELLO, I'M NARES";
    const [displayText, setDisplayText] = useState("");
    const [phase, setPhase] = useState<'scramble' | 'hold' | 'fade'>('scramble');

    // ── Scramble Effect (lightweight: fewer chars, half-step iteration) ──
    useEffect(() => {
        if (phase !== 'scramble') return;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                targetText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration || letter === " " || letter === "," || letter === "'") return targetText[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );
            if (iteration >= targetText.length) {
                clearInterval(interval);
                setTimeout(() => setPhase('hold'), 80);
            }
            iteration += 0.5;
        }, 25);
        return () => clearInterval(interval);
    }, [phase, targetText]);

    // ── Phase Transitions (snappier timeline) ──
    const handleComplete = useCallback(() => onComplete(), [onComplete]);

    useEffect(() => {
        if (phase === 'hold') {
            const timer = setTimeout(() => setPhase('fade'), 1200);
            return () => clearTimeout(timer);
        }
        if (phase === 'fade') {
            const timer = setTimeout(handleComplete, 900);
            return () => clearTimeout(timer);
        }
    }, [phase, handleComplete]);

    // ── Only 3 orbits for performance ──
    const orbits = [
        { size: 500, duration: 4, direction: 1, opacity: 0.25 },
        { size: 700, duration: 6, direction: -1, opacity: 0.15 },
        { size: 900, duration: 8, direction: 1, opacity: 0.08 },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden">
            <div className="relative flex items-center justify-center w-full h-full">

                {/* ── Orbital Rings (CSS-driven, GPU-accelerated) ── */}
                {orbits.map((orbit, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{
                            opacity: phase === 'fade' ? 0 : orbit.opacity,
                            scale: phase === 'fade' ? 2.5 : 1,
                        }}
                        transition={{
                            duration: phase === 'fade' ? 0.8 : 1.2,
                            ease: phase === 'fade' ? 'easeIn' : 'easeOut',
                            delay: phase === 'scramble' ? i * 0.15 : 0,
                        }}
                        className="absolute rounded-full"
                        style={{
                            width: `${orbit.size}px`,
                            height: `${orbit.size}px`,
                            border: '1px solid oklch(0.75 0.25 250 / 0.3)',
                            borderTopColor: 'oklch(0.75 0.25 250 / 0.6)',
                            animation: `splash-spin-${orbit.direction > 0 ? 'cw' : 'ccw'} ${orbit.duration}s linear infinite`,
                            willChange: 'transform',
                        }}
                    />
                ))}

                {/* ── Center Glow (single radial, no drop-shadow) ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: phase === 'fade' ? 0 : 0.15,
                    }}
                    transition={{ duration: 1.5 }}
                    className="absolute rounded-full"
                    style={{
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, oklch(0.7 0.25 250 / 0.3), transparent 70%)',
                        willChange: 'opacity',
                    }}
                />

                {/* ── Scramble Text ── */}
                <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                        opacity: phase === 'fade' ? 0 : 1,
                        scale: phase === 'fade' ? 1.1 : 1,
                        y: 0,
                    }}
                    transition={{
                        duration: phase === 'fade' ? 0.7 : 0.6,
                        ease: 'easeOut',
                    }}
                    className="z-10 text-lg sm:text-2xl md:text-3xl font-mono font-medium tracking-[0.25em] text-foreground text-center px-4"
                    style={{
                        textShadow: '0 0 30px oklch(0.75 0.25 250 / 0.4)',
                    }}
                >
                    {displayText}
                </motion.h1>
            </div>

            <style>{`
                @keyframes splash-spin-cw {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes splash-spin-ccw {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
            `}</style>
        </div>
    );
}