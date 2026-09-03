import { motion } from 'framer-motion';
import { GraduationCap, ArrowDownRight, Award } from 'lucide-react';
import { education } from '../data/portfolio';
import FoldText from '../components/FoldText';

export const Education = () => {
  return (
    <section id="education" className="py-4 sm:py-6 relative">
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
              11 / ACADEMICS
            </span>
            <span className="h-[1px] w-6 bg-white/10" />
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              FORMAL DEGREES & DIPLOMA
            </span>
          </div>

          <div className="mb-2">
            <FoldText
              text="ACADEMIC FOUNDATION"
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

          <p className="font-body text-slate-200 font-medium text-xs sm:text-sm max-w-2xl leading-relaxed">
            Formal computer engineering, artificial intelligence, and data science academic progression.
          </p>
        </motion.div>

        {/* Education Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {education.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <div className="p-6 sm:p-7 rounded-[28px] glass-card glass-card-hover border border-line-light flex flex-col justify-between h-full">
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-line">
                    <div className="w-10 h-10 rounded-2xl bg-luxury/10 border border-luxury/30 flex items-center justify-center text-luxury">
                      <GraduationCap className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-luxury font-bold">
                        {item.start} — {item.end}
                      </span>
                      {item.isCurrent ? (
                        <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-bold">
                          CURRENT
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] text-luxury bg-luxury/10 border border-luxury/20 px-2.5 py-0.5 rounded-full font-bold">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Degree & Field */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text mb-1 group-hover:text-luxury transition-colors">
                    {item.degree}
                  </h3>
                  <div className="font-mono text-sm text-accent font-semibold mb-3">
                    {item.field}
                  </div>

                  {/* Institution */}
                  <div className="font-mono text-xs text-muted mb-4">
                    <span className="text-text font-medium">{item.institution}</span>
                  </div>
                </div>

                <div>
                  {/* Special Honors/Scores Tag */}
                  {item.grade && (
                    <div className="mb-3 p-2.5 rounded-xl bg-surface-2 border border-line-light flex items-center gap-2 font-mono text-xs">
                      <Award className="w-4 h-4 text-luxury shrink-0" />
                      <span className="text-text font-semibold">{item.grade}</span>
                    </div>
                  )}

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.skills.map((s) => (
                      <span key={s} className="font-mono text-[11px] font-semibold text-luxury bg-luxury/10 border border-luxury/30 px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Bottom Transition */}
        <div className="mt-8 pt-4 border-t border-line/40 flex items-center justify-between font-mono text-xs text-muted">
          <a href="#certifications" className="flex items-center gap-2 text-luxury font-semibold hover:underline">
            <span>INDUSTRY CERTIFICATIONS & CREDENTIALS</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-accent" />
          </a>
          <span className="text-muted-dark text-[10px]">VERIFIED CREDENTIALS</span>
        </div>

      </div>
    </section>
  );
};
