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
//       try {
//         await navigator.clipboard.writeText(shareUrl);
//         alert("Event link copied to clipboard! You can paste it to share.");
//       } catch (error) {
//         console.error("Failed to copy link:", error);
//         prompt("Copy this link to share:", shareUrl);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="text-center mb-12 max-w-4xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-800 mb-4">
//           Our Events & Initiatives
//         </h1>
//         <p className="text-lg text-primary-600">
//           Discover our events and initiatives that connect people, inspire
//           ideas, and drive meaningful impact.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="bg-white rounded-sm overflow-hidden shadow-sm border border-primary-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
//           >
//             <div className="w-full h-90 md:h-120 overflow-hidden bg-primary-50">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-full object-fit transition-transform duration-500"
//               />
//             </div>

//             <div className="p-6 sm:p-7 flex flex-col flex-grow">
//               <div className="text-sm font-semibold text-accent-600 mb-3 uppercase tracking-wide">
//                 {event.date} <span className="text-primary-200 mx-1">|</span>{" "}
//                 <span className="text-primary-500">{event.location}</span>
//               </div>

//               <h2 className="text-2xl font-bold text-primary-800 mb-4">
//                 {event.title}
//               </h2>

//               <p className="text-primary-700 leading-relaxed mb-8 flex-grow">
//                 {event.description}
//               </p>

//               {/* Buttons Container */}
//               <div className="flex flex-col sm:flex-row gap-3">
//                 {/* View Event Button - Primary 600 */}
//                 <Link
//                   to={`/events/${event.id}`}
//                   className="flex-1 text-center bg-primary-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-800 transition-colors duration-300 shadow-sm"
//                 >
//                   View Event
//                 </Link>

//                 {/* Share Button - Outlined Primary */}
//                 <button
//                   onClick={() => handleShare(event.id, event.title)}
//                   className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-primary-800 text-primary-800 py-3 px-6 rounded-md font-semibold hover:bg-primary-50 transition-colors duration-300"
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
  // Updated to accept the whole event object to access slug, id, and title
  const handleShare = async (event) => {
    // Updated to include the slug in the URL
    const shareUrl = `${window.location.origin}/events/${event.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: `Check out this event: ${event.title}`,
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
            {/* Fixed invalid Tailwind classes: h-90/h-120 -> h-72/h-96, object-fit -> object-cover */}
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
                {/* Updated Link to include slug */}
                <Link
                  to={`/events/${event.slug}`}
                  className="flex-1 text-center bg-primary-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-900 transition-colors duration-300 shadow-sm"
                >
                  View Event
                </Link>

                {/* Updated onClick to pass the whole event object */}
                <button
                  onClick={() => handleShare(event)}
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
