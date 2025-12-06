// src/lib/shopify.ts

// This file will contain a simple fetch-based GraphQL client for Shopify.
// For now, it will continue to return mock data, but the structure is
// prepared for actual API calls without the need for @shopify/hydrogen.

// --- Mock Data ---

const MOCK_PRODUCTS = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'vintage-denim-jacket',
    title: 'Vintage Denim Jacket',
    description: 'Classic vintage denim jacket, perfect for any season. Sourced for quality and authenticity.',
    priceRange: {
      minVariantPrice: { amount: '45.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-denim.jpg', altText: 'Vintage Denim Jacket' }],
    },
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'retro-sportswear-top',
    title: 'Retro Sportswear Top',
    description: 'A vibrant retro sportswear top, comfortable and stylish. Great for casual wear.',
    priceRange: {
      minVariantPrice: { amount: '30.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-sportswear.jpg', altText: 'Retro Sportswear Top' }],
    },
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'classic-band-tee',
    title: 'Classic Band Tee',
    description: 'Authentic vintage band t-shirt. A must-have for music lovers.',
    priceRange: {
      minVariantPrice: { amount: '25.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-bandtee.jpg', altText: 'Classic Band Tee' }],
    },
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'workwear-overalls',
    title: 'Workwear Overalls',
    description: 'Durable vintage workwear overalls. Stylish and practical.',
    priceRange: {
      minVariantPrice: { amount: '55.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-workwear.jpg', altText: 'Workwear Overalls' }],
    },
  },
];

const MOCK_COLLECTIONS = [
    { id: 'gid://shopify/Collection/1', handle: 'new-arrivals', title: 'New Arrivals' },
    { id: 'gid://shopify/Collection/2', handle: 'all', title: 'All Products' },
    { id: 'gid://shopify/Collection/3', handle: 'denim', title: 'Denim' },
    { id: 'gid://shopify/Collection/4', handle: 'sportswear', title: 'Sportswear' },
];


// --- API Functions (using mock data) ---

// In a real implementation, you would replace these mock functions with
// actual `fetch` calls to the Shopify Storefront GraphQL API.

export async function getAllProducts() {
  console.log('Using mock data for getAllProducts');
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return MOCK_PRODUCTS;
}

export async function getProductByHandle(handle: string) {
  console.log(`Using mock data for getProductByHandle: ${handle}`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return MOCK_PRODUCTS.find(product => product.handle === handle);
}

export async function getAllCollections() {
  console.log('Using mock data for getAllCollections');
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return MOCK_COLLECTIONS;
}