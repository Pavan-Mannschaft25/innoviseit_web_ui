// // // // // // // import React from "react";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import Container from "../ui/Container";
// // // // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // // // import AnimatedSection from "../ui/AnimatedSection";
// // // // // // // import { ServiceCard } from "../ui/Card";
// // // // // // // import Button from "../ui/Button";
// // // // // // // import { FaArrowRight } from "react-icons/fa";
// // // // // // // import { servicesData } from "../../data/servicesData";

// // // // // // // // Map string icon names to actual components
// // // // // // // import * as FaIcons from "react-icons/fa";

// // // // // // // const iconMap = {
// // // // // // //   FaCogs: FaIcons.FaCogs,
// // // // // // //   FaTools: FaIcons.FaTools,
// // // // // // //   FaCheckCircle: FaIcons.FaCheckCircle,
// // // // // // //   FaCloud: FaIcons.FaCloud,
// // // // // // //   FaChartLine: FaIcons.FaChartLine,
// // // // // // //   FaRocket: FaIcons.FaRocket,
// // // // // // // };

// // // // // // // const Services = () => {
// // // // // // //   // Attach icon components to service data
// // // // // // //   const servicesWithIcons = servicesData.map((service) => ({
// // // // // // //     ...service,
// // // // // // //     icon: iconMap[service.icon] || FaIcons.FaCube,
// // // // // // //   }));

// // // // // // //   return (
// // // // // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // // // // //       <Container>
// // // // // // //         <SectionHeader
// // // // // // //           badge="Our Expertise"
// // // // // // //           title="Comprehensive Technology Services"
// // // // // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey and drive sustainable business growth"
// // // // // // //         />

// // // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
// // // // // // //           {servicesWithIcons.map((service, index) => (
// // // // // // //             <AnimatedSection key={service.id} delay={index}>
// // // // // // //               <ServiceCard service={service} />
// // // // // // //             </AnimatedSection>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         <AnimatedSection delay={6} className="text-center">
// // // // // // //           <Button
// // // // // // //             variant="secondary"
// // // // // // //             size="lg"
// // // // // // //             to="/services"
// // // // // // //             icon={FaArrowRight}
// // // // // // //             iconPosition="right"
// // // // // // //           >
// // // // // // //             Explore All Services
// // // // // // //           </Button>
// // // // // // //         </AnimatedSection>
// // // // // // //       </Container>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Services;

// // // // // // import React from "react";
// // // // // // import Container from "../ui/Container";
// // // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // // import AnimatedSection from "../ui/AnimatedSection";
// // // // // // import StoryCard from "../ui/StoryCard";
// // // // // // import { servicesData } from "../../data/servicesData";

// // // // // // const Services = () => {
// // // // // //   return (
// // // // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // // // //       <Container>
// // // // // //         <SectionHeader
// // // // // //           badge="Our Expertise"
// // // // // //           title="Comprehensive Technology Services"
// // // // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // // // // //         />

// // // // // //         {/* Cards Grid */}
// // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // //           {servicesData.map((item, index) => (
// // // // // //             <AnimatedSection key={item.id} delay={index * 0.1}>
// // // // // //               <StoryCard data={item} />
// // // // // //             </AnimatedSection>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </Container>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Services;

// // // // // import React from "react";
// // // // // import Container from "../ui/Container";
// // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // import StoryCard from "../ui/StoryCard";
// // // // // import { servicesData } from "../../data/servicesData";

// // // // // // Swiper
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import { Navigation, Pagination } from "swiper/modules";

// // // // // import "swiper/css";
// // // // // import "swiper/css/navigation";
// // // // // import "swiper/css/pagination";

// // // // // const Services = () => {
// // // // //   return (
// // // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // // //       <Container>
// // // // //         <SectionHeader
// // // // //           badge="Our Expertise"
// // // // //           title="Comprehensive Technology Services"
// // // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // // // //         />

