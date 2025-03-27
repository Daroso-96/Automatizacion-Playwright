import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LogoutPage } from '../pages/logoutPage';


test.describe('Cerrar sesión', () => {

    test('Cerrar session', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const logoutPage = new LogoutPage(page);

    
        await loginPage.goToLoginPage();
        await loginPage.login(process.env.USER_NAME || '', process.env.PASSWORD || '');
        await logoutPage.clickMenuHamburger();
        await logoutPage.clickLogout();
    });

});
