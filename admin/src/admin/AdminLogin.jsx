import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = document.cookie.split('; ').find(row => row.startsWith('adminToken='));
    if (adminToken) {
      navigate('/createevent'); // Redirect to event creation page if already logged in
    }
  }, [navigate]);

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://two198-1.onrender.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setCookie('adminToken', data.token, 1); // Set cookie with token
        alert('Login Successful');
        navigate('/createevent'); // Redirect to event creation page
      } else {
        alert(`Error: ${data.message || 'Invalid Credentials'}`);
      }
    } catch (error) {
      alert('Login Failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
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
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
