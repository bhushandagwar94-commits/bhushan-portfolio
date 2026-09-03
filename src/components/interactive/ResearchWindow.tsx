import { Sparkles, Cpu, BookOpen, Layers, Tag, CheckCircle2, ArrowRight } from 'lucide-react';
import type { ResearchPaper } from '../../data/research';
import { InteractiveWindow } from './InteractiveWindow';

interface ResearchWindowProps {
  paper: ResearchPaper | null;
  onClose: () => void;
}

export const ResearchWindow = ({ paper, onClose }: ResearchWindowProps) => {
  if (!paper) return null;

  return (
    <InteractiveWindow
      isOpen={!!paper}
      onClose={onClose}
      title={paper.title}
      category={`APPLIED RESEARCH // ${paper.number}`}
      maxWidth="max-w-4xl"
    >
      <div className="flex flex-col gap-8 font-body text-text">
        {/* Header Summary & Badges */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-2 border border-line-light flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-luxury font-bold uppercase tracking-widest">{paper.tag}</span>
              <span className="text-muted-dark">/</span>
              <span className="text-accent font-semibold uppercase">{paper.researchType}</span>
            </div>
            <span className="bg-surface border border-line text-muted px-3 py-1 rounded-full text-[11px] font-mono font-semibold">
              {paper.year}
            </span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-text leading-tight">
            {paper.title}
          </h2>

          <div className="font-mono text-xs text-luxury font-medium bg-luxury/10 border border-luxury/20 px-3.5 py-1.5 rounded-full w-fit">
            {paper.category}
          </div>
        </div>

        {/* Overview / Abstract */}
        <div className="p-6 rounded-2xl bg-surface border border-line flex flex-col gap-3">
          <div className="flex items-center gap-2 text-luxury font-mono text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-luxury" />
            <span>OVERVIEW & ABSTRACT</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">{paper.summary}</p>
        </div>

        {/* Research Problem & Proposed Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-surface border border-line flex flex-col gap-3">
            <div className="flex items-center gap-2 text-luxury font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-luxury" />
              <span>RESEARCH PROBLEM</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">{paper.problem}</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-line flex flex-col gap-3">
            <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-accent" />
              <span>PROPOSED APPROACH</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">{paper.approach}</p>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="p-6 rounded-2xl bg-surface border border-line flex flex-col gap-4">
          <div className="flex items-center gap-2 text-luxury font-mono text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-luxury" />
            <span>RESEARCH FOCUS & KEY AREAS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
            {paper.focusAreas.map((area) => (
              <div key={area} className="p-3 rounded-xl bg-surface-2 border border-line-light flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-luxury shrink-0" />
                <span className="text-text font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expected / Proposed Contribution */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex flex-col gap-3 font-mono text-xs">
          <span className="text-accent font-bold uppercase tracking-wider text-[11px]">EXPECTED / PROPOSED CONTRIBUTION:</span>
          <p className="text-muted font-body text-sm leading-relaxed">{paper.contribution}</p>
        </div>

        {/* Key Technologies & Keywords */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-surface border border-line flex flex-col gap-3">
            <span className="font-mono text-xs font-bold text-luxury uppercase tracking-wider">KEY TECHNOLOGIES & CONCEPTS</span>
            <div className="flex flex-wrap gap-2">
              {paper.technologies.map((tech) => (
                <span key={tech} className="font-mono text-xs text-text bg-surface-2 border border-line-light px-3 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-line flex flex-col gap-3">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-accent uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>KEYWORDS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((kw) => (
                <span key={kw} className="font-mono text-xs text-luxury bg-luxury/10 border border-luxury/20 px-3 py-1 rounded-full font-medium">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end pt-4 border-t border-line">
          <button
            onClick={onClose}
            className="flex items-center gap-2 bg-text text-bg hover:bg-white px-6 py-2.5 rounded-full font-mono text-xs font-bold transition-all shadow-lg"
          >
            <span>CLOSE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </InteractiveWindow>
  );
};