// // // // //         {/* 🔥 Swiper Slider */}
// // // // //         <div className="relative mt-10">
// // // // //           <Swiper
// // // // //             modules={[Navigation, Pagination]}
// // // // //             spaceBetween={20}
// // // // //             slidesPerView={1.2}
// // // // //             loop={true}
// // // // //             navigation={{
// // // // //               nextEl: ".custom-next",
// // // // //               prevEl: ".custom-prev",
// // // // //             }}
// // // // //             pagination={{
// // // // //               el: ".custom-pagination",
// // // // //               type: "fraction",
// // // // //             }}
// // // // //             breakpoints={{
// // // // //               640: { slidesPerView: 1.5 },
// // // // //               768: { slidesPerView: 2.2 },
// // // // //               1024: { slidesPerView: 3 },
// // // // //             }}
// // // // //           >
// // // // //             {servicesData.map((item) => (
// // // // //               <SwiperSlide key={item.id}>
// // // // //                 <StoryCard data={item} />
// // // // //               </SwiperSlide>
// // // // //             ))}
// // // // //           </Swiper>

// // // // //           {/* 🔥 Navigation Buttons */}
// // // // //           <div className="absolute top-0 right-0 flex items-center gap-4 z-10">
// // // // //             <button className="custom-prev w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
// // // // //               ←
// // // // //             </button>

// // // // //             <button className="custom-next w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
// // // // //               →
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* 🔥 Fraction Pagination */}
// // // // //           <div className="custom-pagination mt-4 text-sm text-gray-600"></div>
// // // // //         </div>
// // // // //       </Container>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Services;

// // // // import React, { useRef, useState } from "react";
// // // // import Container from "../ui/Container";
// // // // import SectionHeader from "../ui/SectionHeader";
// // // // import ServiceCard from "../ui/ServiceCard";
// // // // import { servicesData } from "../../data/servicesData";
// // // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // // Swiper
// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import {
// // // //   Navigation,
// // // //   Pagination,
// // // //   Autoplay,
// // // //   EffectCoverflow,
// // // // } from "swiper/modules";

// // // // import "swiper/css";
// // // // import "swiper/css/navigation";
// // // // import "swiper/css/pagination";
// // // // import "swiper/css/effect-coverflow";

// // // // const Services = () => {
// // // //   const swiperRef = useRef(null);
// // // //   const [isBeginning, setIsBeginning] = useState(true);
// // // //   const [isEnd, setIsEnd] = useState(false);

// // // //   const handleSlideChange = (swiper) => {
// // // //     setIsBeginning(swiper.isBeginning);
// // // //     setIsEnd(swiper.isEnd);
// // // //   };

// // // //   return (
// // // //     <section className="relative py-20 lg:py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // // //       {/* Background Decoration */}
// // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// // // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// // // //       </div>

// // // //       <Container>
// // // //         {/* Header */}
// // // //         <SectionHeader
// // // //           title="Comprehensive Technology Services"
// // // //           // subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // // //         />

// // // //         {/* Slider Container */}
// // // //         <div className="relative mt-16 lg:mt-20">
// // // //           <Swiper
// // // //             ref={swiperRef}
// // // //             modules={[Navigation, Pagination, Autoplay]}
// // // //             spaceBetween={24}
// // // //             slidesPerView={1.2}
// // // //             loop={true}
// // // //             grabCursor={true}
// // // //             autoplay={{
// // // //               delay: 4000,
// // // //               disableOnInteraction: true,
// // // //               pauseOnMouseEnter: true,
// // // //             }}
// // // //             onSlideChange={handleSlideChange}
// // // //             onSwiper={(swiper) => {
// // // //               swiperRef.current = swiper;
// // // //             }}
// // // //             breakpoints={{
// // // //               640: {
// // // //                 slidesPerView: 1.5,
// // // //                 spaceBetween: 20,
// // // //               },
// // // //               768: {
// // // //                 slidesPerView: 2.3,
// // // //                 spaceBetween: 24,
// // // //               },
// // // //               1024: {
// // // //                 slidesPerView: 3,
// // // //                 spaceBetween: 28,
// // // //               },
// // // //               1280: {
// // // //                 slidesPerView: 3.2,
// // // //                 spaceBetween: 32,
// // // //               },
// // // //             }}
// // // //             className="!pb-14"
// // // //           >
// // // //             {servicesData.map((item, index) => (
// // // //               <SwiperSlide key={item.id} virtualIndex={index}>
// // // //                 <ServiceCard data={item} index={index} />
// // // //               </SwiperSlide>
// // // //             ))}
// // // //           </Swiper>

