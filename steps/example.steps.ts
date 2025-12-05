// steps/example.steps.ts
import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "playwright";

import testData from "../testData.json";
import { LoginPage } from "../pages/login.page";
import { assertLoginSuccess, assertLoginFailure } from "../helpers/assertions";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let loginPage: LoginPage;

// ========================= HOOKS =========================
Before(async () => {
  browser = await chromium.launch({
    headless: false,
    slowMo: 300
  });

  context = await browser.newContext();
  page = await context.newPage();

  loginPage = new LoginPage(page);
});

After(async () => {
  await context.close();
  await browser.close();
});

// ========================= GIVEN =========================

Given("que navego a la página de login", async () => {
  await loginPage.navigate();
});

// ========================= WHEN =========================

When("inicio sesión con usuario válido", async () => {
  await loginPage.login(testData.validUser.email, testData.validUser.password);
});

When("inicio sesión con usuario inválido", async () => {
  await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);
});

// ========================= THEN =========================

Then("debería ver el dashboard cargado", async () => {
  await assertLoginSuccess(page);
  await page.waitForTimeout(2000);
});

Then("debería ver un mensaje de error de login", async () => {
  await assertLoginFailure(page);
  await page.waitForTimeout(2000);
});
