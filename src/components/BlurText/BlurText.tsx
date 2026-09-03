import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Array<Record<string, any>>;
  easing?: string | number[];
  stepDuration?: number;
  onAnimationComplete?: () => void;
}

export const BlurText = ({
  text = '',
  delay = 70,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = [0.25, 0.1, 0.25, 1],
  stepDuration = 0.3,
  onAnimationComplete
}: BlurTextProps) => {
  const elements = useMemo(() => {
    return animateBy === 'words' ? text.split(' ') : text.split('');
  }, [text, animateBy]);

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(() => {
    return direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: -16 }
      : { filter: 'blur(10px)', opacity: 0, y: 16 };
  }, [direction]);

  const defaultTo = useMemo(() => {
    return [{ filter: 'blur(0px)', opacity: 1, y: 0 }];
  }, []);

  const from = animationFrom || defaultFrom;
  const to = animationTo || defaultTo;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={from}
          animate={inView ? to[0] : from}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: easing as any
          }}
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          className="inline-block"
          style={{ willChange: 'transform, filter, opacity' }}
        >
          {element === ' ' ? '\u00A0' : element}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
