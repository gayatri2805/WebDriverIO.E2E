describe('My Login application',async () => {

    it("Test valid user details",async () => {
    
    await browser.url("https://www.saucedemo.com/");
    
    const userName=await $("//input[@id='user-name']")
    
    const password=await $("//input[@id='password']")
    
    const btnSubmit=await $("//input[@type='submit']")
    
    
    
    const logo= await $(".app_logo")
    
    
    
    await userName.setValue('standard_user')
    
    await password.setValue('secret_sauce')
    
    await btnSubmit.click()
    
    
    
    expect(logo).toBeDisplayed()
    
    })
})