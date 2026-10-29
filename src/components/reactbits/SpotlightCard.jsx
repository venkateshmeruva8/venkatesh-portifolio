import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor,
  borderColor,
  tilt = true,
  maxTilt = 5,
  perspective = 1000,
  scale = 1.012,
  style = {},
  ...props
}) {
  const { isDark } = useTheme();
  const divRef = useRef(null);
  const rafId = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const activeSpotlight = spotlightColor || (isDark ? 'rgba(244, 123, 53, 0.18)' : 'rgba(244, 123, 53, 0.12)');

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    // 3D tilt calculation (desktop hover only)
    if (tilt && !reducedMotion && !window.matchMedia('(hover: none)').matches) {
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        if (!divRef.current) return;
        const percentX = x / rect.width - 0.5;
        const percentY = y / rect.height - 0.5;

        const rotX = (-percentY * maxTilt * 2).toFixed(2);
        const rotY = (percentX * maxTilt * 2).toFixed(2);

        divRef.current.style.transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      });
    }
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    if (tilt && !reducedMotion && divRef.current && !window.matchMedia('(hover: none)').matches) {
      divRef.current.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease';
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (tilt && divRef.current) {
      divRef.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease, border-color 0.5s ease';
      divRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        ...(borderColor ? { borderColor } : {}),
        ...style
      }}
      {...props}
    >
      {/* Specular spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${activeSpotlight}, transparent 40%)`,
        }}
      />
      {/* Inner content with 3D preservation */}
      <div className="relative z-20 h-full" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}
