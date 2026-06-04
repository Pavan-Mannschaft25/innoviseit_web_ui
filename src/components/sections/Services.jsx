// // // // // // // // // import React from "react";
// // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // import Container from "../ui/Container";
// // // // // // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // // // // // import AnimatedSection from "../ui/AnimatedSection";
// // // // // // // // // import { ServiceCard } from "../ui/Card";
// // // // // // // // // import Button from "../ui/Button";
// // // // // // // // // import { FaArrowRight } from "react-icons/fa";
// // // // // // // // // import { servicesData } from "../../data/servicesData";

// // // // // // // // // // Map string icon names to actual components
// // // // // // // // // import * as FaIcons from "react-icons/fa";

// // // // // // // // // const iconMap = {
// // // // // // // // //   FaCogs: FaIcons.FaCogs,
// // // // // // // // //   FaTools: FaIcons.FaTools,
// // // // // // // // //   FaCheckCircle: FaIcons.FaCheckCircle,
// // // // // // // // //   FaCloud: FaIcons.FaCloud,
// // // // // // // // //   FaChartLine: FaIcons.FaChartLine,
// // // // // // // // //   FaRocket: FaIcons.FaRocket,
// // // // // // // // // };

// // // // // // // // // const Services = () => {
// // // // // // // // //   // Attach icon components to service data
// // // // // // // // //   const servicesWithIcons = servicesData.map((service) => ({
// // // // // // // // //     ...service,
// // // // // // // // //     icon: iconMap[service.icon] || FaIcons.FaCube,
// // // // // // // // //   }));

// // // // // // // // //   return (
// // // // // // // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // // // // // // //       <Container>
// // // // // // // // //         <SectionHeader
// // // // // // // // //           badge="Our Expertise"
// // // // // // // // //           title="Comprehensive Technology Services"
// // // // // // // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey and drive sustainable business growth"
// // // // // // // // //         />

// // // // // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
// // // // // // // // //           {servicesWithIcons.map((service, index) => (
// // // // // // // // //             <AnimatedSection key={service.id} delay={index}>
// // // // // // // // //               <ServiceCard service={service} />
// // // // // // // // //             </AnimatedSection>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         <AnimatedSection delay={6} className="text-center">
// // // // // // // // //           <Button
// // // // // // // // //             variant="secondary"
// // // // // // // // //             size="lg"
// // // // // // // // //             to="/services"
// // // // // // // // //             icon={FaArrowRight}
// // // // // // // // //             iconPosition="right"
// // // // // // // // //           >
// // // // // // // // //             Explore All Services
// // // // // // // // //           </Button>
// // // // // // // // //         </AnimatedSection>
// // // // // // // // //       </Container>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Services;

// // // // // // // // import React from "react";
// // // // // // // // import Container from "../ui/Container";
// // // // // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // // // // import AnimatedSection from "../ui/AnimatedSection";
// // // // // // // // import StoryCard from "../ui/StoryCard";
// // // // // // // // import { servicesData } from "../../data/servicesData";

// // // // // // // // const Services = () => {
// // // // // // // //   return (
// // // // // // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // // // // // //       <Container>
// // // // // // // //         <SectionHeader
// // // // // // // //           badge="Our Expertise"
// // // // // // // //           title="Comprehensive Technology Services"
// // // // // // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // // // // // // //         />

// // // // // // // //         {/* Cards Grid */}
// // // // // // // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // // // // //           {servicesData.map((item, index) => (
// // // // // // // //             <AnimatedSection key={item.id} delay={index * 0.1}>
// // // // // // // //               <StoryCard data={item} />
// // // // // // // //             </AnimatedSection>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </Container>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Services;

// // // // // // // import React from "react";
// // // // // // // import Container from "../ui/Container";
// // // // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // // // import StoryCard from "../ui/StoryCard";
// // // // // // // import { servicesData } from "../../data/servicesData";

// // // // // // // // Swiper
// // // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // // import { Navigation, Pagination } from "swiper/modules";

// // // // // // // import "swiper/css";
// // // // // // // import "swiper/css/navigation";
// // // // // // // import "swiper/css/pagination";

// // // // // // // const Services = () => {
// // // // // // //   return (
// // // // // // //     <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
// // // // // // //       <Container>
// // // // // // //         <SectionHeader
// // // // // // //           badge="Our Expertise"
// // // // // // //           title="Comprehensive Technology Services"
// // // // // // //           subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // // // // // //         />

