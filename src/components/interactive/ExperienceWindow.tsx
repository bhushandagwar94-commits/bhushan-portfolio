import { Building2, MapPin, Calendar, FileText } from 'lucide-react';
import { InteractiveWindow } from './InteractiveWindow';

export interface ExperienceItem {
  num: string;
  role: string;
  company: string;
  location: string;
  date: string;
  badge: string;
  arrangement: string;
  description: string;
  skills: string[];
  attachment?: string;
}

interface ExperienceWindowProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export const ExperienceWindow = ({ experience, onClose }: ExperienceWindowProps) => {
  if (!experience) return null;

  return (
    <InteractiveWindow
      isOpen={!!experience}
      onClose={onClose}
      title={`${experience.role} — ${experience.company}`}
      category="EXPERIENCE DETAILS"
      maxWidth="max-w-3xl"
    >
      <div className="flex flex-col gap-6 font-body">
        {/* Header Summary */}
        <div className="p-6 rounded-2xl bg-surface-2 border border-line-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center shrink-0 font-mono font-bold text-sm">
              {experience.num}
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-text">{experience.role}</h3>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted mt-1">
                <span className="flex items-center gap-1 text-text font-medium">
                  <Building2 className="w-3.5 h-3.5 text-luxury" />
                  {experience.company}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {experience.location} ({experience.arrangement})
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>{experience.date}</span>
          </div>
        </div>

        {/* Overview & Description */}
        <div>
          <h4 className="font-display font-bold text-sm text-text uppercase tracking-wider mb-3">
            Overview & Deliverables
          </h4>
          <div className="p-5 rounded-2xl bg-surface border border-line">
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {experience.description}
            </p>
          </div>
        </div>

        {/* Attachment Document Badge if present */}
        {experience.attachment && (
          <div className="p-4 rounded-xl bg-luxury/10 border border-luxury/30 flex items-center justify-between font-mono text-xs text-luxury font-bold">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-luxury" />
              <span>OFFICIAL ATTACHMENT: {experience.attachment}</span>
            </div>
            <span className="text-accent text-[11px] bg-accent/10 px-2.5 py-0.5 rounded-full">VERIFIED</span>
          </div>
        )}

        {/* Technical Skills & Capabilities */}
        <div className="pt-4 border-t border-line flex flex-wrap gap-2">
          <span className="font-mono text-xs text-muted-dark uppercase tracking-widest block w-full mb-1">
            KEY SKILLS & COMPETENCIES:
          </span>
          {experience.skills.map((s) => (
            <span key={s} className="font-mono text-xs font-semibold text-luxury bg-luxury/10 border border-luxury/30 px-3 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>
    </InteractiveWindow>
  );
};
