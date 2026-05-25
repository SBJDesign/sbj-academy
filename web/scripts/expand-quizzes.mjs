/**
 * Merge quiz-extras into course.json files (dedupe by question text, ≥10 when possible).
 * Usage: node scripts/expand-quizzes.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { extras as brandingExtras } from './quiz-extras/branding.mjs';
import { extras as businessExtras } from './quiz-extras/business-communication.mjs';
import { extras as brandAnalysisExtras } from './quiz-extras/brand-analysis.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(__dirname, '../src/content');

const MIN_QUESTIONS = 10;

const courses = [
  { slug: 'branding', extras: brandingExtras },
  { slug: 'business-communication', extras: businessExtras },
  { slug: 'brand-analysis', extras: brandAnalysisExtras },
];

function dedupeByQuestionText(questions) {
  const seen = new Set();
  const out = [];
  for (const item of questions) {
    const key = item.q?.trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function mergeQuizQuestions(existing, extra) {
  const merged = dedupeByQuestionText([...(existing || []), ...(extra || [])]);
  // If still under minimum after merge, keep full merged set (no padding)
  return merged;
}

const report = [];

for (const { slug, extras } of courses) {
  const coursePath = path.join(contentDir, slug, 'course.json');
  if (!fs.existsSync(coursePath)) {
    console.error(`Missing course.json: ${coursePath}`);
    process.exit(1);
  }

  const course = JSON.parse(fs.readFileSync(coursePath, 'utf8'));
  const moduleCounts = [];
  let courseTotal = 0;

  if (!Array.isArray(course.quizzes)) {
    console.error(`${slug}: no quizzes array`);
    process.exit(1);
  }

  if (extras.length !== course.quizzes.length) {
    console.warn(
      `Warning: ${slug} has ${course.quizzes.length} quizzes but ${extras.length} extra arrays`
    );
  }

  for (let i = 0; i < course.quizzes.length; i++) {
    const before = course.quizzes[i].questions?.length ?? 0;
    const extra = extras[i] ?? [];
    const merged = mergeQuizQuestions(course.quizzes[i].questions, extra);
    course.quizzes[i].questions = merged;
    const after = merged.length;
    moduleCounts.push({
      module: i + 1,
      title: course.quizzes[i].title,
      before,
      added: extra.length,
      after,
      meetsMin: after >= MIN_QUESTIONS,
    });
    courseTotal += after;
  }

  fs.writeFileSync(coursePath, JSON.stringify(course, null, 2) + '\n', 'utf8');
  report.push({ slug, modules: moduleCounts, total: courseTotal });
}

console.log('\n=== Quiz expansion complete ===\n');

for (const { slug, modules, total } of report) {
  console.log(`Course: ${slug}`);
  console.log(`  Total questions: ${total}`);
  for (const m of modules) {
    const flag = m.meetsMin ? '✓' : '·';
    console.log(
      `  ${flag} Module ${m.module}: ${m.after} questions (was ${m.before}, +${m.added} extras) — ${m.title}`
    );
  }
  const allMeet = modules.every((m) => m.meetsMin);
  console.log(`  All modules ≥${MIN_QUESTIONS}: ${allMeet ? 'yes' : 'no'}\n`);
}

console.log('Files written:');
for (const { slug } of courses) {
  console.log(`  src/content/${slug}/course.json`);
}
