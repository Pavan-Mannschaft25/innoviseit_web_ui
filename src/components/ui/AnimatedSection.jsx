import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const { ref, hasAnimated } = useScrollAnimation({
    threshold,
    triggerOnce,
  });

  // Direction-based initial positions
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    scale: { scale: 0.95, y: 20 },
    fade: { y: 0, x: 0 },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          ...directions[direction],
        }}
        animate={
          hasAnimated
            ? {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 0.7,
          delay: delay * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
