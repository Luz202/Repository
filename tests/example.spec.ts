/*import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../page-objects/playwright-dev-page';

test('Getting Started should contain table of contents', async ({ page }) => {
  const pw = new PlaywrightDevPage(page);

  await pw.goto();
  await pw.getStarted();

  // Hay al menos 1 item en el ToC
  const count = await pw.tocList.count();
  expect(count).toBeGreaterThan(0);

  // El primero suele mencionar instalacion o introduccion (texto flexible)
  await expect(pw.tocList.first()).toContainText(/install|how to install|introduction/i);
});

test('Should show Page Object Model article', async ({ page }) => {
  const pw = new PlaywrightDevPage(page);
  await pw.openPOM();
  await expect(page.locator('article')).toContainText(/page object model/i);
});*/
