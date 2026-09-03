export interface Project {
  id: string;
  title: string;
  number: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  start: string;
  end: string;
  location: string;
  arrangement: string;
  description: string;
  skills: string[];
  attachment?: string;
}

export interface Research {
  id: string;
  title: string;
  area: string;
  abstract: string;
  status: 'Submitted' | 'Under Review' | 'Published';
  year: string;
}

export const personalInfo = {
  name: 'Bhushan Rajendra Dagwar',
  title: 'AI ENGINEER | APPLIED AI & LLM SYSTEMS',
  subtitle: 'B.Tech in Artificial Intelligence & Data Science',
  email: 'bhushandagwar94@gmail.com',
  phone: '+91 8275070573',
  linkedin: 'https://www.linkedin.com/in/bhushan-dagwar-269612223/',
  availability: 'OPEN TO AI / ML OPPORTUNITIES',
  location: 'Nagpur, Maharashtra, India',
  bio: "AI engineer with internship experience taking systems from raw source data through to working, client-facing applications. I combine machine learning and LLM/RAG techniques with full-stack integration to build practical AI systems.",
  about: "AI engineer with internship experience taking systems from raw source data through to working, client-facing applications. Combines machine learning and LLM/RAG techniques with full-stack integration, building extraction pipelines, retrieval layers, prompt workflows, and automated document output as a single delivered product."
};

export const skills = [
  'LLMs', 'Retrieval-Augmented Generation (RAG)', 'Embeddings', 'Vector Search', 
  'Prompt Engineering', 'Regression', 'Classification', 'Feature Engineering', 'Model Evaluation',
  'Python', 'JavaScript', 'SQL', 'MySQL', 'Java', 'Go', 'C', 'C++',
  'AnythingLLM', 'Pandas', 'NumPy', 'scikit-learn', 'Node.js', 'React.js', 'Django',
  'REST API Integration', 'Document Processing Pipelines', 'DOCX Generation', 'Git', 'VS Code', 'Dokploy', 'Power BI'
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    role: 'Junior AI Engineer Intern',
    company: 'SEE-Tech Solutions Pvt. Ltd.',
    type: '6-Month Internship',
    start: '2026-04',
    end: '2026-10',
    location: 'Nagpur, Maharashtra, India',
    arrangement: 'On-site',
    description: 'Worked on developing and implementing AI-driven solutions for real-world applications. Built machine learning models, analyzed data, and integrated AI functionalities into scalable web platforms.',
    skills: ['Machine Learning', 'Artificial Intelligence (AI)'],
    attachment: 'Offer Letter'
  },
  {
    id: 'exp-2',
    role: 'Data Analyst',
    company: 'Clustor Computing',
    type: 'Internship',
    start: '2025-04',
    end: '2025-05',
    location: 'Nagpur, Maharashtra, India',
    arrangement: 'On-site',
    description: 'Developed a real estate rental web platform and worked on Python-based projects with hands-on experience in full-stack development and data-driven applications.',
    skills: ['Data Mining', 'Data Analysis']
  },
  {
    id: 'exp-3',
    role: 'Python Developer',
    company: 'SSIT Pvt Ltd Nagpur',
    type: 'Internship',
    start: '2022-07',
    end: '2022-08',
    location: 'Nagpur, Maharashtra, India',
    arrangement: 'On-site',
    description: 'Worked on Python and Django technologies, covering backend development, database handling, and project structuring in Django. This experience helped build a strong foundation in software development and real-world application development.',
    skills: ['Python (Programming Language)', 'Django'],
    attachment: 'Internship Certificate'
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'AI-BASED ENERGY AUDIT REPORT GENERATOR',
    category: 'INDUSTRIAL AI / LLM / RAG / AUTOMATION',
    description: 'Complete AI application combining a Python extraction layer, RAG retrieval, React and Node.js interface, and automated DOCX output, validated on live client data.',
    technologies: ['Python', 'RAG', 'React', 'Node.js', 'LLMs', 'Embeddings', 'Vector Search', 'DOCX'],
    features: [
      'Source-file extraction',
      'RAG retrieval',
      'Semantic search',
      'AI-assisted report drafting',
      'Automated DOCX generation',
      'React interface',
      'Node.js integration',
      'Quality and completeness checks'
    ],
    featured: true
  },
  {
    id: 'proj-2',
    number: '02',
    title: 'ENERGY-EFFICIENCY AI ASSISTANT',
    category: 'INDUSTRIAL AI / CONVERSATIONAL AI / LLM',
    description: 'Conversational AI system with specialised prompts and a responsive chat interface for industrial energy analysis.',
    technologies: ['LLM', 'RAG', 'Python', 'React', 'Prompt Engineering'],
    features: [
      'Conversational AI',
      'Industrial energy analysis',
      'Specialised prompts',
      'Responsive chat interface',
      'Document-grounded assistance'
    ],
    featured: true
  },
  {
    id: 'proj-3',
    number: '03',
    title: 'STUDENT PERFORMANCE PREDICTION USING ML',
    category: 'MACHINE LEARNING / DATA SCIENCE',
    description: 'Regression model with preprocessing, feature engineering, and evaluation built using Python, Pandas, and scikit-learn.',
    technologies: ['Python', 'Pandas', 'scikit-learn', 'Regression', 'Feature Engineering', 'Machine Learning'],
    features: [
      'Data Preprocessing',
      'Feature Engineering',
      'Regression Modeling',
      'Model Evaluation'
    ],
    featured: true
  },
  {
    id: 'proj-4',
    number: '04',
    title: 'REAL-ESTATE RENTAL WEB PLATFORM',
    category: 'WEB DEVELOPMENT / DATA',
    description: 'Real-estate rental web platform developed during my Data Analyst internship, supported by Python components and data-driven workflows.',
    technologies: ['Python', 'Web Development', 'Data Analysis'],
    features: [
      'Property listings',
      'Data-driven workflows',
      'Python components'
    ],
    featured: true
  }
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  status: string;
  isCurrent?: boolean;
  grade?: string | null;
  skills: string[];
}

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Data Science",
    institution: "Datta Meghe Institute of Higher Education and Research, Deemed to be University (DMIHER)",
    start: "2024-06",
    end: "2027-04",
    status: "IN PROGRESS",
    isCurrent: true,
    grade: null,
    skills: [
      "Artificial Intelligence (AI)",
      "Data Science",
      "Android Development"
    ]
  },
  {
    id: "edu-2",
    degree: "Diploma of Education",
    field: "Information Technology",
    institution: "Government Polytechnic College",
    start: "2021-01",
    end: "2024-03",
    status: "COMPLETED",
    grade: "First Class (Distinction)",
    skills: [
      "Communication",
      "Microsoft Power BI"
    ]
  }
];

