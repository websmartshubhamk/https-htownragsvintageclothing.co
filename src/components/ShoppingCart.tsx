// src/components/ShoppingCart.tsx
'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty.</h2>
        <Link href="/shop" className="bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center border-b pb-4">
            <div className="relative w-24 h-24 mr-4">
              <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">£{item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-md hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="bg-gray-100 text-gray-800 px-4 py-1">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-r-md hover:bg-gray-300 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-800">£{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-800">Total:</h3>
        <p className="text-2xl font-bold text-[#D32F2F]">£{totalPrice.toFixed(2)}</p>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={clearCart}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Clear Cart
        </button>
        <Link href="/checkout" className="bg-[#212121] hover:bg-[#424242] text-white font-bold py-3 px-6 rounded-full transition duration-300">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
