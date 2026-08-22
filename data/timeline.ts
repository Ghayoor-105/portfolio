import type { TimelineEntry } from '@/types/content';

export const timeline: TimelineEntry[] = [
  {
    id: 'current',
    isCurrent: true,
    title: 'AI Engineering',
    description:
      'Integrating LLMs, building RAG systems, deploying intelligent agents.',
  },
  {
    id: 'entry-04',
    isCurrent: false,
    title: 'Computer Vision & ML',
    description:
      'Training models, YOLOv8 implementations, OpenCV real-time processing.',
  },
  {
    id: 'entry-03',
    isCurrent: false,
    title: 'Full-Stack Development',
    description:
      'Connecting APIs, robust backends with Python/Node, complex state management.',
  },
  {
    id: 'entry-02',
    isCurrent: false,
    title: 'Web Technologies',
    description: 'React, modern frontend architectures, responsive design systems.',
  },
  {
    id: 'entry-01',
    isCurrent: false,
    title: 'Computer Science Foundations',
    description: 'Algorithms, data structures, low-level architecture understanding.',
  },
];