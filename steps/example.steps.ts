import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';

let page: Page;
let Browser: Browser;


         Given('que navego a la página de login', async function () {
           Browser = await chromium.launch({ headless: false });
           const context = await Browser.newContext();
           page = await context.newPage();
           await page.goto('https://app.fxreplay.com/login');
         });

         Given('ingreso el correo {string}', async function (string) {
           await page.fill('input[name="email"]', string);
         });

         Given('ingreso la contraseña {string}', async function (string) {
           await page.fill('input[name="password"]', string);
         });

         When('hago clic en el botón de login', function () {
           
         });

         Then('debería ver el dashboard cargado', function () {
           
         });


         Given('que navego a la página de login', function () {
           
         });

         Given('ingreso el correo {string}', function (string) {
           
         });


         Given('ingreso la contraseña {string}', function (string) {
           
         });

         When('hago clic en el botón de login', function () {
           
         });
   

         Then('debería ver un mensaje de error de login', function () {
           
         });