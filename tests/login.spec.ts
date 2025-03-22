import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
    
    test('Login exitoso con credenciales correctas', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goToLoginPage();
        await loginPage.login(process.env.USER_NAME || '', process.env.PASSWORD || '');

        await expect(page).toHaveURL(/inventory.html/);
    });

    test('Login fallido con credenciales incorrectas', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goToLoginPage();
        await loginPage.login(process.env.FAKE_USER || '', process.env.FAKE_PASSWORD || '');

        // ✅ Validar que el mensaje de error es visible
        const errorMessage = await loginPage.getErrorMessage();
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

        // ✅ Validar que el usuario sigue en la página de login
        const loginFailed = await loginPage.isLoginFailed();
        expect(loginFailed).toBeTruthy();
    });

});
