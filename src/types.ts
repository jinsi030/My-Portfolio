export type NavTab = 'home' | 'work' | 'about' | 'build-lab' | 'resume' | 'contact';

export type ProjectCategory = 'ALL' | 'PRODUCT DESIGN' | 'AI + TECH' | 'VISUAL + BRAND' | 'BUILD LAB';

export interface CaseStudyStage {
  number: string;
  label: string;
  title: string;
  content: string;
  punchline?: string;
  details?: string[];
  keyArtifacts?: {
    type: 'quote' | 'metrics' | 'principles' | 'screen-flow' | 'before-after' | 'code-snippet';
    data: any;
  }[];
}

export interface Project {
  id: string;
  title: string;
  punchline: string;
  category: ('PRODUCT DESIGN' | 'AI + TECH' | 'VISUAL + BRAND' | 'BUILD LAB')[];
  year: string;
  role: string;
  deliverables: string[];
  featured: boolean;
  coverImageTheme: string;
  accentColor: string;
  summary: string;
  problem: string;
  solution: string;
  tools: string[];
  stages: CaseStudyStage[];
  screens?: {
    id: string;
    title: string;
    description: string;
    tag: string;
    type: 'mobile' | 'desktop' | 'tablet';
  }[];
  buildLabDetails?: {
    concept: string;
    interaction: string;
    architecture: string;
    frontendStack: string;
    aiExperiment: string;
    learnings: string;
    liveDemoType: 'spatial' | 'ai-chat' | 'constellation';
  };
}

export interface CareerMilestone {
  id: string;
  title: string;
  period: string;
  subtitle: string;
  description: string;
  calibrationMetaphor: string;
  toolsAndMindset: string[];
  highlight: string;
}

export interface CreativeInterest {
  id: string;
  name: string;
  hoverReveal: string;
  iconName: string;
  tag: string;
}
