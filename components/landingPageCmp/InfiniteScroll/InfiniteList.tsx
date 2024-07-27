// components/InfiniteScrollGallery.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Image {
    url: string;
    alt: string;
}

const InfiniteScrollGallery: React.FC = () => {
    const [images, setImages] = useState<Image[]>([
        {
            url: '/images/common/brand1.png',
            alt: ''
        },
        {
            url: '/images/common/brand1.png',
            alt: ''
        },
        {
            url: '/images/common/brand1.png',
            alt: ''
        },
        {
            url: '/images/common/brand1.png',
            alt: ''
        },
        {
            url: '/images/common/brand1.png',
            alt: ''
        }
    ]);
    const [page, setPage] = useState<number>(1);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    // Function to fetch images (replace with your API or logic)
    const fetchImages = useCallback(async (page: number) => {
        // Example fetching logic (replace with your API)
        const response = await fetch(`https://api.example.com/images?page=${page}`);
        const newImages: Image[] = await response.json();
        setImages((prev) => [...prev, ...newImages]);
    }, []);

    useEffect(() => {
        fetchImages(page);
    }, [page, fetchImages]);

    // Intersection Observer to detect when loader is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            ))}
            <div ref={loaderRef} className="h-10"></div>
        </div>
    );
};

export default InfiniteScrollGallery;
