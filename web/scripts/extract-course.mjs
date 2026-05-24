/**
 * Extract course data from legacy HTML into JSON for the Next.js app.
 * Usage: node scripts/extract-course.mjs branding
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || 'branding';
const legacyPath = path.resolve(__dirname, '../../courses', slug, 'index.html');

if (!fs.existsSync(legacyPath)) {
  console.error('Legacy file not found:', legacyPath);
  process.exit(1);
}

let html = fs.readFileSync(legacyPath, 'utf8');

// Fix known invalid JS string in business-communication source
html = html.replace(/world's best pitchers/g, "world\\'s best pitchers");

const scriptStart = html.indexOf('const modMeta');
const scriptEnd = html.indexOf('// NAVIGATION');
if (scriptStart < 0 || scriptEnd < 0) {
  console.error('Could not locate course data block');
  process.exit(1);
}

const script = html.slice(scriptStart, scriptEnd);

let data;
try {
  const fn = new Function(`${script}; return { modMeta, modBodies, quizzes, resources, modNames };`);
  data = fn();
} catch (e) {
  console.error('Failed to evaluate course data:', e.message);
  process.exit(1);
}

const outDir = path.resolve(__dirname, '../src/content', slug);
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, 'course.json'),
  JSON.stringify({ slug, ...data }),
  'utf8'
);

console.log(
  `Wrote ${slug}: ${data.modMeta.length} modules, ${data.quizzes.length} quizzes`
);
