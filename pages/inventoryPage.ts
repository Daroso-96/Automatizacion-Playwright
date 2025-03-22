import { Page } from '@playwright/test';

export class InventoryPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

 async addProductToCart(productName:string){
    const productSelector = `text=${productName} >> xpath=//ancestor::div[contains(@class, 'inventory_item')]//button`;
    await this.page.locator(productSelector).click();

 }
 async getCartItemCount() {
    return this.page.locator('.shopping_cart_badge').textContent();
}
}