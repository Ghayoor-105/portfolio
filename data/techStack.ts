import type { TechCategory } from '@/types/content';

export const techStack: TechCategory[] = [
  { label: 'INTELLIGENCE', items: 'LLMs, RAG, NLP', tier: 'standard' },
  { label: 'COMPUTER VISION', items: 'YOLOv8, OpenCV', tier: 'standard' },
  {
    label: 'ENGINEERING CORE',
    items: 'Python, FastAPI, Node.js',
    tier: 'primary',
  },
  { label: 'DATA & TOOLS', items: 'SQL, MongoDB, Git, Docker', tier: 'standard' },
  {
    label: 'FRONTEND DELIVERY',
    items: 'React, Next.js, TailwindCSS',
    tier: 'standard',
  },
];