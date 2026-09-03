import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown
} from 'lucide-react';
import { AIOrb } from '../components/interactive/AIOrb';
import { Magnetic } from '../components/interactive/Magnetic';
import { profile } from '../data/profile';
import { handleEmailClick } from '../utils/email';

const LinkedInSVG = () => (
  <svg className="w-4 h-4 fill-[#0A66C2] group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z"/>
  </svg>
);

import FoldText from '../components/FoldText';
import BorderGlow from '../components/BorderGlow';
import BlurText from '../components/BlurText';
import GlareHover from '../components/GlareHover';

interface HeroProps {
  onOpenResume?: () => void;
}

interface TechIconBadgeProps {
  name: string;
  icon: React.ReactNode;
  label: string;
  tagline: string;
  delay?: number;
}

// Custom Realistic Tech SVG Logos
const PythonSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(55,118,171,0.8)]" viewBox="0 0 24 24" fill="none">
    <path d="M11.9 2c-4.8 0-4.5 2.1-4.5 2.1v2.2h4.6v.7H5.6s-2.1-.2-2.1 4.5.3 4.4.3 4.4h1.3v-2.1s-.1-2.5 2.5-2.5h4.3s2.4.1 2.4-2.3V4.4s.3-2.4-2.4-2.4zm-2.4 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z" fill="#3776AB"/>
    <path d="M12.1 22c4.8 0 4.5-2.1 4.5-2.1v-2.2h-4.6v-.7h6.4s2.1.2 2.1-4.5-.3-4.4-.3-4.4h-1.3v2.1s.1 2.5-2.5 2.5h-4.3s-2.4-.1-2.4 2.3v4.5s-.3 2.4 2.4 2.4zm2.4-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#FFD43B"/>
  </svg>
);

const JavaSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(231,111,0,0.8)]" viewBox="0 0 24 24" fill="none">
    <path d="M7 16c2 1.5 5 2 7.5.5M6 18.5c3 1.8 7.5 2.2 10.5.2M8.5 13.5c1.5.8 4 1.2 5.5.3" stroke="#E76F00" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 2c.5 2-1.5 3.5-1 5.5s2 2 1 4.5" stroke="#5382A1" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const AISVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_10px_rgba(0,240,255,0.9)]" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#ai-grad-hero)"/>
    <path d="M19 3L20 6L23 7L20 8L19 11L18 8L15 7L18 6L19 3Z" fill="#C9B27C"/>
    <defs>
      <linearGradient id="ai-grad-hero" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF"/>
        <stop offset="1" stopColor="#7C7CFF"/>
      </linearGradient>
    </defs>
  </svg>
);

const MLSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(201,178,124,0.8)]" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="5" width="14" height="14" rx="3" fill="#181824" stroke="#C9B27C" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="3" fill="#C9B27C"/>
    <path d="M12 2V5M12 19V22M2 12H5M19 12H22M6 6L8.5 8.5M15.5 15.5L18 18M18 6L15.5 8.5M8.5 15.5L6 18" stroke="#C9B27C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PromptSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_10px_rgba(236,72,153,0.9)]" viewBox="0 0 24 24" fill="none">
    <path d="M15 4L20 9L9 20H4V15L15 4Z" stroke="#EC4899" strokeWidth="1.8" strokeLinejoin="round" fill="#2A1220"/>
    <path d="M13 6L18 11" stroke="#F472B6" strokeWidth="1.8"/>
    <path d="M5 4L7 2M3 8L2 7M7 10L6 11" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const DataMiningSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_10px_rgba(245,158,11,0.9)]" viewBox="0 0 24 24" fill="none">
    <path d="M14.5 4.5L19.5 9.5M17 2L22 7L13 16L8 11L17 2Z" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M6 13L2 17V22H7L11 18" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="18" r="2" fill="#F59E0B"/>
  </svg>
);

const DataSciSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(124,124,255,0.8)]" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#7C7CFF" fillOpacity="0.3" stroke="#7C7CFF" strokeWidth="1.5"/>
    <path d="M4 6V12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12V6" stroke="#7C7CFF" strokeWidth="1.5"/>
    <path d="M4 12V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V12" stroke="#7C7CFF" strokeWidth="1.5"/>
  </svg>
);

const SQLSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="3" stroke="#00E5FF" strokeWidth="1.5" fill="#061824"/>
    <path d="M3 10H21M9 4V20" stroke="#00E5FF" strokeWidth="1.5"/>
  </svg>
);

const GoSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(0,173,216,0.9)]" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#go-grad-hero)"/>
    <defs>
      <linearGradient id="go-grad-hero" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00ADD8"/>
        <stop offset="1" stopColor="#00E5FF"/>
      </linearGradient>
    </defs>
  </svg>
);

const CppSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(101,154,210,0.8)]" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#141E28" stroke="#659AD2" strokeWidth="1.5"/>
    <text x="7.5" y="15" fill="#659AD2" fontSize="8.5" fontWeight="bold" fontFamily="monospace">C++</text>
  </svg>
);

const MobileSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" viewBox="0 0 24 24" fill="none">
    <rect x="6" y="2" width="12" height="20" rx="3" stroke="#10B981" strokeWidth="1.8" fill="#082018"/>
    <circle cx="12" cy="18" r="1" fill="#10B981"/>
    <line x1="9" y1="5" x2="15" y2="5" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const VibeCoderSVG = () => (
  <svg className="w-5 h-5 drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L14.5 7.5L20 8.5L16 12.5L17 18L12 15L7 18L8 12.5L4 8.5L9.5 7.5L12 2Z" fill="url(#vibe-grad-hero)" opacity="0.9" />
    <path d="M7 10L4 13L7 16" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 10L20 13L17 16" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="vibe-grad-hero" x1="4" y1="2" x2="20" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7"/>
        <stop offset="0.5" stopColor="#EC4899"/>
        <stop offset="1" stopColor="#38BDF8"/>
      </linearGradient>
    </defs>
  </svg>
);

