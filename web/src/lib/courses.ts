import type { CourseCatalogItem, CourseData } from './types';
import branding from '@/content/branding/course.json';
import businessCommunication from '@/content/business-communication/course.json';

const coursesBySlug: Record<string, CourseData> = {
  branding: branding as CourseData,
  'business-communication': businessCommunication as CourseData,
};

export const catalog: CourseCatalogItem[] = [
  {
    slug: 'branding',
    title: 'Branding Mastery',
    description:
      'Brand strategy, positioning, visual identity, storytelling, experience, and measuring equity.',
    icon: '🎨',
    modules: 10,
    quizCount: '40+',
    worksheets: 10,
    duration: '5hrs',
    tags: ['Brand Strategy', 'Visual Identity', 'Positioning', 'Storytelling'],
    available: true,
  },
  {
    slug: 'business-communication',
    title: 'Business Communication',
    description:
      'Present, pitch, and persuade — public speaking, writing, negotiation, and digital communication.',
    icon: '🎤',
    modules: 15,
    quizCount: '60+',
    worksheets: 15,
    duration: '7hrs',
    tags: ['Public Speaking', 'Pitching', 'Writing', 'Negotiation'],
    available: true,
  },
  {
    slug: 'social-media',
    title: 'Social Media Mastery',
    description: 'Build presence, grow an audience, and create content that converts.',
    icon: '📱',
    modules: 0,
    quizCount: '—',
    worksheets: 0,
    duration: '—',
    tags: [],
    available: false,
  },
  {
    slug: 'marketing-strategy',
    title: 'Marketing Strategy',
    description: 'Customer acquisition, campaigns, digital marketing, and growth.',
    icon: '📈',
    modules: 0,
    quizCount: '—',
    worksheets: 0,
    duration: '—',
    tags: [],
    available: false,
  },
];

export function getCourse(slug: string): CourseData | undefined {
  return coursesBySlug[slug];
}

export function getCatalogItem(slug: string): CourseCatalogItem | undefined {
  return catalog.find((c) => c.slug === slug);
}
