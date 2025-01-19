import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateEvents = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adminToken="));
    if (!adminToken) {
      navigate("/"); // Redirect to login page if not logged in
    } else {
      fetchEvents();
    }
  }, [navigate]);

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleCreateEvent = async () => {
    if (!eventName || !eventDate || !eventTime || !eventCategory) {
      alert("All fields are required!");
      return;
    }

    const newEvent = {
      title: eventName,
      category: eventCategory,
      date: eventDate,
      time: eventTime,
    };
    setIsLoading(true);

    const adminToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adminToken="))
      ?.split("=")[1];

    if (!adminToken) {
      alert("Unauthorized! Please log in again.");
      navigate("/");
      return;
    }

    try {
      const response = await fetch(
        "https://two198-1.onrender.com/event/create-event",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: adminToken,
          },
          body: JSON.stringify(newEvent),
        }
      );
      if (response.ok) {
        alert(`Event "${eventName}" created successfully!`);
        // setEvents((prevEvents) => [...prevEvents, newEvent]); // Add the new event to the list
        fetchEvents();
        setEventName("");
        setEventCategory("");
        setEventDate("");
        setEventTime("");
      } else {
        const errorData = await response.json();
        alert(
          `Failed to create event: ${errorData.message || "Unknown error"}`
        );
        console.error("Server responded with:", errorData);
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    deleteCookie("adminToken"); // Remove the cookie
    navigate("/"); // Redirect to login page
  };

  const fetchEvents = async () => {
    const adminToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adminToken="))
      ?.split("=")[1];
  
    if (!adminToken) {
      alert("Unauthorized! Please log in again.");
      navigate("/");
      return;
    }
  
    try {
      const response = await axios.get("https://two198-1.onrender.com/admin/getevent", {
        headers: {
          Authorization: adminToken, // Add 'Bearer' prefix
        },
      });
  
      // Check if response is valid
      if (response.status !== 200) {
        throw new Error("Failed to fetch events");
      }
  
      const data = response.data;
      setEvents(Object.entries(data.event)); // Ensure events is an array
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  // Delete event function
  const handleDeleteEvent = async (eventId) => {
    const adminToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("adminToken="))
      ?.split("=")[1];

    if (!adminToken) {
      alert("Unauthorized! Please log in again.");
      navigate("/");
      return;
    }

    try {
      const response = await fetch(
        `https://two198-1.onrender.com/admin/deleteEvent`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: adminToken,
          },
          body: JSON.stringify({ eventId }),
        }
      );
      if (response.ok) {
        alert("Event deleted successfully!");
        setEvents(events.filter((e) => e[1].id !== eventId)); // Remove deleted event from list
      } else {
        const errorData = await response.json();
        alert(
          `Failed to delete event: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("An error occurred while deleting the event.");
    }
  };
// console.log(events)
  return (
    <div className="flex flex-col items-center h-screen">
      {/* Header */}
      <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-2">Admin</span>
        </div>
        <button
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Create Event Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Category"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={eventCategory}
          onChange={(e) => setEventCategory(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <input
          type="time"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        <button
          className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
          onClick={handleCreateEvent}
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Event"}
        </button>
      </div>

      {/* Events List */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold mb-4 text-center">All Events</h2>
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No events available.</p>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {events.map((i) => {
              return (
                <div className="m-4 bg-gray-300 p-4 rounded">
                  <ul key={i[1].id}>
                    <li className="font-semibold text-xl mb-2">
                      Name: {i[1].title}
                    </li>
                    <li className="text-gray-600">Category: {i[1].category}</li>
                    <li className="text-gray-600">
                      Date: {new Date(i[1].date).toLocaleDateString()}
                    </li>
                    <li className="text-gray-600">Time: {i[1].time}</li>
                  </ul>
                  <button
                    className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    onClick={() => handleDeleteEvent(i[1].id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateEvents;
