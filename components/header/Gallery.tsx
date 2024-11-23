"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      id: 1,
      title: "Snack Display",
      src: "https://www.google.com/imgres?q=image%20placeholder%20f&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1409329028%2Fvector%2Fno-picture-available-placeholder-thumbnail-icon-illustration-design.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&docid=7Q1L1mDaxZwCnM&tbnid=dAqPcR9ZqydOBM&vet=12ahUKEwj35fbeqfKJAxWUSGwGHdnZBa0QM3oECBgQAA..i&w=612&h=437&hcb=2&ved=2ahUKEwj35fbeqfKJAxWUSGwGHdnZBa0QM3oECBgQAA",
      alt: "Organized shelves with colorful snack containers"
    },
    {
      id: 2,
      title: "Packaged Snacks",
      src: "https://www.google.com/imgres?q=image%20placeholder%20f&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1409329028%2Fvector%2Fno-picture-available-placeholder-thumbnail-icon-illustration-design.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fplaceholder-image&docid=7Q1L1mDaxZwCnM&tbnid=dAqPcR9ZqydOBM&vet=12ahUKEwj35fbeqfKJAxWUSGwGHdnZBa0QM3oECBgQAA..i&w=612&h=437&hcb=2&ved=2ahUKEwj35fbeqfKJAxWUSGwGHdnZBa0QM3oECBgQAA",
      alt: "Shelves with packaged snacks and treats"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Room Gallery</h1>
          <div className="flex gap-2">
            <button 
              onClick={previousImage}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[16/9]">
          <div 
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-full h-full relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-gray-900' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;