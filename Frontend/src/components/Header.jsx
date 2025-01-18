import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const accessToken = document.cookie.split("; ").find(row => row.startsWith("accessToken="));
      if (!accessToken) {
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    document.cookie = "accessToken=; max-age=0; path=/;";
    navigate("/login");
  };

  return (
    <header className="bg-gray-600 fixed w-full z-50 text-white py-4 px-6 shadow-lg flex justify-between items-center">
      <h1 className="text-2xl font-bold">SocialSync</h1>
      <div className="relative">
        <FaUserCircle
          className="text-3xl cursor-pointer"
          onClick={handleProfileClick}
        />
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul className="py-1">
              <Link to='/profile'><li className="px-4 py-2 hover:bg-gray-200 text-gray-900 font-bold cursor-pointer">
                Profile
              </li></Link>
              <li
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-gray-200 text-gray-900 font-bold cursor-pointer"
              >
                Log Out
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
