import { Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
export class LoginPage {
    private page:Page;
    constructor(page:Page) {
        this.page  = page;
    }
    async goToLoginPage() {
        await this.page.goto(process.env.BASE_URL || '');
    }
    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
    async isLoginSuccessful() {
        return this.page.url().includes('inventory.html');
    }
    async getErrorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    async isLoginFailed() {
        return this.page.url() === 'https://www.saucedemo.com/';
    }
}