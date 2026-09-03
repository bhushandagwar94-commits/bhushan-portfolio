import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { Magnetic } from '../components/interactive/Magnetic';
import { ContactSuccessModal } from '../components/interactive/ContactSuccessModal';
import { handleEmailClick } from '../utils/email';

import FoldText from '../components/FoldText';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact = ({ onOpenResume }: ContactProps) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  return (
    <section id="contact" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Editorial Section Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 mb-5"
        >
          <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
            13 / CONTACT
          </span>
          <span className="h-[1px] w-6 bg-white/10" />
          <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
            LET'S COLLABORATE
          </span>
        </motion.div>
        
        {/* Main Heading with FoldText Animation */}
        <div className="mb-4 max-w-3xl">
          <FoldText
            text="LET'S BUILD SOMETHING EXTRAORDINARY"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            duration={0.7}
            stagger={0.05}
            fontSize="clamp(2rem, 4.5vw, 3.5rem)"
            fontWeight={800}
            color="#F8FAFC"
          />
        </div>
        
        {/* Live Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3.5 py-1 rounded-full mb-5 font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>AVAILABLE FOR FULL-TIME AI ENGINEER ROLES</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-muted text-xs sm:text-base max-w-xl leading-relaxed mb-8"
        >
          Open to AI Engineer, Machine Learning, and applied LLM opportunities. Let's discuss how I can deliver immediate engineering value.
        </motion.p>

        {/* Magnetic Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 font-body"
        >
          <Magnetic strength={0.25}>
            <a 
              href={`mailto:${profile.email}`} 
              onClick={(e) => {
                handleEmailClick(e, profile.email);
                setIsSuccessOpen(true);
              }}
              className="group flex items-center justify-center gap-2 bg-text text-bg px-6 py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-xl"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center gap-2 bg-surface-2 text-text px-6 py-3 rounded-full font-medium text-xs sm:text-sm border border-line-light hover:border-luxury hover:text-luxury transition-all"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <button
              onClick={onOpenResume}
              className="group flex items-center justify-center gap-2 bg-surface-2 text-text px-6 py-3 rounded-full font-medium text-xs sm:text-sm border border-line-light hover:border-luxury hover:text-luxury transition-all shadow-md"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>RESUME</span>
            </button>
          </Magnetic>
        </motion.div>

        {/* Direct Contact Info Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-md p-4 rounded-[20px] glass-card text-left border border-line-light"
        >
          <a 
            href={`mailto:${profile.email}`} 
            onClick={(e) => handleEmailClick(e, profile.email)}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-surface-2 border border-line-light flex items-center justify-center text-muted group-hover:text-luxury group-hover:border-luxury/30 transition-all">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-mono text-[9px] text-muted-dark block uppercase">Email</span>
              <span className="font-body text-xs font-semibold text-text group-hover:text-luxury transition-colors">{profile.email}</span>
            </div>
          </a>

          <a href={`tel:${profile.phone}`} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-surface-2 border border-line-light flex items-center justify-center text-muted group-hover:text-luxury group-hover:border-luxury/30 transition-all">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-mono text-[9px] text-muted-dark block uppercase">Phone</span>
              <span className="font-body text-xs font-semibold text-text group-hover:text-luxury transition-colors">{profile.phone}</span>
            </div>
          </a>
        </motion.div>

      </div>

      {/* Success Modal Window */}
      <ContactSuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </section>
  );
};
