// src/lib/shopify.ts
import {
  ShopifyStorefrontAPIClient,
  flattenConnection,
} from '@shopify/hydrogen';

// Placeholder for actual API client configuration
// In a real application, you would configure the client with
// your Shopify store domain and Storefront Access Token from environment variables.
// For now, we'll use placeholder client and mock data.

export const storefront = new ShopifyStorefrontAPIClient({
  privateStorefrontToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2024-07', // Use a recent stable API version
});

// Mock product data to use until actual Shopify integration is complete
const MOCK_PRODUCTS = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'vintage-denim-jacket',
    title: 'Vintage Denim Jacket',
    description: 'Classic vintage denim jacket, perfect for any season. Sourced for quality and authenticity.',
    priceRange: {
      minVariantPrice: { amount: '45.00', currencyCode: 'GBP' },
      maxVariantPrice: { amount: '45.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-denim.jpg', altText: 'Vintage Denim Jacket', width: 400, height: 400 }],
    },
    variants: {
      nodes: [{ id: 'gid://shopify/ProductVariant/1', title: 'Default Title', price: { amount: '45.00', currencyCode: 'GBP' } }],
    },
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'retro-sportswear-top',
    title: 'Retro Sportswear Top',
    description: 'A vibrant retro sportswear top, comfortable and stylish. Great for casual wear.',
    priceRange: {
      minVariantPrice: { amount: '30.00', currencyCode: 'GBP' },
      maxVariantPrice: { amount: '30.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-sportswear.jpg', altText: 'Retro Sportswear Top', width: 400, height: 400 }],
    },
    variants: {
      nodes: [{ id: 'gid://shopify/ProductVariant/2', title: 'Default Title', price: { amount: '30.00', currencyCode: 'GBP' } }],
    },
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'classic-band-tee',
    title: 'Classic Band Tee',
    description: 'Authentic vintage band t-shirt. A must-have for music lovers.',
    priceRange: {
      minVariantPrice: { amount: '25.00', currencyCode: 'GBP' },
      maxVariantPrice: { amount: '25.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-bandtee.jpg', altText: 'Classic Band Tee', width: 400, height: 400 }],
    },
    variants: {
      nodes: [{ id: 'gid://shopify/ProductVariant/3', title: 'Default Title', price: { amount: '25.00', currencyCode: 'GBP' } }],
    },
  },
  {
    id: 'gid://shopify/Product/4',
    handle: 'workwear-overalls',
    title: 'Workwear Overalls',
    description: 'Durable vintage workwear overalls. Stylish and practical.',
    priceRange: {
      minVariantPrice: { amount: '55.00', currencyCode: 'GBP' },
      maxVariantPrice: { amount: '55.00', currencyCode: 'GBP' },
    },
    images: {
      nodes: [{ url: '/product-workwear.jpg', altText: 'Workwear Overalls', width: 400, height: 400 }],
    },
    variants: {
      nodes: [{ id: 'gid://shopify/ProductVariant/4', title: 'Default Title', price: { amount: '55.00', currencyCode: 'GBP' } }],
    },
  },
];

// Placeholder function to fetch all products
export async function getAllProducts() {
  // In a real integration, this would make an API call:
  // const data = await storefront.query(...)
  return MOCK_PRODUCTS;
}

// Placeholder function to fetch a single product by handle
export async function getProductByHandle(handle: string) {
  // In a real integration, this would make an API call:
  // const data = await storefront.query(...)
  return MOCK_PRODUCTS.find(product => product.handle === handle);
}

// Placeholder function to fetch collections (categories)
export async function getAllCollections() {
  return [
    { id: 'gid://shopify/Collection/1', handle: 'new-arrivals', title: 'New Arrivals' },
    { id: 'gid://shopify/Collection/2', handle: 'all', title: 'All Products' },
    { id: 'gid://shopify/Collection/3', handle: 'denim', title: 'Denim' },
    { id: 'gid://shopify/Collection/4', handle: 'sportswear', title: 'Sportswear' },
  ];
}
