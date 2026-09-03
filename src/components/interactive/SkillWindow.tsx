import { Cpu, CheckCircle2, FolderGit2 } from 'lucide-react';
import { InteractiveWindow } from './InteractiveWindow';

interface SkillInfo {
  name: string;
  category: string;
  description: string;
  usage: string[];
  projectsCount: string;
}

interface SkillWindowProps {
  skill: SkillInfo | null;
  onClose: () => void;
}

export const SkillWindow = ({ skill, onClose }: SkillWindowProps) => {
  if (!skill) return null;

  return (
    <InteractiveWindow
      isOpen={!!skill}
      onClose={onClose}
      title={`${skill.name} — TECHNICAL NODE`}
      category="SKILL INTELLIGENCE"
      maxWidth="max-w-2xl"
    >
      <div className="flex flex-col gap-6 font-body">
        {/* Header summary */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text">{skill.name}</h3>
              <p className="font-mono text-xs text-luxury font-medium mt-0.5">{skill.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface border border-line px-3.5 py-1.5 rounded-full font-mono text-xs text-muted">
            <FolderGit2 className="w-3.5 h-3.5 text-luxury" />
            <span>{skill.projectsCount} APPLIED PROJECTS</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm text-text uppercase tracking-wider mb-2">Core Overview</h4>
          <p className="text-sm text-muted leading-relaxed">{skill.description}</p>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm text-text uppercase tracking-wider mb-3">Applied Architecture Usage</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            {skill.usage.map((use, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-surface border border-line flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-luxury shrink-0" />
                <span className="text-text">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InteractiveWindow>
  );
};
