import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  perspective = 1000,
  scale = 1.015,
  ...props
}) {
  const { isDark } = useTheme();
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafId = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const activeGlare = isDark ? 'rgba(244, 123, 53, 0.16)' : 'rgba(244, 123, 53, 0.10)';

  const handleMouseMove = (e) => {
    if (reducedMotion || !cardRef.current) return;
    if (window.matchMedia('(hover: none)').matches) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const percentX = x / rect.width - 0.5;
      const percentY = y / rect.height - 0.5;

      const rotX = (-percentY * maxTilt * 2).toFixed(2);
      const rotY = (percentX * maxTilt * 2).toFixed(2);

      cardRef.current.style.transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (glareRef.current) {
        const glareX = ((percentX + 0.5) * 100).toFixed(1);
        const glareY = ((percentY + 0.5) * 100).toFixed(1);
        glareRef.current.style.opacity = '1';
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, ${activeGlare}, transparent 65%)`;
      }
    });
  };

  const handleMouseEnter = () => {
    if (reducedMotion || window.matchMedia('(hover: none)').matches) return;
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';
    }
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease, border-color 0.5s ease';
      cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
      glareRef.current.style.transition = 'opacity 0.5s ease';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {/* Specular glare overlay */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 z-10"
      />
      {/* Content wrapper with 3D preservation */}
      <div className="relative z-20 h-full" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}
