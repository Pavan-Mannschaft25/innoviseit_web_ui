import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

// Sample leader data
const leaders = [
  {
    id: 1,
    name: "Nishant Gautam",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Visionary leader with 20+ years in tech innovation",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "Robert Marchand",
    role: "COO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Operations expert driving organizational excellence",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Rodrigo Recio",
    role: "Director Testing Services",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Quality assurance pioneer with global experience",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 4,
    name: "Jason Mitchell",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Technology architect shaping digital futures",
    linkedin: "#",
    twitter: "#",
  },
];

const LeadershipTeam = () => {
  return (
    <section className="relative py-6 lg:py-10 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1e3a5f 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 2 ? "bg-blue-900 scale-125" : "bg-blue-300"}`}
                />
              ))}
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-900">
              Innovise Executive
            </span>
            <span className="w-10 h-10 rounded-full border-2 border-blue-200 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-900" />
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-blue-950 tracking-tight mb-4">
            Leadership Team
          </h2>

          {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 mx-auto rounded-full" /> */}
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Top Section - Navy Blue with Photo */}
                <div className="relative pt-12 pb-24 px-6 bg-gradient-to-b from-[#0d2847] via-[#143a63] to-[#1a4570]">
                  {/* Decorative Circle Border */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-36 sm:h-36">
                    {/* Outer rotating ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-dashed border-white/30"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Solid white arc (top) */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M 10,50 A 40,40 0 0,1 90,50"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      {/* Purple dots on ends */}
                      <circle cx="10" cy="50" r="4" fill="#7c3aed" />
                      <circle cx="90" cy="50" r="4" fill="#7c3aed" />
                    </svg>

                    {/* Photo Container */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Decorative dots pattern */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  </div>
                </div>

                {/* Orange Chevron Divider */}
                <div className="relative h-8 bg-gradient-to-b from-[#1a4570] overflow-hidden">
                  <svg
                    className="absolute w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 400 32"
                  >
                    <path
                      d="M0,0 L150,28 L200,16 L250,28 L400,0 L400,32 L0,32 Z"
                      fill="#dc2626"
                    />
                    <path
                      d="M0,0 L160,26 L200,14 L240,26 L400,0"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Bottom Section - Dark Purple/Maroon */}
                <div className="relative px-6 py-8 bg-gradient-to-b from-[#4a1942] to-[#2d1130] text-center">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {leader.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-purple-200 font-medium mb-4">
                    {leader.role}
                  </p>

                  {/* Social Links - Appear on Hover */}
                  <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {[
                      {
                        icon: FaLinkedinIn,
                        href: leader.linkedin,
                        color: "hover:bg-blue-600",
                      },
                      {
                        icon: FaTwitter,
                        href: leader.twitter,
                        color: "hover:bg-sky-500",
                      },
                      {
                        icon: FaEnvelope,
                        href: `mailto:${leader.email}`,
                        color: "hover:bg-red-500",
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ${social.color} hover:text-white transition-all duration-300`}
                        aria-label={`${social.icon.name} profile`}
                      >
                        <social.icon className="text-xs text-white" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
