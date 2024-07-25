'use client';

// components/Swiper.tsx

import { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules from Swiper
import { Grid, Pagination } from 'swiper/modules';
import Image from "next/image";

interface SwiperProps {
    children: ReactNode;
}

const SwiperCmp: React.FC<SwiperProps> = ({ children }) => {
    const swiperRef = useRef<any>(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="relative">
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Grid, Pagination]}
                breakpoints={{
                    // When window width is >= 640px
                    640: {
                        slidesPerView: 1, // Mobile
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 3, // Desktop
                    },
                }}
                className="mySwiper"
            >
                {children}
            </Swiper>

            <div className="absolute -bottom-28 right-10 flex space-x-4 m-4">
                <button
                    onClick={handlePrev}
                    className="bg-blue-500 rounded-full p-4 border shadow hover:bg-white hover:border-blue-500 group"
                >
                    <ArrowLeft className="text-blue-50 w-4 h-4 group-hover:text-blue-500 " />
                </button>

                <button
                    onClick={handleNext}
                    className="bg-blue-500 p-4 rounded-full border shadow hover:bg-white hover:border-blue-500 group"
                >
                    <ArrowRight className="text-blue-50 w-4 h-4 group-hover:text-blue-500" />
                </button>
            </div>
        </div>
    );
};

export default SwiperCmp;

const ArrowLeft: React.FC<{ className: string }> = ({ className }) => (
    <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
            fill="currentColor"
        />
    </svg>
);

const ArrowRight: React.FC<{ className: string }> = ({ className }) => (
    <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
            fill="currentColor"
        />
    </svg>
);
