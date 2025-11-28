import { Page } from '@playwright/test';

export class LoginPage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://app.fxreplay.com/en-US/login');
  }

 async login(email: string, password: string) {
  await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();


  await this.page.waitForTimeout(1000);
}
}
