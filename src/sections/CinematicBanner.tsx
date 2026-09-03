import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Terminal, ArrowDownRight } from 'lucide-react';
import StrokeText from '../components/StrokeText';

export const CinematicBanner = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const cardScale = useTransform(scrollYProgress, [0.1, 0.45], [0.94, 1]);
  const cardRadius = useTransform(scrollYProgress, [0.1, 0.45], ['28px', '20px']);
  const textScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.96, 1, 0.98]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.85], [0.2, 1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="py-6 sm:py-8 relative overflow-hidden bg-transparent my-2"
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Scroll-Expanding Rounded Stage Card using PortfolioCard */}
        <motion.div 
          style={{ scale: cardScale, borderRadius: cardRadius }}
          className="transition-all duration-300 overflow-hidden"
        >
          <div className="w-full glass-card rounded-[28px] shadow-2xl backdrop-blur-xl border border-white/10">
            <motion.div 
              style={{ scale: textScale, opacity: textOpacity }}
              className="flex flex-col items-center text-center max-w-5xl mx-auto p-6 sm:p-12 relative z-10"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-4 font-mono text-xs">
                <span className="px-3.5 py-1 rounded-full bg-luxury/10 border border-luxury/30 text-luxury font-bold uppercase tracking-widest flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-accent" />
                  <span>08 / SYSTEM CAPACITY</span>
                </span>
              </div>

              {/* Full-Screen Statement using React Bits StrokeText */}
              <div className="w-full mb-4">
                <StrokeText
                  text="BUILDING INTELLIGENCE FOR REAL-WORLD OPERATIONS"
                  strokeColor="#A78BFA"
                  fillColor="#F8FAFC"
                  strokeWidth={1.4}
                  drawDuration={1.6}
                  fillDelay={0.2}
                  stagger={0.05}
                  ease="power2.out"
                  trigger="scroll"
                  fillMode="wipe"
                  fontSize={82}
                  fontWeight={800}
                  letterSpacing={-2}
                />
              </div>

              {/* Crisp Subtitle Container */}
              <div className="p-4 sm:p-5 px-6 sm:px-8 rounded-2xl glass-card border border-white/15 bg-[#0C0C10]/60 shadow-2xl backdrop-blur-xl mb-6 max-w-3xl">
                <p className="font-body text-text font-medium text-sm sm:text-base leading-relaxed">
                  From raw unstructured enterprise sources through semantic vector search layers to production RAG pipelines and automated consultant-grade document delivery.
                </p>
              </div>

              {/* System Proof Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
                <div className="p-2.5 px-4 rounded-xl bg-surface/90 border border-line-light flex items-center gap-2 text-text backdrop-blur-md">
                  <Terminal className="w-3.5 h-3.5 text-luxury" />
                  <span>100% GROUNDED RETRIEVAL</span>
                </div>
                <div className="p-2.5 px-4 rounded-xl bg-surface/90 border border-line-light flex items-center gap-2 text-text backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>DETERMINISTIC GUARDRAILS</span>
                </div>
                <div className="p-2.5 px-4 rounded-xl bg-surface/90 border border-line-light flex items-center gap-2 text-text backdrop-blur-md">
                  <ArrowDownRight className="w-3.5 h-3.5 text-luxury" />
                  <span>AUTOMATED DOCX OUTPUT</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