// // // //           {/* Navigation Controls */}
// // // //           <div className="absolute top-0 right-0 flex items-center gap-3 z-10">
// // // //             <button
// // // //               onClick={() => swiperRef.current?.slidePrev()}
// // // //               disabled={isBeginning}
// // // //               aria-label="Previous slide"
// // // //               className={`w-11 h-11 rounded-full border-2 bg-white/90 backdrop-blur-sm
// // // //                 flex items-center justify-center transition-all duration-300
// // // //                 hover:bg-white hover:shadow-lg hover:border-primary-500 hover:text-primary-600
// // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/90
// // // //                 group ${isBeginning ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // // //             >
// // // //               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
// // // //             </button>

// // // //             <button
// // // //               onClick={() => swiperRef.current?.slideNext()}
// // // //               disabled={isEnd}
// // // //               aria-label="Next slide"
// // // //               className={`w-11 h-11 rounded-full border-2 bg-white/90 backdrop-blur-sm
// // // //                 flex items-center justify-center transition-all duration-300
// // // //                 hover:bg-white hover:shadow-lg hover:border-primary-500 hover:text-primary-600
// // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/90
// // // //                 group ${isEnd ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // // //             >
// // // //               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
// // // //             </button>
// // // //           </div>

// // // //           {/* Custom Pagination */}
// // // //           <div className="flex items-center justify-center gap-4 mt-8">
// // // //             <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //               Slide
// // // //             </span>
// // // //             <div className="custom-pagination text-sm font-semibold text-primary-600 min-w-[3rem] text-center" />
// // // //             <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // //               of {servicesData.length}
// // // //             </span>
// // // //           </div>
// // // //         </div>
// // // //       </Container>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Services;

// // // import React, { useRef, useState } from "react";
// // // import Container from "../ui/Container";
// // // import SectionHeader from "../ui/SectionHeader";
// // // import ServiceCard from "../ui/ServiceCard";
// // // import { servicesData } from "../../data/servicesData";
// // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // Swiper
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";

// // // const Services = () => {
// // //   const swiperRef = useRef(null);
// // //   const [isBeginning, setIsBeginning] = useState(true);
// // //   const [isEnd, setIsEnd] = useState(false);

// // //   const handleSlideChange = (swiper) => {
// // //     setIsBeginning(swiper.isBeginning);
// // //     setIsEnd(swiper.isEnd);
// // //   };

// // //   return (
// // //     <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // //       {/* Background Decoration */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// // //       </div>

// // //       <Container>
// // //         {/* Header */}
// // //         <SectionHeader title="Comprehensive Technology Services" />

// // //         {/* Slider Container - Full Width */}
// // //         <div className="relative mt-12 lg:mt-16 w-full">
// // //           <Swiper
// // //             ref={swiperRef}
// // //             modules={[Navigation, Pagination, Autoplay]}
// // //             spaceBetween={24}
// // //             slidesPerView={1.2}
// // //             loop={true}
// // //             grabCursor={true}
// // //             autoplay={{
// // //               delay: 4000,
// // //               disableOnInteraction: true,
// // //               pauseOnMouseEnter: true,
// // //             }}
// // //             onSlideChange={handleSlideChange}
// // //             onSwiper={(swiper) => {
// // //               swiperRef.current = swiper;
// // //             }}
// // //             breakpoints={{
// // //               640: {
// // //                 slidesPerView: 1.5,
// // //                 spaceBetween: 20,
// // //               },
// // //               768: {
// // //                 slidesPerView: 2.3,
// // //                 spaceBetween: 24,
// // //               },
// // //               1024: {
// // //                 slidesPerView: 3,
// // //                 spaceBetween: 28,
// // //               },
// // //               1280: {
// // //                 slidesPerView: 3.5,
// // //                 spaceBetween: 32,
// // //               },
// // //             }}
// // //             className="w-full !pb-14 services-swiper"
// // //           >
// // //             {servicesData.map((item, index) => (
// // //               <SwiperSlide
// // //                 key={item.id}
// // //                 virtualIndex={index}
// // //                 className="h-auto"
// // //               >
// // //                 <ServiceCard data={item} index={index} />
// // //               </SwiperSlide>
// // //             ))}
// // //           </Swiper>

// // //           {/* Navigation Controls - Top Right Aligned */}
// // //           <div className="absolute top-0 right-0 flex items-center gap-3 z-10 -mt-1">
// // //             <button
// // //               onClick={() => swiperRef.current?.slidePrev()}
// // //               disabled={isBeginning}
// // //               aria-label="Previous slide"
// // //               className={`w-11 h-11 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // //                 flex items-center justify-center transition-all duration-300
// // //                 hover:bg-white hover:shadow-xl hover:border-primary-500 hover:text-primary-600
// // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // //                 group ${isBeginning ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // //             >
// // //               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
// // //             </button>

