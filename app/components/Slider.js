"use client"; // Required if using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import images from the public directory
const slides = [
  "/home/slide-2.jpg",
  "/home/slide-1.jpg",
  "/home/slide-3.jpeg",
  "/home/slide-4.jpeg",
  "/home/slide-5.jpeg",
];

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000, // Adjusted to 4 seconds for better UX
        disableOnInteraction: false,
      }}
      className="w-full h-[90vh]"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index} className="relative">
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0} // Prioritize loading first image
          />
          {index === 0 && (
            <h2 className="absolute top-20 right-32 text-4xl font-semibold text-white drop-shadow-md">
              Biggest Furniture World!
            </h2>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
