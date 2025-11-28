import { expect, Page } from '@playwright/test';

export const assertLoginSuccess = async (page: Page) => {
  await expect(page.locator('nav')).toBeVisible({ timeout: 15000 });
};

export const assertLoginFailure = async (page: Page) => {
  await expect(page).toHaveURL(/login/);
};
