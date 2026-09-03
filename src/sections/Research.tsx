import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { APPLIED_RESEARCH_PAPERS, type ResearchPaper } from '../data/research';
import { ResearchWindow } from '../components/interactive/ResearchWindow';

import FoldText from '../components/FoldText';
import BlurText from '../components/BlurText';

export const Research = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);

  return (
    <section id="research" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-6"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
              07 / RESEARCH
            </span>
            <span className="h-[1px] w-6 bg-white/10" />
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              RESEARCH & INNOVATION
            </span>
          </div>

          <div className="mb-2">
            <FoldText
              text="APPLIED RESEARCH"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.035}
              fontSize="clamp(1.875rem, 3.5vw, 2.75rem)"
              fontWeight={800}
              color="#F8FAFC"
            />
          </div>

          <p className="font-body text-text font-medium text-xs sm:text-sm max-w-2xl leading-relaxed">
            Research-driven exploration of Artificial Intelligence, Large Language Models, Natural Language Processing, Retrieval-Augmented Generation, and Industrial AI.
          </p>
        </motion.div>

        {/* 3-Card Responsive Grid (3 Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {APPLIED_RESEARCH_PAPERS.map((paper, idx) => (
            <motion.div 
              key={paper.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedPaper(paper)}
              className="cursor-pointer group h-full"
            >
              <div className="p-5 sm:p-6 rounded-[24px] glass-card glass-card-hover border border-line-light flex flex-col justify-between h-full">
                <div>
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-line">
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-luxury font-bold tracking-widest">{paper.number}</span>
                      <span className="text-muted-dark">/</span>
                      <span className="text-accent uppercase tracking-wider font-semibold text-[10px] truncate max-w-[120px]">
                        {paper.researchType}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded border border-luxury/30 bg-luxury/10 text-luxury uppercase">
                      {paper.year}
                    </span>
                  </div>

                  {/* Title (BlurText Highlight) */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-text mb-2.5 group-hover:text-luxury transition-colors duration-300">
                    <BlurText text={paper.title} delay={45} animateBy="words" direction="top" stepDuration={0.3} />
                  </h3>

                  {/* Research Abstract Teaser */}
                  <p className="font-body text-xs text-muted leading-relaxed mb-4 line-clamp-3">
                    {paper.summary}
                  </p>
                </div>

                <div>
                  {/* Focus Areas Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {paper.focusAreas.slice(0, 3).map((area) => (
                      <span key={area} className="font-mono text-[11px] text-luxury font-semibold bg-luxury/10 border border-luxury/30 px-2.5 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                    {paper.focusAreas.length > 3 && (
                      <span className="font-mono text-[11px] text-accent font-semibold bg-accent/10 border border-accent/30 px-2.5 py-1 rounded-full">
                        +{paper.focusAreas.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-line flex items-center justify-between font-mono text-xs">
                    <span className="text-muted-dark font-medium text-[11px]">
                      {paper.category.split('•')[0]}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPaper(paper);
                      }}
                      className="flex items-center gap-1.5 bg-text text-bg hover:bg-white px-4 py-2 rounded-full font-bold text-xs transition-all shadow-md group-hover:scale-105"
                    >
                      <span>VIEW RESEARCH</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Research Detail Window */}
      <ResearchWindow paper={selectedPaper} onClose={() => setSelectedPaper(null)} />
    </section>
  );
};
