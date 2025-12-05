import { expect, Page } from '@playwright/test';

/*export const assertLoginSuccess = async (page: Page) => {
  await expect(page.locator('nav')).toBeVisible({ timeout: 15000 });
};

export const assertLoginFailure = async (page: Page) => {
  await expect(page).toHaveURL(/login/);
};*/
export const assertLoginSuccess = async (page: Page) => {
  await expect(page.getByRole("navigation")).toBeVisible({ timeout: 8000 });
};

export const assertLoginFailure = async (page: Page) => {
  await expect(page.getByRole("alert")).toBeVisible({ timeout: 8000 });
};

