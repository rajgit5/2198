import React from 'react';
import { useParams } from 'react-router-dom';

function Event() {
  const { eventId } = useParams();

  // Example data (Replace with API call or context state)
  const eventData = {
    'quiz-night': {
      name: 'Quiz Night',
      date: 'January 20, 2025',
      time: '7:00 PM - 9:00 PM',
      description: 'A fun-filled quiz night to challenge your knowledge and win prizes!',
    },
    'tech-meetup': {
      name: 'Tech Meetup',
      date: 'January 25, 2025',
      time: '6:00 PM - 8:30 PM',
      description: 'Meet like-minded tech enthusiasts and network with industry professionals.',
    },
    // Add more events...
  };

  const event = eventData[eventId] || {};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{event.name || 'Event Not Found'}</h1>
        {event.name ? (
          <>
            <p className="text-gray-700 mb-2">📅 Date: {event.date}</p>
            <p className="text-gray-700 mb-2">⏰ Time: {event.time}</p>
            <p className="text-gray-700 mb-4">{event.description}</p>

            <h2 className="text-2xl font-semibold mb-4">Connection Features</h2>
            <ul className="list-disc list-inside">
              <li className="text-gray-700 mb-2">
                <strong>Unique Code-Based Profiles:</strong> Use your wearable band code to connect with others.
              </li>
              <li className="text-gray-700 mb-2">
                <strong>Interest Notifications:</strong> Send "Let's Connect" requests to other participants.
              </li>
              <li className="text-gray-700 mb-2">
                <strong>Date Booking:</strong> Schedule a meetup with discounts at partner venues.
              </li>
            </ul>
          </>
        ) : (
          <p className="text-gray-700">The event you're looking for does not exist.</p>
        )}
      </div>
    </div>
  );
}

export default Event;
