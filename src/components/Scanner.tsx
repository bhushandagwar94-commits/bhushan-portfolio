import { useEffect, useRef } from 'react';
import { Mesh, Program, Renderer, Triangle } from 'ogl';
import './Scanner.css';

const hexToRgb = (hex: string): [number, number, number] => {
  const value = hex.trim().replace(/^#/, '');
  const normalized = value.length === 3 ? value.replace(/./g, char => char + char) : value;
  const match = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalized);
  if (!match) return [0, 0, 0];
  return [parseInt(match[1], 16) / 255, parseInt(match[2], 16) / 255, parseInt(match[3], 16) / 255];
};

const setColor = (uniform: { value: Float32Array }, hex: string) => {
  const color = hexToRgb(hex);
  uniform.value[0] = color[0];
  uniform.value[1] = color[1];
  uniform.value[2] = color[2];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uSpeed;
uniform float uSweepSpeed;
uniform float uSweepWidth;
uniform float uSweepFalloff;
uniform float uScale;
uniform float uFrequency;
uniform float uRipple;
uniform float uBandDensity;
uniform float uLineSharpness;
uniform float uGlow;
uniform float uScanDirection;
uniform float uColorSpread;
uniform float uBrightness;
uniform float uContrast;
uniform float uSoftness;
uniform float uVignette;
uniform float uScanline;
uniform float uGrain;
uniform float uGrainIntensity;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseRadius;
uniform float uMouseStrength;

out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

void main() {
  vec2 resolution = max(uResolution, vec2(1.0));
  vec2 st = gl_FragCoord.xy / resolution;
  vec2 aspect = vec2(resolution.x / max(resolution.y, 1.0), 1.0);
  vec2 uv = (st - 0.5) * aspect * uScale;

  float time = uTime * uSpeed;
  float sweepTime = uTime * uSweepSpeed;

  float pos = mix(uv.x, uv.y, uScanDirection);

  // Smooth sweeping beam
  float sweepPos = sin(sweepTime) * (uSweepWidth * 0.5);
  float distToSweep = abs(pos - sweepPos);
  float sweepBeam = exp(-distToSweep * uSweepFalloff);

  // Wave dynamics & Mouse interaction
  vec2 mouseUv = (uMouse - 0.5) * aspect * uScale;
  float mouseDist = length(uv - mouseUv);
  float mouseEffect = smoothstep(uMouseRadius, 0.0, mouseDist) * uMouseStrength;

  float wave = sin(pos * uFrequency * 6.28318 + time) * 0.5;
  wave += sin(mouseDist * 15.0 - time * 3.0) * uRipple * mouseEffect;

  // Banding & Line sharpness
  float bands = sin((pos + wave * 0.1) * uBandDensity * 3.14159) * 0.5 + 0.5;
  bands = pow(clamp(bands, 0.0, 1.0), max(uLineSharpness, 0.1));

  // Combine beam, bands, and glow
  float intensity = mix(bands * 0.4, sweepBeam, 0.6) + sweepBeam * uGlow + mouseEffect * 0.5;
  
  // Contrast & Brightness tuning
  intensity = clamp((intensity - 0.5) * uContrast + 0.5 + (uBrightness - 0.5), 0.0, 1.0);

  // Color mapping: color1 -> color2 -> color3
  vec3 col = mix(uColor1, uColor2, clamp(intensity * (1.0 + uColorSpread), 0.0, 1.0));
  col = mix(col, uColor3, pow(clamp(sweepBeam * intensity, 0.0, 1.0), max(uSoftness, 0.1)));

  // Vignette
  float vign = length(st - 0.5);
  col *= smoothstep(0.9, uVignette * 0.2, vign);

  // Noise Grain
  if (uGrain > 0.5) {
    float noise = (hash(st + vec2(uTime * 0.1)) - 0.5) * uGrainIntensity;
    col += noise;
  }

  // Scanline overlay
  if (uScanline > 0.5) {
    col *= 0.92 + 0.08 * sin(gl_FragCoord.y * 1.5);
  }

  fragColor = vec4(clamp(col, 0.0, 1.0), uOpacity);
}
`;

export interface ScannerProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  sweepSpeed?: number;
  sweepWidth?: number;
  sweepFalloff?: number;
  scale?: number;
  frequency?: number;
  ripple?: number;
  bandDensity?: number;
  lineSharpness?: number;
  glow?: number;
  scanDirection?: 'horizontal' | 'vertical';
  colorSpread?: number;
  brightness?: number;
  contrast?: number;
  softness?: number;
  vignette?: number;
  scanline?: boolean;
  grain?: boolean;
  grainIntensity?: number;
  opacity?: number;
  mouseInteraction?: boolean;
  mouseRadius?: number;
  mouseStrength?: number;
  paused?: boolean;
}

export const Scanner = ({
  className = '',
  color1 = '#08080D',
  color2 = '#1D4ED8',
  color3 = '#FFFFFF',
  speed = 0.18,
  sweepSpeed = 0.12,
  sweepWidth = 2.2,
  sweepFalloff = 8,
  scale = 2,
  frequency = 1.4,
  ripple = 0.12,
  bandDensity = 7,
  lineSharpness = 7,
  glow = 0.12,
  scanDirection = 'horizontal',
  colorSpread = 0.25,
  brightness = 0.45,
  contrast = 1.2,
  softness = 2,
  vignette = 0.75,
  scanline = false,
  grain = true,
  grainIntensity = 0.015,
  opacity = 0.28,
  mouseInteraction = true,
  mouseRadius = 0.45,
  mouseStrength = 0.22,
  paused = false
}: ScannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 1.5),
      alpha: true,
      premultipliedAlpha: false
    });
    const gl = renderer.gl;
    const canvas = gl.canvas;

    container.appendChild(canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uResolution: { value: new Float32Array([0, 0]) },
        uTime: { value: 0 },
        uColor1: { value: new Float32Array([0, 0, 0]) },
        uColor2: { value: new Float32Array([0, 0, 0]) },
        uColor3: { value: new Float32Array([0, 0, 0]) },
        uSpeed: { value: speed },
        uSweepSpeed: { value: sweepSpeed },
        uSweepWidth: { value: sweepWidth },
        uSweepFalloff: { value: sweepFalloff },
        uScale: { value: scale },
        uFrequency: { value: frequency },
        uRipple: { value: ripple },
        uBandDensity: { value: bandDensity },
        uLineSharpness: { value: lineSharpness },
        uGlow: { value: glow },
        uScanDirection: { value: scanDirection === 'vertical' ? 1.0 : 0.0 },
        uColorSpread: { value: colorSpread },
        uBrightness: { value: brightness },
        uContrast: { value: contrast },
        uSoftness: { value: softness },
        uVignette: { value: vignette },
        uScanline: { value: scanline ? 1.0 : 0.0 },
        uGrain: { value: grain ? 1.0 : 0.0 },
        uGrainIntensity: { value: grainIntensity },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseRadius: { value: mouseRadius },
        uMouseStrength: { value: mouseStrength }
      }
    });

    setColor(program.uniforms.uColor1, color1);
    setColor(program.uniforms.uColor2, color2);
    setColor(program.uniforms.uColor3, color3);

    const mesh = new Mesh(gl, { geometry, program });

    let animationFrame: number | null = null;
    let isVisible = true;
    const isPaused = paused;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const setSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 300;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value[0] = gl.canvas.width;
      program.uniforms.uResolution.value[1] = gl.canvas.height;
    };

    const render = (time = 0) => {
      program.uniforms.uTime.value = time * 0.001;
      renderer.render({ scene: mesh });
    };

    const canAnimate = () => isVisible && !isPaused && !reducedMotion.matches;

    const tick = (time: number) => {
      if (!canAnimate()) return;
      render(time);
      animationFrame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (animationFrame === null && canAnimate()) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    const stop = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      program.uniforms.uMouse.value[0] = x;
      program.uniforms.uMouse.value[1] = y;
    };

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (canAnimate()) start();
        else stop();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    const handleVisibility = () => {
      if (document.hidden) stop();
      else if (canAnimate()) start();
    };

    document.addEventListener('visibilitychange', handleVisibility);

    setSize();
    start();

    return () => {
      stop();
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      if (canvas.parentNode === container) container.removeChild(canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return <div ref={containerRef} className={`scanner-container ${className}`.trim()} />;
};

export default Scanner;
