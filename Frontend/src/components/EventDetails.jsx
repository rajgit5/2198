import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [uniqueCode, setUniqueCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // Function to get cookie value
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  useEffect(() => {
    const storedUniqueCode = getCookie('uniqueCode');
    if (!storedUniqueCode) {
      alert('Please verify your government ID first.');
      navigate('/profile');
    } else {
      setUniqueCode(storedUniqueCode);
    }
  }, [navigate]);

  // Event data
  const eventData = {
    'creative-arts-workshop': {
      name: 'Creative Arts Workshop',
      date: 'February 10, 2025',
      time: '10:00 AM - 4:00 PM',
      description:
        'Unleash your creativity in this hands-on workshop exploring painting, sculpture, and mixed media! Perfect for beginners and seasoned artists alike.',
      highlights: [
        '🎨 Painting techniques: Acrylics, Watercolors, and Oil.',
        '🖌️ Sculpting basics with clay and mixed materials.',
        '🌟 Tips from professional artists.',
        '📦 All materials provided. Just bring your enthusiasm!',
      ],
      additionalInfo:
        'Join us for an inspiring day full of artistic expression and collaboration. Suitable for all skill levels. A perfect opportunity to discover your inner artist and connect with like-minded individuals.',
    },
    'photography-basics': {
      name: 'Photography Basics',
      date: 'March 5, 2025',
      time: '11:00 AM - 3:00 PM',
      description:
        'Learn the art of capturing stunning photos in this beginner-friendly photography workshop!',
      highlights: [
        '📸 Mastering camera settings: ISO, aperture, and shutter speed.',
        '🏞️ Landscape and portrait photography tips.',
        '🖥️ Post-processing basics using Lightroom.',
      ],
      additionalInfo:
        'Participants should bring their own DSLR or smartphone with a good camera. Snacks and beverages provided.',
    },
  };

  const event = eventData[eventId] || {};

  const handleVerification = () => {
    if (uniqueCode === getCookie('uniqueCode')) {
      setIsVerified(true);
    } else {
      alert('Verification failed. Please enter the correct unique code.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {!isVerified ? (
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Verify Your Unique Code</h1>
          <input
            type="text"
            placeholder="Enter your unique code"
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
            className="border border-gray-300 rounded-lg w-full px-4 py-2 mb-4"
          />
          <button
            onClick={handleVerification}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
          >
            Verify
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 mx-auto max-w-lg">
        <h1 className="mt-6 text-center text-2xl md:text-4xl font-semibold text-gray-800">
          Start Chatting with Everyone Connected at this Event
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Connect, share, and communicate effortlessly with all participants.
        </p>
        <div className="mt-8 text-center">
          <a 
            href="https://tenantlandlordchat.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-lg transition-all duration-300"
            >
              Start Chat
            </button>
          </a>
        </div>
      </div>
      
      )}
    </div>
  );
}

export default EventDetails;
