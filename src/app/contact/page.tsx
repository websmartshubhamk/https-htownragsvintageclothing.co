// src/app/contact/page.tsx
import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Contact Us - H-Town Rags',
  description: 'Get in touch with H-Town Rags for inquiries, special requests, or assistance.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

      <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
        If you have any questions before visiting us or are looking for something specific, please don't hesitate to drop us a message. One of our team will get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Our Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Details</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Address:</h3>
              <p className="text-gray-700">H-Town Rags</p>
              <p className="text-gray-700">The Carling Building</p>
              <p className="text-gray-700">Coopers Yard</p>
              <p className="text-gray-700">Hitchin</p>
              <p className="text-gray-700">Hertfordshire</p>
              <p className="text-gray-700">SG5 1AR</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email:</h3>
              <p className="text-gray-700">team@htownragsvintageclothing.co.uk</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone:</h3>
              <p className="text-gray-700">01462 453189</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Leave A Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Inquiry about a product" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="john.doe@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Your Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="01234 567890" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
              <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="bg-[#D32F2F] hover:bg-[#A31F1F] text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.4984578137353!2d-0.2785006!3d51.9442084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48762518e9d9e607%3A0x6b8d0e5f2a1b9d4e!2sH-Town%20Rags!5e0!3m2!1sen!2suk!4v1701980000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute' }}
            allowFullScreen={false} // Changed to false as it's an embed
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="H-Town Rags Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
