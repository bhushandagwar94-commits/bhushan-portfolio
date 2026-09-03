import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA, type Certification } from '../data/certifications';
import { CertificationModal } from '../components/interactive/CertificationModal';
import FoldText from '../components/FoldText';

export const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const CATEGORIES = [
    'ALL',
    'AI / GEN-AI',
    'DATA SCIENCE',
    'CLOUD & DEVOPS',
    'PROGRAMMING',
    'HEALTHCARE AI'
  ];

  // Programmatic sorting (Newest -> Oldest by dateSort)
  const sortedCertifications = useMemo(() => {
    return [...CERTIFICATIONS_DATA].sort((a, b) => (a.dateSort < b.dateSort ? 1 : -1));
  }, []);

  // Filtered dataset
  const filteredCertifications = useMemo(() => {
    if (activeCategory === 'ALL') return sortedCertifications;
    return sortedCertifications.filter(c => c.category === activeCategory);
  }, [activeCategory, sortedCertifications]);

  return (
    <section id="certifications" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-6"
        >
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
                10 / CREDENTIALS
              </span>
              <span className="h-[1px] w-6 bg-white/10" />
              <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
                CERTIFICATIONS & VERIFICATIONS
              </span>
            </div>
            
            <span className="font-mono text-[11px] text-accent font-semibold bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
              {sortedCertifications.length} VERIFIED CREDENTIALS
            </span>
          </div>

          <div className="mb-2">
            <FoldText
              text="CERTIFICATIONS & CREDENTIALS"
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
            Professional certifications and credentials spanning Artificial Intelligence, Generative AI, Data Science, Cloud Computing, Programming, NLP, and Healthcare AI.
          </p>
        </motion.div>

        {/* Lightweight Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6 font-mono text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-semibold border ${
                activeCategory === cat
                  ? 'bg-luxury text-bg border-luxury shadow-md font-bold'
                  : 'bg-surface-2 hover:bg-surface border-line-light text-text hover:text-luxury'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Grid (3 Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {filteredCertifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.24), ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group h-full"
            >
              <div className="p-5 sm:p-6 rounded-[24px] glass-card glass-card-hover border border-line-light flex flex-col justify-between h-full">
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-line">
                    <div className="flex items-center gap-1.5 font-mono text-xs text-luxury font-bold">
                      <Award className="w-4 h-4 text-luxury shrink-0" />
                      <span className="truncate max-w-[170px]">{cert.issuer}</span>
                    </div>
                    <span className="font-mono text-xs text-text font-semibold shrink-0">{cert.displayDate}</span>
                  </div>

                  {/* Title — Naturally Wraps Long Titles */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-text mb-2.5 group-hover:text-luxury transition-colors duration-300 leading-snug break-words">
                    {cert.title}
                  </h3>

                  {/* Score / NPTEL Highlights */}
                  {cert.isElite && (
                    <div className="mb-2.5 p-2 rounded-xl bg-luxury/10 border border-luxury/30 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-xs">
                        <ShieldCheck className="w-4 h-4 text-yellow-400" />
                        <span>ELITE SCORE</span>
                      </div>
                      <span className="text-accent font-extrabold text-sm">{cert.score}</span>
                    </div>
                  )}

                  {/* Credential ID if present */}
                  {cert.credentialId && !cert.isElite && (
                    <div className="font-mono text-xs text-text mb-2 font-semibold">
                      ID: <span className="text-luxury font-bold">{cert.credentialId}</span>
                    </div>
                  )}

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cert.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] text-luxury font-semibold bg-luxury/10 border border-luxury/30 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-2.5 border-t border-line flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="text-[10px] text-muted hover:text-text font-semibold transition-colors"
                  >
                    VIEW DETAILS
                  </button>

                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[11px] text-luxury font-bold hover:underline"
                      title="Verify Credential"
                    >
                      <span>VERIFY ↗</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] text-muted-dark">VERIFIED</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certification Details Modal */}
      <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};
