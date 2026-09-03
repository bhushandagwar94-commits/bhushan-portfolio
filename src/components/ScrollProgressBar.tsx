import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-luxury via-accent to-luxury z-[10000] origin-left pointer-events-none shadow-[0_0_10px_rgba(201,178,124,0.5)]"
      style={{ scaleX }}
    />
  );
};