const TechIconBadge = ({ name, icon, label, tagline }: TechIconBadgeProps) => {
  return (
    <div className="group relative flex flex-col items-center z-20 cursor-pointer hover:scale-105 transition-transform duration-200">
      {/* Outer Pulse Glow Ring on Hover */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-luxury/30 via-accent/30 to-luxury/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      {/* Realistic Glass Sphere Badge */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#1A1A24]/95 via-[#0C0C12]/95 to-[#06060A]/95 border border-white/20 backdrop-blur-xl group-hover:border-luxury group-hover:bg-luxury/10 transition-all duration-300 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_25px_rgba(201,178,124,0.4)] group-hover:scale-110 relative z-10">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Node Label */}
      <span className="mt-0.5 font-mono text-[9px] sm:text-[10px] text-slate-300 group-hover:text-luxury font-bold tracking-wide transition-colors">
        {label}
      </span>

      {/* Rich Floating Glass Tooltip */}
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform group-hover:-translate-y-1 z-40 font-mono text-left bg-[#0A0A0F]/95 border border-luxury/40 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-xl whitespace-nowrap min-w-[140px]">
        <div className="text-luxury font-extrabold text-[11px] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <span>{name}</span>
        </div>
        <span className="text-slate-300 text-[9px] block font-medium mt-0.5">{tagline}</span>
      </div>
    </div>
  );
};

export const Hero = ({ onOpenResume }: HeroProps) => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      className="min-h-[82vh] flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 relative overflow-hidden"
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* 3-Column Split Grid Layout (1-Page Viewport Specification) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* Left Column (Hero Headline, Value Prop & CTA Buttons) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Section Eyebrow Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="font-mono text-[10px] tracking-widest text-luxury font-medium uppercase px-2.5 py-0.5 rounded-full bg-luxury/10 border border-luxury/20">
                01 / INTRO
              </span>
              <span className="h-[1px] w-4 bg-white/10" />
              <span className="font-mono text-[9px] tracking-wider text-muted uppercase">
                <BlurText text="PRACTICAL AI FOR REAL OPERATIONS" delay={70} animateBy="words" direction="top" stepDuration={0.3} />
              </span>
            </motion.div>
            
            {/* Dominant Hero Heading */}
            <h1 className="font-display font-black text-text tracking-[-0.03em] leading-[0.95] mb-3 text-[clamp(2.25rem,4.5vw,4.25rem)] select-none">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  BHUSHAN
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-text"
                >
                  RAJENDRA DAGWAR
                </motion.span>
              </span>
            </h1>

            {/* Subheading Identity Title */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2.5"
            >
              <FoldText
                text="BHUSHAN RAJENDRA DAGWAR — AI ENGINEER / APPLIED AI & LLM SYSTEMS"
                splitBy="word"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.035}
                fontSize="clamp(0.7rem, 1.2vw, 0.8rem)"
                fontWeight={700}
                color="#C9B27C"
              />
            </motion.div>
            
            {/* Concise Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-text font-medium text-xs sm:text-sm max-w-md leading-relaxed mb-4"
            >
              I build practical AI systems across LLM/RAG architectures, document intelligence, search, and full-stack software applications.
            </motion.p>
            
            {/* AI Orb Visual Signal & LinkedIn Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 flex items-center justify-start gap-4 sm:gap-5"
            >
              <AIOrb />

              <Magnetic strength={0.25}>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-[#0A0A0F]/90 backdrop-blur-md text-slate-200 hover:text-white px-5 py-2.5 rounded-full font-extrabold text-xs sm:text-sm tracking-wide border border-white/20 hover:border-[#0A66C2] hover:bg-[#121218] transition-all shadow-lg shrink-0"
                  title="Open Bhushan's LinkedIn Profile"
                >
                  <LinkedInSVG />
                  <span>LINKEDIN</span>
                </a>
              </Magnetic>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5 text-xs font-body"
            >
              <Magnetic strength={0.25}>
                <GlareHover
                  borderRadius="9999px"
                  glareColor="#ffffff"
                  glareOpacity={0.12}
                  glareAngle={-30}
                  glareSize={180}
                  transitionDuration={700}
                >
                  <a 
                    href="#projects" 
                    className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-extrabold tracking-wide hover:bg-slate-100 transition-all shadow-xl"
                  >
                    <span>EXPLORE WORK</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
                  </a>
                </GlareHover>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a 
                  href="#contact" 
                  className="flex items-center justify-center gap-1.5 bg-[#0A0A0F] text-white px-6 py-2.5 rounded-full font-bold tracking-wide border border-white/10 hover:border-white/30 hover:bg-[#121218] transition-all shadow-md"
                >
                  <span>CONTACT ME</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <button
                  onClick={onOpenResume}
                  className="group flex items-center justify-center gap-1.5 bg-[#0A0A0F]/80 backdrop-blur-md text-slate-200 hover:text-white px-5 py-2.5 rounded-full font-bold tracking-wide border border-white/15 hover:border-white/30 hover:bg-[#121218] transition-all shadow-md"
                >
                  <span>RESUME</span>
                  <ArrowDown className="w-3.5 h-3.5 text-slate-300 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
                </button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Center Column — Constellation Cluster in 1-Page Space */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col items-center justify-center text-center my-4 lg:my-0 py-1 relative z-20"
          >
            <div className="flex items-center gap-1.5 mb-2 font-mono text-[9px] tracking-widest text-luxury uppercase font-semibold">
              <span className="w-1 h-1 rounded-full bg-luxury animate-pulse" />
              <span>CORE SKILLS CONSTELLATION</span>
              <span className="w-1 h-1 rounded-full bg-luxury animate-pulse" />
            </div>

            {/* Symmetrical Circular Cluster Constellation (11 Nodes) */}
            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
              {/* Row 1: Python */}
              <div className="flex justify-center">
                <TechIconBadge 
                  name="Python" 
                  icon={<PythonSVG />} 
                  label="Python" 
                  tagline="Production LLMs & Data Pipelines"
                  delay={0}
                />
              </div>

              {/* Row 2: Advanced Java, Artificial Intelligence */}
              <div className="flex justify-center gap-6 sm:gap-8">
                <TechIconBadge 
                  name="Advanced Java" 
                  icon={<JavaSVG />} 
                  label="Java" 
                  tagline="Object-Oriented Backend Systems"
                  delay={0.2}
                />
                <TechIconBadge 
                  name="Artificial Intelligence" 
                  icon={<AISVG />} 
                  label="AI" 
                  tagline="RAG Architectures & Prompt Workflows"
                  delay={0.4}
                />
              </div>

              {/* Row 3: Prompt Engineering, Machine Learning, Data Mining */}
              <div className="flex justify-center gap-2 sm:gap-5">
                <TechIconBadge 
                  name="Prompt Engineering" 
                  icon={<PromptSVG />} 
                  label="Prompt Eng" 
                  tagline="LLM Prompt Workflows & Guardrails"
                  delay={0.6}
                />
                <TechIconBadge 
                  name="Machine Learning" 
                  icon={<MLSVG />} 
                  label="ML" 
                  tagline="Scikit-Learn, PyTorch & Regression"
                  delay={0.8}
                />
                <TechIconBadge 
                  name="Data Mining" 
                  icon={<DataMiningSVG />} 
                  label="Data Mining" 
                  tagline="NPTEL Elite Certified Knowledge Discovery"
                  delay={1.0}
                />
              </div>

              {/* Row 4: Data Science, Vibe Coder, SQL */}
              <div className="flex justify-center gap-2 sm:gap-5">
                <TechIconBadge 
                  name="Data Science" 
                  icon={<DataSciSVG />} 
                  label="Data Sci" 
                  tagline="Data Analytics & Statistical Models"
                  delay={1.2}
                />
                <TechIconBadge 
                  name="Vibe Coding & AI Speed" 
                  icon={<VibeCoderSVG />} 
                  label="Vibe Coder" 
                  tagline="AI-Assisted Vibe Coding & Rapid System Assembly"
                  delay={1.3}
                />
                <TechIconBadge 
                  name="SQL" 
                  icon={<SQLSVG />} 
                  label="SQL" 
                  tagline="PostgreSQL & Vector Similarity Search"
                  delay={1.4}
                />
              </div>

              {/* Row 5: Go / Golang, C++ */}
              <div className="flex justify-center gap-6 sm:gap-8">
                <TechIconBadge 
                  name="Go / Golang" 
                  icon={<GoSVG />} 
                  label="Golang" 
                  tagline="High-Performance Microservices"
                  delay={1.6}
                />
                <TechIconBadge 
                  name="C++" 
                  icon={<CppSVG />} 
                  label="C++" 
                  tagline="Low-Level Algorithms & Data Structures"
                  delay={1.8}
                />
              </div>

              {/* Row 6: Mobile App Development (Single Apex Point at Bottom) */}
              <div className="flex justify-center">
                <TechIconBadge 
                  name="Mobile App Development" 
                  icon={<MobileSVG />} 
                  label="Mobile App" 
                  tagline="Android & Mobile App Development"
                  delay={2.0}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Controlled Integrated Portrait Photo & Metadata Panel */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[330px] sm:max-w-[360px]"
            >
              {/* Photo Frame Container with React Bits BorderGlow */}
              <BorderGlow
                backgroundColor="rgba(12, 12, 18, 0.65)"
                borderRadius={28}
                glowColor="45 80 70"
                glowRadius={35}
                edgeSensitivity={30}
                colors={['#C9B27C', '#00F0FF', '#3B82F6']}
                animated={true}
              >
                <div 
                  className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden bg-surface group transition-all duration-500"
                >
                  <img 
                    src="/1776781772145.png" 
                    alt="Bhushan Rajendra Dagwar — AI Engineer"
                    loading="eager"
                    fetchPriority="high"
                    width="400"
                    height="500"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = '/1776781772145.jpg'; }}
                  />
                  
                  {/* Inner Vignette Overlay */}
                  <div className="absolute inset-0 rounded-[28px] border border-white/[0.07] pointer-events-none" />

                  {/* Floating Integrated Name Pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl glass-pill backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] font-mono text-text">
                    <span className="text-luxury font-bold">BHUSHAN RAJENDRA DAGWAR</span>
                    <span className="text-accent font-semibold">AI ENGINEER</span>
                  </div>
                </div>
              </BorderGlow>

              {/* Technical Metadata Identity Card */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 p-2.5 rounded-xl glass-card text-left border border-white/[0.08]"
              >
                <div className="border-b border-line/60 pb-1.5 mb-1.5 flex items-center justify-between">
                  <a 
                    href="mailto:bhushandagwar94@gmail.com" 
                    onClick={(e) => handleEmailClick(e, 'bhushandagwar94@gmail.com')}
                    className="font-mono text-[11px] sm:text-xs text-luxury tracking-wider font-bold hover:text-accent transition-colors block truncate"
                  >
                    bhushandagwar94@gmail.com
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-2 my-1.5 font-mono">
                  <div>
                    <span className="text-muted block text-[8px] uppercase tracking-wider font-semibold mb-0.5">CORE FOCUS</span>
                    <span className="text-text font-bold text-[10.5px] tracking-wide block">LLM · RAG · ML</span>
                  </div>
                  <div>
                    <span className="text-muted block text-[8px] uppercase tracking-wider font-semibold mb-0.5">DOMAIN</span>
                    <span className="text-text font-bold text-[10.5px] tracking-wide block">AIDS</span>
                  </div>
                </div>
                <div className="pt-1.5 border-t border-line/60 flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 text-accent font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span>OPEN TO WORK</span>
                  </div>
                  <span className="text-muted-dark text-[10px] font-semibold">2026</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
