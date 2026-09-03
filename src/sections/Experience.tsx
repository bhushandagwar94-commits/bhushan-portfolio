import { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Building2, Calendar, MapPin, FileText, ArrowRight, Sparkles, Cpu } from 'lucide-react';
import { experience as experiencesList } from '../data/portfolio';
import { ExperienceWindow, type ExperienceItem } from '../components/interactive/ExperienceWindow';
import FoldText from '../components/FoldText';
import BlurText from '../components/BlurText';
import BorderGlow from '../components/BorderGlow';

// Dynamic Experience Duration Formatter (e.g. "Apr 2026 — Present · 5 mos")
function formatExperienceDuration(startStr: string, endStr: string): string {
  const startDate = new Date(startStr + "-01");
  const startMonthYear = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  
  if (endStr === "Present") {
    const now = new Date();
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    let totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
    if (totalMonths < 1) totalMonths = 1;
    
    const durationLabel = totalMonths >= 12 
      ? `${Math.floor(totalMonths / 12)} yr ${totalMonths % 12} mos` 
      : `${totalMonths} mos`;
      
    return `${startMonthYear} — Present · ${durationLabel}`;
  } else {
    const endDate = new Date(endStr + "-01");
    const endMonthYear = endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    
    let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    if (totalMonths < 1) totalMonths = 1;
    
    const durationLabel = `${totalMonths} mos`;
    return `${startMonthYear} — ${endMonthYear} · ${durationLabel}`;
  }
}

