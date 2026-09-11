import React, { memo } from "react";
import { PROCESS_STEPS, BRAND } from "../../constants/careersConstants";
import { SectionTitle, Gold } from "../common/SectionPrimitives";

const ProcessStep = memo(({ step, isLast }) => (
  <div className="reveal text-center relative">
    {!isLast && <div className="hidden lg:block step-connector" />}
    <div
      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 text-lg font-bold"
      style={{
        background: "linear-gradient(135deg, #FDB913, #FFD54F)",
        color: BRAND.navy.dark,
      }}
    >
      {step.num}
    </div>
    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
  </div>
));

const HiringProcessSection = memo(() => (
  <section className="py-12 relative overflow-hidden bg-primary-800">
    <div className="absolute inset-0 dot-pattern opacity-[0.025]" />
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <SectionTitle light>
          Our Hiring <Gold>Process</Gold>
        </SectionTitle>
        <p className="reveal text-lg text-gray-400">
          A streamlined 5-step journey from application to onboarding.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 stagger-children">
        {PROCESS_STEPS.map((s, i) => (
          <ProcessStep
            key={s.num}
            step={s}
            isLast={i === PROCESS_STEPS.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
));
export default HiringProcessSection;
