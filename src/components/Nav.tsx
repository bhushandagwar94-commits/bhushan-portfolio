import { useState, useEffect } from 'react';
import { Play, Maximize, Minimize } from 'lucide-react';
import type { TourState } from './interactive/AutoTourController';

interface NavProps {
  onToggleAutoTour?: () => void;
  tourState?: TourState;
}

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'System Map' },
  { id: 'research', label: 'Research' },
  { id: 'github', label: 'GitHub Lab' },
  { id: 'terminal', label: 'AI Terminal' },
  { id: 'education', label: 'Academics' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' }
];

export const Nav = ({ onToggleAutoTour, tourState = 'OFF' }: NavProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none max-w-full">
      <nav className="glass-pill pointer-events-auto px-3 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-4 shadow-2xl transition-all duration-300 border border-white/[0.08] hover:border-luxury/30 max-w-[calc(100vw-16px)] sm:max-w-none">
        {/* Brand */}
        <a 
          href="#hero" 
          className="font-display font-bold text-text text-xs sm:text-sm tracking-tight hover:text-luxury transition-colors pl-0.5 sm:pl-1 shrink-0"
        >
          BRD.
        </a>

        <div className="h-3.5 w-[1px] bg-white/10 hidden md:block" />

        {/* Links */}
        <div className="hidden lg:flex items-center gap-4.5 xl:gap-5 text-[13px] font-body font-semibold text-text">
          {NAV_LINKS.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className="relative py-1 hover:text-luxury transition-colors duration-200 group text-shadow-subtle"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="h-3.5 w-[1px] bg-white/10 hidden sm:block" />

        {/* Fullscreen Mode Button */}
        <button
          onClick={toggleFullscreen}
          className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-muted hover:text-text bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 px-3 py-1.5 rounded-full transition-all backdrop-blur-md shrink-0"
          title={isFullscreen ? "Exit Fullscreen Mode" : "Enter Fullscreen Mode"}
          aria-label="Toggle Fullscreen Mode"
        >
          {isFullscreen ? (
            <>
              <Minimize className="w-3 h-3 text-luxury" />
              <span>EXIT FULL</span>
            </>
          ) : (
            <>
              <Maximize className="w-3 h-3 text-luxury" />
              <span>FULLSCREEN</span>
            </>
          )}
        </button>

        {/* AUTO TOUR Control Button */}
        {onToggleAutoTour && (
          <button
            onClick={onToggleAutoTour}
            aria-label="Toggle Auto Tour presentation mode"
            aria-pressed={tourState === 'RUNNING'}
            className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all border backdrop-blur-md shrink-0 ${
              tourState === 'RUNNING'
                ? 'bg-accent/20 border-accent text-accent font-semibold shadow-md'
                : tourState === 'COMPLETE'
                ? 'bg-luxury/20 border-luxury text-luxury font-semibold'
                : 'bg-white/[0.05] hover:bg-white/[0.12] border-white/10 text-muted hover:text-text'
            }`}
            title="Presentation Auto Tour Mode"
          >
            {tourState === 'RUNNING' ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span>TOURING</span>
              </>
            ) : tourState === 'COMPLETE' ? (
              <span>TOUR COMPLETE</span>
            ) : (
              <>
                <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-luxury" />
                <span>AUTO TOUR</span>
              </>
            )}
          </button>
        )}

        {/* Status Pill */}
        <a 
          href="#contact" 
          className="hidden sm:flex items-center gap-1 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-accent bg-accent/10 hover:bg-accent/20 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full transition-colors font-semibold border border-accent/20 shrink-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>OPEN TO WORK</span>
        </a>
      </nav>
    </header>
  );
};
