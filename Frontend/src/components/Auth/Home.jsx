import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="fixed bg-white shadow-md w-full p-4 flex justify-between items-center">
 <Link to='/'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
            SocialSync
          </h1>
        </Link>
  <button
    onClick={() => setMenuOpen(!isMenuOpen)}
    className="text-blue-600 md:hidden"
  >
    ☰
  </button>
  <nav
    className={`absolute md:static ${
      isMenuOpen ? "top-16 right-4" : "top-16 right-[-100%]"
    } md:top-auto md:right-auto md:flex md:space-x-4 bg-white shadow-lg md:shadow-none p-4 md:p-0 transform transition-transform duration-300 ease-in-out`}
    style={{ zIndex: 100 }}
  >
    <Link to="/about" className="block md:inline-block p-2">
      About Us
    </Link>
    <Link to="/contact" className="block md:inline-block p-2">
      Contact Us
    </Link>
    <Link to="/team" className="block md:inline-block p-2">
      Team Members
    </Link>
    <Link to="/login" className="block md:inline-block p-2">
      Log In
    </Link>
    <Link to="/signup" className="block md:inline-block p-2">
      Sign Up
    </Link>
  </nav>
</header>


      {/* Hero Section */}
      <section className="text-center pt-32 bg-blue-100 py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Foster Meaningful Interactions
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Discover like-minded individuals, initiate connections, and network
          seamlessly using our secure, AI-enhanced platform.
        </p>
        <Link to='/login'>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-500">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-8">
          Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Unique Code-Based Profiles"
            description="Easily link your wearable code to a personalized profile."
          />
          <FeatureCard
            title="AI-Powered Compatibility"
            description="Find like-minded attendees with AI-enhanced matchmaking."
          />
          <FeatureCard
            title="Secure Verification"
            description="Ensure safety and authenticity with ID verification."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base lg:text-lg">
            &copy; 2025 Event Connect. All Rights Reserved.
          </p>
          <div className="mt-4">
            <Link to="/about" className="text-gray-300 mx-2">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-300 mx-2">
              Contact Us
            </Link>
            <Link to="/team" className="text-gray-300 mx-2">
              Team Members
            </Link>
            <Link to="/login" className="text-gray-300 mx-2">
              Log In
            </Link>
            <Link to="/signup" className="text-gray-300 mx-2">
              Sign Up
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white shadow-md p-6 rounded-lg">
    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">
      {title}
    </h4>
    <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-600">
      {description}
    </p>
  </div>
);

export default Home;
