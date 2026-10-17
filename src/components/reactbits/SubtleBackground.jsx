import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function SubtleBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const shouldReduceMotion = mediaQuery.matches;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initDots();
    };

    window.addEventListener('resize', handleResize);

    const spacing = 36;
    let dots = [];

    const initDots = () => {
      dots = [];
      const cols = Math.floor(width / spacing) + 1;
      const rows = Math.floor(height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            baseX: i * spacing,
            baseY: j * spacing,
            alpha: 0.18 + Math.random() * 0.12,
            size: 1.2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    initDots();

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.015;

      const dark = isDarkRef.current;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Interaction with mouse
        const dx = mouse.x - d.x;
        const dy = mouse.y - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 120;

        let curAlpha = d.alpha;
        let curSize = d.size;

        if (dist < maxDist) {
          const factor = 1 - dist / maxDist;
          curAlpha = Math.min(0.75, d.alpha + factor * 0.55);
          curSize = d.size + factor * 1.5;
        } else if (!shouldReduceMotion) {
          // Gentle organic pulse
          curAlpha = d.alpha + Math.sin(time + d.phase) * 0.06;
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, curSize, 0, Math.PI * 2);

        if (dist < maxDist) {
          ctx.fillStyle = `rgba(244, 123, 53, ${curAlpha})`;
        } else {
          ctx.fillStyle = dark
            ? `rgba(197, 189, 179, ${curAlpha * 0.45})`
            : `rgba(217, 196, 173, ${curAlpha})`;
        }
        ctx.fill();
      }

      if (!shouldReduceMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
