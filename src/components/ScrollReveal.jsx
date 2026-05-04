import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = directions[direction] || directions.up;
  const shouldReveal = once ? isInView : true;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={shouldReveal ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
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
