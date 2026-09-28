import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../data/eventsData";

const EventDetailPage = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === parseInt(eventId));

  // 404 Fallback
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-800 mb-4">
          404
        </h1>
        <p className="text-primary-600 text-lg mb-8">Event not found.</p>
        <Link
          to="/events"
          className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    // Changed background to white
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-sm shadow-lg border border-primary-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE: Event Image */}
        <div className="relative h-100 md:h-auto md:min-h-[600px] bg-primary-50">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-fit"
          />
        </div>

        {/* RIGHT SIDE: Event Content & Register Button */}
        <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center">
          {/* Back to Events Link */}
          {/* <Link
            to="/events"
            className="text-primary-600 hover:text-primary-800 font-semibold flex items-center gap-2 mb-6 text-sm w-fit"
          >
            ← Back to All Events
          </Link> */}

          {/* Date and Location - Accent 600 (Gold) */}
          <div className="text-sm font-semibold text-accent-600 mb-3 uppercase tracking-wide">
            {event.date} <span className="text-primary-200 mx-1">|</span>{" "}
            <span className="text-primary-500">{event.location}</span>
          </div>

          {/* Title - Primary 900 (Deep Blue) */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-900 mb-5">
            {event.title}
          </h1>

          {/* Description */}
          <p className="text-primary-600 leading-relaxed text-base sm:text-lg mb-8">
            {event.longDescription}
          </p>

          {/* Register Button Section */}
          <div className="border-t border-primary-100 pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-primary-900">
                Ready to join?
              </h3>
              <p className="text-primary-600 text-sm">
                Click below to register for this event.
              </p>
            </div>
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              // Using Accent 500/600 for the main CTA to make it pop against the blue
              className="block text-center w-full bg-accent-500 text-white py-4 px-8 rounded-md font-semibold hover:bg-accent-600 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