export const Experience = () => {
  const [selectedRole, setSelectedRole] = useState<ExperienceItem | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 25%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const formattedExperiences: ExperienceItem[] = experiencesList.map((exp, idx) => ({
    num: `0${idx + 1}`,
    role: exp.role,
    company: exp.company,
    location: exp.location,
    date: formatExperienceDuration(exp.start, exp.end),
    badge: exp.type.toUpperCase(),
    arrangement: exp.arrangement,
    description: exp.description,
    skills: exp.skills,
    attachment: exp.attachment
  }));

  return (
    <section id="experience" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Combined Section Header & Summary Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-8"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
              04 / EXPERIENCE & EDUCATION
            </span>
            <span className="h-[1px] w-6 bg-white/10" />
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              CAREER TRAJECTORY
            </span>
          </div>

          <div className="mb-2">
            <FoldText
              text="ENGINEERING EXPERIENCE"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.035}
              fontSize="clamp(1.875rem, 3.5vw, 2.75rem)"
              fontWeight={800}
              color="#F8FAFC"
            />
          </div>

          <p className="font-body text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
            Building practical AI expertise through industry internships, software development experience, and a B.Tech in Artificial Intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Vertical Editorial Timeline */}
          <div ref={timelineRef} className="lg:col-span-7 relative border-l border-line/40 pl-5 sm:pl-7 space-y-6">
            
            {/* Scroll-driven glowing progressive timeline line */}
            <motion.div 
              style={{ scaleY }} 
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-luxury via-accent to-luxury origin-top z-10"
            />

            {formattedExperiences.map((exp, idx) => (
              <motion.div 
                key={exp.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedRole(exp)}
                className={`p-5 sm:p-6 rounded-[24px] glass-card glass-card-hover border cursor-pointer group relative z-20 transition-all ${
                  idx === 0 
                    ? 'border-luxury/40 bg-luxury/[0.04] shadow-xl' 
                    : 'border-line-light'
                }`}
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-3.5 h-3.5 rounded-full bg-bg border-2 border-luxury group-hover:border-accent transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury group-hover:bg-accent transition-colors" />
                </div>

                {/* Top Badge & Date Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-line">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-luxury">{exp.num}</span>
                    <span className="font-mono text-[10px] text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full font-bold">
                      {exp.badge}
                    </span>
                    <span className="font-mono text-[10px] text-slate-300 bg-surface-2 border border-line-light px-2.5 py-0.5 rounded-full font-medium uppercase">
                      {exp.arrangement}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 font-mono text-xs text-luxury font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-luxury" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-text mb-1.5 group-hover:text-luxury transition-colors">
                  <BlurText text={exp.role} delay={45} animateBy="words" direction="top" stepDuration={0.3} />
                </h3>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-muted mb-3">
                  <span className="flex items-center gap-1 text-text font-bold">
                    <Building2 className="w-3.5 h-3.5 text-luxury" />
                    {exp.company}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-slate-300 text-[11px]">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-3">
                  {exp.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {exp.skills.map((s) => (
                    <span key={s} className="font-mono text-[11px] font-semibold text-luxury bg-luxury/10 border border-luxury/30 px-2.5 py-0.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action Footer + Attachment Badge */}
                <div className="flex items-center justify-between pt-3 border-t border-line font-mono text-xs">
                  {exp.attachment ? (
                    <div className="flex items-center gap-1.5 text-luxury font-bold text-[11px] bg-luxury/10 border border-luxury/30 px-3 py-1 rounded-full group-hover:bg-luxury group-hover:text-bg transition-all">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{exp.attachment.toUpperCase()} →</span>
                    </div>
                  ) : (
                    <span className="text-muted group-hover:text-luxury transition-colors text-[11px] font-semibold">VIEW ROLE DETAILS</span>
                  )}
                  <ArrowRight className="w-3.5 h-3.5 text-luxury group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Real Integrated Photograph + Perfectly Aligned Illustration Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5 h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <BorderGlow
                backgroundColor="rgba(12, 12, 18, 0.65)"
                borderRadius={28}
                glowColor="45 80 70"
                glowRadius={35}
                edgeSensitivity={30}
                colors={['#C9B27C', '#00F0FF', '#3B82F6']}
              >
                <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden bg-surface group">
                  <img 
                    src="/IMG_20251129_113926.jpg" 
                    alt="Bhushan Rajendra Dagwar building systems"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-luxury font-bold uppercase tracking-wider text-[10px]">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      <span>SEE-TECH AI LAB</span>
                    </div>
                    <span className="text-muted text-[10px]">REAL DELIVERABLES</span>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>

            {/* NEW ANIMATED INTERACTIVE DEVELOPER + AI ROCKET LAB ILLUSTRATION CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-6 rounded-[28px] glass-card border border-luxury/30 bg-gradient-to-b from-[#0F0F16]/95 via-[#0A0A0F]/95 to-[#050508]/95 shadow-2xl relative overflow-hidden group cursor-pointer hover:border-luxury/60 transition-all flex-1 flex flex-col justify-between"
            >
              {/* Background Animated Particles Grid */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Header Label */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-line font-mono text-xs">
                <div className="flex items-center gap-2 text-luxury font-bold text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                  <span>HUMAN + AI NEURAL COLLABORATION LAB</span>
                </div>
                <span className="text-accent font-bold text-[10px] bg-accent/10 border border-accent/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  <span>RAG & LLMs LIVE</span>
                </span>
              </div>

              {/* Animated AI/ML SVG Scene Container */}
              <div className="relative flex-1 min-h-[195px] sm:min-h-[215px] w-full flex items-center justify-around overflow-hidden rounded-2xl bg-[#05050A] border border-white/15 p-3 my-1">
                
                {/* Background Connecting Neural Network Pathways */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" viewBox="0 0 400 200" fill="none">
                  {/* Neural Path 1: Dev -> Neural Core */}
                  <motion.path 
                    d="M90 100 C 130 60, 160 60, 200 100" 
                    stroke="url(#path-grad-1)" 
                    strokeWidth="2" 
                    strokeDasharray="6 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Neural Path 2: Neural Core -> AI Agent */}
                  <motion.path 
                    d="M200 100 C 240 140, 270 140, 310 100" 
                    stroke="url(#path-grad-2)" 
                    strokeWidth="2" 
                    strokeDasharray="6 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <defs>
                    <linearGradient id="path-grad-1" x1="90" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3776AB"/>
                      <stop offset="1" stopColor="#00F0FF"/>
                    </linearGradient>
                    <linearGradient id="path-grad-2" x1="200" y1="100" x2="310" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00F0FF"/>
                      <stop offset="1" stopColor="#C9B27C"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* 1. AI Engineer at PyTorch/LLM Workstation */}
                <div className="relative flex flex-col items-center z-10">
                  {/* Floating AI/ML Stack Badges */}
                  <div className="flex gap-1 mb-2 font-mono text-[8.5px] font-bold">
                    <motion.span 
                      animate={{ y: [0, -3, 0] }} 
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="bg-[#3776AB]/20 border border-[#3776AB]/50 text-[#3776AB] px-1.5 py-0.5 rounded shadow-sm"
                    >
                      PyTorch
                    </motion.span>
                    <motion.span 
                      animate={{ y: [0, -4, 0] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      className="bg-luxury/20 border border-luxury/40 text-luxury px-1.5 py-0.5 rounded shadow-sm"
                    >
                      RAG / LLM
                    </motion.span>
                  </div>

                  {/* SVG Developer at Dual-Monitor AI Setup */}
                  <svg className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_0_12px_rgba(55,118,171,0.4)]" viewBox="0 0 100 100" fill="none">
                    {/* Desk */}
                    <rect x="10" y="66" width="75" height="4" rx="2" fill="#334155"/>
                    <path d="M18 70V90M77 70V90" stroke="#475569" strokeWidth="2.5"/>
                    
                    {/* Main IDE Monitor */}
                    <rect x="35" y="38" width="34" height="25" rx="3" fill="#0A0A12" stroke="#00F0FF" strokeWidth="1.5"/>
                    <rect x="37" y="40" width="30" height="21" fill="#06060C"/>
                    {/* PyTorch Code Lines */}
                    <path d="M40 44H62M40 48H55M40 52H59M40 56H48" stroke="#00F0FF" strokeWidth="1.2" strokeLinecap="round"/>
                    
                    {/* Vertical Vector DB Monitor */}
                    <rect x="12" y="30" width="18" height="33" rx="2" fill="#0A0A12" stroke="#7C7CFF" strokeWidth="1.2"/>
                    <path d="M15 35H25M15 39H23M15 43H27M15 47H22" stroke="#7C7CFF" strokeWidth="1" strokeLinecap="round"/>

                    {/* Developer Ergonomic Chair & Body */}
                    <path d="M26 48C26 43 40 43 40 48V66H26V48Z" fill="#1E40AF"/>
                    <circle cx="33" cy="35" r="7" fill="#F8FAFC"/>
                  </svg>
                </div>

                {/* 2. Central Neural Model Engine Core / Transformer Orb */}
                <div className="relative flex flex-col items-center justify-center z-20">
                  {/* Floating Model Latency Badge */}
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-1 font-mono text-[8px] text-luxury font-extrabold bg-[#0A0A0F] border border-luxury/40 px-2 py-0.5 rounded-full shadow-lg"
                  >
                    INFERENCE: 14ms
                  </motion.div>

                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    {/* Rotating Outer Neural Matrix Ring */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-luxury/60"
                    />

                    {/* Counter-rotating Inner Ring */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 rounded-full border border-accent/70"
                    />

                    {/* Glowing Core Transformer Orb */}
                    <motion.div 
                      animate={{ scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00F0FF] via-[#7C7CFF] to-[#C9B27C] shadow-[0_0_25px_rgba(0,240,255,0.8)] flex items-center justify-center border border-white"
                    >
                      <Cpu className="w-5 h-5 text-bg" />
                    </motion.div>
                  </div>

                  <span className="font-mono text-[9px] text-accent font-bold mt-1 tracking-wider">
                    NEURAL ENGINE
                  </span>
                </div>

                {/* 3. Autonomous AI Agent with Real-Time HUD Scan */}
                <div className="relative flex flex-col items-center z-10">
                  {/* Floating AI Agent Status Badge */}
                  <motion.span 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-2 font-mono text-[8.5px] font-bold text-accent bg-accent/20 border border-accent/40 px-2 py-0.5 rounded-full shadow-md"
                  >
                    AI AGENT ●
                  </motion.span>

                  {/* SVG AI Robot with Scanning Visor */}
                  <svg className="w-20 h-24 sm:w-24 sm:h-28 drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]" viewBox="0 0 80 90" fill="none">
                    {/* Robot Head */}
                    <rect x="22" y="10" width="36" height="28" rx="10" fill="#F8FAFC" stroke="#00F0FF" strokeWidth="2"/>
                    {/* Antenna */}
                    <line x1="40" y1="2" x2="40" y2="10" stroke="#00F0FF" strokeWidth="2"/>
                    <circle cx="40" cy="2" r="2.5" fill="#00F0FF"/>
                    {/* Visor Scan Display */}
                    <rect x="26" y="18" width="28" height="12" rx="4" fill="#061824"/>
                    {/* Animated Scanning Laser Line */}
                    <motion.line 
                      x1="28" y1="24" x2="52" y2="24" 
                      stroke="#00F0FF" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                    
                    {/* Robot Body */}
                    <rect x="18" y="42" width="44" height="38" rx="8" fill="#E2E8F0" stroke="#00F0FF" strokeWidth="1.5"/>
                    <circle cx="40" cy="58" r="7" fill="#0F172A" stroke="#00F0FF" strokeWidth="1.5"/>
                    <text x="33.5" y="61" fill="#00F0FF" fontSize="7" fontWeight="bold" fontFamily="monospace">RAG</text>
                    
                    {/* Animated Waving Arm */}
                    <motion.path 
                      animate={{ rotate: [0, 15, -10, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: '14px 46px' }}
                      d="M18 46L6 32C6 32 4 45 10 52" 
                      stroke="#00F0FF" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>

              </div>

              {/* Footer Caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-300 font-semibold">
                <span>Production AI & LLM Systems Pipeline</span>
                <span className="text-luxury font-bold group-hover:underline">SEE-TECH AI LABS →</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Experience Drawer Window */}
      <ExperienceWindow experience={selectedRole} onClose={() => setSelectedRole(null)} />
    </section>
  );
};
