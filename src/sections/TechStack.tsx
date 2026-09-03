import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, ShieldCheck } from 'lucide-react';
import { SkillWindow } from '../components/interactive/SkillWindow';

interface SkillInfo {
  name: string;
  category: string;
  description: string;
  usage: string[];
  projectsCount: string;
}

const SKILL_CLUSTERS = [
  {
    domain: "CORE / AI & RAG",
    icon: Cpu,
    color: "text-luxury",
    borderColor: "border-luxury/30",
    skills: ["LLMs", "RAG", "Embeddings", "Vector Search", "Prompt Engineering", "Model Evaluation"]
  },
  {
    domain: "DEVELOPMENT & APIS",
    icon: Code2,
    color: "text-accent",
    borderColor: "border-accent/30",
    skills: ["Python", "JavaScript", "TypeScript", "React", "FastAPI", "Node.js", "Express", "REST APIs"]
  },
  {
    domain: "DATA & INFRASTRUCTURE",
    icon: Database,
    color: "text-violet",
    borderColor: "border-violet/30",
    skills: ["SQL", "Supabase", "PostgreSQL tsvector", "Pandas", "NumPy", "Git", "Docker", "Power BI"]
  }
];

import FoldText from '../components/FoldText';

interface SkillInfo {
  name: string;
  category: string;
  description: string;
  usage: string[];
  projectsCount: string;
}

export const TechStack = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillInfo | null>(null);

  const handleSkillClick = (name: string, domain: string) => {
    setSelectedSkill({
      name,
      category: domain,
      description: `Production technical repertoire using ${name} in applied AI engineering pipelines, document processing, and full-stack applications.`,
      usage: [
        `Integrated in verified repository builds`,
        `Production RAG & vector DB architectures`,
        `End-to-end full-stack software integration`
      ],
      projectsCount: "4+"
    });
  };

  return (
    <section id="skills" className="py-4 sm:py-6 relative">
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
              06 / SYSTEM MAP
            </span>
            <span className="h-[1px] w-6 bg-white/10" />
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              TECHNICAL REPERTOIRE MATRIX
            </span>
          </div>
          <div className="mb-2">
            <FoldText
              text="AI SYSTEM MAP"
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
          <p className="font-display font-medium text-base sm:text-lg text-luxury italic mb-4">
            "The tools and concepts I use to turn AI ideas into working systems."
          </p>
        </motion.div>

        {/* Compact Engineering Matrix (~340px Total Height) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_CLUSTERS.map((cluster, idx) => {
            const Icon = cluster.icon;
            return (
              <motion.div
                key={cluster.domain}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-[24px] glass-card border border-line-light flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-line mb-4">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-text">
                      <Icon className={`w-4 h-4 ${cluster.color}`} />
                      <span>{cluster.domain}</span>
                    </div>
                    <ShieldCheck className="w-3.5 h-3.5 text-muted-dark" />
                  </div>

                  {/* Compact Skill Chips Grid */}
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {cluster.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleSkillClick(skill, cluster.domain)}
                        className="px-3 py-1 rounded-full bg-surface hover:bg-surface-2 border border-line-light hover:border-luxury/40 text-text hover:text-luxury transition-all text-[11px] font-medium"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-line flex items-center justify-between font-mono text-[10px] text-muted">
                  <span>PRODUCTION READY</span>
                  <span className="text-luxury">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Skill Detail Window Modal */}
      <SkillWindow skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </section>
  );
};
