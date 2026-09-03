import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, ArrowDownRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { AboutWindow } from '../components/interactive/AboutWindow';
import FoldText from '../components/FoldText';
import BorderGlow from '../components/BorderGlow';

export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "QUERY", desc: "Unstructured user query or document payload ingest." },
    { title: "RETRIEVE", desc: "Dense vector embedding search over technical corpus." },
    { title: "CONTEXT", desc: "Context compression & prompt boundary formatting." },
    { title: "LLM", desc: "Model reasoning over grounded documentation." },
    { title: "RESPONSE", desc: "Validated deterministic output generation." }
  ];

  return (
    <section id="about" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main 2-Column Section Layout (~42% photo + steps, ~58% editorial + 2x2 grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (~46% on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
                  02 / ABOUT
                </span>
                <span className="h-[1px] w-6 bg-white/10" />
                <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
                  IDENTITY & APPROACH
                </span>
              </div>

              {/* Main Heading with FoldText Animation */}
              <div className="mb-4">
                <FoldText
                  text="PRACTICAL AI FOR REAL OPERATIONS"
                  splitBy="word"
                  hinge="top"
                  trigger="scroll"
                  duration={0.7}
                  stagger={0.05}
                  fontSize="clamp(1.875rem, 3.5vw, 2.75rem)"
                  fontWeight={800}
                  color="#F8FAFC"
                />
              </div>

              {/* Integrated Real Portrait Photo with React Bits BorderGlow */}
              <div className="mb-3">
                <BorderGlow
                  backgroundColor="#0A0A0C"
                  borderRadius={24}
                  glowColor="45 80 70"
                  glowRadius={35}
                  edgeSensitivity={30}
                  colors={['#C9B27C', '#00F0FF', '#3B82F6']}
                >
                  <div className="relative aspect-[4/4.2] max-h-[390px] w-full rounded-[24px] overflow-hidden bg-surface group">
                    <img 
                      src="/IMG_20251129_113510.jpg" 
                      alt="Bhushan Rajendra Dagwar working"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl glass-card border border-white/10 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-luxury font-bold">BHUSHAN RAJENDRA DAGWAR</span>
                      <span className="text-muted">SEE-Tech Solutions</span>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            </div>

            {/* Read Detailed Biography Trigger Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 px-5 rounded-2xl bg-surface-2 hover:bg-surface border border-line-light hover:border-luxury/40 text-luxury font-mono text-[11px] tracking-wider font-bold flex items-center justify-between transition-all group shadow-md"
            >
              <span>READ DETAILED BIOGRAPHY</span>
              <ArrowRight className="w-4 h-4 text-luxury group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column (~54% on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Editorial Summary Paragraph & Capability Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-6 rounded-2xl glass-card border border-white/15 bg-[#0C0C10]/65 shadow-2xl backdrop-blur-xl mb-4"
            >
              <p className="font-body text-text font-medium text-sm sm:text-base leading-relaxed mb-4 max-w-[650px]">
                {personalInfo.about}
              </p>
              
              {/* Compact Capability Tags */}
              <div className="flex flex-wrap gap-2 font-mono text-xs pt-3 border-t border-white/10">
                {['AI / LLM', 'RAG ARCHITECTURES', 'SEARCH SYSTEMS', 'DOCUMENT INTELLIGENCE', 'FULL STACK'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-luxury/10 border border-luxury/30 text-luxury font-bold text-[10px] tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Structured 2x2 Engineering Approach Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <div className="p-3.5 rounded-2xl glass-card border border-line-light hover:border-luxury/40 transition-all flex flex-col justify-between min-h-[110px]">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-luxury mb-1 font-bold">
                    <span>01 RETRIEVAL</span>
                    <span className="text-accent">RAG / SEARCH</span>
                  </div>
                  <p className="text-xs text-muted leading-snug">Dense embeddings, vector search indexing & reciprocal rank fusion.</p>
                </div>
                <div className="font-mono text-[9px] text-muted-dark pt-1.5 border-t border-line mt-2">Python · Vector DB · RAG</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-card border border-line-light hover:border-luxury/40 transition-all flex flex-col justify-between min-h-[110px]">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-luxury mb-1 font-bold">
                    <span>02 DOCUMENT INTEL</span>
                    <span className="text-accent">OCR / EXTRACTION</span>
                  </div>
                  <p className="text-xs text-muted leading-snug">Tesseract OCR models, bbox bounding box parsing & JSON schemas.</p>
                </div>
                <div className="font-mono text-[9px] text-muted-dark pt-1.5 border-t border-line mt-2">Tesseract · Express · Node</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-card border border-line-light hover:border-luxury/40 transition-all flex flex-col justify-between min-h-[110px]">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-luxury mb-1 font-bold">
                    <span>03 APPLICATIONS</span>
                    <span className="text-accent">FASTAPI / REACT</span>
                  </div>
                  <p className="text-xs text-muted leading-snug">Grounded prompt routing, deterministic guardrails & DOCX synthesis.</p>
                </div>
                <div className="font-mono text-[9px] text-muted-dark pt-1.5 border-t border-line mt-2">React · Node · FastAPI</div>
              </div>

              <div className="p-3.5 rounded-2xl glass-card border border-line-light hover:border-luxury/40 transition-all flex flex-col justify-between min-h-[110px]">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-luxury mb-1 font-bold">
                    <span>04 DATA FLOW</span>
                    <span className="text-accent">SQL / SUPABASE</span>
                  </div>
                  <p className="text-xs text-muted leading-snug">PostgreSQL tsvector search, multi-column ILIKE & telemetry pipelines.</p>
                </div>
                <div className="font-mono text-[9px] text-muted-dark pt-1.5 border-t border-line mt-2">PostgreSQL · Supabase · SQL</div>
              </div>
            </motion.div>

            {/* SYSTEM PROOF // RAG PIPELINE Module */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 sm:p-5 rounded-[24px] glass-card border border-line-light flex flex-col gap-3"
            >
              <div className="flex items-center justify-between font-mono text-xs border-b border-line pb-2.5">
                <div className="flex items-center gap-2 text-luxury font-bold text-[11px] tracking-wider uppercase">
                  <Bot className="w-3.5 h-3.5 text-luxury" />
                  <span>SYSTEM PROOF // RAG PIPELINE</span>
                </div>
                <span className="text-muted-dark text-[9px] font-mono tracking-wider uppercase">CLICK STEP TO INSPECT</span>
              </div>

              {/* Single-Row 5-Step Sequence */}
              <div className="grid grid-cols-5 gap-1.5 font-mono text-[10px]">
                {steps.map((s, idx) => (
                  <button
                    key={s.title}
                    onClick={() => setActiveStep(idx)}
                    className={`py-2 px-1.5 rounded-xl border text-center transition-all ${
                      activeStep === idx
                        ? 'bg-luxury/15 border-luxury text-luxury font-bold shadow-md'
                        : 'glass-card border-line-light text-muted hover:text-text'
                    }`}
                  >
                    <span className="block text-[9px] text-accent font-bold mb-0.5">0{idx + 1}</span>
                    <span className="truncate block text-[10px] font-semibold">{s.title}</span>
                  </button>
                ))}
              </div>

              {/* Step Detail Box with VERIFIED Badge */}
              <div className="p-3 rounded-xl glass-card border border-line-light font-mono text-[11px] flex items-center justify-between">
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-luxury font-bold uppercase shrink-0">{steps[activeStep].title}:</span>
                  <span className="text-muted font-body text-xs truncate">{steps[activeStep].desc}</span>
                </div>
                <span className="text-accent text-[10px] font-mono font-bold shrink-0">VERIFIED</span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Narrative Bottom Transition */}
        <div className="mt-6 pt-3 border-t border-line/40 flex items-center justify-between font-mono text-xs text-muted">
          <div className="flex items-center gap-2 text-luxury font-semibold">
            <span>HOW I BUILD</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-accent" />
          </div>
          <span className="text-muted-dark text-[10px]">CAPABILITIES & ARCHITECTURE</span>
        </div>
      </div>

      {/* Detailed Modal Window */}
      <AboutWindow isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
