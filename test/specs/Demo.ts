describe("Sauce Demo website",()=>{
   it("Test valid user details",async()=>{
       await browser.url("https://www.saucedemo.com/");
       await browser.maximizeWindow();

       const userName =await $("//input[@id='user-name']")
       const password =await $("//input[@id='password']")
       const btnSubmit =await $("//input[@type='submit']")
       const logo =await $(".app_logo")
      
       await userName.setValue('standard_user')
       await password.setValue('secret_sauce')
       await btnSubmit.click()
       await expect(logo).toBeDisplayed()
       await browser.pause(2000)

       const backpack = await $("//img[@alt='Sauce Labs Backpack']")
       const addcart = await $("//button[@id='add-to-cart-sauce-labs-backpack']")
       const name = await $("//div[text()='Sauce Labs Backpack']")
       await addcart.click()
       await expect(name).toBeDisplayed()
       await browser.pause(3000)

       const bikelight = await $("//div[text()='Sauce Labs Bike Light']")
       const addcart2 = await $("//button[@id='add-to-cart-sauce-labs-bike-light']")
       const name2 = await $("//div[text()='Sauce Labs Bike Light']")
       await addcart2.click()
       await expect(name2).toBeDisplayed()
       await browser.pause(3000)

       const viewcart = await $("//a[@class='shopping_cart_link']")
       await viewcart.click()
       await browser.pause(5000)
    })
      })