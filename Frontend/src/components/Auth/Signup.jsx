import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.age || formData.age < 18)
      formErrors.age = "Age must be at least 18";
    if (!formData.gender) formErrors.gender = "Gender is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      const response = await axios.post(
        "https://two198.onrender.com/user/signup",
        formData
      );
      setMessage("Signup successful! Your unique code is: " + response.data.uniqueCode);
    } catch (error) {
      setMessage("Signup failed. Please try again.");
    }
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
      <div className="flex items-center justify-center h-screen ">
        <div className="bg-white shadow-lg rounded-lg w-96 p-6 text-center">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-blue-600 mb-4">
              Create Your Account
            </h1>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Sign Up
            </button>
          </form>
          {message && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              {message}
            </div>
          )}
          <p className="text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to='/login' className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
