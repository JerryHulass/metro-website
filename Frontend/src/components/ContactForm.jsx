import React, { useState } from "react";

export default function ContactForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your actual submit logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded shadow-lg relative" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4 text-black">Contact Us</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold mb-4">Thank you! Your message has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input className="border p-2 mb-2 w-full text-black" type="text" placeholder="Your Name" />
            <input className="border p-2 mb-2 w-full text-black" type="email" placeholder="Your Email" />
            <input className="border p-2 mb-2 w-full text-black" type="" placeholder="Your Phone Number" />
            <textarea className="border p-2 mb-2 w-full text-black" placeholder="Your Message"></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Send</button>
          </form>
        )}
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}