// // //             <button
// // //               onClick={() => swiperRef.current?.slideNext()}
// // //               disabled={isEnd}
// // //               aria-label="Next slide"
// // //               className={`w-11 h-11 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // //                 flex items-center justify-center transition-all duration-300
// // //                 hover:bg-white hover:shadow-xl hover:border-primary-500 hover:text-primary-600
// // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // //                 group ${isEnd ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // //             >
// // //               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </Container>

// // //       {/* Custom Styles for Equal Height Cards */}
// // //       <style>{`
// // //         .services-swiper .swiper-slide {
// // //           height: auto;
// // //           display: flex;
// // //           align-items: stretch;
// // //         }

// // //         .services-swiper .swiper-slide > div {
// // //           width: 100%;
// // //           height: 100%;
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         /* Ensure all cards stretch to same height */
// // //         .services-swiper .swiper-wrapper {
// // //           align-items: stretch !important;
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Services;

// // // import React, { useRef, useState } from "react";
// // // import Container from "../ui/Container";
// // // import ServiceCard from "../ui/ServiceCard";
// // // import { servicesData } from "../../data/servicesData";
// // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // Swiper
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/pagination";

// // // const Services = () => {
// // //   const swiperRef = useRef(null);
// // //   const [isBeginning, setIsBeginning] = useState(true);
// // //   const [isEnd, setIsEnd] = useState(false);

// // //   const handleSlideChange = (swiper) => {
// // //     setIsBeginning(swiper.isBeginning);
// // //     setIsEnd(swiper.isEnd);
// // //   };

// // //   return (
// // //     <section className="relative py-2 lg:py-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // //       {/* Background Decoration */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// // //       </div>

// // //       <Container>
// // //         {/* 🔥 Header Row: Title Left + Nav Buttons Right */}
// // //         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2 lg:mb-6">
// // //           {/* Left Side - Heading */}
// // //           <div className="flex-1">
// // //             <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B2A4A] leading-tight">
// // //               Comprehensive Technology Services
// // //             </h2>
// // //           </div>

// // //           {/* Right Side - Navigation Buttons */}
// // //           <div className="flex items-center gap-3 flex-shrink-0">
// // //             <button
// // //               onClick={() => swiperRef.current?.slidePrev()}
// // //               disabled={isBeginning}
// // //               aria-label="Previous slide"
// // //               className={`w-12 h-12 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // //                 flex items-center justify-center transition-all duration-300
// // //                 hover:bg-white hover:shadow-xl hover:border-[#0B2A4A] hover:text-[#0B2A4A]
// // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // //                 group ${isBeginning ? "border-gray-200 text-[#0B2A4A]" : "border-gray-300 text-gray-700"}`}
// // //             >
// // //               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
// // //             </button>

// // //             <button
// // //               onClick={() => swiperRef.current?.slideNext()}
// // //               disabled={isEnd}
// // //               aria-label="Next slide"
// // //               className={`w-12 h-12 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // //                 flex items-center justify-center transition-all duration-300
// // //                 hover:bg-white hover:shadow-xl hover:border-[#0B2A4A] hover:text-[#0B2A4A]
// // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // //                 group ${isEnd ? "border-gray-200 text-[#0B2A4A]" : "border-gray-300 text-[#0B2A4A]"}`}
// // //             >
// // //               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Slider Container - Full Width */}
// // //         <div className="relative w-full">
// // //           <Swiper
// // //             ref={swiperRef}
// // //             modules={[Navigation, Pagination, Autoplay]}
// // //             spaceBetween={24}
// // //             slidesPerView={1.2}
// // //             loop={true}
// // //             grabCursor={true}
// // //             autoplay={{
// // //               delay: 2000,
// // //               disableOnInteraction: true,
// // //               pauseOnMouseEnter: true,
// // //             }}
// // //             onSlideChange={handleSlideChange}
// // //             onSwiper={(swiper) => {
// // //               swiperRef.current = swiper;
// // //             }}
// // //             breakpoints={{
// // //               640: {
// // //                 slidesPerView: 1.5,
// // //                 spaceBetween: 20,
// // //               },
// // //               768: {
// // //                 slidesPerView: 2.3,
// // //                 spaceBetween: 24,
// // //               },
// // //               1024: {
// // //                 slidesPerView: 3,
// // //                 spaceBetween: 28,
// // //               },
// // //               1280: {
// // //                 slidesPerView: 3.5,
// // //                 spaceBetween: 32,
// // //               },
// // //             }}
// // //             className="w-full !pb-14 services-swiper"
// // //           >
// // //             {servicesData.map((item, index) => (
// // //               <SwiperSlide
// // //                 key={item.id}
// // //                 virtualIndex={index}
// // //                 className="h-auto"
// // //               >
// // //                 <ServiceCard data={item} index={index} />
// // //               </SwiperSlide>
// // //             ))}
// // //           </Swiper>
// // //         </div>
// // //       </Container>

