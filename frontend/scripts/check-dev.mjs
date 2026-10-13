import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js';
import config from '../next.config.mjs';

assert.notEqual(config(PHASE_DEVELOPMENT_SERVER).distDir, config(PHASE_PRODUCTION_BUILD).distDir);
// Run while `npm run dev` is active, including after a production build.
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => {
    if (response.url().includes('/_next/') && response.status() >= 400) {
      errors.push(`${response.status()} ${response.url()}`);
    }
  });
  for (const route of ['/', '/about/', '/projects/', '/projects/mbr-city/', '/contact/']) {
    const response = await page.goto(`http://127.0.0.1:3000${route}`);
    assert.equal(response.status(), 200, route);
    await page.locator('h1').waitFor();
  }
  await page.goto('http://127.0.0.1:3000/projects/');
  await page.getByRole('button', { name: 'Residential' }).click();
  assert.equal(await page.locator('.project-card').count(), 2);
  assert.deepEqual(errors, []);
  console.log('PASS: isolated dev/build directories; five development routes return 200; bundles and project filtering work.');
} finally {
  await browser.close();
}
