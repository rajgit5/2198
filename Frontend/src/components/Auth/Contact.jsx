import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    // Form submission
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <header className="fixed bg-white shadow-md w-full p-4 flex justify-between items-center">
        <Link to='/'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
            SocialSync
          </h1>
        </Link>
      </header>
      <main className="flex-1 pt-20 container mx-auto px-6 py-10 bg-[#3366ff99]">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-[#3366ff] text-3xl font-semibold mb-4">We'd Love to Hear from You</h2>
          <p className="text-lg mb-6">
            Have questions, feedback, or need assistance? Reach out to us, and our team will get back to you promptly.
          </p>
          {formSubmitted && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              Your response has been submitted successfully!
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3366ff] focus:border-[#3366ff]"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3366ff] focus:border-[#3366ff]"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-[#3366ff] focus:border-[#3366ff]"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3366ff] text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          
        </div>
      </main>
      <footer className="bg-[#3366ff] text-white text-center py-4">
        <p>&copy; 2025 SocialSync. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;
