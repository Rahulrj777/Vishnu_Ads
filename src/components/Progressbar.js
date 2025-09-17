import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Progressbar = () => {
  const { scrollYProgress } = useScroll();
  
  // Use spring for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0  h-0.5 md:h-1 bg-white origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default Progressbar;
