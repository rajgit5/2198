import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for feedback message
  const [messageType, setMessageType] = useState(''); // State for message type (success/error)
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure email is not empty
    if (!email) {
      setMessage('Please enter your email');
      setMessageType('error'); // Set message type to error
      return;
    }

    // Set loading state to true when starting the request
    setLoading(true);

    try {
      const response = await fetch('https://two198-1.onrender.com/user/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email as part of the request body
      });

      const result = await response.json();

      // Set loading state to false after receiving response
      setLoading(false);

      if (response.ok) {
        setMessage('Check your email for reset instructions!');
        setMessageType('success'); // Set message type to success
      } else {
        setMessage(result.message || 'Something went wrong');
        setMessageType('error'); // Set message type to error
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false); // Set loading state to false on error
      setMessage('Failed to send request. Please try again later.');
      setMessageType('error'); // Set message type to error
    }
  };

  return (
    <>
      <header className="fixed bg-white shadow-md w-full p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
            SocialSync
          </h1>
        </Link>
      </header>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            Forgot Password
          </h1>
          {message && (
            <div
              className={`mb-4 p-3 text-white text-center rounded-lg ${
                messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {message}
            </div>
          )}
          {loading && (
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full border-t-4 border-blue-600 w-8 h-8"></div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Forgot Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPass;
