import { Page } from '@playwright/test';

export class NullShoppingPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async SelectCart(){
        const cartLink = this.page.locator('[data-test="shopping-cart-link"]');
        await cartLink.waitFor({ state: 'visible' });
        await cartLink.click();
    }

    async selectButtonCheckout(){
        const checkout = this.page.locator('#checkout');
        await checkout.click();
    }
    async fillOutForm(name:string,secondname:string,code:string){
        const firstName = this.page.locator('#first-name');
        const lastName = this.page.locator('#last-name');
        const zipcode = this.page.locator('#postal-code');
    
        await firstName.waitFor({ state: 'visible' }); // Espera a que el input esté visible
        await firstName.fill(name);
        await lastName.fill(secondname);
        await zipcode.fill(code);
    }
    async selectButtonContinue(){
        const buttonContinue = this.page.locator('#continue');
        await buttonContinue.waitFor({ state: 'visible' }); // Espera a que sea visible
        await buttonContinue.click();
    }
    async selectButtonFin(){
        const buttonFin = this.page.locator('#finish');
        await buttonFin.waitFor({ state: 'visible' }); 
        buttonFin.click();
    }

    async selectButtonBack() {
        const buttonBack = this.page.locator('#back-to-products');
        await buttonBack.waitFor({ state: 'visible' });  
        await buttonBack.click();  // Asegúrate de que Playwright espere el clic
    }

}