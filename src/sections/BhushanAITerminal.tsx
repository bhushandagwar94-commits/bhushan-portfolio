import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Trash2, 
  Search, 
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { bhushanKnowledge } from '../data/portfolioKnowledge';
import FoldText from '../components/FoldText';
import BlurText from '../components/BlurText';
import GlareHover from '../components/GlareHover';

interface StructuredResponse {
  title?: string;
  answer: string;
  categoryTag?: string;
  techStack?: string[];
  highlights?: string[];
  linkText?: string;
  linkHref?: string;
  relatedQueries?: string[];
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  queryText?: string;
  response: StructuredResponse;
  timestamp: string;
}

interface StarterQuestion {
  category: 'ABOUT' | 'TECHNICAL' | 'PROJECTS' | 'RESEARCH' | 'CAREER';
  question: string;
}

const STARTER_QUESTIONS: StarterQuestion[] = [
  { category: 'ABOUT', question: "Who is Bhushan Rajendra Dagwar?" },
  { category: 'ABOUT', question: "Give me Bhushan's professional summary." },
  { category: 'TECHNICAL', question: "What are Bhushan's technical skills?" },
  { category: 'TECHNICAL', question: "What is his experience with LLMs & RAG?" },
  { category: 'PROJECTS', question: "Tell me about the SEETECH AI Assistant." },
  { category: 'PROJECTS', question: "Tell me about the Agriculture Equipment Rental System." },
  { category: 'RESEARCH', question: "What applied research has Bhushan published?" },
  { category: 'CAREER', question: "What certifications does Bhushan hold?" },
  { category: 'CAREER', question: "How can I contact Bhushan?" }
];

