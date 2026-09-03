import { personalInfo, experience, education } from './portfolio';
import { PROJECTS_DATA } from './projects';
import { APPLIED_RESEARCH_PAPERS } from './research';
import { CERTIFICATIONS_DATA } from './certifications';
import { profile } from './profile';

export const bhushanKnowledge = {
  profile: {
    name: personalInfo.name,
    title: personalInfo.title,
    subtitle: personalInfo.subtitle,
    bio: personalInfo.bio,
    location: profile.location || 'Nagpur, Maharashtra, India',
    targetRoles: [
      'AI Engineer',
      'Junior AI/ML Engineer',
      'LLM / RAG Developer',
      'Data Engineer / Analyst'
    ]
  },

  skills: {
    programming: ['Python', 'C', 'C++', 'Java', 'Go / Golang'],
    aiAndMl: ['Artificial Intelligence', 'Machine Learning', 'LLMs', 'RAG (Retrieval-Augmented Generation)', 'Prompt Engineering', 'PyTorch', 'scikit-learn'],
    dataAndBi: ['SQL (PostgreSQL / Vector Search)', 'Data Mining (NPTEL Elite Certified)', 'Data Analytics', 'Power BI'],
    development: ['Mobile App Development (Android)', 'React', 'FastAPI', 'Node.js', 'Full Stack Development']
  },

  experience: experience.map(exp => ({
    id: exp.id,
    role: exp.role,
    company: exp.company,
    type: exp.type,
    start: exp.start,
    end: exp.end,
    location: exp.location,
    arrangement: exp.arrangement,
    description: exp.description,
    skills: exp.skills
  })),

  education: education.map(edu => ({
    degree: edu.degree,
    field: edu.field,
    institution: edu.institution,
    start: edu.start,
    end: edu.end,
    status: edu.status,
    isCurrent: edu.isCurrent,
    grade: edu.grade,
    skills: edu.skills
  })),

  projects: PROJECTS_DATA.map(proj => ({
    id: proj.id,
    number: proj.number,
    title: proj.title,
    category: proj.category,
    shortDescription: proj.shortDescription,
    longDescription: proj.longDescription,
    technologies: proj.technologies,
    ownership: proj.ownership,
    featured: proj.featured,
    problem: proj.problem,
    solution: proj.solution
  })),

  research: APPLIED_RESEARCH_PAPERS.map(paper => ({
    id: paper.id,
    number: paper.number,
    title: paper.title,
    category: paper.category,
    researchType: paper.researchType,
    year: paper.year,
    summary: paper.summary,
    problem: paper.problem,
    approach: paper.approach,
    contribution: paper.contribution,
    focusAreas: paper.focusAreas
  })),

  certifications: CERTIFICATIONS_DATA.map(cert => ({
    id: cert.id,
    title: cert.title,
    issuer: cert.issuer,
    category: cert.category,
    displayDate: cert.displayDate,
    credentialId: cert.credentialId,
    score: cert.score,
    isElite: cert.isElite,
    tags: cert.tags
  })),

  contact: {
    email: profile.email,
    phone: profile.phone,
    linkedin: profile.linkedin,
    github: profile.github
  }
};
