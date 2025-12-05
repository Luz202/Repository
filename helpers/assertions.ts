import { expect, Page } from '@playwright/test';

/*export const assertLoginSuccess = async (page: Page) => {
  await expect(page.locator('nav')).toBeVisible({ timeout: 15000 });
};

export const assertLoginFailure = async (page: Page) => {
  await expect(page).toHaveURL(/login/);
};*/

export async function assertLoginSuccess(page: Page) {
  await expect(page.getByText("Replay")).toBeVisible({ timeout: 5000 });
}

export async function assertLoginFailure(page: Page) {
  await expect(page.getByText("Invalid email or password")).toBeVisible({
    timeout: 5000
  });
}


