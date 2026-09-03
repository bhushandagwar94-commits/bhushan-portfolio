import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Code2 } from 'lucide-react';
import FoldText from '../components/FoldText';

const ADVANTAGES = [
  {
    icon: Zap,
    title: "RAPID DEPLOYMENT & SHIP SPEED",
    desc: "Experience translating complex LLM requirements into functional production code rapidly with Python, Node.js, and React."
  },
  {
    icon: ShieldCheck,
    title: "DETERMINISTIC AI & ZERO HALLUCINATION",
    desc: "Strict adherence to grounded generation, JSON schema validation, and structured prompt guardrails."
  },
  {
    icon: Code2,
    title: "END-TO-END FULL-STACK INTEGRATION",
    desc: "Seamless integration between complex Python/Vector DB backends and high-performance frontends."
  }
];

export const WhyWorkWithMe = () => {
  return (
    <section className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-6 text-center items-center"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
              12 / VALUE
            </span>
          </div>

          <div className="mb-2">
            <FoldText
              text="WHY HIRE BHUSHAN"
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

          <p className="font-body text-text font-medium text-xs sm:text-sm max-w-xl leading-relaxed">
            Tangible engineering advantages brought to your technical team.
          </p>
        </motion.div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <div className="p-5 sm:p-6 rounded-[24px] glass-card glass-card-hover border border-line-light flex flex-col justify-between h-full">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-text mb-2">{adv.title}</h3>
                    <p className="font-body text-xs text-muted leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
