export interface ResearchPaper {
  id: string;
  number: string;
  tag: string;
  year: string;
  title: string;
  category: string;
  researchType: string;
  summary: string;
  problem: string;
  approach: string;
  contribution: string;
  focusAreas: string[];
  technologies: string[];
  keywords: string[];
}

export const APPLIED_RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'career-assistant-rag',
    number: '01',
    tag: 'RESEARCH 01',
    year: '2026',
    title: 'An AI-Powered Career Development Assistant Using Large Language Models and Retrieval-Augmented Generation',
    category: 'AI • Large Language Models • RAG • NLP • Career Intelligence',
    researchType: 'Applied AI Research',
    summary: 'Research focused on developing an AI-powered career development assistant using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG). The proposed approach focuses on providing personalized career guidance, identifying skill gaps, recommending relevant learning paths, and generating context-aware career recommendations using retrieved knowledge rather than relying only on the model\'s internal knowledge.',
    problem: 'Conventional career guidance systems rely on static databases and rigid rule-sets, failing to adapt to rapidly evolving industry requirements, personalized skill gaps, and context-aware learning paths.',
    approach: 'Engineered a Retrieval-Augmented Generation (RAG) framework connecting Large Language Models to vector-indexed career frameworks and educational repositories, grounding model reasoning for precise skill-gap analysis.',
    contribution: 'Provides a context-grounded AI framework for career trajectory optimization, demonstrating significant hallucination reduction in automated skill mapping and course recommendations.',
    focusAreas: [
      'Personalized career guidance',
      'Skill-gap analysis',
      'Career-path recommendation',
      'Learning-resource recommendation',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Context-aware AI responses'
    ],
    technologies: [
      'Python',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Natural Language Processing',
      'Vector Search',
      'AI-based Recommendation'
    ],
    keywords: [
      'LLM',
      'RAG',
      'Career Development',
      'NLP',
      'Personalized Recommendation'
    ]
  },
  {
    id: 'nlp-chatbots-safety',
    number: '02',
    tag: 'RESEARCH 02',
    year: '2025',
    title: 'The Importance of Natural Language Processing in Chatbots for Customer Service Efficiency and Safety',
    category: 'NLP • Conversational AI • Chatbots • Customer Service',
    researchType: 'Applied AI / NLP Research',
    summary: 'Research focused on examining the importance of Natural Language Processing in customer-service chatbots and how NLP techniques can improve automated customer interactions. The study explores areas such as intent recognition, natural-language understanding, response generation, service efficiency, response accuracy, and safety-aware communication.',
    problem: 'Automated customer service bots frequently encounter intent misclassification, rigid response loops, and a lack of safety-aware communication guardrails when resolving complex user requests.',
    approach: 'Examined multi-stage NLP and Conversational AI pipelines integrating intent classification, semantic parsing, and response safety validation to maximize interaction accuracy and operational throughput.',
    contribution: 'Establishes a safety-oriented architectural framework for conversational agents, balancing customer service resolution speed with safety-aware communication.',
    focusAreas: [
      'Natural Language Processing',
      'Customer-service automation',
      'Intent recognition',
      'Natural-language understanding',
      'Automated response generation',
      'Customer-service efficiency',
      'Safety-aware chatbot communication',
      'Conversational AI'
    ],
    technologies: [
      'Natural Language Processing',
      'Chatbots',
      'Conversational AI',
      'Machine Learning',
      'Large Language Models',
      'Intent Classification'
    ],
    keywords: [
      'NLP',
      'Chatbots',
      'Customer Service',
      'Conversational AI',
      'Safety'
    ]
  },
  {
    id: 'industrial-maintenance-rag',
    number: '03',
    tag: 'RESEARCH 03',
    year: '2026',
    title: 'Retrieval-Augmented Large Language Models for Industrial Maintenance Assistance: An Intelligent Decision Support Framework for Smart Manufacturing',
    category: 'Industrial AI • LLM • RAG • Smart Manufacturing • Maintenance',
    researchType: 'Industrial AI Research',
    summary: 'Research focused on applying Retrieval-Augmented Large Language Models to industrial maintenance assistance. The proposed intelligent decision-support framework uses retrieval-based access to technical and maintenance knowledge to provide grounded assistance for troubleshooting, maintenance procedures, equipment-related queries, and technical decision-making in smart manufacturing environments.',
    problem: 'Shop-floor technicians experience severe operational downtime when navigating dense equipment manuals, technical datasheets, and ISO maintenance standards during urgent machinery troubleshooting.',
    approach: 'Developed an intelligent decision-support framework using Retrieval-Augmented LLMs over technical documentation, equipment logs, and machinery datasheets, delivering grounded diagnostic assistance.',
    contribution: 'Demonstrates a production-oriented RAG decision-support architecture tailored for smart manufacturing shop floors, accelerating equipment troubleshooting precision.',
    focusAreas: [
      'Industrial maintenance assistance',
      'Retrieval-Augmented Generation',
      'Large Language Models',
      'Technical knowledge retrieval',
      'Equipment troubleshooting',
      'Maintenance decision support',
      'Smart manufacturing',
      'Knowledge-grounded AI'
    ],
    technologies: [
      'Python',
      'Large Language Models',
      'RAG',
      'NLP',
      'Vector Search',
      'Knowledge Retrieval',
      'Smart Manufacturing'
    ],
    keywords: [
      'LLM',
      'RAG',
      'Industrial Maintenance',
      'Smart Manufacturing',
      'Decision Support'
    ]
  }
];
