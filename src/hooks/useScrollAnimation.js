import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * Detects when elements enter viewport and triggers animation states
 *
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visible (0-1) default: 0.1
 * @param {string} options.rootMargin - Margin around root default: '0px'
 * @param {boolean} options.triggerOnce - Only trigger once default: true
 * @returns {Object} { ref, isInView, hasAnimated }
 */
const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;

  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for IntersectionObserver support
    const observerSupport = "IntersectionObserver" in window;
    if (!observerSupport) {
      // Fallback: show immediately if not supported
      setIsInView(true);
      setHasAnimated(true);
      return;
    }

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;

        setIsInView(isVisible);

        if (isVisible && triggerOnce && !hasAnimated) {
          setHasAnimated(true);

          // Unobserve after first trigger if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce && !isVisible) {
          // Allow re-animation when scrolling out
          setHasAnimated(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    // Start observing
    observer.observe(element);

    // Cleanup function
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return { ref, isInView, hasAnimated };
};

export default useScrollAnimation;

// ============================================
// ADDITIONAL EXPORTED HOOKS FOR ADVANCED USAGE
// ============================================

/**
 * Hook for parallax scrolling effects
 * Creates depth effect based on scroll position
 *
 * @param {number} speed - Parallax speed multiplier (0-1) default: 0.5
 * @returns {Object} { ref, offset }
 */
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const distance = scrolled - elementTop;

        setOffset(distance * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
};

/**
 * Hook to detect scroll direction (up/down)
 * Useful for hiding/showing headers on scroll
 *
 * @returns {Object} { scrollDirection, scrollY, isAtTop }
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        Math.abs(currentScrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }

      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY < 50);
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return { scrollDirection, scrollY, isAtTop };
};
