import { useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type Project } from '../data/projects';
import { ProjectCaseStudy } from '../components/interactive/ProjectCaseStudy';
import { ProjectVisual } from '../components/interactive/ProjectVisual';
import FoldText from '../components/FoldText';
import BlurText from '../components/BlurText';
import GlareHover from '../components/GlareHover';

const FILTERS = ['ALL', 'FEATURED', 'AI / LLM', 'RAG', 'OCR', 'SEARCH', 'FULL STACK', 'OPEN SOURCE', 'EXPERIMENTS'];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = PROJECTS_DATA.filter(p => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FEATURED') return p.featured;
    if (activeFilter === 'OPEN SOURCE') return p.githubMeta?.visibility === 'Public' || p.githubMeta?.visibility === 'Public Fork';
    if (activeFilter === 'EXPERIMENTS') return p.status === 'EXPERIMENT' || p.status === 'PROTOTYPE';
    return p.category.toUpperCase() === activeFilter.toUpperCase();
  });

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--card-x', `${x}px`);
    e.currentTarget.style.setProperty('--card-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Narrative Transition Statement & Compact Header */}
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
                05 / PROJECT LAB
              </span>
              <span className="h-[1px] w-6 bg-white/10" />
              <span className="font-mono text-[10px] text-accent tracking-wider uppercase font-semibold">
                HERO OF THE MIDDLE
              </span>
            </div>

            <div className="font-mono text-[11px] text-luxury bg-luxury/10 border border-luxury/20 px-3 py-0.5 rounded-full font-bold">
              08 BUILDS
            </div>
          </div>

          <div className="mb-2">
            <FoldText
              text="PROJECT LAB"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.04}
              fontSize="clamp(2rem, 4vw, 3rem)"
              fontWeight={800}
              color="#F8FAFC"
            />
          </div>
          
          {/* Narrative Transition Statement */}
          <p className="font-display font-medium text-base sm:text-lg text-luxury italic mb-4">
            "From data workflows to intelligent systems — here are the things I've actually built."
          </p>

          <p className="font-body text-text font-medium text-xs sm:text-sm max-w-2xl mb-6 leading-relaxed">
            Curated systems, experiments, and open-source contributions derived from my real GitHub repositories.
          </p>

          {/* Compact Category Filter Pills */}
          <div className="flex items-center gap-2 font-mono text-xs overflow-x-auto no-scrollbar pb-1 -mx-2 px-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-full border shrink-0 transition-all duration-200 text-[11px] ${
                  activeFilter === f
                    ? 'bg-luxury text-bg border-luxury font-bold shadow-md'
                    : 'bg-surface-2 border-line-light text-muted hover:text-text hover:border-luxury/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Compact 2/3-Column Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                onMouseMove={handleCardMouseMove}
                onClick={() => setActiveProject(project)}
                className="p-5 sm:p-6 rounded-[24px] glass-card glass-card-hover flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-line-light min-h-[300px]"
                style={{
                  backgroundImage: 'radial-gradient(circle 350px at var(--card-x, 50%) var(--card-y, 50%), rgba(90, 200, 250, 0.05) 0%, transparent 80%)'
                }}
              >
                <div>
                  {/* Top Bar Header */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-line">
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-luxury font-bold tracking-widest">{project.number}</span>
                      <span className="text-muted-dark">/</span>
                      <span className="text-accent uppercase tracking-wider font-semibold text-[10px] truncate max-w-[100px]">{project.category}</span>
                    </div>

                    <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border uppercase ${
                      project.ownership === 'FORK / CONTRIBUTION'
                        ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                        : 'bg-luxury/10 border-luxury/30 text-luxury'
                    }`}>
                      {project.ownership}
                    </span>
                  </div>

                  {/* Compact DOM Visual */}
                  <div className="mb-3.5">
                    <GlareHover
                      borderRadius="16px"
                      glareColor="#00F0FF"
                      glareOpacity={0.14}
                      glareSize={200}
                      transitionDuration={600}
                    >
                      <ProjectVisual type={project.visualType} title={project.title} />
                    </GlareHover>
                  </div>

                  {/* Title (Strongest Visual Element) */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-text mb-1.5 group-hover:text-luxury transition-colors duration-300 line-clamp-1">
                    <BlurText text={project.title} delay={45} animateBy="words" direction="top" stepDuration={0.3} />
                  </h3>

                  {/* Short 1-Line Description Teaser */}
                  <p className="font-body text-xs text-muted leading-relaxed mb-3 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips (3 Max) */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.technologies.slice(0, 3).map(t => (
                      <span key={t} className="font-mono text-[10px] text-muted/90 bg-surface border border-line-light px-2.5 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-[10px] text-muted-dark bg-surface border border-line-light px-2 py-0.5 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom Action Triggers */}
                  <div className="pt-2.5 border-t border-line flex items-center justify-between font-mono text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="flex items-center gap-1.5 bg-text text-bg hover:bg-white px-3.5 py-1.5 rounded-full font-bold text-[11px] transition-all shadow-md"
                    >
                      <span>EXPLORE ↗</span>
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-[11px] text-muted hover:text-luxury transition-colors"
                        title="View GitHub Repository"
                      >
                        <span>GITHUB ↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Full Project Case Study Modal */}
      <ProjectCaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
