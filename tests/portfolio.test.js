/**
 * Portfolio Test Suite
 * Run with: npm test (requires Node 18+)
 * Tests HTML structure, links, and content integrity
 */

const fs   = require('fs');
const path = require('path');

const HTML = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (e) {
    console.error(`  ✗ ${name}`);
    console.error(`    → ${e.message}`);
    failed++;
  }
}
function assert(cond, msg) { if (!cond) throw new Error(msg); }
function assertContains(str, msg) { assert(HTML.includes(str), `Missing: "${str}" — ${msg}`); }
function assertNotContains(str, msg) { assert(!HTML.includes(str), `Should not contain: "${str}" — ${msg}`); }

/* ── STRUCTURE ────────────────────────────────────────────────── */
console.log('\nStructure');
test('has DOCTYPE', () => assert(HTML.startsWith('<!DOCTYPE html>'), 'Missing DOCTYPE'));
test('has <html lang="en">', () => assertContains('lang="en"', 'Accessibility: missing lang'));
test('has <title>', () => assertContains('<title>', 'Missing title tag'));
test('has viewport meta', () => assertContains('name="viewport"', 'Missing viewport meta'));
test('has charset meta', () => assertContains('charset="UTF-8"', 'Missing charset'));
test('has OG tags', () => assertContains('og:title', 'Missing Open Graph tags'));

/* ── CONTENT ──────────────────────────────────────────────────── */
console.log('\nContent');
test('name is Shahnawaz Shaikh (not Ahmed)', () => {
  assertContains('Shahnawaz Shaikh', 'Copyright should say Shahnawaz Shaikh');
  assertNotContains('Shahnawaz Ahmed', 'Old name "Ahmed" should not appear');
});
test('correct email address', () => {
  assertContains('shaikhshahnwaaz84@gmail.com', 'Correct email missing');
  assertNotContains('sshaikhshahnwaaz84', 'Wrong email with double-s should not exist');
});
test('correct LinkedIn URL', () => assertContains('shahnawaz-shaikh-759245371', 'LinkedIn URL incorrect'));
test('BSc started 2025', () => assertContains('2025–Now', 'BSc start year should be 2025'));
test('HSC year 2024-25', () => assertContains('2024–25', 'HSC date should be 2024-25'));
test('has all 4 projects', () => {
  assertContains('Devora',        'Missing project: Devora');
  assertContains('OtakuVault',    'Missing project: OtakuVault');
  assertContains('PortfolioForge','Missing project: PortfolioForge');
  assertContains('AutoReadme',    'Missing project: AutoReadme');
});
test('no old project NAFRI as featured', () => {
  const projectSection = HTML.slice(HTML.indexOf('id="projects"'), HTML.indexOf('id="experience"'));
  assert(!projectSection.includes('<div class="ptitle">NAFRI'), 'NAFRI should not be a featured project card');
});
test('no "GitHawk" (replaced by Devora)', () => assertNotContains('>GitHawk<', 'GitHawk still listed, should be Devora'));

/* ── LINKS ────────────────────────────────────────────────────── */
console.log('\nLinks & Assets');
test('Devora live link present',         () => assertContains('shaikhshahnawaz13.github.io/devora', 'Devora URL missing'));
test('OtakuVault live link present',     () => assertContains('otakuvault-app.netlify.app', 'OtakuVault URL missing'));
test('PortfolioForge live link present', () => assertContains('shaikhshahnawaz13.github.io/portfolioforge', 'PortfolioForge URL missing'));
test('AutoReadme live link present',     () => assertContains('shaikhshahnawaz13.github.io/autoreadme', 'AutoReadme URL missing'));
test('GitHub profile link present',      () => assertContains('github.com/shaikhshahnawaz13', 'GitHub profile link missing'));
test('FormSubmit action correct',        () => assertContains('formsubmit.co/shaikhshahnwaaz84@gmail.com', 'FormSubmit email incorrect'));
test('CV download link present',         () => assertContains('cv.shahnawaz.pdf', 'CV link missing'));
test('favicon linked',                   () => assertContains('rel="icon"', 'Favicon link missing'));

/* ── PERFORMANCE ──────────────────────────────────────────────── */
console.log('\nPerformance');
test('no cursor trail DOM injection', () => assertNotContains("className = 'ctrail'", 'Cursor trail was removed for perf'));
test('GSAP loaded from CDN',          () => assertContains('gsap.min.js', 'GSAP CDN link missing'));
test('ScrollTrigger loaded',          () => assertContains('ScrollTrigger.min.js', 'ScrollTrigger CDN link missing'));
test('prefers-reduced-motion handled',() => assertContains('prefers-reduced-motion', 'Accessibility: missing reduced-motion check'));

/* ── NO STALE CODE ────────────────────────────────────────────── */
console.log('\nClean Code');
test('no dark mode CSS',        () => assertNotContains('body.dark', 'Stale dark mode CSS found'));
test('no blog CSS',             () => assertNotContains('.blog-card', 'Stale blog CSS found'));
test('no testimonials CSS',     () => assertNotContains('.testi-card', 'Stale testimonials CSS found'));
test('no scroll progress bar',  () => assertNotContains("id='sprog'", 'Scroll progress bar should be removed'));

/* ── SUMMARY ──────────────────────────────────────────────────── */
console.log(`\n${'─'.repeat(40)}`);
console.log(`  ${passed} passed  |  ${failed} failed  |  ${passed + failed} total`);
console.log('─'.repeat(40));
if (failed > 0) { console.error('\n  Some tests failed. Fix before deploying.\n'); process.exit(1); }
else { console.log('\n  All tests passed. Ready to deploy! 🚀\n'); }