// // //       {/* Custom Styles for Equal Height Cards */}
// // //       <style>{`
// // //         .services-swiper .swiper-slide {
// // //           height: auto;
// // //           display: flex;
// // //           align-items: stretch;
// // //         }

// // //         .services-swiper .swiper-slide > div {
// // //           width: 100%;
// // //           height: 100%;
// // //           display: flex;
// // //           flex-direction: column;
// // //         }

// // //         .services-swiper .swiper-wrapper {
// // //           align-items: stretch !important;
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Services;

// // import React, { useRef } from "react";
// // import Container from "../ui/Container";
// // import ServiceCard from "../ui/ServiceCard";
// // import { servicesData } from "../../data/servicesData";
// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // Swiper
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation } from "swiper/modules";

// // import "swiper/css";
// // import "swiper/css/navigation";

// // const Services = () => {
// //   const swiperRef = useRef(null);

// //   return (
// //     <section className="relative py-4 lg:py-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// //       {/* Background Decoration */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// //       </div>

// //       <Container>
// //         {/* Header */}
// //         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 lg:mb-6">
// //           {/* Title */}
// //           <div className="flex-1">
// //             <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B2A4A] leading-tight">
// //               Comprehensive Technology Services
// //             </h2>
// //           </div>

// //           {/* Navigation Buttons */}
// //           <div className="flex items-center gap-3">
// //             <button
// //               onClick={() => swiperRef.current?.slidePrev()}
// //               aria-label="Previous slide"
// //               className="w-11 h-11 rounded-full border border-gray-300 bg-white shadow-sm
// //               flex items-center justify-center transition-all duration-300
// //               hover:bg-[#0B2A4A] hover:text-white hover:border-[#0B2A4A]"
// //             >
// //               <FaChevronLeft className="text-sm" />
// //             </button>

// //             <button
// //               onClick={() => swiperRef.current?.slideNext()}
// //               aria-label="Next slide"
// //               className="w-11 h-11 rounded-full border border-gray-300 bg-white shadow-sm
// //               flex items-center justify-center transition-all duration-300
// //               hover:bg-[#0B2A4A] hover:text-white hover:border-[#0B2A4A]"
// //             >
// //               <FaChevronRight className="text-sm" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Swiper */}
// //         <Swiper
// //           modules={[Navigation]}
// //           slidesPerView={1}
// //           spaceBetween={20}
// //           speed={700}
// //           rewind={true}
// //           grabCursor={true}
// //           onSwiper={(swiper) => {
// //             swiperRef.current = swiper;
// //           }}
// //           breakpoints={{
// //             640: {
// //               slidesPerView: 1.5,
// //               spaceBetween: 20,
// //             },
// //             768: {
// //               slidesPerView: 2,
// //               spaceBetween: 24,
// //             },
// //             1024: {
// //               slidesPerView: 3,
// //               spaceBetween: 28,
// //             },
// //             1280: {
// //               slidesPerView: 3.5,
// //               spaceBetween: 32,
// //             },
// //           }}
// //           className="services-swiper"
// //         >
// //           {servicesData.map((item, index) => (
// //             <SwiperSlide key={item.id} className="h-auto">
// //               <ServiceCard data={item} index={index} />
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </Container>

// //       {/* Equal Height Cards */}
// //       <style>{`
// //         .services-swiper .swiper-slide {
// //           height: auto;
// //           display: flex;
// //           align-items: stretch;
// //         }

