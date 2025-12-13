'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ScrollImageSequenceProps {
    totalFrames: number;
    folderPath: string;
    filePrefix: string;
    fileExtension: string;
    videoX: MotionValue<string>;
    videoY: MotionValue<string>;
    videoScale: MotionValue<number>;
    className?: string;
    videorotate: MotionValue<number>;

}

export default function ScrollImageSequence({
                                                totalFrames,
                                                folderPath,
                                                filePrefix,
                                                fileExtension,
                                                videoX,
                                                videoY,
                                                videorotate,
                                                videoScale,
                                                className
                                            }: ScrollImageSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Preload all images
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = [];

            for (let i = 1; i < totalFrames; i++) {
                const frameNumber = String(i).padStart(3, '0');
                const imagePath = `${folderPath}${filePrefix}${frameNumber}.${fileExtension}`;

                const promise = new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = document.createElement('img');
                    img.src = imagePath;
                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.error('Failed to load:', imagePath);
                        reject();
                    };
                });

                imagePromises.push(promise);
            }

            try {
                const loadedImages = await Promise.all(imagePromises);
                setImages(loadedImages);
                setIsLoading(false);
                console.log(`✅ Loaded ${totalFrames} frames successfully!`);
            } catch (error) {
                console.error('Error loading frames:', error);
            }
        };

        preloadImages();
    }, [totalFrames, folderPath, filePrefix, fileExtension]);

    // Handle scroll and render frames
    useEffect(() => {
        if (isLoading || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!canvas || !context) return;

        let rafId: number;

        const render = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));

            const frameIndex = Math.min(
                Math.floor(scrollFraction * totalFrames),
                totalFrames - 1
            );

            if (frameIndex !== currentFrame) {
                setCurrentFrame(frameIndex);

                const img = images[frameIndex];
                if (img && img.complete) {
                    // FIXED: Set canvas to actual image dimensions
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;

                    context.clearRect(0, 0, canvas.width, canvas.height);

                    // Draw full image without cropping
                    context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
                }
            }

            rafId = requestAnimationFrame(render);
        };

        rafId = requestAnimationFrame(render);

        return () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [isLoading, images, currentFrame, totalFrames]);

    if (isLoading) {
        return (
            <div className={`${className} flex items-center justify-center`}>
                <div className="text-white text-sm">Loading...</div>
            </div>
        );
    }

    return (
        <motion.canvas
            ref={canvasRef}
            style={{
                x: videoX,
                y: videoY,
                scale: videoScale,
                willChange: 'transform',
                width: '100%',
                height: '100%',
                rotateZ:videorotate,
                objectFit: 'contain'
            }}
            className={className}
        />
    );
}
