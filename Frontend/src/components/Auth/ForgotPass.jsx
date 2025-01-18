import React from 'react'
import { Link } from "react-router-dom";

function ForgotPass() {
  return (
    <>
    <header className="fixed bg-white shadow-md w-full p-4 flex justify-between items-center">
        <Link to='/'>
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
                <form>
                  <input
                    type="email"
                    name="email"
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
  )
}

export default ForgotPass