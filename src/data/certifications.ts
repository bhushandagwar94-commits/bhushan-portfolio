export interface Certification {
  id: string;
  title: string;
  issuer: string;
  displayDate: string;
  dateSort: string; // ISO format for programmatic sorting YYYY-MM-DD
  score?: string;
  credentialId?: string;
  url?: string;
  tags: string[];
  category: 'All' | 'AI / ML' | 'Generative AI' | 'Data Science' | 'Programming' | 'Cloud' | 'NLP' | 'Healthcare';
  isElite?: boolean;
  nptelDetails?: {
    fundedBy: string;
    courseDuration: string;
    consolidatedScore: string;
    assignmentsScore: string;
    examScore: string;
    rollNo: string;
    creditsRecommended: string;
    totalCandidatesCertified: string;
    coordinator: string;
    platform?: string;
  };
}

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'nptel-data-mining-elite',
    title: 'Data Mining (Elite)',
    issuer: 'NPTEL · IIT Kharagpur',
    displayDate: 'Mar 2026',
    dateSort: '2026-03-30',
    score: '60%',
    credentialId: 'NPTEL26CS58S563501995',
    url: '',
    tags: ['Data Mining', 'NPTEL', 'Elite', 'SWAYAM'],
    category: 'Data Science',
    isElite: true,
    nptelDetails: {
      fundedBy: 'Ministry of Education (MoE), Government of India',
      courseDuration: '8 weeks (Jan–Mar 2026)',
      consolidatedScore: '60%',
      assignmentsScore: '23.92/25',
      examScore: '36/75',
      rollNo: 'NPTEL26CS58S563501995',
      creditsRecommended: '3',
      totalCandidatesCertified: '2,769',
      coordinator: 'Prof. Haimanti Banerji, NPTEL, IIT Kharagpur',
      platform: 'SWAYAM | Skill India'
    }
  },
  {
    id: 'infosys-principles-genai',
    title: 'Principles of Generative AI Certification',
    issuer: 'Infosys Springboard',
    displayDate: '17 Apr 2026',
    dateSort: '2026-04-17',
    url: 'https://verify.onwingspan.com',
    tags: ['Generative AI'],
    category: 'Generative AI'
  },
  {
    id: 'infosys-ai-primer',
    title: 'Artificial Intelligence Primer Certification',
    issuer: 'Infosys Springboard',
    displayDate: '17 Apr 2026',
    dateSort: '2026-04-17',
    url: 'https://verify.onwingspan.com',
    tags: ['Artificial Intelligence', 'AI'],
    category: 'AI / ML'
  },
  {
    id: 'infosys-mastering-go',
    title: 'Mastering Go Programming',
    issuer: 'Infosys Springboard',
    displayDate: '14 Apr 2026',
    dateSort: '2026-04-14',
    url: 'https://verify.onwingspan.com',
    tags: ['Go', 'Programming'],
    category: 'Programming'
  },
  {
    id: 'aws-intro-genai',
    title: 'Introduction to Generative AI – Art of the Possible',
    issuer: 'Amazon Web Services (AWS)',
    displayDate: '27 Mar 2026',
    dateSort: '2026-03-27',
    url: '',
    tags: ['Generative AI', 'AWS', 'Cloud'],
    category: 'Generative AI'
  },
  {
    id: 'aws-cloudwatch-dotnet',
    title: 'Monitor .NET Applications using Amazon CloudWatch Application Signals',
    issuer: 'Amazon Web Services (AWS)',
    displayDate: '27 Mar 2026',
    dateSort: '2026-03-27',
    url: '',
    tags: ['AWS', 'CloudWatch', 'Observability', '.NET'],
    category: 'Cloud'
  },
  {
    id: 'microsoft-cpp-fundamentals',
    title: 'C++ Programming Fundamentals',
    issuer: 'Microsoft · Coursera',
    displayDate: '12 Dec 2025',
    dateSort: '2025-12-12',
    credentialId: '863IYS2O6LDO',
    url: 'https://coursera.org/verify/863IYS2O6LDO',
    tags: ['C++', 'Programming'],
    category: 'Programming'
  },
  {
    id: 'ibm-genai-intro',
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM · Coursera',
    displayDate: '12 Dec 2025',
    dateSort: '2025-12-12',
    credentialId: '6PLW9HR6GQJX',
    url: 'https://coursera.org/verify/6PLW9HR6GQJX',
    tags: ['Generative AI', 'IBM', 'AI'],
    category: 'Generative AI'
  },
  {
    id: 'dmher-medical-text-image',
    title: 'Medical Text and Image Processing',
    issuer: 'Datta Meghe Institute of Higher Education & Research (DU)',
    displayDate: 'Dec 2025',
    dateSort: '2025-12-01',
    credentialId: 'JS2ZWBOOVYRG',
    url: '',
    tags: ['NLP', 'Medical Imaging', 'Healthcare AI'],
    category: 'Healthcare'
  },
  {
    id: 'glasgow-clinical-databases',
    title: 'Data Mining of Clinical Databases – CDSS 1',
    issuer: 'University of Glasgow · Coursera',
    displayDate: '25 Sep 2025',
    dateSort: '2025-09-25',
    credentialId: 'ZSNSWFIG4072',
    url: 'https://coursera.org/verify/ZSNSWFIG4072',
    tags: ['Data Mining', 'Clinical Decision Support', 'Healthcare'],
    category: 'Healthcare'
  },
  {
    id: 'jhu-health-informatics',
    title: 'The Data Science of Health Informatics',
    issuer: 'Johns Hopkins University',
    displayDate: 'Sep 2025',
    dateSort: '2025-09-15',
    credentialId: '6GHHK8QSH0IU',
    url: '',
    tags: ['Data Science', 'Health Informatics', 'Healthcare'],
    category: 'Healthcare'
  },
  {
    id: 'jhu-multiple-regression',
    title: 'Multiple Regression Analysis in Public Health',
    issuer: 'Johns Hopkins University',
    displayDate: 'Sep 2025',
    dateSort: '2025-09-10',
    credentialId: 'QSJKGO8D7T0C',
    url: '',
    tags: ['Statistics', 'Regression', 'Data Science'],
    category: 'Data Science'
  },
  {
    id: 'dmher-recommender-b',
    title: 'Healthcare Recommender System Part B',
    issuer: 'Datta Meghe Institute of Higher Education & Research (DU)',
    displayDate: 'Aug 2025',
    dateSort: '2025-08-15',
    credentialId: 'O1J2MFD4KJEZ',
    url: '',
    tags: ['Recommender Systems', 'Healthcare AI'],
    category: 'Healthcare'
  },
  {
    id: 'dmher-recommender-a',
    title: 'Healthcare Recommender System Part A',
    issuer: 'Datta Meghe Institute of Higher Education & Research (DU)',
    displayDate: 'Jul 2025',
    dateSort: '2025-07-15',
    credentialId: 'KH8X8O86KO3P',
    url: '',
    tags: ['Recommender Systems', 'Healthcare AI'],
    category: 'Healthcare'
  }
];
