import { FileText, Download, ExternalLink } from 'lucide-react';
import { profile } from '../../data/profile';
import { InteractiveWindow } from './InteractiveWindow';

interface ResumeWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeWindow = ({ isOpen, onClose }: ResumeWindowProps) => {
  return (
    <InteractiveWindow
      isOpen={isOpen}
      onClose={onClose}
      title="BHUSHAN RAJENDRA DAGWAR — RESUME PREVIEW"
      category="DOCUMENT PREVIEW"
      maxWidth="max-w-3xl"
    >
      <div className="flex flex-col gap-6">
        {/* Header Document Summary */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-text">Bhushan Rajendra Dagwar — AI Engineer CV</h3>
              <p className="font-mono text-xs text-muted">Applied AI & LLM Systems · Wardha, India</p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-surface border border-line-light hover:border-luxury text-text px-4 py-2.5 rounded-full text-xs font-mono font-medium transition-all"
            >
              <span>VIEW IN TAB</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={profile.resume}
              download
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-text text-bg hover:bg-white px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all shadow-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        </div>

        {/* Quick Highlights Summary */}
        <div className="space-y-4 font-body">
          <h4 className="font-display font-bold text-sm text-text uppercase tracking-wider">Executive Overview</h4>
          <p className="text-sm text-muted leading-relaxed">
            AI Engineer with hands-on commercial internship experience at SEE-Tech Solutions architecting end-to-end RAG pipelines, LLM prompt engineering, Python backends, and document processing systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface border border-line">
              <span className="font-mono text-[10px] text-luxury uppercase block mb-1">Education</span>
              <span className="font-body text-sm font-semibold text-text block">B.Tech, AI & Data Science</span>
              <span className="font-mono text-xs text-muted">DMIHER (2024 — 2027)</span>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-line">
              <span className="font-mono text-[10px] text-luxury uppercase block mb-1">Key Experience</span>
              <span className="font-body text-sm font-semibold text-text block">Junior AI Engineer Intern (6 Mos)</span>
              <span className="font-mono text-xs text-muted">SEE-Tech Solutions Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </InteractiveWindow>
  );
};
