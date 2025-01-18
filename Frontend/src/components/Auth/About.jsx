import React from 'react';
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header className="fixed bg-white shadow-md w-full p-4 flex justify-between items-center">
        <Link to='/'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
            SocialSync
          </h1>
        </Link>
      </header>
      <main className="flex-1 pt-32 container mx-auto px-6 py-10 bg-[#3366ff99]">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-[#3366ff] text-3xl font-semibold mb-4">Welcome to SocialSync</h2>
          <p className="text-lg mb-4">
            At SocialSync, we believe in creating meaningful connections. Our platform bridges the gap between
            people attending events and helps them interact effortlessly. We aim to make networking fun,
            easy, and truly impactful.
          </p>
          <h3 className="text-[#3366ff] text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="mb-4">
            To revolutionize the way people meet, connect, and build relationships in social settings.
          </p>
          <h3 className="text-[#3366ff] text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="mb-4">
            To provide a secure, innovative, and user-friendly platform where individuals can create
            profiles, explore shared interests, and connect seamlessly during events.
          </p>
          <h3 className="text-[#3366ff] text-2xl font-semibold mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Unique code-based profiles for easy and quick connections.</li>
            <li className="mb-2">AI-powered matchmaking for meaningful interactions.</li>
            <li className="mb-2">Secure and verified user profiles to ensure safety.</li>
            <li className="mb-2">Exclusive features like date booking and interest notifications.</li>
          </ul>
          <p>
            Join SocialSync today and experience a world of meaningful connections at your fingertips!
          </p>
        </div>
      </main>
      <footer className="bg-[#3366ff] text-white text-center py-4">
        <p>&copy; 2025 SocialSync. All rights reserved.</p>
      </footer>
    </>
  );
}

export default About;
