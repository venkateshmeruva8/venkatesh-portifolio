import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function DecryptedText({
  text = '',
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@$%&',
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-[#F47B35]/70 font-mono',
  animateOn = 'view', // 'view' or 'hover'
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    let interval;
    let currentIteration = 0;

    const shouldAnimate =
      (animateOn === 'view' && isInView && !hasAnimated) ||
      (animateOn === 'hover' && isHovering);

    if (shouldAnimate) {
      const targetText = text;
      const textLength = targetText.length;
      let revealedCount = 0;

      interval = setInterval(() => {
        if (sequential) {
          if (revealedCount < textLength) {
            const nextText = targetText
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < revealedCount) return targetText[index];
                return characters[Math.floor(Math.random() * characters.length)];
              })
              .join('');
            setDisplayText(nextText);
            revealedCount++;
          } else {
            setDisplayText(targetText);
            clearInterval(interval);
            setHasAnimated(true);
          }
        } else {
          if (currentIteration < maxIterations) {
            const nextText = targetText
              .split('')
              .map((char) => {
                if (char === ' ') return ' ';
                return characters[Math.floor(Math.random() * characters.length)];
              })
              .join('');
            setDisplayText(nextText);
            currentIteration++;
          } else {
            setDisplayText(targetText);
            clearInterval(interval);
            setHasAnimated(true);
          }
        }
      }, speed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView, isHovering, text, speed, maxIterations, sequential, characters, animateOn, hasAnimated]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => animateOn === 'hover' && setIsHovering(true)}
      onMouseLeave={() => animateOn === 'hover' && setIsHovering(false)}
      {...props}
    >
      <span className={className}>
        {displayText.split('').map((char, index) => {
          const isDecrypted = char === text[index];
          return (
            <span
              key={index}
              className={isDecrypted ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
