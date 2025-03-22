import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';

test.describe('Carrito de compras', () => {

    test('Agregar producto al carrito', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

    
        await loginPage.goToLoginPage();
        await loginPage.login(process.env.USER_NAME || '', process.env.PASSWORD || '');

        
        await inventoryPage.addProductToCart('Sauce Labs Onesie');

       
        const cartCount = await inventoryPage.getCartItemCount();
        expect(cartCount).toBe('1');
    });

});
