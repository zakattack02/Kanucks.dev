// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="mt-4 text-xl">
          Have any questions or want to work together? Reach out to me!
        </p>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 bg-gray-900 text-white rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 bg-gray-900 text-white rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 bg-gray-900 text-white rounded-lg"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
