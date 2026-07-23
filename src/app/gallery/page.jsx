"use client";
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '@/data/galleryData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : galleryImages.length - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = selectedIndex < galleryImages.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-[#FAFAF8] py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <h1 className="text-6xl font-bold text-[#2E7D32] text-center tracking-tight" style={{ letterSpacing: '-0.02em', lineHeight: '110%' }}>
            Galérie Photo
          </h1>
          <p className="text-lg text-[#5D4037] text-center mt-6 max-w-2xl mx-auto" style={{ lineHeight: '170%' }}>
            Découvrez notre univers à travers des images qui racontent notre histoire, nos valeurs et notre engagement pour l'excellence.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
                <ZoomIn className="text-white" size={24} strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors duration-200 z-10"
            onClick={closeLightbox}
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>

          <button
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>

          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.category}</p>
              <p className="text-sm text-white/50 mt-2">{selectedIndex + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;