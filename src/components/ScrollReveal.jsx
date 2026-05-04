import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = false, // If true, never hides after revealing
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          // Reset the animation ONLY if it leaves the bottom of the screen.
          // This ensures it stays visible when scrolling up past it, 
          // but re-animates the next time you scroll down to it.
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false);
          }
        }
      },
      { rootMargin: '-80px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = directions[direction] || directions.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