// // // // // // //         {/* 🔥 Swiper Slider */}
// // // // // // //         <div className="relative mt-10">
// // // // // // //           <Swiper
// // // // // // //             modules={[Navigation, Pagination]}
// // // // // // //             spaceBetween={20}
// // // // // // //             slidesPerView={1.2}
// // // // // // //             loop={true}
// // // // // // //             navigation={{
// // // // // // //               nextEl: ".custom-next",
// // // // // // //               prevEl: ".custom-prev",
// // // // // // //             }}
// // // // // // //             pagination={{
// // // // // // //               el: ".custom-pagination",
// // // // // // //               type: "fraction",
// // // // // // //             }}
// // // // // // //             breakpoints={{
// // // // // // //               640: { slidesPerView: 1.5 },
// // // // // // //               768: { slidesPerView: 2.2 },
// // // // // // //               1024: { slidesPerView: 3 },
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {servicesData.map((item) => (
// // // // // // //               <SwiperSlide key={item.id}>
// // // // // // //                 <StoryCard data={item} />
// // // // // // //               </SwiperSlide>
// // // // // // //             ))}
// // // // // // //           </Swiper>

// // // // // // //           {/* 🔥 Navigation Buttons */}
// // // // // // //           <div className="absolute top-0 right-0 flex items-center gap-4 z-10">
// // // // // // //             <button className="custom-prev w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
// // // // // // //               ←
// // // // // // //             </button>

// // // // // // //             <button className="custom-next w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
// // // // // // //               →
// // // // // // //             </button>
// // // // // // //           </div>

// // // // // // //           {/* 🔥 Fraction Pagination */}
// // // // // // //           <div className="custom-pagination mt-4 text-sm text-gray-600"></div>
// // // // // // //         </div>
// // // // // // //       </Container>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Services;

// // // // // // import React, { useRef, useState } from "react";
// // // // // // import Container from "../ui/Container";
// // // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // // import ServiceCard from "../ui/ServiceCard";
// // // // // // import { servicesData } from "../../data/servicesData";
// // // // // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // // // // Swiper
// // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // import {
// // // // // //   Navigation,
// // // // // //   Pagination,
// // // // // //   Autoplay,
// // // // // //   EffectCoverflow,
// // // // // // } from "swiper/modules";

// // // // // // import "swiper/css";
// // // // // // import "swiper/css/navigation";
// // // // // // import "swiper/css/pagination";
// // // // // // import "swiper/css/effect-coverflow";

// // // // // // const Services = () => {
// // // // // //   const swiperRef = useRef(null);
// // // // // //   const [isBeginning, setIsBeginning] = useState(true);
// // // // // //   const [isEnd, setIsEnd] = useState(false);

// // // // // //   const handleSlideChange = (swiper) => {
// // // // // //     setIsBeginning(swiper.isBeginning);
// // // // // //     setIsEnd(swiper.isEnd);
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="relative py-20 lg:py-12 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // // // // //       {/* Background Decoration */}
// // // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// // // // // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// // // // // //       </div>

// // // // // //       <Container>
// // // // // //         {/* Header */}
// // // // // //         <SectionHeader
// // // // // //           title="Comprehensive Technology Services"
// // // // // //           // subtitle="End-to-end solutions designed to accelerate your digital transformation journey"
// // // // // //         />

// // // // // //         {/* Slider Container */}
// // // // // //         <div className="relative mt-16 lg:mt-20">
// // // // // //           <Swiper
// // // // // //             ref={swiperRef}
// // // // // //             modules={[Navigation, Pagination, Autoplay]}
// // // // // //             spaceBetween={24}
// // // // // //             slidesPerView={1.2}
// // // // // //             loop={true}
// // // // // //             grabCursor={true}
// // // // // //             autoplay={{
// // // // // //               delay: 4000,
// // // // // //               disableOnInteraction: true,
// // // // // //               pauseOnMouseEnter: true,
// // // // // //             }}
// // // // // //             onSlideChange={handleSlideChange}
// // // // // //             onSwiper={(swiper) => {
// // // // // //               swiperRef.current = swiper;
// // // // // //             }}
// // // // // //             breakpoints={{
// // // // // //               640: {
// // // // // //                 slidesPerView: 1.5,
// // // // // //                 spaceBetween: 20,
// // // // // //               },
// // // // // //               768: {
// // // // // //                 slidesPerView: 2.3,
// // // // // //                 spaceBetween: 24,
// // // // // //               },
// // // // // //               1024: {
// // // // // //                 slidesPerView: 3,
// // // // // //                 spaceBetween: 28,
// // // // // //               },
// // // // // //               1280: {
// // // // // //                 slidesPerView: 3.2,
// // // // // //                 spaceBetween: 32,
// // // // // //               },
// // // // // //             }}
// // // // // //             className="!pb-14"
// // // // // //           >
// // // // // //             {servicesData.map((item, index) => (
// // // // // //               <SwiperSlide key={item.id} virtualIndex={index}>
// // // // // //                 <ServiceCard data={item} index={index} />
// // // // // //               </SwiperSlide>
// // // // // //             ))}
// // // // // //           </Swiper>

// // // // // //           {/* Navigation Controls */}
// // // // // //           <div className="absolute top-0 right-0 flex items-center gap-3 z-10">
// // // // // //             <button
// // // // // //               onClick={() => swiperRef.current?.slidePrev()}
// // // // // //               disabled={isBeginning}
// // // // // //               aria-label="Previous slide"
// // // // // //               className={`w-11 h-11 rounded-full border-2 bg-white/90 backdrop-blur-sm
// // // // // //                 flex items-center justify-center transition-all duration-300
// // // // // //                 hover:bg-white hover:shadow-lg hover:border-primary-500 hover:text-primary-600
// // // // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/90
// // // // // //                 group ${isBeginning ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // // // // //             >
// // // // // //               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={() => swiperRef.current?.slideNext()}
// // // // // //               disabled={isEnd}
// // // // // //               aria-label="Next slide"
// // // // // //               className={`w-11 h-11 rounded-full border-2 bg-white/90 backdrop-blur-sm
// // // // // //                 flex items-center justify-center transition-all duration-300
// // // // // //                 hover:bg-white hover:shadow-lg hover:border-primary-500 hover:text-primary-600
// // // // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/90
// // // // // //                 group ${isEnd ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // // // // //             >
// // // // // //               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Custom Pagination */}
// // // // // //           <div className="flex items-center justify-center gap-4 mt-8">
// // // // // //             <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //               Slide
// // // // // //             </span>
// // // // // //             <div className="custom-pagination text-sm font-semibold text-primary-600 min-w-[3rem] text-center" />
// // // // // //             <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //               of {servicesData.length}
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </Container>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Services;

// // // // // import React, { useRef, useState } from "react";
// // // // // import Container from "../ui/Container";
// // // // // import SectionHeader from "../ui/SectionHeader";
// // // // // import ServiceCard from "../ui/ServiceCard";
// // // // // import { servicesData } from "../../data/servicesData";
// // // // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // // // Swiper
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // // // // import "swiper/css";
// // // // // import "swiper/css/navigation";
// // // // // import "swiper/css/pagination";

// // // // // const Services = () => {
// // // // //   const swiperRef = useRef(null);
// // // // //   const [isBeginning, setIsBeginning] = useState(true);
// // // // //   const [isEnd, setIsEnd] = useState(false);

// // // // //   const handleSlideChange = (swiper) => {
// // // // //     setIsBeginning(swiper.isBeginning);
// // // // //     setIsEnd(swiper.isEnd);
// // // // //   };

// // // // //   return (
// // // // //     <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // // // //       {/* Background Decoration */}
// // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// // // // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// // // // //       </div>

// // // // //       <Container>
// // // // //         {/* Header */}
// // // // //         <SectionHeader title="Comprehensive Technology Services" />

// // // // //         {/* Slider Container - Full Width */}
// // // // //         <div className="relative mt-12 lg:mt-16 w-full">
// // // // //           <Swiper
// // // // //             ref={swiperRef}
// // // // //             modules={[Navigation, Pagination, Autoplay]}
// // // // //             spaceBetween={24}
// // // // //             slidesPerView={1.2}
// // // // //             loop={true}
// // // // //             grabCursor={true}
// // // // //             autoplay={{
// // // // //               delay: 4000,
// // // // //               disableOnInteraction: true,
// // // // //               pauseOnMouseEnter: true,
// // // // //             }}
// // // // //             onSlideChange={handleSlideChange}
// // // // //             onSwiper={(swiper) => {
// // // // //               swiperRef.current = swiper;
// // // // //             }}
// // // // //             breakpoints={{
// // // // //               640: {
// // // // //                 slidesPerView: 1.5,
// // // // //                 spaceBetween: 20,
// // // // //               },
// // // // //               768: {
// // // // //                 slidesPerView: 2.3,
// // // // //                 spaceBetween: 24,
// // // // //               },
// // // // //               1024: {
// // // // //                 slidesPerView: 3,
// // // // //                 spaceBetween: 28,
// // // // //               },
// // // // //               1280: {
// // // // //                 slidesPerView: 3.5,
// // // // //                 spaceBetween: 32,
// // // // //               },
// // // // //             }}
// // // // //             className="w-full !pb-14 services-swiper"
// // // // //           >
// // // // //             {servicesData.map((item, index) => (
// // // // //               <SwiperSlide
// // // // //                 key={item.id}
// // // // //                 virtualIndex={index}
// // // // //                 className="h-auto"
// // // // //               >
// // // // //                 <ServiceCard data={item} index={index} />
// // // // //               </SwiperSlide>
// // // // //             ))}
// // // // //           </Swiper>

// // // // //           {/* Navigation Controls - Top Right Aligned */}
// // // // //           <div className="absolute top-0 right-0 flex items-center gap-3 z-10 -mt-1">
// // // // //             <button
// // // // //               onClick={() => swiperRef.current?.slidePrev()}
// // // // //               disabled={isBeginning}
// // // // //               aria-label="Previous slide"
// // // // //               className={`w-11 h-11 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // // // //                 flex items-center justify-center transition-all duration-300
// // // // //                 hover:bg-white hover:shadow-xl hover:border-primary-500 hover:text-primary-600
// // // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // // // //                 group ${isBeginning ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // // // //             >
// // // // //               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => swiperRef.current?.slideNext()}
// // // // //               disabled={isEnd}
// // // // //               aria-label="Next slide"
// // // // //               className={`w-11 h-11 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // // // //                 flex items-center justify-center transition-all duration-300
// // // // //                 hover:bg-white hover:shadow-xl hover:border-primary-500 hover:text-primary-600
// // // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // // // //                 group ${isEnd ? "border-gray-200 text-gray-400" : "border-gray-300 text-gray-700"}`}
// // // // //             >
// // // // //               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </Container>

// // // // //       {/* Custom Styles for Equal Height Cards */}
// // // // //       <style>{`
// // // // //         .services-swiper .swiper-slide {
// // // // //           height: auto;
// // // // //           display: flex;
// // // // //           align-items: stretch;
// // // // //         }

// // // // //         .services-swiper .swiper-slide > div {
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //         }

// // // // //         /* Ensure all cards stretch to same height */
// // // // //         .services-swiper .swiper-wrapper {
// // // // //           align-items: stretch !important;
// // // // //         }
// // // // //       `}</style>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Services;

// // // // // import React, { useRef, useState } from "react";
// // // // // import Container from "../ui/Container";
// // // // // import ServiceCard from "../ui/ServiceCard";
// // // // // import { servicesData } from "../../data/servicesData";
// // // // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // // // Swiper
// // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // // // // import "swiper/css";
// // // // // import "swiper/css/navigation";
// // // // // import "swiper/css/pagination";

// // // // // const Services = () => {
// // // // //   const swiperRef = useRef(null);
// // // // //   const [isBeginning, setIsBeginning] = useState(true);
// // // // //   const [isEnd, setIsEnd] = useState(false);

// // // // //   const handleSlideChange = (swiper) => {
// // // // //     setIsBeginning(swiper.isBeginning);
// // // // //     setIsEnd(swiper.isEnd);
// // // // //   };

// // // // //   return (
// // // // //     <section className="relative py-2 lg:py-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // // // //       {/* Background Decoration */}
// // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// // // // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// // // // //       </div>

// // // // //       <Container>
// // // // //         {/* 🔥 Header Row: Title Left + Nav Buttons Right */}
// // // // //         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2 lg:mb-6">
// // // // //           {/* Left Side - Heading */}
// // // // //           <div className="flex-1">
// // // // //             <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B2A4A] leading-tight">
// // // // //               Comprehensive Technology Services
// // // // //             </h2>
// // // // //           </div>

// // // // //           {/* Right Side - Navigation Buttons */}
// // // // //           <div className="flex items-center gap-3 flex-shrink-0">
// // // // //             <button
// // // // //               onClick={() => swiperRef.current?.slidePrev()}
// // // // //               disabled={isBeginning}
// // // // //               aria-label="Previous slide"
// // // // //               className={`w-12 h-12 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // // // //                 flex items-center justify-center transition-all duration-300
// // // // //                 hover:bg-white hover:shadow-xl hover:border-[#0B2A4A] hover:text-[#0B2A4A]
// // // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // // // //                 group ${isBeginning ? "border-gray-200 text-[#0B2A4A]" : "border-gray-300 text-gray-700"}`}
// // // // //             >
// // // // //               <FaChevronLeft className="text-sm transition-transform group-hover:-translate-x-0.5" />
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => swiperRef.current?.slideNext()}
// // // // //               disabled={isEnd}
// // // // //               aria-label="Next slide"
// // // // //               className={`w-12 h-12 rounded-full border-2 bg-white/95 backdrop-blur-sm shadow-md
// // // // //                 flex items-center justify-center transition-all duration-300
// // // // //                 hover:bg-white hover:shadow-xl hover:border-[#0B2A4A] hover:text-[#0B2A4A]
// // // // //                 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/95
// // // // //                 group ${isEnd ? "border-gray-200 text-[#0B2A4A]" : "border-gray-300 text-[#0B2A4A]"}`}
// // // // //             >
// // // // //               <FaChevronRight className="text-sm transition-transform group-hover:translate-x-0.5" />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Slider Container - Full Width */}
// // // // //         <div className="relative w-full">
// // // // //           <Swiper
// // // // //             ref={swiperRef}
// // // // //             modules={[Navigation, Pagination, Autoplay]}
// // // // //             spaceBetween={24}
// // // // //             slidesPerView={1.2}
// // // // //             loop={true}
// // // // //             grabCursor={true}
// // // // //             autoplay={{
// // // // //               delay: 2000,
// // // // //               disableOnInteraction: true,
// // // // //               pauseOnMouseEnter: true,
// // // // //             }}
// // // // //             onSlideChange={handleSlideChange}
// // // // //             onSwiper={(swiper) => {
// // // // //               swiperRef.current = swiper;
// // // // //             }}
// // // // //             breakpoints={{
// // // // //               640: {
// // // // //                 slidesPerView: 1.5,
// // // // //                 spaceBetween: 20,
// // // // //               },
// // // // //               768: {
// // // // //                 slidesPerView: 2.3,
// // // // //                 spaceBetween: 24,
// // // // //               },
// // // // //               1024: {
// // // // //                 slidesPerView: 3,
// // // // //                 spaceBetween: 28,
// // // // //               },
// // // // //               1280: {
// // // // //                 slidesPerView: 3.5,
// // // // //                 spaceBetween: 32,
// // // // //               },
// // // // //             }}
// // // // //             className="w-full !pb-14 services-swiper"
// // // // //           >
// // // // //             {servicesData.map((item, index) => (
// // // // //               <SwiperSlide
// // // // //                 key={item.id}
// // // // //                 virtualIndex={index}
// // // // //                 className="h-auto"
// // // // //               >
// // // // //                 <ServiceCard data={item} index={index} />
// // // // //               </SwiperSlide>
// // // // //             ))}
// // // // //           </Swiper>
// // // // //         </div>
// // // // //       </Container>

// // // // //       {/* Custom Styles for Equal Height Cards */}
// // // // //       <style>{`
// // // // //         .services-swiper .swiper-slide {
// // // // //           height: auto;
// // // // //           display: flex;
// // // // //           align-items: stretch;
// // // // //         }

// // // // //         .services-swiper .swiper-slide > div {
// // // // //           width: 100%;
// // // // //           height: 100%;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //         }

// // // // //         .services-swiper .swiper-wrapper {
// // // // //           align-items: stretch !important;
// // // // //         }
// // // // //       `}</style>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Services;

// // // // import React, { useRef } from "react";
// // // // import Container from "../ui/Container";
// // // // import ServiceCard from "../ui/ServiceCard";
// // // // import { servicesData } from "../../data/servicesData";
// // // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // // Swiper
// // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // import { Navigation } from "swiper/modules";

// // // // import "swiper/css";
// // // // import "swiper/css/navigation";

// // // // const Services = () => {
// // // //   const swiperRef = useRef(null);

// // // //   return (
// // // //     <section className="relative py-4 lg:py-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // // //       {/* Background Decoration */}
// // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
// // // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl" />
// // // //       </div>

// // // //       <Container>
// // // //         {/* Header */}
// // // //         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 lg:mb-6">
// // // //           {/* Title */}
// // // //           <div className="flex-1">
// // // //             <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B2A4A] leading-tight">
// // // //               Comprehensive Technology Services
// // // //             </h2>
// // // //           </div>

// // // //           {/* Navigation Buttons */}
// // // //           <div className="flex items-center gap-3">
// // // //             <button
// // // //               onClick={() => swiperRef.current?.slidePrev()}
// // // //               aria-label="Previous slide"
// // // //               className="w-11 h-11 rounded-full border border-gray-300 bg-white shadow-sm
// // // //               flex items-center justify-center transition-all duration-300
// // // //               hover:bg-[#0B2A4A] hover:text-white hover:border-[#0B2A4A]"
// // // //             >
// // // //               <FaChevronLeft className="text-sm" />
// // // //             </button>

// // // //             <button
// // // //               onClick={() => swiperRef.current?.slideNext()}
// // // //               aria-label="Next slide"
// // // //               className="w-11 h-11 rounded-full border border-gray-300 bg-white shadow-sm
// // // //               flex items-center justify-center transition-all duration-300
// // // //               hover:bg-[#0B2A4A] hover:text-white hover:border-[#0B2A4A]"
// // // //             >
// // // //               <FaChevronRight className="text-sm" />
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Swiper */}
// // // //         <Swiper
// // // //           modules={[Navigation]}
// // // //           slidesPerView={1}
// // // //           spaceBetween={20}
// // // //           speed={700}
// // // //           rewind={true}
// // // //           grabCursor={true}
// // // //           onSwiper={(swiper) => {
// // // //             swiperRef.current = swiper;
// // // //           }}
// // // //           breakpoints={{
// // // //             640: {
// // // //               slidesPerView: 1.5,
// // // //               spaceBetween: 20,
// // // //             },
// // // //             768: {
// // // //               slidesPerView: 2,
// // // //               spaceBetween: 24,
// // // //             },
// // // //             1024: {
// // // //               slidesPerView: 3,
// // // //               spaceBetween: 28,
// // // //             },
// // // //             1280: {
// // // //               slidesPerView: 3.5,
// // // //               spaceBetween: 32,
// // // //             },
// // // //           }}
// // // //           className="services-swiper"
// // // //         >
// // // //           {servicesData.map((item, index) => (
// // // //             <SwiperSlide key={item.id} className="h-auto">
// // // //               <ServiceCard data={item} index={index} />
// // // //             </SwiperSlide>
// // // //           ))}
// // // //         </Swiper>
// // // //       </Container>

// // // //       {/* Equal Height Cards */}
// // // //       <style>{`
// // // //         .services-swiper .swiper-slide {
// // // //           height: auto;
// // // //           display: flex;
// // // //           align-items: stretch;
// // // //         }

// // // //         .services-swiper .swiper-slide > div {
// // // //           width: 100%;
// // // //           height: 100%;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //         }

// // // //         .services-swiper .swiper-wrapper {
// // // //           align-items: stretch !important;
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Services;

// // // import React, { useRef } from "react";
// // // import Container from "../ui/Container";
// // // import ServiceCard from "../ui/ServiceCard";
// // // import { servicesData } from "../../data/servicesData";
// // // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// // // // Swiper
// // // import { Swiper, SwiperSlide } from "swiper/react";
// // // import { EffectCoverflow, Navigation } from "swiper/modules";

// // // import "swiper/css";
// // // import "swiper/css/navigation";
// // // import "swiper/css/effect-coverflow";

// // // const Services = () => {
// // //   const swiperRef = useRef(null);

// // //   return (
// // //     <section className="relative py-10 lg:py-14 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
// // //       {/* Background */}
// // //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //         <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
// // //         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
// // //       </div>

// // //       <Container>
// // //         {/* Header */}
// // //         <div className="flex items-center justify-between mb-10">
// // //           <div>
// // //             <h2 className="text-3xl lg:text-5xl font-semibold text-[#0B2A4A] leading-tight">
// // //               Comprehensive Technology Services
// // //             </h2>
// // //           </div>

// // //           {/* Navigation */}
// // //           <div className="flex items-center gap-3">
// // //             <button
// // //               onClick={() => swiperRef.current?.slidePrev()}
// // //               className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200
// // //               flex items-center justify-center transition-all duration-300
// // //               hover:bg-[#0B2A4A] hover:text-white hover:scale-105"
// // //             >
// // //               <FaChevronLeft />
// // //             </button>

// // //             <button
// // //               onClick={() => swiperRef.current?.slideNext()}
// // //               className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200
// // //               flex items-center justify-center transition-all duration-300
// // //               hover:bg-[#0B2A4A] hover:text-white hover:scale-105"
// // //             >
// // //               <FaChevronRight />
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Swiper */}
// // //         <Swiper
// // //           modules={[EffectCoverflow, Navigation]}
// // //           effect="coverflow"
// // //           centeredSlides={true}
// // //           grabCursor={true}
// // //           slidesPerView={"auto"}
// // //           speed={800}
// // //           spaceBetween={30}
// // //           rewind={true}
// // //           coverflowEffect={{
// // //             rotate: 0,
// // //             stretch: 0,
// // //             depth: 120,
// // //             modifier: 2,
// // //             scale: 0.92,
// // //             slideShadows: false,
// // //           }}
// // //           onSwiper={(swiper) => {
// // //             swiperRef.current = swiper;
// // //           }}
// // //           breakpoints={{
// // //             320: {
// // //               slidesPerView: 1.1,
// // //             },
// // //             640: {
// // //               slidesPerView: 1.5,
// // //             },
// // //             768: {
// // //               slidesPerView: 2.2,
// // //             },
// // //             1024: {
// // //               slidesPerView: 3,
// // //             },
// // //           }}
// // //           className="services-swiper"
// // //         >
// // //           {servicesData.map((item, index) => (
// // //             <SwiperSlide key={item.id} className="!h-auto max-w-[380px] py-6">
// // //               <div className="transition-all duration-500">
// // //                 <ServiceCard data={item} index={index} />
// // //               </div>
// // //             </SwiperSlide>
// // //           ))}
// // //         </Swiper>
// // //       </Container>

