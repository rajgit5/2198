import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://two198-1.onrender.com/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup Successful');
        navigate('/'); // Redirect to login page after successful signup
      } else {
        alert(`Error: ${data.message || 'Something went wrong!'}`);
      }
    } catch (error) {
      alert('Signup Failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Signup</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          name='email'
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3 inline-block" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Sign Up'
          )}
        </button>

        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate('/')}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
