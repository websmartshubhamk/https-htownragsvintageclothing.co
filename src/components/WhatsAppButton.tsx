// src/components/WhatsAppButton.tsx
'use client';

import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '441462453189'; // Using the phone number from business_information.md (01462 453189) formatted for WhatsApp
  const message = 'Hello H-Town Rags, I have a question about...';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Basic WhatsApp Icon (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.6-3.83-1.6-5.897c0-6.505 5.267-11.772 11.773-11.772 3.102 0 6.046 1.206 8.27 3.43s3.43 5.169 3.43 8.271c0 6.506-5.268 11.773-11.773 11.773h-.005c-1.871-.001-3.69-.508-5.289-1.462l-6.273 1.688zm6.438-4.148l-.071-.004c-1.396.793-2.991 1.213-4.597 1.213-.004 0-.008 0-.012 0l.966-3.535-1.545-1.096c-.958-.693-1.674-1.579-2.146-2.584l.004-.007c-.477-.963-.736-2.036-.736-3.136 0-5.112 4.141-9.252 9.251-9.252 2.474 0 4.773.97 6.495 2.695s2.695 4.02 2.695 6.494c0 5.111-4.141 9.251-9.251 9.251-.785 0-1.55-.104-2.29-.304zm7.986-2.884l-.004.004c-.397-.199-.877-.393-1.385-.496l-1.096.735c-.217.144-.509.184-.76.084-.308-.12-.663-.35-.913-.673-.559-.723-1.127-1.748-1.597-2.784-.469-1.037-.872-2.112-1.229-3.195l-.004-.007c-.08-.26-.04-.548.104-.761l.734-1.095c.199-.398.199-.877-.004-1.385l-1.462-2.736c-.14-.26-.45-.448-.76-.448-.25 0-.509.04-.736.16l-.99.55c-.217.12-.448.29-.652.485-.758.74-1.16 1.776-1.16 2.876 0 1.956.883 3.738 2.373 5.349 1.545 1.545 3.327 2.373 5.349 2.373 1.1 0 2.135-.402 2.876-1.16l.485-.652c.12-.217.16-.448.16-.736zm-7.29-3.955l.004-.004.004.004-.004.004c.002-.002.002-.002 0 0z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
