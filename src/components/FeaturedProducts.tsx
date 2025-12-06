// src/components/FeaturedProducts.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder for product data - will be replaced by Shopify integration
const placeholderProducts = [
  {
    id: '1',
    name: 'Vintage Denim Jacket',
    imageUrl: '/product-denim.jpg', // Placeholder
    price: '£45.00',
    link: '/shop/product/vintage-denim-jacket'
  },
  {
    id: '2',
    name: 'Retro Sportswear Top',
    imageUrl: '/product-sportswear.jpg', // Placeholder
    price: '£30.00',
    link: '/shop/product/retro-sportswear-top'
  },
  {
    id: '3',
    name: 'Classic Band Tee',
    imageUrl: '/product-bandtee.jpg', // Placeholder
    price: '£25.00',
    link: '/shop/product/classic-band-tee'
  },
  {
    id: '4',
    name: 'Workwear Overalls',
    imageUrl: '/product-workwear.jpg', // Placeholder
    price: '£55.00',
    link: '/shop/product/workwear-overalls'
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholderProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={product.link}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 font-bold mb-4">{product.price}</p>
                <Link href={product.link} className="bg-[#D32F2F] hover:bg-[#A31F1F] text-white text-sm font-bold py-2 px-4 rounded-full transition duration-300">
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
