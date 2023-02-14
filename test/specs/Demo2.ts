import saucecartelements from "../pageobjects/saucecartelements.js";
import cartelements from "../pageobjects/saucecartelements.js";
import SauceDemoProductPage from "../pageobjects/SauceDemoProduct.page.js";
import sauceLoginPage from "../pageobjects/Saucelogin.page.js"

describe("Sauce Demo website", async () => {
    it("Test multiple elements add to cart details", async () => {
        //url open
        await browser.url("https://www.saucedemo.com/");
        //login
        await sauceLoginPage.login('standard_user', 'secret_sauce')

        //logo display
        await SauceDemoProductPage.waitUntilLogoDisplayed()
        expect(SauceDemoProductPage.logo).toBeDisplayed()
 

        //checking size of cart
        await cartelements.addToCartElements()


        
       
    })
})