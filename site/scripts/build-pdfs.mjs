import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(__dirname, '..');
const contentPath = path.join(siteDir, 'public', 'content', 'lessons.json');
const pdfDir = path.join(siteDir, 'public', 'pdfs');

const course = JSON.parse(await fs.readFile(contentPath, 'utf8'));
await fs.mkdir(pdfDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const lesson of course.lessons) {
    const page = await browser.newPage();
    await page.setContent(`<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<style>
  @page { size: A4; margin: 18mm 16mm 20mm; }
  * { box-sizing: border-box; }
  body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #172033; font-size: 10.5pt; line-height: 1.55; }
  .cover { border-bottom: 3px solid #2563eb; padding-bottom: 18px; margin-bottom: 24px; }
  .eyebrow { color: #2563eb; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: 9pt; }
  h1 { font-size: 24pt; line-height: 1.15; margin: 8px 0 10px; }
  h2 { font-size: 16pt; margin-top: 26px; break-after: avoid; }
  h3 { font-size: 12pt; margin-top: 20px; break-after: avoid; }
  p, li { orphans: 3; widows: 3; }
  pre { white-space: pre-wrap; overflow-wrap: anywhere; background: #f3f5f8; border: 1px solid #d9dee8; border-radius: 8px; padding: 10px 12px; font-size: 9pt; break-inside: avoid; }
  code { font-family: "SFMono-Regular", Consolas, monospace; }
  blockquote { border-left: 4px solid #93c5fd; margin: 16px 0; padding: 4px 14px; color: #475569; }
  table { width: 100%; border-collapse: collapse; font-size: 9.5pt; }
  th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: left; }
  a { color: #1d4ed8; text-decoration: none; }
  img { max-width: 100%; }
  .meta { color: #64748b; font-size: 9pt; }
</style>
</head>
<body>
  <header class="cover">
    <div class="eyebrow">ITS Umbria · Cybersecurity · VAPT 2026</div>
    <h1>${lesson.title}</h1>
    <div class="meta">Materiale studente · versione generata automaticamente dalla repository del corso</div>
  </header>
  <main>${lesson.html}</main>
</body>
</html>`, { waitUntil: 'domcontentloaded' });

    await page.pdf({
      path: path.join(pdfDir, `${lesson.slug}.pdf`),
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: '<div style="font-size:8px;color:#64748b;width:100%;text-align:center;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
      margin: { top: '18mm', right: '16mm', bottom: '20mm', left: '16mm' },
    });
    await page.close();
  }
} finally {
  await browser.close();
}

console.log(`Generated ${course.lessons.length} lesson PDFs.`);
