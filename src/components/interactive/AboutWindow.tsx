import { User, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { InteractiveWindow } from './InteractiveWindow';

interface AboutWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutWindow = ({ isOpen, onClose }: AboutWindowProps) => {
  return (
    <InteractiveWindow
      isOpen={isOpen}
      onClose={onClose}
      title="ABOUT BHUSHAN RAJENDRA DAGWAR — DETAILED BACKGROUND"
      category="ENGINEER PROFILE"
      maxWidth="max-w-4xl"
    >
      <div className="flex flex-col gap-8">
        {/* Profile Card Header */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center shrink-0">
              <User className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text">{personalInfo.name}</h3>
              <p className="font-mono text-xs text-luxury font-medium mt-0.5">{personalInfo.title}</p>
              <p className="font-mono text-[11px] text-muted mt-1">{personalInfo.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full font-mono text-xs text-accent">
            <Sparkles className="w-4 h-4" />
            <span>AVAILABLE FOR FULL-TIME / CONTRACT</span>
          </div>
        </div>

        {/* Detailed Philosophy & Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
          <div>
            <h4 className="font-display font-bold text-sm text-text uppercase tracking-wider mb-3">
              Engineering Background
            </h4>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <p className="text-sm text-muted/80 leading-relaxed">
              My technical approach centers on precision and reliability: replacing black-box guesswork with grounded retrieval, multi-step prompt schemas, and sub-second full-stack service delivery.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm text-text uppercase tracking-wider">
              Working Principles
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-surface border border-line flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-luxury shrink-0" />
                <span className="text-text">Deterministic Schema Validation</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface border border-line flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-luxury shrink-0" />
                <span className="text-text">Context-Grounded Zero Numerical Hallucination</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface border border-line flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-luxury shrink-0" />
                <span className="text-text">End-to-End React, Node & Python Integration</span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface border border-line flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-luxury shrink-0" />
                <span className="text-text">Production High-Uptime Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveWindow>
  );
};
