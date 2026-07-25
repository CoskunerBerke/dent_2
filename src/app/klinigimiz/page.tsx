"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryItems } from "@/data/gallery";

export default function ClinicPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <div className="pt-24 bg-[#07111F] min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-brand-blue/30 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Fotoğraf Galerisi</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-white">Kliniğimiz</h1>
          <p className="text-sm text-brand-gray max-w-xl mx-auto">
            Atakule bölgesindeki polikliniğimizden bekleme alanları, muayene odalarımız ve modern dental ünitlerimiz.
          </p>
        </div>
      </section>

      {/* Grid of Images */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="bg-[#0D1B2A]/40 border border-brand-gold/10 rounded overflow-hidden shadow-lg group cursor-pointer hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="relative h-[260px] w-full bg-brand-blue overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay icon on hover */}
                  <div className="absolute inset-0 bg-[#07111F]/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <Maximize2 className="w-8 h-8 text-brand-gold" />
                  </div>
                </div>
                <div className="p-4 border-t border-brand-gold/5 bg-[#07111F]/80">
                  <span className="text-[10px] font-semibold text-brand-gold uppercase tracking-widest">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-brand-white text-base mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-[#07111F]/95 flex flex-col justify-center items-center p-4 select-none">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-brand-blue/80 text-brand-offwhite hover:text-brand-gold border border-brand-gold/10 cursor-pointer focus:outline-none"
            aria-label="Galeriyi kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <div className="relative max-w-5xl w-full h-[60vh] sm:h-[75vh] flex justify-center items-center">
            {/* Prev Image */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:-left-16 p-3 rounded-full bg-brand-blue/80 text-brand-offwhite hover:text-brand-gold border border-brand-gold/10 cursor-pointer focus:outline-none z-10"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative w-full h-full rounded overflow-hidden border border-brand-gold/20">
              <Image
                src={galleryItems[selectedIdx].image}
                alt={galleryItems[selectedIdx].altText}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Next Image */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:-right-16 p-3 rounded-full bg-brand-blue/80 text-brand-offwhite hover:text-brand-gold border border-brand-gold/10 cursor-pointer focus:outline-none z-10"
              aria-label="Sonraki görsel"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption text */}
          <div className="text-center mt-6 space-y-2">
            <span className="text-xs text-brand-gold uppercase tracking-wider font-semibold">
              {galleryItems[selectedIdx].categoryLabel}
            </span>
            <h4 className="font-serif font-bold text-brand-white text-lg">
              {galleryItems[selectedIdx].title}
            </h4>
            <p className="text-xs text-brand-gray max-w-xl mx-auto px-4">
              {galleryItems[selectedIdx].altText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
