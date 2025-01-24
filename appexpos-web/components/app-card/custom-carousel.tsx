"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";

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
    <div className="relative w-full h-[450px] rounded-lg mx-auto overflow-hidden group bg-gray-100">
      {/* Image Container */}
      <div className="w-[200px] relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft />
      </button>
      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
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
