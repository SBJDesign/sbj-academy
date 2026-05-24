import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, '../src/content/brand-analysis/course.json');
const course = JSON.parse(readFileSync(path, 'utf8'));

function ytBlock({ label, id, title, credit }) {
  return `\n\n<div class="yt-section">\n<div class="yt-label">▶ Watch: ${label}</motion.div>\n<div class="yt-wrap"><iframe src="https://www.youtube.com/embed/${id}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.div>\n<div class="yt-credit">${credit}</motion.div>\n</motion.div>`
    .replace(/<\/?motion\.motion.div>/g, '')
    .replace(/<\/?motion\.motion.div>/g, '')
    .replace(/<\/?motion\.motion.div>/g, '')
    .replace(/<\/?motion\.div>/g, (m) => m.replace('motion.', ''));
}

const videos = [
  {
    label: 'How to Create a Brand Strategy (Mission, Values & Audience)',
    id: 'cPOuOqpjHi4',
    title: 'HubSpot Branding Masterclass',
    credit:
      'HubSpot Marketing · Step-by-step brand foundation — mission statement, core values, target audience, and brand promise.',
  },
  {
    label: 'Identity Design vs Branding — Auditing Visual & Verbal Identity',
    id: 'pR7tMnKghDs',
    title: 'The Futur Identity Design Branding',
    credit:
      'The Futur · Chris Do on what brand identity really is, how voice and visuals must align, and common audit mistakes.',
  },
  {
    label: 'Track Branded Search & Awareness with Google Search Console',
    id: '0erJdk1Ofqw',
    title: 'Google Search Console Setup',
    credit:
      'Conversio Marketing · Set up Search Console to see which keywords — including branded queries — drive traffic to your site.',
  },
  {
    label: 'Set Up Social Listening & Sentiment Monitoring',
    id: 'hUu23wsEIm0',
    title: 'Sprout Social Listening Topic',
    credit:
      'Sprout Social · Build your first listening topic, segment conversations, and turn audience chatter into actionable sentiment insights.',
  },
  {
    label: 'Competitive Analysis & Brand Positioning Framework',
    id: 'TxTa0HfyU34',
    title: 'April Dunford Product Positioning',
    credit:
      'April Dunford · Identify competitive alternatives, map differentiation, and choose positioning that creates white space in your market.',
  },
  {
    label: 'Build a KPI Dashboard That Drives Decisions',
    id: 'TwFotErXXP8',
    title: 'HubSpot Reporting Dashboards',
    credit:
      'HubSpot · Create custom reports and dashboards to track KPIs consistently — the same rhythm your brand health review needs.',
  },
];

course.modBodies = course.modBodies.map((body, i) => {
  let html = body;
  if (i === 3) {
    html = html.replace(
      'no strong e Analyze context',
      'no strong emotion. Analyze context'
    );
  }
  if (html.includes('yt-section')) return html;
  return html.trimEnd() + ytBlock(videos[i]);
});

writeFileSync(path, JSON.stringify(course, null, 2), 'utf8');
console.log('Added YouTube embeds to', course.modBodies.length, 'modules');
