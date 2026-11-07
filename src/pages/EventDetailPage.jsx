// // import React from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { events } from "../data/eventsData";

// // const EventDetailPage = () => {
// //   const { eventId } = useParams();
// //   const event = events.find((e) => e.id === parseInt(eventId));

// //   if (!event) {
// //     return (
// //       <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
// //         <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-800 mb-4">
// //           404
// //         </h1>
// //         <p className="text-primary-600 text-lg mb-8">Event not found.</p>
// //         <Link
// //           to="/events"
// //           className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
// //         >
// //           Back to Events
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     // Changed background to white
// //     <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans">
// //       <div className="max-w-7xl mx-auto bg-white rounded-sm shadow-lg border border-primary-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
// //         {/* LEFT SIDE: Event Image */}
// //         <div className="relative h-100 md:h-auto md:min-h-[600px] bg-primary-50">
// //           <img
// //             src={event.image}
// //             alt={event.title}
// //             className="absolute inset-0 w-full h-full object-fit"
// //           />
// //         </div>

// //         {/* RIGHT SIDE: Event Content & Register Button */}
// //         <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center">

// //           {/* Date and Location - Accent 600 (Gold) */}
// //           <div className="text-sm font-semibold text-accent-600 mb-3 uppercase tracking-wide">
// //             {event.date} <span className="text-primary-200 mx-1">|</span>{" "}
// //             <span className="text-primary-500">{event.location}</span>
// //           </div>

// //           {/* Title - Primary 900 (Deep Blue) */}
// //           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-900 mb-5">
// //             {event.title}
// //           </h1>

// //           {/* Description */}
// //           <p className="text-primary-600 leading-relaxed text-base sm:text-lg mb-8">
// //             {event.longDescription}
// //           </p>

// //           {/* Register Button Section */}
// //           <div className="border-t border-primary-100 pt-6">
// //             <div className="mb-4">
// //               <h3 className="text-lg font-bold text-primary-900">
// //                 Ready to join?
// //               </h3>
// //               <p className="text-primary-600 text-sm">
// //                 Click below to register for this event.
// //               </p>
// //             </div>
// //             <a
// //               href={event.registerLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               // Using Accent 500/600 for the main CTA to make it pop against the blue
// //               className="block text-center w-full bg-accent-500 text-white py-4 px-8 rounded-md font-semibold hover:bg-accent-600 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
// //             >
// //               Register Now
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EventDetailPage;
// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { events } from "../data/eventsData";

// const EventDetailPage = () => {
//   const { eventSlug } = useParams();
//   const event = events.find((e) => e.slug === eventSlug);

//   // Update the browser tab title to the event name
//   useEffect(() => {
//     if (event) {
//       document.title = `${event.title} | Innovise`;
//     } else {
//       document.title = "Event Not Found | Innovise";
//     }

//     // Cleanup: Reset title when leaving the page
//     return () => {
//       document.title = "Innovise";
//     };
//   }, [event]);

//   // 404 Fallback
//   if (!event) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-800 mb-4">
//           404
//         </h1>
//         <p className="text-primary-600 text-lg mb-8">Event not found.</p>
//         <Link
//           to="/events"
//           className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
//         >
//           Back to Events
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto bg-white rounded-sm shadow-lg border border-primary-100 overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         {/* LEFT SIDE: Event Image */}
//         {/* Fixed invalid classes: h-100 -> h-80 md:h-auto, object-fit -> object-cover */}
//         <div className="relative h-100 md:h-auto md:min-h-[600px] bg-primary-50">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="absolute inset-0 w-full h-full object-fit"
//           />
//         </div>

//         {/* RIGHT SIDE: Event Content & Register Button */}
//         <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center">
//           {/* Back to Events Link */}
//           {/* <Link
//             to="/events"
//             className="text-primary-600 hover:text-primary-800 font-semibold flex items-center gap-2 mb-6 text-sm w-fit"
//           >
//             ← Back to All Events
//           </Link> */}

//           {/* Date and Location - Accent 600 (Gold) */}
//           <div className="text-sm font-semibold text-primary-900 mb-3 uppercase tracking-wide">
//             {event.date} <span className="text-primary-200 mx-1">|</span>{" "}
//             <span className="text-primary-500">{event.location}</span>
//           </div>

//           {/* Title - Primary 900 (Deep Blue) */}
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-900 mb-5">
//             {event.title}
//           </h1>

