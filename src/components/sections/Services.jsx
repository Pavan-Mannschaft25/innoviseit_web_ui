// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import Container from "../ui/Container";
// // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // import AnimatedSection from "../ui/AnimatedSection";
// // // // // import { ServiceCard } from "../ui/Card";
// // // // // import Button from "../ui/Button";
// // // // // import { FaArrowRight } from "react-icons/fa";
// // // // // import { servicesData } from "../../data/servicesData";

// // // // // // Map string icon names to actual components
// // // // // import * as FaIcons from "react-icons/fa";

// // // // // const iconMap = {
// // // // //   FaCogs: FaIcons.FaCogs,
// // // // //   FaTools: FaIcons.FaTools,
// // // // //   FaCheckCircle: FaIcons.FaCheckCircle,
// // // // //   FaCloud: FaIcons.FaCloud,
// // // // //   FaChartLine: FaIcons.FaChartLine,
// // // // //   FaRocket: FaIcons.FaRocket,
// // // // // };

// // // // // const Services = () => {
// // // // //   // Attach icon components to service data
// // // // //   const servicesWithIcons = servicesData.map((service) => ({
// // // // //     ...service,
// // // // //     icon: iconMap[service.icon] || FaIcons.FaCube,
// // // // //   }));

// // // // //   return (
// // // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // // //       <Container>
// // // // //         <SectionHeader
// // // // //           badge="Our Expertise"
// // // // //           title="Comprehensive Technology Services"
// // // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey and drive sustainable business growth"
// // // // //         />

// // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
// // // // //           {servicesWithIcons.map((service, index) => (
// // // // //             <AnimatedSection key={service.id} delay={index}>
// // // // //               <ServiceCard service={service} />
// // // // //             </AnimatedSection>
// // // // //           ))}
// // // // //         </div>

// // // // //         <AnimatedSection delay={6} className="text-center">
// // // // //           <Button
// // // // //             variant="secondary"
// // // // //             size="lg"
// // // // //             to="/services"
// // // // //             icon={FaArrowRight}
// // // // //             iconPosition="right"
// // // // //           >
// // // // //             Explore All Services
// // // // //           </Button>
// // // // //         </AnimatedSection>
// // // // //       </Container>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Services;

// // // // import React from "react";
// // // // import Container from "../ui/Container";
// // // // import SectionHeader from "../ui/SectionHeader";
// // // // import AnimatedSection from "../ui/AnimatedSection";
// // // // import StoryCard from "../ui/StoryCard";
// // // // import { servicesData } from "../../data/servicesData";

// // // // const Services = () => {
// // // //   return (
// // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // //       <Container>
// // // //         <SectionHeader
// // // //           badge="Our Expertise"
// // // //           title="Comprehensive Technology Services"
// // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // // //         />

// // // //         {/* Cards Grid */}
// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //           {servicesData.map((item, index) => (
// // // //             <AnimatedSection key={item.id} delay={index * 0.1}>
// // // //               <StoryCard data={item} />
// // // //             </AnimatedSection>
// // // //           ))}
// // // //         </div>
// // // //       </Container>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Services;

// // // import React from "react";
// // // import Container from "../ui/Container";
// // // import SectionHeader from "../ui/SectionHeader";
// // // import StoryCard from "../ui/StoryCard";
// // // import { servicesData } from "../../data/servicesData";

// // // // Swiper
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Navigation, Pagination } from "swiper/modules";

// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";

// // // const Services = () => {
// // //   return (
// // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // //       <Container>
// // //         <SectionHeader
// // //           badge="Our Expertise"
// // //           title="Comprehensive Technology Services"
// // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // //         />

// // //         {/* 🔥 Swiper Slider */}
// // //         <div className="relative mt-10">
// // //           <Swiper
// // //             modules={[Navigation, Pagination]}
// // //             spaceBetween={20}
// // //             slidesPerView={1.2}
// // //             loop={true}
// // //             navigation={{
// // //               nextEl: ".custom-next",
// // //               prevEl: ".custom-prev",
// // //             }}
// // //             pagination={{
// // //               el: ".custom-pagination",
// // //               type: "fraction",
// // //             }}
// // //             breakpoints={{
// // //               640: { slidesPerView: 1.5 },
// // //               768: { slidesPerView: 2.2 },
// // //               1024: { slidesPerView: 3 },
// // //             }}
// // //           >
// // //             {servicesData.map((item) => (
// // //               <SwiperSlide key={item.id}>
// // //                 <StoryCard data={item} />
// // //               </SwiperSlide>
// // //             ))}
// // //           </Swiper>

