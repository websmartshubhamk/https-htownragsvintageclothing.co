import type { Metadata } from "next";
// Removed Geist font imports
import "./globals.css";
import Header from "@/components/Header"; // Import Header
import Footer from "@/components/Footer"; // Import Footer
import { CartProvider } from "@/context/CartContext"; // Import CartProvider
import WhatsAppButton from "@/components/WhatsAppButton"; // Import WhatsAppButton
import NewsletterPopup from "@/components/NewsletterPopup"; // Import NewsletterPopup

export const metadata: Metadata = {
  title: "H-Town Rags", // Updated title
  description: "Vintage Clothing Hertfordshire | H-Town Rags Website Redesign", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton /> {/* Add WhatsAppButton */}
          <NewsletterPopup /> {/* Add NewsletterPopup */}
        </CartProvider>
      </body>
    </html>
  );
}
