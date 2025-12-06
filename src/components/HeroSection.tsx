// src/components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center">
      {/* Background Image - will need actual image later */}
      <Image
        src="/hero-background.jpg" // Placeholder image
        alt="Vintage Clothing Hertfordshire"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 brightness-75"
      />
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Vintage Clothing Hertfordshire
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Your Local Vintage Clothing Shop in Hitchin
        </p>
        <Link href="/contact" className="bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Visit Us
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
