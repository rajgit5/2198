import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Store events
  const [Data, setData] = useState([]);

  const fetchEvents = async () => {
    const adminToken = getCookie("accessToken");

    if (!adminToken) {
      alert("Unauthorized! Please log in again.");
      navigate("/");
      return;
    }

    try {
      const response = await axios.get(
        "https://two198-1.onrender.com/event/events",
        {
          headers: {
            Authorization: adminToken, // Add 'Bearer' prefix
          },
        }
      );

      // Check if response is valid
      setData(Object.entries(response.data.event).map(([key, event]) => event));

      if (response.status !== 200) {
        throw new Error("Failed to fetch events");
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <Header />
        <main className="p-6 pt-20">
          {/* Analytics Section */}
          <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-lg rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              🌟 Event Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Analytics Cards (unchanged) */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="mr-2">🔗</span> Connections Made
                </h3>
                <p className="text-4xl font-extrabold">256</p>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="mr-2">🌐</span> Top Interest
                </h3>
                <p className="text-4xl font-extrabold">Technology</p>
              </div>
              <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <span className="mr-2">📈</span> Engagement Rate
                </h3>
                <p className="text-4xl font-extrabold">87%</p>
              </div>
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="bg-gradient-to-r from-purple-100 to-blue-100 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-left">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Render Event Cards Dynamically */}
              {Data.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                  <Link to={`/event/${event._id}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75h4.5v4.5h-4.5z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 5.25H9a3.75 3.75 0 00-3.75 3.75v6A3.75 3.75 0 009 18.75h6a3.75 3.75 0 003.75-3.75V9a3.75 3.75 0 00-3.75-3.75z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">
                      📅 Date: {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600">⏰ Time: {event.time}</p>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Gamification Section */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Gamification Leaderboard</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Rank</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Badges Earned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">John Smith</td>
                    <td className="border border-gray-300 px-4 py-2">15</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
