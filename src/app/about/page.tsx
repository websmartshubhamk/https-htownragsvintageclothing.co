// src/app/about/page.tsx
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - H-Town Rags',
  description: 'Learn about H-Town Rags, our story, mission, and focus on sustainable vintage clothing.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About H-Town Rags</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            H-Town Rags is more than just a clothing shop; it's a celebration of vintage fashion, music, and culture. Born out of a deep love for unique, high-quality second-hand items, our mission is to provide an unparalleled shopping experience while promoting sustainability in fashion.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We meticulously hand-pick every item in our collection, sourcing from across the globe to ensure a diverse and authentic range of vintage clothing. From classic denim and workwear to retro sportswear and timeless designer pieces, our rails are always stocked with treasures waiting to be discovered.
          </p>
        </div>
        <div className="md:w-1/2 relative h-64 w-full md:h-96">
          <Image
            src="/about-storefront.jpg" // Placeholder image for storefront
            alt="H-Town Rags Storefront"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story & Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Rob Hague - Founder</h3>
            <p className="text-gray-700 leading-relaxed">
              Rob's journey began with a passion for punk rock and vintage culture. His extensive background in heritage brand clothing retail and the music industry laid the foundation for H-Town Rags. He's the eye behind our unique collections, bringing years of experience and a discerning taste to every piece.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Charlotte Oaten - Co-Founder</h3>
            <p className="text-gray-700 leading-relaxed">
              With a background in styling and luxury fashion, Charlotte brings a refined aesthetic and a focus on exceptional customer experience to H-Town Rags. She ensures our store is a welcoming, organised, and inspiring space, believing that every customer should feel like part of the Rags community.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hand-Picked Vintage Clothing From Across the Globe</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We hand-pick all of our stock for H-Town Rags, this ensures we get the highest quality and most unique pieces. We source primarily from the UK, USA and Italy, however we have clothing from all around the world! This means we always have a large variety of styles from different era's hanging on our rails. We also work closely with our suppliers to ensure that we can get hold of in demand items. We have an extensive range of everything from Denim, Workwear, Womenswear, Sportswear, Americana, Tees and Sweats, the list goes on…!
        </p>
      </div>
    </div>
  );
}
