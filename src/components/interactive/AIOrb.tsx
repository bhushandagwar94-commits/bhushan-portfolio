import { motion } from 'framer-motion';

export const AIOrb = () => {
  return (
    <div className="inline-flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#0C0C10]/95 backdrop-blur-xl border border-white/15 shadow-xl hover:border-luxury/40 transition-all font-mono text-xs select-none">
      
      {/* Outer Orbit Container */}
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        
        {/* Orbit Ring & Rotating Nodes Group — Smooth 60 FPS GPU Rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Dashed Orbit Circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
            <circle 
              cx="24" 
              cy="24" 
              r="20" 
              fill="none" 
              stroke="rgba(255,255,255,0.18)" 
              strokeWidth="1.2" 
              strokeDasharray="3 3" 
            />
          </svg>

          {/* 3 Orbiting Spheres positioned precisely on the r=20 circle */}
          {/* Top Node (Cyan) */}
          <div 
            className="absolute w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"
            style={{ left: '22.75px', top: '2.75px' }}
          />
          
          {/* Bottom Right Node (Luxury Gold) */}
          <div 
            className="absolute w-2.5 h-2.5 rounded-full bg-[#C9B27C] shadow-[0_0_8px_#C9B27C]"
            style={{ left: '40.07px', top: '32.75px' }}
          />
          
          {/* Bottom Left Node (Electric Violet) */}
          <div 
            className="absolute w-2.5 h-2.5 rounded-full bg-[#7C7CFF] shadow-[0_0_8px_#7C7CFF]"
            style={{ left: '5.43px', top: '32.75px' }}
          />
        </motion.div>

        {/* Static Center AI Core */}
        <div className="relative z-10 w-7 h-7 rounded-full bg-[#050508] border border-accent/60 flex items-center justify-center text-[10px] font-extrabold text-accent shadow-[0_0_12px_rgba(90,200,250,0.35)]">
          AI
        </div>
      </div>

      {/* Status Text Block */}
      <div className="flex items-center gap-2 text-accent font-bold text-[11px] tracking-wide">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        <span className="text-[10px] text-slate-300 font-mono font-semibold tracking-tight">
          LLM & RAG PIPELINE ACTIVE
        </span>
      </div>
    </div>
  );
};