// // //       {/* Styles */}
// // //       <style>{`
// // //         .services-swiper .swiper-slide {
// // //           transition: all 0.4s ease;
// // //           opacity: 0.6;
// // //           transform: scale(0.9);
// // //         }

// // //         .services-swiper .swiper-slide-active {
// // //           opacity: 1;
// // //           transform: scale(1);
// // //         }

// // //         .services-swiper .swiper-wrapper {
// // //           align-items: stretch;
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default Services;

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
          {/* <div className="flex items-center gap-4">
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
          </div> */}
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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Container from "../ui/Container";
// import {
//   FaArrowRight,
//   FaProjectDiagram,
//   FaTools,
//   FaCheckCircle,
//   FaDatabase,
//   FaChevronRight,
// } from "react-icons/fa";

// const Services = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   const servicesData = [
//     {
//       id: 1,
//       number: "01",
//       icon: FaProjectDiagram,
//       tag: "Project Services",
//       title: "Project Support & Remediation",
//       description:
//         "Assessment, implementation, recovery, and optimization for successful SAP projects with proven methodologies.",
//       link: "/services/project-support",
//       features: ["Recovery", "Optimization", "Consulting"],
//     },
//     {
//       id: 2,
//       number: "02",
//       icon: FaTools,
//       tag: "AMS",
//       title: "Application Maintenance Services",
//       description:
//         "End-to-end AMS support ensuring stability, performance, and continuous improvement of your SAP landscape.",
//       link: "/services/app-maintenance",
//       features: ["L1-L3 Support", "Monitoring", "Upgrades"],
//     },
//     {
//       id: 3,
//       number: "03",
//       icon: FaCheckCircle,
//       tag: "Quality Assurance",
//       title: "Testing & QA",
//       description:
//         "Comprehensive testing solutions that improve reliability and reduce deployment risks across all modules.",
//       link: "/services/testing-qa",
//       features: ["Automation", "Regression", "Performance"],
//     },
//     {
//       id: 4,
//       number: "04",
//       icon: FaDatabase,
//       tag: "Transformation",
//       title: "Data Migration",
//       description:
//         "Secure migration, landscape transformation, and cloud modernization services for future-ready infrastructure.",
//       link: "/services/data-migration",
//       features: ["S/4HANA", "Cloud", "Validation"],
//     },
//   ];

