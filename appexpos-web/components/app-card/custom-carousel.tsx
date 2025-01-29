"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1,
    );
  };

  return (
    <div className="relative w-full h-[500px] rounded-2xl mx-auto overflow-hidden group bg-gray-100">
      {/* Image Container */}
      <div className="w-[200px] relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 overflow-hidden rounded-2xl">
        <Link href="/app-detail/appId_xxxx/scene-flows">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full h-full">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout="responsive"
                  width={393}
                  height={852}
                />
              </div>
            ))}
          </div>
        </Link>
      </div>
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft />
      </button>
      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronRight />
      </button>
      {/* Indicators */}
      <div className="absolute top-4 right-4 flex transition-opacity opacity-0 group-hover:opacity-100">
        {images.map((_, index) => (
          <Dot
            key={index}
            strokeWidth={10}
            size={12}
            className={`${
              index === currentIndex ? "text-black" : "text-gray-400"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
