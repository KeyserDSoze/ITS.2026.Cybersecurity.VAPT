import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(siteDir, '..');
const lessonsDir = path.join(repoRoot, 'lessons');
const labsDir = path.join(repoRoot, 'labs');
const outputDir = path.join(siteDir, 'public', 'content');

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripInlineMarkdown(value) {
  return value
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .trim();
}

function section(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = markdown.match(new RegExp(`^##\\s+${escaped}\\s*$([\\s\\S]*?)(?=^##\\s+|$)`, 'mi'));
  return match ? match[1].trim() : '';
}

function summaryFrom(markdown) {
  const candidateSections = ['Missione di oggi', 'La missione finale', 'Scenario', 'Scopo', 'Obiettivi', 'Cosa imparerai'];
  const source = candidateSections.map((heading) => section(markdown, heading)).find(Boolean) || '';
  const paragraphs = source.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean);
  const paragraph = paragraphs.find((item) => !item.startsWith('-') && !item.startsWith('```') && !item.startsWith('>'));
  const fallbackQuote = paragraphs.find((item) => item.startsWith('>'));
  const selected = paragraph || fallbackQuote;
  if (!selected) return 'Materiale della lezione, laboratorio e attività progressive.';
  const cleaned = selected.replace(/^>\s*/gm, '').replace(/\n/g, ' ');
  const summary = stripInlineMarkdown(cleaned);
  return summary.length > 220 ? `${summary.slice(0, 217).trim()}…` : summary;
}

function headingsFrom(markdown) {
  const result = [];
  for (const match of markdown.matchAll(/^##\s+(.+)$/gm)) {
    const text = stripInlineMarkdown(match[1]);
    result.push({ text, id: slugify(text) });
  }
  return result;
}

function addHeadingIds(html, prefix = '') {
  return html.replace(/<h([2-3])>([\s\S]*?)<\/h\1>/g, (full, level, inner) => {
    const text = inner.replace(/<[^>]+>/g, '');
    return `<h${level} id="${prefix}${slugify(text)}">${inner}</h${level}>`;
  });
}

async function readQuiz(dir) {
  try {
    const raw = await fs.readFile(path.join(dir, 'quiz.json'), 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function readArtifacts(dir, root = dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }

  const artifacts = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, 'it', { numeric: true }))) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      artifacts.push(...await readArtifacts(absolute, root));
      continue;
    }
    if (!entry.isFile()) continue;

    try {
      const content = await fs.readFile(absolute, 'utf8');
      artifacts.push({
        name: path.relative(root, absolute).split(path.sep).join('/'),
        content,
        extension: path.extname(entry.name).replace(/^\./, '').toLowerCase() || 'txt',
      });
    } catch {
      // Binary or unreadable artifacts are intentionally omitted from the web dossier.
    }
  }
  return artifacts;
}

async function loadLabs() {
  let entries = [];
  try {
    entries = await fs.readdir(labsDir, { withFileTypes: true });
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  const labs = new Map();
  for (const entry of entries) {
    if (!entry.isDirectory() || !/^\d+/.test(entry.name)) continue;
    const numberMatch = entry.name.match(/^(\d+)/);
    if (!numberMatch) continue;
    const number = Number(numberMatch[1]);
    const dir = path.join(labsDir, entry.name);

    let markdown;
    try {
      markdown = await fs.readFile(path.join(dir, 'README.md'), 'utf8');
    } catch (error) {
      if (error.code === 'ENOENT') continue;
      throw error;
    }

    const titleMatch = markdown.match(/^#\s+(.+)$/m);
    const title = titleMatch ? stripInlineMarkdown(titleMatch[1]) : `Lab ${String(number).padStart(2, '0')}`;
    const artifacts = await readArtifacts(path.join(dir, 'artifacts'));

    labs.set(number, {
      slug: entry.name,
      title,
      summary: summaryFrom(markdown),
      html: addHeadingIds(marked.parse(markdown), 'lab-'),
      markdown,
      artifacts,
    });
  }
  return labs;
}

await fs.mkdir(outputDir, { recursive: true });
const labs = await loadLabs();
const entries = (await fs.readdir(lessonsDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name, 'it', { numeric: true }));

const lessons = [];
for (const entry of entries) {
  const dir = path.join(lessonsDir, entry.name);
  const markdownPath = path.join(dir, 'README.md');
  let markdown;
  try {
    markdown = await fs.readFile(markdownPath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') continue;
    throw error;
  }

  const titleMatch = markdown.match(/^#\s+(.+)$/m);
  const title = titleMatch ? stripInlineMarkdown(titleMatch[1]) : entry.name;
  const numberMatch = entry.name.match(/^(\d+)/);
  const number = numberMatch ? Number(numberMatch[1]) : lessons.length;
  const html = addHeadingIds(marked.parse(markdown));

  lessons.push({
    number,
    slug: entry.name,
    title,
    summary: summaryFrom(markdown),
    headings: headingsFrom(markdown),
    html,
    markdown,
    quiz: await readQuiz(dir),
    lab: labs.get(number) || null,
    pdf: `pdfs/${entry.name}.pdf`,
  });
}

const payload = {
  title: 'ITS Umbria 2026 — Vulnerability Assessment & Penetration Testing',
  generatedAt: new Date().toISOString(),
  lessons,
};

await fs.writeFile(path.join(outputDir, 'lessons.json'), JSON.stringify(payload, null, 2));
console.log(`Generated student content for ${lessons.length} lessons and ${labs.size} lab dossiers.`);
