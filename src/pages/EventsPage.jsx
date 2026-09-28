// import React from "react";
// import { Link } from "react-router-dom";
// import { events } from "../data/eventsData";
// import { FaShareAlt } from "react-icons/fa";

// function EventsPage() {
//   const handleShare = async (eventId, eventTitle) => {
//     const shareUrl = `${window.location.origin}/events/${eventId}`;

//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: eventTitle,
//           text: `Check out this event: ${eventTitle}`,
//           url: shareUrl,
//         });
//       } catch (error) {
//         console.error("Error sharing:", error);
//       }
//     } else {
//       // Fallback for desktop browsers: Copy to clipboard
//       try {
//         await navigator.clipboard.writeText(shareUrl);
//         alert("Event link copied to clipboard! You can paste it to share.");
//       } catch (error) {
//         console.error("Failed to copy link:", error);
//         // Ultimate fallback if clipboard API is blocked
//         prompt("Copy this link to share:", shareUrl);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="text-center mb-12 max-w-3xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
//           Upcoming Events
//         </h1>
//         <p className="text-lg text-gray-600">
//           Register for our upcoming events and secure your spot today!
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
//           >
//             <div className="w-full h-120 overflow-hidden">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-full object-fit transition-transform duration-500"
//               />
//             </div>

//             <div className="p-6 sm:p-8 flex flex-col flex-grow">
//               <div className="text-sm font-semibold text-red-500 mb-3 uppercase tracking-wide">
//                 {event.date} <span className="text-gray-400 mx-1">|</span>{" "}
//                 {event.location}
//               </div>

//               <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                 {event.title}
//               </h2>

//               <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
//                 {event.description}
//               </p>

//               {/* Buttons Container */}
//               <div className="flex flex-col sm:flex-row gap-3">
//                 {/* View Event Button */}
//                 <Link
//                   to={`/events/${event.id}`}
//                   className="flex-1 text-center bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
//                 >
//                   View Event
//                 </Link>

//                 {/* Share Button */}
//                 <button
//                   onClick={() => handleShare(event.id, event.title)}
//                   className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-3 px-6 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-300"
//                 >
//                   <FaShareAlt className="text-sm" />
//                   Share
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default EventsPage;

import React from "react";
import { Link } from "react-router-dom";
import { events } from "../data/eventsData";
import { FaShareAlt } from "react-icons/fa";

function EventsPage() {
  const handleShare = async (eventId, eventTitle) => {
    const shareUrl = `${window.location.origin}/events/${eventId}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: `Check out this event: ${eventTitle}`,
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Event link copied to clipboard! You can paste it to share.");
      } catch (error) {
        console.error("Failed to copy link:", error);
        prompt("Copy this link to share:", shareUrl);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-800 mb-4">
          Our Events & Initiatives
        </h1>
        <p className="text-lg text-primary-600">
          Discover our events and initiatives that connect people, inspire
          ideas, and drive meaningful impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-sm overflow-hidden shadow-sm border border-primary-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
          >
            <div className="w-full h-90 md:h-120 overflow-hidden bg-primary-50">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-fit transition-transform duration-500"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              <div className="text-sm font-semibold text-accent-600 mb-3 uppercase tracking-wide">
                {event.date} <span className="text-primary-200 mx-1">|</span>{" "}
                <span className="text-primary-500">{event.location}</span>
              </div>

              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                {event.title}
              </h2>

              <p className="text-primary-700 leading-relaxed mb-8 flex-grow">
                {event.description}
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* View Event Button - Primary 600 */}
                <Link
                  to={`/events/${event.id}`}
                  className="flex-1 text-center bg-primary-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-800 transition-colors duration-300 shadow-sm"
                >
                  View Event
                </Link>

                {/* Share Button - Outlined Primary */}
                <button
                  onClick={() => handleShare(event.id, event.title)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-primary-800 text-primary-800 py-3 px-6 rounded-md font-semibold hover:bg-primary-50 transition-colors duration-300"
                >
                  <FaShareAlt className="text-sm" />
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
