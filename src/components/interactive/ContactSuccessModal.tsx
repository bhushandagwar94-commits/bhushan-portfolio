import { CheckCircle2, ArrowRight } from 'lucide-react';
import { InteractiveWindow } from './InteractiveWindow';

interface ContactSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactSuccessModal = ({ isOpen, onClose }: ContactSuccessModalProps) => {
  return (
    <InteractiveWindow
      isOpen={isOpen}
      onClose={onClose}
      title="MESSAGE DISPATCHED / CONTACT INITIATED"
      category="SYSTEM ACTION"
      maxWidth="max-w-md"
    >
      <div className="flex flex-col items-center text-center gap-5 py-4 font-body">
        <div className="w-16 h-16 rounded-full bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center shadow-xl shadow-luxury/10">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-display font-bold text-2xl text-text">MESSAGE READY</h3>

        <p className="text-sm text-muted leading-relaxed">
          Thank you for reaching out. Bhushan will review your inquiry and respond directly via email or LinkedIn shortly.
        </p>

        <button
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 bg-text text-bg hover:bg-white font-bold py-3 rounded-full transition-all text-xs font-mono tracking-wider uppercase mt-2 shadow-lg"
        >
          <span>CLOSE MESSAGE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </InteractiveWindow>
  );
};
