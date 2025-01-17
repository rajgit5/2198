import Header from "./Header";

function Dashboard() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <Header/>
        <main className="p-6 pt-20">
          {/* Analytics Section */}
          {/* Event Analytics Section */}
          <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 shadow-lg rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              🌟 Event Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Analytics Card */}
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
              {/* Event Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
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
                  <h3 className="text-xl font-bold">Quiz Night</h3>
                </div>
                <p className="text-gray-600 mb-2">📅 Date: January 20, 2025</p>
                <p className="text-gray-600">⏰ Time: 7:00 PM - 9:00 PM</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
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
                        d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7.5v4.5l3 1.5"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Tech Meetup</h3>
                </div>
                <p className="text-gray-600 mb-2">📅 Date: January 25, 2025</p>
                <p className="text-gray-600">⏰ Time: 6:00 PM - 8:30 PM</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 text-white p-3 rounded-full mr-4">
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
                        d="M13.5 6.75h-3a6 6 0 00-6 6v3a6 6 0 006 6h3a6 6 0 006-6v-3a6 6 0 00-6-6z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11.25v1.5"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Workshop: AI Basics</h3>
                </div>
                <p className="text-gray-600 mb-2">📅 Date: February 2, 2025</p>
                <p className="text-gray-600">⏰ Time: 5:00 PM - 7:00 PM</p>
              </div>
            </div>
          </section>

          {/* Gamification Section */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Gamification Leaderboard
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Rank</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Badges Earned
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">
                      John Smith
                    </td>
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