//   // Brand Colors
//   const colors = {
//     navy: {
//       50: "#f4f8fc",
//       100: "#e6eef7",
//       200: "#c7d8ea",
//       300: "#9db9d5",
//       400: "#6f96bc",
//       500: "#46739f",
//       600: "#2f5c86",
//       700: "#1d4568",
//       800: "#12324f",
//       900: "#0b2a4a",
//     },
//     gold: {
//       50: "#fffbeb",
//       100: "#fef3c7",
//       200: "#fde68a",
//       300: "#fcd34d",
//       400: "#fbbf24",
//       500: "#f59e0b",
//       600: "#d97706",
//     },
//   };

//   return (
//     <section
//       className="relative py-10 lg:py-12 overflow-hidden"
//       style={{ background: "#ffffff" }}
//     >
//       {/* Enhanced Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Dot Grid Pattern */}
//         <svg
//           className="absolute w-full h-full opacity-[0.03]"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <pattern
//               id="dots"
//               x="0"
//               y="0"
//               width="32"
//               height="32"
//               patternUnits="userSpaceOnUse"
//             >
//               <circle cx="2" cy="2" r="1.5" fill={colors.navy[500]} />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dots)" />
//         </svg>

//         {/* Gradient Orbs */}
//         <div
//           className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px]"
//           style={{
//             background: `radial-gradient(circle, ${colors.gold[400]}15 0%, transparent 70%)`,
//           }}
//         />
//         <div
//           className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[130px]"
//           style={{
//             background: `radial-gradient(circle, ${colors.navy[500]}10 0%, transparent 70%)`,
//           }}
//         />

