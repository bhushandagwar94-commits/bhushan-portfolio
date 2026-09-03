import { useState, useEffect, useRef, useCallback } from 'react';

export type TourState = 'OFF' | 'RUNNING' | 'COMPLETE';

const AUTO_TOUR_SECTIONS = [
  { id: 'hero', delay: 5000 },
  { id: 'about', delay: 5000 },
  { id: 'focus', delay: 4000 },
  { id: 'experience', delay: 5000 },
  { id: 'projects', delay: 7000 },
  { id: 'skills', delay: 4000 },
  { id: 'research', delay: 5000 },
  { id: 'github', delay: 5000 },
  { id: 'terminal', delay: 4000 },
  { id: 'education', delay: 4000 },
  { id: 'certifications', delay: 5000 },
  { id: 'contact', delay: 5000 }
];

interface AutoTourProps {
  onStateChange?: (state: TourState) => void;
  registerTrigger?: (toggleFn: () => void) => void;
}

export const AutoTourController = ({ onStateChange, registerTrigger }: AutoTourProps) => {
  const [tourState, setTourState] = useState<TourState>('OFF');

  const isRunningRef = useRef<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollendCleanupRef = useRef<(() => void) | null>(null);

  const notifyState = useCallback((newState: TourState) => {
    setTourState(newState);
    if (onStateChange) onStateChange(newState);
  }, [onStateChange]);

  const stopTour = useCallback(() => {
    isRunningRef.current = false;

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (scrollendCleanupRef.current) {
      scrollendCleanupRef.current();
      scrollendCleanupRef.current = null;
    }

    notifyState('OFF');
  }, [notifyState]);

  const goToSection = useCallback((index: number) => {
    if (!isRunningRef.current) return;

    if (index >= AUTO_TOUR_SECTIONS.length) {
      isRunningRef.current = false;
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      notifyState('COMPLETE');
      return;
    }

    const { id, delay } = AUTO_TOUR_SECTIONS[index];
    const targetEl = document.getElementById(id);

    if (!targetEl) {
      goToSection(index + 1);
      return;
    }

    if (scrollendCleanupRef.current) {
      scrollendCleanupRef.current();
      scrollendCleanupRef.current = null;
    }

    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

    let delayTimerExecuted = false;
    const startReadingDelay = () => {
      if (delayTimerExecuted || !isRunningRef.current) return;
      delayTimerExecuted = true;

      timerRef.current = setTimeout(() => {
        if (isRunningRef.current) {
          goToSection(index + 1);
        }
      }, delay);
    };

    if ('onscrollend' in window) {
      const handleScrollEnd = () => {
        window.removeEventListener('scrollend', handleScrollEnd);
        scrollendCleanupRef.current = null;
        startReadingDelay();
      };

      window.addEventListener('scrollend', handleScrollEnd, { once: true });
      scrollendCleanupRef.current = () => {
        window.removeEventListener('scrollend', handleScrollEnd);
      };
    }

    // Safety fallback timer if scrollend event is delayed or not supported
    const fallbackDelay = 1200 + delay;
    const fallbackTimer = setTimeout(() => {
      startReadingDelay();
    }, fallbackDelay);

    timerRef.current = fallbackTimer;
  }, [notifyState]);

  const startTour = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    stopTour();

    isRunningRef.current = true;
    notifyState('RUNNING');

    let startIdx = 0;
    let minDistance = Infinity;

    for (let i = 0; i < AUTO_TOUR_SECTIONS.length; i++) {
      const el = document.getElementById(AUTO_TOUR_SECTIONS[i].id);
      if (el) {
        const dist = Math.abs(el.getBoundingClientRect().top);
        if (dist < minDistance) {
          minDistance = dist;
          startIdx = i;
        }
      }
    }

    const nextIdx = startIdx >= AUTO_TOUR_SECTIONS.length - 1 ? 0 : startIdx + 1;
    goToSection(nextIdx);
  }, [stopTour, notifyState, goToSection]);

  const toggleTour = useCallback(() => {
    if (isRunningRef.current) {
      stopTour();
    } else {
      if (tourState === 'COMPLETE') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        stopTour();
      } else {
        startTour();
      }
    }
  }, [tourState, stopTour, startTour]);

  // Register parent button trigger
  useEffect(() => {
    if (registerTrigger) {
      registerTrigger(toggleTour);
    }
  }, [registerTrigger, toggleTour]);

  // User Interruption Handler (Only active when RUNNING)
  useEffect(() => {
    if (tourState !== 'RUNNING') return;

    const handleUserInterrupt = (e: Event) => {
      if (!isRunningRef.current) return;

      if (e.type === 'keydown') {
        const key = (e as KeyboardEvent).key;
        const interruptKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
        if (!interruptKeys.includes(key)) return;
      }

      stopTour();
    };

    const handleVisibilityChange = () => {
      if (document.hidden && isRunningRef.current) {
        stopTour();
      }
    };

    window.addEventListener('wheel', handleUserInterrupt, { passive: true });
    window.addEventListener('touchstart', handleUserInterrupt, { passive: true });
    window.addEventListener('pointerdown', handleUserInterrupt, { passive: true });
    window.addEventListener('keydown', handleUserInterrupt, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchstart', handleUserInterrupt);
      window.removeEventListener('pointerdown', handleUserInterrupt);
      window.removeEventListener('keydown', handleUserInterrupt);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [tourState, stopTour]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      isRunningRef.current = false;
      if (timerRef.current !== null) clearTimeout(timerRef.current);
      if (scrollendCleanupRef.current) scrollendCleanupRef.current();
    };
  }, []);

  return null;
};
