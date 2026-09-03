import { ArrowRight, CheckCircle2, Cpu, Sparkles, ExternalLink, Info, AlertTriangle } from 'lucide-react';
import { type Project } from '../../data/projects';
import { InteractiveWindow } from './InteractiveWindow';
import { ProjectArchitectureDiagram } from './ProjectArchitectureDiagram';

interface ProjectCaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudy = ({ project, onClose }: ProjectCaseStudyProps) => {
  if (!project) return null;

  return (
    <InteractiveWindow
      isOpen={!!project}
      onClose={onClose}
      title={project.title}
      category={`CASE STUDY // ${project.number}`}
      maxWidth="max-w-4xl"
    >
      <div className="flex flex-col gap-8 font-body">
        {/* Header Summary & Badges */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-2 border border-line-light flex flex-col gap-4">
          <div className="flex items-center justify-between font-mono text-xs flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-luxury font-semibold uppercase tracking-widest">PROJECT {project.number}</span>
              <span className="text-muted-dark">/</span>
              <span className="text-accent font-semibold uppercase">{project.category}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider ${
                project.ownership === 'FORK / CONTRIBUTION'
                  ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                  : 'bg-luxury/10 border-luxury/30 text-luxury'
              }`}>
                {project.ownership}
              </span>
              <span className="bg-surface border border-line text-muted px-3 py-1 rounded-full text-[11px] font-semibold uppercase">
                {project.status}
              </span>
            </div>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-text leading-tight">
            {project.title}
          </h2>

          <p className="font-body text-base sm:text-lg text-muted leading-relaxed">
            {project.longDescription || project.shortDescription}
          </p>

          {/* Fork Disclosure Warning */}
          {project.ownership === 'FORK / CONTRIBUTION' && (
            <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 font-mono text-xs flex items-start gap-2.5">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>FORK DISCLOSURE:</strong> This repository is a public fork of Mintplex Labs AnythingLLM platform used for exploring document retrieval, local vector embeddings, and LLM workspace configurations. Base platform ownership belongs to the original maintainers.
              </span>
            </div>
          )}

          {/* Source Unverified Caution */}
          {project.sourceStatus === 'UNVERIFIED' && (
            <div className="p-4 rounded-xl bg-surface border border-line text-muted font-mono text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-luxury shrink-0 mt-0.5" />
              <span>
                <strong>SOURCE UNVERIFIED:</strong> Repository source is currently private or restricted. Case study structure is preserved pending public access verification.
              </span>
            </div>
          )}

          {/* Technology Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <span key={t} className="font-mono text-xs font-medium text-luxury bg-luxury/10 border border-luxury/20 px-3.5 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-surface border border-line flex flex-col gap-3">
            <div className="flex items-center gap-2 text-luxury font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-luxury" />
              <span>THE OPERATIONAL PROBLEM</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-line flex flex-col gap-3">
            <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-accent" />
              <span>THE SYSTEM APPROACH & SOLUTION</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Interactive Architecture Diagram */}
        <ProjectArchitectureDiagram nodes={project.architectureNodes} />

        {/* Verified Engineering Highlights */}
        {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
          <div>
            <h3 className="font-display font-bold text-sm text-text uppercase tracking-wider mb-4">
              KEY ENGINEERING HIGHLIGHTS & DELIVERABLES
            </h3>
            <div className="space-y-3 font-body">
              {project.engineeringHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface border border-line flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury shrink-0 mt-0.5" />
                  <span className="text-sm text-muted leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lab Note */}
        {project.labNote && (
          <div className="p-4 rounded-xl bg-surface-2 border border-line-light font-mono text-xs text-muted">
            <span className="text-luxury font-semibold uppercase block mb-1">PORTFOLIO LAB NOTE:</span>
            <span>{project.labNote}</span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-line font-mono text-xs">
          <div className="text-muted flex items-center gap-2">
            <span>REPOSITORY: {project.repositoryOwner ? `${project.repositoryOwner}/${project.repositoryName}` : 'UNVERIFIED / SOURCE PENDING'}</span>
            <span>·</span>
            <span className="text-accent">{project.sourceStatus}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LAUNCH"
                className="flex items-center gap-2 bg-luxury text-bg font-bold px-5 py-2.5 rounded-full transition-all shadow-md"
              >
                <span>LAUNCH DEMO ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="VIEW SOURCE"
                className="flex items-center gap-2 bg-surface-2 border border-line-light hover:border-luxury text-text hover:text-luxury px-5 py-2.5 rounded-full font-bold transition-all"
              >
                <span>VIEW SOURCE ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : null}

            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="flex items-center gap-2 bg-text text-bg hover:bg-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg"
            >
              <span>CLOSE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </InteractiveWindow>
  );
};
