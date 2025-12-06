import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Introduction Section - will create later */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            A VINTAGE CLOTHING SHOP IN HITCHIN, HERTFORDSHIRE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            At H-Town Rags, we take great pride in being one of the leading vintage clothing shops in Hertfordshire. Located in Hitchin, a great place for vintage and second-hand shopping, we are perfectly situated just off of the town square. We stock a wide range of vintage and second-hand clothing from all around the world. Everything from Denim, Workwear, USA Vintage to Sportswear, Italian Ladieswear and Band Tees. The list goes on…!
          </p>
          <a href="/about" className="bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Find Out More
          </a>
        </div>
      </section>

      <FeaturedProducts />

      {/* Brands Section - will create later */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Branded Second Hand & Vintage Clothing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            As one of the leading stockists of second hand and vintage clothing in Hertfordshire, we work hard to offer some of the most well known and loved brands around. Ranging from Levi's, Lee & Wrangler, Dickies & Carhartt, Harley Davidson & Ed Hardy, Nike & Adidas to North Face & Fjallraven we have an extremely wide variety in store. If you're a lover of vintage clothing, fashion, or looking to make more positive sustainable choices then why not pop along and take a dive into our rails and see what we have to offer.
          </p>
          <a href="/brands" className="bg-[#212121] hover:bg-[#424242] text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Our Brands
          </a>
        </div>
      </section>

      {/* Community Section - will create later */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Local Second Hand Clothing Shop in Hitchin
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We believe H-Town Rags is more than just a clothing shop, we are a community as well. We have been lucky to build relationships with so many lovely people and make so many friends whilst on this journey. So if you are in Hertfordshire or any of the surrounding areas, please do pop in to see us, or alternatively please feel free to contact us, we would love to hear from you!
          </p>
          <a href="/contact" className="bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Us
          </a>
        </div>
      </section>

      {/* Newsletter Signup - will create later */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Weekly Newsletter</h2>
          <p className="text-lg mb-8">FILL IN YOUR DETAILS BELOW AND WE'LL KEEP YOU UP TO DATE WITH ALL OF OUR LATEST STOCK, SPECIAL OFFERS & POPUP EVENTS!</p>
          {/* Placeholder for newsletter form */}
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="Name" className="flex-grow p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]" />
              <input type="email" placeholder="Email Address" className="flex-grow p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D32F2F]" />
              <button type="submit" className="bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-8 rounded-full transition duration-300">
                SUBSCRIBE!
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}