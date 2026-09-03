import { useState, useEffect, useRef } from 'react';

const MULTILINGUAL_STEPS = [
  { word: "WELCOME", lang: "English", code: "01 / 11", duration: 250, fontClass: "font-display font-black tracking-[0.25em]" },
  { word: "BIENVENUE", lang: "French", code: "02 / 11", duration: 200, fontClass: "font-serif italic font-medium tracking-[0.2em]" },
  { word: "WILLKOMMEN", lang: "German", code: "03 / 11", duration: 200, fontClass: "font-display font-extrabold uppercase tracking-[0.22em]" },
  { word: "BIENVENIDO", lang: "Spanish", code: "04 / 11", duration: 200, fontClass: "font-body font-semibold tracking-[0.2em]" },
  { word: "BENVENUTO", lang: "Italian", code: "05 / 11", duration: 200, fontClass: "font-serif italic font-semibold tracking-[0.22em]" },
  { word: "ようこそ", lang: "Japanese", code: "06 / 11", duration: 200, fontClass: "font-sans font-bold tracking-[0.18em]" },
  { word: "환영합니다", lang: "Korean", code: "07 / 11", duration: 200, fontClass: "font-sans font-bold tracking-[0.18em]" },
  { word: "欢迎", lang: "Chinese", code: "08 / 11", duration: 200, fontClass: "font-sans font-extrabold tracking-[0.25em]" },
  { word: "स्वागत है", lang: "Hindi", code: "09 / 11", duration: 250, fontClass: "font-sans font-bold tracking-[0.15em]" },
  { word: "સ્વાગત છે", lang: "Gujarati", code: "10 / 11", duration: 300, fontClass: "font-gujarati font-extrabold tracking-[0.12em] text-accent drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]", isHighlighted: true },
  { word: "स्वागत आहे", lang: "Marathi", code: "11 / 11", duration: 350, fontClass: "font-marathi font-bold tracking-[0.12em] text-luxury drop-shadow-[0_0_30px_rgba(201,178,124,0.5)]", isHighlighted: true },
];

export const CinematicIntro = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [phase, setPhase] = useState<'LANG' | 'NAME' | 'FADE_OUT' | 'DONE'>('LANG');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle Interactive Mouse Parallax (Desktop Only)
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      setMouseOffset({ x: dx * 5, y: dy * 5 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Timed Multilingual Progression
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('DONE');
      return;
    }

    // Always keep scroll at top during welcome sequence
    window.scrollTo(0, 0);

    let isCancelled = false;

    const runSequence = async () => {
      for (let i = 0; i < MULTILINGUAL_STEPS.length; i++) {
        if (isCancelled) return;
        setStepIndex(i);
        await new Promise((r) => setTimeout(r, MULTILINGUAL_STEPS[i].duration));
      }

      if (isCancelled) return;

      // Reveal Name & Title Phase
      setPhase('NAME');
      await new Promise((r) => setTimeout(r, 750));

      if (isCancelled) return;

      // Smooth Fade-out Phase
      setPhase('FADE_OUT');
      await new Promise((r) => setTimeout(r, 450));

      if (isCancelled) return;

      // Clean Unmount
      setPhase('DONE');
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (phase === 'DONE') return null;

  const currentStep = MULTILINGUAL_STEPS[stepIndex] || MULTILINGUAL_STEPS[0];
  const progressPercent = Math.min(100, Math.round(((stepIndex + 1) / MULTILINGUAL_STEPS.length) * 100));

  return (
    <div
      ref={containerRef}
      className={`welcome-overlay fixed inset-0 z-[99999] bg-[#050508] text-slate-100 flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden h-screen h-[100dvh] transition-opacity duration-500 ${
        phase === 'FADE_OUT' ? 'opacity-0 pointer-events-none scale-[1.02]' : 'opacity-100'
      }`}
    >
      {/* Interactive Ambient Radial Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
          background: 'radial-gradient(650px circle at center, rgba(0, 240, 255, 0.12), rgba(201, 178, 124, 0.06), transparent 70%)'
        }}
      />

      {/* Film Grain Texture */}
      <div className="aurora-noise" />

      {/* Top Header Metadata & Counter */}
      <div className="w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-400 relative z-20">
        <div className="flex items-center gap-2 text-luxury font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>INITIALIZING AI SYSTEM</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400 font-mono tracking-wider">
          <span className="text-luxury font-bold">{currentStep.code}</span>
          <span className="text-slate-600">|</span>
          <span className="uppercase text-[10px]">{currentStep.lang}</span>
        </div>
      </div>

      {/* Center Multilingual Sequence / Name Display */}
      <div
        className="relative z-20 flex-1 flex flex-col items-center justify-center text-center my-auto min-h-[160px] sm:min-h-[220px] transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
        }}
      >
        {phase === 'LANG' ? (
          <div key={stepIndex} className="welcome-step-animate flex flex-col items-center justify-center">
            <h1 className={`text-[clamp(2.2rem,6.5vw,5.5rem)] leading-none ${currentStep.isHighlighted ? '' : 'text-text drop-shadow-[0_0_30px_rgba(255,255,255,0.18)]'} ${currentStep.fontClass}`}>
              {currentStep.word}
            </h1>
            <span className="mt-4 font-mono text-[10px] sm:text-xs text-luxury font-semibold tracking-[0.25em] uppercase opacity-90 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-luxury" />
              <span>{currentStep.lang}</span>
              <span className="w-1 h-1 rounded-full bg-luxury" />
            </span>
          </div>
        ) : (
          <div className="welcome-name-animate flex flex-col items-center justify-center">
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-luxury uppercase font-bold mb-2">
              BHUSHAN RAJENDRA DAGWAR
            </span>
            <h1 className="text-[clamp(2.4rem,7vw,5.8rem)] font-display font-black text-text leading-tight tracking-[0.04em] drop-shadow-[0_0_35px_rgba(201,178,124,0.3)]">
              AI ENGINEER
            </h1>
            <span className="mt-3 font-mono text-[10px] sm:text-xs text-accent font-semibold tracking-[0.2em] uppercase">
              APPLIED LLM & RAG ARCHITECTURES
            </span>
          </div>
        )}
      </div>

      {/* Bottom Progress Line & Skip Action */}
      <div className="w-full flex items-end justify-between relative z-20 font-mono text-[10px] sm:text-[11px]">
        <div className="flex flex-col gap-1.5 max-w-[200px] sm:max-w-[280px] w-full">
          <div className="flex items-center justify-between text-slate-400 font-medium text-[9px] tracking-wider uppercase">
            <span>LANGUAGE INTERFACE</span>
            <span className="text-luxury font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-luxury via-accent to-luxury transition-all duration-200 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => setPhase('DONE')}
          className="group flex items-center gap-1.5 text-slate-400 hover:text-text transition-colors font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10"
        >
          <span>SKIP</span>
          <span className="group-hover:translate-x-0.5 transition-transform text-luxury">→</span>
        </button>
      </div>
    </div>
  );
};

export default CinematicIntro;