const INITIAL_AI_MESSAGE: ChatMessage = {
  id: 'init-1',
  sender: 'ai',
  response: {
    title: "BHUSHAN_AI — Personal Knowledge Assistant",
    answer: "Hello! I am Bhushan's personal AI knowledge assistant.\n\nI can help you explore his portfolio, including:\n• Skills & technologies\n• Work experience & current internship\n• Academic background & B.Tech AI\n• Verified projects & SEETECH AI\n• Applied research papers\n• Certifications & NPTEL Elite score\n• Direct contact information\n\nAsk me anything about Bhushan.",
    highlights: [
      "Ask natural questions (e.g. 'Tell me about SEETECH' or 'What are his skills?')",
      "Type /help, /skills, /projects, /research, /certifications, or /contact for instant commands"
    ],
    relatedQueries: [
      "What are Bhushan's technical skills?",
      "Tell me about SEETECH.",
      "What is his current internship?"
    ]
  },
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export const BhushanAITerminal = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_AI_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // Instant scroll to bottom when messages or typing state changes without freezing UI
  useEffect(() => {
    handleScrollToBottom();
  }, [messages.length, isTyping]);

  // Intelligent Natural-Language Knowledge Router
  const generateResponse = (rawQuery: string): StructuredResponse => {
    const q = rawQuery.trim().toLowerCase();

    // 1. SLASH COMMANDS & INSTANT ROUTER
    if (q === '/help' || q === 'help') {
      return {
        title: "BHUSHAN_AI Command & Topic Registry",
        answer: "You can ask me questions naturally, or use these instant slash commands:",
        highlights: [
          "/about — Professional overview & AI Engineering background",
          "/skills — Technical stack (Python, C/C++, Java, Go, LLMs, RAG, SQL)",
          "/experience — Junior AI Engineer Intern at SEE-Tech Solutions",
          "/education — B.Tech Artificial Intelligence (DMIHER) & IT Diploma",
          "/projects — SEETECH Energy Efficiency AI, Agriculture Rental System, etc.",
          "/research — Applied AI, RAG Industrial Maintenance, & NLP Research",
          "/certifications — NPTEL Data Mining Elite, AWS CloudWatch, & IBM credentials",
          "/summary — Concise career summary & AI engineer profile",
          "/contact — Direct email, phone, LinkedIn, and GitHub links",
          "/clear — Reset conversation log"
        ],
        relatedQueries: ["What are his skills?", "Tell me about SEETECH."]
      };
    }

    // 2. SEETECH / ENERGY EFFICIENCY AI ASSISTANT
    if (q.includes('seetech') || q.includes('energy audit') || q.includes('energy efficiency') || q.includes('audit report')) {
      const proj = bhushanKnowledge.projects.find(p => p.id === 'proj-1') || bhushanKnowledge.projects[0];
      return {
        categoryTag: "FEATURED PROJECT // INDUSTRIAL AI",
        title: "SEETECH Energy Efficiency AI Assistant",
        answer: "Purpose:\nAn AI application combining Python source-file extraction, dense vector search, RAG retrieval, and automated consultant-grade DOCX report output, validated on live client data at SEE-Tech Solutions.\n\nFocus Areas:\n• Industrial energy analytics\n• Motors, HVAC, Boilers, Cooling Towers, & Pumps\n• Document-grounded AI recommendations\n\nAI Architecture:\n• Python & RAG retrieval pipeline\n• Vector similarity search over technical corpus\n• Deterministic prompt guardrails\n• React & Node.js web interface\n\nGoal:\nHelp industrial energy auditors identify efficiency opportunities and generate validated technical reports automatically.",
        techStack: proj ? proj.technologies : ['Python', 'RAG', 'React', 'Node.js', 'LLMs', 'Vector Search', 'DOCX'],
        highlights: [
          "Validated on live client audit files at SEE-Tech Solutions",
          "Automated consultant-grade DOCX report output generation",
          "100% document-grounded retrieval with zero hallucination guardrails"
        ],
        linkText: "Explore Projects Section",
        linkHref: "#projects",
        relatedQueries: ["Tell me about the agriculture project.", "What is his experience with RAG?"]
      };
    }

    // 3. AGRICULTURE FARMING EQUIPMENT RENTAL SYSTEM
    if (q.includes('agriculture') || q.includes('farm') || q.includes('equipment rental') || q.includes('farming')) {
      const agriProj = bhushanKnowledge.projects.find(p => p.title.toLowerCase().includes('agriculture')) || bhushanKnowledge.projects[3];
      return {
        categoryTag: "FEATURED PROJECT // FULL STACK",
        title: "Agriculture Farming Equipment Rental System",
        answer: "Purpose:\nA full-stack web application designed for agricultural machinery discovery, equipment spec verification, and rental request workflows.\n\nKey Capabilities:\n• Equipment discovery & categorisation\n• Specs & availability tracking\n• Structured rental request workflow\n\nArchitecture:\n• Responsive frontend interface\n• Data-driven backend workflow\n• Modular equipment cataloging",
        techStack: agriProj ? agriProj.technologies : ['Full Stack', 'Web Development', 'Data Management'],
        highlights: [
          "Streamlined equipment discovery & rental request pipeline",
          "Data-driven workflow for equipment specifications",
          "Clean responsive interface for agricultural machinery management"
        ],
        linkText: "View Project in Lab",
        linkHref: "#projects",
        relatedQueries: ["What other projects has Bhushan built?", "What are his technical skills?"]
      };
    }

    // 4. ABOUT / WHO IS BHUSHAN / BIO / SUMMARY
    if (q === '/about' || q === '/summary' || q.includes('who is') || q.includes('tell me about bhushan') || q.includes('bio') || q.includes('summary') || q.includes('overview')) {
      return {
        categoryTag: "CAREER PROFILE // OVERVIEW",
        title: "Bhushan Rajendra Dagwar — AI Engineer",
        answer: `${bhushanKnowledge.profile.name} is an ${bhushanKnowledge.profile.title} based in ${bhushanKnowledge.profile.location}.\n\nHe specialises in building practical AI systems across LLM/RAG architectures, document intelligence, semantic vector search, and full-stack software applications.\n\nHe is pursuing a B.Tech in Artificial Intelligence & Data Science at DMIHER (2024–2027) and has completed a 6-month Junior AI Engineer Internship at SEE-Tech Solutions Pvt. Ltd. (April 2026 – October 2026).`,
        highlights: [
          "Target Roles: AI Engineer, Junior AI/ML Engineer, LLM/RAG Developer, Data Engineer",
          "Completed Experience: Junior AI Engineer Intern at SEE-Tech Solutions Pvt. Ltd. (Apr 2026 – Oct 2026 · 6 Months)",
          "NPTEL Elite Certified in Data Mining (60% Elite Score, 3 Credits Recommended)",
          "14+ Verified Industry Credentials across AI, Cloud, and Data Science"
        ],
        linkText: "View Full About Section",
        linkHref: "#about",
        relatedQueries: ["What are his technical skills?", "Where did Bhushan intern?", "What research has he done?"]
      };
    }

    // 5. SKILLS / TECHNICAL STACK
    if (q === '/skills' || q.includes('skill') || q.includes('programming') || q.includes('technology') || q.includes('tech stack') || q.includes('languages')) {
      return {
        categoryTag: "TECHNICAL REPERTOIRE",
        title: "Bhushan's Technical Skills & Stack",
        answer: "Programming Languages:\n• Python • C • C++ • Java • Go / Golang\n\nAI & Machine Learning:\n• Artificial Intelligence • Machine Learning • LLMs • RAG\n• Prompt Engineering • PyTorch • scikit-learn\n\nData & Analytics:\n• SQL (PostgreSQL / Vector Search) • Data Mining (NPTEL Elite) • Power BI\n\nWeb & Application Development:\n• Mobile App Development (Android) • React • FastAPI • Node.js",
        techStack: ['Python', 'Java', 'Go', 'LLMs', 'RAG', 'SQL', 'PyTorch', 'React', 'FastAPI'],
        highlights: [
          "Hands-on building production RAG pipelines & LLM document synthesis layers",
          "Strong computer science core spanning algorithms, OOP, and database design"
        ],
        linkText: "Inspect Core Skills Constellation",
        linkHref: "#skills",
        relatedQueries: ["What is his experience with Python?", "Tell me about his RAG experience."]
      };
    }

    // 6. EXPERIENCE / INTERNSHIP
    if (q === '/experience' || q.includes('experience') || q.includes('internship') || q.includes('work') || q.includes('job') || q.includes('company') || q.includes('see-tech') || q.includes('seetech')) {
      const expItem = bhushanKnowledge.experience[0];
      return {
        categoryTag: "WORK EXPERIENCE // COMPLETED INTERNSHIP",
        title: "Completed Role: Junior AI Engineer Intern",
        answer: `Company: ${expItem.company}\nRole: ${expItem.role}\nPeriod: April 2026 – October 2026 (6-Month Internship Completed)\nLocation: ${expItem.location} (${expItem.arrangement})\n\nDescription:\n${expItem.description}`,
        highlights: [
          "Completed 6-month commercial AI engineering internship",
          "Developed & implemented AI-driven solutions for real-world enterprise applications",
          "Built Machine Learning models, analyzed data, and integrated AI functionalities into scalable web platforms"
        ],
        techStack: expItem.skills,
        linkText: "View Work Experience Timeline",
        linkHref: "#experience",
        relatedQueries: ["What projects did he build at SEE-Tech?", "What is his education?"]
      };
    }

    // 7. EDUCATION / ACADEMICS
    if (q === '/education' || q.includes('education') || q.includes('study') || q.includes('degree') || q.includes('b.tech') || q.includes('college') || q.includes('diploma')) {
      return {
        categoryTag: "ACADEMIC FOUNDATION",
        title: "Education & Qualifications",
        answer: "Degree: Bachelor of Technology (B.Tech)\nField: Artificial Intelligence & Data Science\nInstitution: Datta Meghe Institute of Higher Education & Research (DMIHER)\nPeriod: 2024 – 2027 (IN PROGRESS)\n\nDiploma: Diploma of Education\nField: Information Technology\nInstitution: Government Polytechnic College\nPeriod: 2021 – 2024 (First Class / Distinction)",
        highlights: [
          "Specialised coursework in AI, Data Science, Machine Learning, Data Structures & Software Engineering",
          "Solid academic progression from IT Diploma to B.Tech in Artificial Intelligence & Data Science"
        ],
        linkText: "View Academic Timeline",
        linkHref: "#education",
        relatedQueries: ["What certifications does Bhushan have?", "What are his skills?"]
      };
    }

    // 8. RESEARCH / PUBLICATIONS
    if (q === '/research' || q.includes('research') || q.includes('paper') || q.includes('publication') || q.includes('smart manufacturing') || q.includes('maintenance')) {
      return {
        categoryTag: "APPLIED RESEARCH & INNOVATION",
        title: "Applied AI Research Works",
        answer: "01. Career Development AI Assistant:\n• Focus: LLMs + RAG for personalised career guidance & resume-skill gap analysis.\n\n02. NLP in Customer Service Chatbots:\n• Focus: Natural Language Processing efficiency, safety guardrails, & intent classification.\n\n03. RAG for Industrial Maintenance Assistance:\n• Focus: LLMs + Smart Manufacturing decision support frameworks for real-time factory maintenance.",
        highlights: [
          "Research focused on practical industrial AI & decision-support frameworks",
          "Explores RAG retrieval optimization, NLP safety, and career intelligence"
        ],
        linkText: "View Applied Research Section",
        linkHref: "#research",
        relatedQueries: ["Tell me about SEETECH.", "What are his technical skills?"]
      };
    }

    // 9. CERTIFICATIONS & CREDENTIALS
    if (q === '/certifications' || q.includes('certificat') || q.includes('nptel') || q.includes('aws') || q.includes('credential')) {
      const eliteCert = bhushanKnowledge.certifications.find(c => c.isElite);
      return {
        categoryTag: "VERIFIED CREDENTIALS",
        title: "Certifications & Credentials (14+ Verified)",
        answer: `Bhushan holds 14+ verified credentials across AI, Cloud, and Data Science:\n\nFeatured Credential:\n• ${eliteCert ? eliteCert.title : 'NPTEL Data Mining Elite Certification'}\n• Issuer: ${eliteCert ? eliteCert.issuer : 'NPTEL / IIT Kharagpur'}\n• Score: ${eliteCert ? eliteCert.score : '60% (Elite Score)'}\n\nKey Categories:\n• AI / GenAI: Generative AI, AI Primers, IBM Credentials\n• Programming: Go Programming, C++\n• Cloud & Monitoring: AWS CloudWatch Application Signals\n• Healthcare AI: Medical Text & Image Processing, Health Informatics`,
        highlights: [
          "NPTEL Data Mining Elite Certified (3 Academic Credits Recommended)",
          "AWS CloudWatch & Generative AI verified credentials"
        ],
        linkText: "View All 14+ Certifications",
        linkHref: "#certifications",
        relatedQueries: ["What is his education?", "Where is Bhushan working?"]
      };
    }

    // 10. WHY HIRE / CAREER SUMMARY / TARGET ROLES
    if (q.includes('hire') || q.includes('why should') || q.includes('target role') || q.includes('engineer profile') || q.includes('candidate')) {
      return {
        categoryTag: "VALUE PROPOSITION",
        title: "Why Hire Bhushan Rajendra Dagwar?",
        answer: "Bhushan is an AI & Data Science engineering student who combines solid AI algorithms (PyTorch, scikit-learn) with real production code (React, FastAPI, Python, SQL).\n\nWhy he stands out:\n• Hands-on RAG & LLM experience on live enterprise data at SEE-Tech\n• Deterministic prompt guardrails & zero-hallucination retrieval pipelines\n• High ship speed & rapid full-stack integration\n• Strong academic & research foundation with NPTEL Elite certification",
        highlights: [
          "Proven ability to build end-to-end RAG pipelines and automated report systems",
          "Targeting AI Engineer, Junior AI/ML Engineer, LLM Developer, or Data Engineer roles"
        ],
        linkText: "Go to Contact Form",
        linkHref: "#contact",
        relatedQueries: ["How can I contact Bhushan?", "Tell me about SEETECH."]
      };
    }

    // 11. CONTACT & SOCIAL LINKS
    if (q === '/contact' || q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('github') || q.includes('reach')) {
      return {
        categoryTag: "DIRECT CONTACT",
        title: "Contact Information",
        answer: `You can reach out to Bhushan directly:\n\n• Email: ${bhushanKnowledge.contact.email}\n• Phone: ${bhushanKnowledge.contact.phone}\n• LinkedIn: ${bhushanKnowledge.contact.linkedin}\n• GitHub: ${bhushanKnowledge.contact.github}\n• Location: ${bhushanKnowledge.profile.location}`,
        highlights: [
          "Directly available for AI Engineering & LLM/RAG Developer opportunities",
          "Fast response time via email or LinkedIn"
        ],
        linkText: "Go to Contact Form",
        linkHref: "#contact",
        relatedQueries: ["Give me Bhushan's career summary.", "What are his technical skills?"]
      };
    }

    // 12. CLEAR COMMAND
    if (q === '/clear' || q === 'clear') {
      return { answer: 'CLEAR_ACTION' };
    }

    // 13. ANTI-HALLUCINATION DEFAULT FALLBACK
    return {
      categoryTag: "PORTFOLIO KNOWLEDGE BASE",
      title: "Information Query Result",
      answer: `I don't have that specific detail in Bhushan's portfolio knowledge base.\n\nI can provide verified information on:\n• Skills & Programming Languages\n• SEE-Tech Work Experience & Internship\n• B.Tech AI Education\n• Projects (SEETECH AI, Agriculture Rental, etc.)\n• Applied Research & Publications\n• Certifications & NPTEL Elite Score\n• Contact Details`,
      highlights: [
        "Try asking: 'What are Bhushan's skills?' or 'Tell me about SEETECH'",
        "Or click one of the quick suggested questions below"
      ],
      relatedQueries: ["What are Bhushan's technical skills?", "Tell me about SEETECH.", "How can I contact Bhushan?"]
    };
  };

  const handleSendMessage = (customText?: string) => {
    const messageContent = customText || input;
    if (!messageContent.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      queryText: messageContent,
      response: { answer: messageContent },
      timestamp
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customText) setInput('');
    setIsTyping(true);

    // Simulate fast crisp response
    setTimeout(() => {
      const generated = generateResponse(messageContent);
      if (generated.answer === 'CLEAR_ACTION') {
        setMessages([INITIAL_AI_MESSAGE]);
      } else {
        const aiMsg: ChatMessage = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          response: generated,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiMsg]);
      }
      setIsTyping(false);
    }, 320);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearHistory = () => {
    setMessages([INITIAL_AI_MESSAGE]);
  };

  const filteredStarterQuestions = STARTER_QUESTIONS.filter(q => {
    if (activeCategory === 'ALL') return true;
    return q.category === activeCategory;
  });

  return (
    <section id="terminal" className="py-4 sm:py-6 relative">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-6"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-[11px] tracking-widest text-luxury font-medium uppercase px-3 py-1 rounded-full bg-luxury/10 border border-luxury/20">
              09 / AI TERMINAL
            </span>
            <span className="h-[1px] w-6 bg-white/10" />
            <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
              <BlurText text="INTERACTIVE REPERTOIRE ENGINE" delay={70} animateBy="words" direction="top" stepDuration={0.3} />
            </span>
          </div>

          <div className="mb-2">
            <FoldText
              text="BHUSHAN_AI TERMINAL"
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

          <p className="font-body text-text font-medium text-xs sm:text-sm max-w-2xl leading-relaxed">
            An interactive AI-powered Q&A interface about Bhushan’s technical journey, verified projects, applied research, skills, and experience.
          </p>
        </motion.div>

        {/* Main Q&A Chatbot Interface Window Container (EXACT DIMENSIONS PRESERVED) */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[28px] glass-card border border-white/15 overflow-hidden shadow-2xl flex flex-col max-w-4xl mx-auto bg-[#0A0A0E]/70 backdrop-blur-xl"
        >
          
          {/* Terminal Header Bar */}
          <GlareHover
            borderRadius="0px"
            glareColor="#C9B27C"
            glareOpacity={0.08}
            glareSize={180}
            transitionDuration={800}
          >
            <div className="px-3.5 sm:px-5 py-3 bg-surface-2 border-b border-line flex flex-wrap items-center justify-between gap-2.5 font-mono text-xs">
              
              {/* Left Status & Title */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                
                <span className="text-muted-dark font-mono text-xs">|</span>
                
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-display font-bold text-text text-xs sm:text-sm tracking-wide">BHUSHAN_AI</span>
                  <div className="flex items-center gap-1 sm:gap-1.5 bg-accent/10 border border-accent/30 text-accent text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                    </span>
                    <span>ONLINE</span>
                  </div>
                </div>
              </div>

              {/* Right Technical Metadata & Action */}
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] text-slate-300 font-mono">
                <span className="hidden sm:inline bg-surface border border-line-light px-2 py-0.5 rounded">MODEL: BHUSHAN_AI_V2.6</span>
                <button
                  onClick={handleScrollToBottom}
                  className="flex items-center gap-1 text-accent hover:text-white bg-accent/10 hover:bg-accent/20 border border-accent/30 px-2 py-0.5 rounded transition-all font-bold"
                  title="Scroll to latest message"
                >
                  <ArrowDown className="w-3 h-3 text-accent" />
                  <span>Scroll</span>
                </button>
                <button
                  onClick={handleClearHistory}
                  className="flex items-center gap-1 text-muted hover:text-luxury transition-colors p-1"
                  title="Clear Conversation History"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              </div>
            </div>
          </GlareHover>

          {/* Ultra-Snappy & Comfortable Scrollable Conversation Stream Area */}
          <div 
            ref={scrollRef} 
            data-lenis-prevent
            className="p-3 sm:p-5 h-[270px] sm:h-[320px] overflow-y-auto flex flex-col gap-3 font-body leading-relaxed bg-[#050508]/80 text-xs sm:text-sm shadow-inner min-w-0"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-2 sm:gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} min-w-0`}
              >
                {/* AI Avatar */}
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-luxury/10 border border-luxury/30 text-luxury flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-luxury" />
                  </div>
                )}

                {/* Message Bubble */}
                <div 
                  className={`p-2.5 sm:p-3.5 rounded-xl transition-all shadow-md min-w-0 break-words ${
                    msg.sender === 'user' 
                      ? 'bg-accent/15 border border-accent/30 text-text rounded-tr-xs max-w-[85%]' 
                      : 'bg-surface-2/95 border border-white/15 text-text rounded-tl-xs max-w-[92%]'
                  }`}
                >
                  {/* Category Tag if AI */}
                  {msg.sender === 'ai' && msg.response.categoryTag && (
                    <div className="font-mono text-[8px] sm:text-[9px] text-luxury mb-1 font-bold uppercase tracking-wider break-words">
                      {msg.response.categoryTag}
                    </div>
                  )}

                  {/* Title for AI Response */}
                  {msg.sender === 'ai' && msg.response.title && (
                    <div className="font-display font-bold text-xs sm:text-sm text-text mb-1.5 pb-1 border-b border-line/60 break-words">
                      {msg.response.title}
                    </div>
                  )}

                  {/* Query Header for AI response */}
                  {msg.sender === 'ai' && msg.queryText && (
                    <div className="font-mono text-[9px] sm:text-[10px] text-accent mb-1.5 pb-1 border-b border-line flex items-center gap-1.5 font-bold uppercase tracking-wider break-words">
                      <Search className="w-3 h-3 shrink-0" />
                      <span className="break-words">QUERY: {msg.queryText}</span>
                    </div>
                  )}

                  {/* Main Answer Content */}
                  <div className="text-text font-medium leading-snug sm:leading-relaxed whitespace-pre-line text-[11px] sm:text-xs break-words">
                    {msg.response.answer}
                  </div>

                  {/* Optional Tech Stack Chips */}
                  {msg.response.techStack && (
                    <div className="flex flex-wrap gap-1 my-2">
                      {msg.response.techStack.map((tech) => (
                        <span key={tech} className="font-mono text-[9px] sm:text-[10px] text-luxury font-semibold bg-luxury/10 border border-luxury/30 px-2 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Optional Highlights Bullet List */}
                  {msg.response.highlights && (
                    <ul className="space-y-1 mt-2 pt-1.5 border-t border-line/60">
                      {msg.response.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-slate-200">
                          <CheckCircle2 className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                          <span className="break-words">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Anchor Link if relevant */}
                  {msg.response.linkText && msg.response.linkHref && (
                    <div className="mt-3 pt-2 border-t border-line">
                      <a 
                        href={msg.response.linkHref}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-luxury font-bold hover:underline"
                      >
                        <span>{msg.response.linkText}</span>
                        <ArrowRight className="w-3 h-3 text-luxury" />
                      </a>
                    </div>
                  )}

                  {/* Related Suggested Queries Chips */}
                  {msg.sender === 'ai' && msg.response.relatedQueries && (
                    <div className="mt-3 pt-2 border-t border-line/40 flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[9px] text-muted uppercase">Related:</span>
                      {msg.response.relatedQueries.map((rq, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(rq)}
                          className="font-mono text-[10px] text-accent hover:text-white bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full transition-colors text-left"
                        >
                          {rq}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Timestamp */}
                  <div className="mt-2 text-[10px] font-mono text-muted-dark text-right">
                    {msg.timestamp}
                  </div>
                </div>

                {/* User Avatar */}
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-[10px] sm:text-xs">
                    YOU
                  </div>
                )}
              </div>
            ))}

            {/* Lightweight CSS Thinking State */}
            {isTyping && (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-2/90 border border-white/10 max-w-[200px] text-luxury font-mono text-xs">
                <Sparkles className="w-3.5 h-3.5 text-luxury animate-pulse" />
                <span className="text-[11px] text-slate-300">BHUSHAN_AI is thinking...</span>
              </div>
            )}
          </div>

          {/* Starter Suggested Questions Category Filter Bar */}
          <div className="p-2.5 sm:p-3 bg-surface-2 border-t border-line flex flex-col gap-2.5 w-full min-w-0">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-mono text-[9px] sm:text-[10px] text-luxury font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                <HelpCircle className="w-3.5 h-3.5 text-luxury shrink-0" />
                <span>SUGGESTED QUESTIONS:</span>
              </span>

              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px] sm:text-[10px] py-0.5 min-w-0">
                {['ALL', 'ABOUT', 'TECHNICAL', 'PROJECTS', 'RESEARCH', 'CAREER'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-2.5 py-1 rounded-md transition-all font-semibold flex-none whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-luxury text-bg font-bold'
                        : 'text-muted hover:text-text bg-surface'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Responsive Starter Question Cards */}
            <div className="flex flex-wrap items-stretch gap-1.5 w-full min-w-0">
              {filteredStarterQuestions.map((sq, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(sq.question)}
                  className="font-mono text-[10px] sm:text-[11px] text-text hover:text-luxury bg-surface hover:bg-luxury/10 border border-line-light hover:border-luxury/30 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all flex items-start gap-1.5 flex-1 sm:flex-none min-w-[200px] sm:min-w-0 text-left shadow-sm break-words"
                >
                  <span className="text-luxury font-bold shrink-0 mt-0.5">&gt;</span>
                  <span className="break-words min-w-0 leading-snug">{sq.question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Fixed Input Control Area at Bottom */}
          <div className="p-3 sm:p-3.5 bg-surface border-t border-line flex flex-col gap-2.5 w-full max-w-full min-w-0">
            <div className="flex items-center gap-2 w-full min-w-0">
              <span className="font-mono text-accent text-xs sm:text-sm font-bold pl-1 sm:pl-2 shrink-0">&gt;</span>
              <input 
                type="text" 
                placeholder="Ask BHUSHAN_AI anything or type /help..." 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-text placeholder-muted text-xs sm:text-sm font-mono flex-1 min-w-0 w-full"
              />
              <button 
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isTyping}
                className="p-2 sm:p-2.5 rounded-xl bg-luxury hover:bg-luxury-light text-bg font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-md disabled:opacity-40 disabled:hover:scale-100 hover:scale-105"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-mono text-xs">SEND</span>
              </button>
            </div>

            {/* Quick Slash Commands Shortcuts Line (NEVER COMPRESSED) */}
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-muted pt-2 border-t border-line/40 w-full min-w-0">
              <span className="text-muted-dark uppercase tracking-wider shrink-0 text-[9px] sm:text-[10px] font-bold">QUICK COMMANDS:</span>
              {['/about', '/skills', '/projects', '/research', '/certifications', '/contact', '/summary', '/clear'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => handleSendMessage(cmd)}
                  className="px-2.5 py-1 rounded-md bg-surface-2 hover:bg-surface border border-line-light text-accent hover:text-white transition-colors flex-none whitespace-nowrap text-[10px] font-bold uppercase shadow-sm"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Profile Summary Card Underneath Chatbot */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 p-6 sm:p-8 rounded-[28px] glass-card border border-white/10 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-line font-mono text-xs">
            <Bot className="w-4 h-4 text-luxury" />
            <span className="text-luxury font-bold tracking-widest uppercase">BHUSHAN_AI // PROFILE SUMMARY</span>
          </div>

          <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-6">
            AI & Data Science student focused on building practical AI systems using Python, Machine Learning, LLMs, RAG, NLP, data analytics, and intelligent decision-support technologies. His portfolio combines software development, applied AI projects, industrial AI research, and continuous technical learning.
          </p>

          {/* 5 Compact Feature Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-mono text-xs">
            <div className="p-3 rounded-2xl bg-surface-2 border border-line-light flex flex-col justify-between">
              <span className="text-luxury font-bold text-[11px] mb-1">AI / ML</span>
              <span className="text-slate-300 text-[10px]">Practical AI Development</span>
            </div>
            
            <div className="p-3 rounded-2xl bg-surface-2 border border-line-light flex flex-col justify-between">
              <span className="text-accent font-bold text-[11px] mb-1">LLM + RAG</span>
              <span className="text-slate-300 text-[10px]">Applied Intelligent Systems</span>
            </div>

            <div className="p-3 rounded-2xl bg-surface-2 border border-line-light flex flex-col justify-between">
              <span className="text-violet font-bold text-[11px] mb-1">RESEARCH</span>
              <span className="text-slate-300 text-[10px]">Industrial AI Frameworks</span>
            </div>

            <div className="p-3 rounded-2xl bg-surface-2 border border-line-light flex flex-col justify-between">
              <span className="text-text font-bold text-[11px] mb-1">PROJECTS</span>
              <span className="text-slate-300 text-[10px]">Real-World Problem Solving</span>
            </div>

            <div className="p-3 rounded-2xl bg-surface-2 border border-line-light flex flex-col justify-between col-span-2 sm:col-span-1">
              <span className="text-yellow-400 font-bold text-[11px] mb-1">CERTIFICATIONS</span>
              <span className="text-slate-300 text-[10px]">Continuous Technical Learning</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
