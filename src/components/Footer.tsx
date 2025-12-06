// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} H-Town Rags. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Footer Navigation - will be implemented later */}
          {/* <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
