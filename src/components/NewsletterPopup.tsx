// src/components/NewsletterPopup.tsx
'use client';

import React, { useState, useEffect } from 'react';

const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a delay, e.g., 5 seconds, or based on user inactivity
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Adjust delay as needed

    // Check if user has already subscribed or closed the popup recently
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    if (hasSeenPopup) {
      setIsOpen(false);
    }

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true'); // Prevent showing again for a while
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full relative">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Join Our Newsletter!</h2>
        <p className="text-gray-700 text-center mb-6">
          Be the first to know about new arrivals, special offers, and events.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="popup-name" className="sr-only">Name</label>
            <input
              type="text"
              id="popup-name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
            />
          </div>
          <div>
            <label htmlFor="popup-email" className="sr-only">Email</label>
            <input
              type="email"
              id="popup-email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-6 rounded-md transition duration-300"
            onClick={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); closePopup(); }}
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterPopup;
