// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { events } from "../data/eventsData";
// // import { FaShareAlt } from "react-icons/fa";

// // function EventsPage() {
// //   const handleShare = async (eventId, eventTitle) => {
// //     const shareUrl = `${window.location.origin}/events/${eventId}`;

// //     if (navigator.share) {
// //       try {
// //         await navigator.share({
// //           title: eventTitle,
// //           text: `Check out this event: ${eventTitle}`,
// //           url: shareUrl,
// //         });
// //       } catch (error) {
// //         console.error("Error sharing:", error);
// //       }
// //     } else {
// //       try {
// //         await navigator.clipboard.writeText(shareUrl);
// //         alert("Event link copied to clipboard! You can paste it to share.");
// //       } catch (error) {
// //         console.error("Failed to copy link:", error);
// //         prompt("Copy this link to share:", shareUrl);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 font-sans">
// //       <div className="text-center mb-12 max-w-4xl mx-auto">
// //         <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-800 mb-4">
// //           Our Events & Initiatives
// //         </h1>
// //         <p className="text-lg text-primary-600">
// //           Discover our events and initiatives that connect people, inspire
// //           ideas, and drive meaningful impact.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
// //         {events.map((event) => (
// //           <div
// //             key={event.id}
// //             className="bg-white rounded-sm overflow-hidden shadow-sm border border-primary-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group"
// //           >
// //             <div className="w-full h-90 md:h-120 overflow-hidden bg-primary-50">
// //               <img
// //                 src={event.image}
// //                 alt={event.title}
// //                 className="w-full h-full object-fit transition-transform duration-500"
// //               />
// //             </div>

// //             <div className="p-6 sm:p-7 flex flex-col flex-grow">
// //               <div className="text-sm font-semibold text-accent-600 mb-3 uppercase tracking-wide">
// //                 {event.date} <span className="text-primary-200 mx-1">|</span>{" "}
// //                 <span className="text-primary-500">{event.location}</span>
// //               </div>

// //               <h2 className="text-2xl font-bold text-primary-800 mb-4">
// //                 {event.title}
// //               </h2>

// //               <p className="text-primary-700 leading-relaxed mb-8 flex-grow">
// //                 {event.description}
// //               </p>

// //               {/* Buttons Container */}
// //               <div className="flex flex-col sm:flex-row gap-3">
// //                 {/* View Event Button - Primary 600 */}
// //                 <Link
// //                   to={`/events/${event.id}`}
// //                   className="flex-1 text-center bg-primary-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-800 transition-colors duration-300 shadow-sm"
// //                 >
// //                   View Event
// //                 </Link>

// //                 {/* Share Button - Outlined Primary */}
// //                 <button
// //                   onClick={() => handleShare(event.id, event.title)}
// //                   className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-primary-800 text-primary-800 py-3 px-6 rounded-md font-semibold hover:bg-primary-50 transition-colors duration-300"
// //                 >
// //                   <FaShareAlt className="text-sm" />
// //                   Share
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default EventsPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import { events } from "../data/eventsData";
// import { FaShareAlt } from "react-icons/fa";

// function EventsPage() {
//   // Updated to accept the whole event object to access slug, id, and title
//   const handleShare = async (event) => {
//     // Updated to include the slug in the URL
//     const shareUrl = `${window.location.origin}/events/${event.slug}`;
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: event.title,
//           text: `Check out this event: ${event.title}`,
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
//             {/* Fixed invalid Tailwind classes: h-90/h-120 -> h-72/h-96, object-fit -> object-cover */}
//             <div className="w-full h-90 md:h-120 overflow-hidden bg-primary-50">
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-full object-fit transition-transform duration-500"
//               />
//             </div>

//             <div className="p-6 sm:p-7 flex flex-col flex-grow">
//               <div className="text-sm font-semibold text-primary-900 mb-3 uppercase tracking-wide">
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
//                 {/* Updated Link to include slug */}
//                 <Link
//                   to={`/events/${event.slug}`}
//                   className="flex-1 text-center bg-primary-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-900 transition-colors duration-300 shadow-sm"
//                 >
//                   View Event
//                 </Link>

