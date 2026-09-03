export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  role: string;
  tech: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  category: 'AI / LLM' | 'RAG' | 'OCR' | 'SEARCH' | 'FULL STACK' | 'WEB APPLICATION';
  tags: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'ACTIVE' | 'EXPERIMENT' | 'FORK' | 'COLLABORATION' | 'PROTOTYPE' | 'SOURCE_UNAVAILABLE';
  ownership: 'ORIGINAL' | 'FORK / CONTRIBUTION' | 'COLLABORATION' | 'ITERATION';
  featured: boolean;
  sourceStatus: 'VERIFIED' | 'UNVERIFIED';
  problem?: string;
  solution?: string;
  architectureNodes?: ArchitectureNode[];
  engineeringHighlights?: string[];
  repositoryOwner?: string;
  repositoryName?: string;
  family?: 'DOCUMENT INTELLIGENCE' | 'SEARCH SYSTEMS' | 'RAG WORKSPACES' | 'AUTOMATION';
  visualType: 'report' | 'anythingllm' | 'searchbox' | 'scancard' | 'enerview' | 'ocr_iteration' | 'agricultural' | 'unavailable';
  labNote?: string;
  githubMeta?: {
    language?: string;
    visibility?: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  // 01 — AI Report Generator
  {
    id: 'ai-report-generator',
    number: '01',
    title: 'AI Report Generator',
    slug: 'ai-report-generator',
    shortDescription: 'Automated report generation system for structured document synthesis.',
    longDescription: 'An automated document synthesis engine designed to decompose multi-source data inputs into structured audit and analytical reports using prompt routing and schema validation.',
    category: 'AI / LLM',
    tags: ['AI', 'LLM', 'Report Automation', 'Schema Validation'],
    technologies: ['Python', 'LLM Integration', 'JSON Schema', 'Data Processing', 'REST API'],
    githubUrl: 'https://github.com/bhushandagwar94-commits/AI-Report-Genrator',
    status: 'ACTIVE',
    ownership: 'ORIGINAL',
    featured: true,
    sourceStatus: 'UNVERIFIED',
    repositoryOwner: 'bhushandagwar94-commits',
    repositoryName: 'AI-Report-Genrator',
    family: 'AUTOMATION',
    problem: 'Manual compilation of multi-source audit data into formal documents is time-consuming, inconsistent, and error-prone.',
    solution: 'Designed a structured prompt pipeline that parses input data blocks, enforces schema constraints, and renders standardized audit reports.',
    architectureNodes: [
      { id: 'input', label: 'DATA INPUT', sublabel: 'Audit Feed', role: 'Ingests raw telemetry and audit text files', tech: 'REST API' },
      { id: 'prompt', label: 'PROMPT ROUTER', sublabel: 'Decomposition', role: 'Routes data chunks to domain-specific prompt templates', tech: 'Python' },
      { id: 'llm', label: 'LLM ENGINE', sublabel: 'Synthesis', role: 'Generates structured analytical response sections', tech: 'LLM API' },
      { id: 'schema', label: 'SCHEMA VALIDATOR', sublabel: 'JSON Schema', role: 'Validates structure and adherence to required fields', tech: 'JSON Schema' },
      { id: 'output', label: 'REPORT BUILDER', sublabel: 'DOCX / PDF', role: 'Renders final formatted document artifact', tech: 'Python Docx' }
    ],
    engineeringHighlights: [
      'Structured prompt pipeline for reliable report decomposition',
      'JSON schema validation enforcing output adherence',
      'Source repository currently private/unavailable for automated verification'
    ],
    visualType: 'report',
    labNote: 'Source repository is currently private. Case study structure is preserved pending public access.',
    githubMeta: {
      language: 'Python',
      visibility: 'Private / Source Pending'
    }
  },

  // 02 — Search Box
  {
    id: 'search-box',
    number: '02',
    title: 'Search Box Query Engine',
    slug: 'search-box',
    shortDescription: 'Customer & e-commerce query interface powered by Supabase PostgreSQL and Python.',
    longDescription: 'High-performance query engine combining PostgreSQL full-text search (tsvector) with multi-column LIKE/ILIKE string matching across customer and e-commerce datasets.',
    category: 'SEARCH',
    tags: ['Search Engine', 'PostgreSQL', 'Full-Text Search', 'Supabase', 'Python'],
    technologies: ['React', 'Vite', 'Python', 'Supabase', 'PostgreSQL', 'Full-Text Search', 'SQL'],
    githubUrl: 'https://github.com/Vanzcode-hub/Search-Box',
    status: 'ACTIVE',
    ownership: 'ORIGINAL',
    featured: true,
    sourceStatus: 'VERIFIED',
    repositoryOwner: 'Vanzcode-hub',
    repositoryName: 'Search-Box',
    family: 'SEARCH SYSTEMS',
    problem: 'Traditional exact SQL matching fails to handle multi-column customer searches across names, segments, cities, and states.',
    solution: 'Engineered a dual-mode search backend in Python executing PostgreSQL full-text vector matching (`tsvector`) alongside fuzzy `LIKE/ILIKE` fallback filters.',
    architectureNodes: [
      { id: 'ui', label: 'REACT UI', sublabel: 'Search Bar', role: 'Captures search queries with debounced input', tech: 'React / Vite' },
      { id: 'client', label: 'PYTHON CLIENT', sublabel: 'search_client.py', role: 'Executes SQL search queries against Supabase', tech: 'Python' },
      { id: 'pg', label: 'SUPABASE PG', sublabel: 'PostgreSQL DB', role: 'Stores customer and e-commerce datasets', tech: 'PostgreSQL' },
      { id: 'tsvector', label: 'TSVECTOR ENGINE', sublabel: 'Full-Text Index', role: 'Evaluates search_vector @@ query matching', tech: 'SQL tsvector' },
      { id: 'ilike', label: 'ILIKE FALLBACK', sublabel: 'Multi-Column', role: 'Filters across name, segment, city, and state', tech: 'SQL ILIKE' }
    ],
    engineeringHighlights: [
      'Dual-strategy query execution using full-text tsvector and multi-column ILIKE matching across name, segment, city, and state (`search_client.py`)',
      'Automated CSV ingestion pipeline (`upload_csv.py`, `upload_ecommerce.py`) loading customer datasets into Supabase',
      'SQL index setup script (`setup.sql`) optimizing search vector generation and query execution'
    ],
    visualType: 'searchbox',
    labNote: 'Verified codebase contains Python client, Supabase integration, CSV upload scripts, and custom SQL search vectors.',
    githubMeta: {
      language: 'JavaScript / Python',
      visibility: 'Public'
    }
  },

  // 03 — Scan Card
  {
    id: 'scan-card',
    number: '03',
    title: 'Scan Card OCR Intelligence',
    slug: 'scan-card',
    shortDescription: 'Business card document scanning and structured field extraction engine powered by Tesseract OCR.',
    longDescription: 'An automated document intelligence backend built on Express, Tesseract OCR trained models (`eng.traineddata`), and Multer for business card image scanning, bounding box analysis, and structured field extraction.',
    category: 'OCR',
    tags: ['OCR', 'Tesseract.js', 'Document Intelligence', 'Express', 'Image Processing'],
    technologies: ['Node.js', 'Express', 'Tesseract.js', 'Multer', 'Jimp', 'Mammoth', 'PDF Parse'],
    githubUrl: 'https://github.com/Vanzcode-hub/Scan-Card',
    status: 'ACTIVE',
    ownership: 'ORIGINAL',
    featured: true,
    sourceStatus: 'VERIFIED',
    repositoryOwner: 'Vanzcode-hub',
    repositoryName: 'Scan-Card',
    family: 'DOCUMENT INTELLIGENCE',
    problem: 'Manual entry of physical business cards into enterprise CRMs is slow, inaccurate, and labor-intensive.',
    solution: 'Built an Express backend utilizing Tesseract OCR language data and Jimp image processing to scan document images and extract structured name, company, phone, and email fields.',
    architectureNodes: [
      { id: 'upload', label: 'FILE INGEST', sublabel: 'Multipart Upload', role: 'Ingests image files via Multer middleware', tech: 'Express / Multer' },
      { id: 'jimp', label: 'PRE-PROCESSOR', sublabel: 'Jimp / Canvas', role: 'Normalizes contrast, scaling, and noise', tech: 'Jimp' },
      { id: 'tesseract', label: 'TESSERACT OCR', sublabel: 'eng.traineddata', role: 'Performs optical character recognition', tech: 'Tesseract.js' },
      { id: 'bbox', label: 'BBOX ANALYZER', sublabel: 'bbox.json', role: 'Calculates spatial text bounding box coordinates', tech: 'Node.js' },
      { id: 'extract', label: 'FIELD EXTRACTOR', sublabel: 'JSON Output', role: 'Parses name, company, email, and phone fields', tech: 'Node.js' }
    ],
    engineeringHighlights: [
      'Tesseract OCR trained language model integration (`eng.traineddata`) for optical text recognition',
      'Express file upload pipeline handling multipart form data via Multer and image pre-processing with Jimp',
      'Structured extraction parsing full name, company, designation, email, phone numbers, and bounding box coordinates (`bbox.json`)'
    ],
    visualType: 'scancard',
    labNote: 'Verified repository contains Node/Express backend, Tesseract trained data, bounding box configurations, and frontend.',
    githubMeta: {
      language: 'JavaScript',
      visibility: 'Public'
    }
  },

  // 04 — AnythingLLM Customization / Fork
  {
    id: 'anything-llm',
    number: '04',
    title: 'AnythingLLM Workspace Fork',
    slug: 'anything-llm',
    shortDescription: 'Customization and RAG document-intelligence experimentation on the AnythingLLM open-source workspace.',
    longDescription: 'A public fork of Mintplex Labs AnythingLLM framework used for exploring document collection, vector store integrations, RAG pipelines, and local LLM configurations.',
    category: 'RAG',
    tags: ['RAG', 'Vector Database', 'LLM Workspace', 'Document Intelligence', 'AnythingLLM Fork'],
    technologies: ['Node.js', 'Express', 'React', 'Vite', 'Vector Databases', 'RAG Engine', 'LLM Integrations'],
    githubUrl: 'https://github.com/bhushandagwar94-commits/anything-llm',
    status: 'FORK',
    ownership: 'FORK / CONTRIBUTION',
    featured: true,
    sourceStatus: 'VERIFIED',
    repositoryOwner: 'bhushandagwar94-commits',
    repositoryName: 'anything-llm',
    family: 'RAG WORKSPACES',
    problem: 'Organizations require local document ingestion, vector storage, and privacy-first LLM interfaces.',
    solution: 'Forked and configured the open-source AnythingLLM platform to explore local vector embeddings, multi-document RAG pipelines, and agent workflows.',
    architectureNodes: [
      { id: 'collector', label: 'DOC COLLECTOR', sublabel: 'Document Pipeline', role: 'Parses and chunks multi-format document inputs', tech: 'Node.js Collector' },
      { id: 'vector', label: 'VECTOR STORE', sublabel: 'Embeddings DB', role: 'Stores vector embeddings for context retrieval', tech: 'Vector DB' },
      { id: 'rag', label: 'RAG ENGINE', sublabel: 'Context Retrieval', role: 'Retrieves relevant document chunks for prompt injection', tech: 'AnythingLLM Core' },
      { id: 'llm', label: 'LLM INFERENCE', sublabel: 'Model Gateway', role: 'Connects to local and API LLM providers', tech: 'LLM Gateway' },
      { id: 'chat', label: 'WORKSPACE UI', sublabel: 'React Frontend', role: 'Provides multi-user workspace chat interface', tech: 'React / Vite' }
    ],
    engineeringHighlights: [
      'Public fork of Mintplex Labs AnythingLLM platform used for exploring document collection and vector storage',
      'Configured RAG query engine connecting local vector embeddings with LLM inference pipelines',
      'Tested multi-user workspace permissions, embedded chat widgets, and document management features'
    ],
    visualType: 'anythingllm',
    labNote: 'Strictly labeled as a public fork of Mintplex Labs AnythingLLM workspace for enterprise RAG and local LLM experimentation.',
    githubMeta: {
      language: 'JavaScript / Node.js',
      visibility: 'Public Fork'
    }
  },

  // 05 — Web Enerview
  {
    id: 'web-enerview',
    number: '05',
    title: 'Web Enerview Platform',
    slug: 'web-enerview',
    shortDescription: 'Web application interface for energy and operational data monitoring.',
    longDescription: 'Collaborative web application built for operational telemetry data visualization, energy reporting, and system performance analytics.',
    category: 'WEB APPLICATION',
    tags: ['Web App', 'Energy Telemetry', 'Dashboard', 'Analytics'],
    technologies: ['JavaScript', 'HTML/CSS', 'Web Application', 'REST API'],
    githubUrl: 'https://github.com/Premmaliye/web-enerview',
    status: 'COLLABORATION',
    ownership: 'COLLABORATION',
    featured: true,
    sourceStatus: 'UNVERIFIED',
    repositoryOwner: 'Premmaliye',
    repositoryName: 'web-enerview',
    family: 'AUTOMATION',
    problem: 'Operational teams lack unified real-time dashboards to monitor energy telemetry and system metrics.',
    solution: 'Collaborative web application designed for telemetry data visualization and reporting.',
    architectureNodes: [
      { id: 'ui', label: 'FRONTEND UI', sublabel: 'Web Dashboard', role: 'Renders operational telemetry cards and charts', tech: 'HTML / JS' },
      { id: 'api', label: 'API GATEWAY', sublabel: 'REST Service', role: 'Serves telemetry data streams', tech: 'REST API' },
      { id: 'data', label: 'DATA ENGINE', sublabel: 'Metrics Aggregator', role: 'Aggregates energy consumption statistics', tech: 'JavaScript' }
    ],
    engineeringHighlights: [
      'Collaborative web project built for operational data monitoring',
      'Source repository currently private/unavailable for public verification'
    ],
    visualType: 'enerview',
    labNote: 'Source repository is currently private. Card maintained in portfolio hierarchy pending repository access.',
    githubMeta: {
      language: 'JavaScript',
      visibility: 'Private / Source Pending'
    }
  },

  // 06 — Intern Team OCR Iteration
  {
    id: 'intern-5-members',
    number: '06',
    title: 'Intern Team OCR Iteration',
    slug: 'intern-5-members',
    shortDescription: 'Collaborative team repository building upon the Scan Card document scanning and OCR backend.',
    longDescription: 'A collaborative team repository sharing Tesseract language models (`eng.traineddata`), Express file parsers, and bounding box extraction endpoints with the Scan Card project.',
    category: 'OCR',
    tags: ['OCR Iteration', 'Team Project', 'Express', 'Tesseract.js'],
    technologies: ['Node.js', 'Express', 'Tesseract.js', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/MYISHGJQ/Intern-5-memebers-only',
    status: 'COLLABORATION',
    ownership: 'COLLABORATION',
    featured: false,
    sourceStatus: 'VERIFIED',
    repositoryOwner: 'MYISHGJQ',
    repositoryName: 'Intern-5-memebers-only',
    family: 'DOCUMENT INTELLIGENCE',
    problem: 'Iterating on OCR field extraction and document validation within a multi-developer team workflow.',
    solution: 'Maintained a shared team repository integrating Tesseract OCR endpoints and multi-format document parsers.',
    architectureNodes: [
      { id: 'ui', label: 'FRONTEND UI', sublabel: 'Upload Portal', role: 'Provides file upload interface for team testing', tech: 'HTML / JS' },
      { id: 'express', label: 'EXPRESS SERVER', sublabel: 'REST Backend', role: 'Handles multipart file ingestion', tech: 'Express / Multer' },
      { id: 'ocr', label: 'OCR ENGINE', sublabel: 'eng.traineddata', role: 'Executes Tesseract character recognition', tech: 'Tesseract.js' },
      { id: 'bbox', label: 'BBOX PARSER', sublabel: 'bbox.json', role: 'Maps bounding box spatial coordinates', tech: 'Node.js' }
    ],
    engineeringHighlights: [
      'Collaborative team iteration sharing OCR bounding box parsers and Tesseract language models with Scan Card',
      'Implemented multipart document upload logic using Express and Multer middleware'
    ],
    visualType: 'ocr_iteration',
    labNote: 'Verified repository shares Tesseract language models and express OCR endpoints with Scan Card project.',
    githubMeta: {
      language: 'JavaScript',
      visibility: 'Public'
    }
  },

  // 07 — 8th April Projects
  {
    id: '8th-april-projects',
    number: '07',
    title: 'Document Parser & OCR Lab',
    slug: '8th-april-projects',
    shortDescription: 'Full-stack experimental build featuring React/Vite frontend and Node/Express document extraction backend.',
    longDescription: 'Decoupled full-stack experimental repository containing a React/Vite frontend and Node/Express backend equipped with Tesseract.js, pdf-parse, mammoth, and Jimp for multi-format document ingestion.',
    category: 'FULL STACK',
    tags: ['Full Stack', 'Document Parsing', 'React', 'Node.js', 'Express'],
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'Tesseract.js', 'Mammoth', 'PDF Parse'],
    githubUrl: 'https://github.com/MYISHGJQ/8th-April-Projects',
    status: 'EXPERIMENT',
    ownership: 'ITERATION',
    featured: false,
    sourceStatus: 'VERIFIED',
    repositoryOwner: 'MYISHGJQ',
    repositoryName: '8th-April-Projects',
    family: 'DOCUMENT INTELLIGENCE',
    problem: 'Testing document parsing across varied file formats (PDF, DOCX, Images) within a unified API service.',
    solution: 'Built a multi-parser backend integrating Tesseract.js, pdf-parse, mammoth, and Jimp for file upload and text extraction.',
    architectureNodes: [
      { id: 'frontend', label: 'REACT FRONTEND', sublabel: 'Vite UI', role: 'Renders document upload and extraction viewer', tech: 'React / Vite' },
      { id: 'express', label: 'EXPRESS API', sublabel: 'Node Backend', role: 'Serves extraction REST endpoints', tech: 'Express / Node.js' },
      { id: 'parser', label: 'MULTI-PARSER', sublabel: 'PDF / DOCX / Image', role: 'Parses PDF, Word, and image text content', tech: 'Mammoth / PDF Parse' }
    ],
    engineeringHighlights: [
      'Decoupled architecture with React/Vite frontend and Express REST backend',
      'Multi-format file ingestion pipeline handling PDF, Word DOCX, and raw image inputs'
    ],
    visualType: 'ocr_iteration',
    labNote: 'Verified codebase contains decoupled frontend/backend directories for document processing experiments.',
    githubMeta: {
      language: 'JavaScript',
      visibility: 'Public'
    }
  },

  // 08 — AnythingLLM Master Variant
  {
    id: 'anything-llm-master',
    number: '08',
    title: 'AnythingLLM Master Variant',
    slug: 'anything-llm-master',
    shortDescription: 'Secondary repository copy for AnythingLLM workspace experimentation.',
    longDescription: 'Secondary repository variant grouped under the AnythingLLM open-source RAG exploration ecosystem.',
    category: 'RAG',
    tags: ['RAG Variant', 'AnythingLLM', 'Vector DB'],
    technologies: ['Node.js', 'React', 'Vector Databases'],
    githubUrl: 'https://github.com/bhushandagwar94-commits/anything-llm-master',
    status: 'FORK',
    ownership: 'FORK / CONTRIBUTION',
    featured: false,
    sourceStatus: 'UNVERIFIED',
    repositoryOwner: 'bhushandagwar94-commits',
    repositoryName: 'anything-llm-master',
    family: 'RAG WORKSPACES',
    problem: 'Secondary repository copy for testing local AnythingLLM configurations.',
    solution: 'Maintained as part of the AnythingLLM open-source exploration ecosystem.',
    architectureNodes: [
      { id: 'base', label: 'ANYTHINGLLM BASE', sublabel: 'Mintplex Labs', role: 'Base open-source LLM workspace platform', tech: 'AnythingLLM' },
      { id: 'variant', label: 'LOCAL VARIANT', sublabel: 'Configuration', role: 'Local experimentation workspace', tech: 'Node.js' }
    ],
    engineeringHighlights: [
      'Grouped under the AnythingLLM open-source exploration ecosystem',
      'Source repository currently private/unavailable for verification'
    ],
    visualType: 'anythingllm',
    labNote: 'Grouped under AnythingLLM ecosystem.',
    githubMeta: {
      language: 'JavaScript',
      visibility: 'Private / Source Pending'
    }
  },

  // 09 — Agricultural Farming Equipment Rental System
  {
    id: 'agricultural-equipment-rental',
    number: '09',
    title: 'Agricultural Farming Equipment Rental System',
    slug: 'agricultural-equipment-rental',
    shortDescription: 'A digital platform designed to simplify the rental of agricultural machinery and farming equipment, helping farmers discover, compare, and rent suitable equipment.',
    longDescription: 'Agricultural Farming Equipment Rental System is a web-based rental platform focused on connecting farmers with agricultural equipment available for rental, helping farmers discover, compare, and rent suitable equipment based on their operational requirements.',
    category: 'FULL STACK',
    tags: ['FULL STACK', 'AGRICULTURE', 'RENTAL PLATFORM', 'WEB APP'],
    technologies: ['Full Stack', 'Agriculture', 'Rental Platform', 'Web Application'],
    githubUrl: '',
    status: 'ACTIVE',
    ownership: 'ORIGINAL',
    featured: true,
    sourceStatus: 'UNVERIFIED',
    family: 'AUTOMATION',
    problem: 'Agricultural machinery can be expensive to purchase and may not be required throughout the entire farming cycle. Farmers may need specific equipment only for a limited period, making rental access a practical alternative.',
    solution: 'The system provides a centralized platform where users can browse available farming equipment, review equipment information, and manage rental requirements through a digital interface.',
    architectureNodes: [
      { id: 'user', label: 'USER / FARMER', sublabel: 'Web Interface', role: 'Accesses rental portal and filters machinery', tech: 'Web UI' },
      { id: 'browse', label: 'EQUIPMENT DISCOVERY', sublabel: 'Catalog Search', role: 'Browses and compares equipment listings & specs', tech: 'Rental Platform' },
      { id: 'details', label: 'SPEC REVIEW', sublabel: 'Equipment Details', role: 'Displays machine capabilities and rental terms', tech: 'Web Application' },
      { id: 'request', label: 'RENTAL REQUEST', sublabel: 'Booking Engine', role: 'Submits rental dates and equipment booking', tech: 'Rental Workflow' },
      { id: 'management', label: 'RENTAL MANAGEMENT', sublabel: 'Status Tracking', role: 'Tracks equipment availability and rental state', tech: 'Full Stack' }
    ],
    engineeringHighlights: [
      'Equipment discovery and specification review interface',
      'Digital rental request and availability-oriented workflow',
      'TECH STACK — SOURCE UNVERIFIED'
    ],
    visualType: 'agricultural',
    labNote: 'Source repository is unverified. Case study details and rental workflow structure preserved.',
    githubMeta: {
      language: 'JavaScript / Web App',
      visibility: 'Unverified / Source Pending'
    }
  }
];
