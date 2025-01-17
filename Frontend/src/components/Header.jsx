import React from "react";
import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";

function Header() {
      const [showDropdown, setShowDropdown] = useState(false);
    
    const handleProfileClick = () => {
        setShowDropdown(!showDropdown);
      };
    
  return (
    <header className="bg-gray-600 fixed w-full z-50 text-white py-4 px-6 shadow-lg flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dating App</h1>
      <div className="relative">
        <FaUserCircle
          className="text-3xl cursor-pointer"
          onClick={handleProfileClick}
        />
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-200 text-gray-900 font-bold cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 text-gray-900 font-bold cursor-pointer">
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
