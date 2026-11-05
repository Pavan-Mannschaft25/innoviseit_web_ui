import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

/*
  Shared "Our Approach" section used on every service page.
  Dark version: navy background, aqua label and number badges, white text.

                 OUR APPROACH
         Digital Transformation Journey
     A proven, structured approach to ...

    (●)1 ────── (●)2 ────── (●)3 ────── (●)4
   Discover    Strategy     Design      Build
   Short text  Short text   Short text  Short text

  steps: [{ icon, title, desc, subtitle? }]  (3 to 6 steps)
*/

// Full class names so Tailwind keeps them in the build
const lgCols = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

const ApproachSteps = ({
  id = "approach",
  eyebrow = "Our Approach",
  title,
  text,
  steps = [],
}) => (
  <section id={id} className="scroll-mt-24 bg-primary-900 py-10 lg:py-14">
    <Container>
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mx-auto mb-10 max-w-3xl text-center lg:mb-12"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-400">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-white lg:text-4xl">{title}</h2>
        {text && <p className="mt-4 text-lg text-white/75">{text}</p>}
      </motion.header>

      <ol
        className={`grid gap-8 sm:grid-cols-2 ${lgCols[steps.length] || "lg:grid-cols-4"}`}
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="relative text-center"
          >
            {/* line to the next step (large screens) */}
            {i < steps.length - 1 && (
              <span
                className="absolute left-1/2 top-8 hidden h-px w-full bg-white/20 lg:block"
                aria-hidden="true"
              />
            )}

            {/* icon circle with step number */}
            <span className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-accent-400/40 bg-primary-800 text-xl text-white">
              {s.icon && <s.icon aria-hidden="true" />}
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-primary-900">
                {i + 1}
              </span>
            </span>

            {s.subtitle && (
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent-400">
                {s.subtitle}
              </p>
            )}
            <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mx-auto max-w-[240px] text-base text-white/70">
              {s.desc}
            </p>
          </motion.li>
        ))}
      </ol>
    </Container>
  </section>
);

export default ApproachSteps;
