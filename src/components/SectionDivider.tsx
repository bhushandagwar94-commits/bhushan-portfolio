import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-1 sm:py-2 relative z-10 flex items-center justify-center select-none pointer-events-none">
      <div className="w-full relative flex items-center justify-center">
        {/* Subtle Luxury Gradient Fading Divider Line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-luxury/25 to-transparent" />
        
        {/* Centered Glowing Gold Diamond Marker */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.6 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="absolute w-2 h-2 rotate-45 bg-luxury/60 border border-luxury/80 shadow-[0_0_8px_rgba(201,178,124,0.4)]"
        />
      </div>
    </div>
  );
};