//         {/* Diagonal Lines */}
//         <div
//           className="absolute top-1/4 -left-20 w-[200px] h-[400px] opacity-[0.02] rotate-12"
//           style={{
//             background: `repeating-linear-gradient(45deg, ${colors.navy[900]}, ${colors.navy[900]} 1px, transparent 1px, transparent 16px)`,
//           }}
//         />
//       </div>

//       <Container>
//         {/* Header Section */}
//         <div className="relative z-10 mb-14 lg:mb-18">
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
//             <div className="max-w-4xl">
//               {/* Badge */}
//               {/* <div
//                 className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
//                 style={{
//                   background: `linear-gradient(135deg, ${colors.gold[50]} 0%, ${colors.gold[100]} 100%)`,
//                   border: `1px solid ${colors.gold[200]}`,
//                   color: colors.gold[700],
//                   boxShadow: `0 4px 16px rgba(245,158,11,0.08)`,
//                 }}
//               >
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]"></span>
//                 </span>
//                 SAP Excellence Suite
//               </div> */}

//               <h2
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
//                 style={{
//                   color: colors.navy[900],
//                   fontFamily: "'Space Grotesk', sans-serif",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 Transforming{" "}
//                 <span className="relative inline-block">
//                   Businesses
//                   <svg
//                     className="absolute -bottom-2 left-0 w-full"
//                     viewBox="0 0 200 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M2 8C30 2 170 2 198 8"
//                       stroke={colors.gold[400]}
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>{" "}
//                 Through Innovation
//               </h2>

