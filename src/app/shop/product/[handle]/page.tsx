// src/app/shop/product/[handle]/page.tsx
import AddToCartButton from '@/components/AddToCartButton'; // Import AddToCartButton

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const { handle } = params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const imageUrl = product.images.nodes[0]?.url || '/placeholder-product.jpg';
  const imageAlt = product.images.nodes[0]?.altText || product.title;
  const price = parseFloat(product.priceRange.minVariantPrice.amount); // Convert price to number

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="relative w-full h-96">
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-[#D32F2F] mb-6">{price.toFixed(2)} {product.priceRange.minVariantPrice.currencyCode}</p>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">{product.description}</p>

          {/* Add to Cart Button */}
          <AddToCartButton
            productId={product.id}
            productName={product.title}
            productPrice={price}
            productImage={imageUrl}
          />

          {/* More details like size, color, variants can be added here */}
        </div>
      </div>
    </div>
  );
}
