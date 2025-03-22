import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login en sauceDemo', () => {


test('Login exitoso con usuario valido', async ({ page }) => {
  const loginPage = new LoginPage(page);
        
  await loginPage.goToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');

  expect(await loginPage.isLoginSuccessful()).toBeTruthy();
  
});

test('Login fallido con usuario incorrecto', async ({page}) =>{
  const loginPage = new LoginPage(page);
        
  await loginPage.goToLoginPage();
  await loginPage.login('standard_user', 'password_falsa');
  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  const loginFailed = await loginPage.isLoginFailed();
  expect(loginFailed).toBeTruthy();
  /*
  await page.goto('https://www.saucedemo.com/');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'password_errada');
  await page.click('#login-button');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');*/
})

});