//               <p
//                 className="text-lg leading-relaxed max-w-xl pl-2"
//                 style={{ color: colors.navy[600], opacity: 0.7 }}
//               >
//                 Enterprise-grade SAP consulting, support, and digital
//                 transformation trusted by global organizations.
//               </p>
//             </div>

//             {/* Stats Card */}
//             <div
//               className="hidden lg:flex flex-col items-center justify-center p-4 rounded-3xl backdrop-blur-sm self-end"
//               style={{
//                 background: `linear-gradient(135deg, ${colors.navy[800]} 0%, ${colors.navy[900]} 100%)`,
//                 border: `1px solid rgba(255,255,255,0.08)`,
//                 boxShadow: `0 20px 60px rgba(11,42,74,0.25)`,
//               }}
//             >
//               <div className="text-center">
//                 <div
//                   className="text-3xl font-black mb-1"
//                   style={{
//                     color: colors.gold[400],
//                     fontFamily: "'Space Grotesk', sans-serif",
//                     textShadow: `0 0 40px rgba(245,187,36,0.3)`,
//                   }}
//                 >
//                   04
//                 </div>
//                 <div
//                   className="text-xs font-semibold uppercase tracking-[0.15em]"
//                   style={{ color: colors.navy[300] }}
//                 >
//                   Core Services
//                 </div>
//               </div>

