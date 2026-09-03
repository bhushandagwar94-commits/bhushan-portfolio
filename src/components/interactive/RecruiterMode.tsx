import { useState, useEffect } from 'react';
import { Play, Pause, FastForward } from 'lucide-react';

interface RecruiterModeProps {
  isActive: boolean;
  onToggle: () => void;
}

const TOUR_SECTIONS = [
  { id: 'about', label: '1. Summary & Philosophy' },
  { id: 'focus', label: '2. Core Expertise' },
  { id: 'skills', label: '3. Technical Repertoire' },
  { id: 'experience', label: '4. Industry Experience' },
  { id: 'projects', label: '5. Key AI Projects' },
  { id: 'contact', label: '6. Resume & Contact' }
];

export const RecruiterMode = ({ isActive, onToggle }: RecruiterModeProps) => {
  const [isTourRunning, setIsTourRunning] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  useEffect(() => {
    if (!isTourRunning) return;

    const currentSec = TOUR_SECTIONS[tourStep];
    const el = document.getElementById(currentSec.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    const timer = setTimeout(() => {
      if (tourStep < TOUR_SECTIONS.length - 1) {
        setTourStep(prev => prev + 1);
      } else {
        setIsTourRunning(false);
        setTourStep(0);
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [isTourRunning, tourStep]);

  const handleStartTour = () => {
    setTourStep(0);
    setIsTourRunning(true);
  };

  const handleStopTour = () => {
    setIsTourRunning(false);
  };

  if (!isActive) return null;

  return (
    <div className="fixed bottom-20 right-6 z-float font-mono text-xs">
      <div className="glass-pill p-3.5 rounded-2xl border border-luxury/40 bg-[#0A0A0C]/90 shadow-2xl flex flex-col gap-2.5 max-w-xs">
        <div className="flex items-center justify-between border-b border-line pb-2">
          <div className="flex items-center gap-2 text-luxury font-bold">
            <span className="w-2 h-2 rounded-full bg-luxury animate-pulse" />
            <span>RECRUITER OVERVIEW</span>
          </div>
          <button
            onClick={onToggle}
            className="text-[10px] text-muted hover:text-text underline"
          >
            CLOSE
          </button>
        </div>

        <p className="text-[11px] font-body text-muted leading-relaxed">
          Quick access mode highlighting Bhushan's credentials, project impact, and contact links.
        </p>

        {isTourRunning ? (
          <div className="flex items-center justify-between p-2 rounded-xl bg-luxury/10 border border-luxury/30">
            <div className="flex items-center gap-2 text-luxury text-[11px]">
              <FastForward className="w-3.5 h-3.5 animate-pulse" />
              <span>{TOUR_SECTIONS[tourStep].label}</span>
            </div>
            <button
              onClick={handleStopTour}
              className="p-1 rounded bg-luxury/20 text-luxury hover:bg-luxury/30"
              title="Pause Tour"
            >
              <Pause className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleStartTour}
            className="w-full flex items-center justify-center gap-2 bg-luxury text-bg font-bold py-2 rounded-xl hover:bg-white transition-all shadow-md text-[11px]"
          >
            <Play className="w-3.5 h-3.5" />
            <span>START 2-MIN GUIDED TOUR</span>
          </button>
        )}
      </div>
    </div>
  );
};
