import React, { memo } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { BRAND } from "../../constants/careersConstants";
import img1 from "../../assets/leaders/NishantGautam.webp";

const LeaderQuoteSection = memo(() => (
  <section className="py-12 md:py-12 bg-white relative overflow-hidden">
    <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="reveal relative rounded-3xl p-10 md:p-16 overflow-hidden bg-primary-800">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: BRAND.gold.primary,
            filter: "blur(100px)",
            opacity: 0.08,
          }}
        />
        <div className="relative z-10">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
            style={{
              background: `${BRAND.gold.primary}18`,
              border: `1px solid ${BRAND.gold.primary}35`,
            }}
          >
            <FaQuoteLeft
              className="text-2xl"
              style={{ color: BRAND.gold.primary }}
            />
          </div>
          <blockquote>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90 mb-10"
              style={{ letterSpacing: "-0.01em" }}
            >
              "Technology is meaningful only when it creates lasting value for
              people and businesses. At Innovise IT, we combine innovation,
              artificial intelligence, and strategic thinking to deliver
              solutions that empower organizations to grow, transform, and lead
              confidently in the digital era. Our mission is not just to build
              technology—but to build the future."
            </p>
            <div
              className="w-16 h-0.5 mb-8 rounded-full"
              style={{
                background: `linear-gradient(to right, ${BRAND.gold.primary}, transparent)`,
              }}
            />
            <div className="flex items-center gap-5">
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img1})`,
                  boxShadow: `0 0 0 2px ${BRAND.gold.primary}50`,
                }}
              />
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-1"
                  style={{ color: BRAND.gold.primary }}
                >
                  Nishant Gautam
                </p>
                <span className="text-sm text-white/90 font-light">
                  Founder & Chief Executive Officer
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
));
export default LeaderQuoteSection;