//                 {/* Updated onClick to pass the whole event object */}
//                 <button
//                   onClick={() => handleShare(event)}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaShareAlt,
  FaCheck,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import { events } from "../data/eventsData";

/*
  Events list. Brand colors only:
  navy headings, blue buttons and links, light-blue surfaces.
*/

/* Share with the device's share sheet, or copy the link as a fallback.
   Returns true when the link was copied. */
const shareEvent = async (event) => {
  const url = `${window.location.origin}/events/${event.slug}`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: event.title,
        text: `Check out this event: ${event.title}`,
        url,
      });
    } catch {
      /* user closed the share sheet */
    }
    return false;
  }
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    window.prompt("Copy this link to share:", url);
    return false;
  }
};

const EventMeta = ({ date, location }) => (
  <ul className="mb-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-primary-900/75">
    {date && (
      <li className="inline-flex items-center gap-2">
        <FaCalendarAlt className="text-primary-500" aria-hidden="true" />
        {date}
      </li>
    )}
    {location && (
      <li className="inline-flex items-center gap-2">
        <FaMapMarkerAlt className="text-primary-500" aria-hidden="true" />
        {location}
      </li>
    )}
  </ul>
);

function EventsPage() {
  const [copiedId, setCopiedId] = useState(null);

  const handleShare = async (event) => {
    const copied = await shareEvent(event);
    if (copied) {
      setCopiedId(event.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <main role="main" className="bg-white">
      {/* Header */}
      <section className="border-b border-primary-100 bg-primary-50 py-10 lg:py-14">
        <Container>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Events
          </p>
          <h1 className="text-3xl text-primary-900 lg:text-4xl">
            Our Events &amp; Initiatives
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-primary-900/70">
            Discover our events and initiatives that connect people, inspire
            ideas, and drive meaningful impact.
          </p>
        </Container>
      </section>

      {/* Event cards */}
      <section className="py-10 lg:py-14">
        <Container>
          {events.length === 0 ? (
            <p className="rounded-2xl border border-primary-100 bg-primary-50 px-6 py-16 text-center text-lg text-primary-900/70">
              No events are scheduled right now. Check back soon.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {events.map((event, i) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 2) * 0.08, duration: 0.45 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/10"
                >
                  {/* Image: shown whole (never cropped or stretched) */}
                  <div className="w-full h-90 md:h-120 overflow-hidden bg-primary-50">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-fit transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <EventMeta date={event.date} location={event.location} />

                    <h2 className="mb-3 text-2xl leading-snug text-primary-900">
                      <Link
                        to={`/events/${event.slug}`}
                        className="hover:text-primary-500 focus:outline-none focus-visible:underline"
                      >
                        {event.title}
                      </Link>
                    </h2>

                    <p className="mb-7 flex-1 text-base leading-relaxed text-primary-900/75">
                      {event.description}
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        to={`/events/${event.slug}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      >
                        View Event
                        <FaArrowRight className="text-sm" aria-hidden="true" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleShare(event)}
                        aria-label={`Share ${event.title}`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 px-6 py-3 text-base font-semibold text-primary-900 transition-colors hover:border-primary-500 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                      >
                        {copiedId === event.id ? (
                          <>
                            <FaCheck
                              className="text-sm text-primary-500"
                              aria-hidden="true"
                            />
                            Link copied
                          </>
                        ) : (
                          <>
                            <FaShareAlt
                              className="text-sm"
                              aria-hidden="true"
                            />
                            Share
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <span
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary-500 transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </motion.article>
              ))}
            </div>
          )}
          <p className="sr-only" aria-live="polite">
            {copiedId ? "Event link copied to clipboard" : ""}
          </p>
        </Container>
      </section>
    </main>
  );
}

export default EventsPage;
