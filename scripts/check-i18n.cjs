// Run with PLAYWRIGHT_MODULE pointing to an installed Playwright package.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const routes = ['/', '/suporte/', '/jogos/spingrade/', '/jogos/rumster/', '/privacidade/', '/termos/'];
const locales = ['en', 'pt', 'fr', 'es', 'zh', 'ja'];
const resources = Object.fromEntries(locales.map(l => [l, JSON.parse(fs.readFileSync(path.join(root, 'assets/i18n', l + '.json')))]));
const neutral = new Set(['R', 'Robb Studios.', 'Robb Studios — Play. Create. Together.', 'website']);
const capture = () => {
  const texts = [];
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, .language-switcher, [data-year]')) continue;
    const value = node.nodeValue.trim();
    if (value) texts.push(value);
  }
  document.querySelectorAll('[alt], [aria-label], meta[name="description"], meta[property^="og:"]').forEach(node => {
    if (node.closest('.language-switcher')) return;
    for (const attr of ['alt','aria-label','content']) if (node.hasAttribute(attr)) texts.push(node.getAttribute(attr));
  });
  return texts;
};
const server = http.createServer((req, res) => {
  let pathname = new URL(req.url, 'http://localhost').pathname;
  if (pathname.endsWith('/')) pathname += 'index.html';
  const file = path.join(root, pathname);
  fs.readFile(file, (error, bytes) => {
    if (error) { res.writeHead(404); return res.end(); }
    const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.json': 'application/json', '.css': 'text/css' };
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(bytes);
  });
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    for (const locale of locales) assert.deepEqual(Object.keys(resources[locale]).sort(), Object.keys(resources.en).sort());
    for (const route of routes) {
      await page.goto(base + route);
      await page.evaluate(() => localStorage.clear());
      await page.reload();
      await page.waitForSelector('html[data-i18n-ready="true"]');
      assert.equal(await page.locator('html').getAttribute('lang'), 'en');
      const original = await page.evaluate(capture);
      const missing = original.filter(t => /[\p{L}]/u.test(t) && !Object.hasOwn(resources.en, t) && !neutral.has(t));
      assert.deepEqual(missing, [], route + ': text missing from resources');
      // Deliberately seed the previous 2-hour cache to verify release invalidation.
      await page.evaluate(() => localStorage.setItem('robb-studios-i18n-zh-v1', JSON.stringify({ cachedAt: Date.now(), data: { Menu: 'WRONG' } })));
      for (const locale of locales) {
        await page.locator('[data-language-button]').click();
        await page.locator('[data-language-option="' + locale + '"]').click();
        await page.waitForLoadState('load');
        await page.waitForSelector('html[data-i18n-ready="true"]');
        assert.equal(await page.locator('html').getAttribute('lang'), locale === 'pt' ? 'pt-BR' : locale);
        const actual = await page.evaluate(capture);
        assert.deepEqual(actual, original.map(t => resources[locale][t] || t), route + ': incorrect ' + locale + ' content');
        await page.locator('[data-menu-button]').click();
        assert.equal(await page.locator('[data-menu-button]').textContent(), resources[locale].Close);
        await page.locator('[data-menu-button]').click();
        assert.equal(await page.locator('[data-menu-button]').textContent(), resources[locale].Menu);
      }
      console.log('PASS ' + route + ': all text nodes, metadata, accessible labels and menu in 6 languages');
    }
    await page.route('**/assets/i18n/**', r => r.abort());
    await page.evaluate(() => { localStorage.clear(); localStorage.setItem('robb-studios-language', 'zh'); });
    await page.goto(base + '/');
    await page.waitForSelector('html[data-i18n-ready="true"]');
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    assert.equal(await page.locator('.language-code').textContent(), 'EN');
    console.log('PASS English fallback on failed resource request');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
