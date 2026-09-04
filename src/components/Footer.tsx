import { profile } from '../data/profile';
import { GITHUB_PROFILE } from '../utils/github';
import { handleEmailClick } from '../utils/email';

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-line text-muted">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-line">
          
          <div className="md:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <img src="/favicon.svg" alt="Royal BD Monogram" className="w-6 h-6 object-contain drop-shadow-[0_0_8px_rgba(201,178,124,0.4)]" />
              <span className="font-display font-bold text-text text-xl tracking-tight">BRD.</span>
            </div>
            <h3 className="font-body font-semibold text-text text-sm mb-1">{profile.name}</h3>
            <p className="font-mono text-[11px] text-luxury tracking-widest uppercase mb-3 font-medium">AI ENGINEER · APPLIED AI & LLM SYSTEMS</p>
            <p className="font-body text-xs text-muted max-w-sm leading-relaxed font-normal">
              Specialized in production LLMs, RAG architectures, machine learning models, and full-stack AI applications.
            </p>
          </div>
          
          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs font-body">
            <span className="font-mono text-[11px] text-text uppercase tracking-wider font-semibold mb-1">Navigation</span>
            <a href="#hero" className="hover:text-text transition-colors">Home</a>
            <a href="#about" className="hover:text-text transition-colors">About</a>
            <a href="#skills" className="hover:text-text transition-colors">Skills</a>
            <a href="#experience" className="hover:text-text transition-colors">Experience</a>
            <a href="#projects" className="hover:text-text transition-colors">Projects</a>
            <a href="#github" className="hover:text-text transition-colors">GitHub Lab</a>
            <a href="#research" className="hover:text-text transition-colors">Research</a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-2.5 text-xs font-body">
            <span className="font-mono text-[11px] text-text uppercase tracking-wider font-semibold mb-1">Connect</span>
            <a 
              href={`mailto:${profile.email}`} 
              onClick={(e) => handleEmailClick(e, profile.email)}
              className="hover:text-luxury transition-colors"
            >
              Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-luxury transition-colors">LinkedIn</a>
            <a href={GITHUB_PROFILE.url} target="_blank" rel="noopener noreferrer" className="hover:text-luxury transition-colors">GitHub (@bhushandagwar94-commits)</a>
            <a href={`tel:${profile.phone}`} className="hover:text-luxury transition-colors">Phone</a>
            <a href={profile.resume} download className="hover:text-luxury transition-colors">Resume</a>
          </div>
          
        </div>
        
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-dark">
          <div>
            &copy; 2026 Bhushan Dagwar. All rights reserved.
          </div>
          <div>
            Engineered with luxury precision & zero compromise.
          </div>
        </div>
      </div>
    </footer>
  );
};
