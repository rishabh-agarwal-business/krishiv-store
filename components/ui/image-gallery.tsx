"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

interface ImageGalleryProps {
    images: string[];
    alt: string;
    autoPlay?: boolean;
    interval?: number;
    showThumbnails?: boolean;
    className?: string;
}

export function ImageGallery({
    images,
    alt,
    autoPlay = false,
    interval = 3000,
    showThumbnails = true,
    className = '',
}: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [imageZoom, setImageZoom] = useState(false);

    const handlePrevious = () => {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={className}>
            {/* Main Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedIndex}
                        src={images[selectedIndex]}
                        alt={`${alt} - Image ${selectedIndex + 1}`}
                        className={`w-full h-full object-cover cursor-zoom-in ${imageZoom ? 'scale-150' : ''} transition-transform duration-300`}
                        onClick={() => setImageZoom(!imageZoom)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>

                {images.length > 1 && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black"
                            onClick={handleNext}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </>
                )}
            </div>

            {/* Thumbnails */}
            {showThumbnails && images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${index === selectedIndex
                                ? 'border-orange-500 scale-105'
                                : 'border-transparent hover:border-gray-300'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`${alt} thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}