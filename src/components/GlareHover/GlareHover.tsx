import type { CSSProperties, ReactNode } from 'react';
import './GlareHover.css';

export interface GlareHoverProps {
  children?: ReactNode;
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const GlareHover = ({
  children,
  width = 'auto',
  height = 'auto',
  background = 'transparent',
  borderRadius = '16px',
  borderColor = 'transparent',
  glareColor = '#ffffff',
  glareOpacity = 0.12,
  glareAngle = -30,
  glareSize = 180,
  transitionDuration = 700,
  className = '',
  style = {}
}: GlareHoverProps) => {
  return (
    <div
      className={`glare-hover ${className}`.trim()}
      style={
        {
          width,
          height,
          background,
          borderRadius,
          borderColor,
          '--glare-color': glareColor,
          '--glare-opacity': glareOpacity,
          '--glare-angle': `${glareAngle}deg`,
          '--glare-size': `${glareSize}%`,
          '--glare-transition': `${transitionDuration}ms`,
          ...style
        } as CSSProperties
      }
    >
      <div className="glare-hover__glare" aria-hidden="true" />
      <div className="glare-hover__content">{children}</div>
    </div>
  );
};

export default GlareHover;
