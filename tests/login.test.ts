import testData from '../testData.json';
import { test, expect } from '../fixtures/fixtures';   
import { assertLoginSuccess, assertLoginFailure } from '../helpers/assertions';  

test('Login válido en FXReplay', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login(testData.validUser.email, testData.validUser.password);

  await assertLoginSuccess(loginPage.page);  
});

test('Login inválido en FXReplay', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);

  await assertLoginFailure(loginPage.page);   
   
});
