import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { NullShoppingPage } from '../pages/nullShoppingPage';
import fs from 'fs';
const rawData = fs.readFileSync('data/data.json', 'utf8');
const users = JSON.parse(rawData);
const randomUser = users[Math.floor(Math.random() * users.length)];

test.describe('Carrito de compra vacio', () => {

    test('Agregar producto al carrito', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const nullshoppingPage = new NullShoppingPage(page);

    
        await loginPage.goToLoginPage();
        await loginPage.login(process.env.USER_NAME || '', process.env.PASSWORD || '');

        
        await nullshoppingPage.SelectCart();
        await nullshoppingPage.selectButtonCheckout();
        await nullshoppingPage.fillOutForm(randomUser.firstName, randomUser.lastName,randomUser.zip);
        await nullshoppingPage.selectButtonContinue();
        await nullshoppingPage.selectButtonFin();
        await nullshoppingPage.selectButtonBack();

       
     
    });

});