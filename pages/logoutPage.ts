import { Page } from '@playwright/test';

export class LogoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async clickMenuHamburger(){
        const menuHamburger = this.page.locator('#react-burger-menu-btn');
        await menuHamburger.waitFor({ state: 'visible' });
       await menuHamburger.click();
    }
    async clickLogout(){
        const buttonLogout = this.page.locator('#logout_sidebar_link');
        await buttonLogout.click();
    }
}