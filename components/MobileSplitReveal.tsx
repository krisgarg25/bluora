'use client';

import { easeInOut, easeOut, motion, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MobileSplitRevealProps {
    isLoaded: boolean;
    onComplete: () => void;
    textOpacity?: MotionValue<number>;
}

export default function MobileSplitReveal({ isLoaded, onComplete, textOpacity }: MobileSplitRevealProps) {
    const [animationState, setAnimationState] = useState<'loading' | 'revealing' | 'landed'>('loading');
    const [canReveal, setCanReveal] = useState(false);

    // Minimum load time (1.5s)
    useEffect(() => {
        const timer = setTimeout(() => setCanReveal(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Trigger Reveal
    useEffect(() => {
        // Prevent running on Desktop (>= 768px) to avoid conflicting with WaterMorph
        if (typeof window !== 'undefined' && window.innerWidth >= 768) return;

        if (isLoaded && canReveal && animationState === 'loading') {
            setAnimationState('revealing');
            setTimeout(() => onComplete(), 600);
            setTimeout(() => setAnimationState('landed'), 1000);
        }
    }, [isLoaded, canReveal, onComplete, animationState]);

    return (
        <div className="absolute inset-0 z-50 pointer-events-none bg-transparent min-h-[300px]">

            {/* BLU: Moves to Top CENTER */}
            {/* Wrapper for Scroll Opacity */}
            <motion.div className="absolute inset-0" style={{ opacity: textOpacity }}>
                <motion.div
                    className="absolute w-full flex justify-center"
                    initial={{ top: "45vh", left: "50%", x: "-50%", y: "-55%" }}
                    animate={animationState !== 'loading' ? {
                        top: "27vh", // Approx match for py-24
                        left: "50%", // CENTERED
                    } : {
                        top: "45vh", left: "50%", x: "-50%", y: "-55%"
                    }}
                    transition={{ duration: 1.2, ease: easeInOut }} // smooth easeOut
                >
                    <motion.h1
                        className="text-[35vw] font-black leading-none tracking-wider text-transparent bg-clip-text select-none scale-y-125 origin-bottom"
                        initial={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))" }}
                        animate={animationState !== 'loading' ? {
                            backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0))"
                        } : {
                            backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))"
                        }}
                        transition={{ duration: 1.2, ease: easeInOut }}
                    >
                        BLU
                    </motion.h1>
                </motion.div>

                {/* ORA: Moves to Bottom CENTER */}
                <motion.div
                    className="absolute w-full flex justify-center"
                    initial={{ top: "50vh", left: "50%", x: "-50%", y: "5%" }}
                    animate={animationState !== 'loading' ? {
                        top: "67vh", // top instead of bottom to prevent glitches
                        left: "50%",
                        x: "-50%",
                        y: "0%"
                    } : {
                        top: "50vh", left: "50%", x: "-50%", y: "5%"
                    }}
                    transition={{ duration: 1.2, ease: easeInOut }}
                >
                    <motion.h1
                        className="text-[35vw] font-black leading-none tracking-wider text-transparent bg-clip-text select-none scale-y-125 origin-top"
                        initial={{ backgroundImage: "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))" }}
                        animate={animationState !== 'loading' ? {
                            backgroundImage: "linear-gradient(to top, rgba(255,255,255,0.2), rgba(255,255,255,0))"
                        } : {
                            backgroundImage: "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))"
                        }}
                        transition={{ duration: 1.2, ease: easeInOut }}
                    >
                        ORA
                    </motion.h1>
                </motion.div>
            </motion.div>
        </div>
    );
}
