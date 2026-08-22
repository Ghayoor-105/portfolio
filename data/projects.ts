import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    id: 'featured-01',
    title: 'AI Resume Bullet Point Improver',
    category: 'featured',
    description:
      'An intelligence layer that analyzes weak resume statements and reconstructs them into high-impact, metric-driven achievements.',
    stages: [
      { label: 'RAW RESUME', status: 'neutral' },
      { label: 'LANGUAGE MODEL', status: 'active' },
      { label: 'PROCESSING', status: 'active' },
      { label: 'IMPROVED BULLET', status: 'success' },
    ],
    technologies: ['LLM', 'Python'],
    github: 'https://github.com/Ghayoor-105/ai-resume-bullet-improver',
    liveDemo: 'https://ai-resume-bullet-improver-mh9u.vercel.app/',
    featured: true,
  },
  {
    id: 'exp-02',
    title: 'QuizVibe',
    category: 'standard',
    description: 'Adaptive learning platform with progression algorithms.',
    stages: [
      { label: 'USER DATA', status: 'neutral' },
      { label: 'ALGORITHM', status: 'active' },
      { label: 'ADAPTATION', status: 'success' },
    ],
    technologies: ['Flutter', 'Dart'],
    github: 'https://github.com/Ghayoor-105/QuizVibe-FYP-Flutter-App',
    featured: false,
  },
  {
    id: 'exp-03',
    title: 'Real-Time Fire Detection',
    category: 'standard',
    description: 'YOLOv8 based computer vision inference pipeline.',
    stages: [
      { label: 'CAMERA', status: 'neutral' },
      { label: 'YOLOv8', status: 'active' },
      { label: 'DETECTION', status: 'error' },
    ],
    technologies: ['YOLOv8', 'OpenCV', 'Python'],
    github:
      'https://github.com/Ghayoor-105/Real-Time-Fire-Detection-Using-YOLOv8-and-OpenCV',
    featured: false,
  },
  {
    id: 'exp-04',
    title: 'Task Manager Web App',
    category: 'standard',
    description:
      'A full-stack task management app with secure authentication and a live dashboard — built during a Python development internship.',
    stages: [
      { label: 'USER', status: 'neutral' },
      { label: 'FLASK + SQLALCHEMY', status: 'active' },
      { label: 'SQLITE', status: 'success' },
    ],
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Jinja2'],
    github: 'https://github.com/Ghayoor-105/FullstackPythonProject-ghayoor',
    featured: false,
  },
];