import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { X, ExternalLink, GitBranch } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12"
      >
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-xl" 
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ y: 50, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#080B10] border border-white/10 rounded-sm overflow-hidden flex flex-col shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet" />
          
          {/* Header */}
          <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/5">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2 block">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">
                {project.title}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-secondary group-hover:text-primary" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-6 md:p-12 flex-1 scroll-smooth">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               
               {/* Left Column - Details */}
               <div className="col-span-1 lg:col-span-2 space-y-16">
                 
                 <section>
                   <h3 className="text-sm font-mono tracking-widest text-secondary mb-6 border-b border-white/10 pb-2 uppercase">
                     01 — OVERVIEW
                   </h3>
                   <p className="text-primary/90 text-lg leading-relaxed font-light">
                     {project.description}
                   </p>
                 </section>

                 <section>
                   <h3 className="text-sm font-mono tracking-widest text-secondary mb-6 border-b border-white/10 pb-2 uppercase">
                     02 — KEY FEATURES
                   </h3>
                   <ul className="space-y-4">
                     {project.features.map((feature, i) => (
                       <li key={i} className="flex items-start">
                         <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan mr-4 shrink-0 shadow-[0_0_8px_#06b6d4]" />
                         <span className="text-primary/80 leading-relaxed">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </section>

                 {/* Custom Architectures */}
                 {project.id === 'proj-1' && (
                   <section>
                     <h3 className="text-sm font-mono tracking-widest text-secondary mb-6 border-b border-white/10 pb-2 uppercase">
                       03 — ARCHITECTURE
                     </h3>
                     <div className="flex flex-wrap items-center gap-2 p-6 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden">
                       <motion.div 
                         className="absolute w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_15px_#06b6d4] z-10"
                         animate={{ x: ['0%', '800%'] }}
                         transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                       />
                       {['SOURCE FILE', 'DATA EXTRACTION', 'DOCUMENT PROCESSING', 'EMBEDDINGS', 'VECTOR SEARCH', 'RAG RETRIEVAL', 'LLM DRAFTING', 'QUALITY CHECK', 'DOCX REPORT'].map((step, i, arr) => (
                         <React.Fragment key={step}>
                           <div className="text-[9px] font-mono tracking-widest bg-[#05070A] border border-white/10 px-3 py-2 text-primary/80 relative z-20">
                             {step}
                           </div>
                           {i < arr.length - 1 && <span className="text-secondary text-xs">→</span>}
                         </React.Fragment>
                       ))}
                     </div>
                   </section>
                 )}

                 {project.id === 'proj-2' && (
                   <section>
                     <h3 className="text-sm font-mono tracking-widest text-secondary mb-6 border-b border-white/10 pb-2 uppercase">
                       03 — ARCHITECTURE
                     </h3>
                     <div className="flex flex-wrap items-center gap-2 p-6 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden">
                       <motion.div 
                         className="absolute w-2 h-2 bg-accent-violet rounded-full shadow-[0_0_15px_#8b5cf6] z-10"
                         animate={{ x: ['0%', '600%'] }}
                         transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                       />
                       {['USER', 'QUERY', 'PROMPT WORKFLOW', 'RETRIEVAL', 'LLM', 'INDUSTRIAL ANALYSIS'].map((step, i, arr) => (
                         <React.Fragment key={step}>
                           <div className="text-[9px] font-mono tracking-widest bg-[#05070A] border border-white/10 px-3 py-2 text-primary/80 relative z-20">
                             {step}
                           </div>
                           {i < arr.length - 1 && <span className="text-secondary text-xs">→</span>}
                         </React.Fragment>
                       ))}
                     </div>
                   </section>
                 )}

                 {project.id === 'proj-3' && (
                   <section>
                     <h3 className="text-sm font-mono tracking-widest text-secondary mb-6 border-b border-white/10 pb-2 uppercase">
                       03 — ARCHITECTURE
                     </h3>
                     <div className="flex flex-wrap items-center gap-2 p-6 bg-white/5 border border-white/5 rounded-sm relative overflow-hidden">
                       <motion.div 
                         className="absolute w-2 h-2 bg-accent-blue rounded-full shadow-[0_0_15px_#3b82f6] z-10"
                         animate={{ x: ['0%', '500%'] }}
                         transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                       />
                       {['DATA', 'PREPROCESSING', 'FEATURE ENGINEERING', 'REGRESSION', 'EVALUATION', 'PREDICTION'].map((step, i, arr) => (
                         <React.Fragment key={step}>
                           <div className="text-[9px] font-mono tracking-widest bg-[#05070A] border border-white/10 px-3 py-2 text-primary/80 relative z-20">
                             {step}
                           </div>
                           {i < arr.length - 1 && <span className="text-secondary text-xs">→</span>}
                         </React.Fragment>
                       ))}
                     </div>
                   </section>
                 )}
                 
               </div>

               {/* Right Column - Meta */}
               <div className="col-span-1 space-y-12">
                 <section className="bg-white/5 p-8 border border-white/5 rounded-sm">
                   <h3 className="text-sm font-mono tracking-widest text-secondary mb-6 uppercase">
                     TECHNOLOGY
                   </h3>
                   <div className="flex flex-wrap gap-2">
                     {project.technologies.map((tech) => (
                       <span 
                         key={tech} 
                         className="text-[10px] uppercase tracking-widest bg-[#05070A] border border-white/10 px-3 py-1.5 rounded-sm text-primary/80"
                       >
                         {tech}
                       </span>
                     ))}
                   </div>
                 </section>
                 
                 {(project.github || project.demo) && (
                   <section>
                     <h3 className="text-sm font-mono tracking-widest text-secondary mb-6 border-b border-white/10 pb-2 uppercase">
                       LINKS
                     </h3>
                     <div className="flex flex-col space-y-4">
                       {project.github && (
                         <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm text-primary hover:text-accent-cyan transition-colors group">
                           <GitBranch className="w-4 h-4" />
                           <span className="tracking-widest uppercase">View Repository</span>
                         </a>
                       )}
                       {project.demo && (
                         <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm text-primary hover:text-accent-cyan transition-colors group">
                           <ExternalLink className="w-4 h-4" />
                           <span className="tracking-widest uppercase">Live Demo</span>
                         </a>
                       )}
                     </div>
                   </section>
                 )}
               </div>

             </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
