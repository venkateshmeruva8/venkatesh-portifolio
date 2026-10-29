import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  xOffset = 0,
  scale = 0.98,
  rotateX = 6,
  once = true,
  style = {},
  ...props
}) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const hasIO = typeof window !== 'undefined' ? typeof window.IntersectionObserver !== 'undefined' : true;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);

    return () => mq.removeEventListener('change', handler);
  }, []);

  // Graceful fallback for reduced motion or legacy browsers
  if (reducedMotion || !hasIO) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        x: xOffset,
        scale,
        rotateX
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateX: 0
      }}
      viewport={{
        once,
        margin: '-40px 0px -40px 0px',
        amount: 0.08
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
