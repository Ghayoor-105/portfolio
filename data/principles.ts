import type { Principle } from '@/types/content';

export const principles: Principle[] = [
  {
    id: 'p1',
    statement: 'BUILD BEFORE OVERCOMPLICATING.',
    description:
      "Get a working prototype to production fast. Premature optimization is the enemy of intelligent system design.",
  },
  {
    id: 'p2',
    statement: 'AI SHOULD SOLVE A REAL PROBLEM.',
    description:
      "Don't use a large language model where a simple regex would do. Apply intelligence precisely where variability demands it.",
  },
  {
    id: 'p3',
    statement: 'SYSTEMS > SCRIPTS.',
    description:
      'A Jupyter notebook is an experiment. A deployed API with error handling, logging, and monitoring is a system.',
  },
];