'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WaterMorphProps {
    isLoaded: boolean;
    onComplete: () => void;
}

export default function WaterMorphAnimation({ isLoaded, onComplete }: WaterMorphProps) {
    const [animationState, setAnimationState] = useState<'loading' | 'expanding'>('loading');
    const [canExpand, setCanExpand] = useState(false);

    // Bottle Path (Thinner shape)
    const bottlePath = "M 40 10 L 80 10 L 80 40 L 95 55 L 95 190 C 95 198 88 205 80 205 L 40 205 C 32 205 25 198 25 190 L 25 55 L 40 40 L 40 10 Z";

    // Enforce minimum animation time (1.5s) to prevent flickering on fast loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setCanExpand(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Only expand if content is loaded AND minimum time has passed
        if (isLoaded && canExpand) {
            setAnimationState('expanding');
            // Expand and Finish
            const timer = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [isLoaded, canExpand, onComplete]);

    return (
        <div className="absolute inset-0 flex items-center justify-center pr-8 z-50 overflow-visible">
            <motion.svg
                width="120"
                height="220"
                viewBox="0 0 120 220"
                className="drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                initial={{ scale: 1.6, opacity: 1 }}
                animate={{
                    scale: animationState === 'expanding' ? 3.5 : 1.6,
                    opacity: animationState === 'expanding' ? 0 : 1,
                    rotateZ: animationState === 'expanding' ? 5 : 0,
                }}
                transition={{
                    scale: { duration: 0.8, ease: "easeInOut" },
                    opacity: { duration: 0.6, delay: 0.2, ease: "easeOut" },
                    rotateZ: { duration: 0.6, delay: 0.1, ease: "easeOut" }
                }}
            >
                {/* Static Bottle Shape */}
                <motion.path
                    d={bottlePath}
                    fill="#06b6d4"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    fillOpacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                />

                {/* Internal Bubbles / Liquid Effect (Only visible during loading) */}
                {animationState === 'loading' && (
                    <>
                        <motion.circle r="4" fill="white" fillOpacity="0.6"
                            animate={{ y: [180, 40], x: [50, 70], opacity: [0, 0.8, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.circle r="3" fill="white" fillOpacity="0.4"
                            animate={{ y: [190, 60], x: [70, 50], opacity: [0, 0.6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        />
                        <motion.circle r="2" fill="white" fillOpacity="0.3"
                            animate={{ y: [170, 80], x: [60, 60], opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
                        />
                    </>
                )}
            </motion.svg>

            {/* Loading Text */}
            <motion.div
                className="absolute bottom-[10%] text-center pl-3"
                animate={{ opacity: animationState === 'loading' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.p
                    className="text-cyan-300 font-bold tracking-[0.3em] text-xs uppercase animate-pulse"
                >
                    Loading...
                </motion.p>
            </motion.div>
        </div>
    );
}
