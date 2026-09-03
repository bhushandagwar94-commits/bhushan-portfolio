import { Award, ExternalLink, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { Certification } from '../../data/certifications';
import { InteractiveWindow } from './InteractiveWindow';

interface CertificationModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificationModal = ({ cert, onClose }: CertificationModalProps) => {
  if (!cert) return null;

  return (
    <InteractiveWindow
      isOpen={!!cert}
      onClose={onClose}
      title={cert.title}
      category="PROFESSIONAL CREDENTIAL"
      maxWidth="max-w-2xl"
    >
      <div className="flex flex-col gap-6 font-body text-text">
        {/* Header Summary */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex flex-col gap-3">
          <div className="flex items-center justify-between font-mono text-xs flex-wrap gap-2">
            <div className="flex items-center gap-2 text-luxury font-bold">
              <Award className="w-4 h-4 text-luxury" />
              <span>{cert.issuer}</span>
            </div>
            <span className="bg-surface border border-line text-muted px-3 py-1 rounded-full text-[11px] font-mono font-semibold">
              {cert.displayDate}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-text leading-snug">
            {cert.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {cert.isElite && (
              <span className="font-mono text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                NPTEL ELITE STAMP
              </span>
            )}
            {cert.score && (
              <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full font-bold">
                SCORE: {cert.score}
              </span>
            )}
            {cert.credentialId && (
              <span className="font-mono text-xs text-muted bg-surface border border-line px-3 py-1 rounded-full">
                ID: {cert.credentialId}
              </span>
            )}
          </div>
        </div>

        {/* NPTEL Detailed Achievement Breakdown */}
        {cert.nptelDetails && (
          <div className="p-5 rounded-2xl bg-surface border border-line flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-luxury font-bold uppercase border-b border-line pb-2">
              <ShieldCheck className="w-4 h-4 text-luxury" />
              <span>NPTEL OFFICIAL CONSOLIDATED SCORE SHEET</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-surface-2 border border-line-light">
                <span className="text-muted block text-[10px] uppercase mb-0.5">ONLINE ASSIGNMENTS</span>
                <span className="text-text font-bold text-sm">{cert.nptelDetails.assignmentsScore}</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-2 border border-line-light">
                <span className="text-muted block text-[10px] uppercase mb-0.5">PROCTORED EXAM</span>
                <span className="text-text font-bold text-sm">{cert.nptelDetails.examScore}</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-2 border border-line-light">
                <span className="text-muted block text-[10px] uppercase mb-0.5">CREDITS RECOMMENDED</span>
                <span className="text-accent font-bold text-sm">{cert.nptelDetails.creditsRecommended} Credits</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-2 border border-line-light">
                <span className="text-muted block text-[10px] uppercase mb-0.5">TOTAL CERTIFIED CANDIDATES</span>
                <span className="text-luxury font-bold text-sm">{cert.nptelDetails.totalCandidatesCertified}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-line text-[11px] text-muted space-y-1 font-mono">
              <div><strong className="text-text">ROLL NO:</strong> {cert.nptelDetails.rollNo}</div>
              <div><strong className="text-text">FUNDED BY:</strong> {cert.nptelDetails.fundedBy}</div>
              <div><strong className="text-text">COURSE DURATION:</strong> {cert.nptelDetails.courseDuration}</div>
              <div><strong className="text-text">COORDINATOR:</strong> {cert.nptelDetails.coordinator}</div>
              {cert.nptelDetails.platform && (
                <div><strong className="text-text">PLATFORM:</strong> {cert.nptelDetails.platform}</div>
              )}
            </div>
          </div>
        )}

        {/* Tags & Skills */}
        <div className="p-5 rounded-2xl bg-surface border border-line flex flex-col gap-3">
          <span className="font-mono text-xs font-bold text-luxury uppercase tracking-wider">VERIFIED DOMAIN SKILLS</span>
          <div className="flex flex-wrap gap-2">
            {cert.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs text-text bg-surface-2 border border-line-light px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-luxury" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-line font-mono text-xs">
          <div>
            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-luxury text-bg font-bold px-5 py-2.5 rounded-full transition-all shadow-md hover:bg-white"
              >
                <span>VERIFY CREDENTIAL ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-muted-dark text-[11px]">INSTITUTION VERIFIED</span>
            )}
          </div>

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
