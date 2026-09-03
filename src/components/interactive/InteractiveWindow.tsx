import { useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { modalVariants } from '../motion/variants';

interface InteractiveWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  children: ReactNode;
  maxWidth?: string;
}

export const InteractiveWindow = ({
  isOpen,
  onClose,
  title,
  category = 'SYSTEM WINDOW',
  children,
  maxWidth = 'max-w-3xl'
}: InteractiveWindowProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div 
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`bg-[#0A0A0C] border border-line-light w-full ${maxWidth} rounded-[28px] sm:rounded-[32px] shadow-2xl relative flex flex-col z-[10000] overflow-hidden my-auto pointer-events-auto max-h-[85vh]`}
          onClick={e => e.stopPropagation()}
        >
          {/* Fixed Non-Scrolling Top Header Bar */}
          <div className="shrink-0 h-[52px] sm:h-[56px] px-5 sm:px-6 bg-[#0D0D10] border-b border-line flex items-center justify-between font-mono text-xs select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-muted-dark ml-2">|</span>
              <span className="text-luxury font-semibold flex items-center gap-1.5 ml-1">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="uppercase">{category}</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-display font-bold text-text text-xs sm:text-sm truncate max-w-[180px] sm:max-w-xs">
                {title}
              </span>
              <button 
                onClick={onClose}
                className="p-1 rounded-full bg-surface-2 border border-line text-muted hover:text-text hover:border-luxury transition-colors"
                aria-label="Close window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Fully Scrollable Window Inner Body — Explicit Max Height Calculation for Reliable Cursor Wheel Scrolling */}
          <div 
            className="p-5 sm:p-8 md:p-10 font-body overflow-y-auto overscroll-contain touch-pan-y"
            style={{ maxHeight: 'calc(85vh - 56px)', overflowY: 'auto' }}
          >
            {children}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
