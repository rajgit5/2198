import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://two198-1.onrender.com/user/login",
        { email, password }
      );
      const { token } = response.data;
      if (token) {
        document.cookie = `accessToken=${token}; max-age=${
          7 * 24 * 60 * 60
        }; path=/;`;
        setMessage("Login successful! | Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
        console.log(token)
      } else {
        setMessage("Wrong Credential");
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
      console.error(
        "Error during login:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsLoading(false);
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
            Welcome Back!
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={isLoading}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
          {message && (
            <div className={`mt-4 p-3 ${message.includes("failed") ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'} rounded`}>
              {message}
            </div>
          )}
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <p className="mt-2 text-gray-600 text-center">
            <Link
              to="/forgotpass"
              className="text-blue-600 font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
