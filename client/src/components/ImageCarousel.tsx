"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative h-[260px] sm:h-[360px] md:h-[460px]">
        {images.map((image, index) => {
          const isHiddenOnMobile = image.id === 1 || image.id === 3;
          return (
            <div
              key={image.id}
              className={cn(
                "absolute inset-0 w-full transition-opacity duration-700 ease-in-out",
                index === currentIndex ? "opacity-100" : "opacity-0",
                isHiddenOnMobile ? "hidden md:block" : "block"
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-40 p-4 text-white">
                <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">
                  {image.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg">
                  {image.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-75"
        aria-label="Next"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 w-2 rounded-full",
              index === currentIndex ? "bg-white" : "bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