export const certifications = [
  {
    name: 'Generative AI: Principles of Generative AI',
    provider: 'Infosys Springboard',
    year: '2026',
  },
  {
    name: 'Generative AI: Introduction and Applications',
    provider: 'IBM',
    year: '2025',
  },
  {
    name: 'Introduction to Generative AI: Art of the Possible',
    provider: 'AWS',
    year: '2026',
  },
  {
    name: 'AI Primer',
    provider: 'Infosys Springboard',
    year: '2026',
  },
  {
    name: 'Data Mining',
    provider: 'NPTEL / IIT Kharagpur',
    year: '2026 (Elite, 70%)',
  },
  {
    name: 'Clinical Database Mining CDSS 1',
    provider: 'University of Glasgow',
    year: '2025',
  },
  {
    name: 'Multiple Regression Analysis in Public Health',
    provider: 'Johns Hopkins University',
    year: '2025',
  },
  {
    name: 'Healthcare Recommender System A & B',
    provider: 'NPTEL',
    year: '2025',
  },
  {
    name: 'Mastering Go Programming',
    provider: 'Infosys Springboard',
    year: '2026',
  },
  {
    name: 'C++ Programming Fundamentals',
    provider: 'Microsoft',
    year: '2025',
  },
  {
    name: 'Monitor .NET Applications using Amazon CloudWatch',
    provider: 'AWS',
    year: '2026',
  }
];

export const research: Research[] = [
  {
    id: 'res-1',
    title: 'Retrieval-Augmented Large Language Models for Industrial Maintenance Assistance',
    area: 'Industrial AI / RAG',
    abstract: 'Exploring the application of RAG architectures to improve the accuracy and relevance of LLM outputs in industrial maintenance scenarios.',
    status: 'Under Review',
    year: '2026'
  },
  {
    id: 'res-2',
    title: 'Career Development AI Assistant Using Large Language Models',
    area: 'LLM Applications',
    abstract: 'A study on leveraging LLMs to provide structured, personalized career progression advice based on user profiles.',
    status: 'Under Review',
    year: '2026'
  },
  {
    id: 'res-3',
    title: 'NLP-Based Chatbots for Customer Service',
    area: 'NLP',
    abstract: 'Investigating the effectiveness of modern NLP techniques in automating customer support workflows.',
    status: 'Submitted',
    year: '2026'
  }
];

export const languages = ['English', 'Hindi', 'Marathi'];
