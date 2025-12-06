// src/app/shop/page.tsx
import React from 'react';
import { getAllProducts, getAllCollections } from '@/lib/shopify'; // Assuming getAllCollections is also defined in shopify.ts
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function ShopPage() {
  const products = await getAllProducts();
  const collections = await getAllCollections(); // Fetch collections for filters

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Shop All Vintage</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar for Filters */}
        <aside className="md:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>
          <nav>
            <ul className="space-y-2">
              {collections.map(collection => (
                <li key={collection.id}>
                  <Link href={`/shop/category/${collection.handle}`} className="text-gray-600 hover:text-[#D32F2F] text-lg">
                    {collection.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* More filters (e.g., price, size) can be added here */}
        </aside>

        {/* Product Grid */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