//               {/* Decorative dots */}
//               <div className="flex gap-1.5 mt-4">
//                 {[...Array(4)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="w-1.5 h-1.5 rounded-full"
//                     style={{
//                       background:
//                         i === 0 ? colors.gold[500] : "rgba(255,255,255,0.2)",
//                       boxShadow:
//                         i === 0 ? `0 0 8px ${colors.gold[500]}` : "none",
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto relative z-10">
//           {servicesData.map((service) => {
//             const Icon = service.icon;
//             const isHovered = hoveredId === service.id;

//             return (
//               <Link
//                 key={service.id}
//                 to={service.link}
//                 onMouseEnter={() => setHoveredId(service.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//                 className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 rounded-3xl"
//                 style={{
//                   "--tw-ring-color": colors.gold[500],
//                   textDecoration: "none",
//                 }}
//               >
//                 <div
//                   className="relative rounded-3xl overflow-hidden transition-all duration-500 ease-out"
//                   style={{
//                     background: isHovered ? "#ffffff" : "#ffffff",
//                     border: `1.5px solid ${isHovered ? colors.gold[300] : colors.navy[100]}`,
//                     boxShadow: isHovered
//                       ? `0 30px 70px rgba(11,42,74,0.12), 0 0 0 1px rgba(245,158,11,0.08), inset 0 1px 0 rgba(255,255,255,0.5)`
//                       : `0 8px 24px rgba(11,42,74,0.05), inset 0 1px 0 rgba(255,255,255,0.8)`,
//                     transform: isHovered ? "translateY(-8px)" : "translateY(0)",
//                   }}
//                 >
//                   {/* Top Gradient Bar */}
//                   {/* <div
//                     className="h-1.5 origin-left transition-transform duration-500 ease-out"
//                     style={{
//                       background: `linear-gradient(90deg, ${colors.navy[800]} 0%, ${colors.navy[600]} 40%, ${colors.gold[500]} 80%, ${colors.gold[400]} 100%)`,
//                       transform: isHovered ? "scaleX(1)" : "scaleX(0)",
//                     }}
//                   /> */}

//                   <div className="p-7 lg:p-8 relative">
//                     {/* Number Badge - Absolute positioned */}
//                     {/* <div
//                       className="absolute top-6 right-6 text-7xl font-black leading-none select-none transition-all duration-500"
//                       style={{
//                         color: isHovered ? colors.navy[100] : colors.navy[50],
//                         fontFamily: "'Space Grotesk', sans-serif",
//                         transform: isHovered ? "scale(1.05)" : "scale(1)",
//                         transitionDelay: "0ms",
//                       }}
//                     >
//                       {service.number}
//                     </div> */}

