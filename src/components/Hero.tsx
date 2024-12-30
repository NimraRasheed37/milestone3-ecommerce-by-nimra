'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';  // Importing the Image component

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/img/slider/new arrivals 1.jpg',
    '/img/slider/Harry-Potter.webp',
    '/img/slider/css.jpeg',
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative top-1 w-full h-[300px] sm:h-[500px] overflow-hidden shadow-xl">
      {/* Images Slider */}
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-[500px] flex-shrink-0">
            {/* Using Next.js Image component */}
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] sm:h-full object-fill"
              layout="responsive"
              width={1000}  // Set an appropriate width for the image
              height={500}  // Set an appropriate height for the image
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-red-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Prev and Next Buttons */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &#8249;
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % images.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Hero;
