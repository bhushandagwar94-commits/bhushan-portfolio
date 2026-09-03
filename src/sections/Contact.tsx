import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, ExternalLink, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqpkbwnv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setIsSuccessOpen(true);
      } else {
        const data = await response.json().catch(() => null);
        setStatus('error');
        setErrorMessage(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus('error');
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

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
          className="font-body text-muted text-xs sm:text-base max-w-xl leading-relaxed mb-6"
        >
          Open to AI Engineer, Machine Learning, and applied LLM opportunities. Let's discuss how I can deliver immediate engineering value.
        </motion.p>

        {/* Interactive Formspree Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl p-5 sm:p-7 rounded-[24px] glass-card border border-line-light text-left mb-8 shadow-2xl"
        >
          <form
            action="https://formspree.io/f/mqpkbwnv"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 font-body"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block font-mono text-[10px] text-muted-dark uppercase font-semibold mb-1.5">
                  Your Name <span className="text-luxury">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Bhushan Dagwar"
                  className="w-full bg-surface-2 border border-line-light focus:border-luxury/60 rounded-xl px-3.5 py-2.5 text-xs text-text placeholder:text-muted-dark focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-mono text-[10px] text-muted-dark uppercase font-semibold mb-1.5">
                  Your Email <span className="text-luxury">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-surface-2 border border-line-light focus:border-luxury/60 rounded-xl px-3.5 py-2.5 text-xs text-text placeholder:text-muted-dark focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block font-mono text-[10px] text-muted-dark uppercase font-semibold mb-1.5">
                Subject <span className="text-luxury">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                placeholder="AI Engineering Role / Project Inquiry"
                className="w-full bg-surface-2 border border-line-light focus:border-luxury/60 rounded-xl px-3.5 py-2.5 text-xs text-text placeholder:text-muted-dark focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block font-mono text-[10px] text-muted-dark uppercase font-semibold mb-1.5">
                Message <span className="text-luxury">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Hello Bhushan, I would like to discuss an opportunity..."
                className="w-full bg-surface-2 border border-line-light focus:border-luxury/60 rounded-xl px-3.5 py-2.5 text-xs text-text placeholder:text-muted-dark focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submission Status Alerts */}
            {status === 'success' && (
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent text-xs flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Message sent successfully. Thank you for reaching out!</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 font-mono">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage || "Something went wrong. Please try again."}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-2 bg-text text-bg hover:bg-white disabled:bg-white/40 disabled:cursor-not-allowed font-semibold py-3 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-xl mt-1"
            >
              {status === 'submitting' ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-bg border-t-transparent animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Quick Action Badges */}
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
              onClick={(e) => handleEmailClick(e, profile.email)}
              className="group flex items-center justify-center gap-2 bg-surface-2 text-text px-5 py-2.5 rounded-full font-medium text-xs border border-line-light hover:border-luxury hover:text-luxury transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>DIRECT EMAIL</span>
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center gap-2 bg-surface-2 text-text px-5 py-2.5 rounded-full font-medium text-xs border border-line-light hover:border-luxury hover:text-luxury transition-all"
            >
              <span>LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <button
              onClick={onOpenResume}
              className="group flex items-center justify-center gap-2 bg-surface-2 text-text px-5 py-2.5 rounded-full font-medium text-xs border border-line-light hover:border-luxury hover:text-luxury transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
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