//                     {/* Content Wrapper */}
//                     <div
//                       className={`relative z-10 transition-all duration-400 ${isHovered ? "translate-x-1" : ""}`}
//                     >
//                       {/* Icon & Tag Row */}
//                       <div className="flex items-start justify-between mb-5">
//                         <div
//                           className="flex items-center justify-center text-white relative overflow-hidden group/icon"
//                           style={{
//                             width: "52px",
//                             height: "52px",
//                             borderRadius: "16px",
//                             background: `linear-gradient(135deg, ${colors.navy[700]} 0%, ${colors.navy[900]} 100%)`,
//                             boxShadow: `0 8px 24px rgba(11,42,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
//                             transition:
//                               "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                           }}
//                           onMouseEnter={(e) => {
//                             e.currentTarget.style.transform =
//                               "scale(1.1) rotate(-5deg)";
//                             e.currentTarget.style.boxShadow = `0 12px 32px rgba(11,42,74,0.35)`;
//                           }}
//                           onMouseLeave={(e) => {
//                             e.currentTarget.style.transform =
//                               "scale(1) rotate(0deg)";
//                             e.currentTarget.style.boxShadow = `0 8px 24px rgba(11,42,74,0.2)`;
//                           }}
//                         >
//                           <Icon
//                             size={22}
//                             strokeWidth={1.5}
//                             className="relative z-10"
//                           />

//                           {/* Shine effect */}
//                           <div
//                             className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500"
//                             style={{ transform: "skewX(-15deg)" }}
//                           />
//                         </div>

//                         <span
//                           className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-lg border"
//                           style={{
//                             color: isHovered
//                               ? colors.gold[700]
//                               : colors.navy[500],
//                             background: isHovered
//                               ? `${colors.gold[50]}`
//                               : `${colors.navy[50]}`,
//                             borderColor: isHovered
//                               ? colors.gold[200]
//                               : colors.navy[200],
//                             transition: "all 0.3s ease",
//                           }}
//                         >
//                           {service.tag}
//                         </span>
//                       </div>

//                       {/* Title */}
//                       <h3
//                         className="text-xl lg:text-2xl font-bold mb-3 leading-tight transition-colors duration-300"
//                         style={{
//                           color: colors.navy[900],
//                           fontFamily: "'Space Grotesk', sans-serif",
//                           letterSpacing: "-0.01em",
//                         }}
//                       >
//                         {service.title}
//                       </h3>

//                       {/* Description */}
//                       <p
//                         className="text-sm leading-relaxed mb-5 transition-all duration-300"
//                         style={{
//                           color: colors.navy[600],
//                           opacity: isHovered ? 0.85 : 0.65,
//                           lineHeight: 1.7,
//                         }}
//                       >
//                         {service.description}
//                       </p>

//                       {/* Feature Tags */}
//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {service.features.map((feature, idx) => (
//                           <span
//                             key={idx}
//                             className="text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-colors duration-300"
//                             style={{
//                               color: isHovered
//                                 ? colors.navy[700]
//                                 : colors.navy[500],
//                               background: `${colors.navy[50]}`,
//                               border: `1px solid ${isHovered ? colors.navy[200] : colors.navy[100]}`,
//                             }}
//                           >
//                             <FaCheckCircle
//                               size={8}
//                               style={{
//                                 color: isHovered
//                                   ? colors.gold[500]
//                                   : colors.navy[300],
//                               }}
//                             />
//                             {feature}
//                           </span>
//                         ))}
//                       </div>

//                       {/* CTA Footer */}
//                       <div
//                         className="pt-5 border-t flex items-center justify-between group/btn"
//                         style={{
//                           borderColor: isHovered
//                             ? colors.gold[200]
//                             : colors.navy[100],
//                           transition: "border-color 0.3s ease",
//                         }}
//                       >
//                         <span
//                           className="text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2"
//                           style={{
//                             color: isHovered
//                               ? colors.gold[700]
//                               : colors.navy[800],
//                             transform: isHovered
//                               ? "translateX(4px)"
//                               : "translateX(0)",
//                           }}
//                         >
//                           Explore Service
//                           <FaChevronRight
//                             size={10}
//                             className="transition-transform duration-300"
//                             style={{
//                               transform: isHovered
//                                 ? "translateX(4px)"
//                                 : "translateX(0)",
//                             }}
//                           />
//                         </span>

//                         <div
//                           className="flex items-center justify-center transition-all duration-400 ease-out"
//                           style={{
//                             width: "40px",
//                             height: "40px",
//                             borderRadius: "13px",
//                             background: isHovered
//                               ? `linear-gradient(135deg, ${colors.gold[500]} 0%, ${colors.gold[600]} 100%)`
//                               : `${colors.navy[50]}`,
//                             border: `1.5px solid ${isHovered ? "transparent" : colors.navy[200]}`,
//                             transform: isHovered
//                               ? "translateX(4px) scale(1.05)"
//                               : "translateX(0) scale(1)",
//                             boxShadow: isHovered
//                               ? `0 6px 20px rgba(245,158,11,0.35)`
//                               : `none`,
//                           }}
//                         >
//                           <FaArrowRight
//                             size={14}
//                             className="transition-all duration-300"
//                             style={{
//                               color: isHovered ? "#ffffff" : colors.navy[500],
//                               transform: isHovered
//                                 ? "translateX(2px)"
//                                 : "translateX(0)",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Corner Decoration on Hover */}
//                   {isHovered && (
//                     <>
//                       <div
//                         className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none"
//                         style={{
//                           background: `radial-gradient(circle at top right, ${colors.gold[400]}, transparent 70%)`,
//                         }}
//                       />
//                       <div
//                         className="absolute bottom-0 left-0 w-32 h-32 opacity-5 pointer-events-none"
//                         style={{
//                           background: `radial-gradient(circle at bottom left, ${colors.navy[900]}, transparent 70%)`,
//                         }}
//                       />
//                     </>
//                   )}
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </Container>

//       <style>{`
//         @keyframes ping {
//           75%, 100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Services;
