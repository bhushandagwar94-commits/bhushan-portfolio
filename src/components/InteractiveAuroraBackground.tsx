import GhostFibers from './GhostFibers';

export const InteractiveAuroraBackground = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const ghostFibersProps = {
    lineColor: '#140E35',
    glowColor: '#3437A0',
    speed: isMobile ? 0.08 : 0.12,
    scale: 2.2,
    rotation: 0,
    rotationSpeed: 0.08,
    layers: isMobile ? 2 : 3,
    waveAmplitude: 0.012,
    waveFrequency: 3,
    waveSpeed: 0.08,
    layerSpeed: 0.05,
    twist: 0.08,
    twistFrequency: 5,
    twistSpeed: 0.8,
    lineFrequency: 5,
    lineSpacing: 2,
    lineSharpness: 16,
    glowFalloff: 10,
    glowIntensity: 1.2,
    brightness: 1.5,
    blueBoost: 1.15,
    vignette: 0.85,
    grain: 0.025,
    lightMode: false,
    dpr: isMobile ? 0.75 : 1,
    fps: isMobile ? 24 : 30
  };

  return (
    <div className="global-ghost-background" aria-hidden="true">
      <GhostFibers {...ghostFibersProps} />
      <div className="global-background-overlay" />
    </div>
  );
};