//           {/* Description */}
//           <p className="text-primary-600 leading-relaxed text-base sm:text-lg mb-8">
//             {event.longDescription}
//           </p>

//           {/* Register Button Section */}
//           <div className="border-t border-primary-100 pt-6">
//             <div className="mb-4">
//               <h3 className="text-lg font-bold text-primary-900">
//                 Ready to join?
//               </h3>
//               <p className="text-primary-600 text-sm">
//                 Click below to register for this event.
//               </p>
//             </div>
//             <a
//               href={event.registerLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block text-center w-full bg-primary-900 text-white py-4 px-8 rounded-md font-semibold hover:bg-accent-600 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
//             >
//               Register Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetailPage;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShareAlt,
  FaCheck,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Container from "../components/ui/Container";
import { events } from "../data/eventsData";

/*
  Single event page. Brand colors only:
  navy headings, blue buttons, light-blue surfaces.
*/

const EventDetailPage = () => {
  const { eventSlug } = useParams();
  const event = events.find((e) => e.slug === eventSlug);
  const [copied, setCopied] = useState(false);

  // Browser tab title
  useEffect(() => {
    document.title = event
      ? `${event.title} | Innovise`
      : "Event Not Found | Innovise";
    return () => {
      document.title = "Innovise";
    };
  }, [event]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: event.title, url });
      } catch {
        /* user closed the share sheet */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this link to share:", url);
    }
  };

  /* Not found */
  if (!event) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
          Events
        </p>
        <h1 className="mb-3 text-3xl text-primary-900">
          This event isn't available
        </h1>
        <p className="mb-8 text-lg text-primary-900/70">
          It may have ended or been removed. See our other events.
        </p>
        <Link
          to="/events"
          className="rounded-lg bg-primary-500 px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          See all events
        </Link>
      </main>
    );
  }

  return (
    <main role="main" className="bg-primary-50 py-10 lg:py-14">
      <Container>
        <Link
          to="/events"
          className="mb-6 inline-flex items-center gap-2 text-base font-semibold text-primary-500 hover:text-primary-900 focus:outline-none focus-visible:underline"
        >
          <FaArrowLeft className="text-sm" aria-hidden="true" />
          All events
        </Link>

        <article className="grid overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm shadow-primary-900/5 md:grid-cols-2">
          {/* Image: shown whole (never cropped or stretched) */}
          <div className="relative min-h-[320px] bg-primary-50 md:min-h-[560px]">
            <img
              src={event.image}
              alt={event.title}
              className="absolute inset-0 h-full w-full object-fit"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <ul className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-primary-900/75">
              {event.date && (
                <li className="inline-flex items-center gap-2">
                  <FaCalendarAlt
                    className="text-primary-500"
                    aria-hidden="true"
                  />
                  {event.date}
                </li>
              )}
              {event.location && (
                <li className="inline-flex items-center gap-2">
                  <FaMapMarkerAlt
                    className="text-primary-500"
                    aria-hidden="true"
                  />
                  {event.location}
                </li>
              )}
            </ul>

            <h1 className="mb-5 text-3xl leading-tight text-primary-900 lg:text-4xl">
              {event.title}
            </h1>

            <p className="mb-8 whitespace-pre-line text-base leading-relaxed text-primary-900/75 sm:text-lg">
              {event.longDescription || event.description}
            </p>

            <div className="border-t border-primary-100 pt-6">
              {event.registerLink ? (
                <>
                  <h2 className="text-lg text-primary-900">Ready to join?</h2>
                  <p className="mb-4 text-base text-primary-900/70">
                    Registration opens on the event organizer's page.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={event.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    >
                      Register Now
                      <FaExternalLinkAlt
                        className="text-sm"
                        aria-hidden="true"
                      />
                    </a>
                    <button
                      type="button"
                      onClick={handleShare}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 px-6 py-4 text-base font-semibold text-primary-900 transition-colors hover:border-primary-500 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                    >
                      {copied ? (
                        <>
                          <FaCheck
                            className="text-sm text-primary-500"
                            aria-hidden="true"
                          />
                          Link copied
                        </>
                      ) : (
                        <>
                          <FaShareAlt className="text-sm" aria-hidden="true" />
                          Share
                        </>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-base text-primary-900/70">
                  Registration details will be shared soon.
                </p>
              )}
              <p className="sr-only" aria-live="polite">
                {copied ? "Event link copied to clipboard" : ""}
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
};

export default EventDetailPage;
