// import React from "react";
// import { motion } from "framer-motion";
// import useScrollAnimation from "../../hooks/useScrollAnimation";

// const AnimatedSection = ({
//   children,
//   delay = 0,
//   className = "",
//   direction = "up",
//   threshold = 0.1,
//   triggerOnce = true,
// }) => {
//   const { ref, hasAnimated } = useScrollAnimation({
//     threshold,
//     triggerOnce,
//   });

//   // Direction-based initial positions
//   const directions = {
//     up: { y: 40, x: 0 },
//     down: { y: -40, x: 0 },
//     left: { y: 0, x: 40 },
//     right: { y: 0, x: -40 },
//     scale: { scale: 0.95, y: 20 },
//     fade: { y: 0, x: 0 },
//   };

//   return (
//     <div ref={ref} className={className}>
//       <motion.div
//         initial={{
//           opacity: 0,
//           ...directions[direction],
//         }}
//         animate={
//           hasAnimated
//             ? {
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//                 scale: 1,
//               }
//             : {}
//         }
//         transition={{
//           duration: 0.7,
//           delay: delay * 0.15,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default AnimatedSection;

import React, { useRef, useEffect } from "react";

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, delay * 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
