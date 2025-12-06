// src/app/brands/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Brands - H-Town Rags',
  description: 'Explore the wide range of vintage brands stocked at H-Town Rags.',
};

// Placeholder for brand logos - will need actual images/logos later
const brandLogos = [
  { name: 'Levi\'s', logo: '/brands/levis.png', link: '/shop/brands/levis' },
  { name: 'Nike', logo: '/brands/nike.png', link: '/shop/brands/nike' },
  { name: 'Carhartt', logo: '/brands/carhartt.png', link: '/shop/brands/carhartt' },
  { name: 'Adidas', logo: '/brands/adidas.png', link: '/shop/brands/adidas' },
  { name: 'Wrangler', logo: '/brands/wrangler.png', link: '/shop/brands/wrangler' },
  { name: 'Dickies', logo: '/brands/dickies.png', link: '/shop/brands/dickies' },
  { name: 'Harley Davidson', logo: '/brands/harley-davidson.png', link: '/shop/brands/harley-davidson' },
  { name: 'The North Face', logo: '/brands/the-north-face.png', link: '/shop/brands/the-north-face' },
];

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Brands</h1>

      <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
        At H-Town Rags, we pride ourselves on stocking a wide range of highly sought-after second-hand vintage clothing from some of the most iconic and beloved brands across the globe. We carefully select each piece to ensure quality, authenticity, and style.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        {brandLogos.map((brand) => (
          <Link href={brand.link} key={brand.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={brand.logo} // Placeholder logo
                alt={`${brand.name} Logo`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#D32F2F] transition-colors">{brand.name}</h3>
          </Link>
        ))}
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Fresh Stock Going Out Each and Every Day</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We believe in refreshing our stock regularly; new items are prepared daily to ensure that no matter how frequently you visit us, there will always be something new to discover! Week to week, season to season, our collection is kept up to date. Follow us on social media for daily updates on new arrivals!
        </p>
        <Link href="/shop" className="mt-6 inline-block bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Shop All Brands
        </Link>
      </div>
    </div>
  );
}
