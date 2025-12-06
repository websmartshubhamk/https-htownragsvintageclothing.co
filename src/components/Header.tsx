// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo or Site Title */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          H-Town Rags
        </Link>

        {/* Navigation - will be implemented later */}
        <nav className="hidden md:block"> {/* Hide on small screens, show on medium and up */}
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link></li>
            <li>
              {/* Mega Menu for Shop */}
              <div className="relative group">
                <Link href="/shop" className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer">Shop</Link>
                <div className="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-md p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                  <ul className="space-y-2">
                    <li><Link href="/shop/new-arrivals" className="block text-gray-700 hover:text-gray-900">New Arrivals</Link></li>
                    <li><Link href="/shop/all" className="block text-gray-700 hover:text-gray-900">All Products</Link></li>
                    <li><Link href="/shop/category/denim" className="block text-gray-700 hover:text-gray-900">Denim</Link></li>
                    <li><Link href="/shop/category/sportswear" className="block text-gray-700 hover:text-gray-900">Sportswear</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              {/* Mega Menu for Brands */}
              <div className="relative group">
                <Link href="/brands" className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer">Brands</Link>
                <div className="absolute left-0 mt-3 w-48 bg-white shadow-lg rounded-md p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                  <ul className="space-y-2">
                    <li><Link href="/brands/levis" className="block text-gray-700 hover:text-gray-900">Levi's</Link></li>
                    <li><Link href="/brands/nike" className="block text-gray-700 hover:text-gray-900">Nike</Link></li>
                    <li><Link href="/brands/carhartt" className="block text-gray-700 hover:text-gray-900">Carhartt</Link></li>
                    <li><Link href="/brands/adidas" className="block text-gray-700 hover:text-gray-900">Adidas</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium">About</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link></li>
            <li><Link href="/customer-service" className="text-gray-600 hover:text-gray-900 font-medium">Customer Service</Link></li>
          </ul>
        </nav>

        {/* Mobile menu button - will implement later */}
        <div className="md:hidden">
          {/* <button className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button> */}
        </div>

      </div>
    </header>
  );
};

export default Header;
