import { Page, Locator, expect } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly header: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: /get started/i });
    this.header = page.locator('main article h1, article h1');
    this.tocList = page.locator('nav[aria-label="Table of contents"] li, .table-of-contents li');
  }

  async goto() {
    await this.page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
  }

  async getStarted() {
 
    await this.page.setViewportSize({ width: 1280, height: 900 });

    // Click + esperar URL en una sola promesa (evita condiciones de carrera)
    await Promise.all([
      this.page.waitForURL(/\/docs\/(intro|getting-started)/i),
      this.getStartedLink.click(),
    ]);

    // Verificar encabezado con texto esperado, tolerante a cambios de copy
    const expectedTexts = ['installation', 'intro', 'introduction', 'getting started'];
    await expect(this.header).toContainText(new RegExp(expectedTexts.join('|'), 'i'));
  }

  async openPOM() {
    await this.page.goto('https://playwright.dev/docs/pom', { waitUntil: 'domcontentloaded' });
    await expect(this.page.getByRole('heading', { name: /page object model/i })).toBeVisible();
  }
}