// //         .services-swiper .swiper-slide > div {
// //           width: 100%;
// //           height: 100%;
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         .services-swiper .swiper-wrapper {
// //           align-items: stretch !important;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Services;

// import React, { useRef } from "react";
// import Container from "../ui/Container";
// import ServiceCard from "../ui/ServiceCard";
// import { servicesData } from "../../data/servicesData";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // Swiper
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";

// const Services = () => {
//   const swiperRef = useRef(null);

//   return (
//     <section className="relative py-10 lg:py-14 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
//       </div>

//       <Container>
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h2 className="text-3xl lg:text-5xl font-semibold text-[#0B2A4A] leading-tight">
//               Comprehensive Technology Services
//             </h2>
//           </div>

//           {/* Navigation */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => swiperRef.current?.slidePrev()}
//               className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200
//               flex items-center justify-center transition-all duration-300
//               hover:bg-[#0B2A4A] hover:text-white hover:scale-105"
//             >
//               <FaChevronLeft />
//             </button>

//             <button
//               onClick={() => swiperRef.current?.slideNext()}
//               className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200
//               flex items-center justify-center transition-all duration-300
//               hover:bg-[#0B2A4A] hover:text-white hover:scale-105"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* Swiper */}
//         <Swiper
//           modules={[EffectCoverflow, Navigation]}
//           effect="coverflow"
//           centeredSlides={true}
//           grabCursor={true}
//           slidesPerView={"auto"}
//           speed={800}
//           spaceBetween={30}
//           rewind={true}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 120,
//             modifier: 2,
//             scale: 0.92,
//             slideShadows: false,
//           }}
//           onSwiper={(swiper) => {
//             swiperRef.current = swiper;
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 1.1,
//             },
//             640: {
//               slidesPerView: 1.5,
//             },
//             768: {
//               slidesPerView: 2.2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="services-swiper"
//         >
//           {servicesData.map((item, index) => (
//             <SwiperSlide key={item.id} className="!h-auto max-w-[380px] py-6">
//               <div className="transition-all duration-500">
//                 <ServiceCard data={item} index={index} />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Container>

//       {/* Styles */}
//       <style>{`
//         .services-swiper .swiper-slide {
//           transition: all 0.4s ease;
//           opacity: 0.6;
//           transform: scale(0.9);
//         }

//         .services-swiper .swiper-slide-active {
//           opacity: 1;
//           transform: scale(1);
//         }

//         .services-swiper .swiper-wrapper {
//           align-items: stretch;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Services;

import React, { useRef } from "react";
import Container from "../ui/Container";
import ServiceCard from "../ui/ServiceCard";
import { servicesData } from "../../data/servicesData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const Services = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative py-6 lg:py-12 overflow-hidden bg-[#f8fbff]">
      {/* Background Glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100/40 blur-3xl rounded-full" />
      </div> */}

      <Container>
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#0B2A4A] leading-tight">
              Comprehensive Technology Services
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm
              flex items-center justify-center transition-all duration-300
              hover:bg-[#0B2A4A] hover:border-[#0B2A4A] hover:scale-105"
            >
              <FaArrowLeft className="text-gray-700 group-hover:text-white transition-all duration-300" />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group w-14 h-14 rounded-full bg-[#0B2A4A] shadow-lg
              flex items-center justify-center transition-all duration-300
              hover:scale-105"
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Premium Slider */}
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={900}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={1.1}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2.1,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="services-premium-swiper !overflow-visible"
        >
          {servicesData.map((item, index) => (
            <SwiperSlide key={item.id} className="!h-auto pb-4">
              <div
                className="group relative h-full transition-all duration-500
                hover:-translate-y-3"
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-[30px] bg-gradient-to-br 
                  from-blue-500/10 to-indigo-500/10 blur-xl opacity-0 
                  group-hover:opacity-100 transition-all duration-500"
                />

                {/* Card */}
                <div className="relative h-full">
                  <ServiceCard data={item} index={index} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* Styles */}
      {/* <style>{`
        .services-premium-swiper .swiper-slide {
          opacity: 0.5;
          transform: scale(0.92);
          transition: all 0.5s ease;
        }

        .services-premium-swiper .swiper-slide-active,
        .services-premium-swiper .swiper-slide-next,
        .services-premium-swiper .swiper-slide-prev {
          opacity: 1;
          transform: scale(1);
        }

        .services-premium-swiper .swiper-wrapper {
          align-items: stretch;
        }
      `}</style> */}
    </section>
  );
};

export default Services;
