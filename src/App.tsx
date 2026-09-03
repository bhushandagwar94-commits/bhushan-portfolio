import { useState, useRef, useCallback } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Focus } from './sections/Focus';
import { TechStack } from './sections/TechStack';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { GithubLab } from './sections/GithubLab';
import { Research } from './sections/Research';
import { BhushanAITerminal } from './sections/BhushanAITerminal';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CinematicBanner } from './sections/CinematicBanner';
import { WhyWorkWithMe } from './sections/WhyWorkWithMe';
import { Contact } from './sections/Contact';
import { InteractiveAuroraBackground } from './components/InteractiveAuroraBackground';
import { CommandPalette } from './components/CommandPalette';
import { SmoothScroll } from './components/interactive/SmoothScroll';
import { CinematicIntro } from './components/interactive/CinematicIntro';
import { ResumeWindow } from './components/interactive/ResumeWindow';
import { GithubWindow } from './components/interactive/GithubWindow';
import { AutoTourController, type TourState } from './components/interactive/AutoTourController';
import { SectionDivider } from './components/SectionDivider';
import './styles/interactive-background.css';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGithubOpen, setIsGithubOpen] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [tourState, setTourState] = useState<TourState>('OFF');

  const tourTriggerRef = useRef<(() => void) | null>(null);

  const handleRegisterTourTrigger = useCallback((triggerFn: () => void) => {
    tourTriggerRef.current = triggerFn;
  }, []);

  const handleToggleAutoTour = useCallback(() => {
    if (tourTriggerRef.current) {
      tourTriggerRef.current();
    }
  }, []);

  return (
    <SmoothScroll>
      <div className="portfolio-root bg-bg text-text min-h-screen selection:bg-luxury/20 selection:text-text font-body relative">
        
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Cinematic Intro Opening Sequence */}
        <CinematicIntro />

        {/* Single Global GhostFibers Background Engine */}
        <InteractiveAuroraBackground />

        <div className="portfolio-content">
          {/* Resume Preview Modal */}
          <ResumeWindow 
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />

          {/* GitHub Command Center Window */}
          <GithubWindow 
            isOpen={isGithubOpen}
            onClose={() => setIsGithubOpen(false)}
          />

          {/* Cmd+K Command Palette */}
          <CommandPalette 
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            recruiterMode={recruiterMode}
            onToggleRecruiterMode={() => setRecruiterMode(prev => !prev)}
            onOpenGithubWindow={() => setIsGithubOpen(true)}
          />

          {/* Floating Navigation Header */}
          <Nav 
            onToggleAutoTour={handleToggleAutoTour}
            tourState={tourState}
          />

          {/* Presentation Auto Tour Controller */}
          <AutoTourController 
            onStateChange={setTourState}
            registerTrigger={handleRegisterTourTrigger}
          />

          {/* Main Portfolio Continuous Narrative Flow */}
          <main className="flex flex-col relative w-full max-w-none overflow-hidden pt-12 sm:pt-16">
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Focus />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Projects />
            <CinematicBanner />
            <TechStack />
            <SectionDivider />
            <Research />
            <SectionDivider />
            <GithubLab />
            <SectionDivider />
            <BhushanAITerminal />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Certifications />
            <SectionDivider />
            <WhyWorkWithMe />
            <SectionDivider />
            <Contact onOpenResume={() => setIsResumeOpen(true)} />
          </main>

          {/* Minimal Signature Footer */}
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
