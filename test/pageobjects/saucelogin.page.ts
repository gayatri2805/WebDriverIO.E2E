class sauceLoginPage {

    public get inputUsername() {
        return $("//input[@id='user-name']");
    }

    public get inputPassword() {
        return $("//input[@id='password']");
    }

    public get btnSubmit() {
        return $("//input[@type='submit']");
    }
    public async login(userName: string, password: string) {


        await this.inputUsername.setValue(userName)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }
}
export default new sauceLoginPage()