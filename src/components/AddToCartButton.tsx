// src/components/AddToCartButton.tsx
'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity?: number; // Optional, defaults to 1
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  productName,
  productPrice,
  productImage,
  quantity = 1,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      name: productName,
      price: productPrice,
      quantity,
      image: productImage,
    });
    // Optionally add a notification here
    alert(`${productName} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-6 rounded-full transition duration-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
