'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const PromotionalBanner: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Automatically slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const goToPrevious = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center h-auto mx-auto mt-6 overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="left-6 bg-black bg-opacity-50 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-75"
      >
        ❮
      </button>

      {/* Image */}
      <div className="w-[1200px] h-[500px] border ml-5 shadow-2xl transition-transform duration-200 ease-out">
        <Image
          width={0} height={0}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className=" w-[1200px] h-[500px] rounded-lg shadow-lg"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className=" ml-6 bg-black bg-opacity-50 text-white text-2xl rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-75"
      >
        ❯
      </button>
    </div>
  );
};

export default PromotionalBanner;
