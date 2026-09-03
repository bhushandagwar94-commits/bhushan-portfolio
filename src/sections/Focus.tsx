import { motion } from 'framer-motion';
import { Bot, Network, Cpu, Database } from 'lucide-react';
import BorderGlow from '../components/BorderGlow';
import FoldText from '../components/FoldText';

const CAPABILITIES = [
  {
    icon: Bot,
    number: "01",
    title: "LLM & RAG ARCHITECTURES",
    tagline: "Retrieval & Grounded Workflows",
    desc: "Retrieval systems, vector embeddings, dense indexing, structured prompt guardrails, and document intelligence."
  },
  {
    icon: Network,
    number: "02",
    title: "AI & MACHINE LEARNING",
    tagline: "Predictive Models & Analysis",
    desc: "Predictive modeling, regression analysis, classification pipelines, feature engineering, and model evaluation."
  },
  {
    icon: Cpu,
    number: "03",
    title: "FULL-STACK AI INTEGRATION",
    tagline: "React, FastAPI, Node & APIs",
    desc: "Connecting Python/Vector DB backends seamlessly with high-performance React and Node application interfaces."
  },
  {
    icon: Database,
    number: "04",
    title: "DATA & SEARCH SYSTEMS",
    tagline: "PostgreSQL, Supabase & Telemetry",
    desc: "SQL database architecture, PostgreSQL tsvector full-text search, telemetry dashboards, and multi-source ETL."
  }
];

export const Focus = () => {
  return (
    <section id="capabilities" className="py-4 sm:py-6 relative">
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
              03 / CAPABILITIES
            </span>
            <span className="h-[1px] w-6 bg-white/10" />
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              CORE ENGINEERING CAPABILITIES
            </span>
          </div>
          
          <div className="mb-2">
            <FoldText
              text="WHAT I WORK WITH"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.03}
              fontSize="clamp(1.875rem, 3.5vw, 2.75rem)"
              fontWeight={800}
              color="#F8FAFC"
            />
          </div>
          <p className="font-body text-slate-100 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl mt-2 italic drop-shadow-md">
            “Core technical capability hierarchy across applied AI, retrieval systems, machine learning, and full-stack development.”
          </p>
        </motion.div>

        {/* Compact 2x2 Capabilities Grid (~180px Tall Cards) with React Bits BorderGlow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <BorderGlow
                  backgroundColor="rgba(12, 12, 18, 0.65)"
                  borderRadius={24}
                  glowColor="45 80 70"
                  glowRadius={30}
                  edgeSensitivity={35}
                  colors={['#C9B27C', '#00F0FF', '#3B82F6']}
                  className="h-full"
                >
                  <div className="group p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden min-h-[180px]">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-2 border border-line-light flex items-center justify-center text-luxury group-hover:bg-luxury/10 group-hover:border-luxury/30 transition-all duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs text-muted-dark font-bold">{item.number}</span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-text mb-1 group-hover:text-luxury transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <div className="font-mono text-[11px] text-accent mb-2 font-medium tracking-wide">
                        {item.tagline}
                      </div>

                      <p className="font-body text-xs text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
