// src/components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    handle: string;
    title: string;
    priceRange: {
      minVariantPrice: { amount: string; currencyCode: string; };
    };
    images: {
      nodes: { url: string; altText: string; }[];
    };
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = product.images.nodes[0]?.url || '/placeholder-product.jpg'; // Fallback
  const imageAlt = product.images.nodes[0]?.altText || product.title;
  const price = `${product.priceRange.minVariantPrice.amount} ${product.priceRange.minVariantPrice.currencyCode}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/shop/product/${product.handle}`}>
        <div className="relative w-full h-64">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          <Link href={`/shop/product/${product.handle}`} className="hover:text-[#D32F2F]">
            {product.title}
          </Link>
        </h3>
        <p className="text-gray-600 font-bold mb-4">{price}</p>
        <Link href={`/shop/product/${product.handle}`} className="block w-full bg-[#D32F2F] hover:bg-[#A31F1F] text-white text-sm font-bold py-2 px-4 rounded-full transition duration-300 text-center">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
