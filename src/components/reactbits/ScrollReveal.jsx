import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.4,
  yOffset = 18,
  xOffset = 0,
  scale = 1,
  once = true,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px 100px 0px", amount: "some" });
  const [forceVisible, setForceVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Accessibility: check reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Safety fallback: ensure content is revealed even if IntersectionObserver is delayed
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const isVisible = isInView || forceVisible;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset, scale }}
      animate={isVisible ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y: yOffset, x: xOffset, scale }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
