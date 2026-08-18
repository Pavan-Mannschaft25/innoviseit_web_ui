import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Gold } from "../common/SectionPrimitives";

const CTASection = memo(() => (
  <section className="py-12 relative overflow-hidden bg-white">
    <div className="absolute inset-0 dot-pattern opacity-[0.02]" />
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="reveal max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
          Build the Future <Gold>With Us</Gold>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-5xl mx-auto leading-relaxed">
          Great careers aren't always about finding the perfect opening today.
          We're continuously growing and creating new opportunities across
          engineering, product, design, and business teams. Explore our culture,
          stay connected, and discover where your skills can make a lasting
          impact.
        </p>
        <div className="flex justify-center">
          <Link
            to="/culture/values"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#FFC107] text-black font-semibold hover:bg-[#E6AE00] transition-all duration-300 hover:scale-105"
          >
            Explore Our Culture <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  </section>
));
export default CTASection;
