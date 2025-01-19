import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import Header from "./Header";
import axios from "axios";

function Profile() {
  const [id, setId] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [bio, setBio] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = getCookie("accessToken");
      try {
        const response = await axios.get(
          "https://two198-1.onrender.com/profile",
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        const data = response.data.message;
        // console.log(response.data)
        // Update state with fetched data
        setId(data.uniqueCode || "");
        setHobbies(data.hobbies?.join(" ") || "");
        setBio(
          data.bio ||
            "A passionate adventurer and avid reader who loves exploring new places and meeting interesting people."
        );
        setUserData(data);
      } catch (error) {
        console.error(
          "Error fetching profile data:",
          error.response?.data || error.message
        );
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async () => {
    const accessToken = getCookie("accessToken");
    const profileData = {
      governmentId: id,
      hobbies: hobbies.split(" ").map((hobby) => hobby.trim()),
      shortBio: bio,
      uniqueCode: id,
    };
    console.log(profileData.hobbies);
    try {
      const response = await axios.post(
        "https://two198-1.onrender.com/update-profile",
        profileData,
        {
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
        }
      );
  
      // Set the unique code in a cookie after a successful profile update
      document.cookie = `uniqueCode=${id}; path=/;`;
  
      window.location.reload();
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  };
  

  return (
    <>
      <Header />
      <div className="pt-20 pl-4">
        <Link to="/dashboard">
          <FaArrowLeft size={23} className="mr-2" />
        </Link>
      </div>
      <div className="flex-1 container mx-auto px-6 py-6">
        <div className="bg-white shadow-xl rounded-xl p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-transparent to-blue-100 opacity-50 rounded-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-6 mb-8">
              <FaUser
                className="p-4 w-32 h-32 rounded-full bg-gray-300"
                size={62}
              />
              <div>
                <h2 className="text-blue-600 text-4xl font-bold">
                  {userData.username || "John Doe"}
                </h2>
                <p className="text-gray-700 text-lg mt-1">
                  Age:{" "}
                  <span className="font-medium">{userData.age || "30"}</span>
                </p>
                <p className="text-gray-700 text-lg">
                  Gender:{" "}
                  <span className="font-medium">
                    {userData.gender || "Male"}
                  </span>
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-blue-600 text-3xl font-semibold mb-4">
                Profile Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    <span className="font-bold">Government ID:</span> {userData.governmentId}
                  </p>
                </div><div className="bg-blue-50 p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    <span className="font-bold">Unique Code:</span> {id}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    <span className="font-bold">Email ID:</span>{" "}
                    {userData.email || "example@gmail.com"}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">
                    <span className="font-bold">Hobbies:</span> {hobbies}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow-md col-span-1 md:col-span-2">
                  <p className="text-gray-700">
                    <span className="font-bold">Bio:</span> {userData.shortBio}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Fun Fact</h3>
              <p className="text-lg">
                Did you know? Most SocialSync users find meaningful connections
                within their first event!
              </p>
            </div>
          </div>
        </div>
        {userData.governmentId == "" || (!userData.governmentId) && (
          <>
            <div className="w-full max-w-lg rounded-lg p-6">
              <h2 className="text-xxl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                Profile Section
              </h2>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Government ID Verification
                </label>
                <input
                  type="text"
                  placeholder="Enter your Government ID (Aadhar, PAN, etc.)"
                  className="border border-gray-300 rounded-lg w-full px-4 py-2"
                  value={userData.governmentId}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hobbies
                </label>
                <input
                  type="text"
                  placeholder="List your hobbies (e.g., Reading, Traveling, Coding)"
                  className="border border-gray-300 rounded-lg w-full px-4 py-2"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Bio
                </label>
                <textarea
                  placeholder="Tell us a little about yourself"
                  className="border border-gray-300 rounded-lg w-full px-4 py-2 h-28 resize-none"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={handleSubmit}
              >
                Save Profile
              </button>
            </div>
          </>
        )}
      </div>
      <footer className="bg-blue-800 text-white text-center py-6 mt-8">
        <p>
          &copy; 2025 SocialSync. Building connections, one event at a time.
        </p>
      </footer>
    </>
  );
}

export default Profile;