// // //           {/* 🔥 Navigation Buttons */}
// // //           <div className="absolute top-0 right-0 flex items-center gap-4 z-10">
// // //             <button className="custom-prev w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
// // //               ←
// // //             </button>

// // //             <button className="custom-next w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
// // //               →
// // //             </button>
// // //           </div>

// // //           {/* 🔥 Fraction Pagination */}
// // //           <div className="custom-pagination mt-4 text-sm text-gray-600"></div>
// // //         </div>
// // //       </Container>
// // //     </section>
// // //   );
// // // };

// // // export default Services;

// // import React, { useRef, useState } from "react";
// // import Container from "../ui/Container";
// // import SectionHeader from "../ui/SectionHeader";
// // import ServiceCard from "../ui/ServiceCard";
// // import { servicesData } from "../../data/servicesData";
// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // Swiper
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import {
// //   Navigation,
// //   Pagination,
// //   Autoplay,
// //   EffectCoverflow,
// // } from "swiper/modules";

// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import "swiper/css/effect-coverflow";

// // const Services = () => {
// //   const swiperRef = useRef(null);
// //   const [isBeginning, setIsBeginning] = useState(true);
// //   const [isEnd, setIsEnd] = useState(false);

// //   const handleSlideChange = (swiper) => {
// //     setIsBeginning(swiper.isBeginning);
// //     setIsEnd(swiper.isEnd);
// //   };

// //   return (
// //     <section className="relative py-20 lg:py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// //       {/* Background Decoration */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// //       </div>

// //       <Container>
// //         {/* Header */}
// //         <SectionHeader
// //           title="Comprehensive Technology Services"
// //           // subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// //         />

// //         {/* Slider Container */}
// //         <div className="relative mt-16 lg:mt-20">
// //           <Swiper
// //             ref={swiperRef}
// //             modules={[Navigation, Pagination, Autoplay]}
// //             spaceBetween={24}
// //             slidesPerView={1.2}
// //             loop={true}
// //             grabCursor={true}
// //             autoplay={{
// //               delay: 4000,
// //               disableOnInteraction: true,
// //               pauseOnMouseEnter: true,
// //             }}
// //             onSlideChange={handleSlideChange}
// //             onSwiper={(swiper) => {
// //               swiperRef.current = swiper;
// //             }}
// //             breakpoints={{
// //               640: {
// //                 slidesPerView: 1.5,
// //                 spaceBetween: 20,
// //               },
// //               768: {
// //                 slidesPerView: 2.3,
// //                 spaceBetween: 24,
// //               },
// //               1024: {
// //                 slidesPerView: 3,
// //                 spaceBetween: 28,
// //               },
// //               1280: {
// //                 slidesPerView: 3.2,
// //                 spaceBetween: 32,
// //               },
// //             }}
// //             className="!pb-14"
// //           >
// //             {servicesData.map((item, index) => (
// //               <SwiperSlide key={item.id} virtualIndex={index}>
// //                 <ServiceCard data={item} index={index} />
// //               </SwiperSlide>
// //             ))}
// //           </Swiper>

// //           {/* Navigation Controls */}
// //           <div className="absolute top-0 right-0 flex items-center gap-3 z-10">
// //             <button
// //               onClick={() => swiperRef.current?.slidePrev()}
// //               disabled={isBeginning}
// //               aria-label="Previous slide"
// //               className={`w-11 h-11 rounded-full border-2 bg-white/90 backdrop-blur-sm
// //                 flex items-center justify-center transition-all duration-300
// //                 hover:bg-white hover:shadow-lg hover:border-primary-500 hover:text-primary-600
// //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/90
// //                 group ${isBeginning ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// //             >
// //               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
// //             </button>

// //             <button
// //               onClick={() => swiperRef.current?.slideNext()}
// //               disabled={isEnd}
// //               aria-label="Next slide"
// //               className={`w-11 h-11 rounded-full border-2 bg-white/90 backdrop-blur-sm
// //                 flex items-center justify-center transition-all duration-300
// //                 hover:bg-white hover:shadow-lg hover:border-primary-500 hover:text-primary-600
// //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/90
// //                 group ${isEnd ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// //             >
// //               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
// //             </button>
// //           </div>

// //           {/* Custom Pagination */}
// //           <div className="flex items-center justify-center gap-4 mt-8">
// //             <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
// //               Slide
// //             </span>
// //             <div className="custom-pagination text-sm font-semibold text-primary-600 min-w-[3rem] text-center" />
// //             <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
// //               of {servicesData.length}
// //             </span>
// //           </div>
// //         </div>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default Services;

// import React, { useRef, useState } from "react";
// import Container from "../ui/Container";
// import SectionHeader from "../ui/SectionHeader";
// import ServiceCard from "../ui/ServiceCard";
// import { servicesData } from "../../data/servicesData";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Services = () => {
//   const swiperRef = useRef(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const handleSlideChange = (swiper) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   return (
//     <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
//       </div>

//       <Container>
//         {/* Header */}
//         <SectionHeader title="Comprehensive Technology Services" />

//         {/* Slider Container - Full Width */}
//         <div className="relative mt-12 lg:mt-16 w-full">
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={24}
//             slidesPerView={1.2}
//             loop={true}
//             grabCursor={true}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: true,
//               pauseOnMouseEnter: true,
//             }}
//             onSlideChange={handleSlideChange}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1.5,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2.3,
//                 spaceBetween: 24,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 28,
//               },
//               1280: {
//                 slidesPerView: 3.5,
//                 spaceBetween: 32,
//               },
//             }}
//             className="w-full !pb-14 services-swiper"
//           >
//             {servicesData.map((item, index) => (
//               <SwiperSlide
//                 key={item.id}
//                 virtualIndex={index}
//                 className="h-auto"
//               >
//                 <ServiceCard data={item} index={index} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Controls - Top Right Aligned */}
//           <div className="absolute top-0 right-0 flex items-center gap-3 z-10 -mt-1">
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               disabled={isBeginning}
//               aria-label="Previous slide"
//               className={`w-11 h-11 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
//                 flex items-center justify-center transition-all duration-300
//                 hover:bg-white hover:shadow-xl hover:border-primary-500 hover:text-primary-600
//                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
//                 group ${isBeginning ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
//             >
//               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
//             </button>

//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               disabled={isEnd}
//               aria-label="Next slide"
//               className={`w-11 h-11 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
//                 flex items-center justify-center transition-all duration-300
//                 hover:bg-white hover:shadow-xl hover:border-primary-500 hover:text-primary-600
//                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
//                 group ${isEnd ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
//             >
//               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
//             </button>
//           </div>
//         </div>
//       </Container>

//       {/* Custom Styles for Equal Height Cards */}
//       <style>{`
//         .services-swiper .swiper-slide {
//           height: auto;
//           display: flex;
//           align-items: stretch;
//         }

//         .services-swiper .swiper-slide > div {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         /* Ensure all cards stretch to same height */
//         .services-swiper .swiper-wrapper {
//           align-items: stretch !important;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Services;

import React, { useRef, useState } from "react";
import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";
import { servicesData } from "../../data/servicesData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="relative py-2 lg:py-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* 🔥 Header Row: Title Left + Nav Buttons Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2 lg:mb-6">
          {/* Left Side - Heading */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B2A4A] leading-tight">
              Comprehensive Technology Services
            </h2>
          </div>

          {/* Right Side - Navigation Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              aria-label="Previous slide"
              className={`w-12 h-12 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
                flex items-center justify-center transition-all duration-300 
                hover:bg-white hover:shadow-xl hover:border-[#0B2A4A] hover:text-[#0B2A4A]
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
                group ${isBeginning ? "border-gray-200 text-[#0B2A4A]" : "border-gray-300 text-gray-700"}`}
            >
              <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              aria-label="Next slide"
              className={`w-12 h-12 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
                flex items-center justify-center transition-all duration-300 
                hover:bg-white hover:shadow-xl hover:border-[#0B2A4A] hover:text-[#0B2A4A]
                disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
                group ${isEnd ? "border-gray-200 text-[#0B2A4A]" : "border-gray-300 text-[#0B2A4A]"}`}
            >
              <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Slider Container - Full Width */}
        <div className="relative w-full">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 32,
              },
            }}
            className="w-full !pb-14 services-swiper"
          >
            {servicesData.map((item, index) => (
              <SwiperSlide
                key={item.id}
                virtualIndex={index}
                className="h-auto"
              >
                <ServiceCard data={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      {/* Custom Styles for Equal Height Cards */}
      <style>{`
        .services-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }
        
        .services-swiper .swiper-slide > div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .services-swiper .swiper-wrapper {
          align-items: stretch !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
