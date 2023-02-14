class sauceDemoProductPage {

    public get logo() {
        return $(".app_logo")
    }
    public async waitUntilLogoDisplayed() {
        await this.logo.waitForDisplayed()
        
    }


}
export default new sauceDemoProductPage()