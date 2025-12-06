// src/app/cart/page.tsx
import React from 'react';
import ShoppingCart from '@/components/ShoppingCart';

export const metadata = {
  title: 'Your Shopping Cart - H-Town Rags',
  description: 'Review your items and proceed to checkout.',
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ShoppingCart />
    </div>
  );
}
