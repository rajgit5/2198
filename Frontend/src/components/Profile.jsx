import React, { useState } from "react";
import Header from "./Header";

function Profile() {
  const [id, setId] = useState("");
  const [selfie, setSelfie] = useState(null);
  const [hobbies, setHobbies] = useState("");
  const [bio, setBio] = useState("");

  const handleSelfieUpload = (e) => {
    setSelfie(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center pt-20">
        <div className="w-full max-w-lg rounded-lg grid grid-c p-6">
          <h2 className="text-xxl md:text-3xl font-bold text-gray-800 mb-6 text-left">Profile Section</h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Government ID Verification
            </label>
            <input
              type="text"
              placeholder="Enter your Government ID (Aadhar, PAN, etc.)"
              className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Selfie
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleSelfieUpload}
            />
            {selfie && (
              <div className="mt-4 flex justify-center">
                <img
                  src={selfie}
                  alt="Uploaded Selfie"
                  className="w-24 h-24 rounded-full border border-gray-300"
                />
              </div>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hobbies
            </label>
            <input
              type="text"
              placeholder="List your hobbies (e.g., Reading, Traveling, Coding)"
              className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
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
              className="border border-gray-300 rounded-lg w-full px-4 py-2 focus:ring focus:ring-blue-200 focus:outline-none h-28 resize-none"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Save Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
