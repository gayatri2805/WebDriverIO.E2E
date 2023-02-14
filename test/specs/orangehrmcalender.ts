describe("OrangeHRM Demo website",()=>{
    it("Test valid user Calender",async()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await browser.maximizeWindow();
 
        const userName =await $("//input[@name='username']")
        const password =await $("//input[@type='password']")
        const btnSubmit =await $("//button[@type='submit']")

        await userName.setValue('Admin')
        await password.setValue('admin123')
        await btnSubmit.click()

        const time = await $('//a[@class="oxd-main-menu-item active"]')
               await time.click()

const attendance = await $('//span[@class="oxd-topbar-body-nav-tab-item"]')
await attendance.waitForClickable
await attendance.click()

 const myrecords = await $('//a[@role="menuitem"]')
 await myrecords.waitForClickable
await myrecords.click()

 const arrow = await $('//i[@class="oxd-icon bi-caret-up-fill"]')
 await arrow.waitForClickable
 await arrow.click()

 const date = await $('//i[@class="oxd-icon bi-calendar oxd-date-input-icon"]')
 await date.waitForClickable
await date.click()
await browser.pause(6000)


    })
})